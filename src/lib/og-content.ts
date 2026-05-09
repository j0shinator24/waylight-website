/**
 * OG card content per page slug. Used by /og/[slug]/route.tsx.
 */
export type OgEntry = {
  eyebrow: string
  headline: string
}

export const ogContent: Record<string, OgEntry> = {
  home: {
    eyebrow: "Queensland NDIS Plan Management",
    headline: "Your plan, managed personally.",
  },
  about: {
    eyebrow: "Waylight",
    headline: "One dedicated plan manager. No call centres.",
  },
  services: {
    eyebrow: "What we do",
    headline: "Invoice processing, budget tracking, provider payments.",
  },
  contact: {
    eyebrow: "Get in touch",
    headline: "Talk to a real plan manager.",
  },
  resources: {
    eyebrow: "Plan management resources",
    headline: "Guides, FAQs, and how-tos.",
  },
  "for-support-coordinators": {
    eyebrow: "For Support Coordinators & LACs",
    headline: "A plan manager who keeps you in the loop.",
  },
  "waylight-ai": {
    eyebrow: "Waylight",
    headline: "Where AI meets plan management.",
  },
  policies: {
    eyebrow: "Waylight",
    headline: "Our policies.",
  },
  terms: {
    eyebrow: "Waylight",
    headline: "Terms of use.",
  },
  accessibility: {
    eyebrow: "Waylight",
    headline: "Accessibility statement.",
  },
  default: {
    eyebrow: "Waylight",
    headline: "Queensland NDIS plan management, done personally.",
  },
}
