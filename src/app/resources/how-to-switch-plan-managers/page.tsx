import type { Metadata } from "next"
import { Check } from "lucide-react"
import { ArticleHero, ArticleBody, ArticleH2, ArticleP, ArticleCTA } from "@/components/article-shell"
import { BASE_URL } from "@/lib/constants"
import { SCHEMA_IDS } from "@/components/seo/json-ld"

const PAGE_URL = `${BASE_URL}/resources/how-to-switch-plan-managers`

export const metadata: Metadata = {
  title: { absolute: "How to Switch NDIS Plan Managers | Waylight Guide" },
  description:
    "How to switch NDIS plan managers in four steps. No lock-in, no exit fees, no penalty. Your plan and funding stay the same. What to look for in a new plan manager.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "How to Switch NDIS Plan Managers | Waylight Guide",
    description: "Four steps. No lock-in, no exit fees. Your funding stays the same.",
    url: PAGE_URL,
    type: "article",
    locale: "en_AU",
    publishedTime: "2026-04-29",
    authors: [`${BASE_URL}/about`],
  },
}

const stepCards = [
  {
    n: "i",
    title: "Choose your new plan manager",
    body: "Decide who you want to move to. You don't need a reason. You don't need to justify it to anyone.",
  },
  {
    n: "ii",
    title: "Tell your new plan manager",
    body: "Contact them and let them know you want to switch. They'll sign a new service agreement and handle the transfer paperwork.",
  },
  {
    n: "iii",
    title: "Your new plan manager takes over",
    body: "They register as your active plan manager with the NDIA. Your old plan manager is required to transfer your records, including any outstanding invoices.",
  },
  {
    n: "iv",
    title: "Tell your providers",
    body: "Send your providers a one-line message so they know where to send future invoices. That's it.",
  },
]

const lookFor = [
  {
    title: "Direct contact",
    body: "Can you actually speak to your plan manager, or get routed through a call centre?",
  },
  {
    title: "Invoice turnaround",
    body: "How quickly do they process invoices? Slow payments damage your relationships with providers.",
  },
  {
    title: "Budget visibility",
    body: "Will you get clear, regular statements showing where your funding stands across each category?",
  },
  {
    title: "NDIS registration",
    body: "Plan management requires registration with the NDIS Quality and Safeguards Commission. Confirm they're registered.",
  },
]

const switchFaqs = [
  {
    q: "Is there a lock-in period for NDIS plan managers?",
    a: "No. There is no lock-in period for NDIS plan managers. You can change at any time during your plan period, with no minimum term and no penalty for switching. This right is built into the NDIS principle of choice and control.",
  },
  {
    q: "Are there exit fees when I switch NDIS plan managers?",
    a: "No. NDIS plan managers cannot charge exit fees. Switching is free, and your existing funding and plan dates are unaffected by the change.",
  },
  {
    q: "How long does it take to switch NDIS plan managers?",
    a: "The switching process typically takes 1-2 weeks once you contact your new plan manager. They handle the service agreement, register as your active plan manager with the NDIA, and coordinate the transfer of records from your previous provider so there is no break in service.",
  },
  {
    q: "Will my NDIS funding change if I switch plan managers?",
    a: "No. Your NDIS plan and your funding stay exactly the same. Switching plan managers does not affect your budget, your plan dates, or the supports you have been approved for. The only thing that changes is who processes your invoices and claims.",
  },
  {
    q: "Do I need to tell the NDIA when I switch plan managers?",
    a: "No. Your new plan manager handles the NDIA registration and notification on your behalf. You only need to tell your new plan manager and your providers.",
  },
] as const

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  "@id": `${PAGE_URL}#article`,
  headline: "How to switch NDIS plan managers",
  alternativeHeadline:
    "A step-by-step guide to changing NDIS plan managers, with no lock-in and no exit fees",
  description:
    "How to switch NDIS plan managers in four steps. There is no lock-in, no exit fees, and your funding stays the same. What to look for in a new plan manager and what happens to your supports.",
  url: PAGE_URL,
  datePublished: "2026-04-29",
  dateModified: "2026-04-29",
  inLanguage: "en-AU",
  isPartOf: { "@id": SCHEMA_IDS.resourcesCollection },
  mainEntityOfPage: PAGE_URL,
  author: { "@id": SCHEMA_IDS.joshua },
  publisher: { "@id": SCHEMA_IDS.organization },
  about: [
    { "@id": SCHEMA_IDS.servicePlanManagement },
    {
      "@type": "Thing",
      name: "Switching NDIS plan managers",
      description:
        "The administrative process of changing from one NDIS plan management provider to another. Allowed at any time during a plan period under NDIS choice and control principles.",
    },
  ],
  audience: {
    "@type": "Audience",
    audienceType: "NDIS participants and their families currently using plan management",
  },
  articleSection: "NDIS Plan Management Resources",
}

const howToJsonLd = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "@id": `${PAGE_URL}#howto`,
  name: "How to switch NDIS plan managers",
  description: "Four steps to change your NDIS plan manager, with no lock-in, no exit fees, and no penalty.",
  totalTime: "PT15M",
  estimatedCost: {
    "@type": "MonetaryAmount",
    currency: "AUD",
    value: "0",
  },
  step: stepCards.map((s, i) => ({
    "@type": "HowToStep",
    position: i + 1,
    name: s.title,
    text: s.body,
  })),
}

const switchFaqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": `${PAGE_URL}#faq`,
  mainEntity: switchFaqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
}

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "@id": `${PAGE_URL}#breadcrumb`,
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
    { "@type": "ListItem", position: 2, name: "Resources", item: `${BASE_URL}/resources` },
    {
      "@type": "ListItem",
      position: 3,
      name: "How to switch plan managers",
      item: PAGE_URL,
    },
  ],
}

export default function HowToSwitchPage() {
  return (
    <article>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(switchFaqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <ArticleHero
        title={
          <>
            How to switch{" "}
            <span
              className="italic text-[color:var(--color-teal-500)]"
              style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 100" }}
            >
              NDIS plan managers
            </span>
            .
          </>
        }
        intro="There's no lock-in. No exit fees. No penalties. Switching plan managers is your right as a participant, and the process is simpler than most people expect. Your funding and your plan stay exactly the same."
        hand="you are never locked in."
        darkHand="freedom looks the same in any light."
      />

      <ArticleBody>
        <ArticleH2>Can you actually switch plan managers?</ArticleH2>
        <ArticleP>
          Yes. You can change your plan manager at any time during your plan period. There is no lock-in, no minimum term, and
          no penalty for switching.
        </ArticleP>
        <ArticleP>
          This is your right as an NDIS participant. The NDIS is built on the principle of choice and control, and that includes
          choosing who manages your funding.
        </ArticleP>

        <ArticleH2>The four steps to switch</ArticleH2>
        <ArticleP>Switching is simpler than most people expect. Here&apos;s what happens:</ArticleP>

        <div className="mt-7 space-y-4 not-prose">
          {stepCards.map((s) => (
            <article key={s.n} className="brand-card !p-6">
              <div className="flex items-start gap-5">
                <span
                  className="font-display italic text-3xl text-[color:var(--color-gold-500)] leading-none w-10 shrink-0 pt-1"
                  style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 100" }}
                >
                  {s.n}
                </span>
                <div>
                  <h3 className="text-xl text-foreground leading-tight">{s.title}</h3>
                  <p className="text-[color:var(--color-ink-muted)] mt-2 leading-relaxed text-[15px]">{s.body}</p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <p className="hand mt-8 -rotate-1">less hassle than changing phone plans.</p>

        <ArticleH2>What to look for in a new plan manager</ArticleH2>
        <ArticleP>Not all plan managers are the same. Here&apos;s what worth checking:</ArticleP>
        <ul className="mt-6 space-y-4 not-prose">
          {lookFor.map((item) => (
            <li key={item.title} className="flex items-start gap-3">
              <span className="yes mt-1" style={{ width: 22, height: 22 }}>
                <Check className="h-3 w-3" strokeWidth={3.5} />
              </span>
              <div>
                <strong className="text-foreground">{item.title}.</strong>{" "}
                <span className="text-[color:var(--color-ink-muted)]">{item.body}</span>
              </div>
            </li>
          ))}
        </ul>

        <ArticleH2>Common reasons people switch</ArticleH2>
        <ArticleP>There&apos;s no wrong reason. The most common ones we hear:</ArticleP>
        <ul className="mt-5 space-y-3 text-[1.05rem] leading-[1.75] text-[color:var(--color-ink-soft)]">
          <li>Difficulty getting through. Call centres, long wait times, speaking to a different person every time.</li>
          <li>Invoices taking weeks to process, frustrating providers.</li>
          <li>No clear budget updates, leaving you guessing how funding is tracking.</li>
          <li>Wanting a more personal service where your plan manager knows your situation.</li>
          <li>Moving to a different area and wanting a plan manager who understands local providers.</li>
        </ul>

        <ArticleH2>What happens to your funding when you switch?</ArticleH2>
        <ArticleP>
          Nothing changes. Your NDIS plan and your funding stay exactly the same. Switching plan managers does not affect your
          budget, your plan dates, or the supports you&apos;ve been approved for.
        </ArticleP>
        <ArticleP>
          The only thing that changes is who processes your invoices and claims. Your new plan manager picks up where the old
          one left off, working from the same plan with the same remaining funding.
        </ArticleP>

        <p className="hand mt-10 rotate-1">same plan. same funding. better service.</p>

        <ArticleH2>Frequently asked questions about switching</ArticleH2>
        <div className="mt-7 not-prose bg-white rounded-[24px] border border-black/[0.06] overflow-hidden">
          {switchFaqs.map((f, i) => (
            <details key={f.q} className={`group ${i > 0 ? "border-t border-black/[0.06]" : ""}`}>
              <summary className="flex cursor-pointer items-center justify-between gap-4 px-6 md:px-8 py-5 list-none [&::-webkit-details-marker]:hidden hover:bg-[color:var(--color-ivory-100)]/60 transition-colors">
                <span className="font-display text-[1.1rem] md:text-[1.2rem] text-foreground leading-snug">
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

        <ArticleH2>About Waylight</ArticleH2>
        <ArticleP>
          Waylight is a Queensland-based plan management provider. Our NDIS registration is currently in progress, with an
          expected launch in Q3 2026. We&apos;re accepting expressions of interest from participants, families, and support
          coordinators ahead of registration.
        </ArticleP>
      </ArticleBody>

      <ArticleCTA
        title={
          <>
            Thinking about{" "}
            <span
              className="italic text-[color:var(--color-gold-300)]"
              style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 100" }}
            >
              switching
            </span>
            ?
          </>
        }
        body="If you have questions about how switching works or want to learn more about Waylight, we're happy to chat. No pressure, no obligation."
      />
    </article>
  )
}
