import type { Metadata } from "next"
import Link from "next/link"
import {
  ArrowRight,
  Clock,
  BarChart3,
  UserCheck,
  Send,
  ClipboardCheck,
  Eye,
  Phone,
  Headphones,
  MessageSquareQuote,
} from "lucide-react"
import { BASE_URL } from "@/lib/constants"
import { SCHEMA_IDS } from "@/components/seo/json-ld"

export const metadata: Metadata = {
  title: { absolute: "For Support Coordinators | Refer to Waylight" },
  description:
    "Refer NDIS participants to a plan manager who actually picks up. Two-day onboarding, live coordinator portal view, monthly reports. QLD-based.",
  alternates: { canonical: `${BASE_URL}/for-support-coordinators` },
  openGraph: {
    title: "For Support Coordinators | Refer to Waylight Plan Management",
    description:
      "Two-day onboarding, live coordinator portal view, direct line. Queensland-based NDIS plan management.",
    url: `${BASE_URL}/for-support-coordinators`,
    type: "website",
    locale: "en_AU",
    images: [
      {
        url: "/og/for-support-coordinators",
        width: 1200,
        height: 630,
        alt: "Waylight for support coordinators - a plan manager you can actually reach.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/og/for-support-coordinators"],
  },
}

const scServiceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${BASE_URL}/for-support-coordinators#service`,
  name: "NDIS Plan Management Referrals for Support Coordinators",
  serviceType: "NDIS Plan Management",
  description:
    "Direct-line plan management for NDIS support coordinators. Two-day onboarding, live coordinator portal view, monthly budget reports, same person every call. Queensland-based, no call centres.",
  provider: { "@id": SCHEMA_IDS.organization },
  areaServed: { "@type": "State", name: "Queensland" },
  audience: {
    "@type": "Audience",
    audienceType: "NDIS Support Coordinators and Local Area Coordinators",
  },
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "AUD",
    description: "Funded by NDIS at PAPL regulated rate. No cost to participant or coordinator.",
  },
}

const scFaqs = [
  {
    q: "How does a support coordinator refer a participant to Waylight?",
    a: "Use the contact form with role set to 'Support Coordinator' and include the participant's name and NDIS number, or email hello@waylight.com.au directly. Waylight reaches out to the participant, completes the service agreement, registers them on PRODA, and runs the first reconciliation. Onboarding takes two business days.",
  },
  {
    q: "Do support coordinators get visibility into participant budgets at Waylight?",
    a: "Yes. Coordinators get a live portal view of every participant they have referred, including budgets, claims, and statements. Monthly category-level budget reports are sent to coordinators on the first of every month.",
  },
  {
    q: "Is there a lock-in period when switching plan managers?",
    a: "No. There is no lock-in period with NDIS plan managers. A participant can switch from another plan manager to Waylight at any time during their plan, or leave Waylight at any time, with no exit fees.",
  },
  {
    q: "How fast does Waylight process invoices?",
    a: "Most invoices are processed within 1-2 business days of receipt. Payment to the provider via PRODA typically clears the same day as approval.",
  },
] as const

const scFaqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": `${BASE_URL}/for-support-coordinators#faq`,
  mainEntity: scFaqs.map((f) => ({
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
    {
      "@type": "ListItem",
      position: 2,
      name: "For Support Coordinators",
      item: `${BASE_URL}/for-support-coordinators`,
    },
  ],
}

const benefits = [
  {
    icon: Clock,
    title: "Onboarding in 2 business days",
    body: "Service agreements sorted, PRODA registration done, first invoice processed. No delays, no follow-ups from your end.",
  },
  {
    icon: Eye,
    title: "Live coordinator portal view",
    body: "Real-time visibility into every participant you've referred. Budgets, claims, statements. Check in any time, no call required.",
  },
  {
    icon: BarChart3,
    title: "Monthly budget reports",
    body: "Category-level breakdowns sent to you on the first of every month. You plan supports with the actual numbers.",
  },
  {
    icon: UserCheck,
    title: "One person. Every conversation.",
    body: "Same plan manager for every call, every email, every message. No reception desk, no transfers, no explaining the situation from scratch.",
  },
  {
    icon: Phone,
    title: "Direct line as backup",
    body: "When the portal can't answer it, you reach the same plan manager every time. No queue numbers. No hold music.",
  },
  {
    icon: Headphones,
    title: "Same-day invoice processing",
    body: "Invoices land in our inbox, get checked against PAPL, get paid through PRODA. Most clear within 1-2 business days.",
  },
]

const objections = [
  "I just need someone who picks up the phone.",
  "My participant's invoices have been sitting for three weeks.",
  "I have to explain the situation from scratch every time I call.",
  "The portal is broken and nobody answers tickets.",
]

export default function ForSupportCoordinatorsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(scServiceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(scFaqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* ========================================================== */}
      {/* HERO                                                       */}
      {/* ========================================================== */}
      <section className="relative overflow-hidden atmos grain pt-28 md:pt-36 pb-24 md:pb-32">
        <div className="arch hidden md:block" style={{ right: "-160px", top: "60px", width: "520px", height: "260px" }} />
        <div className="arch hidden md:block" style={{ right: "-80px", top: "140px", width: "380px", height: "190px", opacity: 0.55 }} />

        <div className="relative mx-auto max-w-[1240px] px-6 md:px-10">
          <div className="max-w-[60ch]">
            <p className="eyebrow rise d1">For support coordinators</p>
            <h1
              className="text-[2.6rem] sm:text-5xl md:text-[5rem] leading-[0.96] mt-7 rise d2 text-foreground"
              style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 60" }}
            >
              A plan manager your participants can{" "}
              <span
                className="italic text-[color:var(--color-teal-500)]"
                style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 100" }}
              >
                actually reach
              </span>
              .
            </h1>
            <p className="mt-9 text-lg md:text-xl text-[color:var(--color-ink-soft)] leading-[1.7] max-w-[58ch] rise d3">
              Refer to Waylight and your participants get a direct line to their plan manager. You get a live portal view of
              every plan you&apos;ve referred. Same person, every call. No ticket systems, no queue numbers.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-start gap-4 rise d4">
              <Link href="/contact?role=sc" className="btn btn-primary">
                Refer a participant
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/what-we-handle" className="btn btn-ghost">
                What we handle
              </Link>
            </div>
            <p className="hand hand-lg -rotate-2 mt-8 ml-2">you found the good referral</p>
            <p className="dark-reveal hand hand-lg rotate-1 mt-3 ml-2">
              SCs talk. yours will too.
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================== */}
      {/* WHAT YOU GET                                                */}
      {/* ========================================================== */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-[1180px] px-6 md:px-10">
          <div className="max-w-[44ch] mb-16">
            <p className="eyebrow">What you get</p>
            <h2
              className="text-4xl md:text-[3.4rem] leading-[1.05] mt-6 text-foreground"
              style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 60" }}
            >
              Built for the things you{" "}
              <span
                className="italic text-[color:var(--color-teal-500)]"
                style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 100" }}
              >
                actually need
              </span>
              .
            </h2>
            <p className="mt-5 text-lg leading-[1.7] text-[color:var(--color-ink-muted)]">
              Six things SCs ask plan managers for, and rarely get. We treat them as the baseline.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b) => (
              <article key={b.title} className="brand-card group">
                <div className="flex h-12 w-12 rounded-2xl bg-[color:var(--color-teal-500)]/10 text-[color:var(--color-teal-500)] items-center justify-center mb-5 group-hover:bg-[color:var(--color-teal-500)] group-hover:text-[color:var(--color-ivory-50)] transition-colors duration-500">
                  <b.icon className="h-5 w-5" strokeWidth={1.7} />
                </div>
                <h3 className="text-xl text-foreground leading-tight">{b.title}</h3>
                <p className="text-[color:var(--color-ink-muted)] mt-3 leading-relaxed text-[15px]">{b.body}</p>
              </article>
            ))}
          </div>

          <p className="hand rotate-2 mt-10 ml-2">all of this. always.</p>
        </div>
      </section>

      {/* ========================================================== */}
      {/* HOW THE REFERRAL WORKS                                      */}
      {/* ========================================================== */}
      <section className="py-24 md:py-32 section-tint grain relative">
        <div className="relative mx-auto max-w-[1180px] px-6 md:px-10">
          <div className="text-center max-w-[34ch] mx-auto mb-16">
            <p className="eyebrow justify-center" style={{ display: "inline-flex" }}>
              How the referral works
            </p>
            <h2
              className="text-4xl md:text-[3.4rem] leading-[1.05] mt-6 text-foreground"
              style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 60" }}
            >
              Three steps.{" "}
              <span
                className="italic text-[color:var(--color-teal-500)]"
                style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 100" }}
              >
                Two business days.
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6 relative">
            <div
              className="hidden md:block absolute top-12 left-[16%] right-[16%] h-px"
              style={{ background: "repeating-linear-gradient(90deg, rgba(184,146,74,0.5) 0 6px, transparent 6px 14px)" }}
            />
            <Step
              num="i"
              icon={Send}
              title="Send the participant's details"
              body="Use the form, or email us directly. Name, NDIS number, your contact details. Takes 2 minutes."
            />
            <Step
              num="ii"
              icon={ClipboardCheck}
              title="We handle onboarding"
              body="We reach out to the participant, complete the service agreement, register on PRODA, and run the first reconciliation."
            />
            <Step
              num="iii"
              icon={Eye}
              title="You stay in the loop"
              body="Live portal view from day one. Monthly statements. Direct line whenever you need it."
            />
          </div>

          <p className="hand text-center mt-12 -rotate-1">two days. not two weeks.</p>
          <p className="dark-reveal hand hand-lg text-center mt-3 rotate-1">
            referrals on a sunday? answered monday morning.
          </p>
        </div>
      </section>

      {/* ========================================================== */}
      {/* OBJECTIONS / WHAT WE HEAR                                   */}
      {/* ========================================================== */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-[1080px] px-6 md:px-10">
          <div className="text-center max-w-[44ch] mx-auto mb-16">
            <p className="eyebrow justify-center" style={{ display: "inline-flex" }}>
              Sound familiar?
            </p>
            <h2
              className="text-4xl md:text-[3.4rem] leading-[1.05] mt-6 text-foreground"
              style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 60" }}
            >
              The frustrations we{" "}
              <span
                className="italic text-[color:var(--color-teal-500)]"
                style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 100" }}
              >
                hear every week
              </span>
              .
            </h2>
            <p className="mt-5 text-lg leading-[1.7] text-[color:var(--color-ink-muted)]">
              Same complaints, different participants. We built Waylight to fix them.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {objections.map((q) => (
              <article key={q} className="brand-card">
                <MessageSquareQuote className="h-5 w-5 text-[color:var(--color-gold-500)] mb-3" />
                <p
                  className="font-display italic text-xl leading-snug text-foreground"
                  style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 100" }}
                >
                  &ldquo;{q}&rdquo;
                </p>
                <p className="mt-4 text-xs uppercase tracking-[0.18em] text-[color:var(--color-ink-faint)]">
                  what coordinators tell us
                </p>
              </article>
            ))}
          </div>

          <p className="hand text-center mt-10 -rotate-1">we hear you. we pick up.</p>
        </div>
      </section>

      {/* ========================================================== */}
      {/* FAQ                                                         */}
      {/* ========================================================== */}
      <section className="py-20 md:py-28 section-tint grain relative">
        <div className="relative mx-auto max-w-[820px] px-6 md:px-10">
          <div className="text-center mb-12">
            <p className="eyebrow justify-center" style={{ display: "inline-flex" }}>
              For coordinators
            </p>
            <h2
              className="text-3xl md:text-[2.8rem] leading-[1.05] mt-5 text-foreground"
              style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 60" }}
            >
              The questions{" "}
              <span
                className="italic text-[color:var(--color-teal-500)]"
                style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 100" }}
              >
                we hear most
              </span>
              .
            </h2>
          </div>

          <div
            className="bg-white rounded-[24px] border border-black/[0.06] overflow-hidden"
            style={{ boxShadow: "0 1px 0 rgba(31,111,111,0.06), 0 12px 32px -16px rgba(20,60,60,0.18)" }}
          >
            {scFaqs.map((f, i) => (
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
      {/* QUICK FACTS STRIP                                           */}
      {/* ========================================================== */}
      <section className="py-12">
        <div className="mx-auto max-w-[1180px] px-6 md:px-10">
          <div
            className="bg-white rounded-[28px] border border-black/[0.05] grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-black/[0.08] overflow-hidden"
            style={{ boxShadow: "0 1px 0 rgba(31,111,111,0.06), 0 12px 32px -16px rgba(20,60,60,0.18), 0 32px 64px -40px rgba(20,60,60,0.22)" }}
          >
            <FactCell big="2" suffix="days" label="Onboarding turnaround" />
            <FactCell big="monthly" italic label="Budget reports to you" />
            <FactCell big="one" italic label="Plan manager per participant" />
            <FactCell big="0" suffix="lock-in" label="Switch any time, no penalty" />
          </div>
          <p className="hand text-center mt-5 rotate-1">small print? there isn&apos;t any.</p>
        </div>
      </section>

      {/* ========================================================== */}
      {/* FINAL CTA                                                   */}
      {/* ========================================================== */}
      <section className="relative py-28 md:py-36 overflow-hidden mt-12">
        <div className="absolute inset-0 atmos-deep" />
        <div className="absolute inset-0 grain opacity-30" />
        <div
          className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(217,190,130,0.25), transparent 60%)" }}
        />
        <div className="relative mx-auto max-w-[820px] px-6 md:px-10 text-center">
          <h2
            className="text-3xl md:text-[3.6rem] leading-[1.05] text-[color:var(--color-ivory-50)]"
            style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 70" }}
          >
            Refer a participant to{" "}
            <span
              className="italic text-[color:var(--color-gold-300)]"
              style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 100" }}
            >
              Waylight
            </span>
            .
          </h2>
          <p className="mt-7 text-[color:var(--color-ivory-100)]/85 text-lg leading-[1.7] max-w-[55ch] mx-auto">
            We&apos;re starting small on purpose. Every participant gets dedicated, personal plan management from day one.
            Refer now while caseloads are low.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact?role=sc" className="btn btn-light">
              Refer a participant
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/what-we-handle"
              className="btn"
              style={{ background: "transparent", color: "#FBF7EE", border: "1px solid rgba(251,247,238,0.3)" }}
            >
              What we handle
            </Link>
          </div>
          <p className="mt-6 text-xs text-[color:var(--color-ivory-100)]/45 max-w-[50ch] mx-auto">
            NDIS provider registration in progress. Expressions of interest welcome.
          </p>
          <p className="hand hand-lg mt-6 -rotate-2" style={{ color: "rgba(217,190,130,0.75)" }}>
            your participants deserve better.
          </p>
        </div>
      </section>
    </>
  )
}

/* ============================================================ */
/* Local helpers                                                */
/* ============================================================ */

function Step({ num, icon: Icon, title, body }: { num: string; icon: typeof Send; title: string; body: string }) {
  return (
    <div className="text-center relative">
      <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-[color:var(--color-ivory-100)] border border-[color:var(--color-gold-300)]/50 relative">
        <span className="stepnum">{num}</span>
      </div>
      <Icon className="h-5 w-5 text-[color:var(--color-teal-500)] mx-auto mt-5" strokeWidth={1.8} />
      <h3 className="text-2xl mt-3 text-foreground">{title}</h3>
      <p className="text-[color:var(--color-ink-muted)] mt-3 leading-relaxed text-[15px] max-w-[34ch] mx-auto">{body}</p>
    </div>
  )
}

function FactCell({ big, suffix, label, italic }: { big: string; suffix?: string; label: string; italic?: boolean }) {
  return (
    <div className="px-8 py-9 text-center md:text-left">
      <p
        className={`text-5xl text-foreground ${italic ? "italic" : ""}`}
        style={{ fontVariationSettings: italic ? "'opsz' 144, 'SOFT' 100" : "'opsz' 144, 'SOFT' 80" }}
      >
        {big}
        {suffix && <span className="text-2xl text-[color:var(--color-ink-faint)] align-top ml-1">{suffix}</span>}
      </p>
      <p className="text-sm text-[color:var(--color-ink-muted)] mt-2">{label}</p>
    </div>
  )
}
