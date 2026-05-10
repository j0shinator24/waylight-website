import type { Metadata } from "next"
import Link from "next/link"
import { BookOpen, ArrowRight, Clock } from "lucide-react"
import { BASE_URL } from "@/lib/constants"
import { SCHEMA_IDS } from "@/components/seo/json-ld"

export const metadata: Metadata = {
  title: { absolute: "NDIS Plan Management Guides | Waylight Resources" },
  description:
    "Plain-English guides to NDIS plan management. What a plan manager does, how to switch, plan management vs self-management. No sales pitch.",
  alternates: { canonical: `${BASE_URL}/resources` },
  openGraph: {
    title: "NDIS Plan Management Guides | Waylight Resources",
    description: "Honest, jargon-free guides for NDIS participants and families.",
    url: `${BASE_URL}/resources`,
    type: "website",
    locale: "en_AU",
    images: [
      {
        url: "/og/resources",
        width: 1200,
        height: 630,
        alt: "Waylight Resources - plain English on every page.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/og/resources"],
  },
}

const guides = [
  {
    title: "What does an NDIS plan manager actually do?",
    description:
      "A plain-English explanation of plan management. What it is, what your plan manager handles, how it's funded, and how to get it added to your plan.",
    href: "/resources/what-is-plan-management",
    readingTime: "6 min read",
  },
  {
    title: "How to switch NDIS plan managers",
    description:
      "You can change plan managers any time. No lock-in, no exit fees, no penalties. Here's exactly how the process works, step by step.",
    href: "/resources/how-to-switch-plan-managers",
    readingTime: "5 min read",
  },
  {
    title: "Plan management vs self-management",
    description:
      "A side-by-side look at the three NDIS management options so you can decide which one fits your situation. No spin, no jargon.",
    href: "/resources/plan-management-vs-self-management",
    readingTime: "6 min read",
  },
]

const resourcesFaqs = [
  {
    q: "What is NDIS plan management?",
    a: "NDIS plan management is a service where a plan manager handles the financial side of an NDIS plan. The plan manager processes invoices, pays providers, tracks the budget, and manages NDIS portal claims. It is funded by the NDIS under its own budget category and does not reduce other supports.",
  },
  {
    q: "How do I switch NDIS plan managers?",
    a: "There is no lock-in period for NDIS plan managers. To switch, contact the new plan manager, sign a new service agreement, and end the agreement with the previous provider. The new plan manager coordinates with the NDIA so there is no break in service.",
  },
  {
    q: "What is the difference between plan management and self-management?",
    a: "Plan management means a plan manager handles invoices and pays providers using your NDIS funds. Self-management means you handle the financial admin yourself, including invoice payment and record-keeping. Both options allow use of unregistered providers; NDIA-managed funding does not.",
  },
  {
    q: "Is NDIS plan management free?",
    a: "Yes, plan management is free for participants. It is funded by the NDIS at a regulated monthly rate under the CB Choice and Control budget category. It does not reduce core, capital, or capacity-building funding.",
  },
  {
    q: "Can I use unregistered providers with plan management?",
    a: "Yes. Plan-managed and self-managed participants can use both NDIS-registered and unregistered providers. NDIA-managed participants can only use registered providers.",
  },
  {
    q: "How do I get plan management added to my NDIS plan?",
    a: "Ask your Local Area Coordinator (LAC), support coordinator, or NDIA planner to include plan management at your next planning meeting. It is a separate budget item that gets added to the plan.",
  },
] as const

const collectionPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": SCHEMA_IDS.resourcesCollection,
  url: `${BASE_URL}/resources`,
  name: "NDIS Plan Management Resources | Waylight",
  description:
    "Plain-English guides to NDIS plan management for participants and families. Plan management explained, switching plan managers, and plan management vs self-management.",
  isPartOf: { "@id": SCHEMA_IDS.website },
  about: { "@id": SCHEMA_IDS.servicePlanManagement },
  hasPart: guides.map((g) => ({
    "@type": "Article",
    name: g.title,
    url: `${BASE_URL}${g.href}`,
    description: g.description,
    author: { "@id": SCHEMA_IDS.joshua },
  })),
}

const resourcesFaqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": `${BASE_URL}/resources#faq`,
  mainEntity: resourcesFaqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
}

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
    { "@type": "ListItem", position: 2, name: "Resources", item: `${BASE_URL}/resources` },
  ],
}

export default function ResourcesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionPageJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(resourcesFaqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* ========================================================== */}
      {/* HERO                                                       */}
      {/* ========================================================== */}
      <section className="relative overflow-hidden atmos grain pt-28 md:pt-36 pb-20 md:pb-24">
        <div className="arch hidden md:block" style={{ right: "-160px", top: "60px", width: "520px", height: "260px" }} />
        <div className="arch hidden md:block" style={{ right: "-80px", top: "140px", width: "380px", height: "190px", opacity: 0.55 }} />

        <div className="relative mx-auto max-w-[1240px] px-6 md:px-10">
          <div className="max-w-[60ch]">
            <p className="eyebrow rise d1">Resources</p>
            <h1
              className="text-[2.6rem] sm:text-5xl md:text-[4.6rem] leading-[0.96] mt-7 rise d2 text-foreground"
              style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 60" }}
            >
              NDIS plan management,{" "}
              <span
                className="italic text-[color:var(--color-teal-500)]"
                style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 100" }}
              >
                explained simply
              </span>
              .
            </h1>
            <p className="mt-8 text-lg md:text-xl text-[color:var(--color-ink-soft)] leading-[1.7] max-w-[58ch] rise d3">
              Honest, jargon-free guides written for participants and families. No sales pitch. Just the information you need
              to make good decisions about your NDIS funding.
            </p>
            <p className="hand hand-lg -rotate-2 mt-8 ml-2">finally, some clarity.</p>
            <p className="dark-reveal hand hand-lg rotate-1 mt-3 ml-2">
              honest stays honest, day or night.
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================== */}
      {/* GUIDES GRID                                                */}
      {/* ========================================================== */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-[1180px] px-6 md:px-10">
          <div className="mb-12">
            <p className="eyebrow">Three guides</p>
            <h2
              className="text-3xl md:text-[2.8rem] leading-[1.05] mt-5 text-foreground"
              style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 60" }}
            >
              Start{" "}
              <span
                className="italic text-[color:var(--color-teal-500)]"
                style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 100" }}
              >
                here
              </span>
              .
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {guides.map((g, i) => (
              <Link key={g.href} href={g.href} className="group block">
                <article className="brand-card h-full flex flex-col">
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[color:var(--color-teal-500)]/10 text-[color:var(--color-teal-500)] group-hover:bg-[color:var(--color-teal-500)] group-hover:text-[color:var(--color-ivory-50)] transition-colors duration-500">
                      <BookOpen className="h-5 w-5" strokeWidth={1.7} />
                    </div>
                    <span
                      className="font-display text-2xl italic text-[color:var(--color-gold-500)] leading-none"
                      style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 100" }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="text-xl text-foreground leading-tight">{g.title}</h3>
                  <p className="text-[15px] text-[color:var(--color-ink-muted)] leading-relaxed mt-3 flex-1">{g.description}</p>
                  <div className="mt-5 pt-4 border-t border-black/[0.06] flex items-center justify-between">
                    <span className="flex items-center gap-1.5 text-xs text-[color:var(--color-ink-faint)]">
                      <Clock className="h-3.5 w-3.5" />
                      {g.readingTime}
                    </span>
                    <span className="flex items-center gap-1.5 text-sm font-medium text-[color:var(--color-teal-500)] opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all duration-300">
                      Read guide
                      <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </article>
              </Link>
            ))}
          </div>

          <p className="hand text-center mt-10 -rotate-1">more coming. one a month, max.</p>
        </div>
      </section>

      {/* ========================================================== */}
      {/* FAQ                                                         */}
      {/* ========================================================== */}
      <section className="py-20 md:py-28 section-tint grain relative">
        <div className="relative mx-auto max-w-[820px] px-6 md:px-10">
          <div className="text-center mb-12">
            <p className="eyebrow justify-center" style={{ display: "inline-flex" }}>
              Quick answers
            </p>
            <h2
              className="text-3xl md:text-[2.8rem] leading-[1.05] mt-5 text-foreground"
              style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 60" }}
            >
              The fundamentals,{" "}
              <span
                className="italic text-[color:var(--color-teal-500)]"
                style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 100" }}
              >
                in one place
              </span>
              .
            </h2>
          </div>

          <div
            className="bg-white rounded-[24px] border border-black/[0.06] overflow-hidden"
            style={{ boxShadow: "0 1px 0 rgba(31,111,111,0.06), 0 12px 32px -16px rgba(20,60,60,0.18)" }}
          >
            {resourcesFaqs.map((f, i) => (
              <details key={f.q} className={`group ${i > 0 ? "border-t border-black/[0.06]" : ""}`}>
                <summary className="flex cursor-pointer items-center justify-between gap-4 px-6 md:px-8 py-5 list-none [&::-webkit-details-marker]:hidden hover:bg-[color:var(--color-ivory-100)]/60 transition-colors">
                  <span className="font-display text-[1.15rem] md:text-[1.25rem] text-foreground leading-snug">
                    {f.q}
                  </span>
                  <span className="shrink-0 h-7 w-7 rounded-full border border-[color:var(--color-gold-500)]/50 flex items-center justify-center text-[color:var(--color-gold-600)] text-lg font-light transition-transform duration-300 group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="px-6 md:px-8 pb-6 text-[color:var(--color-ink-muted)] leading-[1.7] max-w-[60ch]">
                  {f.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================== */}
      {/* SOFT CTA                                                    */}
      {/* ========================================================== */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-[820px] px-6 md:px-10 text-center">
          <p className="eyebrow justify-center" style={{ display: "inline-flex" }}>
            Got a specific question?
          </p>
          <h2
            className="text-3xl md:text-[2.4rem] leading-[1.1] mt-5 text-foreground"
            style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 60" }}
          >
            Ask us{" "}
            <span
              className="italic text-[color:var(--color-teal-500)]"
              style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 100" }}
            >
              directly
            </span>
            .
          </h2>
          <p className="mt-5 text-[color:var(--color-ink-muted)] leading-relaxed max-w-[55ch] mx-auto">
            The guides cover the common stuff. If yours isn&apos;t in here, send us a message and we&apos;ll answer it
            personally. No commitment, no obligation.
          </p>
          <Link href="/contact" className="btn btn-ghost mt-7">
            Ask us anything
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  )
}
