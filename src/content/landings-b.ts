import type { Landing } from "./landing-types";

export const landingsB: Landing[] = [
  // ───────────── Branscher ─────────────
  {
    cluster: "branscher",
    slug: "fastighet",
    name: "Fastighet",
    card: "Interna beslut och marknadens nyheter i hörlurarna, för förvaltare och fastighetsskötare.",
    metaTitle: "Internkommunikation för fastighetsbolag | Newstail",
    metaDescription:
      "En egen uppläst nyhetssändning för förvaltare och fastighetsskötare. Interna beslut, räntor och hyror – och ni ser att det kom fram.",
    h1: "Hela fastighetsbolaget i fas – även de som är ute i beståndet.",
    lead: "En egen nyhetssändning för förvaltare och fastighetsskötare. I hörlurarna, mellan två besök.",
    phone: { topic: "HYROR", title: "Hyresförhandlingarna: kraven landar runt tre procent", src: "2 källor" },
    pains: [
      { t: "Det viktiga når kontoret. Inte alltid beståndet.", d: "Intranätet hinns inte med mellan två ärenden." },
      { t: "Räntor, hyror och energi rör sig hela tiden.", d: "Alla borde förstå vad det betyder – inte bara ekonomichefen." },
      { t: "Ett förvärv ska nå alla samma dag.", d: "Inte via fikarummet en vecka senare." },
    ],
    rows: [
      {
        t: "Er marknad, varje dag",
        d: "Fastighetsbranschen i era städer, plus egna ämnen.",
        visual: {
          kind: "topics",
          chips: ["Räntor", "Hyror", "Energi", "Lokalmarknaden", "Stadsutveckling", "Hållbarhet", "Finansiering", "Kompetens"],
        },
      },
      {
        t: "Era beslut, i allas öron",
        d: "Inspelat en gång, hört av alla.",
        visual: { kind: "inside", title: "Vi förvärvar två fastigheter i centrala Växjö", heard: 38, of: 41 },
      },
      {
        t: "Rätt team, rätt budskap",
        d: "Jönköping får sin hyresgästdag. Alla får förvärvet.",
        visual: {
          kind: "teams",
          title: "Hyresgästdag i Kvarteret Linden",
          teams: ["Alla", "Förvaltning Jönköping", "Förvaltning Växjö", "Projekt & utveckling"],
          selected: 1,
        },
      },
    ],
    script: [
      {
        topic: "INTERNT",
        t: "Hej Anna. Först något internt: hyresförhandlingen för 2027 är klar. Hyrorna höjs med i snitt tre komma en procent från första januari, och brevet till hyresgästerna går ut nästa vecka.",
      },
      {
        topic: "RÄNTOR",
        t: "Sedan räntorna. Marknaden räknar med en sänkning före jul – men inte hur stor. Det påverkar värderingarna inför bokslutet.",
      },
      { topic: "LOKALMARKNADEN", t: "Och i Jönköping och Växjö står färre kontor tomma än för ett år sedan …" },
    ],
    faq: [
      {
        q: "Funkar det för fastighetsskötare som inte sitter vid en dator?",
        a: "Ja. Sändningen spelas i telefonen, i hörlurarna mellan två besök. Den går att pausa och styra från låsskärmen.",
      },
      {
        q: "Kan förvaltningen i Växjö få egna budskap?",
        a: "Ja. När ni publicerar väljer ni alla eller ett team. Bara admin och de ni ger rätten i ett team kan publicera.",
      },
      {
        q: "Ser vi att förvärvet nådde alla?",
        a: "Ja. Varje internt budskap får ett kvitto, till exempel hört av 38 av 41. Ni ser siffror per team, aldrig vad en enskild person har hört.",
      },
      {
        q: "Vad kostar det för oss?",
        a: "179 kr per användare och månad, exkl. moms. Är ni 34 användare blir det 6 086 kr i månaden.",
      },
      {
        q: "Hur kommer vi igång?",
        a: "Registrera er med jobbmejl. Vi läser in er bransch, marknad och konkurrenter, och ni bjuder in kollegorna med ett mejl var. Första sändningen kommer samma dag.",
      },
    ],
    related: ["losningar/internkommunikation", "branscher/bygg", "/pris/"],
  },

  {
    cluster: "branscher",
    slug: "handel-och-butik",
    name: "Handel och butik",
    card: "Samma besked till alla butiker, på alla orter, oavsett vem som jobbar vilket pass.",
    metaTitle: "Intranät för butiker | Newstail",
    metaDescription:
      "Ett intranät för butiker som hörs i stället för läses. Varje medarbetare får en uppläst nyhetssändning, och ni ser att beskeden kom fram.",
    h1: "Ett intranät för butiker – som hörs i stället för läses.",
    lead: "En egen uppläst nyhetssändning för alla i butikerna. Före passet, oavsett ort.",
    phone: { topic: "HANDELN", title: "Kunderna jämför priser mer än vanligt inför jul", src: "3 källor" },
    pains: [
      { t: "Butikerna ses nästan aldrig.", d: "Samma besked når olika butiker olika dagar." },
      { t: "Kvällspasset missar morgonens genomgång.", d: "Och får beskedet i andra hand, om alls." },
      { t: "Ingen hinner läsa intranätet i butiken.", d: "Det finns alltid en kund som går före." },
    ],
    rows: [
      {
        t: "Kampanjen når varje butik",
        d: "Inspelat en gång, hört av alla – och ni ser hur många.",
        visual: { kind: "inside", title: "Ny kampanj i alla butiker från torsdag", heard: 52, of: 58 },
      },
      {
        t: "Rätt besked till rätt butik",
        d: "Borås får sin öppettid. Alla får kampanjen.",
        visual: {
          kind: "teams",
          title: "Nya öppettider i Borås från måndag",
          teams: ["Alla", "Butik Borås", "Butik Jönköping", "Lager & logistik"],
          selected: 1,
        },
      },
      {
        t: "Handeln, varje dag",
        d: "Det som händer i branschen, plus egna ämnen.",
        visual: { kind: "topics", chips: ["Handeln", "Konsumtion", "E-handel", "Priser", "Mode", "Konkurrenter"] },
      },
    ],
    script: [
      {
        topic: "INTERNT",
        t: "Hej Sara. Något internt från Lövgrens: kampanjen på vinterjackor startar i alla butiker på torsdag. Skyltningen kommer med onsdagens leverans.",
      },
      {
        topic: "HANDELN",
        t: "Sedan branschen. Inför jul pratar många om att kunderna jämför priser mer än vanligt, både i butik och på nätet.",
      },
      { topic: "KONKURRENTER", t: "Och en av era konkurrenter öppnar en ny butik i Borås i november …" },
    ],
    faq: [
      {
        q: "Måste personalen sitta vid en dator?",
        a: "Nej. Sändningen spelas i telefonen, gärna i hörlurarna på väg till jobbet. Den är 3–10 minuter och var och en väljer längden.",
      },
      {
        q: "Kan vi skicka något till bara en butik?",
        a: "Ja. Ni väljer alla eller ett team när ni publicerar. En butik kan vara ett eget team.",
      },
      {
        q: "Vi har personal som pratar olika språk.",
        a: "Var och en väljer värdens språk: svenska, engelska, tyska eller spanska. Interna budskap hörs på varje lyssnares språk.",
      },
      {
        q: "Ser vi vem som har lyssnat?",
        a: "Ni ser hur många i varje team som hört ett budskap, till exempel 52 av 58. Aldrig vad en enskild person har hört.",
      },
      {
        q: "Vad kostar det?",
        a: "179 kr per användare och månad, exkl. moms. 10 användare ingår. 14 dagar gratis, inget kort.",
      },
    ],
    related: ["losningar/intranat", "losningar/app-for-personalen", "/pris/"],
  },

  {
    cluster: "branscher",
    slug: "restaurang-och-hotell",
    name: "Restaurang och hotell",
    card: "Besked som når köket, serveringen och receptionen – på var och ens språk.",
    metaTitle: "Personalapp för restaurang och hotell | Newstail",
    metaDescription:
      "En personalapp för restaurang och hotell: varje medarbetare får en uppläst nyhetssändning på sitt språk. Ni ser att beskeden kom fram.",
    h1: "En personalapp för restaurang och hotell som hinns med före passet.",
    lead: "Varje medarbetare får en egen uppläst nyhetssändning, på sitt språk. I hörlurarna, på väg in.",
    phone: { topic: "BESÖKSNÄRING", title: "Fler gäster bokar sent inför vintern", src: "2 källor" },
    pains: [
      { t: "Ingen läser lapparna i personalrummet.", d: "Och de sitter kvar långt efter att de gällde." },
      { t: "Säsongspersonal kommer och går.", d: "Varje ny person behöver höra samma saker." },
      { t: "Köket pratar flera språk.", d: "Ett besked på svenska når inte alla lika bra." },
    ],
    rows: [
      {
        t: "Samma besked, varje språk",
        d: "Var och en hör det på sitt eget språk.",
        visual: {
          kind: "language",
          lines: [
            { code: "sv", t: "Ny meny från fredag" },
            { code: "en", t: "New menu from Friday" },
            { code: "es", t: "Nuevo menú desde el viernes" },
            { code: "de", t: "Neue Speisekarte ab Freitag" },
          ],
        },
      },
      {
        t: "Rätt pass, rätt besked",
        d: "Serveringen får frukosttiderna. Alla får menyn.",
        visual: {
          kind: "teams",
          title: "Nya tider för frukosten",
          teams: ["Alla", "Kök", "Servering", "Reception"],
          selected: 2,
        },
      },
      {
        t: "Se att det kom fram",
        d: "Ni ser hur många som hört varje budskap.",
        visual: {
          kind: "reach",
          rows: [
            { t: "Ny meny från fredag", heard: 27, of: 31 },
            { t: "Nya tider för frukosten", heard: 11, of: 12 },
            { t: "Julbordet är fullbokat", heard: 29, of: 31 },
          ],
        },
      },
    ],
    script: [
      {
        topic: "INTERNT",
        t: "Hej Maria. Något internt från Hotell Sjövik: julbordet på lördag är fullbokat, och vi blir två extra i köket. Schemat kommer i morgon.",
      },
      {
        topic: "BESÖKSNÄRING",
        t: "Sedan branschen. Fler gäster bokar sent den här vintern, och det gör bemanningen svårare att planera.",
      },
      { topic: "NÅGOT NYTT", t: "Och något utanför dina ämnen: allt fler restauranger kortar sina menyer …" },
    ],
    faq: [
      {
        q: "Vilka språk finns?",
        a: "Värden talar svenska, engelska, tyska eller spanska. Var och en väljer, och interna budskap hörs på varje lyssnares språk.",
      },
      {
        q: "Hur lång är sändningen?",
        a: "3–10 minuter, var och en väljer. Det man redan hört hoppas över.",
      },
      {
        q: "Vem kan publicera?",
        a: "Admin och de ni ger rätten i ett team. Man talar in eller skriver i appen, värden formulerar och man lyssnar igenom innan det går ut.",
      },
      {
        q: "Behöver vi koppla ihop det med schemat eller kassan?",
        a: "Nej. Det finns inga integrationer att sätta upp. Ni bjuder in kollegorna med ett mejl var.",
      },
      {
        q: "Vad kostar det?",
        a: "179 kr per användare och månad, exkl. moms. Ingen bindning, och ni tar bort användare när som helst – så det funkar även när personalstyrkan växlar.",
      },
    ],
    related: ["losningar/app-for-personalen", "branscher/handel-och-butik", "/pris/"],
  },

  {
    cluster: "branscher",
    slug: "bygg",
    name: "Bygg",
    card: "Besked och marknadsläge till platschefer och yrkesarbetare, på alla projekt.",
    metaTitle: "Internkommunikation för byggföretag | Newstail",
    metaDescription:
      "Nå platschefer och yrkesarbetare på alla projekt. En egen uppläst nyhetssändning i hörlurarna, och ni ser att beskedet kom fram.",
    h1: "Nå platscheferna och yrkesarbetarna – på alla projekt samtidigt.",
    lead: "En egen uppläst nyhetssändning för alla på bygget. I hörlurarna, på väg till arbetsplatsen.",
    phone: { topic: "BYGG", title: "Bostadsbyggandet väntas vända uppåt nästa år", src: "3 källor" },
    pains: [
      { t: "Besluten når kontoret, inte bygget.", d: "Platscheferna får veta. Resten hör det i andra hand." },
      { t: "Varje projekt är en egen ö.", d: "Det som händer på ett bygge hörs sällan på nästa." },
      { t: "Räntor och orderläge påverkar alla.", d: "Men få har tid att läsa om det." },
    ],
    rows: [
      {
        t: "Ett besked till alla projekt",
        d: "Inspelat en gång, hört av alla.",
        visual: { kind: "inside", title: "Nya rutiner för fallskydd från måndag", heard: 57, of: 62 },
      },
      {
        t: "Rätt projekt, rätt budskap",
        d: "Hamnen får sin gjutning. Alla får rutinen.",
        visual: {
          kind: "teams",
          title: "Gjutningen flyttas till torsdag",
          teams: ["Alla", "Projekt Hamnen", "Projekt Kvarnbacken", "Kontoret"],
          selected: 1,
        },
      },
      {
        t: "Branschen och marknaden",
        d: "Det som påverkar orderläget, plus egna ämnen.",
        visual: {
          kind: "topics",
          chips: ["Räntor", "Bostadsbyggande", "Material", "Upphandlingar", "Arbetsmiljö", "Kompetens", "Konkurrenter"],
        },
      },
    ],
    script: [
      {
        topic: "INTERNT",
        t: "Hej Johan. Något internt från Bergström Bygg: vi har fått uppdraget med skolan i Hamnen. Byggstart i mars, och Lena blir platschef.",
      },
      {
        topic: "BYGG",
        t: "Sedan branschen. Fler bostadsprojekt väntas starta nästa år, men materialpriserna rör sig fortfarande.",
      },
      { topic: "RÄNTOR", t: "Och räntorna. Marknaden räknar med en sänkning, men inte när …" },
    ],
    faq: [
      {
        q: "Måste man ha en dator?",
        a: "Nej. Sändningen spelas i telefonen och styrs från låsskärmen eller hörlurarna.",
      },
      {
        q: "Funkar det på Android?",
        a: "Appen finns för iPhone i dag. Android och webb är på väg.",
      },
      {
        q: "Kan vi skicka till ett enskilt projekt?",
        a: "Ja. Varje projekt kan vara ett eget team. Ni väljer alla eller ett team när ni publicerar.",
      },
      {
        q: "Vi har flera språk på bygget.",
        a: "Var och en väljer värdens språk: svenska, engelska, tyska eller spanska. Interna budskap hörs på varje lyssnares språk.",
      },
      {
        q: "Vad kostar det?",
        a: "179 kr per användare och månad, exkl. moms. Allt ingår. 14 dagar gratis, ingen bindning.",
      },
    ],
    related: ["branscher/fastighet", "losningar/app-for-personalen", "roller/vd-och-ledning"],
  },

  {
    cluster: "branscher",
    slug: "industri",
    name: "Industri",
    card: "Samma besked till alla skift, på det språk var och en väljer.",
    metaTitle: "Internkommunikation inom industrin | Newstail",
    metaDescription:
      "Samma besked till alla skift, på allas språk. Varje medarbetare får en egen uppläst nyhetssändning, och ni ser att beskedet kom fram.",
    h1: "Samma besked till alla skift – på allas språk.",
    lead: "En egen uppläst nyhetssändning för alla i produktionen. Före passet, på eget språk.",
    phone: { topic: "INDUSTRI", title: "Orderingången i verkstadsindustrin ökar igen", src: "2 källor" },
    pains: [
      { t: "Nattskiftet får beskeden sist.", d: "Om de alls når fram före nästa möte." },
      { t: "Flera språk på samma golv.", d: "Det skrivna beskedet förstås inte av alla." },
      { t: "Ingen dator vid maskinen.", d: "Intranätet finns, men produktionen ser det sällan." },
    ],
    rows: [
      {
        t: "Ett besked, varje språk",
        d: "Var och en hör det på sitt eget språk.",
        visual: {
          kind: "language",
          lines: [
            { code: "sv", t: "Nya skiftscheman från november" },
            { code: "en", t: "New shift schedules from November" },
            { code: "de", t: "Neue Schichtpläne ab November" },
            { code: "es", t: "Nuevos turnos a partir de noviembre" },
          ],
        },
      },
      {
        t: "Rätt skift, rätt besked",
        d: "Underhåll får helgstoppet. Alla får schemat.",
        visual: {
          kind: "teams",
          title: "Underhållsstopp på linje 3 i helgen",
          teams: ["Alla", "Skift A", "Skift B", "Skift C", "Underhåll"],
          selected: 4,
        },
      },
      {
        t: "Se att det kom fram",
        d: "Ni ser hur många som hört varje budskap.",
        visual: {
          kind: "reach",
          rows: [
            { t: "Nya skiftscheman från november", heard: 112, of: 124 },
            { t: "Underhållsstopp i helgen", heard: 18, of: 19 },
            { t: "Kvartalet i korthet", heard: 98, of: 124 },
          ],
        },
      },
    ],
    script: [
      {
        topic: "INTERNT",
        t: "Hej Ahmed. Något internt från Norrby Mekaniska: nya skiftscheman gäller från första november. Din skiftledare går igenom dem på måndag.",
      },
      {
        topic: "MARKNAD",
        t: "Sedan marknaden. Flera bedömare ser en starkare orderingång i branschen inför vintern.",
      },
      { topic: "KONKURRENTER", t: "Och en av era konkurrenter bygger ut sin fabrik …" },
    ],
    faq: [
      {
        q: "Hur når det dem som jobbar natt?",
        a: "Var och en lyssnar när det passar, till exempel på väg till passet. Det man redan hört hoppas över.",
      },
      {
        q: "Vilka språk finns?",
        a: "Värden talar svenska, engelska, tyska eller spanska. Interna budskap hörs på varje lyssnares språk.",
      },
      {
        q: "Kan vi skicka till ett enskilt skift?",
        a: "Ja. Varje skift kan vara ett eget team. Ni väljer alla eller ett team när ni publicerar.",
      },
      {
        q: "Ser cheferna vad var och en har hört?",
        a: "Nej. Ni ser siffror per team, och bara för team med minst fem personer. Aldrig vad en enskild person har hört.",
      },
      {
        q: "Vad kostar det?",
        a: "179 kr per användare och månad, exkl. moms, 10 användare ingår. Allt ingår.",
      },
    ],
    related: ["losningar/app-for-personalen", "losningar/internkommunikation", "roller/hr"],
  },

  {
    cluster: "branscher",
    slug: "vard-och-omsorg",
    name: "Vård och omsorg",
    card: "Nå alla i personalgruppen, även dem utan skrivbord och med olika scheman.",
    metaTitle: "Internkommunikation i vård och omsorg | Newstail",
    metaDescription:
      "Nå alla i vården och omsorgen, även dem utan skrivbord. En kort uppläst nyhetssändning när schemat tillåter – och ni ser att det kom fram.",
    h1: "Nå alla i vården och omsorgen – även dem utan skrivbord.",
    lead: "En egen uppläst nyhetssändning för varje medarbetare. Några minuter, när det passar i schemat.",
    phone: { topic: "OMSORG", title: "Så vill kommunerna locka fler till omsorgsyrkena", src: "3 källor" },
    pains: [
      { t: "Många jobbar utan skrivbord.", d: "Mejlen läses sent, om de läses alls." },
      { t: "Få minuter över per pass.", d: "Det som inte hinns med vid överlämningen faller bort." },
      { t: "Alla jobbar olika tider.", d: "Ett möte når aldrig hela personalgruppen." },
    ],
    rows: [
      {
        t: "Ett besked till alla",
        d: "Inspelat en gång, hört av alla.",
        visual: { kind: "inside", title: "Nya rutiner för nyckelhantering från måndag", heard: 46, of: 52 },
      },
      {
        t: "Rätt grupp, rätt besked",
        d: "Hemtjänst Norr får sitt möte. Alla får rutinen.",
        visual: {
          kind: "teams",
          title: "Arbetsplatsträffen flyttas till tisdag",
          teams: ["Alla", "Hemtjänst Norr", "Hemtjänst Söder", "Boendet"],
          selected: 1,
        },
      },
      {
        t: "Branschen, några minuter",
        d: "Det som händer i omsorgen, plus egna ämnen.",
        visual: { kind: "topics", chips: ["Omsorg", "Arbetsmiljö", "Kompetens", "Bemanning", "Digitalisering", "Kommunen"] },
      },
    ],
    script: [
      {
        topic: "INTERNT",
        t: "Hej Fatima. Något internt från Ekbacka Omsorg: arbetsplatsträffen flyttas till tisdag klockan tre. Den som jobbar då får minnesanteckningarna efteråt.",
      },
      {
        topic: "OMSORG",
        t: "Sedan branschen. Flera kommuner pratar om hur de ska locka fler till omsorgsyrkena.",
      },
      { topic: "ARBETSMILJÖ", t: "Och om arbetsmiljö: en ny vägledning om ensamarbete …" },
    ],
    faq: [
      {
        q: "Hur lång tid tar det?",
        a: "3–10 minuter, var och en väljer. Det man redan hört hoppas över, och när listan är tom säger värden att man är ikapp.",
      },
      {
        q: "Kan vi skicka till en enskild grupp?",
        a: "Ja. Varje grupp kan vara ett eget team. Ni väljer alla eller ett team när ni publicerar.",
      },
      {
        q: "Ser chefen vad var och en har hört?",
        a: "Nej. Ni ser siffror per team, och bara för team med minst fem personer. Aldrig vad en enskild person har hört.",
      },
      {
        q: "Var lagras våra data?",
        a: "Databasen finns i Sverige och data lagras inom EU. Ingen modell tränas på era data.",
      },
      {
        q: "Vad kostar det?",
        a: "179 kr per användare och månad, exkl. moms. Allt ingår. 14 dagar gratis, ingen bindning.",
      },
    ],
    related: ["losningar/app-for-personalen", "roller/hr", "/trygghet/"],
  },

  // ───────────── Guider ─────────────
  {
    cluster: "guider",
    slug: "kommunikationsplan",
    name: "Kommunikationsplan – med mall",
    card: "Sju rubriker som räcker för en kommunikationsplan, och hur du fyller i dem.",
    metaTitle: "Kommunikationsplan – så gör du, med mall | Newstail",
    metaDescription:
      "Så gör du en kommunikationsplan steg för steg. Med mall: syfte, målgrupper, budskap, kanaler, tidplan, ansvar och uppföljning.",
    h1: "Så gör du en kommunikationsplan – med mall",
    lead: "Sju rubriker räcker. Här är mallen och hur du fyller i den.",
    phone: { topic: "INTERNT", title: "Så går flytten till nya kontoret till", src: "Internt" },
    pains: [
      { t: "Planen skrivs men följs inte.", d: "Den hamnar i en mapp efter startmötet." },
      { t: "Alla kanaler används på en gång.", d: "Och ingen vet vilken som når vem." },
      { t: "Ingen vet om budskapet kom fram.", d: "Förrän frågorna kommer veckor senare." },
    ],
    rows: [
      {
        t: "Budskapet i allas öron",
        d: "Inspelat en gång, hört av alla.",
        visual: { kind: "inside", title: "Så går flytten till nya kontoret till", heard: 34, of: 41 },
      },
      {
        t: "Rätt team, rätt budskap",
        d: "Varje målgrupp får det som gäller dem.",
        visual: {
          kind: "teams",
          title: "Packning och flyttdag för ekonomi",
          teams: ["Alla", "Ekonomi", "Sälj", "Kundservice"],
          selected: 1,
        },
      },
      {
        t: "Se vad som gick fram",
        d: "Se hur många som hört varje budskap.",
        visual: {
          kind: "reach",
          rows: [
            { t: "Vi flyttar vecka 48", heard: 38, of: 41 },
            { t: "Så packar du din plats", heard: 31, of: 41 },
            { t: "Nya kontoret: hitta rätt", heard: 27, of: 41 },
          ],
        },
      },
    ],
    script: [
      {
        topic: "INTERNT",
        t: "Hej Karin. Något internt: flytten till nya kontoret sker vecka 48. Packlådor kommer på måndag, och varje team får en egen flyttdag.",
      },
      { topic: "BRANSCH", t: "Sedan branschen. Fler företag krymper sina kontor och satsar på färre, bättre ytor." },
      { topic: "NÅGOT NYTT", t: "Och något utanför dina ämnen …" },
    ],
    faq: [
      {
        q: "Hur lång ska en kommunikationsplan vara?",
        a: "Så kort som möjligt. En sida per projekt eller förändring räcker oftast, så länge alla sju rubrikerna är ifyllda.",
      },
      {
        q: "Vad är skillnaden mot en kommunikationsstrategi?",
        a: "Strategin beskriver hur ni kommunicerar i stort och över tid. Planen gäller ett avgränsat projekt eller en förändring, med datum och namn.",
      },
      {
        q: "Hur ofta ska planen uppdateras?",
        a: "När något ändras i projektet, och i samband med varje uppföljning. En plan som inte ändras följs sällan.",
      },
      {
        q: "Hur följer man upp en kommunikationsplan?",
        a: "Bestäm i förväg vad som ska ha hänt. Fråga ett urval, se hur många som tagit del av budskapet och justera nästa steg efter det.",
      },
    ],
    related: ["guider/kommunicera-forandring", "guider/bra-internkommunikation", "losningar/internkommunikation"],
    article: {
      answer:
        "En kommunikationsplan beskriver vad ni vill säga, till vem, i vilka kanaler och när. Den behöver inte vara lång. Skriv ner syftet, målgrupperna och budskapen, välj kanaler som faktiskt når fram och bestäm vem som gör vad. Avsluta med hur ni följer upp att budskapet kom fram och förstods.",
      sections: [
        {
          h: "Mallen",
          p: "Använd rubrikerna nedan som ett enkelt dokument. En sida per projekt eller förändring brukar räcka.",
          list: [
            "Syfte – varför ni kommunicerar och vad som ska vara annorlunda efteråt.",
            "Målgrupper – vilka som berörs, och hur de skiljer sig åt.",
            "Budskap – två eller tre saker alla ska ha förstått.",
            "Kanaler – var varje målgrupp faktiskt tar del av information.",
            "Tidplan – vad som sägs när, och i vilken ordning.",
            "Ansvar – ett namn per aktivitet.",
            "Uppföljning – hur ni vet att det gick fram, och när ni kollar.",
          ],
        },
        {
          h: "Syfte och målgrupper",
          p: "Syftet är det som ska vara annorlunda efteråt, inte att något ska informeras om. Dela sedan upp målgrupperna efter hur de berörs. Chefer, berörda team och resten av företaget behöver ofta höra olika saker.",
        },
        {
          h: "Välj kanaler som når alla",
          p: "Mejl och intranät når dem som sitter vid en dator. Tänk på dem som står i butiken, kör ut till kunder eller jobbar natt. Ett besked som bara finns på ett ställe når sällan alla.",
        },
        {
          h: "Tidplan och ansvar",
          p: "Skriv ut ordningen: vem som hör det när. Låt cheferna få beskedet strax före sina team, så att de kan svara på frågor. Sätt ett namn på varje aktivitet, inte en avdelning.",
        },
        {
          h: "Följ upp vad som gick fram",
          p: "Bestäm i förväg hur ni ska veta att budskapet nådde fram och förstods. Det kan vara en fråga på nästa möte, en kort enkät eller siffror på hur många som tagit del av det. I Newstail ser ni till exempel hur många i varje team som hört ett internt budskap.",
        },
      ],
    },
  },

  {
    cluster: "guider",
    slug: "omvarldsanalys",
    name: "Omvärldsanalys",
    card: "Vad en omvärldsanalys är, hur du gör en och hur resultatet når fler än ledningen.",
    metaTitle: "Omvärldsanalys – vad det är och hur du gör | Newstail",
    metaDescription:
      "Vad är en omvärldsanalys och hur gör man en? Steg för steg, med PESTEL som stöd, och hur resultatet når fler än ledningsgruppen.",
    h1: "Omvärldsanalys: vad det är och hur du gör en",
    lead: "Vad som händer utanför företaget, och vad det betyder för er. Steg för steg.",
    phone: { topic: "MARKNAD", title: "Tre saker att hålla koll på inför nästa år", src: "4 källor" },
    pains: [
      { t: "Analysen görs en gång om året.", d: "Sedan hinner omvärlden ändra sig." },
      { t: "Den stannar i ledningsgruppen.", d: "De som möter kunderna får aldrig höra den." },
      { t: "Ingen har tid att bevaka allt.", d: "Så signalerna dyker upp för sent." },
    ],
    rows: [
      {
        t: "Omvärlden, varje dag",
        d: "Bransch, marknad, kunder och konkurrenter efter roll.",
        visual: { kind: "topics", chips: ["Marknad", "Kunder", "Konkurrenter", "Regler", "Teknik", "Räntor"] },
      },
      {
        t: "Slutsatserna till alla",
        d: "Ledningen spelar in, alla hör det.",
        visual: { kind: "inside", title: "Vad omvärldsanalysen betyder för oss", heard: 36, of: 41 },
      },
      {
        t: "Rätt team, rätt signaler",
        d: "Sälj hör om kunderna, inköp om priserna.",
        visual: {
          kind: "teams",
          title: "Nya regler som påverkar våra kunder",
          teams: ["Alla", "Ledning", "Sälj", "Inköp"],
          selected: 2,
        },
      },
    ],
    script: [
      {
        topic: "INTERNT",
        t: "Hej Erik. Något internt: ledningen har gått igenom årets omvärldsanalys. De tre viktigaste slutsatserna får du här, en i taget.",
      },
      { topic: "MARKNAD", t: "Sedan marknaden. Flera bedömare tror på lägre räntor nästa år, men osäkerheten är stor." },
      { topic: "KONKURRENTER", t: "Och en av era konkurrenter har bytt vd …" },
    ],
    faq: [
      {
        q: "Vad är skillnaden mellan omvärldsbevakning och omvärldsanalys?",
        a: "Bevakningen samlar in signaler löpande. Analysen sorterar dem och drar slutsatser om vad de betyder för just er.",
      },
      {
        q: "Hur ofta ska man göra en omvärldsanalys?",
        a: "Många gör en större analys en gång om året, inför strategi och budget. Bevakningen bör pågå hela tiden.",
      },
      {
        q: "Vad står PESTEL för?",
        a: "Politiska, ekonomiska, sociala, teknologiska, ekologiska och legala faktorer. Det är en checklista så att inget stort område glöms bort.",
      },
      {
        q: "Vem ska vara med?",
        a: "Fler än ledningen. Säljare, inköpare och kundtjänst ser ofta signalerna tidigt.",
      },
    ],
    related: ["losningar/omvarldsbevakning", "jamfor/omvarldsbevakning-verktyg", "guider/kommunikationsplan"],
    article: {
      answer:
        "En omvärldsanalys är ett sätt att förstå vad som händer utanför företaget och vad det kan betyda för er. Ni samlar in signaler om marknad, kunder, konkurrenter, teknik och regler, sorterar dem och drar slutsatser. Analysen gör mest nytta när resultatet når fler än ledningen.",
      sections: [
        {
          h: "Vad är en omvärldsanalys?",
          p: "Det är en genomgång av krafterna utanför företaget som kan påverka er. Den svarar på två frågor: vad händer, och vad betyder det för oss. Resultatet blir underlag för strategi, budget och prioriteringar.",
        },
        {
          h: "Så gör du, steg för steg",
          p: "Håll arbetet enkelt och upprepbart. Samma steg varje gång gör det lättare att se vad som har förändrats.",
          list: [
            "Bestäm frågan – vad ska analysen hjälpa er att besluta?",
            "Samla signaler – nyheter, rapporter, kunder och egna medarbetare.",
            "Sortera – till exempel med PESTEL.",
            "Värdera – hur sannolikt är det, och hur mycket påverkar det er?",
            "Dra slutsatser – vad gör ni annorlunda?",
            "Dela – med alla som berörs.",
          ],
        },
        {
          h: "PESTEL som stöd",
          p: "PESTEL är en checklista med sex områden: politiska, ekonomiska, sociala, teknologiska, ekologiska och legala faktorer. Den hjälper er att inte missa något stort. Ta inte med allt, bara det som faktiskt påverkar er.",
        },
        {
          h: "Bevakning och analys hänger ihop",
          p: "En analys en gång om året blir snabbt gammal. Löpande omvärldsbevakning gör att ni ser signalerna när de dyker upp, och att nästa analys går fortare.",
        },
        {
          h: "Låt resultatet nå fler än ledningen",
          p: "De som möter kunder och leverantörer behöver också veta vad som händer. Dela slutsatserna, inte bara rapporten, och upprepa dem. Med Newstail får var och en sin bransch, marknad, kunder och konkurrenter upplästa varje dag, och ledningens slutsatser kan läggas överst i sändningen.",
        },
      ],
    },
  },

  {
    cluster: "guider",
    slug: "bra-internkommunikation",
    name: "Vad är bra internkommunikation?",
    card: "Bra internkommunikation når alla, och man vet att budskapet kom fram och förstods.",
    metaTitle: "Vad är bra internkommunikation? | Newstail",
    metaDescription:
      "Vad är internkommunikation, och vad gör den bra? Den når alla, även dem utan dator, och ni vet att budskapet kom fram och förstods.",
    h1: "Vad är bra internkommunikation?",
    lead: "Kort svar: den når alla, och ni vet att den gick fram.",
    phone: { topic: "INTERNT", title: "Vi öppnar ett nytt lager i Norrköping", src: "Internt" },
    pains: [
      { t: "Budskapet skickas, men når inte fram.", d: "Mejlet är öppnat. Innehållet är okänt." },
      { t: "De utan dator hör det sist.", d: "Ofta via någon annan, och lite fel." },
      { t: "Ingen vet vad som gick fram.", d: "Så samma frågor kommer tillbaka." },
    ],
    rows: [
      {
        t: "Når även dem utan dator",
        d: "Uppläst i telefonen, på väg till jobbet.",
        visual: { kind: "inside", title: "Vi öppnar ett nytt lager i Norrköping", heard: 34, of: 41 },
      },
      {
        t: "Hörs på allas språk",
        d: "Var och en hör det på sitt eget språk.",
        visual: {
          kind: "language",
          lines: [
            { code: "sv", t: "Vi öppnar ett nytt lager" },
            { code: "en", t: "We are opening a new warehouse" },
            { code: "es", t: "Abrimos un nuevo almacén" },
          ],
        },
      },
      {
        t: "Se att det kom fram",
        d: "Ni ser hur många som hört varje budskap.",
        visual: {
          kind: "reach",
          rows: [
            { t: "Nytt lager i Norrköping", heard: 34, of: 41 },
            { t: "Ny semesterrutin", heard: 29, of: 41 },
            { t: "Kvartalet i korthet", heard: 31, of: 41 },
          ],
        },
      },
    ],
    script: [
      {
        topic: "INTERNT",
        t: "Hej Linda. Något internt från Dahlbergs: vi öppnar ett nytt lager i Norrköping i vår. Ingen behöver byta arbetsplats.",
      },
      { topic: "BRANSCH", t: "Sedan branschen. Fler företag flyttar lager närmare sina kunder." },
      { topic: "KUNDER", t: "Och en av era större kunder har fått ny inköpschef …" },
    ],
    faq: [
      {
        q: "Vad är internkommunikation?",
        a: "All kommunikation mellan ett företag och dess medarbetare: beslut, nyheter, förändringar och det som händer i branschen.",
      },
      {
        q: "Vilka kanaler är vanligast?",
        a: "Mejl, intranät, möten och chattverktyg. De fungerar bra för dem vid en dator, sämre för dem som inte sitter vid en.",
      },
      {
        q: "Hur följer man upp internkommunikation?",
        a: "Se hur många som tagit del av ett budskap, och fråga ett urval om de förstått det. Följ upp i samma kanal nästa gång.",
      },
      {
        q: "Vem ansvarar för internkommunikationen?",
        a: "Ofta en kommunikatör eller HR, men cheferna bär en stor del. Det viktiga är att någon äger helheten.",
      },
    ],
    related: ["losningar/internkommunikation", "roller/internkommunikator", "guider/kommunikationsplan"],
    article: {
      answer:
        "Internkommunikation är allt ett företag säger till sina egna medarbetare: beslut, nyheter och förändringar. Bra internkommunikation når alla, även dem som inte sitter vid en dator. Och man vet att budskapet kom fram och förstods, inte bara att det skickades. Den är kort, återkommer och sägs i kanaler som folk faktiskt använder.",
      sections: [
        {
          h: "Vad är internkommunikation?",
          p: "Det är kommunikationen inom företaget, mellan ledning, chefer och medarbetare. Den handlar om beslut och förändringar, men också om att alla förstår vad som händer i branschen och på marknaden. Målet är att alla kan göra sitt jobb med samma bild av läget.",
        },
        {
          h: "Den når alla – även dem utan dator",
          p: "I många företag sitter en stor del av personalen aldrig vid ett skrivbord. Mejl och intranät når dem sent eller inte alls. Bra internkommunikation utgår från var folk faktiskt är: i butiken, på bygget, i bilen eller på golvet.",
        },
        {
          h: "Man vet att det kom fram",
          p: "Att något är skickat betyder inte att det är hört. Bra internkommunikation följer upp hur många som tagit del av budskapet och om det förstods. I Newstail får varje internt budskap ett kvitto, till exempel hört av 34 av 41.",
        },
        {
          h: "Den är kort och återkommer",
          p: "Långa texter läses inte till slut. Säg det viktigaste kort, och säg det igen. Ett budskap som hörs flera gånger fastnar bättre än ett som skickas en gång.",
        },
        {
          h: "Den går åt båda hållen",
          p: "Medarbetarna behöver kunna ställa frågor och få svar. Fånga upp frågorna, och svara på dem i samma kanal som budskapet gick ut i.",
        },
      ],
    },
  },

  {
    cluster: "guider",
    slug: "kommunicera-forandring",
    name: "Kommunicera förändring",
    card: "Säg det flera gånger, i kanaler som når alla, och följ upp vad som gick fram.",
    metaTitle: "Kommunicera förändring – så gör du | Newstail",
    metaDescription:
      "Så kommunicerar du en förändring så att alla hänger med. Säg det flera gånger, i kanaler som når alla, och följ upp vad som gick fram.",
    h1: "Så kommunicerar du en förändring så att alla hänger med",
    lead: "Säg det flera gånger, så att alla hör det, och följ upp.",
    phone: { topic: "INTERNT", title: "Vi slår ihop kundservice och sälj", src: "Internt" },
    pains: [
      { t: "Beskedet ges en gång, på ett möte.", d: "Den som inte var där hör det i korridoren." },
      { t: "Ryktet hinner före beskedet.", d: "Och det är svårt att rätta i efterhand." },
      { t: "Ingen vet vad som gick fram.", d: "Förrän frågorna visar att det inte gjorde det." },
    ],
    rows: [
      {
        t: "Samma besked, samma dag",
        d: "Inspelat en gång, hört av alla.",
        visual: { kind: "inside", title: "Vi slår ihop kundservice och sälj", heard: 37, of: 41 },
      },
      {
        t: "Berörda team får mer",
        d: "Kundservice får detaljerna. Alla får beskedet.",
        visual: {
          kind: "teams",
          title: "Så blir det nya teamet",
          teams: ["Alla", "Kundservice", "Sälj", "Ledning"],
          selected: 1,
        },
      },
      {
        t: "Se vad som gick fram",
        d: "Se hur många som hört varje steg.",
        visual: {
          kind: "reach",
          rows: [
            { t: "Vi slår ihop kundservice och sälj", heard: 37, of: 41 },
            { t: "Så blir det nya teamet", heard: 14, of: 15 },
            { t: "Frågor och svar om sammanslagningen", heard: 30, of: 41 },
          ],
        },
      },
    ],
    script: [
      {
        topic: "INTERNT",
        t: "Hej Peter. Något internt: kundservice och sälj blir ett team från första januari. Ingen förlorar sitt jobb, och din chef går igenom det med er på torsdag.",
      },
      { topic: "INTERNT", t: "En sak till om sammanslagningen: frågorna från i går har fått svar, och du hittar dem i recapen." },
      { topic: "BRANSCH", t: "Sedan branschen. Fler företag samlar kundkontakten i ett team …" },
    ],
    faq: [
      {
        q: "Vad är förändringskommunikation?",
        a: "Kommunikationen kring en förändring: varför den görs, vad den betyder för var och en och vad som händer härnäst.",
      },
      {
        q: "Hur ofta ska man upprepa budskapet?",
        a: "Oftare än det känns nödvändigt. Den som berättar har hört det många gånger, de flesta andra bara en gång.",
      },
      {
        q: "Vem ska berätta om förändringen?",
        a: "Ledningen förklarar varför. Närmaste chef förklarar vad det betyder för teamet. Båda behövs.",
      },
      {
        q: "Hur vet man att budskapet gick fram?",
        a: "Följ upp. Se hur många som tagit del av det, och lyssna på vilka frågor som kommer. När frågorna ändrar karaktär har grunden gått fram.",
      },
    ],
    related: ["losningar/forandringskommunikation", "guider/kommunikationsplan", "roller/vd-och-ledning"],
    article: {
      answer:
        "Säg det flera gånger, i kanaler som når alla, och följ upp vad som gick fram. Förklara varför förändringen görs, vad den betyder för var och en och vad som händer härnäst. Ge folk chansen att ställa frågor, och upprepa budskapet tills frågorna ändrar karaktär.",
      sections: [
        {
          h: "Börja med varför",
          p: "Folk accepterar mycket om de förstår skälet. Förklara vad som inte fungerar i dag och vad förändringen ska lösa. Säg också vad som inte förändras.",
        },
        {
          h: "Säg det flera gånger",
          p: "Ett besked på ett möte räcker inte. Den som berättar har levt med beslutet i veckor, alla andra hör det för första gången. Upprepa budskapet i olika former tills det sitter.",
          list: [
            "Beskedet – vad som händer och varför.",
            "Vad det betyder – för varje team.",
            "Frågor och svar – det som kommit in.",
            "Läget – hur det går, och vad som händer härnäst.",
          ],
        },
        {
          h: "Välj kanaler som når alla",
          p: "Ryktet hittar alltid fram till dem som inte sitter vid en dator. Se till att beskedet också gör det, samma dag för alla. Kanaler som går att lyssna på, i telefonen eller i hörlurarna, når även dem som är ute i verksamheten.",
        },
        {
          h: "Låt cheferna vara förberedda",
          p: "Teamen vänder sig till sin närmaste chef med frågorna. Ge cheferna beskedet strax innan alla andra, och svar på de vanligaste frågorna.",
        },
        {
          h: "Följ upp vad som gick fram",
          p: "Se hur många som tagit del av varje steg, och lyssna på frågorna som kommer. Med Newstail ser ni per team hur många som hört ett internt budskap, och ett kort quiz efteråt visar om det fastnade.",
        },
      ],
    },
  },
];
