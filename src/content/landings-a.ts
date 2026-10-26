import type { Landing } from "./landing-types";

export const landingsA: Landing[] = [
  // ───────────── Lösningar ─────────────
  {
    cluster: "losningar",
    slug: "internkommunikation",
    name: "Internkommunikation",
    card: "Nå alla med det som händer i bolaget, även dem som aldrig sitter vid en dator.",
    metaTitle: "Internkommunikation som når alla | Newstail",
    metaDescription:
      "Internkommunikation som når hela personalen. Varje medarbetare får en egen uppläst sändning i mobilen, och ni ser per team att budskapet kom fram.",
    h1: "Internkommunikation som når alla, även dem utan dator",
    lead: "Varje medarbetare får en egen uppläst sändning i mobilen, med det interna överst.",
    phone: { topic: "INTERNT", title: "Nya skiftscheman gäller från måndag", src: "Från ledningen" },
    pains: [
      { t: "Mejlen läses av dem vid skrivbordet", d: "De på golvet, i butiken eller i bilen missar det mesta." },
      { t: "Intranätet öppnas sällan", d: "Det viktiga ligger där, men få går in och letar." },
      { t: "Ni vet inte vad som gick fram", d: "Ett skickat mejl säger inget om vem som tog del av det." },
    ],
    rows: [
      {
        t: "Internt överst i sändningen",
        d: "Det ni publicerar läses upp innan bransch och omvärld.",
        visual: { kind: "inside", title: "Nya skiftscheman från måndag", heard: 34, of: 41 },
      },
      {
        t: "Till alla eller ett team",
        d: "Ni väljer vilka som ska höra budskapet.",
        visual: { kind: "teams", title: "Ny rutin vid leverans", teams: ["Alla", "Lager", "Butik", "Kontor"], selected: 1 },
      },
      {
        t: "Se att det kom fram",
        d: "Varje budskap får ett kvitto, till exempel Hört av 34 av 41.",
        visual: {
          kind: "reach",
          rows: [
            { t: "Nya skiftscheman från måndag", heard: 34, of: 41 },
            { t: "Ny rutin vid leverans", heard: 12, of: 14 },
            { t: "Julbordet bokat till 12 december", heard: 38, of: 41 },
          ],
        },
      },
    ],
    script: [
      { topic: "INTERNT", t: "Hej Sara. Från och med måndag gäller nya skiftscheman på lagret. Ditt team har fått sitt i appen." },
      { topic: "BRANSCH", t: "I branschen satsar fler lager på kortare leveranstider inför julhandeln." },
      { topic: "NÅGOT NYTT", t: "Och något utanför dina ämnen: allt fler cyklar till jobbet även på vintern." },
    ],
    faq: [
      {
        q: "Behöver medarbetarna sitta vid en dator?",
        a: "Nej. De lyssnar i iPhone-appen, på låsskärmen eller i hörlurarna. För att gå med behövs en jobbmejl.",
      },
      {
        q: "Vem kan publicera?",
        a: "Admin och de ni ger rätten i ett team. Man talar in eller skriver, värden formulerar och man lyssnar igenom innan det går ut.",
      },
      {
        q: "Ser ni vad en enskild person har hört?",
        a: "Nej. Ni ser siffror per team från fem personer, aldrig vad en enskild person har hört.",
      },
      {
        q: "Vad kostar det?",
        a: "179 kr per användare och månad, exkl. moms. Allt ingår, och ni provar gratis i 14 dagar utan kort.",
      },
      {
        q: "Hur snabbt kommer vi igång?",
        a: "Registrera er med jobbmejl, så läser vi in bransch, marknad och konkurrenter. Sändningen kan komma samma dag och inga integrationer behövs.",
      },
    ],
    related: ["losningar/app-for-personalen", "roller/internkommunikator", "/pris/"],
  },

  {
    cluster: "losningar",
    slug: "intranat",
    name: "Behöver ni ett intranät?",
    card: "Intranätet får vara kvar. Newstail tar det viktigaste till dem som aldrig öppnar det.",
    metaTitle: "Intranät för små företag, eller nå ut? | Newstail",
    metaDescription:
      "Funderar ni på att skapa ett intranät? Fråga er om ni behöver ett arkiv eller nå ut. Newstail läser upp det viktigaste för alla i mobilen.",
    h1: "Behöver ni ett intranät, eller behöver ni nå ut?",
    lead: "Newstail ersätter inte intranätet. Det tar det viktigaste till dem som aldrig öppnar det.",
    phone: { topic: "INTERNT", title: "Ny rutin för semesteransökan i höst", src: "Från HR" },
    pains: [
      { t: "Intranätet blev ett arkiv", d: "Där finns allt, men få går dit frivilligt." },
      { t: "Nyheterna drunknar bland dokumenten", d: "Det som är viktigt i dag ser ut som allt annat." },
      { t: "De som jobbar ute loggar aldrig in", d: "De har annat för sig än att leta på en startsida." },
    ],
    rows: [
      {
        t: "Det viktiga läses upp",
        d: "Det ni publicerar hamnar överst i varje medarbetares sändning.",
        visual: { kind: "inside", title: "Ny rutin för semesteransökan", heard: 38, of: 41 },
      },
      {
        t: "Internt och omvärld tillsammans",
        d: "Efter det interna kommer bransch, marknad, kunder och egna ämnen.",
        visual: { kind: "topics", chips: ["Internt", "Bransch", "Marknad", "Kunder", "Konkurrenter", "Egna ämnen"] },
      },
      {
        t: "Se att det kom fram",
        d: "Kvittot visar hur många som hört budskapet, per team.",
        visual: {
          kind: "reach",
          rows: [
            { t: "Ny rutin för semesteransökan", heard: 38, of: 41 },
            { t: "Nya parkeringsregler vid kontoret", heard: 29, of: 41 },
            { t: "Brandövning på torsdag", heard: 40, of: 41 },
          ],
        },
      },
    ],
    script: [
      {
        topic: "INTERNT",
        t: "Hej Johan. HR påminner om att semesteransökan för vintern ska vara inne senast den 15 november. Den görs som vanligt via din chef.",
      },
      { topic: "MARKNAD", t: "På marknaden väntas fler mindre bolag se över sina lokalkostnader nästa år." },
      { topic: "NÅGOT NYTT", t: "Och något nytt: korta promenadmöten blir vanligare på svenska arbetsplatser." },
    ],
    faq: [
      {
        q: "Ersätter Newstail vårt intranät?",
        a: "Nej. Intranätet kan ligga kvar som arkiv. Newstail tar det viktigaste därifrån till alla, uppläst i mobilen.",
      },
      {
        q: "Vi har inget intranät. Räcker Newstail?",
        a: "Om ni mest behöver nå ut med besked och nyheter kan det räcka. Behöver ni ett ställe för dokument och policys behöver ni något mer.",
      },
      {
        q: "Måste vi koppla ihop det med intranätet?",
        a: "Nej, det finns inga integrationer. Ni publicerar direkt i appen genom att tala in eller skriva.",
      },
      {
        q: "Passar det för mindre företag?",
        a: "Ja, från 10 användare. Det kostar 179 kr per användare och månad, allt ingår.",
      },
    ],
    related: ["losningar/app-for-personalen", "jamfor/spintr", "/sa-funkar-det/"],
  },

  {
    cluster: "losningar",
    slug: "app-for-personalen",
    name: "App för personalen",
    card: "En medarbetarapp som läser upp det viktiga för dem som aldrig öppnar intranätet.",
    metaTitle: "Medarbetarapp som läser upp nyheterna | Newstail",
    metaDescription:
      "En personalapp där varje medarbetare får en egen uppläst sändning: internt, bransch och omvärld. Ni ser per team att budskapen kom fram.",
    h1: "En app för personalen som når dem som aldrig öppnar intranätet",
    lead: "Varje medarbetare får en egen uppläst sändning på 3 till 10 minuter, med det interna överst.",
    phone: { topic: "INTERNT", title: "Personalfesten flyttas till fredag", src: "Från kontoret" },
    pains: [
      { t: "Ännu en app som ingen öppnar", d: "Personalen har redan nog av appar som vill bli lästa." },
      { t: "Text funkar dåligt på jobbet", d: "Det är svårt att läsa med händerna fulla." },
      { t: "Alla läser inte svenska lika lätt", d: "Ett viktigt besked kan gå förlorat på vägen." },
    ],
    rows: [
      {
        t: "Personlig för varje roll",
        d: "Bransch, marknad och kunder efter roll, plus upp till tio egna ämnen.",
        visual: { kind: "topics", chips: ["Internt", "Bransch", "Kunder", "Konkurrenter", "Fotboll", "Trädgård"] },
      },
      {
        t: "Varje lyssnare sitt språk",
        d: "Interna budskap hörs på svenska, engelska, tyska eller spanska.",
        visual: {
          kind: "language",
          lines: [
            { code: "SV", t: "Personalfesten flyttas till fredag" },
            { code: "EN", t: "The staff party moves to Friday" },
            { code: "DE", t: "Die Betriebsfeier wird auf Freitag verlegt" },
            { code: "ES", t: "La fiesta del personal pasa al viernes" },
          ],
        },
      },
      {
        t: "Se att det kom fram",
        d: "Varje internt budskap får ett kvitto, till exempel Hört av 38 av 41.",
        visual: { kind: "inside", title: "Personalfesten flyttas till fredag", heard: 38, of: 41 },
      },
    ],
    script: [
      { topic: "INTERNT", t: "Hej Amir. Personalfesten flyttas till fredag. Anmälan är öppen en vecka till." },
      { topic: "KUNDER", t: "Hos era kunder inom handeln märks att fler vill ha leveranser på kvällstid." },
      { topic: "KONKURRENTER", t: "Bland konkurrenterna satsar flera på egna transporter i regionen." },
    ],
    faq: [
      { q: "Vilka telefoner fungerar det på?", a: "iPhone i dag. Android och webb är på väg." },
      {
        q: "Hur styr man appen?",
        a: "Tryck på klotet för paus, svep för nästa eller föregående och håll för Berätta mer. Det går också från låsskärmen och hörlurarna.",
      },
      {
        q: "Hur lång är sändningen?",
        a: "Mellan 3 och 10 minuter, var och en väljer själv. Det man redan hört hoppas över.",
      },
      { q: "Kan vi välja vem som får ett budskap?", a: "Ja. Ni skickar till alla eller till ett team." },
      {
        q: "Hur går kollegorna med?",
        a: "De går med med sin jobbmejl. Sändningen kan komma samma dag.",
      },
    ],
    related: ["losningar/intranat", "roller/hr", "branscher/handel-och-butik"],
  },

  {
    cluster: "losningar",
    slug: "forandringskommunikation",
    name: "Förändringskommunikation",
    card: "Säg det en gång, uppläst för alla, och se vilka team som behöver höra det igen.",
    metaTitle: "Förändringskommunikation som når fram | Newstail",
    metaDescription:
      "Kommunicera förändring en gång, uppläst för alla på sitt eget språk. Se per team att beskedet kom fram och vilka som behöver höra det igen.",
    h1: "Förändrings\u00ADkommunikation: säg det en gång, till alla",
    lead: "Beskedet läses upp för varje medarbetare, och ni ser vilka team som behöver höra det igen.",
    phone: { topic: "INTERNT", title: "Så blir den nya organisationen från januari", src: "Från vd" },
    pains: [
      { t: "Ryktet kommer före beskedet", d: "När informationen droppar in fyller folk i luckorna själva." },
      { t: "Alla hör olika versioner", d: "Varje chef berättar på sitt sätt." },
      { t: "Ni vet inte vilka som missade", d: "Det märks ofta när det redan är för sent." },
    ],
    rows: [
      {
        t: "Samma ord till alla",
        d: "Ni talar in beskedet, värden formulerar och ni lyssnar igenom innan.",
        visual: {
          kind: "teams",
          title: "Ny organisation från januari",
          teams: ["Alla", "Produktion", "Sälj", "Kontor"],
          selected: 0,
        },
      },
      {
        t: "Se var det landat",
        d: "Kvittot per team visar vilka som behöver höra det igen.",
        visual: {
          kind: "reach",
          rows: [
            { t: "Ny organisation från januari", heard: 38, of: 41 },
            { t: "Frågor och svar om flytten", heard: 29, of: 41 },
            { t: "Nya chefer presenteras", heard: 35, of: 41 },
          ],
        },
      },
      {
        t: "Kort quiz efteråt",
        d: "Ledningen ser per team om det man hört satt.",
        visual: { kind: "inside", title: "Frågor och svar om flytten", heard: 29, of: 41 },
      },
    ],
    script: [
      {
        topic: "INTERNT",
        t: "Hej Lina. Ett besked från vd: från januari blir sälj och kundtjänst ett team. Din chef bokar ett möte med er nästa vecka.",
      },
      { topic: "BRANSCH", t: "I branschen ser fler bolag över hur sälj och service hänger ihop." },
      { topic: "MARKNAD", t: "På marknaden väntas efterfrågan hålla i sig under vintern." },
    ],
    faq: [
      { q: "Kan vi skicka ett besked till bara ett team?", a: "Ja. Ni väljer alla eller ett team när ni publicerar." },
      {
        q: "Ser vi vem som inte har lyssnat?",
        a: "Nej. Ni ser hur många som hört per team, från fem personer, aldrig vad en enskild person har hört.",
      },
      {
        q: "Hur når vi dem som missat?",
        a: "Interna budskap man inte har hört kommer med i fredagsmejlet under Det här missade du.",
      },
      {
        q: "Vad händer om personalen talar olika språk?",
        a: "Var och en väljer värdens språk: svenska, engelska, tyska eller spanska. Interna budskap hörs på varje lyssnares språk.",
      },
    ],
    related: ["guider/kommunicera-forandring", "roller/vd-och-ledning", "losningar/internkommunikation"],
  },

  {
    cluster: "losningar",
    slug: "omvarldsbevakning",
    name: "Omvärldsbevakning för hela personalen",
    card: "Bransch, marknad, kunder och konkurrenter, uppläst för alla och inte bara ledningen.",
    metaTitle: "Omvärldsbevakning för hela personalen | Newstail",
    metaDescription:
      "Omvärldsbevakning för alla, inte bara ledningen. Varje medarbetare hör bransch, marknad, kunder och konkurrenter efter sin roll, uppläst varje dag.",
    h1: "Omvärldsbevakning för hela personalen, inte bara ledningen",
    lead: "Var och en hör vad som händer i bransch, marknad, hos kunder och konkurrenter, efter sin roll.",
    phone: { topic: "BRANSCH", title: "Byggstarterna väntas öka igen nästa år", src: "Branschpress" },
    pains: [
      { t: "Bevakningen stannar i ledningsgruppen", d: "Resten av bolaget får veta i efterhand, om alls." },
      { t: "Ingen hinner läsa sammanställningen", d: "Mejlet med länkar blir liggande." },
      { t: "Säljarna missar det som skrivs om kunden", d: "Det når inte dem som träffar kunden varje vecka." },
    ],
    rows: [
      {
        t: "Ämnen efter roll",
        d: "Vi läser in bransch, marknad och konkurrenter när ni registrerar er.",
        visual: { kind: "topics", chips: ["Bransch", "Marknad", "Kunder", "Konkurrenter", "Logistik", "Energi"] },
      },
      {
        t: "Ledningens tolkning hörs också",
        d: "Ett internt budskap läses upp före omvärlden i samma sändning.",
        visual: { kind: "inside", title: "Vad betyder räntan för oss?", heard: 34, of: 41 },
      },
      {
        t: "På varje lyssnares språk",
        d: "Värden talar svenska, engelska, tyska eller spanska.",
        visual: {
          kind: "language",
          lines: [
            { code: "SV", t: "Byggstarterna väntas öka igen nästa år" },
            { code: "EN", t: "Housing starts expected to rise again next year" },
            { code: "DE", t: "Baubeginne sollen nächstes Jahr wieder steigen" },
          ],
        },
      },
    ],
    script: [
      {
        topic: "INTERNT",
        t: "Hej Erik. Ledningen om veckans ränteläge: investeringsplanen för i år ligger fast.",
      },
      { topic: "MARKNAD", t: "På marknaden väntas byggstarterna öka igen nästa år, efter två svaga år." },
      { topic: "KONKURRENTER", t: "Bland konkurrenterna satsar flera på egna montageteam." },
    ],
    faq: [
      { q: "Vilka källor används?", a: "Betrodda källor per marknad. Varje punkt har sin källa i recapen efter sändningen." },
      {
        q: "Kan man följa egna ämnen?",
        a: "Ja, upp till tio, och de är privata. Varje dag kommer också Något nytt utanför ens ämnen.",
      },
      {
        q: "Hur vet appen vad som är relevant för oss?",
        a: "När ni registrerar er läser vi in bransch, marknad och konkurrenter. Ämnena följer sedan varje medarbetares roll.",
      },
      { q: "Vad gör man om man vill veta mer?", a: "Håll på klotet, så fördjupar värden med färska källor." },
    ],
    related: ["jamfor/omvarldsbevakning-verktyg", "guider/omvarldsanalys", "roller/vd-och-ledning"],
  },

  // ───────────── Roller ─────────────
  {
    cluster: "roller",
    slug: "internkommunikator",
    name: "För internkommunikatören",
    card: "Nå ut till alla, se att det kom fram och spara tid på vägen.",
    metaTitle: "Internkommunikatör: nå alla och se det | Newstail",
    metaDescription:
      "För dig som internkommunikatör: tala in ett budskap, låt värden formulera och läsa upp det för alla. Se sedan Hört av x av y per team.",
    h1: "För dig som ska nå alla och har ont om tid",
    lead: "Tala in budskapet, låt värden formulera det och se att det kom fram.",
    phone: { topic: "INTERNT", title: "Nytt nummer till it-supporten från i dag", src: "Från kommunikation" },
    pains: [
      { t: "Du skriver, men vet inte vem som tog del", d: "Ett skickat mejl säger inget om vad som gick fram." },
      { t: "Samma budskap i fem kanaler", d: "Mejl, intranät, skärmar och möten, och ändå missar någon." },
      { t: "Varje text tar en halv dag", d: "Utkast, granskning och godkännande äter tiden." },
    ],
    rows: [
      {
        t: "Tala in, värden formulerar",
        d: "Du lyssnar igenom innan det går ut.",
        visual: { kind: "inside", title: "Nytt nummer till it-supporten", heard: 34, of: 41 },
      },
      {
        t: "Alla eller ett team",
        d: "Du väljer vilka som ska höra det.",
        visual: { kind: "teams", title: "Nya rutiner för besökare", teams: ["Alla", "Reception", "Lager", "Kontor"], selected: 1 },
      },
      {
        t: "Kvitto på varje budskap",
        d: "Hört av per team, och på fredagar ett mejl med hur många som lyssnade.",
        visual: {
          kind: "reach",
          rows: [
            { t: "Nytt nummer till it-supporten", heard: 34, of: 41 },
            { t: "Nya rutiner för besökare", heard: 6, of: 7 },
            { t: "Kontoret stänger tidigt på fredag", heard: 37, of: 41 },
          ],
        },
      },
    ],
    script: [
      {
        topic: "INTERNT",
        t: "Hej Maja. It-supporten har fått ett nytt nummer från i dag. Du hittar det i recapen efter sändningen.",
      },
      { topic: "BRANSCH", t: "I branschen märks att fler bolag kortar sina interna utskick." },
      { topic: "NÅGOT NYTT", t: "Och något nytt: fler arbetsplatser inför mötesfria förmiddagar." },
    ],
    faq: [
      {
        q: "Vem kan publicera?",
        a: "Admin och de ni ger rätten i ett team. Att publicera är gratis.",
      },
      {
        q: "Kan medarbetarna läsa i efterhand?",
        a: "Ja. Efter sändningen finns en recap med punkterna i text och källor. Den går att dela och skicka till en kollega.",
      },
      {
        q: "Vad står i fredagsmejlet?",
        a: "Medarbetarna får Din vecka och Det här missade du. Admin får hur många som lyssnade, X av Y.",
      },
      {
        q: "Ser jag vad en enskild person har hört?",
        a: "Nej. Du ser siffror per team från fem personer, aldrig vad en enskild person har hört.",
      },
    ],
    related: ["losningar/internkommunikation", "guider/bra-internkommunikation", "guider/kommunikationsplan"],
  },

  {
    cluster: "roller",
    slug: "hr",
    name: "För HR",
    card: "Alla med, oavsett språk och arbetsplats, och nya medarbetare hör samma sak.",
    metaTitle: "HR: nå alla medarbetare på deras språk | Newstail",
    metaDescription:
      "För HR: få med alla oavsett språk och arbetsplats. Besked läses upp på varje medarbetares språk, och nya kollegor hör samma sak som alla andra.",
    h1: "För HR: alla med, oavsett språk och arbetsplats",
    lead: "Varje besked läses upp på medarbetarens eget språk, i mobilen, var de än jobbar.",
    phone: { topic: "INTERNT", title: "Så funkar friskvårdsbidraget i år", src: "Från HR" },
    pains: [
      { t: "Alla läser inte svenska", d: "Ett viktigt besked kan tolkas fel eller missas helt." },
      { t: "Nya hör saker i andra hand", d: "Det som sades för ett år sedan når dem inte." },
      { t: "Personalen sitter på olika ställen", d: "Kontor, lager, butik och hemma når ni på olika sätt." },
    ],
    rows: [
      {
        t: "Varje lyssnare sitt språk",
        d: "Svenska, engelska, tyska eller spanska, var och en väljer själv.",
        visual: {
          kind: "language",
          lines: [
            { code: "SV", t: "Så funkar friskvårdsbidraget i år" },
            { code: "EN", t: "How this year's wellness allowance works" },
            { code: "ES", t: "Así funciona la ayuda de bienestar este año" },
          ],
        },
      },
      {
        t: "Till alla eller ett team",
        d: "Skicka till hela bolaget eller bara till de nyanställda.",
        visual: { kind: "teams", title: "Välkommen till introduktionen", teams: ["Alla", "Nyanställda", "Lager", "Butik"], selected: 1 },
      },
      {
        t: "Se att det kom fram",
        d: "Kvittot visar per team hur många som hört, och quizen om det satt.",
        visual: { kind: "inside", title: "Så funkar friskvårdsbidraget", heard: 38, of: 41 },
      },
    ],
    script: [
      {
        topic: "INTERNT",
        t: "Hej Fatima. HR påminner om friskvårdsbidraget. Det gäller hela året och söks som vanligt i lönesystemet.",
      },
      { topic: "BRANSCH", t: "I branschen märks att fler arbetsgivare satsar på kortare introduktioner i flera steg." },
      { topic: "NÅGOT NYTT", t: "Och något nytt: fler arbetsplatser erbjuder språkkurser på arbetstid." },
    ],
    faq: [
      {
        q: "Vilka språk finns?",
        a: "Svenska, engelska, tyska och spanska. Interna budskap hörs på varje lyssnares språk.",
      },
      {
        q: "Ser HR vad en enskild medarbetare har hört?",
        a: "Nej. Ni ser siffror per team från fem personer, aldrig vad en enskild person har hört.",
      },
      {
        q: "Hur går en ny medarbetare med?",
        a: "Med sin jobbmejl. Sändningen kan komma samma dag.",
      },
      {
        q: "Var lagras uppgifterna?",
        a: "Databasen ligger i Sverige och data lagras inom EU. Ingen modell tränas på era data, och kontot kan raderas i appen.",
      },
    ],
    related: ["roller/internkommunikator", "branscher/vard-och-omsorg", "/trygghet/"],
  },

  {
    cluster: "roller",
    slug: "vd-och-ledning",
    name: "För vd och ledning",
    card: "Samma bild i hela bolaget, och ni ser att beskeden landar per team.",
    metaTitle: "Vd och ledning: samma bild i hela bolaget | Newstail",
    metaDescription:
      "För vd och ledning: ge hela bolaget samma bild av läget, internt och i omvärlden. Ni ser per team att beskeden landar och om de satt.",
    h1: "Samma bild i hela bolaget, från ledningen till golvet",
    lead: "Ert besked och omvärlden i samma sändning, och ni ser per team att det landar.",
    phone: { topic: "INTERNT", title: "Vd om kvartalet: så går vi vidare", src: "Från vd" },
    pains: [
      { t: "Beskedet förändras på vägen ner", d: "Varje led lägger till och drar ifrån." },
      { t: "Ledningen vet mer om omvärlden", d: "Resten av bolaget saknar bilden bakom besluten." },
      { t: "Ni vet inte om det landade", d: "Det märks när frågorna kommer i korridoren." },
    ],
    rows: [
      {
        t: "Tala in på några minuter",
        d: "Värden formulerar och du lyssnar igenom innan det går ut.",
        visual: { kind: "inside", title: "Vd om kvartalet", heard: 38, of: 41 },
      },
      {
        t: "Internt och omvärld tillsammans",
        d: "Efter ert besked kommer bransch, marknad, kunder och konkurrenter.",
        visual: { kind: "topics", chips: ["Internt", "Bransch", "Marknad", "Kunder", "Konkurrenter"] },
      },
      {
        t: "Se att det landar",
        d: "Hört av per team, och ett kort quiz visar om det satt.",
        visual: {
          kind: "reach",
          rows: [
            { t: "Vd om kvartalet", heard: 38, of: 41 },
            { t: "Nytt mål för leveranstider", heard: 33, of: 41 },
            { t: "Välkommen till nya ekonomichefen", heard: 36, of: 41 },
          ],
        },
      },
    ],
    script: [
      {
        topic: "INTERNT",
        t: "Hej Anders. Vd om kvartalet: orderingången höll, och fokus framåt är kortare leveranstider.",
      },
      { topic: "MARKNAD", t: "På marknaden väntas efterfrågan vara stabil in i nästa år." },
      { topic: "KUNDER", t: "Hos era största kunder märks en större vilja att teckna längre avtal." },
    ],
    faq: [
      {
        q: "Måste vd spela in med egen röst?",
        a: "Nej. Du talar in eller skriver, värden formulerar och läser upp. Du lyssnar igenom innan det går ut.",
      },
      {
        q: "Vad ser ledningen?",
        a: "Hört av per budskap och team, och hur många som mindes rätt i quizen. Aldrig vad en enskild person har hört.",
      },
      {
        q: "Vad kostar det?",
        a: "179 kr per användare och månad, exkl. moms. Allt ingår, och det finns ingen bindning.",
      },
      {
        q: "Hur mycket tid tar det för personalen?",
        a: "Mellan 3 och 10 minuter om dagen, var och en väljer själv.",
      },
    ],
    related: ["losningar/forandringskommunikation", "losningar/omvarldsbevakning", "/pris/"],
  },

  // ───────────── Jämför ─────────────
  {
    cluster: "jamfor",
    slug: "spintr",
    name: "Newstail och Spintr",
    card: "Spintr är ett intranät. Newstail läser upp det viktigaste för var och en.",
    metaTitle: "Spintr och Newstail: vad är skillnaden? | Newstail",
    metaDescription:
      "Spintr eller Newstail? Spintr är ett intranät och medarbetarverktyg. Newstail läser upp internt och omvärld för var och en, med kvitto per team.",
    h1: "Spintr och Newstail: vad är skillnaden?",
    lead: "Newstail ersätter inte ett intranät. Det lägger till en uppläst sändning med internt och omvärld.",
    phone: { topic: "INTERNT", title: "Nya öppettider på lagret från november", src: "Från ledningen" },
    pains: [
      { t: "Nyheterna ligger där, men läses inte", d: "Det kräver att man går in och letar." },
      { t: "De som jobbar ute hänger inte med", d: "Text på en skärm funkar dåligt mitt i jobbet." },
      { t: "Omvärlden saknas i det interna", d: "Bransch och marknad hamnar någon annanstans." },
    ],
    rows: [
      {
        t: "Uppläst i stället för text",
        d: "Varje medarbetare får en egen sändning på 3 till 10 minuter.",
        visual: { kind: "inside", title: "Nya öppettider på lagret", heard: 34, of: 41 },
      },
      {
        t: "Internt och omvärld tillsammans",
        d: "Internt överst, sedan bransch, marknad, kunder och konkurrenter.",
        visual: { kind: "topics", chips: ["Internt", "Bransch", "Marknad", "Kunder", "Konkurrenter"] },
      },
      {
        t: "Se att det kom fram",
        d: "Varje internt budskap får ett kvitto per team.",
        visual: {
          kind: "reach",
          rows: [
            { t: "Nya öppettider på lagret", heard: 34, of: 41 },
            { t: "Ny leverantör av arbetskläder", heard: 30, of: 41 },
            { t: "Julbordet bokat", heard: 39, of: 41 },
          ],
        },
      },
    ],
    script: [
      { topic: "INTERNT", t: "Hej Oskar. Lagret får nya öppettider från november. Schemat ligger i intranätet som vanligt." },
      { topic: "BRANSCH", t: "I branschen väntas fler lager gå över till två skift under vintern." },
      { topic: "KUNDER", t: "Hos era kunder märks en ökad efterfrågan inför årsskiftet." },
    ],
    faq: [
      {
        q: "Ersätter Newstail Spintr?",
        a: "Nej. Newstail ersätter inte ett intranät. Det läser upp det viktigaste, internt och omvärld, för var och en.",
      },
      {
        q: "Kan vi använda båda?",
        a: "Ja. Det finns inga integrationer, så ni publicerar det viktigaste direkt i Newstail-appen.",
      },
      {
        q: "Vad kostar Newstail?",
        a: "179 kr per användare och månad, exkl. moms, 10 användare ingår. Allt ingår.",
      },
      {
        q: "Ser man vad en enskild person har hört?",
        a: "Nej. Ni ser siffror per team från fem personer, aldrig vad en enskild person har hört.",
      },
    ],
    related: ["losningar/intranat", "jamfor/actimo", "/pris/"],
    compare: {
      other: "Spintr",
      rows: [
        { label: "Vad det är", newstail: "Uppläst nyhetssändning i mobilen", other: "Intranät och medarbetarverktyg" },
        { label: "Format", newstail: "Uppläst av en värd, 3–10 min", other: "Text och bild" },
        { label: "Omvärld", newstail: "Bransch, marknad, kunder, konkurrenter", other: "[kontrollera]" },
        { label: "Se att det kom fram", newstail: "Hört av x av y per team", other: "[kontrollera]" },
        { label: "Dokument och arkiv", newstail: "Nej, det har intranätet", other: "Ja" },
        { label: "Pris", newstail: "179 kr per användare och månad", other: "Fråga Spintr" },
      ],
      fair: "Behöver ni ett intranät med dokument och ett gemensamt ställe för allt passar Spintr bättre, och Newstail kan ligga bredvid.",
    },
  },

  {
    cluster: "jamfor",
    slug: "actimo",
    name: "Newstail och Actimo",
    card: "Båda når personal som inte sitter vid en dator. Newstail läser upp det.",
    metaTitle: "Actimo och Newstail: vad är skillnaden? | Newstail",
    metaDescription:
      "Actimo eller Newstail? Båda når frontlinjen. Newstail ger var och en en uppläst sändning med internt och omvärld, plus ett quiz på det man hört.",
    h1: "Actimo och Newstail: vad är skillnaden?",
    lead: "Båda når personal ute i verksamheten. Newstail gör det med en personlig, uppläst sändning.",
    phone: { topic: "INTERNT", title: "Ny rutin för kassaavslut från måndag", src: "Från butikschefen" },
    pains: [
      { t: "Det går inte att läsa mitt i jobbet", d: "Händerna är fulla och kunden står där." },
      { t: "Alla får samma utskick", d: "Det som rör en avdelning når alla." },
      { t: "Omvärlden når inte golvet", d: "Det som händer i branschen stannar på kontoret." },
    ],
    rows: [
      {
        t: "En personlig sändning",
        d: "Internt överst, sedan bransch, marknad och egna ämnen efter roll.",
        visual: { kind: "topics", chips: ["Internt", "Bransch", "Kunder", "Konkurrenter", "Egna ämnen"] },
      },
      {
        t: "Quiz på det man hört",
        d: "Ett kort quiz efteråt, och ledningen ser per team om det satt.",
        visual: { kind: "inside", title: "Ny rutin för kassaavslut", heard: 38, of: 41 },
      },
      {
        t: "Varje lyssnare sitt språk",
        d: "Interna budskap hörs på svenska, engelska, tyska eller spanska.",
        visual: {
          kind: "language",
          lines: [
            { code: "SV", t: "Ny rutin för kassaavslut från måndag" },
            { code: "EN", t: "New closing routine for the tills from Monday" },
          ],
        },
      },
    ],
    script: [
      { topic: "INTERNT", t: "Hej Elin. Från måndag gäller en ny rutin för kassaavslut. Din butikschef går igenom den på morgonmötet." },
      { topic: "BRANSCH", t: "I handeln väntas fler kunder handla tidigt inför julen i år." },
      { topic: "KONKURRENTER", t: "Bland konkurrenterna förlänger flera sina öppettider i december." },
    ],
    faq: [
      {
        q: "Vad är den största skillnaden?",
        a: "Newstail läser upp en personlig sändning för var och en, med både internt och omvärld. Man lyssnar i stället för att läsa.",
      },
      {
        q: "Har Newstail quiz?",
        a: "Ja, ett kort quiz på det man hört. Ledningen ser per team hur många som mindes rätt.",
      },
      {
        q: "Fungerar det på Android?",
        a: "I dag finns Newstail för iPhone. Android och webb är på väg.",
      },
      {
        q: "Vad kostar Newstail?",
        a: "179 kr per användare och månad, exkl. moms. Allt ingår, och det finns ingen bindning.",
      },
    ],
    related: ["losningar/app-for-personalen", "jamfor/spintr", "branscher/handel-och-butik"],
    compare: {
      other: "Actimo",
      rows: [
        { label: "Vad det är", newstail: "Uppläst nyhetssändning per medarbetare", other: "Medarbetarapp för frontlinjen" },
        { label: "Format", newstail: "Uppläst av en värd, 3–10 min", other: "Nyheter i text och bild" },
        { label: "Omvärld", newstail: "Bransch, marknad, kunder, konkurrenter", other: "Interna nyheter [kontrollera]" },
        { label: "Se att det kom fram", newstail: "Hört av x av y per team", other: "Bekräftelse på att man läst" },
        { label: "Quiz", newstail: "Kort quiz på det man hört", other: "Quiz och utbildning" },
        { label: "Finns för", newstail: "iPhone, Android och webb på väg", other: "[kontrollera]" },
      ],
      fair: "Vill ni bygga utbildningar och kurser för frontlinjen passar Actimo bättre.",
    },
  },

  {
    cluster: "jamfor",
    slug: "internt-nyhetsbrev",
    name: "Internt nyhetsbrev eller Newstail",
    card: "Internt nyhetsbrev som ingen läser? Låt det läsas upp.",
    metaTitle: "Internt nyhetsbrev som ingen läser? | Newstail",
    metaDescription:
      "Internt nyhetsbrev som ingen läser? Låt det läsas upp. Med Newstail hör varje medarbetare det interna i mobilen, och ni ser att det kom fram.",
    h1: "Internt nyhetsbrev som ingen läser? Låt det läsas upp",
    lead: "Läser personalen mejl funkar nyhetsbrevet. Annars publicerar ni i Newstail och det läses upp.",
    phone: { topic: "INTERNT", title: "Veckans nytt från kontoret i Norrvik", src: "Från kommunikation" },
    pains: [
      { t: "Nyhetsbrevet blir liggande i inkorgen", d: "Särskilt hos dem som sällan sitter vid en dator." },
      { t: "Det tar en dag att få ihop", d: "Text, bilder, layout och korrläsning." },
      { t: "Öppnat är inte samma sak som hört", d: "Ni vet inte om det viktiga gick fram." },
    ],
    rows: [
      {
        t: "Tala in, värden formulerar",
        d: "Du lyssnar igenom innan det går ut till alla eller ett team.",
        visual: { kind: "teams", title: "Veckans nytt från kontoret", teams: ["Alla", "Kontor", "Produktion", "Sälj"], selected: 0 },
      },
      {
        t: "Uppläst för var och en",
        d: "Det interna hamnar överst i varje medarbetares sändning.",
        visual: { kind: "inside", title: "Veckans nytt från kontoret", heard: 34, of: 41 },
      },
      {
        t: "Se att det kom fram",
        d: "Varje budskap får ett kvitto, Hört av x av y.",
        visual: {
          kind: "reach",
          rows: [
            { t: "Veckans nytt från kontoret", heard: 34, of: 41 },
            { t: "Ny kollega i Norrvik", heard: 31, of: 41 },
            { t: "Påminnelse om tidrapporten", heard: 38, of: 41 },
          ],
        },
      },
    ],
    script: [
      { topic: "INTERNT", t: "Hej Sofia. Veckans nytt från kontoret i Norrvik: ni har fått en ny kollega på ekonomi, Peter." },
      { topic: "BRANSCH", t: "I branschen väntas fler bolag samla sina interna utskick till ett om veckan." },
      { topic: "NÅGOT NYTT", t: "Och något nytt: korta pauser utomhus blir vanligare på svenska arbetsplatser." },
    ],
    faq: [
      {
        q: "Vilket verktyg passar för interna nyhetsbrev?",
        a: "Om all personal läser mejl funkar ett vanligt nyhetsbrevsverktyg. För dem som sällan läser mejl kan ni publicera i Newstail i stället.",
      },
      {
        q: "Kan vi ha både nyhetsbrev och Newstail?",
        a: "Ja. Det finns inga integrationer, ni publicerar det viktigaste direkt i appen.",
      },
      {
        q: "Får medarbetarna något i text?",
        a: "Ja. Efter sändningen finns en recap med punkterna i text, och på fredagar ett mejl med Din vecka och Det här missade du.",
      },
      {
        q: "Vad kostar det?",
        a: "179 kr per användare och månad, exkl. moms. Allt ingår – även att publicera.",
      },
    ],
    related: ["losningar/internkommunikation", "roller/internkommunikator", "guider/bra-internkommunikation"],
    compare: {
      other: "Internt nyhetsbrev",
      rows: [
        { label: "Format", newstail: "Uppläst i mobilen", other: "Text i mejlet" },
        { label: "Når", newstail: "Alla med appen", other: "De som läser sin mejl" },
        { label: "Arbete", newstail: "Tala in, värden formulerar", other: "Skriva, layouta, korrläsa" },
        { label: "Se att det kom fram", newstail: "Hört av x av y per team", other: "Öppningar och klick, beroende på verktyg" },
        { label: "Omvärld", newstail: "Bransch, marknad och kunder efter roll", other: "Det ni själva skriver" },
        { label: "Språk", newstail: "Varje lyssnares språk", other: "Oftast ett språk" },
      ],
      fair: "Har all personal mejl och läser den passar ett vanligt nyhetsbrev bra.",
    },
  },

  {
    cluster: "jamfor",
    slug: "omvarldsbevakning-verktyg",
    name: "Omvärldsbevakning: vad kostar det och vem får läsa?",
    card: "Bevakningstjänst, branschpress eller gratisverktyg, och vem som faktiskt får ta del.",
    metaTitle: "Omvärldsbevakning verktyg: vem får läsa? | Newstail",
    metaDescription:
      "Omvärldsbevakning och mediebevakning: jämför bevakningstjänster, branschpress och gratisverktyg med Newstail, där alla hör det viktigaste uppläst.",
    h1: "Omvärldsbevakning: vad kostar det och vem får läsa?",
    lead: "De flesta verktyg räknar per läsare eller licens. Newstail låter alla höra det viktigaste.",
    phone: { topic: "MARKNAD", title: "Fler mindre bolag ser över sina lokaler", src: "Affärspress" },
    pains: [
      { t: "Bevakningen räcker till några namngivna", d: "Resten av bolaget får det i andra hand." },
      { t: "Sammanfattningarna blir olästa", d: "Mejl med länkar hinner ingen gå igenom." },
      { t: "Gratisverktyg kräver att någon sållar", d: "Träffarna kommer, men någon måste välja vad som spelar roll." },
    ],
    rows: [
      {
        t: "Alla hör det viktigaste",
        d: "Bransch, marknad, kunder och konkurrenter efter roll, uppläst varje dag.",
        visual: { kind: "topics", chips: ["Bransch", "Marknad", "Kunder", "Konkurrenter", "Fastighet", "Ränta"] },
      },
      {
        t: "Källa på varje punkt",
        d: "Recapen visar punkterna i text med källor, och går att dela.",
        visual: { kind: "inside", title: "Så påverkar läget våra hyresgäster", heard: 33, of: 41 },
      },
      {
        t: "Ett pris per användare",
        d: "179 kr per användare och månad, allt ingår.",
        visual: {
          kind: "reach",
          rows: [
            { t: "Så påverkar läget våra hyresgäster", heard: 33, of: 41 },
            { t: "Ny konkurrent i regionen", heard: 36, of: 41 },
            { t: "Vårens uthyrningsläge", heard: 29, of: 41 },
          ],
        },
      },
    ],
    script: [
      { topic: "INTERNT", t: "Hej Karin. Ledningen om läget: vi håller hyresnivåerna och satsar på de befintliga hyresgästerna." },
      { topic: "MARKNAD", t: "På marknaden ser fler mindre bolag över sina lokaler inför nästa år." },
      { topic: "KONKURRENTER", t: "Bland konkurrenterna erbjuder flera kortare avtal för att fylla tomma ytor." },
    ],
    faq: [
      {
        q: "Räcker Google Alerts?",
        a: "För en person som vill ha mejl om några sökord kan det räcka. Newstail är till för att hela personalen ska höra det viktigaste, uppläst.",
      },
      {
        q: "Vad är skillnaden mot en bevakningstjänst?",
        a: "En bevakningstjänst ger ofta namngivna användare mejl med träffar. I Newstail får alla en egen sändning efter roll, till ett pris per användare.",
      },
      {
        q: "Vilka källor används?",
        a: "Betrodda källor per marknad. Varje punkt har sin källa i recapen.",
      },
      {
        q: "Vad kostar Newstail?",
        a: "179 kr per användare och månad, exkl. moms, 10 användare ingår. 14 dagar gratis, inget kort och ingen bindning.",
      },
    ],
    related: ["losningar/omvarldsbevakning", "guider/omvarldsanalys", "/pris/"],
    compare: {
      other: "Bevakningstjänst, branschpress, gratisverktyg",
      rows: [
        { label: "Vem får läsa", newstail: "Alla ni bjuder in", other: "Namngivna användare eller per licens" },
        { label: "Format", newstail: "Uppläst sändning, 3–10 min", other: "Mejlsammanfattningar och länkar" },
        { label: "Urval", newstail: "Efter roll, plus egna ämnen", other: "Sökord som någon har ställt in" },
        { label: "Internt", newstail: "Interna budskap i samma sändning", other: "Nej" },
        { label: "Källor", newstail: "Källa på varje punkt i recapen", other: "Länk till varje träff" },
        { label: "Prismodell", newstail: "Per lyssnare och månad", other: "Per användare, per licens eller gratis" },
      ],
      fair: "Behöver en analytiker eller kommunikationsavdelning varje träff och ett arkiv att söka i passar en bevakningstjänst bättre.",
    },
  },
];
