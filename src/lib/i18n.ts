// Multi-language plumbing for the marketing site. Mirrors MetricSpot/web's i18n,
// minus Catalan. English is the default locale and lives at the root with no URL
// prefix; every other language lives under `/<lang>/`. Existing English URLs are
// therefore unchanged.
//
// Phasing: Phase 1 ships en + es + fr. Phase 2 adds de, pt, it — to expand, add
// the locale to `Lang`, `LANGS`, `LANG_LABELS`, `LANG_PREFIXES`, `OG_LOCALE`, and
// the `t` dictionary below (plus the per-page content dicts and locale wrappers).

export type Lang = "en" | "es" | "fr" | "de" | "pt" | "it";

export const LANGS: Lang[] = ["en", "es", "fr", "de", "pt", "it"];

export const LANG_LABELS: Record<Lang, string> = {
  en: "English",
  es: "Español",
  fr: "Français",
  de: "Deutsch",
  pt: "Português",
  it: "Italiano",
};

/** og:locale value per language. */
export const OG_LOCALE: Record<Lang, string> = {
  en: "en_US",
  es: "es_ES",
  fr: "fr_FR",
  de: "de_DE",
  pt: "pt_PT",
  it: "it_IT",
};

const LANG_PREFIXES: Record<Lang, string> = {
  en: "",
  es: "/es",
  fr: "/fr",
  de: "/de",
  pt: "/pt",
  it: "/it",
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

const de: Strings = {
  nav_home: "Start",
  nav_platforms: "Plattformen",
  nav_pricing: "Preise",
  nav_resources: "Ressourcen",
  nav_other_platforms: "Andere E-Commerce-Plattformen",
  nav_solutions: "Lösungen nach Branche",
  nav_roi: "Quiz-ROI-Rechner",
  nav_benchmark: "E-Commerce-Quiz-Benchmark-Report",
  nav_blog: "Blog",
  nav_testimonials: "Erfahrungsberichte",
  nav_integrations: "Integrationen",
  nav_templates: "Quiz-Vorlagen",
  nav_partners: "Partner & Affiliates",
  nav_faqs: "FAQs - Hilfecenter",
  cta_demo: "Demo buchen",
  cta_signup: "Registrieren",
  menu_open: "Menü öffnen",
  language_picker: "Sprache",
  footer_product: "Produkt",
  footer_company: "Unternehmen",
  footer_resources: "Ressourcen",
  footer_link_prq: "Produktempfehlungs-Quiz",
  footer_link_pricing: "Tarife und Preise",
  footer_link_whatsnew: "Neuigkeiten",
  footer_link_integrations: "Integrationen",
  footer_link_faqs: "FAQs",
  footer_link_tutorials: "Tutorial-Videos",
  footer_link_contact: "Kontakt",
  footer_link_blog: "Blog",
  footer_link_jobs: "Jobs",
  footer_link_testimonials: "Erfahrungsberichte",
  footer_link_partners: "Partner und Affiliates",
  footer_link_roi: "Quiz-ROI-Rechner",
  footer_link_benchmark: "E-Commerce-Quiz-Benchmark-Report",
  footer_link_solutions: "Lösungen nach Branche",
  footer_link_glossary: "Glossar",
  footer_link_compare: "Wettbewerbsvergleiche",
  footer_tos: "Nutzungsbedingungen",
  footer_privacy: "Datenschutz",
  footer_security: "Sicherheit",
  footer_dpa: "AVV",
  footer_rss: "RSS",
  breadcrumb_home: "Start",
};

const pt: Strings = {
  nav_home: "Início",
  nav_platforms: "Plataformas",
  nav_pricing: "Preços",
  nav_resources: "Recursos",
  nav_other_platforms: "Outras plataformas de e-commerce",
  nav_solutions: "Soluções por setor",
  nav_roi: "Calculadora de ROI do quiz",
  nav_benchmark: "Relatório benchmark de quizzes de e-commerce",
  nav_blog: "Blog",
  nav_testimonials: "Testemunhos",
  nav_integrations: "Integrações",
  nav_templates: "Modelos de quiz",
  nav_partners: "Parceiros e afiliados",
  nav_faqs: "FAQs - Central de ajuda",
  cta_demo: "Agendar uma demo",
  cta_signup: "Registar",
  menu_open: "Abrir menu",
  language_picker: "Idioma",
  footer_product: "Produto",
  footer_company: "Empresa",
  footer_resources: "Recursos",
  footer_link_prq: "Quiz de recomendação de produtos",
  footer_link_pricing: "Planos e preços",
  footer_link_whatsnew: "Novidades",
  footer_link_integrations: "Integrações",
  footer_link_faqs: "FAQs",
  footer_link_tutorials: "Vídeos tutoriais",
  footer_link_contact: "Contacta-nos",
  footer_link_blog: "Blog",
  footer_link_jobs: "Emprego",
  footer_link_testimonials: "Testemunhos",
  footer_link_partners: "Parceiros e afiliados",
  footer_link_roi: "Calculadora de ROI do quiz",
  footer_link_benchmark: "Relatório benchmark de quizzes de e-commerce",
  footer_link_solutions: "Soluções por setor",
  footer_link_glossary: "Glossário",
  footer_link_compare: "Comparações de concorrentes",
  footer_tos: "Termos do serviço",
  footer_privacy: "Política de privacidade",
  footer_security: "Segurança",
  footer_dpa: "DPA",
  footer_rss: "RSS",
  breadcrumb_home: "Início",
};

const it: Strings = {
  nav_home: "Home",
  nav_platforms: "Piattaforme",
  nav_pricing: "Prezzi",
  nav_resources: "Risorse",
  nav_other_platforms: "Altre piattaforme e-commerce",
  nav_solutions: "Soluzioni per settore",
  nav_roi: "Calcolatore di ROI del quiz",
  nav_benchmark: "Report benchmark dei quiz e-commerce",
  nav_blog: "Blog",
  nav_testimonials: "Testimonianze",
  nav_integrations: "Integrazioni",
  nav_templates: "Template di quiz",
  nav_partners: "Partner e affiliati",
  nav_faqs: "FAQ - Centro assistenza",
  cta_demo: "Prenota una demo",
  cta_signup: "Registrati",
  menu_open: "Apri menu",
  language_picker: "Lingua",
  footer_product: "Prodotto",
  footer_company: "Azienda",
  footer_resources: "Risorse",
  footer_link_prq: "Quiz di raccomandazione prodotti",
  footer_link_pricing: "Piani e prezzi",
  footer_link_whatsnew: "Novità",
  footer_link_integrations: "Integrazioni",
  footer_link_faqs: "FAQ",
  footer_link_tutorials: "Video tutorial",
  footer_link_contact: "Contattaci",
  footer_link_blog: "Blog",
  footer_link_jobs: "Lavora con noi",
  footer_link_testimonials: "Testimonianze",
  footer_link_partners: "Partner e affiliati",
  footer_link_roi: "Calcolatore di ROI del quiz",
  footer_link_benchmark: "Report benchmark dei quiz e-commerce",
  footer_link_solutions: "Soluzioni per settore",
  footer_link_glossary: "Glossario",
  footer_link_compare: "Confronti tra concorrenti",
  footer_tos: "Termini di servizio",
  footer_privacy: "Informativa sulla privacy",
  footer_security: "Sicurezza",
  footer_dpa: "DPA",
  footer_rss: "RSS",
  breadcrumb_home: "Home",
};

export const t = { en, es, fr, de, pt, it } satisfies Record<Lang, Strings>;
