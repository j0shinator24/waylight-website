import type { Metadata } from "next"
import { Plus, Minus } from "lucide-react"
import { ArticleHero, ArticleBody, ArticleH2, ArticleP, ArticleCTA } from "@/components/article-shell"
import { BASE_URL } from "@/lib/constants"
import { SCHEMA_IDS } from "@/components/seo/json-ld"

const PAGE_URL = `${BASE_URL}/resources/plan-management-vs-self-management`

export const metadata: Metadata = {
  title: { absolute: "Plan Management vs Self-Management vs NDIA | Waylight" },
  description:
    "The three NDIS funding management options compared. Plan-managed, self-managed, NDIA-managed. Honest pros, trade-offs, who each option suits.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Plan Management vs Self-Management vs NDIA | Waylight",
    description:
      "The three NDIS funding management options. Honest pros and trade-offs. Who each suits.",
    url: PAGE_URL,
    type: "article",
    locale: "en_AU",
    publishedTime: "2026-04-29",
    authors: [`${BASE_URL}/about`],
  },
}

const compareFaqs = [
  {
    q: "What is the difference between plan-managed and self-managed NDIS?",
    a: "Plan-managed means a plan manager handles invoice processing, payments, budget tracking, and NDIA claims on your behalf. Self-managed means you do all of those tasks yourself, including paying providers directly and submitting claims to the NDIA for reimbursement. Both options allow you to use registered and unregistered providers.",
  },
  {
    q: "What is NDIA-managed (agency-managed) NDIS funding?",
    a: "NDIA-managed funding, sometimes called agency-managed, means the NDIA pays your providers directly. You can only use NDIS-registered providers under this option. There is no financial admin for you, but you have less flexibility and limited real-time budget visibility compared to plan-managed or self-managed.",
  },
  {
    q: "Can I use a combination of plan-managed and self-managed?",
    a: "Yes. NDIS participants can combine management types within a single plan. For example, you might choose plan-managed for your therapy and support worker budgets but self-managed for a specific category where you want more direct control. Speak to your NDIA planner or Local Area Coordinator about the combination at your planning meeting.",
  },
  {
    q: "Can I change my NDIS management type after my plan starts?",
    a: "Yes. Your management choice is not permanent. You can request a change at your next plan reassessment, or request a plan variation in some circumstances during a current plan. If you start with one option and it does not suit you, you can switch.",
  },
] as const

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  "@id": `${PAGE_URL}#article`,
  headline: "Plan management vs self-management vs NDIA-managed",
  alternativeHeadline: "An honest side-by-side of the three NDIS funding management options",
  description:
    "The three NDIS funding management options compared. NDIA-managed, plan-managed, and self-managed. Honest pros and trade-offs for each, who each option suits, and how to change later.",
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
      name: "NDIS funding management options",
      description:
        "The three administrative options available to NDIS participants for managing their plan funding: NDIA-managed (agency managed), plan-managed, and self-managed. Each has different rules for provider selection, invoice handling, and budget visibility.",
    },
  ],
  audience: {
    "@type": "Audience",
    audienceType: "NDIS participants and their families choosing between funding management options",
  },
  articleSection: "NDIS Plan Management Resources",
}

const compareFaqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": `${PAGE_URL}#faq`,
  mainEntity: compareFaqs.map((f) => ({
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
      name: "Plan management vs self-management",
      item: PAGE_URL,
    },
  ],
}

const options = [
  {
    n: "i",
    title: "NDIA-managed",
    subtitle: "Agency-managed",
    body: "The NDIA manages your funding directly. Your providers submit invoices to the NDIA, and the NDIA pays them.",
    pros: ["No financial admin for you, ever.", "Providers claim directly from the NDIA."],
    cons: ["You can only use registered NDIS providers.", "Less flexibility, less choice.", "Limited real-time budget visibility."],
  },
  {
    n: "ii",
    title: "Plan-managed",
    subtitle: "The middle path",
    body: "You choose a plan manager to handle the financial side. They process invoices, pay providers, track your budget, and lodge claims with the NDIA on your behalf.",
    pros: [
      "Use both registered and unregistered providers.",
      "Someone else handles all the financial admin.",
      "Regular budget reports and spending visibility.",
      "Invoices checked against NDIS Price Arrangements.",
    ],
    cons: ["You rely on your plan manager to process things promptly.", "Quality varies a lot between plan management providers."],
  },
  {
    n: "iii",
    title: "Self-managed",
    subtitle: "Full control",
    body: "You manage everything yourself. You pay your providers directly, keep records of every transaction, and submit claims to the NDIA for reimbursement.",
    pros: [
      "Full control over every payment and decision.",
      "Use both registered and unregistered providers.",
      "No middleperson between you and your providers.",
    ],
    cons: [
      "You handle all invoices, payments, and record-keeping.",
      "You need to understand NDIS pricing and claiming rules.",
      "You must keep records for audit purposes.",
    ],
  },
]

export default function PlanVsSelfPage() {
  return (
    <article>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(compareFaqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <ArticleHero
        title={
          <>
            Plan management vs self-management vs{" "}
            <span
              className="italic text-[color:var(--color-teal-500)]"
              style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 100" }}
            >
              NDIA-managed
            </span>
            .
          </>
        }
        intro="There are three ways to manage your NDIS funding, and there's no single right answer. An honest look at what each option actually means in practice."
        hand="no wrong answer here."
        darkHand="three paths. one destination."
      />

      <ArticleBody>
        <ArticleH2>The three options, side by side</ArticleH2>
        <ArticleP>
          Every NDIS participant manages their funding in one of three ways. You can also use a combination, for example
          plan-managed for some supports and self-managed for others.
        </ArticleP>

        <div className="mt-8 space-y-6 not-prose">
          {options.map((opt) => (
            <article key={opt.title} className="brand-card">
              <div className="flex items-baseline gap-4 mb-4">
                <span
                  className="font-display italic text-3xl text-[color:var(--color-gold-500)] leading-none"
                  style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 100" }}
                >
                  {opt.n}
                </span>
                <div>
                  <h3 className="text-2xl text-foreground leading-tight">{opt.title}</h3>
                  <p className="text-xs uppercase tracking-[0.18em] text-[color:var(--color-ink-faint)] mt-1">{opt.subtitle}</p>
                </div>
              </div>
              <p className="text-[color:var(--color-ink-muted)] leading-relaxed text-[15px]">{opt.body}</p>
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <p className="text-[10px] font-medium text-[color:var(--color-teal-500)] uppercase tracking-[0.18em] mb-3">
                    Advantages
                  </p>
                  <ul className="space-y-2 text-sm text-[color:var(--color-ink-muted)]">
                    {opt.pros.map((p) => (
                      <li key={p} className="flex items-start gap-2">
                        <Plus className="h-3.5 w-3.5 text-[color:var(--color-teal-500)] mt-1 shrink-0" strokeWidth={2.5} />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-[10px] font-medium text-[color:var(--color-gold-600)] uppercase tracking-[0.18em] mb-3">
                    Trade-offs
                  </p>
                  <ul className="space-y-2 text-sm text-[color:var(--color-ink-muted)]">
                    {opt.cons.map((c) => (
                      <li key={c} className="flex items-start gap-2">
                        <Minus className="h-3.5 w-3.5 text-[color:var(--color-gold-600)] mt-1 shrink-0" strokeWidth={2.5} />
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>

        <p className="hand mt-10 -rotate-1">three paths. same destination.</p>

        <ArticleH2>Who self-management suits</ArticleH2>
        <ArticleP>
          Self-management works well for participants (or their nominees and families) who want complete control, are
          comfortable managing invoices and records, have time to learn NDIS pricing rules, and are happy paying providers
          upfront before claiming reimbursement.
        </ArticleP>
        <ArticleP>
          It gives you the most control. It also comes with the most administrative responsibility. A good fit for people who
          are confident with financial paperwork and have the time to stay on top of it.
        </ArticleP>

        <ArticleH2>Who plan management suits</ArticleH2>
        <ArticleP>
          Plan management works well for participants who want flexibility to use both registered and unregistered providers,
          prefer someone else to handle the paperwork, want regular budget updates without doing the math themselves, and want
          an extra set of eyes checking that providers are charging within NDIS guidelines.
        </ArticleP>
        <ArticleP>
          You get provider choice without the admin load. Your plan manager handles the financial side while you focus on the
          supports and the goals.
        </ArticleP>

        <ArticleH2>Can you change your management type later?</ArticleH2>
        <ArticleP>
          Yes. Your choice is not permanent. You can request a change at your next plan reassessment. If you start with one
          option and it doesn&apos;t suit you, you can switch.
        </ArticleP>
        <ArticleP>
          You can also use a combination within a single plan. Some participants choose to plan-manage most of their supports
          but self-manage a specific category where they want more direct control.
        </ArticleP>
        <ArticleP>
          The important thing: there&apos;s no wrong choice. Try an option, see how it works for you, adjust if needed.
        </ArticleP>

        <p className="hand mt-10 rotate-1">try. adjust. repeat.</p>

        <ArticleH2>Frequently asked questions</ArticleH2>
        <div className="mt-7 not-prose bg-white rounded-[24px] border border-black/[0.06] overflow-hidden">
          {compareFaqs.map((f, i) => (
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
      </ArticleBody>

      <ArticleCTA
        title={
          <>
            Still{" "}
            <span
              className="italic text-[color:var(--color-gold-300)]"
              style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 100" }}
            >
              deciding
            </span>
            ?
          </>
        }
        body="If you're not sure which option is right for you, we're happy to talk it through. No pressure, no obligation. Just a straightforward conversation."
      />
    </article>
  )
}
