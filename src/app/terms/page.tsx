import type { Metadata } from "next"
import { BASE_URL, BUSINESS } from "@/lib/constants"
import { SCHEMA_IDS } from "@/components/seo/json-ld"

export const metadata: Metadata = {
  title: "Terms of Use",
  description:
    "Terms of use for the Waylight Plan Management website. General information disclaimer, limitation of liability, governing law: Queensland, Australia.",
  alternates: { canonical: `${BASE_URL}/terms` },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Terms of Use | Waylight Plan Management",
    description: "Website terms of use. Governing law: Queensland, Australia.",
    url: `${BASE_URL}/terms`,
    type: "website",
    locale: "en_AU",
    images: [
      {
        url: "/og/default",
        width: 1200,
        height: 630,
        alt: "Waylight Plan Management - NDIS plan manager based in Queensland.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/og/default"],
  },
}

const webPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${BASE_URL}/terms#webpage`,
  url: `${BASE_URL}/terms`,
  name: "Terms of Use | Waylight Plan Management",
  description:
    "Terms of use for the Waylight Plan Management website. General information disclaimer, NDIS pricing reference, registration status, limitation of liability, governing law.",
  isPartOf: { "@id": SCHEMA_IDS.website },
  about: { "@id": SCHEMA_IDS.organization },
  datePublished: "2026-04-01",
  dateModified: "2026-04-01",
  inLanguage: "en-AU",
}

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
    { "@type": "ListItem", position: 2, name: "Terms", item: `${BASE_URL}/terms` },
  ],
}

export default function TermsPage() {
  return (
    <article className="py-20 md:py-28">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <div className="mx-auto max-w-[680px] px-6 md:px-10">
        <p className="eyebrow">Terms of use</p>
        <h1
          className="text-4xl md:text-[3rem] leading-[1.05] mt-5 text-foreground"
          style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 60" }}
        >
          The{" "}
          <span
            className="italic text-[color:var(--color-teal-500)]"
            style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 100" }}
          >
            fine print
          </span>
          .
        </h1>
        <p className="mt-3 text-xs text-[color:var(--color-ink-faint)] uppercase tracking-[0.18em]">Last updated: April 2026</p>

        <div className="mt-12 space-y-12 text-[color:var(--color-ink-soft)] leading-[1.75]">
          <Section title="General information">
            <p>
              The content on this website is provided by {BUSINESS.legalName} (ABN {BUSINESS.abn}) for general information
              purposes only. It is not intended as professional, financial, legal, or accounting advice. You should not rely
              on any information on this website as a substitute for professional advice relevant to your specific
              circumstances.
            </p>
          </Section>

          <Section title="NDIS pricing and rates">
            <p>
              NDIS rates displayed on this website are sourced from the current NDIS Pricing Arrangements and Price Limits
              (PAPL) published by the National Disability Insurance Agency. These rates are set by the NDIA, not by Waylight,
              and may change. Always refer to the{" "}
              <a
                href="https://www.ndis.gov.au/providers/pricing-arrangements"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[color:var(--color-teal-500)] underline hover:text-[color:var(--color-teal-700)] transition-colors"
              >
                official NDIS Pricing Arrangements
              </a>{" "}
              for the latest rates.
            </p>
          </Section>

          <Section title="Registration status">
            <p>
              {BUSINESS.name} is not yet a registered NDIS provider. Our registration application is currently being processed
              by the NDIS Quality and Safeguards Commission. Until registration is confirmed, we cannot accept participants
              or process NDIS claims. All enquiries received through this website are treated as expressions of interest.
            </p>
          </Section>

          <Section title="Limitation of liability">
            <p>
              To the maximum extent permitted by law, {BUSINESS.legalName} excludes all liability for any loss or damage
              arising from the use of this website or reliance on any information contained on it. This includes, without
              limitation, indirect or consequential loss, loss of data, or loss of opportunity.
            </p>
          </Section>

          <Section title="Intellectual property">
            <p>
              All content on this website, including text, design, and layout, is the property of {BUSINESS.legalName} unless
              otherwise stated. You may not reproduce, distribute, or republish any content without prior written permission.
            </p>
          </Section>

          <Section title="External links">
            <p>
              This website may contain links to external websites, including our sister site at waylightai.com.au.{" "}
              {BUSINESS.legalName} is not responsible for the content, accuracy, or privacy practices of any linked website.
            </p>
          </Section>

          <Section title="Governing law">
            <p>
              These terms are governed by the laws of Queensland, Australia. Any disputes arising from the use of this
              website are subject to the exclusive jurisdiction of the courts of Queensland.
            </p>
          </Section>

          <Section title="Contact">
            <p>
              Questions about these terms can be directed to{" "}
              <a
                href={`mailto:${BUSINESS.email}`}
                className="text-[color:var(--color-teal-500)] underline hover:text-[color:var(--color-teal-700)] transition-colors"
              >
                {BUSINESS.email}
              </a>
              .
            </p>
          </Section>
        </div>

        <p className="hand mt-14 -rotate-1">honest fine print. that&apos;s rare.</p>
      </div>
    </article>
  )
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2
        className="text-2xl text-foreground mb-4"
        style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 70" }}
      >
        {title}
      </h2>
      <div className="text-[1.02rem]">{children}</div>
    </section>
  )
}
