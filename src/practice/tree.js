// Procedural apple-tree skeleton. Produces branch curves (woody parts), leaf
// anchors and fruit anchors, each tagged with a normalised "growth" value in
// [0..1] describing WHEN it should appear (trunk base = 0, outer tips = 1).
import { CatmullRomCurve3, Vector3 } from "three";
import { mulberry32 } from "./config.js";

// opts (all default to 1 / current values so existing callers are unchanged):
//   trunkHeight, branchLenMul, tiltMul, leafCountMul, leafScaleMul
export function generateTree(seed = 7, opts = {}) {
  const {
    trunkHeight = 5.2,
    branchLenMul = 1,
    tiltMul = 1,
    leafCountMul = 1,
    leafScaleMul = 1,
  } = opts;
  const rng = mulberry32(seed);
  const rand = (a, b) => a + rng() * (b - a);

  const branches = [];
  const leaves = [];
  const fruits = [];
  let maxDist = 0.0001;

  // recursively grow a branch and its children
  function grow(start, dir, length, r0, r1, depth, startDist) {
    const segs = 7;
    const pts = [];
    const up = new Vector3(0, 1, 0);
    // per-branch sideways wobble + gravity droop (stronger higher up the tree)
    const wobbleAxis = new Vector3(rand(-1, 1), 0, rand(-1, 1)).normalize();
    const droop = depth === 0 ? 0 : rand(0.08, 0.22);

    const cur = start.clone();
    const step = dir.clone().normalize().multiplyScalar(length / segs);
    for (let i = 0; i <= segs; i++) {
      const t = i / segs;
      const p = start.clone().addScaledVector(dir.clone().normalize(), length * t);
      // wobble
      p.addScaledVector(wobbleAxis, Math.sin(t * Math.PI) * length * 0.06 * rand(0.5, 1.2));
      // gravity droop on outer branches
      p.y -= droop * length * t * t;
      pts.push(p);
    }
    const curve = new CatmullRomCurve3(pts);
    const endDist = startDist + length;
    const branch = {
      curve,
      r0,
      r1,
      depth,
      startDist,
      endDist,
      gStart: 0,
      gEnd: 0,
    };
    branches.push(branch);
    const myBranchIndex = branches.length - 1;
    maxDist = Math.max(maxDist, endDist);

    const tip = pts[pts.length - 1];
    const tangent = tip.clone().sub(pts[pts.length - 2]).normalize();

    // leaves cluster on the outer half of depth>=2 branches
    if (depth >= 2) {
      const nLeaves = Math.floor(rand(3, 7) * leafCountMul);
      for (let i = 0; i < nLeaves; i++) {
        const t = rand(0.35, 1.0);
        const pos = curve.getPoint(t);
        const dist = startDist + length * t;
        // outward normal roughly away from trunk axis + up
        const out = new Vector3(pos.x, 0, pos.z).normalize();
        const normal = out.clone().lerp(up, 0.35).addScaledVector(
          new Vector3(rand(-1, 1), rand(-0.3, 1), rand(-1, 1)),
          0.5
        ).normalize();
        leaves.push({
          pos,
          normal,
          scale: rand(0.7, 1.25) * leafScaleMul,
          spin: rand(0, Math.PI * 2),
          growth: dist,
          branchIndex: myBranchIndex,
          branchT: t,
        });
      }
    }

    // fruit hangs from tips of the outer branches
    if (depth >= 2 && rng() < 0.55) {
      const pos = tip.clone();
      pos.y -= r1 * 2 + 0.15;
      fruits.push({
        pos,
        scale: rand(0.8, 1.15),
        growth: endDist,
        anchor: tip.clone(),
        branchIndex: myBranchIndex,
      });
    }

    // children
    const maxDepth = 4;
    if (depth < maxDepth) {
      const nChildren = depth === 0 ? 4 : depth === 1 ? 3 : 2;
      for (let c = 0; c < nChildren; c++) {
        // branch off near the end (and, for the trunk, only at the very top)
        const at = depth === 0 ? rand(0.82, 1.0) : rand(0.45, 0.95);
        const base = curve.getPoint(at);
        const baseDist = startDist + length * at;

        // new direction: tilt away from parent, spread around
        const around = (c / nChildren) * Math.PI * 2 + rand(-0.5, 0.5);
        const tilt = (depth === 0 ? rand(0.5, 0.9) : rand(0.6, 1.15)) * tiltMul;
        const ndir = new Vector3(
          Math.cos(around) * Math.sin(tilt),
          Math.cos(tilt) + 0.35,
          Math.sin(around) * Math.sin(tilt)
        ).normalize();
        // blend a little toward parent tangent so it flows
        ndir.lerp(tangent, 0.25).normalize();

        const nlen = length * rand(0.55, 0.75) * branchLenMul;
        const nr0 = r1 * rand(0.7, 0.95);
        const nr1 = nr0 * 0.55;
        grow(base, ndir, nlen, nr0, nr1, depth + 1, baseDist);
      }
    }
  }

  // trunk
  grow(new Vector3(0, 0, 0), new Vector3(0.05, 1, 0.02), trunkHeight, 0.55, 0.34, 0, 0);

  // normalise growth values to [0..1]
  for (const b of branches) {
    b.gStart = b.startDist / maxDist;
    b.gEnd = b.endDist / maxDist;
  }
  for (const l of leaves) l.growth /= maxDist;
  for (const f of fruits) f.growth /= maxDist;

  // pick one clearly-visible, high-up fruit for the falling loop
  let fallIndex = 0;
  let best = -Infinity;
  fruits.forEach((f, i) => {
    const score = f.pos.y + f.pos.z * 0.4 - Math.abs(f.pos.x) * 0.2;
    if (score > best) {
      best = score;
      fallIndex = i;
    }
  });

  const fallBranchIndex = fruits.length ? fruits[fallIndex].branchIndex : -1;

  return { branches, leaves, fruits, fallIndex, fallBranchIndex, maxDist };
}
