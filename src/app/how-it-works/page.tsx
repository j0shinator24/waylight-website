import type { Metadata } from "next"
import Link from "next/link"
import {
  ArrowRight,
  CircleDollarSign,
  PiggyBank,
  ShieldCheck,
} from "lucide-react"
import { BASE_URL, BUSINESS } from "@/lib/constants"
import { SCHEMA_IDS } from "@/components/seo/json-ld"

export const metadata: Metadata = {
  title: { absolute: "How NDIS Plan Management Works | Waylight" },
  description:
    "Plan management explained in plain English. How invoices flow, how providers get paid, what it costs (nothing), and answers to every question.",
  alternates: { canonical: `${BASE_URL}/how-it-works` },
  openGraph: {
    title: "How NDIS Plan Management Works | Waylight",
    description:
      "Plan management explained simply. Three steps, the long version, what it costs, and FAQs.",
    url: `${BASE_URL}/how-it-works`,
    type: "article",
    locale: "en_AU",
    images: [
      {
        url: "/og/how-it-works",
        width: 1200,
        height: 630,
        alt: "How Waylight plan management works in three steps.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/og/how-it-works"],
  },
}

const faqs = [
  {
    q: "What is plan management?",
    a: "A plan manager handles the financial side of your NDIS plan. We process invoices, pay your providers on time, track your budget against your plan timeline, and manage claims through the NDIS portal. Think of it as having a dedicated person look after the money side of your funding. Fully covered by the NDIS.",
  },
  {
    q: "Does plan management cost me anything out of pocket?",
    a: "No. Plan management is funded under its own NDIS budget category called CB Choice and Control. It does not reduce your core, capital, or capacity-building funding. Your supports and your therapies are not affected at all. The cost is funded directly from the NDIS at the regulated rate, every month, automatically.",
  },
  {
    q: "Can I use unregistered providers with plan management?",
    a: "Yes. That's one of the biggest benefits. Plan-managed participants can use both NDIS-registered and unregistered providers. This gives you more choice over who delivers your supports. Self-managed plans can do this too, but with plan management you don't have to handle the paperwork yourself.",
  },
  {
    q: "How do I get plan management added to my plan?",
    a: "Ask your Local Area Coordinator (LAC), support coordinator, or NDIA planner to include plan management at your next planning meeting. It's a separate budget item, so they just need to add it. If you already have plan management with another provider, you can switch to Waylight at any time once our registration is confirmed.",
  },
  {
    q: "How do I switch to Waylight from another plan manager?",
    a: "Once our registration is confirmed, contact us and we'll handle the transfer end-to-end. There is no lock-in period with plan managers, so you can switch at any point during your plan. We coordinate directly with your previous provider and the NDIA so there's no break in service for you or your providers.",
  },
  {
    q: "What happens if I overspend or underspend my plan?",
    a: "We track your spending trajectory against your plan timeline and send you budget alerts if your funding is running ahead or behind schedule. This gives you time to actually adjust before it affects your plan review. Most participants don't realise they've underspent until it's too late. The alerts fix that.",
  },
  {
    q: "How quickly do invoices get paid?",
    a: "Invoices are processed within 1-2 business days of receipt. Once approved, payment to the provider happens through PRODA, typically same day. Your providers see consistent, on-time payments. That's one of the strongest signals you can give a provider that you're an easy participant to work with.",
  },
  {
    q: "Will I still see what's being paid?",
    a: "Yes. You choose how involved you want to be. Some participants want to review every invoice before it's paid; others prefer we just handle it and send a monthly summary. Either way, you get a clear monthly statement showing every transaction broken down by category.",
  },
  {
    q: "Is Waylight a registered NDIS provider?",
    a: `Not yet. Our registration application with the NDIS Quality and Safeguards Commission is currently being processed. We are accepting expressions of interest now and will contact you the moment our registration is confirmed. Expected ${BUSINESS.launchTarget}.`,
  },
]

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": `${BASE_URL}/how-it-works#faq`,
  inLanguage: "en-AU",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
}

const howToJsonLd = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "@id": `${BASE_URL}/how-it-works#howto`,
  name: "How to set up NDIS plan management with Waylight",
  description: "Five phases from sign-up to plan review, in plain English.",
  totalTime: "PT20M",
  estimatedCost: {
    "@type": "MonetaryAmount",
    currency: "AUD",
    value: "0",
  },
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Sign up",
      text: "Sign a service agreement and Waylight registers you on PRODA as a plan-managed participant. Takes about 20 minutes of your time.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Tell your providers to invoice us",
      text: "Send your providers a one-line message redirecting invoices to hello@waylight.com.au.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Invoices process within 1-2 business days",
      text: "Each invoice is checked against the NDIS Price Arrangements and Price Limits, validated against your remaining budget, then paid through PRODA.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Receive monthly statements",
      text: "A monthly PDF statement broken down by category is sent to you and anyone helping you manage your plan.",
    },
    {
      "@type": "HowToStep",
      position: 5,
      name: "Plan review preparation",
      text: "Two weeks before your plan review, Waylight sends a summary of how every category was used over the year.",
    },
  ],
}

const webPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${BASE_URL}/how-it-works#webpage`,
  url: `${BASE_URL}/how-it-works`,
  name: "How NDIS Plan Management Works | Waylight",
  isPartOf: { "@id": SCHEMA_IDS.website },
  about: { "@id": SCHEMA_IDS.servicePlanManagement },
}

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
    { "@type": "ListItem", position: 2, name: "How It Works", item: `${BASE_URL}/how-it-works` },
  ],
}

export default function HowItWorksPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      {/* ========================================================== */}
      {/* HERO                                                        */}
      {/* ========================================================== */}
      <section className="relative overflow-hidden atmos grain pt-24 md:pt-32 pb-20 md:pb-28">
        <div className="arch hidden md:block" style={{ right: "-160px", top: "60px", width: "520px", height: "260px" }} />
        <div className="arch hidden md:block" style={{ right: "-80px", top: "140px", width: "380px", height: "190px", opacity: 0.55 }} />

        <div className="relative mx-auto max-w-[1240px] px-6 md:px-10">
          <div className="max-w-[60ch]">
            <p className="eyebrow rise d1">How it works</p>
            <h1
              className="font-display text-[2.8rem] sm:text-5xl md:text-[4.8rem] leading-[0.96] mt-7 rise d2 text-foreground"
              style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 60" }}
            >
              Three steps.{" "}
              <span
                className="italic text-[color:var(--color-teal-500)]"
                style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 100" }}
              >
                That&apos;s the whole thing.
              </span>
            </h1>
            <p className="mt-8 text-lg md:text-xl text-[color:var(--color-ink-soft)] leading-[1.7] max-w-[58ch] rise d3">
              Plain English, end to end. Self-serve in your portal when you want it. A real person when you need one.
              No call centres, no ticket numbers, no chasing.
            </p>
            <p className="hand hand-lg -rotate-2 mt-8 ml-2">simple, by design</p>
            <p className="dark-reveal hand hand-lg rotate-1 mt-3 ml-2 text-[color:var(--color-teal-glow)]">
              simple by candlelight too
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================== */}
      {/* THE THREE STEPS                                             */}
      {/* ========================================================== */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-[1180px] px-6 md:px-10">
          <div className="grid md:grid-cols-3 gap-10 md:gap-6 relative">
            <div
              className="hidden md:block absolute top-12 left-[16%] right-[16%] h-px"
              style={{ background: "repeating-linear-gradient(90deg, rgba(184,146,74,0.5) 0 6px, transparent 6px 14px)" }}
            />
            <Step
              num="i"
              title="You choose your providers"
              body="Pick the support workers, therapists, and services that work for you. Registered or unregistered. We don't restrict your choice in any way."
            />
            <Step
              num="ii"
              title="Providers invoice us"
              body="Your providers send their invoices straight to Waylight instead of to you. We check each one against current NDIS rates, then process payment through PRODA."
            />
            <Step
              num="iii"
              title="You stay informed"
              body="Monthly statements with full category breakdowns. Budget alerts if anything looks off. Direct line to your plan manager whenever you need it."
            />
          </div>
          <p className="hand text-center mt-12 rotate-1">three steps. that&apos;s it.</p>
        </div>
      </section>

      {/* ========================================================== */}
      {/* THE LONG VERSION                                            */}
      {/* ========================================================== */}
      <section className="py-20 md:py-28 section-tint grain relative">
        <div className="relative mx-auto max-w-[860px] px-6 md:px-10">
          <p className="eyebrow">The long version</p>
          <h2
            className="font-display text-3xl md:text-[3rem] leading-[1.05] mt-5 text-foreground"
            style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 60" }}
          >
            What actually happens,{" "}
            <span
              className="italic text-[color:var(--color-teal-500)]"
              style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 100" }}
            >
              from day one
            </span>
            .
          </h2>

          <div className="mt-12 stack stack-lg">
            <Phase
              num="01"
              title="Sign up. About 20 minutes of your time."
              body="We send you a simple service agreement. Sign it, send it back, and we register you on PRODA as a plan-managed participant. You don't need to do anything else. We handle the rest of the paperwork end."
            />
            <Phase
              num="02"
              title="Tell your providers to invoice us instead"
              body="Send your providers a one-line message: 'My new plan manager is Waylight. Please email invoices to hello@waylight.com.au.' That's it. We take it from there. Existing invoices in the queue, new providers, anything ad-hoc. All redirected."
            />
            <Phase
              num="03"
              title="Invoices arrive and we process them within 1-2 business days"
              body="Each invoice gets checked against the current NDIS Price Arrangements and Price Limits, validated against your remaining budget, then paid through PRODA. Your provider sees the payment, you see it on your monthly statement, everyone is happy."
            />
            <Phase
              num="04"
              title="You get a monthly statement and direct access whenever you need it"
              body="Once a month: a clean PDF statement broken down by category, sent to you and to anyone helping you manage your plan. Whenever something comes up: text, call, or email your plan manager directly. Same person, every time."
            />
            <Phase
              num="05"
              title="At plan review, you walk in prepared"
              body="Two weeks before your plan review, we send you a summary of how every category was used over the year. What was spent, what wasn't, where the gaps are. You walk into your meeting with the receipts. Most participants tell us this is the first time they've felt prepared at a review."
            />
          </div>
        </div>
      </section>

      {/* ========================================================== */}
      {/* WHAT IT COSTS (objection killer)                            */}
      {/* ========================================================== */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-[1080px] px-6 md:px-10">
          <div className="text-center max-w-[44ch] mx-auto mb-14">
            <p className="eyebrow justify-center" style={{ display: "inline-flex" }}>
              The money question
            </p>
            <h2
              className="font-display text-3xl md:text-[3.2rem] leading-[1.05] mt-5 text-foreground"
              style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 60" }}
            >
              What does it{" "}
              <span
                className="italic text-[color:var(--color-teal-500)]"
                style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 100" }}
              >
                cost you
              </span>
              ?
            </h2>
            <p className="mt-5 text-2xl font-display text-foreground">
              Nothing.{" "}
              <span className="text-[color:var(--color-ink-muted)]">Not a dollar from your other supports.</span>
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <FundingCard
              icon={<CircleDollarSign className="h-6 w-6" strokeWidth={1.7} />}
              title="Funded by the NDIS"
              body={`Plan management is funded at the regulated NDIS rate of ${BUSINESS.paplMonthly} per participant per month. The NDIA pays us directly. You never see an invoice from us.`}
            />
            <FundingCard
              icon={<PiggyBank className="h-6 w-6" strokeWidth={1.7} />}
              title="Doesn't touch your other budgets"
              body="It sits in its own budget line called CB Choice and Control. Your core, capital, and capacity-building funding are completely untouched."
            />
            <FundingCard
              icon={<ShieldCheck className="h-6 w-6" strokeWidth={1.7} />}
              title="No lock-in. No surprises."
              body="No contracts, no exit fees, no hidden charges. If we're not the right fit, you can switch to another plan manager any time during your plan."
            />
          </div>

          <div className="mt-10 max-w-[60ch] mx-auto">
            <p className="text-sm text-[color:var(--color-ink-muted)] leading-relaxed text-center">
              Plan management is a separate item under the NDIS Pricing Arrangements and Price Limits (PAPL). It is
              added to your plan at planning meetings. Ask your LAC, support coordinator, or NDIA planner to include
              it. If you already have plan management, you can switch providers at any time.
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================== */}
      {/* FAQ                                                         */}
      {/* ========================================================== */}
      <section className="py-20 md:py-28 section-tint grain relative">
        <div className="relative mx-auto max-w-[820px] px-6 md:px-10">
          <div className="text-center mb-14">
            <p className="eyebrow justify-center" style={{ display: "inline-flex" }}>
              Frequently asked
            </p>
            <h2
              className="font-display text-3xl md:text-[3rem] leading-[1.05] mt-5 text-foreground"
              style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 60" }}
            >
              Everyone asks{" "}
              <span
                className="italic text-[color:var(--color-teal-500)]"
                style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 100" }}
              >
                these
              </span>
              .
            </h2>
          </div>

          <div className="bg-white rounded-[24px] border border-black/[0.06] overflow-hidden"
               style={{ boxShadow: "0 1px 0 rgba(31,111,111,0.06), 0 12px 32px -16px rgba(20,60,60,0.18)" }}>
            {faqs.map((f, i) => (
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

          <p className="hand text-center mt-8 -rotate-1">still have questions? just ask.</p>
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
            Ready to{" "}
            <span
              className="italic text-[color:var(--color-gold-300)]"
              style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 100" }}
            >
              actually try this
            </span>
            ?
          </h2>
          <p className="mt-7 text-[color:var(--color-ivory-100)]/85 text-lg leading-[1.7] max-w-[52ch] mx-auto">
            Tell us about your plan and we&apos;ll walk you through what plan management would look like for your
            specific situation. No commitment, no pitch deck, no obligation.
          </p>
          <div className="mt-10">
            <Link href="/contact" className="btn btn-light">
              Talk to a real person
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <p className="hand hand-lg mt-7 -rotate-2" style={{ color: "rgba(217,190,130,0.75)" }}>
            (yes, even at 2am)
          </p>
        </div>
      </section>
    </>
  )
}

/* ============================================================ */
/* Local helper components                                      */
/* ============================================================ */

function Step({ num, title, body }: { num: string; title: string; body: string }) {
  return (
    <div className="text-center relative">
      <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-[color:var(--color-ivory-100)] border border-[color:var(--color-gold-300)]/50 relative">
        <span className="stepnum">{num}</span>
      </div>
      <h3 className="font-display text-2xl mt-7 text-foreground">{title}</h3>
      <p className="text-[color:var(--color-ink-muted)] mt-3 leading-relaxed text-[15px] max-w-[34ch] mx-auto">{body}</p>
    </div>
  )
}

function Phase({ num, title, body }: { num: string; title: string; body: string }) {
  return (
    <div className="flex items-start gap-6 group">
      <div
        className="font-display text-4xl italic text-[color:var(--color-gold-500)] leading-none w-14 shrink-0"
        style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 100" }}
      >
        {num}
      </div>
      <div className="flex-1 pt-1">
        <h3 className="font-display text-xl md:text-[1.5rem] text-foreground leading-tight">{title}</h3>
        <p className="text-[color:var(--color-ink-muted)] mt-2 leading-relaxed">{body}</p>
      </div>
    </div>
  )
}

function FundingCard({ icon, title, body }: { icon: React.ReactNode; title: string; body: string }) {
  return (
    <article className="brand-card group">
      <div className="flex h-12 w-12 rounded-2xl bg-[color:var(--color-gold-500)]/10 text-[color:var(--color-gold-600)] items-center justify-center mb-5 group-hover:bg-[color:var(--color-gold-500)] group-hover:text-[color:var(--color-ivory-50)] transition-colors duration-500">
        {icon}
      </div>
      <h3 className="font-display text-xl text-foreground leading-tight">{title}</h3>
      <p className="text-[color:var(--color-ink-muted)] mt-3 leading-relaxed text-[15px]">{body}</p>
    </article>
  )
}
