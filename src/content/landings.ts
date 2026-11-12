/**
 * Alla landningssidor (sv) samlade, plus hubbarnas texter. Raderna i jämförelserna som ännu
 * inte är kontrollerade ("[kontrollera]") visas inte – de kommer med när någon har kollat dem.
 */
import type { Cluster, Landing } from "./landing-types";
import { landingsA } from "./landings-a";
import { landingsB } from "./landings-b";

const unchecked = (s: string) => s.includes("[kontrollera]");

/* Sidor med `paused` (avpublicerade) tas bort här, så att de inte byggs eller länkas någonstans. */

export const LANDINGS: Landing[] = [...landingsA, ...landingsB].filter((l) => !l.paused).map((l) =>
  l.compare ? { ...l, compare: { ...l.compare, rows: l.compare.rows.filter((r) => !unchecked(r.other) && !unchecked(r.newstail)) } } : l,
);

export const CLUSTERS: Record<Cluster, { name: string; title: string; lead: string; metaTitle: string; metaDescription: string }> = {
  losningar: {
    name: "Lösningar",
    title: "Det Newstail löser.",
    lead: "Från internkommunikation till omvärldsbevakning – uppläst för var och en.",
    metaTitle: "Lösningar för internkommunikation | Newstail",
    metaDescription: "Internkommunikation, app för personalen, förändringskommunikation och omvärldsbevakning – så löser Newstail det med en uppläst sändning per medarbetare.",
  },
  branscher: {
    name: "Branscher",
    title: "Newstail i er bransch.",
    lead: "Samma idé, olika vardag. Så låter det hos er.",
    metaTitle: "Internkommunikation per bransch | Newstail",
    metaDescription: "Fastighet, handel, restaurang och hotell, bygg, industri, vård och omsorg – så når Newstail personalen i er bransch, även dem utan dator.",
  },
  roller: {
    name: "Roller",
    title: "Newstail för er roll.",
    lead: "Internkommunikatören, HR och ledningen får olika saker ur samma sändning.",
    metaTitle: "Newstail för internkommunikatör, HR och ledning | Newstail",
    metaDescription: "Så använder internkommunikatören, HR och vd och ledning Newstail: publicera en gång, nå alla och se per team att det kom fram.",
  },
  jamfor: {
    name: "Jämför",
    title: "Newstail jämfört.",
    lead: "Ärligt: när Newstail passar, och när något annat passar bättre.",
    metaTitle: "Jämför Newstail med andra verktyg | Newstail",
    metaDescription: "Newstail jämfört med intranät, medarbetarappar, interna nyhetsbrev och verktyg för omvärldsbevakning – och när något annat passar bättre.",
  },
  guider: {
    name: "Guider",
    title: "Guider.",
    lead: "Kommunikationsplan, omvärldsanalys och förändring – kort och användbart.",
    metaTitle: "Guider om internkommunikation | Newstail",
    metaDescription: "Guider om kommunikationsplan, omvärldsanalys, bra internkommunikation och att kommunicera förändring – med mallar och exempel.",
  },
};

/** Kärnsidor som en landningssida kan länka till under "Läs vidare". */
export const CORE_LINKS: Record<string, { name: string; card: string; cluster: string }> = {
  "/pris/": { name: "Pris", card: "179 kr per användare och månad. Allt ingår.", cluster: "Newstail" },
  "/trygghet/": { name: "Trygghet", card: "Ledningen ser mönster per team – aldrig vad en person hört.", cluster: "Newstail" },
  "/sa-funkar-det/": { name: "Så funkar det", card: "Sändningen, publiceringen och ledningens vy.", cluster: "Newstail" },
};

export const landingPath = (l: Pick<Landing, "cluster" | "slug">) => `/${l.cluster}/${l.slug}/`;

export const resolveRelated = (ref: string) => {
  if (ref.startsWith("/")) {
    const c = CORE_LINKS[ref];
    return c ? { href: ref, ...c } : null;
  }
  const [cluster, slug] = ref.split("/");
  const l = LANDINGS.find((x) => x.cluster === cluster && x.slug === slug);
  return l ? { href: landingPath(l), name: l.name, card: l.card, cluster: CLUSTERS[l.cluster].name } : null;
};
