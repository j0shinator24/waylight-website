import { BASE_URL, BUSINESS } from "@/lib/constants"

/**
 * Site-wide JSON-LD schemas mounted in the root layout.
 *
 * Defines the canonical Organization (LocalBusiness) and WebSite entities
 * with stable @id URLs so per-page schemas can reference them by @id rather
 * than re-defining the full block on every page (per
 * `references/seo-and-aeo.md` §SCHEMA-LIBRARY-NDIS @id cross-document pattern).
 */

const ORG_ID = `${BASE_URL}/#organization`
const WEBSITE_ID = `${BASE_URL}/#website`

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": ORG_ID,
  additionalType: "https://schema.org/FinancialService",
  name: BUSINESS.name,
  legalName: BUSINESS.legalName,
  description:
    "NDIS plan management service providing invoice processing, budget tracking, and provider payments for NDIS participants in Queensland.",
  url: BASE_URL,
  logo: `${BASE_URL}/logo.png`,
  image: `${BASE_URL}/logo.png`,
  email: BUSINESS.email,
  telephone: BUSINESS.phone,
  taxID: `ABN ${BUSINESS.abn}`,
  founder: {
    "@type": "Person",
    "@id": `${BASE_URL}/about#joshua`,
    name: BUSINESS.founder,
    jobTitle: "Plan Manager",
  },
  areaServed: {
    "@type": "State",
    name: "Queensland",
    containedInPlace: { "@type": "Country", name: "Australia" },
  },
  address: {
    "@type": "PostalAddress",
    addressRegion: "QLD",
    addressCountry: "AU",
  },
  priceRange: "Funded by NDIS",
  knowsAbout: [
    "NDIS Plan Management",
    "NDIS Invoice Processing",
    "NDIS Budget Tracking",
    "NDIS Provider Payments",
    "NDIS PRODA Claims",
  ],
}

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": WEBSITE_ID,
  name: BUSINESS.name,
  url: BASE_URL,
  publisher: { "@id": ORG_ID },
  inLanguage: "en-AU",
}

/**
 * Render-once site-wide JSON-LD. Mount in `app/layout.tsx` body so every page
 * inherits the Organization + WebSite schemas. Per-page Person, Service,
 * FAQPage, Article schemas reference these by @id.
 */
export function SiteJsonLd() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
      />
    </>
  )
}

/**
 * @id constants exported for cross-document references from per-page schemas.
 */
export const SCHEMA_IDS = {
  organization: ORG_ID,
  website: WEBSITE_ID,
  joshua: `${BASE_URL}/about#joshua`,
  servicePlanManagement: `${BASE_URL}/#service-plan-management`,
  resourcesCollection: `${BASE_URL}/resources#collectionpage`,
} as const
