import type { Metadata } from "next"
import Link from "next/link"
import {
  ArrowRight,
  Heart,
  Target,
  Handshake,
  PhoneOff,
  FileQuestion,
  Clock,
  ShieldCheck,
} from "lucide-react"
import { BASE_URL } from "@/lib/constants"
import { SCHEMA_IDS } from "@/components/seo/json-ld"

export const metadata: Metadata = {
  title: { absolute: "About Waylight | Started by a Support Worker" },
  description:
    "Waylight was started by a practising NDIS support worker in Queensland. Small on purpose. Built around the participant. Read how and why it exists.",
  alternates: { canonical: `${BASE_URL}/about` },
  openGraph: {
    title: "About Waylight | Started by a Support Worker",
    description:
      "Waylight is a Queensland NDIS plan manager started by a frontline support worker. Read how and why it exists.",
    url: `${BASE_URL}/about`,
    type: "article",
    locale: "en_AU",
    images: [
      {
        url: "/og/about",
        width: 1200,
        height: 630,
        alt: "About Waylight - built by someone who gets it.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/og/about"],
  },
}

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": SCHEMA_IDS.joshua,
  name: "Joshua",
  jobTitle: "NDIS Plan Manager and Founder",
  description:
    "Practising NDIS support worker in Queensland and founder of Waylight Plan Management. Frontline experience supporting participants informs how Waylight operates.",
  worksFor: { "@id": SCHEMA_IDS.organization },
  knowsAbout: [
    "NDIS Plan Management",
    "NDIS Support Work",
    "NDIS Participant Funding",
    "NDIS PRODA Claims",
    "NDIS Practice Standards",
  ],
  address: {
    "@type": "PostalAddress",
    addressRegion: "QLD",
    addressCountry: "AU",
  },
}

const aboutPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "@id": `${BASE_URL}/about#aboutpage`,
  url: `${BASE_URL}/about`,
  name: "About Waylight | NDIS Plan Manager Founded by a Support Worker",
  description:
    "How and why Waylight Plan Management exists. Founded by a practising NDIS support worker in Queensland, Waylight is small on purpose and built around the participant.",
  isPartOf: { "@id": SCHEMA_IDS.website },
  about: { "@id": SCHEMA_IDS.organization },
  mainEntity: { "@id": SCHEMA_IDS.joshua },
}

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
    { "@type": "ListItem", position: 2, name: "About", item: `${BASE_URL}/about` },
  ],
}

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageJsonLd) }}
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
            <p className="eyebrow rise d1">Our story</p>
            <h1
              className="text-[2.6rem] sm:text-5xl md:text-[5rem] leading-[0.96] mt-7 rise d2 text-foreground"
              style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 60" }}
            >
              Started on the ground.{" "}
              <span
                className="italic text-[color:var(--color-teal-500)]"
                style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 100" }}
              >
                Built for participants.
              </span>
            </h1>
            <p className="mt-9 text-lg md:text-xl text-[color:var(--color-ink-soft)] leading-[1.7] max-w-[58ch] rise d3">
              A Queensland NDIS plan management provider built on a single idea: participants deserve a plan manager who
              actually knows their name, knows their plan, and has the time to care.
            </p>
            <p className="hand hand-lg -rotate-2 mt-8 ml-2">pull up a chair.</p>
            <p className="dark-reveal hand hand-lg rotate-1 mt-3 ml-2">
              the candle is lit. you found us.
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================== */}
      {/* STORY (letter)                                              */}
      {/* ========================================================== */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-[860px] px-6 md:px-10">
          <div className="text-center mb-10">
            <p className="eyebrow" style={{ display: "inline-flex" }}>A letter from the founder</p>
          </div>
          <article className="letter">
            <h2
              className="text-4xl md:text-[2.8rem] leading-[1.05] text-foreground mb-8"
              style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 70" }}
            >
              Why Waylight{" "}
              <span
                className="italic text-[color:var(--color-teal-500)]"
                style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 100" }}
              >
                exists
              </span>
              .
            </h2>
            <p className="dropcap text-[1.08rem] leading-[1.85] text-[color:var(--color-ink-soft)]">
              Too many NDIS participants are stuck with plan managers who treat them like a ticket number. The frustration of
              calling and never getting through. The anxiety of not knowing where the funding stands. The helplessness when
              invoices sit unpaid for weeks while the provider chases.
            </p>
            <p className="mt-6 text-[1.08rem] leading-[1.85] text-[color:var(--color-ink-soft)]">
              Waylight was started by Joshua, a practising NDIS support worker in Queensland. Working on the ground, he saw the
              same problems repeated across every participant he supported. Plan managers who could not be reached. Invoices
              that sat in queues for weeks. Participants left feeling invisible. He built Waylight to fix that.
            </p>
            <p className="mt-6 text-[1.08rem] leading-[1.85] text-[color:var(--color-ink-soft)]">
              That frontline experience changes how we operate. We catch invoice errors that desk-only plan managers miss,
              because we understand what services actually look like on the ground. We spot underspend patterns early, because
              we understand how funding gets used across categories in the real world. The combination of plan management and
              hands-on NDIS experience is rare. It is the core of what makes Waylight different.
            </p>
            <div className="candle-rule my-9">
              <span className="text-xs uppercase tracking-[0.18em] text-[color:var(--color-ink-faint)]">a small promise</span>
            </div>
            <p
              className="font-display italic text-xl text-[color:var(--color-teal-600)] leading-relaxed"
              style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 100" }}
            >
              Waylight stays small on purpose. Every participant gets a plan manager who knows their name, knows their plan,
              and has the time to actually care whether things are working. It is not a slogan. It is the only way this kind
              of service exists.
            </p>
          </article>
          <p className="hand hand-lg text-center mt-8 -rotate-2">that&apos;s the whole pitch.</p>
          <p className="dark-reveal hand hand-lg text-center mt-3 rotate-1">
            small enough to remember your name.
          </p>
        </div>
      </section>

      {/* ========================================================== */}
      {/* CREDENTIALS STRIP                                           */}
      {/* ========================================================== */}
      <section className="py-12">
        <div className="mx-auto max-w-[1180px] px-6 md:px-10">
          <div
            className="bg-white rounded-[28px] border border-black/[0.05] grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-black/[0.08] overflow-hidden"
            style={{ boxShadow: "0 1px 0 rgba(31,111,111,0.06), 0 12px 32px -16px rgba(20,60,60,0.18), 0 32px 64px -40px rgba(20,60,60,0.22)" }}
          >
            <Cred big="frontline" italic label="Practising NDIS support worker" />
            <Cred big="cleared" italic label="NDIS Worker Screening verified" />
            <Cred big="14" suffix="policies" label="Aligned with Practice Standards" />
            <Cred big="insured" italic label="Professional indemnity + public liability" />
          </div>
          <p className="hand text-center mt-5 -rotate-1">receipts. not promises.</p>
        </div>
      </section>

      {/* ========================================================== */}
      {/* VALUES                                                      */}
      {/* ========================================================== */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-[1180px] px-6 md:px-10">
          <div className="text-center max-w-[44ch] mx-auto mb-16">
            <p className="eyebrow justify-center" style={{ display: "inline-flex" }}>What guides us</p>
            <h2
              className="text-4xl md:text-[3.4rem] leading-[1.05] mt-6 text-foreground"
              style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 60" }}
            >
              Three things.{" "}
              <span
                className="italic text-[color:var(--color-teal-500)]"
                style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 100" }}
              >
                Not nine.
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ValueCard
              icon={<Heart className="h-5 w-5" strokeWidth={1.7} />}
              title="Personal service"
              body="Same person every call. Your plan manager knows your situation, your providers, your goals. Nobody is reading off a screen."
            />
            <ValueCard
              icon={<Target className="h-5 w-5" strokeWidth={1.7} />}
              title="Accuracy"
              body="Every invoice checked against PAPL. Every claim lodged correctly. Every dollar accounted for. Mistakes get caught before you see them."
            />
            <ValueCard
              icon={<Handshake className="h-5 w-5" strokeWidth={1.7} />}
              title="Transparency"
              body="You always know where your funding stands. Real-time portal, monthly statements, direct alerts when something looks off. No hidden processes."
            />
          </div>
          <p className="hand text-center mt-10 rotate-1">three. that&apos;s enough.</p>
        </div>
      </section>

      {/* ========================================================== */}
      {/* WHY PARTICIPANTS SWITCH                                     */}
      {/* ========================================================== */}
      <section className="py-24 md:py-32 section-tint grain relative">
        <div className="relative mx-auto max-w-[1180px] px-6 md:px-10">
          <div className="text-center max-w-[44ch] mx-auto mb-16">
            <p className="eyebrow justify-center" style={{ display: "inline-flex" }}>Common frustrations</p>
            <h2
              className="text-4xl md:text-[3.4rem] leading-[1.05] mt-6 text-foreground"
              style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 60" }}
            >
              Why participants{" "}
              <span
                className="italic text-[color:var(--color-teal-500)]"
                style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 100" }}
              >
                switch
              </span>
              .
            </h2>
            <p className="hand mt-3 -rotate-1">sound familiar?</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ValueCard
              icon={<PhoneOff className="h-5 w-5" strokeWidth={1.7} />}
              title="Cannot reach anyone"
              body="Big plan management companies run call centres. You wait on hold, then explain your situation to a different person every time. At Waylight, you have one person who already knows your plan."
            />
            <ValueCard
              icon={<FileQuestion className="h-5 w-5" strokeWidth={1.7} />}
              title="No idea where funding stands"
              body="Some plan managers send statements quarterly, if at all. Waylight sends monthly category breakdowns and gives you a real-time portal view that updates as invoices process."
            />
            <ValueCard
              icon={<Clock className="h-5 w-5" strokeWidth={1.7} />}
              title="Invoices sit in a queue"
              body="When your provider waits weeks for payment, it damages your relationship with them. Small caseloads mean nothing piles up at Waylight. Most invoices clear in 1-2 business days."
            />
          </div>
        </div>
      </section>

      {/* ========================================================== */}
      {/* CONTINUITY OF SERVICE                                       */}
      {/* ========================================================== */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-[1080px] px-6 md:px-10">
          <div className="grid md:grid-cols-12 gap-12 md:gap-16 items-start">
            <div className="md:col-span-6">
              <p className="eyebrow">The &ldquo;what if Joshua is sick&rdquo; question</p>
              <h2
                className="text-4xl md:text-[2.8rem] leading-[1.05] mt-6 text-foreground"
                style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 60" }}
              >
                Small, with a{" "}
                <span
                  className="italic text-[color:var(--color-teal-500)]"
                  style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 100" }}
                >
                  documented backup
                </span>
                .
              </h2>
              <p className="mt-6 text-[color:var(--color-ink-muted)] leading-[1.75] max-w-[52ch]">
                The honest question every coordinator asks about a sole-operator service: what happens if the operator is
                unavailable? Waylight has a documented continuity plan. A qualified contractor-accountant has system access and
                is authorised to process urgent invoices, answer budget queries, and manage reportable incidents during any
                period of unavailability.
              </p>
              <p className="hand -rotate-1 mt-7">backup plan for the backup plan.</p>
            </div>

            <div className="md:col-span-6">
              <article className="brand-card">
                <div className="flex items-center gap-3 mb-5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[color:var(--color-gold-500)]/10 text-[color:var(--color-gold-600)]">
                    <ShieldCheck className="h-5 w-5" strokeWidth={1.8} />
                  </div>
                  <h3 className="text-xl text-foreground">How it works</h3>
                </div>
                <ol className="space-y-4 text-[15px] text-[color:var(--color-ink-muted)] leading-relaxed">
                  <li className="flex items-start gap-3">
                    <span
                      className="font-display italic text-2xl text-[color:var(--color-gold-500)] leading-none w-7 shrink-0"
                      style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 100" }}
                    >
                      i
                    </span>
                    <span>For planned leave, participants and coordinators are notified in advance.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span
                      className="font-display italic text-2xl text-[color:var(--color-gold-500)] leading-none w-7 shrink-0"
                      style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 100" }}
                    >
                      ii
                    </span>
                    <span>Urgent invoices and incidents are handled by the backup contractor-accountant.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span
                      className="font-display italic text-2xl text-[color:var(--color-gold-500)] leading-none w-7 shrink-0"
                      style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 100" }}
                    >
                      iii
                    </span>
                    <span>Non-urgent matters wait for Joshua&apos;s return.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span
                      className="font-display italic text-2xl text-[color:var(--color-gold-500)] leading-none w-7 shrink-0"
                      style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 100" }}
                    >
                      iv
                    </span>
                    <span>Delegation is documented in a formal contractor agreement on file.</span>
                  </li>
                </ol>
              </article>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================== */}
      {/* FINAL CTA                                                   */}
      {/* ========================================================== */}
      <section className="relative py-28 md:py-36 overflow-hidden">
        <div className="absolute inset-0 atmos-deep" />
        <div className="absolute inset-0 grain opacity-30" />
        <div
          className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(217,190,130,0.25), transparent 60%)" }}
        />
        <div className="relative mx-auto max-w-[760px] px-6 md:px-10 text-center">
          <h2
            className="text-3xl md:text-[3.4rem] leading-[1.05] text-[color:var(--color-ivory-50)]"
            style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 70" }}
          >
            Ready for{" "}
            <span
              className="italic text-[color:var(--color-gold-300)]"
              style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 100" }}
            >
              personal plan management
            </span>
            ?
          </h2>
          <p className="mt-7 text-[color:var(--color-ivory-100)]/85 text-lg leading-[1.7] max-w-[55ch] mx-auto">
            Whether you&apos;re a participant, a support coordinator, or a family member helping someone manage their plan.
            Tell us about it. We&apos;ll walk you through how Waylight would work for your situation.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn btn-light">
              Start a conversation
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/policies"
              className="btn"
              style={{ background: "transparent", color: "#FBF7EE", border: "1px solid rgba(251,247,238,0.3)" }}
            >
              View our policies
            </Link>
          </div>
          <p className="hand hand-lg mt-7 -rotate-2" style={{ color: "rgba(217,190,130,0.75)" }}>
            still here? let&apos;s talk.
          </p>
        </div>
      </section>
    </>
  )
}

/* ============================================================ */
/* Local helpers                                                */
/* ============================================================ */

function Cred({ big, suffix, label, italic }: { big: string; suffix?: string; label: string; italic?: boolean }) {
  return (
    <div className="px-8 py-9 text-center md:text-left">
      <p
        className={`text-4xl text-foreground ${italic ? "italic" : ""}`}
        style={{ fontVariationSettings: italic ? "'opsz' 144, 'SOFT' 100" : "'opsz' 144, 'SOFT' 80" }}
      >
        {big}
        {suffix && <span className="text-xl text-[color:var(--color-ink-faint)] align-top ml-1">{suffix}</span>}
      </p>
      <p className="text-sm text-[color:var(--color-ink-muted)] mt-2">{label}</p>
    </div>
  )
}

function ValueCard({ icon, title, body }: { icon: React.ReactNode; title: string; body: string }) {
  return (
    <article className="brand-card group">
      <div className="flex h-12 w-12 rounded-2xl bg-[color:var(--color-teal-500)]/10 text-[color:var(--color-teal-500)] items-center justify-center mb-5 group-hover:bg-[color:var(--color-teal-500)] group-hover:text-[color:var(--color-ivory-50)] transition-colors duration-500">
        {icon}
      </div>
      <h3 className="text-xl text-foreground leading-tight">{title}</h3>
      <p className="text-[color:var(--color-ink-muted)] mt-3 leading-relaxed text-[15px]">{body}</p>
    </article>
  )
}
