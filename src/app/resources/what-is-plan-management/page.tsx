import type { Metadata } from "next"
import { ArticleHero, ArticleBody, ArticleH2, ArticleP, ArticleCTA } from "@/components/article-shell"
import { BASE_URL } from "@/lib/constants"
import { SCHEMA_IDS } from "@/components/seo/json-ld"

const PAGE_URL = `${BASE_URL}/resources/what-is-plan-management`

export const metadata: Metadata = {
  title: { absolute: "What Does an NDIS Plan Manager Do? | Waylight Guide" },
  description:
    "What NDIS plan management is, what a plan manager handles, the three ways to manage NDIS funding, and how to get plan management added to your plan. No jargon.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "What Does an NDIS Plan Manager Do? | Waylight Guide",
    description:
      "Plan management explained simply. What it is, what they handle, how it is funded.",
    url: PAGE_URL,
    type: "article",
    locale: "en_AU",
    publishedTime: "2026-04-29",
    authors: [`${BASE_URL}/about`],
  },
}

const articleFaqs = [
  {
    q: "Is NDIS plan management free for participants?",
    a: "Yes. Plan management is funded by the NDIS as a separate line item under the Improved Life Choices category. It does not come out of your other support budgets, so choosing plan management does not reduce your therapy, support worker, or capacity-building funding.",
  },
  {
    q: "What is the difference between plan-managed, self-managed, and NDIA-managed?",
    a: "Plan-managed means a plan manager handles your invoices and payments. Self-managed means you do it yourself, including paying providers and claiming reimbursement from the NDIA. NDIA-managed means the NDIA pays providers directly. Plan-managed and self-managed allow both registered and unregistered providers; NDIA-managed allows registered providers only.",
  },
  {
    q: "Can I use unregistered providers if I am plan-managed?",
    a: "Yes. Plan-managed participants can use both NDIS-registered and unregistered providers, the same as self-managed participants. Only NDIA-managed participants are restricted to registered providers.",
  },
  {
    q: "How do I get plan management added to my NDIS plan?",
    a: "If you are getting a new plan, ask your NDIA planner or Local Area Coordinator (LAC) to include plan management at your planning meeting. If you have an existing plan without it, you can request a plan variation through your LAC or directly with the NDIA to add the funding.",
  },
  {
    q: "Can I switch plan managers if I am unhappy with mine?",
    a: "Yes. There is no lock-in period for NDIS plan managers. You can change at any time during your plan period, with no exit fees and no penalty. Your funding and your plan stay the same.",
  },
] as const

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  "@id": `${PAGE_URL}#article`,
  headline: "What does an NDIS plan manager actually do?",
  alternativeHeadline: "A plain-English guide to NDIS plan management for participants and families",
  description:
    "What NDIS plan management is, what your plan manager handles day-to-day, the three NDIS funding management options, who plan management suits, how it is funded by the NDIS, and how to get it added to your plan.",
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
      name: "NDIS Plan Management",
      description:
        "A financial service in the National Disability Insurance Scheme where a plan manager handles invoice processing, provider payments, budget tracking, and PRODA claims for participants.",
    },
  ],
  audience: {
    "@type": "Audience",
    audienceType: "NDIS participants and their families",
  },
  articleSection: "NDIS Plan Management Resources",
}

const articleFaqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": `${PAGE_URL}#faq`,
  mainEntity: articleFaqs.map((f) => ({
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
      name: "What is plan management",
      item: PAGE_URL,
    },
  ],
}

export default function WhatIsPlanManagementPage() {
  return (
    <article>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleFaqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <ArticleHero
        title={
          <>
            What does an NDIS plan manager{" "}
            <span
              className="italic text-[color:var(--color-teal-500)]"
              style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 100" }}
            >
              actually do
            </span>
            ?
          </>
        }
        intro="If you have an NDIS plan, or you're about to get one, you've probably heard the term plan management. Here's what it actually means, in plain English."
        hand="no jargon. promise."
        darkHand="honest stays honest, day or night."
      />

      <ArticleBody>
        <ArticleH2>What plan management actually is</ArticleH2>
        <ArticleP>
          Plan management is a financial service for NDIS participants. A plan manager takes care of the money side of your
          plan so you don&apos;t have to.
        </ArticleP>
        <ArticleP>
          Think of it this way. Your NDIS plan has funding in it for different types of support. When you use those supports,
          someone has to handle the invoices, track the spending, and make sure everything lines up with NDIS rules. That
          someone is your plan manager.
        </ArticleP>
        <ArticleP>
          You still choose your own providers and make your own decisions about what supports you use. Your plan manager
          handles the financial admin in the background.
        </ArticleP>

        <ArticleH2>What your plan manager handles, day to day</ArticleH2>
        <ArticleP>The day-to-day work of a plan manager covers five things:</ArticleP>
        <ul className="mt-5 space-y-4 text-[1.05rem] leading-[1.75] text-[color:var(--color-ink-soft)]">
          <li>
            <strong className="text-foreground">Processing invoices.</strong> Your providers send invoices straight to your
            plan manager. Each invoice gets checked against the NDIS Price Arrangements and Price Limits, then paid.
          </li>
          <li>
            <strong className="text-foreground">Tracking your budget.</strong> Your plan manager keeps a running record of
            what&apos;s been spent in each category and what&apos;s left. You always know where your funding stands.
          </li>
          <li>
            <strong className="text-foreground">Lodging claims with the NDIA.</strong> After paying your providers, your plan
            manager submits payment claims through PRODA to draw down the funding from your plan.
          </li>
          <li>
            <strong className="text-foreground">Paying your providers on time.</strong> Consistent, timely payments. Your
            providers stay happy. You stay popular.
          </li>
          <li>
            <strong className="text-foreground">Sending you statements.</strong> Monthly statements with category-level
            breakdowns. No surprises at plan review.
          </li>
        </ul>

        <p className="hand mt-8 -rotate-1">they handle the paperwork. you live your life.</p>

        <ArticleH2>The three ways to manage your NDIS funding</ArticleH2>
        <ArticleP>Every NDIS participant uses one of three options, or a combination, to manage their funding.</ArticleP>
        <ol className="mt-5 space-y-5 text-[1.05rem] leading-[1.75] text-[color:var(--color-ink-soft)]">
          <li>
            <strong className="text-foreground">NDIA-managed.</strong> The NDIA manages your funding directly. Your providers
            send invoices straight to the NDIA. You can only use registered NDIS providers.
          </li>
          <li>
            <strong className="text-foreground">Plan-managed.</strong> You choose a plan manager to handle the financial side.
            You can use both registered and unregistered providers, which means more choice. Your plan manager processes
            invoices and claims on your behalf.
          </li>
          <li>
            <strong className="text-foreground">Self-managed.</strong> You handle everything yourself. You pay providers, keep
            records, submit claims to the NDIA. Full control. Full responsibility.
          </li>
        </ol>
        <ArticleP>
          Most participants choose plan management because it gives them provider choice without the administrative workload
          of self-management.
        </ArticleP>

        <ArticleH2>Who plan management is for</ArticleH2>
        <ArticleP>Plan management suits a wide range of NDIS participants. You might benefit from it if:</ArticleP>
        <ul className="mt-5 space-y-3 text-[1.05rem] leading-[1.75] text-[color:var(--color-ink-soft)]">
          <li>You want to use unregistered providers without managing the invoices and claims yourself.</li>
          <li>You, a family member, or a nominee find the financial paperwork stressful or time-consuming.</li>
          <li>You want regular, clear updates on how your funding is tracking.</li>
          <li>You want someone checking that invoices are correct and that providers are charging within NDIS guidelines.</li>
        </ul>
        <ArticleP>
          There&apos;s no &ldquo;right&rdquo; type of participant for plan management. It&apos;s simply one option for managing
          your funding, and it&apos;s available to any NDIS participant who has it included in their plan.
        </ArticleP>

        <ArticleH2>How plan management is funded</ArticleH2>
        <ArticleP>
          This is the most common question, and the answer is straightforward. Plan management is funded as a separate line
          item in your NDIS plan. It does not come out of your other support budgets.
        </ArticleP>
        <ArticleP>
          The NDIA adds a specific allocation for &ldquo;Improved Life Choices&rdquo; (the budget category that covers plan
          management fees) on top of your other funded supports. Choosing plan management does not reduce the funding
          available for your therapy, support workers, or any other support category.
        </ArticleP>
        <ArticleP>
          In practical terms: plan management is funded by the NDIS at no cost to your other supports.
        </ArticleP>

        <ArticleH2>How to get plan management added to your plan</ArticleH2>
        <ArticleP>
          If you don&apos;t already have plan management in your plan, you can request it at your next plan reassessment. Tell
          your planner or Local Area Coordinator (LAC) you want your plan to be plan-managed.
        </ArticleP>
        <ArticleP>
          If you currently have an active plan without plan management funding, you can request a plan variation to add it.
          Speak to your LAC or contact the NDIA directly.
        </ArticleP>
        <ArticleP>
          Once plan management is in your plan, you&apos;re free to choose any registered plan management provider. There&apos;s
          no lock-in period, and you can switch plan managers at any time.
        </ArticleP>

        <p className="hand mt-10 -rotate-1">your plan. your choice.</p>

        <ArticleH2>Frequently asked questions</ArticleH2>
        <div className="mt-7 not-prose bg-white rounded-[24px] border border-black/[0.06] overflow-hidden">
          {articleFaqs.map((f, i) => (
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
            Got a question we{" "}
            <span
              className="italic text-[color:var(--color-gold-300)]"
              style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 100" }}
            >
              didn&apos;t cover
            </span>
            ?
          </>
        }
        body="Send it through and we'll answer it personally. Whether you're a participant, family member, or support coordinator. No pressure, no obligation."
      />
    </article>
  )
}
