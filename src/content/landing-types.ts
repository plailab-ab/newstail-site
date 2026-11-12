/**
 * Landningssidorna (steg 2, 2026-10-05). En sida = ett objekt. Samma mall för alla kluster;
 * jämförelser får en tabell, guider en artikel med svaret först.
 */
export type Cluster = "losningar" | "branscher" | "roller" | "jamfor" | "guider";

/** Bild till en rad i "Så funkar det för er" – ritas av mallen, inga bilder behövs. */
export type RowVisual =
  | { kind: "topics"; chips: string[] } // ämnen som följs, 4–8 korta ord
  | { kind: "inside"; title: string; heard: number; of: number } // ett internt budskap + "38 av 41"
  | { kind: "teams"; title: string; teams: string[]; selected: number } // budskap till ett team
  | { kind: "language"; lines: { code: string; t: string }[] } // samma rubrik på 2–4 språk
  | { kind: "reach"; rows: { t: string; heard: number; of: number }[] }; // räckvidd per budskap

export type Landing = {
  cluster: Cluster;
  /** Sökvägen blir /{cluster}/{slug}/ – små bokstäver, a–z, 0–9 och bindestreck, inga åäö. */
  slug: string;
  /**
   * Avpublicerad: sidan byggs inte, syns inte i sitemap, menyer eller "Läs vidare". Texten är skälet.
   * Ta bort raden för att publicera igen (och ta bort omdirigeringen i vercel.json).
   */
  paused?: string;
  /** Namnet i menyer, sidfot och hubbsida (kort). */
  name: string;
  /** En mening till kortet på hubbsidan. */
  card: string;
  /** Under 60 tecken, sökordet först, slutar med " | Newstail". */
  metaTitle: string;
  /** 120–155 tecken. */
  metaDescription: string;
  /** Sidans enda H1: det man söker på, sagt som en människa. */
  h1: string;
  /** En mening, högst ~20 ord. */
  lead: string;
  /** Det som spelas i telefonen i heron. */
  phone: { topic: string; title: string; src: string };
  /** "Känner ni igen er?" – exakt 3. t = kort påstående (≤ 9 ord), d = en kort mening. */
  pains: { t: string; d: string }[];
  /** "Så funkar det för er" – exakt 3. t ≤ 5 ord, d en kort mening. */
  rows: { t: string; d: string; visual: RowVisual }[];
  /** "Hör ett exempel" – 3 rader ur en påhittad sändning, värdens ord. */
  script: { topic: string; t: string }[];
  /** 4–5 frågor och svar, svaren 1–3 meningar. */
  faq: { q: string; a: string }[];
  /** 3 andra sidor, som "cluster/slug" eller kärnsidor "/pris/", "/trygghet/", "/sa-funkar-det/". */
  related: string[];
  /** Bara jämförelser. */
  compare?: { other: string; rows: { label: string; newstail: string; other: string }[]; fair: string };
  /** Bara guider: svaret först (40–60 ord) och 3–5 avsnitt. */
  article?: { answer: string; sections: { h: string; p: string; list?: string[] }[] };
};
