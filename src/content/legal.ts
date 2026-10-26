/**
 * Integritetspolicy, villkor och PUB-avtal (utkast 2026-10-05). Underbiträden och gallringstider
 * följer docs/TREDJEPARTER.md – ändras den, ändras det här. Allt inom [hakparenteser] är
 * platshållare som visas i gult tills en jurist har gått igenom texten.
 * Brödtexten är enkel html: <p>, <ul>, <a>, <strong>.
 */
import type { Lang } from "./site";

export type DocSection = { id: string; h: string; html: string };
export type LegalDoc = {
  title: string;
  metaTitle: string;
  metaDescription: string;
  updated: string;
  short?: { h: string; items: string[] };
  sections: DocSection[];
};

const SUB_SV = `<ul>
<li><strong>Supabase</strong> – databas, inloggning och ljudfiler. EU (Stockholm).</li>
<li><strong>Google (Gemini)</strong> – värdens röst och transkribering av röstinlägg. Globalt.</li>
<li><strong>Anthropic</strong> – skriver sändningarnas text, recap och quiz. USA.</li>
<li><strong>Perplexity</strong> – söker nyheter. Får inga personuppgifter. USA.</li>
<li><strong>Apple</strong> – notiser till iPhone. Globalt.</li>
<li><strong>Resend</strong> – inloggnings- och påminnelsemejl. EU (Irland).</li>
<li><strong>Stripe</strong> – betalning och kvitton. EU (Irland).</li>
</ul>`;
const SUB_EN = `<ul>
<li><strong>Supabase</strong> – database, sign-in and audio files. EU (Stockholm).</li>
<li><strong>Google (Gemini)</strong> – the host's voice and transcription of voice messages. Global.</li>
<li><strong>Anthropic</strong> – writes the broadcast text, recap and quiz. USA.</li>
<li><strong>Perplexity</strong> – searches for news. Receives no personal data. USA.</li>
<li><strong>Apple</strong> – notifications to iPhone. Global.</li>
<li><strong>Resend</strong> – sign-in and reminder emails. EU (Ireland).</li>
<li><strong>Stripe</strong> – payment and receipts. EU (Ireland).</li>
</ul>`;

const RET_SV = `<ul>
<li>Transkript av röstinlägg: 30 dagar.</li>
<li>Dagens nyhetslistor: 60 dagar.</li>
<li>Recaps: 90 dagar. Ljud från interna inlägg: 90 dagar (texten finns kvar).</li>
<li>Lyssningshistorik: 13 månader.</li>
<li>Fakturaunderlag: 7 år, enligt bokföringslagen.</li>
<li>Konto: raderas helt när du tar bort det.</li>
</ul>`;
const RET_EN = `<ul>
<li>Transcripts of voice messages: 30 days.</li>
<li>Daily news lists: 60 days.</li>
<li>Recaps: 90 days. Audio from internal messages: 90 days (the text remains).</li>
<li>Listening history: 13 months.</li>
<li>Billing records: 7 years, as required by Swedish bookkeeping law.</li>
<li>Account: deleted completely when you delete it.</li>
</ul>`;

export const LEGAL: Record<"privacy" | "terms" | "dpa", Record<Lang, LegalDoc>> = {
  privacy: {
    sv: {
      title: "Integritetspolicy",
      metaTitle: "Integritetspolicy | Newstail",
      metaDescription: "Hur Newstail hanterar personuppgifter: vilka uppgifter, varför, var de lagras, hur länge och vilka underbiträden vi använder.",
      updated: "Senast uppdaterad 5 oktober 2026",
      short: {
        h: "Kort version",
        items: ["Din chef ser aldrig vad du har hört.", "Ingen AI tränas på era data.", "Dina egna ämnen är privata.", "Ta bort kontot – allt försvinner."],
      },
      sections: [
        { id: "ansvar", h: "Vem ansvarar", html: "<p>Plailab AB (org.nr 559284-2610) ansvarar för den här sajten och för ditt konto. För medarbetardata i ert företags Newstail är ert företag personuppgiftsansvarigt och vi personuppgiftsbiträde, enligt <a href=\"/pub-avtal/\">PUB-avtalet</a>.</p>" },
        { id: "uppgifter", h: "Vilka uppgifter", html: "<p>Namn, jobbmejl, roll, språk och dina ämnen. Vad du har lyssnat på, så att din sändning blir din. Publicerar du ett internt budskap sparar vi texten och, om du spelat in det, ljudet.</p><p>Mikrofonen används bara när du själv spelar in ett budskap.</p>" },
        { id: "varfor", h: "Varför", html: "<p>För att leverera tjänsten: göra din sändning, visa ert företag aggregerade siffror och skicka mejl du behöver, som inloggningskoder.</p><p>Ditt företag är personuppgiftsansvarigt för uppgifterna om dig som medarbetare, och vi behandlar dem för företagets räkning enligt PUB-avtalet. För kontaktuppgifter till dem som tecknar och sköter avtalet är Plailab AB ansvarigt, med stöd av avtalet och vårt berättigade intresse av att sköta kundrelationen.</p>" },
        { id: "vem-ser", h: "Vem ser vad", html: "<p>Ditt företag ser mönster per team, från fem personer. Aldrig vad en enskild person har hört, svarat i quizen eller följer.</p>" },
        { id: "lagring", h: "Var data lagras", html: "<p>Databasen ligger i EU (Stockholm). För att göra sändningen skickas text till AI-tjänster utanför EU, se underbiträdena nedan. Ingen av dem tränar sina modeller på era data. Överföringar utanför EU sker med EU-kommissionens standardavtalsklausuler, och med EU–US Data Privacy Framework för leverantörer som är certifierade.</p>" },
        { id: "hur-lange", h: "Hur länge", html: RET_SV },
        { id: "delar", h: "Vilka vi delar med", html: `<p>Vi säljer inte uppgifter. De här tjänsterna hjälper oss att leverera Newstail:</p>${SUB_SV}` },
        { id: "rattigheter", h: "Dina rättigheter", html: "<p>Du kan se, rätta och radera dina uppgifter. Kontot raderar du direkt i appen. Du kan också klaga hos Integritetsskyddsmyndigheten (IMY).</p>" },
        { id: "sajten", h: "Den här sajten", html: "<p>Sajten sätter inga spårningskakor och samlar ingen besöksstatistik.</p>" },
        { id: "kontakt", h: "Kontakt", html: "<p><a href=\"mailto:hello@newstail.io\">hello@newstail.io</a></p>" },
      ],
    },
    en: {
      title: "Privacy policy",
      metaTitle: "Privacy policy | Newstail",
      metaDescription: "How Newstail handles personal data: what we store, why, where, for how long and which sub-processors we use.",
      updated: "Last updated 5 October 2026",
      short: {
        h: "The short version",
        items: ["Your manager never sees what you've heard.", "No AI is trained on your data.", "Your own topics are private.", "Delete the account – everything goes."],
      },
      sections: [
        { id: "controller", h: "Who is responsible", html: "<p>Plailab AB (reg. no. 559284-2610) is responsible for this site and for your account. For employee data in your company's Newstail, your company is the controller and we are the processor, under the <a href=\"/en/dpa/\">DPA</a>.</p>" },
        { id: "data", h: "What data", html: "<p>Name, work email, role, language and your topics. What you have listened to, so that your broadcast is yours. If you publish an internal message we store the text and, if you recorded it, the audio.</p><p>The microphone is only used when you record a message yourself.</p>" },
        { id: "why", h: "Why", html: "<p>To deliver the service: build your broadcast, show your company aggregated figures and send emails you need, such as sign-in codes.</p><p>Your company is the controller of the data about you as an employee, and we process it on the company's behalf under the data processing agreement. For contact details of the people who sign and manage the agreement, Plailab AB is the controller, based on the agreement and our legitimate interest in managing the customer relationship.</p>" },
        { id: "who-sees", h: "Who sees what", html: "<p>Your company sees patterns per team, from five people. Never what an individual has heard, answered in the quiz or follows.</p>" },
        { id: "storage", h: "Where data is stored", html: "<p>The database is in the EU (Stockholm). To build the broadcast, text is sent to AI services outside the EU, see the sub-processors below. None of them train their models on your data. Transfers outside the EU use the European Commission's standard contractual clauses, and the EU–US Data Privacy Framework for providers that are certified.</p>" },
        { id: "retention", h: "How long", html: RET_EN },
        { id: "sharing", h: "Who we share with", html: `<p>We don't sell data. These services help us deliver Newstail:</p>${SUB_EN}` },
        { id: "rights", h: "Your rights", html: "<p>You can access, correct and delete your data. You delete the account right in the app. You can also complain to the Swedish Authority for Privacy Protection (IMY).</p>" },
        { id: "site", h: "This site", html: "<p>This site sets no tracking cookies and collects no visitor statistics.</p>" },
        { id: "contact", h: "Contact", html: "<p><a href=\"mailto:hello@newstail.io\">hello@newstail.io</a></p>" },
      ],
    },
  },
  terms: {
    sv: {
      title: "Villkor",
      metaTitle: "Villkor | Newstail",
      metaDescription: "Villkoren för Newstail: provperiod, pris, betalning, uppsägning och ansvar.",
      updated: "Senast uppdaterad 5 oktober 2026",
      sections: [
        { id: "parter", h: "Parter", html: "<p>Avtalet gäller mellan Plailab AB (org.nr 559284-2610), som tillhandahåller Newstail, och företaget som registrerar sig (kunden).</p>" },
        { id: "tjansten", h: "Tjänsten", html: "<p>Newstail ger varje medarbetare en personlig nyhetssändning i en app för iPhone, och kunden ett sätt att publicera interna budskap och se aggregerade siffror.</p>" },
        { id: "prov", h: "Provperiod", html: "<p>14 dagar gratis för hela företaget. Inget kort behövs. Efter provperioden pausas sändningarna tills kort lagts in.</p>" },
        { id: "pris", h: "Pris och betalning", html: "<p>179 kr per användare och månad, exkl. moms (17 € i övriga Europa, 18 $ i resten av världen). En användare är ett konto i ert företag. Tio användare ingår. Betalning sker i förskott samma dag varje månad, räknat från dagen provperioden slutar, för antalet användare vid det tillfället; den som läggs till räknas från nästa dragning.</p><p>Vi meddelar prisändringar minst <span class=\"todo\">[30]</span> dagar i förväg.</p>" },
        { id: "uppsagning", h: "Uppsägning", html: "<p>Ingen bindningstid. Säg upp när ni vill; månaden ni betalat gäller till sista dagen.</p>" },
        { id: "innehall", h: "Innehåll", html: "<p>Kunden ansvarar för det kunden publicerar internt. Nyheter sammanfattas av AI ur namngivna källor, som visas i recapen. <span class=\"todo\">[Ansvar för AI-sammanfattningar – granskas.]</span></p>" },
        { id: "ansvar", h: "Ansvar", html: "<p><span class=\"todo\">[Ansvarsbegränsning – granskas.]</span></p>" },
        { id: "personuppgifter", h: "Personuppgifter", html: "<p>Behandlingen av medarbetarnas personuppgifter regleras i <a href=\"/pub-avtal/\">PUB-avtalet</a>.</p>" },
        { id: "lag", h: "Tillämplig lag", html: "<p>Svensk lag. Tvister avgörs av svensk allmän domstol.</p>" },
      ],
    },
    en: {
      title: "Terms",
      metaTitle: "Terms | Newstail",
      metaDescription: "The terms for Newstail: trial, price, payment, cancellation and liability.",
      updated: "Last updated 5 October 2026",
      sections: [
        { id: "parties", h: "Parties", html: "<p>The agreement is between Plailab AB (reg. no. 559284-2610), which provides Newstail, and the company that signs up (the customer).</p>" },
        { id: "service", h: "The service", html: "<p>Newstail gives every employee a personal news broadcast in an iPhone app, and the customer a way to publish internal messages and see aggregated figures.</p>" },
        { id: "trial", h: "Trial", html: "<p>14 days free for the whole company. No card needed. After the trial, broadcasts pause until a card is added.</p>" },
        { id: "price", h: "Price and payment", html: "<p>€17 per user and month, excl. VAT (SEK 179 in Sweden, $18 outside Europe). A user is an account in your company. Ten users are included. Payment is in advance on the same day each month, counted from the day the trial ends, for the number of users at that time; anyone added counts from the next charge.</p><p>We announce price changes at least <span class=\"todo\">[30]</span> days in advance.</p>" },
        { id: "cancellation", h: "Cancellation", html: "<p>No lock-in. Cancel whenever you like; the month you've paid for runs to its last day.</p>" },
        { id: "content", h: "Content", html: "<p>The customer is responsible for what it publishes internally. News is summarised by AI from named sources, shown in the recap. <span class=\"todo\">[Liability for AI summaries – under review.]</span></p>" },
        { id: "liability", h: "Liability", html: "<p><span class=\"todo\">[Limitation of liability – under review.]</span></p>" },
        { id: "personal-data", h: "Personal data", html: "<p>Processing of employees' personal data is governed by the <a href=\"/en/dpa/\">DPA</a>.</p>" },
        { id: "law", h: "Governing law", html: "<p>Swedish law. Disputes are settled by Swedish courts.</p>" },
      ],
    },
  },
  dpa: {
    sv: {
      title: "PUB-avtal",
      metaTitle: "PUB-avtal – personuppgiftsbiträdesavtal | Newstail",
      metaDescription: "Personuppgiftsbiträdesavtalet för Newstail: vad vi behandlar för er räkning, underbiträden, säkerhet och radering.",
      updated: "Senast uppdaterad 5 oktober 2026",
      short: {
        h: "Kort version",
        items: ["Ni är ansvariga, vi är biträde.", "Vi behandlar bara för att leverera tjänsten.", "Underbiträdena står listade nedan.", "Allt raderas när ni slutar."],
      },
      sections: [
        { id: "parter", h: "Parter och roller", html: "<p>Kunden är personuppgiftsansvarig för medarbetarnas uppgifter i Newstail. Plailab AB är personuppgiftsbiträde och behandlar uppgifterna bara enligt kundens instruktioner, som är att leverera tjänsten.</p>" },
        { id: "behandling", h: "Vad som behandlas", html: "<p>Namn, jobbmejl, roll, språk, ämnen, lyssningshistorik, quizsvar och interna inlägg (text och ljud). Registrerade: kundens medarbetare.</p>" },
        { id: "underbitraden", h: "Underbiträden", html: `${SUB_SV}<p>Vi meddelar kunden innan ett underbiträde läggs till eller byts. <span class=\"todo\">[Invändningsrätt och frist – granskas.]</span></p>` },
        { id: "sakerhet", h: "Säkerhet", html: "<p>Krypterad trafik, åtkomst per företag och team i databasen, och individdata som aldrig visas för kunden – bara aggregat från fem personer. <span class=\"todo\">[Fullständig lista över åtgärder.]</span></p>" },
        { id: "incidenter", h: "Incidenter", html: "<p>Vi meddelar kunden utan onödigt dröjsmål vid en personuppgiftsincident. <span class=\"todo\">[Tidsgräns.]</span></p>" },
        { id: "radering", h: "Radering", html: `<p>När kunden avslutar raderas företaget och alla medarbetares uppgifter. Fakturaunderlag sparas i 7 år enligt bokföringslagen.</p>${RET_SV}` },
        { id: "avtal", h: "Undertecknat avtal", html: "<p>Behöver ni ett undertecknat exemplar innan ni börjar? Mejla <a href=\"mailto:hello@newstail.io\">hello@newstail.io</a>. <span class=\"todo\">[PDF att ladda ner.]</span></p>" },
      ],
    },
    en: {
      title: "Data processing agreement",
      metaTitle: "DPA – data processing agreement | Newstail",
      metaDescription: "The data processing agreement for Newstail: what we process on your behalf, sub-processors, security and deletion.",
      updated: "Last updated 5 October 2026",
      short: {
        h: "The short version",
        items: ["You are the controller, we are the processor.", "We only process to deliver the service.", "The sub-processors are listed below.", "Everything is deleted when you leave."],
      },
      sections: [
        { id: "roles", h: "Parties and roles", html: "<p>The customer is the controller of employee data in Newstail. Plailab AB is the processor and processes the data only on the customer's instructions, which are to deliver the service.</p>" },
        { id: "processing", h: "What is processed", html: "<p>Name, work email, role, language, topics, listening history, quiz answers and internal messages (text and audio). Data subjects: the customer's employees.</p>" },
        { id: "sub-processors", h: "Sub-processors", html: `${SUB_EN}<p>We notify the customer before a sub-processor is added or replaced. <span class=\"todo\">[Right to object and notice period – under review.]</span></p>` },
        { id: "security", h: "Security", html: "<p>Encrypted traffic, access per company and team in the database, and individual data that is never shown to the customer – only aggregates from five people. <span class=\"todo\">[Full list of measures.]</span></p>" },
        { id: "incidents", h: "Incidents", html: "<p>We notify the customer without undue delay of a personal data breach. <span class=\"todo\">[Time limit.]</span></p>" },
        { id: "deletion", h: "Deletion", html: `<p>When the customer leaves, the company and all employee data are deleted. Billing records are kept for 7 years as required by Swedish bookkeeping law.</p>${RET_EN}` },
        { id: "signed", h: "Signed agreement", html: "<p>Need a signed copy before you start? Email <a href=\"mailto:hello@newstail.io\">hello@newstail.io</a>. <span class=\"todo\">[Downloadable PDF.]</span></p>" },
      ],
    },
  },
};
