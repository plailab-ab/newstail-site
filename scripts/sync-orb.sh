#!/bin/bash
# Hämtar klotet och stjärnorna från appen (newstail-app) till sajten, så de ser likadana ut.
# Körs från sajtens rot med appen bredvid:  bash scripts/sync-orb.sh [sökväg-till-appen]
#   --check  visar bara om sajten ligger efter appen (ändrar inget).
# Filerna i src/space/ ska aldrig redigeras för hand – ändra i appen och kör det här.
set -euo pipefail
cd "$(dirname "$0")/.."
CHECK=0
if [ "${1:-}" = "--check" ]; then CHECK=1; shift; fi
AIR="${1:-}"
if [ -z "$AIR" ]; then for d in ../newstail-app ../newstail-air; do [ -d "$d/src/components/air" ] && AIR="$d" && break; done; fi
AIR="${AIR:-../newstail-app}"
[ -d "$AIR/src/components/air" ] || { echo "Hittar inte appen i $AIR"; exit 1; }

tmp=$(mktemp -d)
cp "$AIR/src/components/air/orb-gl.ts" "$tmp/orb-gl.ts"
cp "$AIR/src/lib/news-color.ts" "$tmp/news-color.ts"
# starfield importerar via appens alias och orb-draw – sajten har bara de tre filerna.
sed -e 's#import type { Tone } from "@/lib/news-color";#import type { Tone } from "./news-color";#' \
    -e 's#^import { rgba } from "./orb-draw";#const rgba = (c: number[], a: number) => `rgba(${c[0]},${c[1]},${c[2]},${a})`;#' \
    "$AIR/src/components/air/starfield.ts" > "$tmp/starfield.ts"
if grep -q '@/\|from "\./orb-draw"' "$tmp"/*.ts; then
  echo "Appens filer importerar något nytt – se över src/space/ för hand:"; grep -n '@/\|orb-draw' "$tmp"/*.ts; exit 1
fi

changed=0
for f in orb-gl.ts starfield.ts news-color.ts; do
  if ! cmp -s "$tmp/$f" "src/space/$f"; then
    changed=1
    echo "Skiljer: $f"
    [ $CHECK = 1 ] || cp "$tmp/$f" "src/space/$f"
  fi
done
rm -rf "$tmp"
if [ $changed = 0 ]; then echo "Klotet på sajten är samma som i appen."; exit 0; fi
[ $CHECK = 1 ] && exit 2
echo "Uppdaterat. Bygg, titta och committa: npm run build"
