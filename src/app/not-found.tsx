import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function NotFound() {
  return (
    <section className="relative flex flex-1 flex-col items-center justify-center atmos grain py-32 md:py-40 px-6 text-center overflow-hidden">
      <div className="arch hidden md:block" style={{ right: "-160px", top: "60px", width: "520px", height: "260px" }} />
      <div className="arch hidden md:block" style={{ right: "-80px", top: "140px", width: "380px", height: "190px", opacity: 0.55 }} />

      <div className="relative max-w-[44ch]">
        <p
          className="font-display text-[8rem] md:text-[12rem] leading-none italic text-[color:var(--color-teal-500)]"
          style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 100" }}
        >
          404
        </p>
        <h1
          className="text-3xl md:text-[2.4rem] mt-4 text-foreground"
          style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 60" }}
        >
          We can&apos;t find that page.
        </h1>
        <p className="mt-5 text-[color:var(--color-ink-muted)] leading-relaxed">
          The link is broken, or the page moved, or it never existed. Either way, the candle is still on at the front door.
        </p>
        <Link href="/" className="btn btn-primary mt-8 inline-flex">
          Back to home
          <ArrowRight className="h-4 w-4" />
        </Link>
        <p className="hand hand-lg mt-7 -rotate-2">happens to the best of us.</p>
        <p className="dark-reveal hand hand-lg rotate-1 mt-3">
          even the candle gets lost sometimes.
        </p>
      </div>
    </section>
  )
}
