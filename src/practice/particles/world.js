import * as THREE from "three";

import { generateTree } from "../tree.js";
import { PALETTE, clamp, mix, range } from "../config.js";
import { makeDustMaterial, DustBuilder } from "./dust.js";

const V = (x, y, z) => new THREE.Vector3(x, y, z);

// The falling apple (and the branch carrying it) is nudged down-and-right of
// its generated tip so the drop reads clearly. Shared so the branch bends to
// meet the relocated fruit.
const FALL_OFFSET = V(1.2, -1.0, 0);

export class DustWorld {
  constructor(scene) {
    this.scene = scene;
    // BIGGER, fuller crown: longer + wider branches, many more leaves
    this.tree = generateTree(7, {
      trunkHeight: 5.4,
      branchLenMul: 1.4,
      tiltMul: 1.25,
      leafCountMul: 2.4,
      leafScaleMul: 1.6,
    });

    this.group = new THREE.Group();
    scene.add(this.group);

    this.mats = [];

    this.buildEnvironment();
    this.buildWaveField();
    this.buildSeed();
    this.buildRoots();
    this.buildSeedling();
    this.buildWoody();
    this.buildCanopy();
    this.buildFruit();
    this.buildBlossoms();
    this.buildFall();
  }

  _mat(opts) {
    const m = makeDustMaterial(opts);
    this.mats.push(m);
    return m;
  }

  // ------------------------------------------------------------ environment
  buildEnvironment() {
    const { scene } = this;
    // transparent scene so the host page background shows through; fog fades
    // distant dust toward the (theme-coloured) background
    scene.background = null;
    scene.fog = new THREE.FogExp2(new THREE.Color("#04060a"), 0.013);

    // ambient floating dust
    const n = 1300;
    const pos = new Float32Array(n * 3);
    for (let i = 0; i < n; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 46;
      pos[i * 3 + 1] = Math.random() * 26 - 4;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 46;
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute("position", new THREE.BufferAttribute(pos, 3));
    this.ambient = new THREE.Points(
      g,
      new THREE.PointsMaterial({
        color: 0x7fd8e6,
        size: 0.05,
        transparent: true,
        opacity: 0.28,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
      })
    );
    scene.add(this.ambient);
  }

  // -------------------------------------------------- dusty wave-field ground
  // A grid of particles that undulates like a dusty sea (blue troughs, teal
  // crests). Seed-drop and the final apple-drop each send ONE expanding
  // ripple through it — no looping rings.
  buildWaveField() {
    const N = 176;
    const half = 15;
    const posArr = [];
    const rndArr = [];
    for (let i = 0; i < N; i++) {
      for (let j = 0; j < N; j++) {
        const x = -half + (i / (N - 1)) * 2 * half;
        const z = -half + (j / (N - 1)) * 2 * half;
        if (Math.hypot(x, z) > half) continue;
        posArr.push(x, 0, z);
        rndArr.push(Math.random());
      }
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.Float32BufferAttribute(posArr, 3));
    geo.setAttribute("aRand", new THREE.Float32BufferAttribute(rndArr, 1));

    this.waveMat = new THREE.ShaderMaterial({
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      uniforms: {
        uTime: { value: 0 },
        uAmp: { value: 0.5 },
        uRipple: { value: 0 }, // 0..1 expanding ring radius
        uRippleAmp: { value: 0 },
        uRippleCenter: { value: new THREE.Vector2(0, 0) }, // xz origin of the ring

        uSize: { value: 1.5 },
        uOpacity: { value: 1 },
        uLow: { value: new THREE.Color("#0b3f7a") },
        uHigh: { value: new THREE.Color("#4df0d6") },
        uAlpha: { value: 0.55 },
        uDarken: { value: 1.0 },
      },
      vertexShader: /* glsl */ `
        uniform float uTime, uAmp, uRipple, uRippleAmp, uSize;
        uniform vec2 uRippleCenter;
        attribute float aRand;
        varying float vH;
        varying float vEdge;
        void main() {
          vec3 p = position;
          float r = length(p.xz);
          // soft radial fade so the disc dissolves into the background
          // instead of ending in a hard circular cut
          vEdge = smoothstep(15.0, 9.0, r);
          // rolling dusty swell
          float w = sin(p.x * 0.5 + uTime * 0.9) * 0.5
                  + sin(p.z * 0.6 - uTime * 0.7) * 0.5
                  + sin((p.x + p.z) * 0.33 + uTime * 1.1) * 0.4;
          float rim = smoothstep(15.0, 3.0, r);
          // single expanding ripple ring, measured from its own origin (the
          // seed at the trunk, or the apple's landing point) — not the disc centre
          float rr = length(p.xz - uRippleCenter);
          float ringR = uRipple * 14.0;
          float ring = exp(-pow((rr - ringR) * 1.1, 2.0)) * uRippleAmp * (1.0 - uRipple);
          p.y = w * uAmp * rim + ring;
          vH = p.y;
          vec4 mv = modelViewMatrix * vec4(p, 1.0);
          gl_Position = projectionMatrix * mv;
          gl_PointSize = uSize * (0.55 + 0.6 * aRand) * (150.0 / -mv.z);
        }
      `,
      fragmentShader: /* glsl */ `
        precision highp float;
        uniform vec3 uLow, uHigh;
        uniform float uOpacity, uAlpha, uDarken;
        varying float vH;
        varying float vEdge;
        void main() {
          vec2 uv = gl_PointCoord - 0.5;
          float d = length(uv);
          if (d > 0.5) discard;
          float a = smoothstep(0.5, 0.0, d);
          a = pow(a, 1.8);
          float h = clamp(vH * 0.7 + 0.45, 0.0, 1.0);
          vec3 col = mix(uLow, uHigh, h) * uDarken;
          gl_FragColor = vec4(col * (0.7 + 0.5 * h), a * uOpacity * uAlpha * vEdge);
        }
      `,
    });
    this.wave = new THREE.Points(geo, this.waveMat);
    this.wave.frustumCulled = false;
    this.group.add(this.wave);
  }

  // ------------------------------------------------------------------ seed
  // An apple PIP: small, dark reddish-brown teardrop — wide rounded top,
  // tapering to a point at the bottom (the root emerges from that tip).
  buildSeed() {
    const b = new DustBuilder();
    const c = new THREE.Color("#5c3418"); // dark applewood brown
    const cy = 0.45; // lands near the wave surface, then sinks under it
    for (let i = 0; i < 3200; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const shell = 0.7 + 0.3 * Math.pow(Math.random(), 0.85); // hollowish
      let x = Math.cos(theta) * Math.sin(phi) * shell;
      let y = Math.cos(phi) * shell;
      let z = Math.sin(theta) * Math.sin(phi) * shell;
      // teardrop: taper the bottom to a point, keep the top rounded
      const t = (y + 1) / 2; // 0 bottom -> 1 top
      const taper = 1 - 0.72 * Math.pow(1 - t, 1.8);
      x *= 0.44 * taper; // small + slightly flattened pip
      z *= 0.34 * taper;
      y *= 0.62;
      b.push(x, cy + y, z, 0.0, c, 0.7 + Math.random() * 1.1);
    }
    this.seedMat = this._mat({ size: 1.15, drift: 0.05, fallHeight: 8 });
    this.seedMat.uniforms.uReveal.value = 1;
    this.seed = b.build(this.seedMat);
    this.group.add(this.seed);
  }

  // ------------------------------------------------------------------ roots
  // A recursively branching taproot: each root tapers to a fine, sharp tip and
  // splits into ever-finer branches (see reference). Dust radius AND point
  // size shrink toward the tips so the edges read crisp, not fuzzy.
  buildRoots() {
    const b = new DustBuilder();
    const rand = (a, c) => a + Math.random() * (c - a);
    const segs = [];
    let maxDist = 0.001;

    const grow = (start, dir, length, r0, startDist, depth) => {
      const n = 6;
      const pts = [];
      const wobble = new THREE.Vector3(rand(-1, 1), 0, rand(-1, 1)).normalize();
      const nd = dir.clone().normalize();
      for (let i = 0; i <= n; i++) {
        const t = i / n;
        const p = start.clone().addScaledVector(nd, length * t);
        p.y -= Math.pow(t, 1.3) * length * 0.22; // gravity droop
        p.addScaledVector(wobble, Math.sin(t * Math.PI) * length * 0.13 * rand(0.4, 1.1));
        pts.push(p);
      }
      const curve = new THREE.CatmullRomCurve3(pts);
      const r1 = r0 * 0.14; // taper to a sharp point
      const endDist = startDist + length;
      segs.push({ curve, r0, r1, startDist, endDist, depth });
      maxDist = Math.max(maxDist, endDist);

      if (depth < 4) {
        const nc = depth === 0 ? 3 : Math.random() < 0.45 ? 3 : 2;
        for (let c = 0; c < nc; c++) {
          const at = rand(0.35, 0.94);
          const base = curve.getPoint(at);
          const baseDist = startDist + length * at;
          const around = rand(0, Math.PI * 2);
          const spread = rand(0.55, 1.15);
          const ndir = new THREE.Vector3(
            Math.cos(around) * Math.sin(spread),
            -Math.abs(Math.cos(spread)) - 0.3, // always heads downward
            Math.sin(around) * Math.sin(spread)
          ).normalize();
          const nlen = length * rand(0.5, 0.72);
          const nr0 = mix(r0, r1, at) * rand(0.72, 0.95);
          grow(base, ndir, nlen, nr0, baseDist, depth + 1);
        }
      }
    };

    // start the taproot at the sunken seed so the root develops out of it
    grow(V(0, -0.4, 0), V(0.05, -1, 0.03), 2.6, 0.16, 0, 0);

    // sample tapering dust along every segment
    const rootCol = PALETTE.seed.clone();
    const tipCol = new THREE.Color("#d9a066");
    const cc = new THREE.Color();
    for (const s of segs) {
      const gS = s.startDist / maxDist;
      const gE = s.endDist / maxDist;
      const len = s.curve.getLength();
      const count = Math.max(50, Math.floor(len * 460));
      for (let i = 0; i < count; i++) {
        const t = Math.random();
        const p = s.curve.getPoint(t);
        const rad = mix(s.r0, s.r1, t);
        const rr = rad * Math.pow(Math.random(), 0.6); // hug the centerline
        const a = Math.random() * Math.PI * 2;
        p.x += Math.cos(a) * rr;
        p.z += Math.sin(a) * rr;
        p.y += (Math.random() - 0.5) * rad * 0.4;
        cc.copy(rootCol).lerp(tipCol, t * 0.5);
        const size = mix(1.9, 0.45, t) * (s.depth >= 2 ? 0.8 : 1); // sharp thin tips
        b.push(p.x, p.y, p.z, mix(gS, gE, t), cc, size);
      }
    }

    // cyan structural nodes on the thick main taproot only
    const main = segs[0];
    const nodeCyan = new THREE.Color("#17c7ad");
    this.nodeAlong = [0.22, 0.5, 0.78];
    for (const na of this.nodeAlong) {
      const p = main.curve.getPoint(na);
      const g = (main.startDist + na * (main.endDist - main.startDist)) / maxDist;
      b.addBlob(p, 0.15, 0.15, 0.15, 140, g, nodeCyan, 1.2, 2.6);
    }

    this.rootMat = this._mat({ size: 1.0, drift: 0.05 });
    this.roots = b.build(this.rootMat);
    this.group.add(this.roots);
  }

  // --------------------------------------------------------------- seedling
  // The missing "plant" beat: a young sprout — a thin green stem with two
  // cotyledon leaves — that rises before the tree grows.
  buildSeedling() {
    const b = new DustBuilder();
    const stemCol = new THREE.Color("#6fce63");
    const leafCol = PALETTE.leafGloss.clone();
    const stem = new THREE.CatmullRomCurve3([
      V(0, 0.0, 0), V(0.04, 0.5, 0.02), V(-0.03, 1.0, -0.02), V(0, 1.5, 0),
    ]);
    b.addCurve(stem, 0.05, 1100, 0.0, 0.65, stemCol, 0.8, 1.8);

    const top = V(0, 1.5, 0);
    const nL = V(-0.9, 0.7, 0.15).normalize();
    const nR = V(0.9, 0.7, -0.15).normalize();
    b.addLeafPuff(top, nL, 0.85, 0.4, 900, 0.72, leafCol, 0.8, 2.0);
    b.addLeafPuff(top, nR, 0.85, 0.4, 900, 0.78, leafCol, 0.8, 2.0);

    this.seedlingMat = this._mat({ size: 1.15, drift: 0.12 });
    this.seedling = b.build(this.seedlingMat);
    this.group.add(this.seedling);
  }

  // ------------------------------------------------------------ woody parts
  // Denser, brighter trunk so it reads clearly against the crown.
  buildWoody() {
    const b = new DustBuilder();
    const barkA = new THREE.Color("#8a6636");
    const barkB = new THREE.Color("#5e441f");
    const c = new THREE.Color();
    this.tree.branches.forEach((br, bi) => {
      const len = br.curve.getLength();
      const radius = Math.max(br.r1, (br.r0 + br.r1) * 0.5);
      // trunk (depth 0) gets far more dust; brighter too
      const density = br.depth === 0 ? 900 : 230;
      const count = Math.floor(len * density) + 40;
      const brightness = br.depth === 0 ? 0.15 : 0.55;
      c.copy(barkA).lerp(barkB, brightness + Math.random() * 0.3);
      // the branch carrying the falling apple bends to follow it: base stays
      // put (attached to its parent), the tip takes the full down-right offset.
      let curve = br.curve;
      if (bi === this.tree.fallBranchIndex) {
        const pts = br.curve.points;
        const bent = pts.map((pt, i) =>
          pt.clone().addScaledVector(FALL_OFFSET, i / (pts.length - 1))
        );
        curve = new THREE.CatmullRomCurve3(bent);
      }
      b.addCurve(curve, radius, count, br.gStart, br.gEnd, c, 1.0, 2.6);
    });
    this.woodyMat = this._mat({ size: 1.1, drift: 0.05 });
    this.woody = b.build(this.woodyMat);
    this.group.add(this.woody);
  }

  // ----------------------------------------------------------------- canopy
  buildCanopy() {
    const b = new DustBuilder();
    const leaf = PALETTE.leaf.clone();
    const gloss = PALETTE.leafGloss.clone();
    const c = new THREE.Color();

    const center = new THREE.Vector3();
    for (const l of this.tree.leaves) {
      center.add(l.pos);
      c.copy(leaf).lerp(gloss, Math.random() * 0.5);
      const len = 1.15 * l.scale;
      const wid = 0.55 * l.scale;
      // leaves on the fall branch travel with it (tapered like the branch bend)
      const pos = l.branchIndex === this.tree.fallBranchIndex
        ? l.pos.clone().addScaledVector(FALL_OFFSET, l.branchT)
        : l.pos;
      b.addLeafPuff(pos, l.normal, len, wid, 70, l.growth, c, 0.9, 2.6);
    }
    center.multiplyScalar(1 / Math.max(1, this.tree.leaves.length));
    this.crownCenter = center.clone();

    const crownR = 4.6;
    for (let i = 0; i < 16000; i++) {
      const dir = new THREE.Vector3(
        Math.random() * 2 - 1, Math.random() * 2 - 1, Math.random() * 2 - 1
      ).normalize();
      const r = Math.pow(Math.random(), 0.6) * crownR;
      const p = center.clone().addScaledVector(dir, r);
      p.y += (crownR - r) * 0.15;
      c.copy(leaf).lerp(gloss, Math.random() * 0.6);
      const g = clamp(0.55 + (r / crownR) * 0.45);
      b.push(p.x, p.y, p.z, g, c, 0.7 + Math.random() * 1.6);
    }

    this.canopyMat = this._mat({ size: 1.05, drift: 0.18 });
    this.canopy = b.build(this.canopyMat);
    this.group.add(this.canopy);
  }

  // ------------------------------------------------------------------ fruit
  // round, red apples (slightly squat: wider than tall)
  buildFruit() {
    const b = new DustBuilder();
    const c = PALETTE.appleRipe.clone();
    this.fallIndex = this.tree.fallIndex;
    // nudge the falling apple a touch down-and-right of its branch tip
    this.fallAnchor = this.tree.fruits[this.fallIndex].pos.clone().add(FALL_OFFSET);
    this.tree.fruits.forEach((f, i) => {
      if (i === this.fallIndex) return;
      b.addBlob(f.pos, 0.42 * f.scale, 0.36 * f.scale, 0.42 * f.scale, 200, f.growth, c, 1.2, 2.8);
    });
    this.fruitMat = this._mat({ size: 1.1, drift: 0.05 });
    this._setRipenColors(this.fruitMat);
    this.fruit = b.build(this.fruitMat);
    this.group.add(this.fruit);
  }

  // drive the ripen (green -> red) colours from the palette
  _setRipenColors(mat) {
    mat.uniforms.uUnripe.value.copy(PALETTE.appleUnripe);
    mat.uniforms.uRipe.value.copy(PALETTE.appleRipe);
    mat.uniforms.uBlush.value.copy(PALETTE.appleBlush);
  }

  // --------------------------------------------------------------- blossoms
  buildBlossoms() {
    const b = new DustBuilder();
    const c = PALETTE.blossom.clone();
    this.tree.fruits.forEach((f, i) => {
      // the falling fruit's blossom follows it down-and-right, like its branch
      const anchor = i === this.tree.fallIndex ? f.anchor.clone().add(FALL_OFFSET) : f.anchor;
      b.addBlob(anchor, 0.16, 0.16, 0.16, 40, 0.0, c, 1.6, 3.6);
    });
    this.blossomMat = this._mat({ size: 1.5, drift: 0.08 });
    this.blossomMat.uniforms.uReveal.value = 1;
    this.blossoms = b.build(this.blossomMat);
    this.group.add(this.blossoms);
  }

  // ----------------------------------------------------- falling fruit only
  buildFall() {
    const b = new DustBuilder();
    const c = PALETTE.appleRipe.clone();
    b.addBlob(V(0, 0, 0), 0.44, 0.38, 0.44, 340, 0.0, c, 1.4, 3.2);
    this.fallMat = this._mat({ size: 1.1, drift: 0.04 });
    this.fallMat.uniforms.uReveal.value = 1;
    this._setRipenColors(this.fallMat);
    this.fall = b.build(this.fallMat);
    this.fall.position.copy(this.fallAnchor);
    this.group.add(this.fall);
  }

  // =========================================================== UPDATE ======
  update(p, time) {
    for (const m of this.mats) m.uniforms.uTime.value = time;
    this.waveMat.uniforms.uTime.value = time;

    // ---- stage 1: seed drop, then sink UNDER the wave -----------------
    const drop = range(p, 0.0, 0.1);
    this.seedMat.uniforms.uFall.value = drop;
    // after landing, the seed sinks below the wave surface (planted)
    const sink = range(p, 0.1, 0.28);
    this.seed.position.y = -sink * 0.8; // 0.4 (surface) -> -0.4 (under wave)
    // it stays visible under the surface while the root develops from it,
    // then fades as the sprout rises
    const seedFade = range(p, 0.36, 0.5);
    this.seedMat.uniforms.uOpacity.value = 1 - seedFade;
    this.seed.visible = seedFade < 0.99;

    // dusty wave: lively early, settles as the tree becomes the focus
    this.waveMat.uniforms.uAmp.value = mix(0.55, 0.12, range(p, 0.5, 0.7));
    this.waveMat.uniforms.uOpacity.value = 1 - 0.45 * range(p, 0.55, 0.72);
    // seed-drop ripple (once, expanding with scroll)
    let ripple = 0, rippleAmp = 0;
    if (p < 0.5) {
      ripple = range(p, 0.08, 0.42);
      rippleAmp = 0.7;
    }

    // ---- stage 2: root develops from the seed --------------------------
    // starts after the seed has sunk, so it grows out of the planted stone
    this.rootMat.uniforms.uReveal.value = range(p, 0.2, 0.4);
    this.roots.visible = p < 0.52;

    // ---- stage 3: seedling / sprout ------------------------------------
    const sprout = range(p, 0.34, 0.5);
    this.seedlingMat.uniforms.uReveal.value = sprout;
    // the sprout fades as the full trunk grows up through it
    this.seedlingMat.uniforms.uOpacity.value = 1 - range(p, 0.56, 0.66);
    this.seedling.visible = sprout > 0.01 && p < 0.68;

    // ---- stage 4: trunk / branches / canopy ----------------------------
    this.woodyMat.uniforms.uReveal.value = range(p, 0.48, 0.72);
    this.canopyMat.uniforms.uReveal.value = range(p, 0.56, 0.78);

    // ---- stage 5: blossoms -> fruit ------------------------------------
    const blossom = range(p, 0.72, 0.8) * (1 - range(p, 0.82, 0.9));
    this.blossomMat.uniforms.uOpacity.value = blossom;
    this.blossoms.visible = blossom > 0.01;
    const fruitReveal = range(p, 0.72, 0.86);
    const ripen = range(p, 0.74, 0.92);
    this.fruitMat.uniforms.uReveal.value = fruitReveal;
    this.fruitMat.uniforms.uRipen.value = ripen;
    this.fallMat.uniforms.uRipen.value = ripen;

    // ---- stage 6: gravity fall + ONE finale dust wave ------------------
    // linear fall time, squared for gravity acceleration (starts slow, speeds up).
    // The apple lands by ~0.94, leaving the tail of the scroll for its impact wave.
    const fallLin = clamp((p - 0.86) / (0.94 - 0.86));
    const gAccel = fallLin * fallLin;
    this.fall.visible = fruitReveal > 0.01;
    this.fall.position.set(
      this.fallAnchor.x,
      mix(this.fallAnchor.y, 0.3, gAccel),
      this.fallAnchor.z
    );
    this.fall.rotation.z = fallLin * 3.0;
    // impact wave: blooms the instant the apple lands (p≈0.94) and radiates from
    // WHERE it hit — not the trunk. Before that, the ripple origin is the disc centre
    // (the early seed-drop wave).
    if (p >= 0.94) {
      ripple = range(p, 0.94, 1.0);
      rippleAmp = 1.8;
      this.waveMat.uniforms.uRippleCenter.value.set(this.fallAnchor.x, this.fallAnchor.z);
    } else {
      this.waveMat.uniforms.uRippleCenter.value.set(0, 0);
    }
    this.waveMat.uniforms.uRipple.value = ripple;
    this.waveMat.uniforms.uRippleAmp.value = rippleAmp;

    this.ambient.rotation.y = time * 0.008;
  }
}
