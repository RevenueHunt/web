// Multi-language plumbing for the marketing site. Mirrors MetricSpot/web's i18n,
// minus Catalan. English is the default locale and lives at the root with no URL
// prefix; every other language lives under `/<lang>/`. Existing English URLs are
// therefore unchanged.
//
// Phasing: Phase 1 ships en + es + fr. Phase 2 adds de, pt, it — to expand, add
// the locale to `Lang`, `LANGS`, `LANG_LABELS`, `LANG_PREFIXES`, `OG_LOCALE`, and
// the `t` dictionary below (plus the per-page content dicts and locale wrappers).

export type Lang = "en" | "es" | "fr";

export const LANGS: Lang[] = ["en", "es", "fr"];

export const LANG_LABELS: Record<Lang, string> = {
  en: "English",
  es: "Español",
  fr: "Français",
};

/** og:locale value per language. */
export const OG_LOCALE: Record<Lang, string> = {
  en: "en_US",
  es: "es_ES",
  fr: "fr_FR",
};

const LANG_PREFIXES: Record<Lang, string> = {
  en: "",
  es: "/es",
  fr: "/fr",
};

/** URL prefix for a given lang. EN is at the root; the rest are at `/<lang>/...`. */
export function langPrefix(lang: Lang): string {
  return LANG_PREFIXES[lang];
}

/** Prefix a root-relative, English path for the given lang. `/pricing/` → `/es/pricing/`. */
export function localizedHref(path: string, lang: Lang): string {
  const prefix = LANG_PREFIXES[lang];
  if (!prefix) return path;
  return path === "/" ? `${prefix}/` : `${prefix}${path}`;
}

/** Build the URL for the same page in the target language. */
export function altLangUrl(pathname: string, target: Lang): string {
  let stripped = pathname;
  for (const lang of LANGS) {
    if (lang === "en") continue;
    const prefix = LANG_PREFIXES[lang];
    if (stripped === prefix) {
      stripped = "/";
      break;
    }
    if (stripped.startsWith(`${prefix}/`)) {
      stripped = stripped.slice(prefix.length);
      break;
    }
  }
  if (target === "en") return stripped === "" ? "/" : stripped;
  const targetPrefix = LANG_PREFIXES[target];
  return stripped === "/" ? `${targetPrefix}/` : `${targetPrefix}${stripped}`;
}

/** Detect the current locale from a pathname. */
export function localeFromPath(pathname: string): Lang {
  for (const lang of LANGS) {
    if (lang === "en") continue;
    const prefix = LANG_PREFIXES[lang];
    if (pathname === prefix || pathname.startsWith(`${prefix}/`)) return lang;
  }
  return "en";
}

const en = {
  // Header nav
  nav_home: "Home",
  nav_platforms: "Platforms",
  nav_pricing: "Pricing",
  nav_resources: "Resources",
  nav_other_platforms: "Other eCommerce platforms",
  nav_solutions: "Solutions by industry",
  nav_roi: "Quiz ROI calculator",
  nav_benchmark: "Ecommerce quiz benchmark report",
  nav_blog: "Blog",
  nav_testimonials: "Testimonials",
  nav_integrations: "Integrations",
  nav_templates: "Quiz templates",
  nav_partners: "Partners & affiliates",
  nav_faqs: "FAQs - Help center",
  cta_demo: "Book a demo",
  cta_signup: "Sign up",
  menu_open: "Open menu",
  language_picker: "Language",
  // Footer
  footer_product: "Product",
  footer_company: "Company",
  footer_resources: "Resources",
  footer_link_prq: "Product recommendation quiz",
  footer_link_pricing: "Plans and pricing",
  footer_link_whatsnew: "What's new",
  footer_link_integrations: "Integrations",
  footer_link_faqs: "FAQs",
  footer_link_tutorials: "Tutorial videos",
  footer_link_contact: "Contact us",
  footer_link_blog: "Blog",
  footer_link_jobs: "Jobs",
  footer_link_testimonials: "Testimonials",
  footer_link_partners: "Partners and affiliates",
  footer_link_roi: "Quiz ROI calculator",
  footer_link_benchmark: "Ecommerce quiz benchmark report",
  footer_link_solutions: "Solutions by industry",
  footer_link_glossary: "Glossary",
  footer_link_compare: "Competitor comparisons",
  footer_tos: "Terms of Service",
  footer_privacy: "Privacy Policy",
  footer_security: "Security",
  footer_dpa: "DPA",
  footer_rss: "RSS",
  // Shared
  breadcrumb_home: "Home",
};

type Strings = typeof en;

const es: Strings = {
  nav_home: "Inicio",
  nav_platforms: "Plataformas",
  nav_pricing: "Precios",
  nav_resources: "Recursos",
  nav_other_platforms: "Otras plataformas de eCommerce",
  nav_solutions: "Soluciones por sector",
  nav_roi: "Calculadora de ROI del quiz",
  nav_benchmark: "Informe benchmark de quizzes de ecommerce",
  nav_blog: "Blog",
  nav_testimonials: "Testimonios",
  nav_integrations: "Integraciones",
  nav_templates: "Plantillas de quiz",
  nav_partners: "Partners y afiliados",
  nav_faqs: "FAQs - Centro de ayuda",
  cta_demo: "Reservar una demo",
  cta_signup: "Regístrate",
  menu_open: "Abrir menú",
  language_picker: "Idioma",
  footer_product: "Producto",
  footer_company: "Empresa",
  footer_resources: "Recursos",
  footer_link_prq: "Quiz de recomendación de productos",
  footer_link_pricing: "Planes y precios",
  footer_link_whatsnew: "Novedades",
  footer_link_integrations: "Integraciones",
  footer_link_faqs: "FAQs",
  footer_link_tutorials: "Vídeos tutoriales",
  footer_link_contact: "Contáctanos",
  footer_link_blog: "Blog",
  footer_link_jobs: "Empleo",
  footer_link_testimonials: "Testimonios",
  footer_link_partners: "Partners y afiliados",
  footer_link_roi: "Calculadora de ROI del quiz",
  footer_link_benchmark: "Informe benchmark de quizzes de ecommerce",
  footer_link_solutions: "Soluciones por sector",
  footer_link_glossary: "Glosario",
  footer_link_compare: "Comparativas de competidores",
  footer_tos: "Términos del servicio",
  footer_privacy: "Política de privacidad",
  footer_security: "Seguridad",
  footer_dpa: "DPA",
  footer_rss: "RSS",
  breadcrumb_home: "Inicio",
};

const fr: Strings = {
  nav_home: "Accueil",
  nav_platforms: "Plateformes",
  nav_pricing: "Tarifs",
  nav_resources: "Ressources",
  nav_other_platforms: "Autres plateformes e-commerce",
  nav_solutions: "Solutions par secteur",
  nav_roi: "Calculateur de ROI du quiz",
  nav_benchmark: "Rapport benchmark des quiz e-commerce",
  nav_blog: "Blog",
  nav_testimonials: "Témoignages",
  nav_integrations: "Intégrations",
  nav_templates: "Modèles de quiz",
  nav_partners: "Partenaires et affiliés",
  nav_faqs: "FAQ - Centre d'aide",
  cta_demo: "Réserver une démo",
  cta_signup: "S'inscrire",
  menu_open: "Ouvrir le menu",
  language_picker: "Langue",
  footer_product: "Produit",
  footer_company: "Entreprise",
  footer_resources: "Ressources",
  footer_link_prq: "Quiz de recommandation de produits",
  footer_link_pricing: "Offres et tarifs",
  footer_link_whatsnew: "Nouveautés",
  footer_link_integrations: "Intégrations",
  footer_link_faqs: "FAQ",
  footer_link_tutorials: "Vidéos tutoriels",
  footer_link_contact: "Nous contacter",
  footer_link_blog: "Blog",
  footer_link_jobs: "Emplois",
  footer_link_testimonials: "Témoignages",
  footer_link_partners: "Partenaires et affiliés",
  footer_link_roi: "Calculateur de ROI du quiz",
  footer_link_benchmark: "Rapport benchmark des quiz e-commerce",
  footer_link_solutions: "Solutions par secteur",
  footer_link_glossary: "Glossaire",
  footer_link_compare: "Comparatifs de concurrents",
  footer_tos: "Conditions d'utilisation",
  footer_privacy: "Politique de confidentialité",
  footer_security: "Sécurité",
  footer_dpa: "DPA",
  footer_rss: "RSS",
  breadcrumb_home: "Accueil",
};

export const t = { en, es, fr } satisfies Record<Lang, Strings>;
