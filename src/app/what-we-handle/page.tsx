import type { Metadata } from "next"
import Link from "next/link"
import {
  ArrowRight,
  Check,
  FileText,
  BarChart3,
  Bell,
  Users,
  Clock,
} from "lucide-react"
import { BASE_URL, BUSINESS } from "@/lib/constants"
import { SCHEMA_IDS } from "@/components/seo/json-ld"

export const metadata: Metadata = {
  title: { absolute: "NDIS Plan Manager Services | What Waylight Handles" },
  description:
    "Invoice processing, budget tracking, alerts, provider choice, and PRODA claims management. Five services your NDIS plan manager should handle.",
  alternates: { canonical: `${BASE_URL}/what-we-handle` },
  openGraph: {
    title: "NDIS Plan Manager Services | What Waylight Handles",
    description:
      "Five services your NDIS plan manager should handle. Done by one person who picks up the phone.",
    url: `${BASE_URL}/what-we-handle`,
    type: "website",
    locale: "en_AU",
    images: [
      {
        url: "/og/what-we-handle",
        width: 1200,
        height: 630,
        alt: "What Waylight handles - invoices, budgets, alerts, provider choice.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/og/what-we-handle"],
  },
}

const serviceJsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${BASE_URL}/what-we-handle#invoice-processing`,
    name: "NDIS Invoice Processing and Payment",
    serviceType: "NDIS Plan Management",
    description:
      "Provider invoice verification against the NDIS Price Arrangements and Price Limits, timely payment via PRODA, and out-of-pocket reimbursement processing.",
    provider: { "@id": SCHEMA_IDS.organization },
    areaServed: { "@type": "State", name: "Queensland" },
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${BASE_URL}/what-we-handle#budget-tracking`,
    name: "NDIS Budget Tracking and Monthly Statements",
    serviceType: "NDIS Plan Management",
    description:
      "Category-level budget visibility, monthly statements, plan utilisation insights, and plan-review preparation summaries.",
    provider: { "@id": SCHEMA_IDS.organization },
    areaServed: { "@type": "State", name: "Queensland" },
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${BASE_URL}/what-we-handle#budget-alerts`,
    name: "NDIS Budget Alerts",
    serviceType: "NDIS Plan Management",
    description:
      "Spending trajectory analysis with early warnings for over- or under-spend against the plan timeline.",
    provider: { "@id": SCHEMA_IDS.organization },
    areaServed: { "@type": "State", name: "Queensland" },
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${BASE_URL}/what-we-handle#provider-choice`,
    name: "Provider Choice and Flexibility for Plan-Managed Participants",
    serviceType: "NDIS Plan Management",
    description:
      "Plan-managed participants can use both NDIS-registered and unregistered providers, with no NDIA panel restrictions.",
    provider: { "@id": SCHEMA_IDS.organization },
    areaServed: { "@type": "State", name: "Queensland" },
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${BASE_URL}/what-we-handle#claims-management`,
    name: "NDIS Claims and PRODA Portal Management",
    serviceType: "NDIS Plan Management",
    description:
      "Service bookings, payment requests, service agreements, and plan queries managed through PRODA on the participant's behalf.",
    provider: { "@id": SCHEMA_IDS.organization },
    areaServed: { "@type": "State", name: "Queensland" },
  },
]

const handleFaqs = [
  {
    q: "What services does an NDIS plan manager provide?",
    a: "An NDIS plan manager provides five core services: invoice processing and payment, budget tracking and monthly statements, budget alerts, provider choice support, and NDIS portal claims management. All are funded under the NDIS Plan Management budget category.",
  },
  {
    q: "How quickly does Waylight process NDIS invoices?",
    a: "Most invoices are processed within 1-2 business days of receipt. Payment to the provider via PRODA typically clears the same day as approval.",
  },
  {
    q: "Can plan-managed NDIS participants use unregistered providers?",
    a: "Yes. Plan-managed participants can use both NDIS-registered and unregistered providers. NDIA-managed participants can only use registered providers; self-managed participants can use both.",
  },
  {
    q: "Does Waylight handle claims through the NDIS PRODA portal?",
    a: "Yes. Waylight manages service bookings, payment requests, service agreements, and plan queries through PRODA on the participant's behalf, so the participant does not interact with the portal directly.",
  },
] as const

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": `${BASE_URL}/what-we-handle#faq`,
  mainEntity: handleFaqs.map((f) => ({
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
    { "@type": "ListItem", position: 2, name: "What We Handle", item: `${BASE_URL}/what-we-handle` },
  ],
}

const services = [
  {
    icon: FileText,
    title: "Invoice processing & payment",
    description:
      "Your providers send invoices straight to us. We check them against the NDIS Price Arrangements and Price Limits, then pay them on time. Paid something out of pocket? Submit a reimbursement and we process it. You choose whether to review invoices before we pay or let us handle the lot.",
    features: [
      "Provider invoice verification against NDIS price limits",
      "Timely payment to your providers",
      "Out-of-pocket reimbursement processing",
      "You choose: review yourself or let us approve",
    ],
  },
  {
    icon: BarChart3,
    title: "Budget tracking & monthly statements",
    description:
      "Know exactly where your funding stands at any time. Monthly statements with clean category breakdowns, sent to you and the people who help you make decisions about your plan. No surprises at review time.",
    features: [
      "Clear category-level visibility",
      "Monthly statements every month",
      "Plan utilisation insights",
      "Plan-review preparation summary",
    ],
  },
  {
    icon: Bell,
    title: "Budget alerts when something's off",
    description:
      "NDIS plans run on a fixed timeline. We track your spending against that timeline and flag it when funding is running ahead or behind schedule. Early enough that you can actually adjust before plan review.",
    features: [
      "Spending trajectory analysis",
      "Early warnings for over- or under-spend",
      "Notifications to you and relevant providers",
      "Helps avoid underspend at plan review",
    ],
  },
  {
    icon: Users,
    title: "Provider choice & flexibility",
    description:
      "Plan-managed participants can use both NDIS-registered and unregistered providers. That's the whole point. More choice in who delivers your supports, more flexibility in how they're delivered, no restriction to NDIA-managed provider panels.",
    features: [
      "Registered and unregistered providers welcome",
      "Greater choice of support workers and therapists",
      "Flexibility in how supports are delivered",
      "No NDIA panel restrictions",
    ],
  },
  {
    icon: Clock,
    title: "Claims & NDIS portal management",
    description:
      "We handle the NDIS portal so you don't have to. Service bookings, payment requests, service agreements, plan queries. All managed through PRODA on your behalf, so the whole financial side just works in the background.",
    features: [
      "Service booking and agreement management",
      "Payment request lodgement",
      "Portal query resolution",
      "Plan start-up assistance for new participants",
    ],
  },
]

export default function WhatWeHandlePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* ========================================================== */}
      {/* HERO                                                        */}
      {/* ========================================================== */}
      <section className="relative overflow-hidden atmos grain pt-24 md:pt-32 pb-20 md:pb-28">
        <div className="arch hidden md:block" style={{ right: "-160px", top: "60px", width: "520px", height: "260px" }} />
        <div className="arch hidden md:block" style={{ right: "-80px", top: "140px", width: "380px", height: "190px", opacity: 0.55 }} />

        <div className="relative mx-auto max-w-[1240px] px-6 md:px-10">
          <div className="max-w-[58ch]">
            <p className="eyebrow rise d1">What we handle</p>
            <h1
              className="font-display text-[2.6rem] sm:text-5xl md:text-[4.6rem] leading-[0.98] mt-7 rise d2 text-foreground"
              style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 60" }}
            >
              Everything your plan manager{" "}
              <span
                className="italic text-[color:var(--color-teal-500)]"
                style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 100" }}
              >
                should handle
              </span>
              .
            </h1>
            <p className="mt-8 text-lg md:text-xl text-[color:var(--color-ink-soft)] leading-[1.65] max-w-[58ch] rise d3">
              Five things, done by one person who picks up the phone. No portals to log into. No ticket numbers. No
              chasing.
            </p>
            <div className="mt-9 inline-flex items-center gap-3 rounded-full border border-[color:var(--color-gold-500)]/40 bg-white/60 px-5 py-2.5 rise d4">
              <span className="text-sm text-[color:var(--color-ink-muted)]">Funded by your NDIS plan at</span>
              <span className="font-semibold text-foreground">{BUSINESS.paplMonthly}/month</span>
              <span className="text-sm text-[color:var(--color-ink-muted)]">no cost to your other supports</span>
            </div>
            <p className="hand hand-lg -rotate-2 mt-8 ml-2">the boring bits, handled.</p>
            <p className="dark-reveal hand hand-lg rotate-1 mt-3 ml-2 text-[color:var(--color-teal-glow)]">
              even the late-night invoices
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================== */}
      {/* THE FIVE SERVICES                                           */}
      {/* ========================================================== */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-[1180px] px-6 md:px-10">
          <h2 className="sr-only">Five things every NDIS plan manager should handle</h2>
          <div className="stack stack-xl">
            {services.map((s, i) => (
              <article
                key={s.title}
                className="brand-card group"
              >
                <div className="flex flex-col md:flex-row md:items-start gap-7">
                  <div className="flex items-start gap-5 md:flex-col md:items-center md:gap-4">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[color:var(--color-teal-500)]/10 text-[color:var(--color-teal-500)] group-hover:bg-[color:var(--color-teal-500)] group-hover:text-[color:var(--color-ivory-50)] transition-colors duration-500">
                      <s.icon className="h-6 w-6" strokeWidth={1.7} />
                    </div>
                    <span
                      className="font-display text-3xl italic text-[color:var(--color-gold-500)] leading-none md:mt-1"
                      style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 100" }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display text-2xl md:text-[1.85rem] text-foreground leading-tight">{s.title}</h3>
                    <p className="text-[color:var(--color-ink-muted)] mt-3 leading-relaxed">{s.description}</p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 mt-5">
                      {s.features.map((f) => (
                        <li key={f} className="flex items-start gap-2 text-[15px] text-[color:var(--color-ink-muted)]">
                          <span className="yes mt-0.5" style={{ width: 18, height: 18 }}>
                            <Check className="h-2.5 w-2.5" strokeWidth={3.5} />
                          </span>
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <p className="hand rotate-2 mt-10 ml-2">five things. that&apos;s the whole job.</p>
          <p className="dark-reveal hand hand-lg -rotate-1 mt-3 ml-2 text-[color:var(--color-teal-glow)]">
            five things, done in candlelight if needed
          </p>
        </div>
      </section>

      {/* ========================================================== */}
      {/* INLINE NUDGE TO HOW IT WORKS                                */}
      {/* ========================================================== */}
      <section className="py-12 md:py-16 section-tint grain relative">
        <div className="relative mx-auto max-w-[820px] px-6 md:px-10 text-center">
          <p className="eyebrow justify-center" style={{ display: "inline-flex" }}>
            Want the detail?
          </p>
          <h2
            className="font-display text-3xl md:text-[2.6rem] leading-[1.05] mt-5 text-foreground"
            style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 60" }}
          >
            See exactly{" "}
            <span
              className="italic text-[color:var(--color-teal-500)]"
              style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 100" }}
            >
              how it works
            </span>
            .
          </h2>
          <p className="mt-5 text-[color:var(--color-ink-muted)] leading-relaxed max-w-[55ch] mx-auto">
            Step-by-step: how funding flows, how invoices get paid, what it costs (nothing, and we explain why), and the
            answer to every question we&apos;ve ever been asked.
          </p>
          <Link href="/how-it-works" className="btn btn-ghost mt-8 inline-flex">
            How plan management actually works
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* ========================================================== */}
      {/* FAQ                                                         */}
      {/* ========================================================== */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-[820px] px-6 md:px-10">
          <div className="text-center mb-12">
            <p className="eyebrow justify-center" style={{ display: "inline-flex" }}>
              Frequently asked
            </p>
            <h2
              className="font-display text-3xl md:text-[2.8rem] leading-[1.05] mt-5 text-foreground"
              style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 60" }}
            >
              About these{" "}
              <span
                className="italic text-[color:var(--color-teal-500)]"
                style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 100" }}
              >
                services
              </span>
              .
            </h2>
          </div>

          <div
            className="bg-white rounded-[24px] border border-black/[0.06] overflow-hidden"
            style={{ boxShadow: "0 1px 0 rgba(31,111,111,0.06), 0 12px 32px -16px rgba(20,60,60,0.18)" }}
          >
            {handleFaqs.map((f, i) => (
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
      {/* FINAL CTA                                                   */}
      {/* ========================================================== */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 atmos-deep" />
        <div className="absolute inset-0 grain opacity-30" />
        <div
          className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(217,190,130,0.25), transparent 60%)" }}
        />
        <div className="relative mx-auto max-w-[760px] px-6 md:px-10 text-center">
          <h2
            className="font-display text-3xl md:text-[3.4rem] leading-[1.05] text-[color:var(--color-ivory-50)]"
            style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 70" }}
          >
            Ready for a plan manager who{" "}
            <span
              className="italic text-[color:var(--color-gold-300)]"
              style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 100" }}
            >
              actually picks up
            </span>
            ?
          </h2>
          <p className="mt-7 text-[color:var(--color-ivory-100)]/85 text-lg leading-[1.7] max-w-[52ch] mx-auto">
            Every situation is different. Tell us about your plan and we&apos;ll walk you through how it would work for
            you specifically. No pitch deck, no obligation.
          </p>
          <div className="mt-10">
            <Link href="/contact" className="btn btn-light">
              Talk to a real person
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <p className="hand hand-lg mt-7 -rotate-2" style={{ color: "rgba(217,190,130,0.75)" }}>
            go on, say hello
          </p>
        </div>
      </section>
    </>
  )
}
