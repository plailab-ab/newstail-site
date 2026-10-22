# Arbetssätt – newstail-site

Kort version för sajten. De fullständiga reglerna för samarbetet står i `docs/SAMARBETE.md` och
`docs/ARBETSSATT.md` i appens repo (`plailab-ab/newstail-app`, privat).

## Vem gör vad

| Vem | Gör |
| --- | --- |
| Joel och Jimmy (samma roll) | Säger vad som ska göras, tittar på förhandslänken, säger "kör". |
| Joels Claude / Jimmys Claude | All git och kod, efter samma regler. Skriver som "Claude (via Joel)" respektive "Claude (via Jimmy)". |

## En ändring, från början till slut

1. Claude skapar en gren från senaste `main`: `joel/<kort-namn>` eller `jimmy/<kort-namn>`.
2. Claude gör ändringen och öppnar en pull request med mallen (svenska, kort).
3. Kontrollen (Bygge) körs och Vercel lägger en förhandslänk i pull requesten.
4. Personen tittar och säger **"kör"**. Claude hämtar in senaste `main` i grenen och slår ihop.
5. `main` publiceras automatiskt på newstail.io av Vercel (team Plailab, projekt newstail-site). Varje version går att backa till i Vercel.

## Regler

- `main` är spärrad: bara via pull request med grön kontroll, ingen force-push. Inget krav på godkännande.
- Krockar löses i grenen så att båda ändringarna blir kvar.
- Klotet och stjärnorna (`src/space/`) kopieras från appen med `scripts/sync-orb.sh`, i en egen pull request.
- Säkerhetsuppdateringar (även Dependabots): bygg och jämför sidorna före och efter, slå ihop som vanligt.
- Repot är publikt: aldrig nycklar, kunddata eller interna dokument här.
