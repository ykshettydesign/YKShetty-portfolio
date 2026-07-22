import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { DustWorld } from '../practice/particles/world.js'
import { clamp } from '../practice/config.js'

const V = (x, y, z) => new THREE.Vector3(x, y, z)

// Camera choreography — ported verbatim from the concept's main.js.
const CAM = [
  { p: 0.0, pos: V(0, 6.5, 21), tgt: V(0, 1.6, 0) },
  { p: 0.16, pos: V(2.2, 5.2, 18), tgt: V(0, 0.6, 0) },
  { p: 0.34, pos: V(4.5, -1.2, 14), tgt: V(0, -2.4, 0) },
  { p: 0.5, pos: V(2.6, 2.6, 13), tgt: V(0, 1.2, 0) },
  { p: 0.72, pos: V(-3.2, 7.5, 27), tgt: V(0, 7.0, 0) },
  { p: 0.86, pos: V(6.0, 11.5, 23), tgt: V(0.4, 9.5, 0) },
  { p: 1.0, pos: V(0, 8.5, 34), tgt: V(0, 8, 0) },
]

const smooth = (t) => t * t * (3 - 2 * t)

// Card stage boundaries in tree-progress space (from the concept).
export function cardStage(p) {
  if (p < 0.18) return 0
  if (p < 0.5) return 1
  if (p < 0.78) return 2
  return 3
}

function disposeScene(scene) {
  scene.traverse((obj) => {
    if (obj.geometry) obj.geometry.dispose()
    const mats = Array.isArray(obj.material) ? obj.material : obj.material ? [obj.material] : []
    mats.forEach((m) => {
      Object.values(m).forEach((v) => {
        if (v && v.isTexture) v.dispose()
      })
      m.dispose()
    })
  })
}

/**
 * PracticeTree — the seed→sprout point-cloud, mounted as a fixed/sticky
 * transparent canvas. Scroll progress is read *section-local* from
 * `sectionRef` (not whole-page scroll) so the tree only responds while the
 * Practice section is on screen. The canvas is transparent (alpha + clear
 * colour 0), so the themed section background behind it shows through — that
 * is the entire theme behaviour; the particle colours never change.
 *
 * `onStageChange(stage)` fires when the active story-card stage changes.
 * All three.js resources, the rAF loop and every listener are disposed on
 * unmount (StrictMode-double-mount safe).
 */
export default function PracticeTree({ sectionRef, onStageChange }) {
  const canvasRef = useRef(null)
  const stageCbRef = useRef(onStageChange)
  stageCbRef.current = onStageChange

  useEffect(() => {
    const canvas = canvasRef.current
    const section = sectionRef.current
    if (!canvas || !section) return undefined

    const prefersReduced =
      window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches

    // WebGL may be unavailable in restrictive/virtualized corporate browsers
    // (e.g. Zscaler browser isolation, headless/software-rendered environments).
    // Creating the renderer throws there; catch it and degrade gracefully to a
    // transparent canvas so the section (heading + story cards) still renders
    // instead of the whole app unmounting into a black screen.
    let renderer
    try {
      renderer = new THREE.WebGLRenderer({
        canvas,
        antialias: true,
        alpha: true,
        powerPreference: 'high-performance',
      })
    } catch (err) {
      if (import.meta.env && import.meta.env.DEV) {
        console.warn('[PracticeTree] WebGL unavailable — skipping 3D scene:', err)
      }
      return undefined
    }
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setClearColor(0x000000, 0)
    renderer.toneMapping = THREE.ACESFilmicToneMapping
    renderer.toneMappingExposure = 1.1

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(
      50,
      window.innerWidth / window.innerHeight,
      0.1,
      400,
    )
    camera.position.set(0, 5, 12)

    const world = new DustWorld(scene)

    let isMobile = false
    const _pos = new THREE.Vector3()
    const _tgt = new THREE.Vector3()

    const updateCamera = (p, time) => {
      let i = 0
      while (i < CAM.length - 2 && p > CAM[i + 1].p) i++
      const a = CAM[i]
      const b = CAM[i + 1]
      const lt = smooth(clamp((p - a.p) / (b.p - a.p)))
      _pos.lerpVectors(a.pos, b.pos, lt)
      _tgt.lerpVectors(a.tgt, b.tgt, lt)
      _pos.x += Math.sin(time * 0.22) * 0.3
      _pos.y += Math.cos(time * 0.18) * 0.18
      if (isMobile) _pos.sub(_tgt).multiplyScalar(1.28).add(_tgt)
      camera.position.copy(_pos)
      camera.lookAt(_tgt)
    }

    const applyLayout = () => {
      const W = window.innerWidth
      const H = window.innerHeight
      isMobile = W < 821
      camera.aspect = W / H
      camera.clearViewOffset()
      renderer.setSize(W, H)
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
      if (isMobile) camera.setViewOffset(W, H, 0, H * 0.2, W, H)
      else camera.setViewOffset(W, H, W * 0.22, 0, W, H)
      camera.updateProjectionMatrix()
    }
    applyLayout()

    // Section-local scroll progress.
    const computeP = () => {
      const rect = section.getBoundingClientRect()
      const total = section.offsetHeight - window.innerHeight
      const scrolled = clamp(-rect.top, 0, Math.max(0, total))
      return total > 0 ? clamp(scrolled / total) : 0
    }

    let lastStage = -1
    const emitStage = (p) => {
      const s = cardStage(p)
      if (s !== lastStage) {
        lastStage = s
        if (stageCbRef.current) stageCbRef.current(s)
      }
    }

    const clock = new THREE.Clock()
    let smoothedP = computeP()
    let rafId = null

    const renderStatic = () => {
      const p = computeP()
      smoothedP = p
      world.update(p, 0)
      updateCamera(p, 0)
      emitStage(p)
      renderer.render(scene, camera)
    }

    const tick = () => {
      const dt = Math.min(clock.getDelta(), 0.05)
      const time = clock.elapsedTime
      const targetP = computeP()
      const k = 1 - Math.pow(0.0015, dt)
      smoothedP += (targetP - smoothedP) * k
      world.update(smoothedP, time)
      updateCamera(smoothedP, time)
      emitStage(smoothedP)
      renderer.render(scene, camera)
      rafId = requestAnimationFrame(tick)
    }

    const onResize = () => {
      applyLayout()
      if (prefersReduced) renderStatic()
    }
    window.addEventListener('resize', onResize)

    // If the GL context is lost after init (common under browser isolation /
    // GPU resets), stop the render loop rather than letting three throw inside
    // the rAF tick. preventDefault lets the browser attempt a restore.
    const onContextLost = (e) => {
      e.preventDefault()
      if (rafId) {
        cancelAnimationFrame(rafId)
        rafId = null
      }
    }
    canvas.addEventListener('webglcontextlost', onContextLost, false)

    let onScroll = null
    if (prefersReduced) {
      // No idle animation: render one frame per scroll/resize event.
      onScroll = () => renderStatic()
      window.addEventListener('scroll', onScroll, { passive: true })
      renderStatic()
    } else {
      rafId = requestAnimationFrame(tick)
    }

    return () => {
      if (rafId) cancelAnimationFrame(rafId)
      window.removeEventListener('resize', onResize)
      if (onScroll) window.removeEventListener('scroll', onScroll)
      canvas.removeEventListener('webglcontextlost', onContextLost, false)
      disposeScene(scene)
      scene.clear()
      renderer.dispose()
      renderer.forceContextLoss?.()
    }
  }, [sectionRef])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', display: 'block', zIndex: 0 }}
    />
  )
}
