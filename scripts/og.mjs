/**
 * Delningsbilderna public/og.png och public/og-en.png (1200×630): logotypen, rubriken från
 * startsidan och klotet. Kör från sajtens mapp: CHROME=<chrome> node scripts/og.mjs
 * Byt rubrik här när startsidans h1 ändras.
 */
import { chromium } from "playwright";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";

const ROOT = resolve(import.meta.dirname, "..");
const b64 = (p, mime) => `data:${mime};base64,${readFileSync(resolve(ROOT, p)).toString("base64")}`;
const font = b64("node_modules/@fontsource-variable/inter/files/inter-latin-wght-normal.woff2", "font/woff2");
const logo = b64("public/newstail-logo.png", "image/png");
const orb = b64("public/orbs/orb-200.webp", "image/webp");

const VARIANTS = [
  { out: "public/og.png", h1: "En egen nyhetssändning för varje medarbetare." },
  { out: "public/og-en.png", h1: "A personal news broadcast for every employee." },
];

const stars = Array.from({ length: 90 }, (_, i) => {
  const x = (i * 137.508) % 1200;
  const y = (i * 89.7 + 31) % 630;
  const r = 0.6 + ((i * 7) % 5) / 5;
  const o = 0.25 + ((i * 13) % 6) / 12;
  return `<i style="left:${x.toFixed(0)}px;top:${y.toFixed(0)}px;width:${r.toFixed(1)}px;height:${r.toFixed(1)}px;opacity:${o.toFixed(2)}"></i>`;
}).join("");

const html = (h1) => `<!doctype html><html><head><meta charset="utf-8"><style>
@font-face{font-family:Inter;src:url(${font}) format("woff2");font-weight:100 900}
html,body{margin:0;width:1200px;height:630px;overflow:hidden;background:#000;font-family:Inter,system-ui,sans-serif;color:#eceff4}
body{position:relative;background:radial-gradient(70% 90% at 72% 50%, #0b1a26 0%, #000 60%)}
i{position:absolute;border-radius:50%;background:#fff}
.logo{position:absolute;left:88px;top:84px;width:180px;height:26px;background:#eceff4;-webkit-mask:url(${logo}) no-repeat left center / contain;mask:url(${logo}) no-repeat left center / contain}
h1{position:absolute;left:88px;bottom:78px;margin:0;width:600px;font-size:64px;line-height:1.04;letter-spacing:-0.035em;font-weight:600;text-wrap:balance}
.orb{position:absolute;left:600px;top:95px;width:440px;height:440px}
.glow{position:absolute;left:520px;top:15px;width:600px;height:600px;border-radius:50%;background:radial-gradient(circle, rgba(80,170,210,.22), transparent 62%)}
</style></head><body>${stars}<div class="glow"></div><div class="logo"></div><img class="orb" src="${orb}"><h1>${h1}</h1></body></html>`;

const browser = await chromium.launch({ executablePath: process.env.CHROME || undefined });
const page = await browser.newPage({ viewport: { width: 1200, height: 630 }, deviceScaleFactor: 1 });
for (const v of VARIANTS) {
  await page.setContent(html(v.h1), { waitUntil: "load" });
  await page.evaluate(() => document.fonts.ready);
  await page.screenshot({ path: resolve(ROOT, v.out), type: "png" });
  console.log("skrev", v.out);
}
await browser.close();
