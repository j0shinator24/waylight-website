import type { Metadata } from "next"
import Link from "next/link"
import { Lock, BarChart3, FileText, MessageSquare, Upload, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Participant Portal",
  description:
    "The Waylight participant portal: real-time budgets, monthly statements, message thread, invoice uploads. Coming with our first participants.",
  openGraph: {
    title: "Participant Portal | Waylight",
    description:
      "The Waylight participant portal. Coming with our first participants.",
    type: "website",
    locale: "en_AU",
    images: [
      {
        url: "/og/default",
        width: 1200,
        height: 630,
        alt: "Waylight Plan Management - NDIS plan manager based in Queensland.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/og/default"],
  },
}

export default function PortalPage() {
  return (
    <section className="relative flex flex-1 items-center justify-center atmos grain py-28 md:py-36 overflow-hidden">
      <div className="arch hidden md:block" style={{ right: "-160px", top: "60px", width: "520px", height: "260px" }} />
      <div className="arch hidden md:block" style={{ right: "-80px", top: "140px", width: "380px", height: "190px", opacity: 0.55 }} />

      <div className="relative mx-auto w-full max-w-[560px] px-6">
        <div className="text-center mb-8">
          <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-[color:var(--color-teal-500)]/10 text-[color:var(--color-teal-500)]">
            <Lock className="h-7 w-7" strokeWidth={1.7} />
          </div>
          <p className="eyebrow justify-center" style={{ display: "inline-flex" }}>
            Participant portal
          </p>
          <h1
            className="text-4xl md:text-5xl mt-4 text-foreground"
            style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 60" }}
          >
            Coming with our{" "}
            <span
              className="italic text-[color:var(--color-teal-500)]"
              style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 100" }}
            >
              first participants
            </span>
            .
          </h1>
          <p className="mt-5 text-[color:var(--color-ink-muted)] leading-relaxed">
            Real-time budgets, monthly statements, a direct message thread with your plan manager, and invoice uploads. The
            fast way to handle anything that doesn&apos;t need a phone call.
          </p>
        </div>

        <article className="brand-card">
          <p className="text-[10px] uppercase tracking-[0.18em] text-[color:var(--color-ink-faint)] mb-5">What&apos;s coming</p>
          <ul className="space-y-4">
            <PortalFeature
              icon={<BarChart3 className="h-4 w-4" strokeWidth={1.8} />}
              title="Real-time budget tracking"
              body="Category-level breakdowns that update as invoices clear."
            />
            <PortalFeature
              icon={<FileText className="h-4 w-4" strokeWidth={1.8} />}
              title="Statements on demand"
              body="Every monthly statement, downloadable any time."
            />
            <PortalFeature
              icon={<MessageSquare className="h-4 w-4" strokeWidth={1.8} />}
              title="Direct message thread"
              body="One conversation. Same person reads every message."
            />
            <PortalFeature
              icon={<Upload className="h-4 w-4" strokeWidth={1.8} />}
              title="Invoice uploads"
              body="Snap a photo of an out-of-pocket receipt. We process it."
            />
          </ul>

          <div className="mt-7 pt-6 border-t border-black/[0.06]">
            <p className="text-sm text-[color:var(--color-ink-muted)] leading-relaxed text-center mb-5">
              While we&apos;re building this, the fastest way to talk to us is the contact form. We&apos;ll add you to the
              portal launch list automatically.
            </p>
            <Link href="/contact" className="btn btn-primary w-full justify-center">
              Talk to a real person
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </article>

        <p className="hand text-center mt-6 -rotate-1">launching soon. with the first.</p>
        <p className="dark-reveal hand hand-lg text-center mt-3 rotate-1">
          even before launch, the candle is lit.
        </p>
      </div>
    </section>
  )
}

function PortalFeature({ icon, title, body }: { icon: React.ReactNode; title: string; body: string }) {
  return (
    <li className="flex items-start gap-4">
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[color:var(--color-gold-500)]/10 text-[color:var(--color-gold-600)]">
        {icon}
      </div>
      <div>
        <p className="font-medium text-foreground text-[15px]">{title}</p>
        <p className="text-sm text-[color:var(--color-ink-muted)] leading-relaxed mt-0.5">{body}</p>
      </div>
    </li>
  )
}
