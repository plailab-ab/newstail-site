import type { Tone } from "./news-color";

/**
 * Rymden bakom klotet. Stjärnor i tre djup på svart, plus ett lager stoft närmast.
 *
 * Som en riktig himmel (Joel 2026-10-05): alla stjärnor är neutralt vita (ingen nyhetsfärg),
 * utan kant – mjuka ljuspunkter som tonar ut – och ljusstyrkan fördelad som på riktigt: väldigt
 * många svaga, några medel, ett fåtal ljusa med ett svagt brett sken. Ett mycket svagt och
 * långsamt flimmer, aldrig med rösten.
 *
 * - Rörelse (Joel 2026-09-29): hela himlen färdas långsamt uppåt, nära stjärnor fortare än
 *   avlägsna. Ovanpå det parallaxen: lutning och drift (px från föräldern), nära mest.
 * - Enda gången de lyser upp är när klotet anländer ur rymden (energy från gather).
 * - Reduced motion: inget flimmer, ingen färd, ingen drift.
 * - Ritas med en förritad mjuk stjärna (sprite) i olika storlekar – snabbare än en gradient per
 *   stjärna och ruta på iPhone.
 *
 * VECKANS HIMMEL (Joel 2026-10-05): sju stjärnor, en per dag mån–sön, i en egen form varje
 * vecka. Tänd dag = ljus med sken, kvarvarande = svag. Linjerna ritas först när veckan är full.
 * Fullbordade veckor glider bort – små och svaga högre upp på himlen (högst tolv).
 */
type Star = {
  /** 0–1 av ytan (utanför kanten med marginal, så parallaxen aldrig lämnar hål). */
  u: number;
  v: number;
  /** 0 = längst bort, 1 = närmast (stoftet 1,6–2,4). */
  depth: number;
  /** Sprite-diameter i px. */
  size: number;
  /** Flimrets fas och takt. */
  phase: number;
  rate: number;
  /** Grundljus 0–1. */
  base: number;
  /** De allra ljusaste får ett svagt brett sken. */
  bright: boolean;
};

export type WeekSky = {
  /** Veckans nummer – väljer formen. */
  week: number;
  /** Mån–sön: dagen räknad (listan tömd, eller inget nytt den dagen). */
  lit: boolean[];
  /** Dagens plats 0–6 (mån = 0). */
  today: number;
  /** Tidigare fullbordade veckor, nyast först (högst tolv). */
  past: number[];
};

const COUNT = 190;
const DUST = 12;
/** Färden i px/s för de närmaste stjärnorna; avlägsna tar en fjärdedel. */
const TRAVEL = 11;
/** Riktningen: uppåt och en aning åt vänster. */
const DIR = { x: -0.28, y: -0.96 };

export type Shape = { pts: [number, number][]; edges: [number, number][] };

/**
 * Formerna – sju stjärnor i ordning mån–sön inom en ruta 0–1, och linjerna när veckan är full.
 * Veckans nummer väljer form, så det blir en ny bild varje måndag.
 */
const SHAPES: Shape[] = [
  // Karlavagnen: skaftet mån–ons, korgen tors–sön.
  {
    pts: [
      [0, 0],
      [0.2, 0.12],
      [0.4, 0.32],
      [0.6, 0.44],
      [0.62, 0.92],
      [0.95, 1],
      [1, 0.5],
    ],
    edges: [
      [0, 1],
      [1, 2],
      [2, 3],
      [3, 4],
      [4, 5],
      [5, 6],
      [6, 3],
    ],
  },
  // Sicksack (Kassiopeja med svans).
  {
    pts: [
      [0, 0.35],
      [0.16, 0.92],
      [0.33, 0.45],
      [0.5, 1],
      [0.67, 0.22],
      [0.84, 0.6],
      [1, 0.08],
    ],
    edges: [
      [0, 1],
      [1, 2],
      [2, 3],
      [3, 4],
      [4, 5],
      [5, 6],
    ],
  },
  // Jägaren: axlar, bälte, fötter.
  {
    pts: [
      [0.12, 0],
      [0.86, 0.06],
      [0.4, 0.5],
      [0.5, 0.53],
      [0.6, 0.56],
      [0.04, 1],
      [0.96, 0.94],
    ],
    edges: [
      [0, 2],
      [1, 4],
      [2, 3],
      [3, 4],
      [2, 5],
      [4, 6],
    ],
  },
  // Lejonet: skäran och ryggen.
  {
    pts: [
      [0.02, 0.62],
      [0.14, 0.28],
      [0.3, 0.06],
      [0.46, 0.22],
      [0.5, 0.62],
      [0.82, 0.74],
      [1, 0.4],
    ],
    edges: [
      [0, 1],
      [1, 2],
      [2, 3],
      [3, 4],
      [4, 5],
      [5, 6],
      [6, 3],
    ],
  },
];

export const shapeFor = (week: number): Shape =>
  SHAPES[((week % SHAPES.length) + SHAPES.length) % SHAPES.length]!;

/** Platser för gamla veckor (andel av ytan), nyast först – längre bort för varje. */
const PAST_SLOTS: [number, number][] = [
  [0.7, 0.3],
  [0.08, 0.34],
  [0.42, 0.22],
  [0.78, 0.13],
  [0.14, 0.16],
  [0.56, 0.08],
  [0.3, 0.42],
  [0.86, 0.44],
  [0.04, 0.06],
  [0.66, 0.5],
  [0.36, 0.04],
  [0.9, 0.24],
];

/** En mjuk stjärna: vit kärna som tonar ut, ingen kant. */
function makeSprite(size: number, stops: [number, number][]): HTMLCanvasElement {
  const c = document.createElement("canvas");
  c.width = c.height = size;
  const g = c.getContext("2d");
  if (g) {
    const r = size / 2;
    const grad = g.createRadialGradient(r, r, 0, r, r, r);
    for (const [at, a] of stops) grad.addColorStop(at, `rgba(255,255,255,${a})`);
    g.fillStyle = grad;
    g.fillRect(0, 0, size, size);
  }
  return c;
}

export class Starfield {
  private stars: Star[] = [];
  private dust: Star[] = [];
  private W = 0;
  private H = 0;
  /** Hur långt himlen färdats (px vid djup 1) – integreras, så farten kan ändras mjukt. */
  private travel = 0;
  private lastT: number | null = null;
  private sprite: HTMLCanvasElement | null = null;
  private halo: HTMLCanvasElement | null = null;

  constructor(public reduced: boolean) {}

  private sprites() {
    if (!this.sprite || !this.halo) {
      this.sprite = makeSprite(64, [
        [0, 1],
        [0.1, 0.9],
        [0.22, 0.45],
        [0.42, 0.12],
        [0.7, 0.025],
        [1, 0],
      ]);
      this.halo = makeSprite(64, [
        [0, 0.5],
        [0.25, 0.18],
        [0.6, 0.04],
        [1, 0],
      ]);
    }
    return { sprite: this.sprite, halo: this.halo };
  }

  resize(W: number, H: number) {
    if (W === this.W && H === this.H) return;
    this.W = W;
    this.H = H;
    // Deterministiskt: samma himmel varje gång appen öppnas.
    let seed = 1234567;
    const rnd = () => {
      seed = (seed * 1664525 + 1013904223) >>> 0;
      return seed / 4294967296;
    };
    this.stars = [];
    for (let i = 0; i < COUNT; i++) {
      const depth = Math.pow(rnd(), 1.6);
      // Magnituden: de flesta svaga, ett fåtal ljusa.
      const m = Math.pow(rnd(), 3.2);
      this.stars.push({
        u: rnd(),
        v: rnd(),
        depth,
        size: 2.4 + m * 7.5 + depth * 0.8,
        phase: rnd() * Math.PI * 2,
        rate: 0.25 + rnd() * 0.6,
        base: 0.16 + m * 0.78,
        bright: m > 0.62,
      });
    }
    this.dust = [];
    for (let i = 0; i < DUST; i++) {
      this.dust.push({
        u: rnd(),
        v: rnd(),
        depth: 1.6 + rnd() * 0.8,
        size: 18 + rnd() * 30,
        phase: rnd() * Math.PI * 2,
        rate: 0.1 + rnd() * 0.2,
        base: 0.04 + rnd() * 0.05,
        bright: false,
      });
    }
  }

  /**
   * @param offset parallaxförskjutning i px för de närmaste stjärnorna
   * @param energy 0–1: klotet passerar (gather) – stjärnorna lyser upp. Rösten skickas inte hit.
   * @param dim 0–1, hur mycket rummet ska vila (t.ex. under recapen)
   * @param flow 0–1+, färdens fart (lugnare under sändning så texten står still nog att läsa)
   */
  draw(
    ctx: CanvasRenderingContext2D,
    t: number,
    _tone: Tone,
    offset: { x: number; y: number },
    energy: number,
    dim = 1,
    flow = 1,
  ) {
    const { W, H } = this;
    if (!W || !H) return;
    const { sprite, halo } = this.sprites();
    // Färden: integrera farten över tiden (ett hopp i t – appen i bakgrunden – räknas som högst 0,1 s).
    const dt = this.lastT == null ? 0 : Math.min(0.1, Math.max(0, t - this.lastT));
    this.lastT = t;
    if (!this.reduced) this.travel += dt * TRAVEL * flow;

    const margin = 40;
    const LW = W + margin * 2;
    const LH = H + margin * 2;
    const wrap = (v: number, L: number) => ((v % L) + L) % L;
    const place = (s: Star) => {
      const k = 0.25 + 0.75 * s.depth;
      return {
        x: -margin + wrap(s.u * LW + DIR.x * this.travel * k + offset.x * s.depth, LW),
        y: -margin + wrap(s.v * LH + DIR.y * this.travel * k + offset.y * s.depth, LH),
      };
    };

    const prevAlpha = ctx.globalAlpha;
    for (const s of this.stars) {
      const { x: px, y: py } = place(s);
      const S = s.size * (1 + energy * 0.35 * s.depth);
      if (px < -S || px > W + S || py < -S || py > H + S) continue;
      // Ett mycket svagt flimmer – som att se stjärnor genom luft. Aldrig blink.
      const flicker = this.reduced ? 1 : 0.93 + 0.07 * Math.sin(t * s.rate + s.phase);
      const lit = 1 + energy * (0.5 + 1.0 * s.depth);
      const a = Math.min(1, s.base * flicker * (0.65 + 0.35 * s.depth) * lit) * dim;
      if (a < 0.01) continue;
      ctx.globalAlpha = a;
      ctx.drawImage(sprite, px - S / 2, py - S / 2, S, S);
      if (s.bright) {
        const R = S * 3.2;
        ctx.globalAlpha = a * 0.22;
        ctx.drawImage(halo, px - R / 2, py - R / 2, R, R);
      }
    }

    // Stoftet närmast: mjuka korn utan kant, knappt där – men de rör sig mest.
    if (!this.reduced) {
      for (const s of this.dust) {
        const { x: px, y: py } = place(s);
        const R = s.size;
        if (px < -R || px > W + R || py < -R || py > H + R) continue;
        const breathe = 0.75 + 0.25 * Math.sin(t * s.rate + s.phase);
        ctx.globalAlpha = Math.min(1, s.base * breathe * (1 + energy * 1.5) * dim);
        ctx.drawImage(halo, px - R / 2, py - R / 2, R, R);
      }
    }
    ctx.globalAlpha = prevAlpha;
  }

  /** Veckans ruta: en bit under mitten, vänster om klotets viloplats. */
  private weekBox() {
    const { W, H } = this;
    return { x: W * 0.14, y: H * 0.685, w: W * 0.6, h: H * 0.13 };
  }

  /** Var dag i (0–6) står på skärmen, utan parallax. */
  weekPos(week: number, i: number): { x: number; y: number } {
    const shape = shapeFor(week);
    const b = this.weekBox();
    const [u, v] = shape.pts[Math.max(0, Math.min(6, i))]!;
    return { x: b.x + u * b.w, y: b.y + v * b.h };
  }

  /** En ensam mjuk stjärna (klotet på väg till sin plats i veckan). */
  drawSpark(ctx: CanvasRenderingContext2D, x: number, y: number, size: number, alpha: number) {
    const { sprite, halo } = this.sprites();
    const prev = ctx.globalAlpha;
    ctx.globalAlpha = Math.min(1, alpha);
    ctx.drawImage(sprite, x - size / 2, y - size / 2, size, size);
    const R = size * 3.4;
    ctx.globalAlpha = Math.min(1, alpha * 0.4);
    ctx.drawImage(halo, x - R / 2, y - R / 2, R, R);
    ctx.globalAlpha = prev;
  }

  /**
   * Veckans himmel.
   * @param offset parallax (veckan ligger långt bort: en tredjedel av de nära stjärnornas)
   * @param opts.landed dagens stjärna har just tänts: 0–1 = blixten när klotet landar, ≥ 1 = klart
   * @param opts.hideToday dagens stjärna ritas släckt (klotet är på väg dit)
   * @param opts.lines 0–1: hur långt linjerna ritats (animeras när veckan just blev full)
   */
  drawWeek(
    ctx: CanvasRenderingContext2D,
    sky: WeekSky,
    offset: { x: number; y: number },
    alpha: number,
    opts: { landed?: number | null; hideToday?: boolean; lines?: number | null } = {},
  ) {
    if (!this.W || alpha <= 0.005) return;
    const { sprite, halo } = this.sprites();
    const prev = ctx.globalAlpha;
    const ox = offset.x * 0.3;
    const oy = offset.y * 0.3;
    const shape = shapeFor(sky.week);

    // Gamla veckor: små, svaga, linjerna dragna.
    sky.past.slice(0, PAST_SLOTS.length).forEach((week, k) => {
      const [su, sv] = PAST_SLOTS[k]!;
      const ps = shapeFor(week);
      const scale = 0.24 - k * 0.012;
      const a = alpha * (0.42 - k * 0.025);
      if (a <= 0.01) return;
      const bw = this.W * 0.6 * scale;
      const bh = this.H * 0.13 * scale;
      const bx = this.W * su + ox * 0.6;
      const by = this.H * sv + oy * 0.6;
      ctx.globalAlpha = a * 0.5;
      ctx.strokeStyle = "rgba(255,255,255,0.5)";
      ctx.lineWidth = 0.6;
      ctx.beginPath();
      for (const [p, q] of ps.edges) {
        const [pu, pv] = ps.pts[p]!;
        const [qu, qv] = ps.pts[q]!;
        ctx.moveTo(bx + pu * bw, by + pv * bh);
        ctx.lineTo(bx + qu * bw, by + qv * bh);
      }
      ctx.stroke();
      ctx.globalAlpha = a;
      for (const [u, v] of ps.pts) ctx.drawImage(sprite, bx + u * bw - 2, by + v * bh - 2, 4, 4);
    });

    const pos = (i: number) => {
      const p = this.weekPos(sky.week, i);
      return { x: p.x + ox, y: p.y + oy };
    };
    const landed = opts.landed ?? null;
    const lit = (i: number) => {
      if (i === sky.today && opts.hideToday) return false;
      if (i === sky.today && landed != null) return true;
      return Boolean(sky.lit[i]);
    };

    // Linjerna: bara när veckan är full, ritade efter hand (lines 0–1).
    const full = [0, 1, 2, 3, 4, 5, 6].every(lit);
    const lines = opts.lines ?? (full ? 1 : 0);
    if (lines > 0) {
      const n = shape.edges.length;
      ctx.globalAlpha = alpha * 0.2;
      ctx.strokeStyle = "rgba(255,255,255,1)";
      ctx.lineWidth = 1;
      ctx.beginPath();
      shape.edges.forEach(([p, q], k) => {
        const u = Math.max(0, Math.min(1, lines * n - k));
        if (u <= 0) return;
        const a = pos(p);
        const b = pos(q);
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(a.x + (b.x - a.x) * u, a.y + (b.y - a.y) * u);
      });
      ctx.stroke();
    }

    for (let i = 0; i < 7; i++) {
      const { x, y } = pos(i);
      if (lit(i)) {
        // Blixten när klotet landar: större sken som lägger sig.
        const flash =
          i === sky.today && landed != null && landed < 1 ? Math.sin(landed * Math.PI) : 0;
        const S = 13 + flash * 8;
        const R = 56 + flash * 50;
        ctx.globalAlpha = alpha * (0.42 + flash * 0.45);
        ctx.drawImage(halo, x - R / 2, y - R / 2, R, R);
        ctx.globalAlpha = alpha * 0.95;
        ctx.drawImage(sprite, x - S / 2, y - S / 2, S, S);
      } else {
        const S = i === sky.today ? 7 : 6;
        ctx.globalAlpha = alpha * (i === sky.today ? 0.55 : 0.42);
        ctx.drawImage(sprite, x - S / 2, y - S / 2, S, S);
      }
    }
    ctx.globalAlpha = prev;
  }
}
