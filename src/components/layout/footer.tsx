import Image from "next/image"
import Link from "next/link"
import { Mail, MapPin, Phone, ShieldCheck } from "lucide-react"
import { Separator } from "@/components/ui/separator"
import { BUSINESS } from "@/lib/constants"

export function Footer() {
  return (
    <footer className="mt-auto border-t border-border bg-muted/30">
      <div className="mx-auto max-w-6xl px-4 md:px-8 py-12">
        <div className="flex flex-wrap gap-8 [&>*]:min-w-[200px] [&>*]:flex-1 [&>*]:basis-[calc((50rem-100%)*999)]">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Image
                src="/logo.png"
                alt=""
                width={26}
                height={27}
                className="shrink-0"
              />
              <span className="text-lg font-semibold tracking-tight">Waylight</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-3">
              NDIS plan management for Queensland participants.
              We handle the financial side so you can focus on your goals.
            </p>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <ShieldCheck className="h-3.5 w-3.5 text-primary shrink-0" />
              <span>ABN {BUSINESS.abn}</span>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Home</Link></li>
              <li><Link href="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">About</Link></li>
              <li><Link href="/services" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Our Services</Link></li>
              <li><Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Contact</Link></li>
              <li><Link href="/policies" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Our Policies</Link></li>
              <li><Link href="/policies/WL-POL-13-information-management.pdf" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Terms of Use</Link></li>
              <li><Link href="/accessibility" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Accessibility</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-4">Contact</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary shrink-0" />
                {BUSINESS.location}
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary shrink-0" />
                <a href={`tel:${BUSINESS.phone.replace(/\s/g, "")}`} className="hover:text-foreground transition-colors">
                  {BUSINESS.phone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary shrink-0" />
                <a href={`mailto:${BUSINESS.email}`} className="hover:text-foreground transition-colors">
                  {BUSINESS.email}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-4">Portal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/portal" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Participant Portal
                </Link>
              </li>
            </ul>
            <p className="mt-4 text-xs text-muted-foreground border-l-2 border-accent/50 pl-2">
              Waylight is not yet a registered NDIS provider. Registration is in progress. We are accepting expressions of interest.
            </p>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>{BUSINESS.legalName} | ABN {BUSINESS.abn}</p>
          <p>NDIS Plan Management | Queensland, Australia</p>
          <p>&copy; {new Date().getFullYear()} {BUSINESS.legalName}</p>
        </div>
      </div>
    </footer>
  )
}
