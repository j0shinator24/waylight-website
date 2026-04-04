import type { Metadata } from "next"
import { Card, CardContent } from "@/components/ui/card"
import {
  FileText,
  ShieldCheck,
  AlertTriangle,
  Scale,
  Lock,
  RefreshCw,
  DollarSign,
  Search,
  Handshake,
  Building2,
  ClipboardCheck,
  UserCheck,
  HeartPulse,
  Briefcase,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Our Policies",
  description:
    "Waylight Plan Management policies including complaints management, code of conduct, privacy, incident management, and more.",
}

const policies = [
  {
    icon: FileText,
    title: "Complaints Management",
    description:
      "How to raise a complaint, how we investigate, and what to expect. If you are unhappy with any aspect of our service, we want to hear about it.",
    href: "/policies/WL-POL-08-complaints-management.pdf",
  },
  {
    icon: ShieldCheck,
    title: "Code of Conduct",
    description:
      "The standards we hold ourselves to when working with NDIS participants. Covers respect, privacy, safety, and professional behaviour.",
    href: "/policies/WL-POL-14-code-of-conduct.pdf",
  },
  {
    icon: Lock,
    title: "Information Management & Privacy",
    description:
      "How we collect, store, and protect your personal information. Your data is handled in line with the Australian Privacy Principles and NDIS requirements.",
    href: "/policies/WL-POL-13-information-management.pdf",
  },
  {
    icon: AlertTriangle,
    title: "Incident Management",
    description:
      "How we identify, report, and respond to incidents. Covers reporting obligations to the NDIS Quality and Safeguards Commission.",
    href: "/policies/WL-POL-07-incident-management.pdf",
  },
  {
    icon: Scale,
    title: "Conflict of Interest",
    description:
      "How we identify and manage conflicts of interest to make sure our decisions always put participants first.",
    href: "/policies/WL-POL-03-conflict-of-interest.pdf",
  },
  {
    icon: RefreshCw,
    title: "Continuity of Supports",
    description:
      "What happens if our service is disrupted. How we make sure your supports continue and your providers keep getting paid.",
    href: "/policies/WL-POL-12-continuity-of-supports.pdf",
  },
]

export default function PoliciesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-primary/5 to-background py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 md:px-8">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
              Our Policies
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Transparency is part of how we work. These policies outline how
              Waylight operates, how we protect your information, and what to do
              if something goes wrong.
            </p>
          </div>
        </div>
      </section>

      {/* Policies */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 md:px-8">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {policies.map((policy) => (
              <a
                key={policy.title}
                href={policy.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block group"
              >
                <Card className="border-border/50 h-full transition-colors group-hover:border-primary/30">
                  <CardContent className="pt-6">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                      <policy.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                      {policy.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {policy.description}
                    </p>
                    <p className="mt-3 text-xs text-muted-foreground">
                      View policy (PDF)
                    </p>
                  </CardContent>
                </Card>
              </a>
            ))}
          </div>

          <div className="mt-12 max-w-2xl">
            <p className="text-sm text-muted-foreground leading-relaxed">
              Additional policies covering financial management, governance, risk
              management, and human resources are maintained internally and are
              available on request. If you need a copy of any policy not listed
              here, please contact us.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
