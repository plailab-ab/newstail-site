/**
 * Sajtens ramverk (2026-10-05, tavlan "Newstail-sajten – förbättringar"): menyn, sidfoten och
 * alla kärnsidors adresser på båda språken. Landningssidorna (sv) ligger i landings.ts.
 */
export type Lang = "sv" | "en";

export const LOGIN_URL = "https://air.newstail.io/login";
export const START_URL = "https://air.newstail.io/start";
export const SITE = "https://newstail.io";

export const ROUTES = {
  sv: {
    home: "/",
    how: "/sa-funkar-det/",
    trust: "/trygghet/",
    pricing: "/pris/",
    about: "/om-oss/",
    faq: "/fragor/",
    privacy: "/integritet/",
    terms: "/villkor/",
    dpa: "/pub-avtal/",
  },
  en: {
    home: "/en/",
    how: "/en/how-it-works/",
    trust: "/en/trust/",
    pricing: "/en/pricing/",
    about: "/en/about/",
    faq: "/en/faq/",
    privacy: "/en/privacy/",
    terms: "/en/terms/",
    dpa: "/en/dpa/",
  },
} as const;

export type RouteKey = keyof (typeof ROUTES)["sv"];

/** Samma sida på det andra språket (kärnsidorna finns på båda). */
export const altOf = (lang: Lang, key: RouteKey) => ROUTES[lang === "sv" ? "en" : "sv"][key];

export const UI = {
  sv: {
    nav: { how: "Så funkar det", trust: "Trygghet", pricing: "Pris", about: "Om oss", login: "Logga in", start: "Prova gratis", switch: "EN", menu: "Meny" },
    otherLang: "English",
    more: "Mer",
    listen: "Lyssna 30 s",
    listening: "Spelar",
    start: "Prova gratis",
    startLong: "Prova gratis i 14 dagar",
    noCard: "Inget kort. Ingen bindning.",
    allQuestions: "Alla frågor",
    breadcrumbHome: "Newstail",
    demoNote: "Siffror från demoföretaget Nordvik.",
    legal: "© 2026 Newstail · Plailab AB",
  },
  en: {
    nav: { how: "How it works", trust: "Trust", pricing: "Pricing", about: "About us", login: "Log in", start: "Try it free", switch: "SV", menu: "Menu" },
    otherLang: "Svenska",
    more: "More",
    listen: "Listen 30 s",
    listening: "Playing",
    start: "Try it free",
    startLong: "Try it free for 14 days",
    noCard: "No card. No lock-in.",
    allQuestions: "All questions",
    breadcrumbHome: "Newstail",
    demoNote: "Figures from the demo company Nordvik.",
    legal: "© 2026 Newstail · Plailab AB",
  },
} as const;

export type FooterCol = { t: string; links: { t: string; href: string }[]; sub?: { t: string; links: { t: string; href: string }[] } };

export const FOOTER: Record<Lang, FooterCol[]> = {
  sv: [
    {
      t: "Produkt",
      links: [
        { t: "Så funkar det", href: "/sa-funkar-det/" },
        { t: "Sändningen", href: "/sa-funkar-det/#lyssnar" },
        { t: "Språken", href: "/#sprak" },
        { t: "Interninfo", href: "/sa-funkar-det/#publicerar" },
        { t: "Insikter", href: "/#ledare" },
        { t: "Pris", href: "/pris/" },
      ],
    },
    {
      t: "Lösningar",
      links: [
        { t: "Internkommunikation", href: "/losningar/internkommunikation/" },
        { t: "Behöver ni ett intranät?", href: "/losningar/intranat/" },
        { t: "App för personalen", href: "/losningar/app-for-personalen/" },
        { t: "Förändrings\u00ADkommunikation", href: "/losningar/forandringskommunikation/" },
        { t: "Omvärldsbevakning", href: "/losningar/omvarldsbevakning/" },
        { t: "Alla lösningar ›", href: "/losningar/" },
      ],
      sub: {
        t: "Guider",
        links: [
          { t: "Kommunikationsplan med mall", href: "/guider/kommunikationsplan/" },
          { t: "Omvärldsanalys", href: "/guider/omvarldsanalys/" },
          { t: "Bra internkommunikation", href: "/guider/bra-internkommunikation/" },
          { t: "Kommunicera förändring", href: "/guider/kommunicera-forandring/" },
        ],
      },
    },
    {
      t: "Branscher",
      links: [
        { t: "Fastighet", href: "/branscher/fastighet/" },
        { t: "Handel och butik", href: "/branscher/handel-och-butik/" },
        { t: "Restaurang och hotell", href: "/branscher/restaurang-och-hotell/" },
        { t: "Bygg", href: "/branscher/bygg/" },
        { t: "Industri", href: "/branscher/industri/" },
        { t: "Vård och omsorg", href: "/branscher/vard-och-omsorg/" },
        { t: "Alla branscher ›", href: "/branscher/" },
      ],
    },
    {
      t: "Roller",
      links: [
        { t: "Internkommunikatör", href: "/roller/internkommunikator/" },
        { t: "HR", href: "/roller/hr/" },
        { t: "Vd och ledning", href: "/roller/vd-och-ledning/" },
      ],
      sub: {
        t: "Jämför",
        links: [
          { t: "Newstail och Spintr", href: "/jamfor/spintr/" },
          { t: "Newstail och Actimo", href: "/jamfor/actimo/" },
          { t: "Internt nyhetsbrev", href: "/jamfor/internt-nyhetsbrev/" },
          { t: "Omvärldsbevakning", href: "/jamfor/omvarldsbevakning-verktyg/" },
        ],
      },
    },
    {
      t: "Trygghet",
      links: [
        { t: "Tryggt från början", href: "/trygghet/" },
        { t: "Vad ledningen ser", href: "/trygghet/#ser" },
        { t: "Integritet", href: "/integritet/" },
        { t: "Villkor", href: "/villkor/" },
        { t: "PUB-avtal", href: "/pub-avtal/" },
      ],
    },
    {
      t: "Företag",
      links: [
        { t: "Om oss", href: "/om-oss/" },
        { t: "Frågor och svar", href: "/fragor/" },
        { t: "Kontakt", href: "mailto:hello@newstail.io" },
        { t: "Logga in", href: LOGIN_URL },
        { t: "Prova gratis", href: START_URL },
      ],
    },
  ],
  en: [
    {
      t: "Product",
      links: [
        { t: "How it works", href: "/en/how-it-works/" },
        { t: "The broadcast", href: "/en/how-it-works/#listen" },
        { t: "Languages", href: "/en/#sprak" },
        { t: "Internal news", href: "/en/how-it-works/#publish" },
        { t: "Insights", href: "/en/#ledare" },
        { t: "Pricing", href: "/en/pricing/" },
      ],
    },
    {
      t: "Trust",
      links: [
        { t: "Secure from the start", href: "/en/trust/" },
        { t: "What management sees", href: "/en/trust/#sees" },
        { t: "Privacy", href: "/en/privacy/" },
        { t: "Terms", href: "/en/terms/" },
        { t: "DPA", href: "/en/dpa/" },
      ],
    },
    {
      t: "Company",
      links: [
        { t: "About us", href: "/en/about/" },
        { t: "Questions", href: "/en/faq/" },
        { t: "Contact", href: "mailto:hello@newstail.io" },
        { t: "Log in", href: LOGIN_URL },
        { t: "Try it free", href: START_URL },
      ],
    },
  ],
};

export const LEGAL_LINKS: Record<Lang, { t: string; href: string }[]> = {
  sv: [
    { t: "Integritet", href: "/integritet/" },
    { t: "Villkor", href: "/villkor/" },
    { t: "PUB-avtal", href: "/pub-avtal/" },
  ],
  en: [
    { t: "Privacy", href: "/en/privacy/" },
    { t: "Terms", href: "/en/terms/" },
    { t: "DPA", href: "/en/dpa/" },
  ],
};

/** JSON-LD som ligger på varje sida. */
export const ORG_ID = `${SITE}/#org`;
export const orgGraph = (lang: Lang) => [
  {
    "@type": "Organization",
    "@id": ORG_ID,
    name: "Newstail",
    legalName: "Plailab AB",
    url: SITE,
    logo: `${SITE}/newstail-logo.png`,
    email: "hello@newstail.io",
  },
  {
    "@type": "WebSite",
    "@id": `${SITE}/#site`,
    url: SITE,
    name: "Newstail",
    inLanguage: lang === "sv" ? "sv-SE" : "en",
    publisher: { "@id": ORG_ID },
  },
];

export const softwareApp = (lang: Lang) => ({
  "@type": "SoftwareApplication",
  name: "Newstail",
  applicationCategory: "BusinessApplication",
  operatingSystem: "iOS",
  publisher: { "@id": ORG_ID },
  offers: {
    "@type": "Offer",
    price: lang === "sv" ? "179" : "17",
    priceCurrency: lang === "sv" ? "SEK" : "EUR",
    description:
      lang === "sv"
        ? "Per användare och månad, allt ingår. 14 dagar gratis."
        : "Per user and month, everything included. 14 days free.",
  },
});

export const breadcrumbs = (items: { name: string; path: string }[]) => ({
  "@type": "BreadcrumbList",
  itemListElement: items.map((x, i) => ({ "@type": "ListItem", position: i + 1, name: x.name, item: `${SITE}${x.path}` })),
});

export const faqPage = (qs: { q: string; a: string }[]) => ({
  "@type": "FAQPage",
  mainEntity: qs.map((x) => ({ "@type": "Question", name: x.q, acceptedAnswer: { "@type": "Answer", text: x.a } })),
});
