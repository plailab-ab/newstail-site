# newstail-site

Hemsidan för Newstail (newstail.io). Astro + React-öar. Rymden (stjärnorna och glasklotet)
är samma kod som i appen: `src/space/`. Den är kopierad, inte länkad – ändras klotet i
appen körs `bash scripts/sync-orb.sh <sökväg till newstail-app>` i en egen gren och pull request.
`bash scripts/sync-orb.sh --check` visar om sajten ligger efter. Redigera aldrig
`orb-gl.ts`, `starfield.ts` eller `news-color.ts` här.

- `npm run dev` – lokalt · `npm run build` – statisk sajt i `dist/`
- Sidor: `/` (svenska), `/en/` (engelska). Copy i `src/i18n/`.
- Startsidan "En sändning" (2026-10-26): heron med bara klotet, sedan scenen (`#scen`, fäst medan man scrollar) där sajtens WebGL-klot flyger in i en telefon med genomskinlig skärm (`Phone clear` + `ScreenScene`), dras upp och spelar sändningen – scrollen är tidslinjen (`data-scene` i `HomePage.astro`, stil i `src/styles/home3.css`). Klotet glider mellan sektioner vid deras gräns (`Space.tsx`). Mobilen snäpper inte och visar hela telefoner; sidfotens kolumner är ihopfällda där.
- Skärmbilder av scenen: `scripts/shots-scene.mjs`.
- Sektionernas klot-lägen: `data-space`, `data-hue`, ankare `[data-orb-anchor]` (se `src/space/Space.tsx`).
- Skärmbilder: `node scripts/shots.mjs http://localhost:4321/` (Playwright).
- Appens skärmar i telefonerna och laptopen (`src/components/air/`, stil i `src/styles/screens.css`) är ritade efter appen – senast jämförda med bygge 98 (2026-10-23). Ändras appens utseende ritas de om här.
- Deploy: Vercel publicerar `main` på newstail.io; varje pull request får en förhandslänk.
- Arbetssätt (grenar, pull requests, "kör"): `ARBETSSATT.md`.

Repot är publikt (Vercels gratisplan bygger bara publika repon utan medlemskontroll).
