import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import {
  ArrowRight,
  Check,
  X,
  FileText,
  BarChart3,
  Bell,
  Users,
} from "lucide-react"
import { BASE_URL, BUSINESS } from "@/lib/constants"
import { SCHEMA_IDS } from "@/components/seo/json-ld"

export const metadata: Metadata = {
  title: { absolute: "NDIS Plan Manager Queensland | Waylight Plan Management" },
  description:
    "Personal NDIS plan management for Queensland participants. One dedicated plan manager who answers. Invoice processing, budget tracking, monthly statements.",
  alternates: { canonical: BASE_URL },
  openGraph: {
    title: "NDIS Plan Manager Queensland | Waylight Plan Management",
    description:
      "Personal NDIS plan management for Queensland participants. One dedicated plan manager who answers. No call centres.",
    url: BASE_URL,
    siteName: "Waylight Plan Management",
    type: "website",
    locale: "en_AU",
    images: [
      {
        url: "/og/home",
        width: 1200,
        height: 630,
        alt: "Waylight - your NDIS plan, managed by a real person.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NDIS Plan Manager Queensland | Waylight Plan Management",
    description:
      "Personal NDIS plan management for Queensland participants. One dedicated plan manager who answers.",
    images: ["/og/home"],
  },
}

const homeFaqs = [
  {
    q: "What is NDIS plan management?",
    a: "NDIS plan management is a service that handles the financial side of your NDIS plan. A plan manager processes invoices from your support providers, pays them on your behalf, tracks your budget, and provides monthly statements. It is funded by the NDIS under its own budget category and does not reduce your other supports.",
  },
  {
    q: "Does plan management cost participants anything?",
    a: "No. Plan management is funded by the NDIS under the CB Choice and Control budget category at a regulated monthly rate. It does not reduce your core, capital, or capacity-building funding. Participants pay nothing out of pocket.",
  },
  {
    q: "Can plan-managed participants use unregistered providers?",
    a: "Yes. Plan-managed participants can use both NDIS-registered and unregistered providers. This is one of the main reasons participants choose plan management over NDIA-managed funding.",
  },
  {
    q: "Where is Waylight based?",
    a: "Waylight is based in Queensland, Australia, and serves NDIS participants across the state. We operate as a small, dedicated plan management service led by a practising NDIS support worker.",
  },
] as const

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": SCHEMA_IDS.servicePlanManagement,
  name: "NDIS Plan Management",
  serviceType: "NDIS Plan Management",
  description:
    "Personal NDIS plan management for Queensland participants. We process invoices, track your budget, manage claims through PRODA, and provide monthly statements. Funded by your NDIS plan at the regulated rate.",
  provider: { "@id": SCHEMA_IDS.organization },
  areaServed: { "@type": "State", name: "Queensland" },
  audience: {
    "@type": "Audience",
    audienceType: "NDIS participants and their support coordinators",
  },
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "AUD",
    description: "Funded by NDIS at PAPL regulated rate. No out-of-pocket cost to participant.",
  },
}

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": `${BASE_URL}/#faq`,
  mainEntity: homeFaqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
}

export default function HomePage() {
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

      {/* ========================================================== */}
      {/* HERO                                                       */}
      {/* ========================================================== */}
      <section className="relative overflow-hidden atmos grain pt-28 md:pt-36 pb-24 md:pb-32">
        {/* Decorative arches echoing the logo */}
        <div className="arch hidden md:block" style={{ right: "-160px", top: "60px", width: "520px", height: "260px" }} />
        <div className="arch hidden md:block" style={{ right: "-80px", top: "140px", width: "380px", height: "190px", opacity: 0.55 }} />

        <div className="relative mx-auto max-w-[1240px] px-6 md:px-10 grid md:grid-cols-12 gap-10 items-end">
          <div className="md:col-span-8 relative z-10">
            <p className="eyebrow rise d1">NDIS Plan Management &middot; Queensland</p>

            <h1
              className="font-display text-[2.8rem] sm:text-6xl md:text-[5.2rem] leading-[0.96] mt-7 rise d2 text-foreground"
              style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 60" }}
            >
              Your plan,
              <br />
              <span
                className="italic font-light text-[color:var(--color-teal-500)]"
                style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 100" }}
              >
                managed
              </span>{" "}
              by <span className="ink-mark">a real person</span>.
            </h1>

            <p className="mt-9 text-lg md:text-xl text-[color:var(--color-ink-soft)] max-w-[58ch] leading-[1.7] rise d3">
              One person handles your invoices. The same person answers your calls. The same person knows where your funding
              stands at 11am on a Tuesday. No call centres. No ticket systems. The way it ought to be.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-start gap-4 rise d4">
              <Link href="/contact" className="btn btn-primary">
                Talk to a real person
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="#how" className="btn btn-ghost">
                See how it works
              </Link>
            </div>

            <ul className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-sm text-[color:var(--color-ink-muted)] rise d5">
              <li className="flex items-center gap-2">
                <span className="yes" style={{ width: 20, height: 20 }}>
                  <Check className="h-3 w-3" strokeWidth={3.5} />
                </span>
                Funded by your NDIS plan
              </li>
              <li className="flex items-center gap-2">
                <span className="yes" style={{ width: 20, height: 20 }}>
                  <Check className="h-3 w-3" strokeWidth={3.5} />
                </span>
                No cost to your other supports
              </li>
              <li className="flex items-center gap-2">
                <span className="yes" style={{ width: 20, height: 20 }}>
                  <Check className="h-3 w-3" strokeWidth={3.5} />
                </span>
                Queensland based
              </li>
            </ul>
          </div>

          {/* Promise card */}
          <aside className="md:col-span-4 relative z-10 rise d6">
            <div className="brand-card !p-0 overflow-hidden">
              <div className="px-7 pt-7 pb-5 border-b border-black/[0.05]">
                <p className="eyebrow eyebrow-gold">Small on purpose</p>
                <p className="font-display text-[1.45rem] leading-snug mt-3 text-foreground">
                  We stay <em className="italic text-[color:var(--color-teal-500)]">deliberately small</em>. So every
                  participant gets a person who actually knows their plan.
                </p>
              </div>
              <div className="px-7 py-5 flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-[color:var(--color-teal-500)]/10 flex items-center justify-center text-[color:var(--color-teal-500)] font-display text-lg italic">
                  w
                </div>
                <div className="text-sm">
                  <p className="font-medium text-foreground">Waylight</p>
                  <p className="text-[color:var(--color-ink-faint)]">Plan management, Brisbane QLD</p>
                </div>
              </div>
            </div>
            <p className="hand hand-lg -rotate-2 mt-6 ml-3">scroll down. it gets better.</p>
            <p className="dark-reveal hand hand-lg rotate-1 mt-3 ml-2 text-[color:var(--color-teal-glow)]">
              the candle is lit. you found us.
            </p>
          </aside>
        </div>
      </section>

      {/* ========================================================== */}
      {/* PROMISE BAR (stats)                                        */}
      {/* ========================================================== */}
      <section className="relative -mt-14 z-20">
        <div className="mx-auto max-w-[1180px] px-6 md:px-10">
          <div className="bg-white rounded-[28px] border border-black/[0.05] grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-black/[0.08] overflow-hidden"
               style={{ boxShadow: "0 1px 0 rgba(31,111,111,0.06), 0 12px 32px -16px rgba(20,60,60,0.18), 0 32px 64px -40px rgba(20,60,60,0.22)" }}>
            <Stat number="2" suffix="days" label="Onboarding turnaround" />
            <Stat number="one" italic label="Dedicated plan manager" />
            <Stat number="0" suffix="queues" label="No call centres, ever" />
            <Stat number="frontline" italic label="Built by a support worker" />
          </div>
          <p className="hand text-center mt-5 rotate-1">not numbers. promises.</p>
          <p className="dark-reveal hand hand-lg text-center mt-2 -rotate-1 text-[color:var(--color-teal-glow)]">
            kept in the dark? never. that&apos;s the point.
          </p>
        </div>
      </section>

      {/* ========================================================== */}
      {/* FOR SUPPORT COORDINATORS                                   */}
      {/* ========================================================== */}
      <section id="who" className="py-28 md:py-36">
        <div className="mx-auto max-w-[1180px] px-6 md:px-10">
          <div className="grid md:grid-cols-12 gap-12 md:gap-16 items-start">
            <div className="md:col-span-5">
              <p className="eyebrow">For support coordinators</p>
              <h2
                className="font-display text-4xl md:text-[3.4rem] leading-[1.02] mt-6 text-foreground"
                style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 60" }}
              >
                A plan manager you can{" "}
                <span
                  className="italic text-[color:var(--color-teal-500)]"
                  style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 100" }}
                >
                  actually reach
                </span>
                .
              </h2>
              <p className="mt-7 text-lg leading-[1.75] text-[color:var(--color-ink-muted)] max-w-[44ch]">
                When you refer a participant to Waylight, you get a direct line to their plan manager. No call centre queues, no
                ticket numbers, no chasing emails that go unanswered.
              </p>
              <Link href="/for-support-coordinators" className="mt-9 btn btn-primary">
                Refer a participant
                <ArrowRight className="h-4 w-4" />
              </Link>
              <p className="hand -rotate-1 mt-7">support coordinators love this part</p>
              <p className="dark-reveal hand hand-lg rotate-1 mt-3 text-[color:var(--color-teal-glow)]">
                one number. one name. one person.
              </p>
            </div>

            <ol className="md:col-span-7 space-y-2">
              {[
                { num: "i", title: "Fast onboarding", body: "Participants set up within 2 business days of referral. No paperwork purgatory." },
                { num: "ii", title: "Your own coordinator view", body: "Live access to every participant you've referred. Budgets, claims, statements. Check in any time, no call required." },
                { num: "iii", title: "Direct line as backup", body: "When the portal can't answer it, you reach the same plan manager every time. No call queue, no ticket numbers." },
              ].map((item) => (
                <li
                  key={item.num}
                  className="group flex items-start gap-6 p-7 rounded-2xl border border-black/[0.08] hover:border-[color:var(--color-teal-500)]/30 hover:bg-white transition-all duration-500"
                >
                  <div
                    className="font-display text-3xl italic text-[color:var(--color-gold-500)] leading-none w-10"
                    style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 100" }}
                  >
                    {item.num}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display text-2xl text-foreground leading-tight">{item.title}</h3>
                    <p className="text-[color:var(--color-ink-muted)] mt-2 leading-relaxed">{item.body}</p>
                  </div>
                  <ArrowRight className="ml-auto opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-500 text-[color:var(--color-teal-500)] h-5 w-5 mt-2" />
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* ========================================================== */}
      {/* WHAT WE HANDLE                                             */}
      {/* ========================================================== */}
      <section id="what" className="relative py-28 md:py-36 overflow-hidden">
        <div className="absolute inset-0 section-tint" />
        <div className="absolute inset-0 grain" />
        <div className="relative mx-auto max-w-[1180px] px-6 md:px-10">
          <div className="max-w-[34ch] mb-16">
            <p className="eyebrow">What we handle</p>
            <h2
              className="font-display text-4xl md:text-[3.6rem] leading-[1.02] mt-6 text-foreground"
              style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 60" }}
            >
              The boring bits,{" "}
              <span
                className="italic text-[color:var(--color-teal-500)]"
                style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 100" }}
              >
                handled
              </span>
              .
            </h2>
            <p className="mt-6 text-lg leading-[1.7] text-[color:var(--color-ink-muted)]">
              Invoices, budgets, claims, provider payments. The financial admin that should take minutes and somehow eats your week.
              We do it. You go back to your actual life.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <HandledCard
              icon={<FileText className="h-5 w-5" strokeWidth={1.7} />}
              title="Invoice processing"
              body="We receive provider invoices, verify them against current NDIS rates, and process payment. Reimbursements handled the same way."
            />
            <HandledCard
              icon={<BarChart3 className="h-5 w-5" strokeWidth={1.7} />}
              title="Budget tracking"
              body="Monthly statements with spending breakdowns by category. You always know exactly where your plan balance stands."
            />
            <HandledCard
              icon={<Bell className="h-5 w-5" strokeWidth={1.7} />}
              title="Budget alerts"
              body="We track your spending against your plan timeline and flag when funding is running ahead or behind schedule."
            />
            <HandledCard
              icon={<Users className="h-5 w-5" strokeWidth={1.7} />}
              title="Provider choice"
              body="Plan-managed participants can use both registered and unregistered providers. More choice. More flexibility."
            />
          </div>

          <p className="hand rotate-2 mt-10 ml-2">the boring stuff? handled.</p>
          <p className="dark-reveal hand hand-lg -rotate-1 mt-3 ml-2 text-[color:var(--color-teal-glow)]">
            the late-night invoices? still handled.
          </p>
        </div>
      </section>

      {/* ========================================================== */}
      {/* THE PORTAL                                                  */}
      {/* ========================================================== */}
      <section className="py-28 md:py-36 relative overflow-hidden">
        <div className="mx-auto max-w-[1180px] px-6 md:px-10">
          <div className="grid md:grid-cols-12 gap-12 md:gap-16 items-center">
            {/* Copy */}
            <div className="md:col-span-6">
              <p className="eyebrow">Your participant portal</p>
              <h2
                className="font-display text-4xl md:text-[3.4rem] leading-[1.02] mt-6 text-foreground"
                style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 60" }}
              >
                Most things, you can{" "}
                <span
                  className="italic text-[color:var(--color-teal-500)]"
                  style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 100" }}
                >
                  do yourself
                </span>
                .
              </h2>
              <p className="mt-7 text-lg leading-[1.75] text-[color:var(--color-ink-muted)] max-w-[52ch]">
                Coordinators, participants, families. Everyone gets a private view of the plan they care about. Real-time
                budgets, monthly statements, message thread, invoice uploads. The phone is for when you actually want to hear
                a voice.
              </p>
              <p className="mt-4 text-sm text-[color:var(--color-ink-muted)] max-w-[52ch]">
                <span className="font-medium text-foreground">Calling and emailing are the slow option.</span> The portal is the
                fast one. Most people prefer it once they&apos;ve tried it.
              </p>
              <Link href="/portal" className="mt-9 btn btn-primary">
                Preview the portal
                <ArrowRight className="h-4 w-4" />
              </Link>
              <p className="hand -rotate-1 mt-7">self-serve everything</p>
              <p className="dark-reveal hand hand-lg rotate-1 mt-3 text-[color:var(--color-teal-glow)]">
                lit, even when you&apos;re not awake to ask
              </p>
            </div>

            {/* Portal mockup card */}
            <div className="md:col-span-6 relative">
              <div className="brand-card overflow-hidden">
                {/* Mock window chrome */}
                <div className="flex items-center gap-1.5 -mx-2 -mt-2 mb-5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[color:var(--color-ink)]/15" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[color:var(--color-ink)]/15" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[color:var(--color-ink)]/15" />
                  <span className="ml-3 text-[10px] tracking-[0.18em] uppercase text-[color:var(--color-ink-faint)]">
                    portal.waylight.com.au
                  </span>
                </div>
                {/* Mock greeting */}
                <p className="text-[11px] uppercase tracking-[0.18em] text-[color:var(--color-ink-faint)]">Welcome back</p>
                <p
                  className="font-display text-3xl text-foreground leading-tight mt-1"
                  style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 70" }}
                >
                  Hi, Sarah.
                </p>
                {/* Mock budget bar */}
                <div className="mt-6 p-4 rounded-2xl bg-[color:var(--color-ivory-100)] border border-black/[0.06]">
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-xs font-medium text-[color:var(--color-ink-muted)] uppercase tracking-wider">
                      Core supports
                    </p>
                    <p className="text-xs text-[color:var(--color-ink-faint)]">on track</p>
                  </div>
                  <div className="flex items-end justify-between gap-3">
                    <p className="font-display text-3xl text-foreground" style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 80" }}>
                      $24,580
                    </p>
                    <p className="text-xs text-[color:var(--color-ink-faint)] pb-1">of $42,000 remaining</p>
                  </div>
                  <div className="mt-3 h-2 rounded-full bg-[color:var(--color-ivory-300)] overflow-hidden">
                    <div className="h-full rounded-full bg-[color:var(--color-teal-500)]" style={{ width: "58%" }} />
                  </div>
                </div>

                {/* Mock action rows */}
                <div className="mt-4 space-y-2.5">
                  <PortalRow icon="📄" label="March statement" meta="ready" />
                  <PortalRow icon="💬" label="Reply from Joshua" meta="2h ago" />
                  <PortalRow icon="📎" label="Upload an invoice" meta="" />
                </div>

                <p className="mt-6 text-[11px] text-[color:var(--color-ink-faint)] text-center">
                  preview only. portal launches with our first participants.
                </p>
              </div>
              <div className="hidden md:block absolute -top-6 -right-6 w-24 h-24 rounded-full border border-[color:var(--color-gold-500)]/40" />
              <div className="hidden md:block absolute -bottom-6 -left-6 w-16 h-16 rounded-full bg-[color:var(--color-gold-500)]/15" />
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================== */}
      {/* FOR FAMILIES & CARERS                                      */}
      {/* ========================================================== */}
      <section className="py-28 md:py-36 relative">
        <div className="mx-auto max-w-[1180px] px-6 md:px-10">
          <div className="grid md:grid-cols-12 gap-12 md:gap-20 items-center">
            <div className="md:col-span-6 relative order-2 md:order-1">
              <div
                className="relative aspect-[4/5] rounded-[28px] overflow-hidden"
                style={{ boxShadow: "0 1px 0 rgba(31,111,111,0.08), 0 24px 48px -20px rgba(15,50,50,0.30), 0 60px 100px -60px rgba(10,40,40,0.35)" }}
              >
                <Image
                  src="https://placehold.co/720x900/1F6F6F/FBF7EE/png?text=+"
                  alt=""
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                  unoptimized
                />
                <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(14,66,66,0) 40%, rgba(14,66,66,0.85) 100%)", mixBlendMode: "multiply" }} />
                <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(184,146,74,0.15), rgba(31,111,111,0.10))" }} />
                <div className="absolute bottom-8 left-8 right-8 text-[color:var(--color-ivory-50)]">
                  <p className="font-display italic text-2xl leading-tight" style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 100" }}>
                    &ldquo;Finally. A plan manager who actually answers.&rdquo;
                  </p>
                  <p className="text-sm mt-3 text-[color:var(--color-ivory-100)]/80">what we want every family to say</p>
                </div>
              </div>
              <div className="hidden md:block absolute -top-6 -right-6 w-32 h-32 rounded-full border border-[color:var(--color-gold-500)]/40" />
              <div className="hidden md:block absolute -bottom-8 -left-8 w-20 h-20 rounded-full bg-[color:var(--color-gold-500)]/15" />
            </div>

            <div className="md:col-span-6 order-1 md:order-2">
              <p className="eyebrow">For families &amp; carers</p>
              <h2
                className="font-display text-4xl md:text-[3.4rem] leading-[1.02] mt-6 text-foreground"
                style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 60" }}
              >
                You&apos;ll always know{" "}
                <span
                  className="italic text-[color:var(--color-teal-500)]"
                  style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 100" }}
                >
                  where the funding stands
                </span>
                .
              </h2>
              <p className="mt-7 text-lg leading-[1.75] text-[color:var(--color-ink-muted)] max-w-[52ch]">
                If you help manage a family member&apos;s NDIS plan, you need a plan manager who keeps you in the loop. Waylight
                sends monthly statements, answers your questions directly, and makes sure you never have to guess.
              </p>

              <div className="mt-9 space-y-5">
                <Bullet title="Your private portal: first stop" body="Real-time budget, statements, message thread, invoice uploads. Most questions get answered without picking up the phone." />
                <Bullet title="Monthly statements" body="Spending breakdowns by category, sent to you and the participant each month. Always available in the portal too." />
                <Bullet title="Plan review support" body="Before a plan review, we prepare a funding summary so you know exactly what was used." />
                <Bullet title="A real person when you need one" body="Phone and email are still there, for the things the portal can't solve. Same person, every single time." />
              </div>

              <Link href="/contact" className="mt-10 btn btn-primary">
                Talk to us about your family member&apos;s plan
                <ArrowRight className="h-4 w-4" />
              </Link>
              <p className="hand -rotate-2 mt-6">families deserve answers, not hold music</p>
              <p className="dark-reveal hand hand-lg rotate-1 mt-3 text-[color:var(--color-teal-glow)]">
                we sit by the candle so you don&apos;t have to
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================== */}
      {/* COMPARISON                                                 */}
      {/* ========================================================== */}
      <section className="relative py-28 md:py-36 overflow-hidden">
        <div className="absolute inset-0 section-tint" />
        <div className="absolute inset-0 grain" />
        <div className="relative mx-auto max-w-[1080px] px-6 md:px-10">
          <div className="text-center max-w-[44ch] mx-auto mb-14">
            <p className="eyebrow justify-center" style={{ display: "inline-flex" }}>
              Why plan management
            </p>
            <h2
              className="font-display text-4xl md:text-[3.4rem] leading-[1.02] mt-6 text-foreground"
              style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 60" }}
            >
              Three ways to manage.{" "}
              <span
                className="italic text-[color:var(--color-teal-500)]"
                style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 100" }}
              >
                One that fits.
              </span>
            </h2>
            <p className="mt-5 text-[color:var(--color-ink-muted)] leading-relaxed">There are three ways to manage NDIS funding. Here&apos;s how they compare.</p>
          </div>

          <div
            className="bg-white rounded-[24px] border border-black/[0.08] overflow-hidden"
            style={{ boxShadow: "0 1px 0 rgba(31,111,111,0.06), 0 12px 32px -16px rgba(20,60,60,0.18), 0 32px 64px -40px rgba(20,60,60,0.22)" }}
          >
            <table className="ctable">
              <thead>
                <tr>
                  <th />
                  <th className="featured text-center">Plan-managed</th>
                  <th className="text-center">Self-managed</th>
                  <th className="text-center">NDIA-managed</th>
                </tr>
              </thead>
              <tbody>
                <CRow label="Use unregistered providers"          a="strong" b="yes"     c="no" />
                <CRow label="Someone else handles invoices"       a="strong" b="no"      c="yes" />
                <CRow label="Choose from all providers"           a="strong" b="yes"     c="no" />
                <CRow label="Monthly budget reporting"            a="strong" b="no"      c="no" />
                <CRow label="No financial admin"                  a="strong" b="no"      c="yes" />
                <CRow label="Funded separately (no cost to supports)" a="strong" b="no" c="yes" />
                <CRow label="A personal plan manager who knows you"   a="strong" b="no" c="no" />
              </tbody>
            </table>
          </div>

          <p className="text-center text-xs text-[color:var(--color-ink-faint)] mt-6 max-w-[60ch] mx-auto leading-relaxed">
            Plan management is funded under its own NDIS budget category (CB Choice and Control). It does not reduce your core or
            capacity-building funding.
          </p>
          <p className="hand text-center mt-3 -rotate-1">notice all those green checkmarks</p>
          <p className="dark-reveal hand hand-lg text-center mt-2 rotate-1 text-[color:var(--color-teal-glow)]">
            green even by candlelight
          </p>
        </div>
      </section>

      {/* ========================================================== */}
      {/* HOW IT WORKS                                               */}
      {/* ========================================================== */}
      <section id="how" className="py-28 md:py-36">
        <div className="mx-auto max-w-[1180px] px-6 md:px-10">
          <div className="text-center max-w-[34ch] mx-auto mb-20">
            <p className="eyebrow" style={{ display: "inline-flex" }}>
              How it works
            </p>
            <h2
              className="font-display text-4xl md:text-[3.6rem] leading-[1.02] mt-6 text-foreground"
              style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 60" }}
            >
              Three steps.{" "}
              <span
                className="italic text-[color:var(--color-teal-500)]"
                style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 100" }}
              >
                That&apos;s the whole thing.
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-10 md:gap-6 relative">
            <div
              className="hidden md:block absolute top-12 left-[16%] right-[16%] h-px"
              style={{ background: "repeating-linear-gradient(90deg, rgba(184,146,74,0.5) 0 6px, transparent 6px 14px)" }}
            />
            <Step num="i" title="You choose your providers" body="Pick the support workers, therapists, and services that work for you. Registered or unregistered. Your call." />
            <Step num="ii" title="Providers invoice us" body="Your providers send their invoices directly to Waylight. We check everything against NDIS rates and process payment." />
            <Step num="iii" title="You stay informed" body="Monthly statements, budget alerts, and direct access to your plan manager. No surprises. Ever." />
          </div>
          <p className="hand text-center mt-12 rotate-1">three steps. that&apos;s it.</p>
          <p className="dark-reveal hand hand-lg text-center mt-3 -rotate-2 text-[color:var(--color-teal-glow)]">
            simple by daylight. simple by candlelight.
          </p>
        </div>
      </section>

      {/* ========================================================== */}
      {/* SISTER SITE STRIP (brief — keeps PM the focus)             */}
      {/* ========================================================== */}
      <section className="relative py-14 overflow-hidden">
        <div className="mx-auto max-w-[1080px] px-6 md:px-10">
          <div className="relative rounded-[24px] overflow-hidden border border-black/[0.08] atmos-deep grain p-7 md:p-8">
            <div
              className="absolute -right-16 -top-16 w-64 h-64 rounded-full pointer-events-none"
              style={{ background: "radial-gradient(circle, rgba(217,190,130,0.30), transparent 60%)" }}
            />
            <div className="relative flex flex-col md:flex-row md:items-center md:justify-between gap-5">
              <div>
                <p className="text-[10px] tracking-[0.22em] uppercase font-medium text-[color:var(--color-gold-300)]">
                  Same company, second pillar
                </p>
                <p
                  className="font-display text-xl md:text-2xl leading-snug mt-2 text-[color:var(--color-ivory-50)] max-w-[52ch]"
                  style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 70" }}
                >
                  We also build{" "}
                  <span
                    className="italic text-[color:var(--color-gold-300)]"
                    style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 100" }}
                  >
                    AI operations for businesses
                  </span>{" "}
                  drowning in admin.
                </p>
              </div>
              <a
                href="https://waylightai.com.au"
                className="btn btn-light shrink-0"
                target="_blank"
                rel="noopener noreferrer"
              >
                waylightai.com.au
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================== */}
      {/* STORY (letter)                                             */}
      {/* ========================================================== */}
      <section id="story" className="py-28 md:py-36">
        <div className="mx-auto max-w-[860px] px-6 md:px-10">
          <div className="text-center mb-10">
            <p className="eyebrow" style={{ display: "inline-flex" }}>
              A letter from the founder
            </p>
          </div>
          <article className="letter">
            <h2
              className="font-display text-4xl md:text-[3rem] leading-[1.05] text-foreground mb-8"
              style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 70" }}
            >
              Built by someone{" "}
              <span
                className="italic text-[color:var(--color-teal-500)]"
                style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 100" }}
              >
                who gets it
              </span>
              .
            </h2>
            <p className="dropcap text-[1.08rem] leading-[1.85] text-[color:var(--color-ink-soft)]">
              Waylight was started by a practising NDIS support worker who saw the problems from the inside: the dread of calling a
              plan manager and never getting through, the stress of not knowing where funding stands, the embarrassment when
              providers chase unpaid invoices.
            </p>
            <p className="mt-6 text-[1.08rem] leading-[1.85] text-[color:var(--color-ink-soft)]">
              That frontline experience changes how we operate. We catch errors that desk-only plan managers miss, because we
              understand what services actually look like on the ground.
            </p>
            <div className="candle-rule my-9">
              <Image src="/logo-icon.png" alt="" width={24} height={24} className="opacity-80" />
            </div>
            <p
              className="font-display italic text-xl text-[color:var(--color-teal-600)] leading-relaxed"
              style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 100" }}
            >
              Waylight stays small on purpose. Every participant gets a plan manager who knows their name, knows their plan, and
              has the time to actually care whether things are working. It is not a slogan. It is the only way this kind of
              service exists.
            </p>
            <Link href="/about" className="mt-10 btn btn-ghost">
              Read our full story
              <ArrowRight className="h-4 w-4" />
            </Link>
          </article>
          <p className="hand hand-lg text-center mt-8 rotate-1">small on purpose</p>
          <p className="dark-reveal hand hand-xl text-center mt-3 -rotate-1 text-[color:var(--color-teal-glow)]">
            small enough to remember your name
          </p>
        </div>
      </section>

      {/* ========================================================== */}
      {/* FAQ                                                        */}
      {/* ========================================================== */}
      <section className="py-20 md:py-28 section-tint grain relative">
        <div className="relative mx-auto max-w-[820px] px-6 md:px-10">
          <div className="text-center mb-12">
            <p className="eyebrow justify-center" style={{ display: "inline-flex" }}>
              Frequently asked
            </p>
            <h2
              className="font-display text-3xl md:text-[3rem] leading-[1.05] mt-5 text-foreground"
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
            {homeFaqs.map((f, i) => (
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
      {/* FINAL CTA                                                  */}
      {/* ========================================================== */}
      <section id="contact-cta" className="relative py-32 md:py-40 overflow-hidden">
        <div className="absolute inset-0 atmos-deep" />
        <div className="absolute inset-0 grain opacity-30" />
        <div
          className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(217,190,130,0.25), transparent 60%)" }}
        />

        <div className="relative mx-auto max-w-[820px] px-6 md:px-10 text-center">
          <Image src="/logo.png" alt="" width={56} height={56} className="mx-auto mb-8 opacity-90 logo-candle" />
          <h2
            className="font-display text-4xl md:text-[4rem] leading-[1] text-[color:var(--color-ivory-50)]"
            style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 70" }}
          >
            Be one of{" "}
            <span
              className="italic text-[color:var(--color-gold-300)] dark:text-[color:var(--color-teal-glow)]"
              style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 100" }}
            >
              our first
            </span>
            <br />
            participants.
          </h2>
          <p className="mt-8 text-[color:var(--color-ivory-100)]/85 text-lg leading-[1.75] max-w-[52ch] mx-auto">
            We&apos;re starting small on purpose. Every participant gets dedicated, personal plan management from day one. Reach
            out while caseloads are low.
          </p>
          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn btn-light">
              Register your interest
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/for-support-coordinators"
              className="btn"
              style={{ background: "transparent", color: "#FBF7EE", border: "1px solid rgba(251,247,238,0.3)" }}
            >
              Refer a participant
            </Link>
          </div>
          <p className="mt-8 text-xs text-[color:var(--color-ivory-100)]/45">
            {BUSINESS.legalName} &middot; ABN {BUSINESS.abn} &middot; NDIS provider registration in progress. Expressions of
            interest welcome.
          </p>
          <p className="hand hand-lg mt-6 -rotate-2" style={{ color: "rgba(217,190,130,0.75)" }}>
            still scrolling? we like you already.
          </p>
        </div>
      </section>
    </>
  )
}

/* ============================================================ */
/* Local helper components                                      */
/* ============================================================ */

function Stat({ number, suffix, label, italic }: { number: string; suffix?: string; label: string; italic?: boolean }) {
  return (
    <div className="px-8 py-9">
      <p
        className={`font-display text-5xl text-foreground ${italic ? "italic" : ""}`}
        style={{ fontVariationSettings: italic ? "'opsz' 144, 'SOFT' 100" : "'opsz' 144, 'SOFT' 80" }}
      >
        {number}
        {suffix && <span className="text-2xl text-[color:var(--color-ink-faint)] align-top ml-1">{suffix}</span>}
      </p>
      <p className="text-sm text-[color:var(--color-ink-muted)] mt-2">{label}</p>
    </div>
  )
}

function HandledCard({ icon, title, body }: { icon: React.ReactNode; title: string; body: string }) {
  return (
    <article className="brand-card group">
      <div className="h-12 w-12 rounded-2xl bg-[color:var(--color-teal-500)]/10 text-[color:var(--color-teal-500)] flex items-center justify-center mb-7 group-hover:bg-[color:var(--color-teal-500)] group-hover:text-[color:var(--color-ivory-50)] transition-colors duration-500">
        {icon}
      </div>
      <h3 className="font-display text-2xl text-foreground leading-tight">{title}</h3>
      <p className="text-[color:var(--color-ink-muted)] mt-3 leading-relaxed text-[15px]">{body}</p>
    </article>
  )
}

function Bullet({ title, body }: { title: string; body: string }) {
  return (
    <div className="flex gap-4">
      <div className="mt-2 h-2 w-2 rounded-full bg-[color:var(--color-gold-500)] shrink-0" />
      <div>
        <p className="font-medium text-foreground">{title}</p>
        <p className="text-[color:var(--color-ink-muted)] text-[15px] leading-relaxed">{body}</p>
      </div>
    </div>
  )
}

function CRow({ label, a, b, c }: { label: string; a: "strong" | "yes" | "no"; b: "strong" | "yes" | "no"; c: "strong" | "yes" | "no" }) {
  const cell = (kind: "strong" | "yes" | "no") => {
    if (kind === "no") {
      return (
        <span className="no">
          <X className="h-3 w-3" strokeWidth={3} />
        </span>
      )
    }
    return (
      <span className={kind === "strong" ? "yes yes-strong" : "yes"}>
        <Check className="h-3 w-3" strokeWidth={3.5} />
      </span>
    )
  }
  return (
    <tr>
      <td>{label}</td>
      <td className="featured text-center">{cell(a)}</td>
      <td className="text-center">{cell(b)}</td>
      <td className="text-center">{cell(c)}</td>
    </tr>
  )
}

function PortalRow({ icon, label, meta }: { icon: string; label: string; meta: string }) {
  return (
    <div className="flex items-center justify-between gap-3 px-4 py-3 rounded-xl bg-[color:var(--color-ivory-100)] border border-black/[0.05] hover:border-[color:var(--color-teal-500)]/30 transition-colors">
      <div className="flex items-center gap-3">
        <span className="text-lg" aria-hidden>
          {icon}
        </span>
        <span className="text-sm font-medium text-foreground">{label}</span>
      </div>
      {meta && <span className="text-xs text-[color:var(--color-ink-faint)]">{meta}</span>}
    </div>
  )
}

function Step({ num, title, body }: { num: string; title: string; body: string }) {
  return (
    <div className="text-center relative">
      <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-[color:var(--color-ivory-100)] border border-[color:var(--color-gold-300)]/50 relative">
        <span className="stepnum">{num}</span>
      </div>
      <h3 className="font-display text-2xl mt-7 text-foreground">{title}</h3>
      <p className="text-[color:var(--color-ink-muted)] mt-3 leading-relaxed text-[15px] max-w-[32ch] mx-auto">{body}</p>
    </div>
  )
}
