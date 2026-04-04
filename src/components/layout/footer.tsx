import Image from "next/image"
import Link from "next/link"
import { Mail, MapPin } from "lucide-react"
import { Separator } from "@/components/ui/separator"

export function Footer() {
  return (
    <footer className="mt-auto border-t border-border bg-muted/30">
      <div className="mx-auto max-w-6xl px-4 md:px-8 py-12">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
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
            <p className="text-sm text-muted-foreground leading-relaxed">
              NDIS Plan Management for Queensland participants.
              We handle the financial side so you can focus on your goals.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Home</Link></li>
              <li><Link href="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">About</Link></li>
              <li><Link href="/services" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Our Services</Link></li>
              <li><Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Contact</Link></li>
              <li><Link href="/policies" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Our Policies</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-4">Contact</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary shrink-0" />
                Queensland, Australia
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary shrink-0" />
                <a href="mailto:hello@waylightpm.com.au" className="hover:text-foreground transition-colors">
                  hello@waylightpm.com.au
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
            <p className="mt-4 text-xs text-muted-foreground">
              NDIS provider registration in progress.
            </p>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>Waylight Pty Ltd</p>
          <p>NDIS Plan Management | Queensland</p>
          <p>&copy; {new Date().getFullYear()} Waylight Pty Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
