// Shared palette, stage map and easing helpers for the apple growth sequence.
import { Color } from "three";

export const PALETTE = {
  bg: new Color("#04060a"),
  fog: new Color("#04060a"),
  soil: new Color("#241813"),
  soilDeep: new Color("#0c0806"),
  scan: new Color("#37e6d0"), // cyan "data scanning" waves
  node: new Color("#7bffd6"), // glowing structural root nodes
  seed: new Color("#8a5a32"), // root/husk dust tone
  bark: new Color("#5b4327"),
  barkTip: new Color("#8fe6b0"), // glowing growth front
  leaf: new Color("#2f9e46"),
  leafGloss: new Color("#7fffa8"),
  blossom: new Color("#fff3c4"),
  appleUnripe: new Color("#7cae3a"), // green apple
  appleRipe: new Color("#cf2130"), // ripe red
  appleBlush: new Color("#f2544a"), // bright red highlight
};

// Five stages, each owns an equal slice of scroll [0..1].
export const STAGES = [
  { key: "seed", label: "SEED", a: 0.0, b: 0.2 },
  { key: "root", label: "ROOT", a: 0.2, b: 0.4 },
  { key: "tree", label: "TREE", a: 0.4, b: 0.6 },
  { key: "fruit", label: "FRUIT", a: 0.6, b: 0.8 },
  { key: "fall", label: "FALL", a: 0.8, b: 1.0 },
];

// ---- math helpers -------------------------------------------------------
export const clamp = (x, a = 0, b = 1) => Math.min(b, Math.max(a, x));
export const mix = (a, b, t) => a + (b - a) * t;

// smoothstep-normalised progress of x across [a,b]
export function range(x, a, b) {
  const t = clamp((x - a) / (b - a));
  return t * t * (3 - 2 * t);
}

// 0 -> 1 -> 0 bump across [a,b], peaking mid
export function pulse(x, a, b) {
  const t = clamp((x - a) / (b - a));
  return Math.sin(t * Math.PI);
}

export const easeInCubic = (t) => t * t * t;
export const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);
export const easeInOut = (t) => t * t * (3 - 2 * t);

// deterministic RNG so the tree & camera are stable across reloads
export function mulberry32(seed) {
  let a = seed >>> 0;
  return function () {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
