/**
 * Frågebanken (2026-10-05): en post per fråga. Samma svar syns på /fragor, på en egen sida
 * per fråga och ihopfällt på de sidor vars tagg frågan bär. Ändras svaret ändras det överallt.
 * Svaren får inte lova mer än produkten gör.
 */
import type { Lang } from "./site";

export type FaqCat = "start" | "listen" | "publish" | "pricing" | "trust" | "it";
export type FaqTag = "home" | "pricing" | "trust" | "how";

export type Faq = {
  slug: { sv: string; en: string };
  cat: FaqCat;
  tags: FaqTag[];
  sv: { q: string; a: string };
  en: { q: string; a: string };
};

export const CATS: Record<FaqCat, { sv: string; en: string }> = {
  start: { sv: "Komma igång", en: "Getting started" },
  listen: { sv: "Lyssna", en: "Listening" },
  publish: { sv: "Publicera", en: "Publishing" },
  pricing: { sv: "Pris", en: "Pricing" },
  trust: { sv: "Trygghet", en: "Trust" },
  it: { sv: "IT", en: "IT" },
};

export const FAQ: Faq[] = [
  {
    slug: { sv: "na-anstallda-utan-dator", en: "reach-staff-without-a-computer" },
    cat: "start",
    tags: ["home"],
    sv: {
      q: "Hur når vi anställda som inte har dator eller jobbmejl?",
      a: "Via mobilen, i ett format som inte kräver skärmtid. Newstail läser upp era interna nyheter i lurarna, och ni ser hur många som hört dem.",
    },
    en: {
      q: "How do we reach employees without a computer?",
      a: "On their phone, in a format that needs no screen time. Newstail reads your internal news aloud in their headphones, and you see how many heard it.",
    },
  },
  {
    slug: { sv: "verktyg-for-internkommunikation", en: "tools-for-internal-communication" },
    cat: "start",
    tags: ["home"],
    sv: {
      q: "Vilka AI-verktyg passar för internkommunikation?",
      a: "Det beror på om ni behöver ett intranät, en medarbetarapp eller ett sätt att nå dem som sällan sitter vid en dator. Newstail är det sista: era interna nyheter läses upp i en personlig sändning, tillsammans med medarbetarens egna branschnyheter.",
    },
    en: {
      q: "Which AI tools work for internal communication?",
      a: "It depends on whether you need an intranet, an employee app or a way to reach people who are rarely at a computer. Newstail is the last one: your internal news is read aloud in a personal broadcast, together with each employee's own industry news.",
    },
  },
  {
    slug: { sv: "verktyg-for-interna-nyhetsbrev", en: "tools-for-internal-newsletters" },
    cat: "publish",
    tags: ["home"],
    sv: {
      q: "Vilket verktyg passar för interna nyhetsbrev?",
      a: "För personal som läser mejl fungerar ett vanligt nyhetsbrevsverktyg. För dem som sällan gör det kan ni publicera nyheten i Newstail i stället – där läses den upp och ni ser ”Hört av x av y”.",
    },
    en: {
      q: "Which tool works for internal newsletters?",
      a: "For staff who read email, a regular newsletter tool works. For those who rarely do, publish the news in Newstail instead – it is read aloud and you see “Heard by x of y”.",
    },
  },
  {
    slug: { sv: "fa-personalen-att-lasa-intranatet", en: "get-staff-to-read-the-intranet" },
    cat: "start",
    tags: ["home"],
    sv: {
      q: "Hur får man personalen att läsa intranätet?",
      a: "Svårt, om de inte sitter vid en dator. Ett alternativ är att ta det viktigaste från intranätet till dem – uppläst, mitt bland nyheter de själva vill höra.",
    },
    en: {
      q: "How do you get staff to read the intranet?",
      a: "Hard, if they don't sit at a computer. An alternative is to bring the most important parts to them – read aloud, among news they actually want to hear.",
    },
  },
  {
    slug: { sv: "kan-chefen-se-vem-som-lyssnat", en: "can-my-manager-see-what-i-heard" },
    cat: "trust",
    tags: ["home", "trust"],
    sv: {
      q: "Kan chefen se vem som har lyssnat?",
      a: "Nej. Ledningen ser siffror per team, från fem personer, aldrig vad en enskild person har hört.",
    },
    en: {
      q: "Can my manager see what I listened to?",
      a: "No. Management sees figures per team, from five people, never what an individual has heard.",
    },
  },
  {
    slug: { sv: "vem-raknas-som-anvandare", en: "who-counts-as-a-user" },
    cat: "pricing",
    tags: ["pricing"],
    sv: {
      q: "Vem räknas som användare?",
      a: "Alla som har ett konto i ert företag – de ni bjudit in och som gått in i appen. Ni styr själva vem som bjuds in, och kan ta bort vem som helst när som helst.",
    },
    en: {
      q: "Who counts as a user?",
      a: "Everyone with an account in your company – the people you've invited who have opened the app. You decide who gets invited, and can remove anyone at any time.",
    },
  },
  {
    slug: { sv: "efter-provperioden", en: "after-the-trial" },
    cat: "pricing",
    tags: ["pricing"],
    sv: {
      q: "Vad händer efter provperioden?",
      a: "Ni lägger in ett kort. Första månaden dras dagen efter provperioden, och sedan samma dag varje månad, i förskott.",
    },
    en: {
      q: "What happens after the trial?",
      a: "You add a card. The first month is charged the day after the trial, and then on the same day every month, in advance.",
    },
  },
  {
    slug: { sv: "mitt-i-manaden", en: "mid-month" },
    cat: "pricing",
    tags: ["pricing"],
    sv: {
      q: "Vad händer när någon läggs till mitt i månaden?",
      a: "Hen är med direkt och räknas från nästa dragning. Ni betalar för antalet användare när beloppet dras, och får ett mejl tre dagar innan.",
    },
    en: {
      q: "What happens when someone is added mid-month?",
      a: "They're in right away and count from the next charge. You pay for the number of users when the amount is charged, and get an email three days ahead.",
    },
  },
  {
    slug: { sv: "minsta-antal", en: "minimum-users" },
    cat: "pricing",
    tags: ["pricing"],
    sv: {
      q: "Finns det ett minsta antal?",
      a: "Ja, minst tio användare – 1 790 kr i månaden, alltså 21 480 kr om året. Är ni fler betalar ni 179 kr per användare och månad.",
    },
    en: {
      q: "Is there a minimum?",
      a: "Yes, ten users minimum – €170 a month, which is €2,040 a year. Beyond that it's €17 per user and month.",
    },
  },
  {
    slug: { sv: "valuta-och-moms", en: "currency-and-vat" },
    cat: "pricing",
    tags: ["pricing"],
    sv: {
      q: "Vilken valuta betalar vi i?",
      a: "Kronor i Sverige, euro i övriga Europa och dollar i resten av världen. Priserna är exklusive moms.",
    },
    en: {
      q: "Which currency do we pay in?",
      a: "Swedish kronor in Sweden, euros in the rest of Europe and dollars elsewhere. Prices exclude VAT.",
    },
  },
  {
    slug: { sv: "saga-upp", en: "cancel" },
    cat: "pricing",
    tags: ["pricing"],
    sv: { q: "Hur säger vi upp?", a: "När ni vill. Det finns ingen bindningstid." },
    en: { q: "How do we cancel?", a: "Whenever you like. There is no lock-in." },
  },
  {
    slug: { sv: "manga-anstallda", en: "large-companies" },
    cat: "pricing",
    tags: ["pricing"],
    sv: {
      q: "Vi är många, eller flera bolag – hur gör vi?",
      a: "Över 1 000 användare har vi volympris. Hör av er på hello@newstail.io så går vi igenom det tillsammans.",
    },
    en: {
      q: "We are large, or several companies – what do we do?",
      a: "Above 1,000 users we have volume pricing. Get in touch at hello@newstail.io and we'll go through it together.",
    },
  },
  {
    slug: { sv: "vilka-sprak", en: "languages" },
    cat: "listen",
    tags: ["how"],
    sv: {
      q: "Vilka språk finns?",
      a: "Svenska, engelska, tyska och spanska. Var och en väljer värdens språk, och interna budskap hörs på varje lyssnares språk.",
    },
    en: {
      q: "Which languages are there?",
      a: "Swedish, English, German and Spanish. Everyone picks the host's language, and internal messages are heard in each listener's language.",
    },
  },
  {
    slug: { sv: "hur-lang-ar-en-sandning", en: "how-long-is-a-broadcast" },
    cat: "listen",
    tags: ["how"],
    sv: { q: "Hur lång är en sändning?", a: "Tre till tio minuter. Du väljer själv, och det du redan hört hoppas över." },
    en: { q: "How long is a broadcast?", a: "Three to ten minutes. You choose, and anything you've already heard is skipped." },
  },
  {
    slug: { sv: "uppdaterad-utan-att-lagga-tid", en: "stay-updated-without-spending-time" },
    cat: "listen",
    tags: [],
    sv: {
      q: "Hur håller jag mig uppdaterad i min bransch utan att lägga tid på det?",
      a: "Välj upp till tio ämnen och lyssna när du ändå är på väg. Newstail gör en egen sändning till dig med branschens och arbetsplatsens viktigaste nyheter.",
    },
    en: {
      q: "How do I keep up with my industry without spending time on it?",
      a: "Pick up to ten topics and listen while you're on the move. Newstail makes a broadcast for you with the most important news from your industry and your workplace.",
    },
  },
  {
    slug: { sv: "vem-kan-publicera", en: "who-can-publish" },
    cat: "publish",
    tags: ["trust", "how"],
    sv: { q: "Vem kan publicera?", a: "Admin, och de ni ger rätten i varje team. Ingen annan." },
    en: { q: "Who can publish?", a: "Admins, and the people you give the right to in each team. No one else." },
  },
  {
    slug: { sv: "missar-nagon-ett-internt-budskap", en: "missed-internal-message" },
    cat: "publish",
    tags: ["how"],
    sv: {
      q: "Vad händer om någon missar ett internt budskap?",
      a: "Det ligger först i deras nästa sändning, och har de inte hört det på fredag kommer det i veckomejlet ”Det här missade du”.",
    },
    en: {
      q: "What if someone misses an internal message?",
      a: "It comes first in their next broadcast, and if they haven't heard it by Friday it's in the weekly email “What you missed”.",
    },
  },
  {
    slug: { sv: "var-lagras-data", en: "where-is-data-stored" },
    cat: "trust",
    tags: ["trust"],
    sv: { q: "Var lagras våra data?", a: "Databasen ligger i Sverige och era data lagras inom EU." },
    en: { q: "Where is our data stored?", a: "The database is in Sweden and your data is stored within the EU." },
  },
  {
    slug: { sv: "tranas-ai-pa-vara-data", en: "is-ai-trained-on-our-data" },
    cat: "trust",
    tags: ["trust"],
    sv: { q: "Tränas någon AI på det vi publicerar?", a: "Nej. Det ni publicerar och lyssnar på används bara för era egna sändningar." },
    en: { q: "Is any AI trained on what we publish?", a: "No. What you publish and listen to is only used for your own broadcasts." },
  },
  {
    slug: { sv: "nar-nagon-slutar", en: "when-someone-leaves" },
    cat: "trust",
    tags: ["trust"],
    sv: {
      q: "Vad händer med datan när någon slutar?",
      a: "Medarbetaren kan radera sitt konto direkt i appen, och då försvinner allt. Ni kan också ta bort personen i admin.",
    },
    en: {
      q: "What happens to the data when someone leaves?",
      a: "Employees can delete their account directly in the app, and then everything is gone. You can also remove the person in admin.",
    },
  },
  {
    slug: { sv: "pub-avtal", en: "dpa" },
    cat: "trust",
    tags: ["trust"],
    sv: { q: "Kan vi få ett PUB-avtal innan vi börjar?", a: "Ja. Mejla hello@newstail.io så skickar vi det." },
    en: { q: "Can we get a DPA before we start?", a: "Yes. Email hello@newstail.io and we'll send it." },
  },
  {
    slug: { sv: "behover-it-gora-nagot", en: "does-it-need-to-do-anything" },
    cat: "it",
    tags: ["pricing"],
    sv: { q: "Behöver IT göra något?", a: "Nej. Ni registrerar företaget med er jobbmejl och bjuder in kollegorna med ett mejl var. Inga integrationer." },
    en: { q: "Does IT need to do anything?", a: "No. You register the company with your work email and invite colleagues with one email each. No integrations." },
  },
  {
    slug: { sv: "hur-loggar-man-in", en: "how-do-people-log-in" },
    cat: "it",
    tags: ["trust"],
    sv: { q: "Hur loggar medarbetarna in?", a: "Med inbjudan till sin jobbmejl och en kod som kommer i mejlet." },
    en: { q: "How do employees log in?", a: "With an invitation to their work email and a code sent to it." },
  },
  {
    slug: { sv: "finns-for-android", en: "android" },
    cat: "it",
    tags: [],
    sv: { q: "Finns appen för Android?", a: "Inte än. Appen finns för iPhone, och Android och webben är på väg." },
    en: { q: "Is there an Android app?", a: "Not yet. The app is on iPhone, and Android and web are on the way." },
  },
  {
    slug: { sv: "hur-kommer-vi-igang", en: "how-do-we-get-started" },
    cat: "start",
    tags: ["how"],
    sv: {
      q: "Hur kommer vi igång?",
      a: "Registrera företaget med er jobbmejl. Vi läser in er bransch och marknad, ni bjuder in kollegorna med ett mejl var och den första sändningen kommer samma dag.",
    },
    en: {
      q: "How do we get started?",
      a: "Register the company with your work email. We read up on your industry and market, you invite colleagues with one email each and the first broadcast comes the same day.",
    },
  },
];

export const faqFor = (tag: FaqTag, lang: Lang) => FAQ.filter((f) => f.tags.includes(tag)).map((f) => ({ ...f[lang], slug: f.slug[lang] }));
export const faqPath = (lang: Lang, slug: string) => (lang === "sv" ? `/fragor/${slug}/` : `/en/faq/${slug}/`);
