// Skärmbilder av startsidans scen i steg (p = -0.5 … 0.95) + övriga sektioner, mobil och desktop:
// CHROME=<sökväg till chromium> node scripts/shots-scene.mjs <utmapp>
import { chromium } from "playwright";
const out = process.argv[2];
const browser = await chromium.launch({ executablePath: process.env.CHROME, args: ["--use-gl=angle","--use-angle=swiftshader","--enable-unsafe-swiftshader","--ignore-gpu-blocklist"] });
for (const [name, vp, dsf] of [["m", { width: 390, height: 844 }, 2], ["d", { width: 1440, height: 900 }, 1]]) {
  const page = await browser.newPage({ viewport: vp, deviceScaleFactor: dsf, isMobile: name === "m", hasTouch: name === "m" });
  const errors = [];
  page.on("pageerror", (e) => errors.push(String(e)));
  await page.goto("http://localhost:4321/", { waitUntil: "networkidle" });
  await page.waitForTimeout(2600);
  await page.screenshot({ path: `${out}/${name}-hero.png` });
  const { top, height } = await page.evaluate(() => { const b = document.getElementById("scen").getBoundingClientRect(); return { top: b.top + scrollY, height: b.height }; });
  const H = vp.height;
  for (const p of [-0.5, 0.05, 0.3, 0.5, 0.72, 0.95]) {
    const y = p < 0 ? top - H * 0.5 : top + p * (height - H);
    await page.evaluate((yy) => scrollTo(0, yy), y);
    await page.waitForTimeout(1400);
    await page.screenshot({ path: `${out}/${name}-scene-${String(p).replace("-", "m").replace(".", "")}.png` });
  }
  for (const id of ["sprak", "inside", "recap", "ledare", "fragor"]) {
    await page.evaluate((k) => document.getElementById(k).scrollIntoView({ block: "start", behavior: "instant" }), id);
    await page.waitForTimeout(1500);
    await page.screenshot({ path: `${out}/${name}-${id}.png` });
  }
  await page.evaluate(() => scrollTo(0, document.documentElement.scrollHeight));
  await page.waitForTimeout(800);
  await page.screenshot({ path: `${out}/${name}-footer.png` });
  console.log(name, "errors", errors);
  await page.close();
}
await browser.close();
