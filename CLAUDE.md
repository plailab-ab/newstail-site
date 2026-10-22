# Newstail-sajten – för Claude

Hemsidan för Newstail, newstail.io (Astro). Joel och Jimmy har samma roll och jobbar parallellt med var
sin Claude, i chatten. Läs `ARBETSSATT.md` och `README.md` här, och reglerna i `docs/SAMARBETE.md` i
appens repo (`plailab-ab/newstail-app`) – de gäller också här. Konton och kopplingar: `docs/KONTON.md` i
appens repo. Standarden för alla appar: Claude Doc "Appuppsättning by the book".

- **Jobba mot GitHub i molnet.** En gren per uppgift (`joel/<kort-namn>` eller `jimmy/<kort-namn>`) → pull request med mallen → förhandslänk + grön kontroll → slå ihop först när personen säger **"kör"**. `main` publiceras av Vercel (team Plailab, projekt newstail-site).
- **`main` är spärrad:** bara via pull request med grön kontroll. Aldrig force-push.
- Git-namn: "Claude (via Joel)" eller "Claude (via Jimmy)".
- Prata enkelt: svenska, kort, inget kodspråk, klick-för-klick.
- Säkerhetsuppdateringar: uppdatera, bygg före och efter och jämför sidorna – som pull request.
- Rymden (`src/space/`) kopieras från appen med `scripts/sync-orb.sh` – redigera den aldrig här.
- **Repot är publikt:** aldrig nycklar, kunddata eller interna dokument här.
