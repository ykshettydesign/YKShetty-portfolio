import React, { useEffect, useRef } from 'react'

/**
 * WebGLCanvas — a render-loop-ready stub.
 * ------------------------------------------------------------------
 * Drop a Three.js / raw-WebGL renderer into the marked sections below.
 * The scaffolding already handles the parts that leak if you get them
 * wrong: DPR-aware sizing, a resize listener, a rAF loop, WebGL
 * context-loss/restore, and a complete teardown that cancels the frame,
 * removes every listener, and disposes the context. `theme` is passed
 * so the future scene can react to light/dark.
 */
export default function WebGLCanvas({ theme = 'light', className, style }) {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return undefined

    const parent = canvas.parentElement || canvas
    let rafId = null
    let disposed = false

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      const { clientWidth: w, clientHeight: h } = parent
      canvas.width = Math.max(1, Math.floor(w * dpr))
      canvas.height = Math.max(1, Math.floor(h * dpr))
      canvas.style.width = `${w}px`
      canvas.style.height = `${h}px`
      // → renderer.setSize(w, h); renderer.setPixelRatio(dpr)
    }

    // ── Placeholder render loop (replace with the real scene) ──
    const render = () => {
      if (disposed) return
      // → renderer.render(scene, camera)
      rafId = requestAnimationFrame(render)
    }

    // ── WebGL context-loss handling ──
    const onContextLost = (e) => {
      e.preventDefault()
      if (rafId) cancelAnimationFrame(rafId)
      rafId = null
    }
    const onContextRestored = () => {
      // → rebuild GL resources here, then resume
      resize()
      if (!disposed && rafId === null) render()
    }

    canvas.addEventListener('webglcontextlost', onContextLost, false)
    canvas.addEventListener('webglcontextrestored', onContextRestored, false)

    let ro = null
    if (typeof ResizeObserver !== 'undefined') {
      ro = new ResizeObserver(resize)
      ro.observe(parent)
    } else {
      window.addEventListener('resize', resize)
    }

    resize()
    render()

    // ── Teardown: no dangling frames, listeners or GL contexts ──
    return () => {
      disposed = true
      if (rafId) cancelAnimationFrame(rafId)
      canvas.removeEventListener('webglcontextlost', onContextLost)
      canvas.removeEventListener('webglcontextrestored', onContextRestored)
      if (ro) ro.disconnect()
      else window.removeEventListener('resize', resize)
      // → renderer?.dispose(); scene resources freed
      const gl = canvas.getContext('webgl2') || canvas.getContext('webgl')
      const lose = gl && gl.getExtension && gl.getExtension('WEBGL_lose_context')
      if (lose) lose.loseContext()
    }
  }, [])

  // Keep the future scene aware of the active theme without re-mounting.
  useEffect(() => {
    const canvas = canvasRef.current
    if (canvas) canvas.dataset.theme = theme
    // → update scene background / material uniforms for `theme`
  }, [theme])

  return (
    <canvas
      ref={canvasRef}
      className={className}
      aria-hidden="true"
      style={{ display: 'block', width: '100%', height: '100%', ...style }}
    />
  )
}
