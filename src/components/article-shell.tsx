import Link from "next/link"
import { ArrowLeft, ArrowRight } from "lucide-react"

export function ArticleHero({
  eyebrow = "Guide",
  title,
  intro,
  hand,
  darkHand,
}: {
  eyebrow?: string
  title: React.ReactNode
  intro: string
  hand?: string
  darkHand?: string
}) {
  return (
    <section className="relative overflow-hidden atmos grain pt-28 md:pt-36 pb-16 md:pb-20">
      <div className="arch hidden md:block" style={{ right: "-160px", top: "60px", width: "520px", height: "260px" }} />
      <div className="arch hidden md:block" style={{ right: "-80px", top: "140px", width: "380px", height: "190px", opacity: 0.55 }} />

      <div className="relative mx-auto max-w-[820px] px-6 md:px-10">
        <Link
          href="/resources"
          className="inline-flex items-center gap-1.5 text-sm text-[color:var(--color-ink-muted)] hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          All resources
        </Link>
        <p className="eyebrow rise d1">{eyebrow}</p>
        <h1
          className="text-[2.2rem] sm:text-[2.8rem] md:text-[3.6rem] leading-[1.05] mt-6 rise d2 text-foreground"
          style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 60" }}
        >
          {title}
        </h1>
        <p className="mt-7 text-lg text-[color:var(--color-ink-soft)] leading-[1.7] max-w-[58ch] rise d3">{intro}</p>
        {hand && <p className="hand hand-lg -rotate-2 mt-7 ml-2">{hand}</p>}
        {darkHand && <p className="dark-reveal hand hand-lg rotate-1 mt-3 ml-2">{darkHand}</p>}
      </div>
    </section>
  )
}

export function ArticleBody({ children }: { children: React.ReactNode }) {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-[760px] px-6 md:px-10">
        <div className="prose-waylight">{children}</div>
      </div>
    </section>
  )
}

export function ArticleH2({ children }: { children: React.ReactNode }) {
  return (
    <h2
      className="text-3xl md:text-[2.4rem] leading-[1.15] mt-16 mb-6 text-foreground first:mt-0"
      style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 60" }}
    >
      {children}
    </h2>
  )
}

export function ArticleP({ children }: { children: React.ReactNode }) {
  return <p className="text-[1.05rem] leading-[1.8] text-[color:var(--color-ink-soft)] mt-5">{children}</p>
}

export function ArticleCTA({
  title,
  body,
}: {
  title: React.ReactNode
  body: string
}) {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 atmos-deep" />
      <div className="absolute inset-0 grain opacity-30" />
      <div
        className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(217,190,130,0.25), transparent 60%)" }}
      />
      <div className="relative mx-auto max-w-[760px] px-6 md:px-10 text-center">
        <h2
          className="text-3xl md:text-[2.8rem] leading-[1.1] text-[color:var(--color-ivory-50)]"
          style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 70" }}
        >
          {title}
        </h2>
        <p className="mt-6 text-[color:var(--color-ivory-100)]/85 text-lg leading-[1.7] max-w-[55ch] mx-auto">{body}</p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact" className="btn btn-light">
            Get in touch
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/resources"
            className="btn"
            style={{ background: "transparent", color: "#FBF7EE", border: "1px solid rgba(251,247,238,0.3)" }}
          >
            More guides
          </Link>
        </div>
      </div>
    </section>
  )
}
