// Dusty-particle shader + a small builder for sampling point clouds onto the
// tree skeleton. Each particle carries a `growth` value (when it appears) so
// the same staggered growth reveal as the mesh version still works — but here
// everything is soft, drifting, glowing dust.
import * as THREE from "three";

export function makeDustMaterial(opts = {}) {
  return new THREE.ShaderMaterial({
    transparent: true,
    depthWrite: false,
    depthTest: true,
    blending: THREE.AdditiveBlending,
    uniforms: {
      uReveal: { value: 0 }, // 0..1 growth reveal driver
      uTime: { value: 0 },
      uSize: { value: opts.size ?? 2.0 },
      uDrift: { value: opts.drift ?? 0.14 }, // floating-dust amplitude
      uOpacity: { value: opts.opacity ?? 1 },
      uFall: { value: 1 }, // 1 = settled (seed drop-in uses <1)
      uFallHeight: { value: opts.fallHeight ?? 0 },
      // ripen: <0 means "use per-particle aColor"; >=0 blends unripe->ripe
      uRipen: { value: -1 },
      uUnripe: { value: new THREE.Color("#7cae3a") },
      uRipe: { value: new THREE.Color("#cf2130") },
      uBlush: { value: new THREE.Color("#f2544a") },
      // theme: dark uses low alpha + additive glow; light uses higher alpha
      // (normal blend, set on the material) + darkened colour to read on white
      uAlpha: { value: 0.28 },
      uDarken: { value: 1.0 },
    },
    vertexShader: /* glsl */ `
      attribute float aGrowth;
      attribute vec3 aColor;
      attribute float aRand;
      attribute float aSize;

      uniform float uReveal, uTime, uSize, uDrift, uFall, uFallHeight, uRipen;
      uniform vec3 uUnripe, uRipe, uBlush;

      varying float vAppear;
      varying vec3 vColor;
      varying float vRand;

      void main() {
        float w = 0.16;                        // per-particle reveal window
        float start = aGrowth * (1.0 - w);
        float appear = smoothstep(start, start + w, uReveal);
        vAppear = appear;
        vRand = aRand;

        // colour: ripen mode for fruit, else the baked colour
        vec3 col = aColor;
        if (uRipen >= 0.0) {
          col = mix(uUnripe, uRipe, uRipen);
          col = mix(col, uBlush, uRipen * 0.3 * (0.5 + 0.5 * sin(aRand * 30.0)));
        }
        vColor = col;

        vec3 pos = position;
        // seed drop-in from above
        pos.y += (1.0 - uFall) * uFallHeight;
        // floating dust drift (always a little, more once revealed)
        vec3 d = vec3(
          sin(uTime * 0.6 + aRand * 40.0),
          sin(uTime * 0.5 + aRand * 57.0),
          sin(uTime * 0.45 + aRand * 31.0)
        );
        pos += d * uDrift * (0.4 + 0.6 * appear);

        vec4 mv = modelViewMatrix * vec4(pos, 1.0);
        gl_Position = projectionMatrix * mv;
        // grow in: scale with appearance, attenuate with distance (kept small
        // so dense dust reads as haze, not a solid blown-out mass)
        gl_PointSize = uSize * aSize * (0.3 + 0.7 * appear) * (150.0 / -mv.z);
      }
    `,
    fragmentShader: /* glsl */ `
      precision highp float;
      uniform float uOpacity, uAlpha, uDarken;
      varying float vAppear;
      varying vec3 vColor;
      varying float vRand;

      void main() {
        vec2 uv = gl_PointCoord - 0.5;
        float dd = length(uv);
        if (dd > 0.5) discard;
        float a = smoothstep(0.5, 0.0, dd);
        a = pow(a, 1.9);
        float tw = 0.75 + 0.25 * sin(vRand * 90.0);
        // uDarken pulls colours down for light mode (so they read on white);
        // uAlpha sets per-point coverage (low for additive dark, high for normal light)
        vec3 col = vColor * uDarken * (0.55 + 0.35 * tw);
        gl_FragColor = vec4(col, a * vAppear * uOpacity * uAlpha);
      }
    `,
  });
}

// ---- sampling builder ---------------------------------------------------
const _v = new THREE.Vector3();
const _q = new THREE.Quaternion();
const _up = new THREE.Vector3(0, 1, 0);

export class DustBuilder {
  constructor() {
    this.pos = [];
    this.growth = [];
    this.color = [];
    this.rand = [];
    this.size = [];
  }

  push(x, y, z, g, col, size) {
    this.pos.push(x, y, z);
    this.growth.push(g);
    this.color.push(col.r, col.g, col.b);
    this.rand.push(Math.random());
    this.size.push(size);
  }

  // dust along a curve, with radial jitter — used for trunk, branches, roots
  addCurve(curve, radius, count, gStart, gEnd, color, sizeMin, sizeMax) {
    for (let i = 0; i < count; i++) {
      const t = Math.random();
      const p = curve.getPoint(t);
      // gaussian-ish radial offset (denser near the core, wispy at the edge)
      const rr = radius * (0.3 + Math.pow(Math.random(), 0.5)) * 1.1;
      const a = Math.random() * Math.PI * 2;
      const py = (Math.random() - 0.5) * radius;
      p.x += Math.cos(a) * rr;
      p.z += Math.sin(a) * rr;
      p.y += py;
      const g = gStart + (gEnd - gStart) * t;
      this.push(p.x, p.y, p.z, g, color, sizeMin + Math.random() * (sizeMax - sizeMin));
    }
  }

  // an oriented ellipsoid puff — used for leaf clusters
  addLeafPuff(center, normal, length, width, count, growth, color, sizeMin, sizeMax) {
    _q.setFromUnitVectors(_up, normal);
    for (let i = 0; i < count; i++) {
      // local blade-ish distribution: long along Y, thin across
      const v = Math.pow(Math.random(), 0.75);
      const spread = Math.sin(Math.max(0, v) * Math.PI);
      const lx = (Math.random() * 2 - 1) * spread * width;
      const ly = v * length;
      const lz = (Math.random() * 2 - 1) * spread * width * 0.4;
      _v.set(lx, ly, lz).applyQuaternion(_q).add(center);
      this.push(
        _v.x, _v.y, _v.z, growth, color,
        sizeMin + Math.random() * (sizeMax - sizeMin)
      );
    }
  }

  // a soft ovoid blob — used for seed & fruit
  addBlob(center, rx, ry, rz, count, growth, color, sizeMin, sizeMax) {
    for (let i = 0; i < count; i++) {
      const u = Math.random();
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const r = Math.pow(u, 0.6); // bias toward the shell
      const x = center.x + r * Math.sin(phi) * Math.cos(theta) * rx;
      const y = center.y + r * Math.cos(phi) * ry;
      const z = center.z + r * Math.sin(phi) * Math.sin(theta) * rz;
      this.push(x, y, z, growth, color, sizeMin + Math.random() * (sizeMax - sizeMin));
    }
  }

  build(material) {
    const g = new THREE.BufferGeometry();
    g.setAttribute("position", new THREE.Float32BufferAttribute(this.pos, 3));
    g.setAttribute("aGrowth", new THREE.Float32BufferAttribute(this.growth, 1));
    g.setAttribute("aColor", new THREE.Float32BufferAttribute(this.color, 3));
    g.setAttribute("aRand", new THREE.Float32BufferAttribute(this.rand, 1));
    g.setAttribute("aSize", new THREE.Float32BufferAttribute(this.size, 1));
    const pts = new THREE.Points(g, material);
    pts.frustumCulled = false;
    return pts;
  }
}
