import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import { faqNoindexPaths } from "./src/content/faq.ts";

/* Frågesidor med noindex ska inte heller stå i sitemap (newstail-app#187). */
const hidden = new Set(faqNoindexPaths().map((p) => `https://newstail.io${p}`));

export default defineConfig({
  site: "https://newstail.io",
  integrations: [react(), sitemap({ filter: (page) => !hidden.has(page) })],
  i18n: {
    defaultLocale: "sv",
    locales: ["sv", "en"],
    routing: { prefixDefaultLocale: false },
  },
  build: { inlineStylesheets: "auto" },
  devToolbar: { enabled: false },
});
