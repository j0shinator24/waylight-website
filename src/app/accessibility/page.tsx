import type { Metadata } from "next"
import { BASE_URL, BUSINESS } from "@/lib/constants"
import { SCHEMA_IDS } from "@/components/seo/json-ld"

export const metadata: Metadata = {
  title: "Accessibility Statement",
  description:
    "Waylight Plan Management is committed to making our website accessible to everyone. WCAG 2.1 AA target, conformance details, known limitations.",
  alternates: { canonical: `${BASE_URL}/accessibility` },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Accessibility Statement | Waylight Plan Management",
    description: "Waylight aims to meet WCAG 2.1 Level AA on every page.",
    url: `${BASE_URL}/accessibility`,
    type: "article",
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
  "@id": `${BASE_URL}/accessibility#webpage`,
  url: `${BASE_URL}/accessibility`,
  name: "Accessibility Statement | Waylight Plan Management",
  description:
    "Waylight Plan Management is committed to making our website accessible to everyone. Our accessibility statement, conformance level, known limitations, and feedback channel.",
  isPartOf: { "@id": SCHEMA_IDS.website },
  about: { "@id": SCHEMA_IDS.organization },
  accessibilitySummary:
    "Waylight aims to meet WCAG 2.1 Level AA. Skip-link, semantic HTML landmarks, ARIA labels, visible focus indicators, sufficient colour contrast, dark mode, responsive design, accessible forms.",
  accessibilityFeature: [
    "alternativeText",
    "highContrastDisplay",
    "readingOrder",
    "structuralNavigation",
    "tableOfContents",
  ],
  accessibilityHazard: "none",
  accessibilityAPI: "ARIA",
}

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
    {
      "@type": "ListItem",
      position: 2,
      name: "Accessibility",
      item: `${BASE_URL}/accessibility`,
    },
  ],
}

export default function AccessibilityPage() {
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
        <p className="eyebrow">Accessibility statement</p>
        <h1
          className="text-4xl md:text-[3rem] leading-[1.05] mt-5 text-foreground"
          style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 60" }}
        >
          A site that{" "}
          <span
            className="italic text-[color:var(--color-teal-500)]"
            style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 100" }}
          >
            works for everyone
          </span>
          .
        </h1>

        <div className="mt-12 space-y-12 text-[color:var(--color-ink-soft)] leading-[1.75]">
          <Section title="Our commitment">
            <p>
              {BUSINESS.name} is committed to making this website accessible to everyone, including people with disabilities.
              As an NDIS plan management provider, accessibility is not optional. Our participants, their families, and
              support coordinators deserve a website that works for them regardless of ability, device, or assistive
              technology.
            </p>
          </Section>

          <Section title="Standards we follow">
            <p>
              We aim to meet the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA standard. That means sufficient
              colour contrast, keyboard navigability, screen reader compatibility, semantic HTML structure, and responsive
              design across every device size.
            </p>
          </Section>

          <Section title="What we&apos;ve done">
            <ul className="space-y-2 list-disc pl-5 marker:text-[color:var(--color-gold-500)]">
              <li>Skip-to-content link for keyboard users</li>
              <li>Semantic HTML landmarks (header, nav, main, footer)</li>
              <li>ARIA labels on all interactive elements</li>
              <li>Visible focus indicators on all focusable elements</li>
              <li>Sufficient colour contrast ratios (WCAG AA minimum)</li>
              <li>Dark mode for users who prefer reduced brightness</li>
              <li>Responsive layout that works on mobile, tablet, and desktop</li>
              <li>Form labels associated with all input fields</li>
              <li>Error messages announced to screen readers</li>
              <li>Touch targets meeting the 44px minimum</li>
            </ul>
          </Section>

          <Section title="Known limitations">
            <p>
              Our policy documents are currently available as PDF files. We&apos;re working to provide HTML alternatives for
              improved accessibility. If you have difficulty accessing any policy document, contact us and we&apos;ll provide
              the content in an alternative format.
            </p>
          </Section>

          <Section title="Feedback">
            <p>
              If you encounter any accessibility barrier on this website, please contact us at{" "}
              <a
                href={`mailto:${BUSINESS.email}`}
                className="text-[color:var(--color-teal-500)] underline hover:text-[color:var(--color-teal-700)] transition-colors"
              >
                {BUSINESS.email}
              </a>{" "}
              or call{" "}
              <a
                href={`tel:${BUSINESS.phone.replace(/\s/g, "")}`}
                className="text-[color:var(--color-teal-500)] underline hover:text-[color:var(--color-teal-700)] transition-colors"
              >
                {BUSINESS.phone}
              </a>
              . We take accessibility feedback seriously and respond within two business days.
            </p>
          </Section>
        </div>

        <p className="hand mt-14 -rotate-1">accessible. by design.</p>
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
