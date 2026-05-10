import Image from "next/image"
import Link from "next/link"
import { BUSINESS } from "@/lib/constants"

export function Footer() {
  return (
    <footer className="mt-auto border-t border-border bg-background">
      <div className="mx-auto max-w-[1240px] px-6 md:px-10 pt-16 pb-10">
        <div className="grid md:grid-cols-12 gap-10 items-start">
          {/* Brand block */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-3">
              <Image src="/logo.png" alt="" width={42} height={42} className="h-10 w-10 object-contain" />
              <span className="font-display text-2xl tracking-tight text-foreground" style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 60" }}>
                waylight
              </span>
            </div>
            <p className="mt-5 text-[15px] leading-relaxed text-[color:var(--color-ink-muted)] max-w-[44ch]">
              NDIS plan management, personal and direct. Plus AI operations for Australian businesses tired of admin eating their week.
              Brisbane, Queensland.
            </p>
            <p className="hand mt-6 -rotate-1">small, on purpose. brisbane, by choice.</p>
          </div>

          {/* Quick links */}
          <div className="md:col-span-2">
            <p className="text-[11px] uppercase tracking-[0.18em] text-[color:var(--color-ink-faint)] mb-4 font-medium">Plan management</p>
            <ul className="space-y-2.5">
              <li><Link href="/" className="text-sm text-[color:var(--color-ink-muted)] hover:text-foreground transition-colors">Home</Link></li>
              <li><Link href="/what-we-handle" className="text-sm text-[color:var(--color-ink-muted)] hover:text-foreground transition-colors">What we handle</Link></li>
              <li><Link href="/how-it-works" className="text-sm text-[color:var(--color-ink-muted)] hover:text-foreground transition-colors">How it works</Link></li>
              <li><Link href="/for-support-coordinators" className="text-sm text-[color:var(--color-ink-muted)] hover:text-foreground transition-colors">For coordinators</Link></li>
              <li><Link href="/about" className="text-sm text-[color:var(--color-ink-muted)] hover:text-foreground transition-colors">About</Link></li>
              <li><Link href="/resources" className="text-sm text-[color:var(--color-ink-muted)] hover:text-foreground transition-colors">Resources</Link></li>
              <li><Link href="/contact" className="text-sm text-[color:var(--color-ink-muted)] hover:text-foreground transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Sister site */}
          <div className="md:col-span-2">
            <p className="text-[11px] uppercase tracking-[0.18em] text-[color:var(--color-ink-faint)] mb-4 font-medium">Sister site</p>
            <a
              href="https://waylightai.com.au"
              className="group inline-flex items-center gap-2 text-sm text-[color:var(--color-ink-muted)] hover:text-foreground transition-colors"
            >
              waylightai.com.au
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-50 group-hover:opacity-100 transition-opacity">
                <path d="M7 17L17 7M7 7h10v10" />
              </svg>
            </a>
            <p className="text-xs text-[color:var(--color-ink-faint)] mt-2 leading-relaxed">
              AI operations for businesses tired of admin eating their week.
            </p>
          </div>

          {/* Get in touch */}
          <div className="md:col-span-3">
            <p className="text-[11px] uppercase tracking-[0.18em] text-[color:var(--color-ink-faint)] mb-4 font-medium">Get in touch</p>
            <ul className="space-y-2 text-sm text-[color:var(--color-ink-muted)]">
              <li>{BUSINESS.location}</li>
              <li>
                <a href={`tel:${BUSINESS.phone.replace(/\s/g, "")}`} className="hover:text-foreground transition-colors">
                  {BUSINESS.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${BUSINESS.email}`} className="hover:text-foreground transition-colors">
                  {BUSINESS.email}
                </a>
              </li>
            </ul>
            <Link href="/contact" className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-[color:var(--color-teal-500)] hover:text-[color:var(--color-teal-700)] transition-colors">
              Talk to a real person
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Hidden in light, revealed in dark */}
        <p className="dark-reveal hand hand-xl text-center mt-14 -rotate-1 text-[color:var(--color-teal-glow)]">
          even in the dark, we&apos;re still here.
        </p>

        {/* Bottom strip */}
        <div className="mt-12 pt-6 border-t border-border flex flex-col md:flex-row gap-3 items-center justify-between text-xs text-[color:var(--color-ink-faint)]">
          <p>&copy; {new Date().getFullYear()} {BUSINESS.legalName} &middot; ABN {BUSINESS.abn}</p>
          <div className="flex items-center gap-5">
            <Link href="/policies" className="hover:text-foreground">Policies</Link>
            <Link href="/terms" className="hover:text-foreground">Terms</Link>
            <Link href="/accessibility" className="hover:text-foreground">Accessibility</Link>
            <Link href="/policies/WL-POL-13-information-management.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-foreground">Privacy</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
