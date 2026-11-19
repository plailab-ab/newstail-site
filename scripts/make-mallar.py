"""
Bygger mallarna till guiderna (Excel) i public/mallar/.

  python3 -m venv /tmp/v && /tmp/v/bin/pip install openpyxl && /tmp/v/bin/python scripts/make-mallar.py

Ändra texten här och kör igen – redigera inte .xlsx-filerna för hand.
"""
from pathlib import Path

from openpyxl import Workbook
from openpyxl.styles import Alignment, Border, Font, PatternFill, Side
from openpyxl.worksheet.datavalidation import DataValidation

OUT = Path(__file__).resolve().parent.parent / "public" / "mallar"
OUT.mkdir(parents=True, exist_ok=True)

HEAD = PatternFill("solid", fgColor="1F2937")
HINT = PatternFill("solid", fgColor="F3F4F6")
EX = PatternFill("solid", fgColor="EEF6FF")
WHITE = Font(bold=True, color="FFFFFF")
BOLD = Font(bold=True)
GREY = Font(italic=True, color="6B7280")
WRAP = Alignment(wrap_text=True, vertical="top")
THIN = Side(style="thin", color="D1D5DB")
BOX = Border(left=THIN, right=THIN, top=THIN, bottom=THIN)


def title(ws, text, sub):
    ws["A1"] = text
    ws["A1"].font = Font(bold=True, size=16)
    ws["A2"] = sub
    ws["A2"].font = GREY


def header(ws, row, cols):
    for i, (name, width) in enumerate(cols, start=1):
        c = ws.cell(row=row, column=i, value=name)
        c.fill, c.font, c.alignment, c.border = HEAD, WHITE, WRAP, BOX
        ws.column_dimensions[c.column_letter].width = width
    ws.freeze_panes = ws.cell(row=row + 1, column=1)


def rows(ws, start, data, fill=None, empty=0, ncols=None):
    ncols = ncols or len(data[0])
    r = start
    for line in data + [[""] * ncols] * empty:
        for i in range(ncols):
            c = ws.cell(row=r, column=i + 1, value=line[i] if i < len(line) else "")
            c.alignment, c.border = WRAP, BOX
            if fill and line[0]:
                c.fill = fill
        r += 1
    return r


def footer(ws, row):
    ws.cell(row=row + 1, column=1, value="Mall från newstail.io/guider/ – fri att använda och ändra.").font = GREY


# ───────────── Kommunikationsplan ─────────────
wb = Workbook()
ws = wb.active
ws.title = "Plan"
title(ws, "Kommunikationsplan", "Ett blad per projekt eller förändring. Fyll i kolumn C. En sida räcker.")
header(ws, 4, [("Rubrik", 18), ("Fråga att svara på", 48), ("Er plan", 70)])
plan = [
    ["Projekt", "Vad gäller planen, och vem äger den?", ""],
    ["Syfte", "Vad ska vara annorlunda efteråt? (Inte: 'informera om …')", ""],
    ["Målgrupper", "Vilka berörs, och hur skiljer de sig åt? Chefer, berörda team, alla andra.", ""],
    ["Budskap", "Två eller tre saker som alla ska ha förstått.", ""],
    ["Kanaler", "Var tar varje målgrupp faktiskt del av information? Tänk på dem utan dator.", ""],
    ["Tidplan", "Vad sägs när, och i vilken ordning? Detaljerna på bladet Aktiviteter.", ""],
    ["Ansvar", "Ett namn per aktivitet, inte en avdelning.", ""],
    ["Uppföljning", "Hur vet ni att det gick fram och förstods, och när kollar ni?", ""],
]
r = rows(ws, 5, plan)
for i in range(5, r):
    ws.cell(row=i, column=1).font = BOLD
    ws.cell(row=i, column=2).fill = HINT
    ws.row_dimensions[i].height = 48
footer(ws, r)

ws = wb.create_sheet("Aktiviteter")
title(ws, "Aktiviteter och tidplan", "En rad per aktivitet. Den blå raden är ett exempel – skriv över eller ta bort den.")
header(
    ws,
    4,
    [("Datum", 12), ("Målgrupp", 18), ("Budskap", 40), ("Kanal", 18), ("Ansvarig", 16), ("Klart", 9), ("Uppföljning", 34)],
)
r = rows(
    ws,
    5,
    [
        ["2026-11-02", "Chefer", "Vi flyttar vecka 48. Så svarar du på de vanligaste frågorna.", "Chefsmöte", "Anna", "Ja", "Frågor samlade till FAQ"],
        ["2026-11-03", "Alla", "Vi flyttar till nya kontoret vecka 48.", "Uppläst + mejl", "Anna", "Ja", "Hört av 38 av 41"],
        ["2026-11-10", "Ekonomi", "Packning och flyttdag för ert team.", "Teammöte", "Johan", "", "Fråga på nästa möte"],
    ],
    fill=EX,
)
r = rows(ws, r, [], empty=20, ncols=7)
dv = DataValidation(type="list", formula1='"Ja,Nej"', allow_blank=True)
ws.add_data_validation(dv)
dv.add(f"F5:F{r}")
footer(ws, r)
wb.save(OUT / "kommunikationsplan-mall.xlsx")

# ───────────── Omvärldsanalys ─────────────
wb = Workbook()
ws = wb.active
ws.title = "Signaler"
title(
    ws,
    "Omvärldsanalys",
    "En rad per signal. Sannolikhet och påverkan 1–5. Prioritet räknas ut. De blå raderna är exempel.",
)
header(
    ws,
    4,
    [
        ("Område (PESTEL)", 16),
        ("Signal – vad händer?", 40),
        ("Källa", 20),
        ("Sannolikhet 1–5", 13),
        ("Påverkan 1–5", 12),
        ("Prioritet", 10),
        ("Vad betyder det för oss?", 40),
        ("Vad gör vi?", 32),
        ("Ansvarig", 14),
    ],
)
ex = [
    ["Ekonomiskt", "Räntan väntas sjunka under året.", "Riksbanken, branschpress", 3, 4, None, "Kunderna vågar investera igen.", "Förbered säljet på fler offerter.", "Sälj"],
    ["Legalt", "Nya krav på hållbarhetsredovisning för fler företag.", "Regeringen", 5, 3, None, "Våra större kunder frågar efter underlag.", "Ta fram underlag om våra produkter.", "Kvalitet"],
    ["Teknologiskt", "Konkurrent lanserar beställning via app.", "Konkurrentens webb", 4, 3, None, "Kunderna förväntar sig samma sak.", "Utred enklare beställning.", "Ledning"],
    ["Socialt", "Svårare att rekrytera lagerpersonal.", "Egna platsannonser", 4, 4, None, "Längre ledtider om vi inte är bemannade.", "Se över scheman och arbetsgivarvarumärke.", "HR"],
]
r = rows(ws, 5, ex, fill=EX)
r = rows(ws, r, [], empty=25, ncols=9)
for i in range(5, r):
    ws.cell(row=i, column=6, value=f'=IF(AND(D{i}<>"",E{i}<>""),D{i}*E{i},"")').alignment = WRAP
dv = DataValidation(
    type="list",
    formula1='"Politiskt,Ekonomiskt,Socialt,Teknologiskt,Ekologiskt,Legalt"',
    allow_blank=True,
)
ws.add_data_validation(dv)
dv.add(f"A5:A{r}")
num = DataValidation(type="whole", operator="between", formula1="1", formula2="5", allow_blank=True)
ws.add_data_validation(num)
num.add(f"D5:E{r}")
footer(ws, r)

ws = wb.create_sheet("Slutsatser")
title(ws, "Slutsatser", "Det här är det som delas med alla – inte hela listan med signaler.")
header(ws, 4, [("Fråga", 34), ("Svar", 80)])
r = rows(
    ws,
    5,
    [
        ["Vilken fråga ska analysen hjälpa oss besluta om?", ""],
        ["De tre viktigaste slutsatserna", ""],
        ["Vad gör vi annorlunda?", ""],
        ["Vem behöver höra det, och hur?", ""],
        ["När gör vi nästa genomgång?", ""],
    ],
)
for i in range(5, r):
    ws.cell(row=i, column=1).font = BOLD
    ws.cell(row=i, column=1).fill = HINT
    ws.row_dimensions[i].height = 60
footer(ws, r)
wb.save(OUT / "omvarldsanalys-mall.xlsx")
print("Klart:", *sorted(p.name for p in OUT.iterdir()))
