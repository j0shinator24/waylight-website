/**
 * OG image content map.
 *
 * Programmatic Open Graph image generation lives at /og/[slug].
 * Each entry below drives the dynamic ImageResponse rendered by
 * src/app/og/[slug]/route.tsx. Update copy here and the social
 * preview regenerates on next request - no manual export step.
 *
 * Visual templates (one per layout family) are matched on `template`.
 * If a slug is missing, the route falls back to `default`.
 */

export type OgTemplate =
  | "default"
  | "home"
  | "about"
  | "how-it-works"
  | "what-we-handle"
  | "for-support-coordinators"
  | "resources"
  | "contact"

export type OgEntry = {
  template: OgTemplate
  /** Eyebrow label - uppercase tracked label above headline. */
  eyebrow: string
  /** Headline plain part rendered before the italic emphasis run. */
  headlinePre: string
  /** Italic-emphasis run inside the headline. */
  headlineItalic: string
  /** Headline plain part rendered after the italic emphasis run. */
  headlinePost?: string
  /** Optional supporting microline / subline beneath the headline. */
  microline?: string
  /** OG alt text for screen readers and crawlers. */
  alt: string
  /** Page-specific extras consumed by per-template renderers. */
  extras?: Record<string, unknown>
}

export const OG_DEFAULT_ALT =
  "Waylight Plan Management - NDIS plan manager based in Queensland."

/**
 * Slug -> OG entry. Slugs match the URL path (no leading slash).
 * `default` is the site-wide fallback rendered for any missing slug.
 */
export const OG_CONTENT: Record<string, OgEntry> = {
  default: {
    template: "default",
    eyebrow: "WAYLIGHT . NDIS PLAN MANAGEMENT . QLD",
    headlinePre: "Your plan, ",
    headlineItalic: "managed",
    headlinePost: " by a real person.",
    microline: "waylight.com.au . Brisbane, QLD",
    alt: OG_DEFAULT_ALT,
  },
  home: {
    template: "home",
    eyebrow: "NDIS PLAN MANAGEMENT . QUEENSLAND",
    headlinePre: "Your plan, ",
    headlineItalic: "managed",
    headlinePost: " by a real person.",
    alt: "Waylight - your NDIS plan, managed by a real person.",
    extras: {
      bullets: [
        "Funded by your NDIS plan",
        "No cost to your other supports",
        "Queensland based",
      ],
      promiseEyebrow: "SMALL ON PURPOSE",
      promisePre: "We stay ",
      promiseItalic: "deliberately small.",
    },
  },
  about: {
    template: "about",
    eyebrow: "A LETTER FROM THE FOUNDER",
    headlinePre: "Built by someone ",
    headlineItalic: "who gets it.",
    microline: "Joshua, Plan Manager . Brisbane, QLD",
    alt: "About Waylight - built by someone who gets it.",
    extras: {
      handAnnotation: "small on purpose",
    },
  },
  "how-it-works": {
    template: "how-it-works",
    eyebrow: "HOW IT WORKS",
    headlinePre: "Three steps. ",
    headlineItalic: "That's the whole thing.",
    alt: "How Waylight plan management works in three steps.",
    extras: {
      steps: [
        { numeral: "i", caption: "Choose providers" },
        { numeral: "ii", caption: "We process invoices" },
        { numeral: "iii", caption: "You stay informed" },
      ],
      handAnnotation: "three steps. that's it.",
    },
  },
  "what-we-handle": {
    template: "what-we-handle",
    eyebrow: "WHAT WE HANDLE",
    headlinePre: "The boring bits, ",
    headlineItalic: "handled.",
    microline: "Invoices . Budgets . Provider payments . Statements",
    alt: "What Waylight handles - invoices, budgets, alerts, provider choice.",
    extras: {
      cards: [
        {
          icon: "FileText",
          title: "Invoice processing",
          body: "Provider invoices verified against NDIS rates and paid on time.",
        },
        {
          icon: "BarChart3",
          title: "Budget tracking",
          body: "Monthly statements with category-by-category breakdown.",
        },
        {
          icon: "Bell",
          title: "Budget alerts",
          body: "We flag if your spending runs ahead or behind schedule.",
        },
        {
          icon: "Users",
          title: "Provider choice",
          body: "Use both registered and unregistered providers.",
        },
      ],
    },
  },
  "for-support-coordinators": {
    template: "for-support-coordinators",
    eyebrow: "FOR SUPPORT COORDINATORS",
    headlinePre: "A plan manager you can ",
    headlineItalic: "actually reach.",
    alt: "Waylight for support coordinators - a plan manager you can actually reach.",
    extras: {
      bullets: [
        { numeral: "i", label: "2-day onboarding" },
        { numeral: "ii", label: "Coordinator portal access" },
        { numeral: "iii", label: "Direct line, every time" },
      ],
      cardEyebrow: "WHEN THE PORTAL CAN'T ANSWER IT",
      cardLine: "you reach the same plan manager. every time.",
    },
  },
  resources: {
    template: "resources",
    eyebrow: "RESOURCES & GUIDES",
    headlinePre: "Plain English on ",
    headlineItalic: "every page.",
    microline: "waylight.com.au/resources",
    alt: "Waylight Resources - plain English on every page.",
    extras: {
      rows: [
        { title: "Plan management basics", descriptor: "What it is, who it's for" },
        { title: "NDIS glossary", descriptor: "Terms, decoded" },
        { title: "FAQs", descriptor: "The questions everyone asks" },
      ],
    },
  },
  contact: {
    template: "contact",
    eyebrow: "TALK TO US",
    headlinePre: "Talk to ",
    headlineItalic: "a real person.",
    microline: "One person. Same person. Every time.",
    alt: "Contact Waylight - talk to a real person.",
    extras: {
      buttonText: "Talk to a real person",
      footer: "ABN 97 544 538 291 . admin@waylight.com.au . waylight.com.au",
    },
  },
}

/** Resolve a slug to its OG entry, falling back to the default template. */
export function getOgEntry(slug: string | undefined): OgEntry {
  if (!slug) return OG_CONTENT.default
  return OG_CONTENT[slug] ?? OG_CONTENT.default
}

/** All slugs with a per-page OG entry (excludes the default fallback). */
export const OG_SLUGS = Object.keys(OG_CONTENT).filter((s) => s !== "default")
