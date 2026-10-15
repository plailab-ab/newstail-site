# Newstail-sajten – för Claude

Hemsidan för Newstail (Astro). Läs `README.md` här och `../newstail-air/docs/ARBETSSATT.md` (roller och
rutiner). Konton och kopplingar: `../newstail-air/docs/KONTON.md`. Standarden för alla appar:
Claude Doc "Appuppsättning by the book".

- Joel jobbar i webbläsaren: svenska, kort, inget kodspråk, klick-för-klick.
- Claude gör all git och kod. Push till `main` publiceras av Vercel (team Plailab, projekt newstail-site).
- Säkerhetsuppdateringar: uppdatera själv, bygg före och efter och jämför sidorna innan push.
- Rymden (`src/space/`) kopieras från appen med `scripts/sync-orb.sh` – redigera den aldrig här.
- Repot är publikt: aldrig nycklar eller interna dokument här.
