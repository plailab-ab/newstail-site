import { useEffect, useRef } from "react";

import { DAWN, toneForHue, type Tone } from "./news-color";
import { OrbGL } from "./orb-gl";
import { Starfield } from "./starfield";

/**
 * Rymden bakom hela sajten: stjärnorna (canvas 2D) och glasklotet (WebGL) från appen, i ett
 * fast lager bakom innehållet. Scrollen styr allt:
 *
 * - Varje sektion med `data-space` säger var klotet ska stå (x, y, radie i andelar av
 *   vyn), vilken nyhetston den har (hue) och hur synligt klotet är. Mellan två sektioner
 *   glider klotet och färgen över (smoothstep på hur långt man scrollat mellan dem).
 * - När man passerar in i en ny sektion lyser stjärnorna upp ett ögonblick (energy) – samma
 *   "ljusfront" som när nyheten byter i appen.
 * - Stjärnorna parallaxar med scrollen (nära mest), och rusar när man scrollar fort (flow).
 * - Scrollen vrider klotets inre (turn); muspekaren lutar det (tilt) och flyttar stjärnorna.
 * - Vid sidladdning anländer klotet ur rymden (1500 ms kubisk ease-in) som i appen.
 * - Reduced motion: inget andetag, ingen färd, klotet står där sektionen säger.
 */

type Target = { hue: number; x: number; y: number; r: number; alpha: number };
type Section = { el: HTMLElement; anchor: HTMLElement | null; d: Target; m: Target };

const smooth = (x: number) => x * x * (3 - 2 * x);
const clamp01 = (x: number) => Math.min(1, Math.max(0, x));
const approach = (cur: number, target: number, k: number, f: number) =>
  cur + (target - cur) * (1 - Math.pow(1 - k, f));
const lerp = (a: number, b: number, u: number) => a + (b - a) * u;
const mixTone = (a: Tone, b: Tone, u: number): Tone => ({
  light: [lerp(a.light[0], b.light[0], u), lerp(a.light[1], b.light[1], u), lerp(a.light[2], b.light[2], u)],
  core: [lerp(a.core[0], b.core[0], u), lerp(a.core[1], b.core[1], u), lerp(a.core[2], b.core[2], u)],
});
const rgba = (c: number[], a: number) => `rgba(${c[0]},${c[1]},${c[2]},${a})`;
/** Accenten: tonen ett stycke bredvid på färgcirkeln – nebulosans andra färg. */
const accentFor = (hue: number): Tone => toneForHue(hue + 48);
/** Kortaste vägen mellan två toner på cirkeln. */
const lerpHue = (a: number, b: number, u: number) => {
  const d = ((b - a + 540) % 360) - 180;
  return (a + d * u + 360) % 360;
};

function parseTarget(s: string | undefined, fallback: Target): Target {
  if (!s) return fallback;
  const p = s.split(",").map((v) => parseFloat(v.trim()));
  return {
    hue: fallback.hue,
    x: Number.isFinite(p[0]) ? p[0]! : fallback.x,
    y: Number.isFinite(p[1]) ? p[1]! : fallback.y,
    r: Number.isFinite(p[2]) ? p[2]! : fallback.r,
    alpha: Number.isFinite(p[3]) ? p[3]! : fallback.alpha,
  };
}

function readSections(): Section[] {
  const out: Section[] = [];
  document.querySelectorAll<HTMLElement>("[data-space]").forEach((el) => {
    const hue = parseFloat(el.dataset.hue ?? "262");
    const base: Target = { hue, x: 0.5, y: 0.5, r: 0.3, alpha: 1 };
    const d = parseTarget(el.dataset.orb, base);
    const m = parseTarget(el.dataset.orbM, { ...d, x: 0.5, y: 0.3, r: 0.24 });
    const anchor = el.querySelector<HTMLElement>("[data-orb-anchor]");
    out.push({ el, anchor, d, m });
  });
  return out;
}

/**
 * Var klotet ska stå för en sektion: har den ett ankare (ett element i layouten) står klotet
 * där ankaret är just nu – det följer med sidan som vilket element som helst, och glider
 * mot nästa sektions ankare när den närmar sig. Annars talen i data-orb (andelar av vyn).
 */
function targetFor(s: Section, mobile: boolean, W: number, H: number, minSide: number): Target {
  // Tonen läses varje ruta: en sektion kan byta färg på klotet medan den syns (språksektionen).
  const hue = parseFloat(s.el.dataset.hue ?? "");
  const t0 = mobile ? s.m : s.d;
  const t = Number.isFinite(hue) ? { ...t0, hue } : t0;
  if (!s.anchor) return t;
  const a = s.anchor.getBoundingClientRect();
  if (a.width < 2) return { ...t, alpha: 0 };
  const cx = a.left + a.width / 2;
  const cy = a.top + a.height / 2;
  return {
    hue: t.hue,
    x: cx / W,
    y: cy / H,
    r: a.width / 2 / minSide,
    alpha: t.alpha,
  };
}

export default function Space({ orb: showOrb = true }: { orb?: boolean }) {
  const starsRef = useRef<HTMLCanvasElement>(null);
  const orbRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const starsCanvas = starsRef.current;
    const orbCanvas = orbRef.current;
    if (!starsCanvas || !orbCanvas) return;
    const ctx = starsCanvas.getContext("2d");
    if (!ctx) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const stars = new Starfield(reduced);
    let orb: OrbGL | null = null;
    try {
      orb = OrbGL.create(orbCanvas);
    } catch {
      orb = null;
    }
    orbCanvas.addEventListener("webglcontextlost", () => {
      orb = null;
    });

    let W = 0;
    let H = 0;
    let dpr = 1;
    let mobile = false;
    const resize = () => {
      W = window.innerWidth;
      H = window.innerHeight;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      mobile = W < 760;
      starsCanvas.width = Math.round(W * dpr);
      starsCanvas.height = Math.round(H * dpr);
      starsCanvas.style.width = `${W}px`;
      starsCanvas.style.height = `${H}px`;
      orbCanvas.style.width = `${W}px`;
      orbCanvas.style.height = `${H}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      stars.resize(W, H);
      orb?.resize(W, H, dpr);
    };
    const onResize = () => {
      resize();
      measureTops();
    };
    resize();
    window.addEventListener("resize", onResize);

    let sections = readSections();
    // Sektionernas överkanter i dokumentet, cachade: att mäta alla varje bildruta tvingade
    // fram en layout per bildruta (2026-10-26). Mäts om vid resize/rescan och var 1,5 s.
    let docTops: number[] = [];
    let topsAt = 0;
    const measureTops = () => {
      const sy = window.scrollY;
      docTops = sections.map((s) => s.el.getBoundingClientRect().top + sy);
      topsAt = performance.now();
    };
    const rescan = () => {
      sections = readSections();
      measureTops();
    };
    measureTops();
    window.addEventListener("load", rescan);
    const mo = new MutationObserver(rescan);
    mo.observe(document.body, { childList: true, subtree: true });

    // ---- pekaren (mus) och lutningen (Android – iOS frågar om lov, det gör vi inte på en sajt)
    const pointer = { x: 0, y: 0, tx: 0, ty: 0, on: false };
    const onMove = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      pointer.on = true;
      pointer.tx = (e.clientX / W) * 2 - 1;
      pointer.ty = (e.clientY / H) * 2 - 1;
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    const tilt = { x: 0, y: 0 };
    const onOrient = (e: DeviceOrientationEvent) => {
      if (e.gamma == null || e.beta == null) return;
      const tx = Math.max(-1, Math.min(1, e.gamma / 25));
      const ty = Math.max(-1, Math.min(1, (e.beta - 45) / 25));
      tilt.x += (tx - tilt.x) * 0.15;
      tilt.y += (ty - tilt.y) * 0.15;
    };
    const D = DeviceOrientationEvent as unknown as { requestPermission?: unknown };
    if (typeof D.requestPermission !== "function") {
      window.addEventListener("deviceorientation", onOrient);
    }

    // ---- tillståndet som glättas per ruta
    const cur = { x: W / 2, y: H * 0.6, r: 120, alpha: 0, hue: 262 };
    let tone: Tone = DAWN;
    let accent: Tone = accentFor(262);
    let energy = 0;
    let lastIndex = -1;
    let lastScroll = window.scrollY;
    let scrollVel = 0;
    let turn = 0;
    let orbTilt = 0;
    let voice = 0;
    let lastKick = 0;
    const t0 = performance.now();
    let lastT = t0;
    const ARRIVE = reduced ? 400 : 1500;
    let raf = 0;
    let running = true;

    const targetNow = (): Target => {
      if (!sections.length) return { hue: 262, x: 0.5, y: 0.55, r: 0.3, alpha: 1 };
      // Övergången sker vid GRÄNSEN mellan två sektioner: medan nästa sektions överkant
      // vandrar från vyns underkant upp till nära toppen glider klotet dit (2026-10-26). Så
      // står klotet kvar i en fäst sektion (scenen) hela vägen, och lämnar den först när den
      // scrollar ut. Före 2026-10-26 räknades på sektionernas mitt.
      if (performance.now() - topsAt > 1500 || docTops.length !== sections.length) measureTops();
      const sy = window.scrollY;
      const tops = docTops.map((t) => t - sy);
      const edge = H * 0.1;
      // Glidningen börjar när nästa sektions överkant är 80 % ned i vyn (inte redan vid kanten –
      // en kort sektion i mobilen skulle annars dra klotet redan innan man scrollat).
      const begin = H * 0.8;
      let i = 0;
      while (i < tops.length - 1 && tops[i + 1]! <= edge) i++;
      const minSide = Math.min(W, H);
      const pick = (s: Section) => targetFor(s, mobile, W, H, minSide);
      const a = pick(sections[i]!);
      if (i >= tops.length - 1) {
        if (lastIndex !== i) {
          if (lastIndex >= 0) energy = 1;
          lastIndex = i;
        }
        return a;
      }
      const b = pick(sections[i + 1]!);
      const u = smooth(clamp01((begin - tops[i + 1]!) / Math.max(1, begin - edge)));
      // Ljusfronten: när man går över mitten av övergången.
      const idx = u < 0.5 ? i : i + 1;
      if (lastIndex !== idx) {
        if (lastIndex >= 0) energy = 1;
        lastIndex = idx;
      }
      return {
        hue: lerpHue(a.hue, b.hue, u),
        x: lerp(a.x, b.x, u),
        y: lerp(a.y, b.y, u),
        r: lerp(a.r, b.r, u),
        alpha: lerp(a.alpha, b.alpha, u),
      };
    };

    const frame = (now: number) => {
      if (!running) return;
      raf = requestAnimationFrame(frame);
      const dt = Math.min(0.1, (now - lastT) / 1000);
      lastT = now;
      const f = dt * 60;
      const t = (now - t0) / 1000;
      const age = now - t0;

      // Scrollen: fart för stjärnorna, vridning för klotet.
      const sy = window.scrollY;
      const dsy = sy - lastScroll;
      lastScroll = sy;
      scrollVel = approach(scrollVel, dt > 0 ? dsy / dt : 0, 0.2, f);
      // Rösten syns i molnen inuti (orb-gl uFlow), inte i snurren (Joel 2026-10-04).
      if (!reduced) turn += dsy * 0.0022 + voice * 0.003 * f;

      pointer.x = approach(pointer.x, pointer.tx, 0.06, f);
      pointer.y = approach(pointer.y, pointer.ty, 0.06, f);

      const tg = targetNow();
      const minSide = Math.min(W, H);
      const tx = tg.x * W + pointer.x * 10;
      const ty = tg.y * H + pointer.y * 8;
      const tr = tg.r * minSide;
      const k = reduced ? 1 : 0.075;
      cur.x = approach(cur.x, tx, k, f);
      cur.y = approach(cur.y, ty, k, f);
      cur.r = approach(cur.r, tr, k, f);
      cur.alpha = approach(cur.alpha, tg.alpha, k, f);
      cur.hue = ((approach(cur.hue, cur.hue + (((tg.hue - cur.hue + 540) % 360) - 180), 0.06, f) % 360) + 360) % 360;
      const target = toneForHue(cur.hue);
      tone = mixTone(tone, target, 1 - Math.pow(1 - 0.08, f));
      accent = mixTone(accent, accentFor(cur.hue), 1 - Math.pow(1 - 0.08, f));
      const kick = (window as unknown as { __orbKick?: number }).__orbKick ?? 0;
      if (kick !== lastKick) {
        lastKick = kick;
        energy = Math.max(energy, 0.8);
      }
      energy = approach(energy, 0, 0.045, f);
      // Rösten ur ljudprovet (Home.astro sätter window.__voiceAmp): nebulosan lyser, som i appen.
      const amp = (window as unknown as { __voiceAmp?: number }).__voiceAmp ?? 0;
      voice = approach(voice, amp, 0.35, f);
      orbTilt = approach(orbTilt, pointer.y * 0.35 + tilt.y * 0.3, 0.05, f);

      // Ankomsten ur rymden.
      let x = cur.x;
      let y = cur.y;
      let R = cur.r;
      let alpha = cur.alpha;
      let arriveEnergy = 0;
      if (age < ARRIVE) {
        const u = reduced ? age / ARRIVE : Math.pow(age / ARRIVE, 3);
        R = lerp(2, cur.r, u);
        y = lerp(cur.y - H * 0.14, cur.y, u);
        alpha = cur.alpha * (reduced ? u : Math.min(1, u * 3));
        arriveEnergy = Math.sin(Math.PI * clamp01(age / ARRIVE)) * 0.9;
      }

      // Stjärnorna: scrollparallax + pekare/lutning; rusar när man scrollar fort.
      const offset = {
        x: pointer.x * 22 + tilt.x * 30,
        y: -sy * 0.12 + pointer.y * 14 + tilt.y * 30,
      };
      const flow = 1 + Math.min(3, Math.abs(scrollVel) / 500);
      ctx.clearRect(0, 0, W, H);
      // På en stor skärm får stjärnorna lysa lite mer än i telefonen – rummet är större.
      stars.draw(ctx, t, tone, offset, Math.max(energy, arriveEnergy), mobile ? 1 : 1.3, flow);

      // Klotets gloria i 2D, sedan glaset i WebGL.
      if (showOrb && alpha > 0.005 && R > 1) {
        const halo = ctx.createRadialGradient(x, y, R * 0.85, x, y, R * 1.6);
        halo.addColorStop(0, rgba(tone.light, 0.1 * alpha));
        halo.addColorStop(0.5, rgba(tone.light, 0.035 * alpha));
        halo.addColorStop(1, rgba(tone.light, 0));
        ctx.fillStyle = halo;
        ctx.fillRect(x - R * 1.6, y - R * 1.6, R * 3.2, R * 3.2);
        const rim = ctx.createRadialGradient(x, y, R * 0.9, x, y, R * 1.25);
        rim.addColorStop(0, rgba(tone.light, 0.18 * alpha));
        rim.addColorStop(1, rgba(tone.light, 0));
        ctx.fillStyle = rim;
        ctx.fillRect(x - R * 2, y - R * 2, R * 4, R * 4);
        if (orb) {
          orb.draw({
            x,
            y,
            R,
            pulse: 1 + Math.max(energy, voice) * 0.1,
            edge: [],
            phi: 0,
            a: tone,
            b: accent,
            alpha,
            turn: turn + t * 0.12,
            tilt: orbTilt,
          });
        } else {
          // Utan WebGL: en mjuk kropp i canvas.
          const body = ctx.createRadialGradient(x - R * 0.25, y - R * 0.3, R * 0.1, x, y, R * 1.05);
          body.addColorStop(0, rgba(tone.core, 0.95 * alpha));
          body.addColorStop(0.6, rgba(tone.light, 0.85 * alpha));
          body.addColorStop(1, rgba(tone.light, 0.15 * alpha));
          ctx.fillStyle = body;
          ctx.beginPath();
          ctx.arc(x, y, R, 0, Math.PI * 2);
          ctx.fill();
        }
      } else {
        orb?.clear();
      }
    };
    raf = requestAnimationFrame(frame);

    const onVis = () => {
      if (document.hidden) {
        running = false;
        cancelAnimationFrame(raf);
      } else if (!running) {
        running = true;
        lastT = performance.now();
        raf = requestAnimationFrame(frame);
      }
    };
    document.addEventListener("visibilitychange", onVis);

    return () => {
      running = false;
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("load", rescan);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("deviceorientation", onOrient);
      document.removeEventListener("visibilitychange", onVis);
      mo.disconnect();
    };
  }, [showOrb]);

  return (
    <div className="space" aria-hidden="true">
      <canvas ref={starsRef} className="space-layer" />
      <canvas ref={orbRef} className="space-layer" />
    </div>
  );
}
