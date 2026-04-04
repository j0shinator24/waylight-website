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
    icon: DollarSign,
    title: "Financial Management",
    description:
      "How Waylight manages NDIS funds, processes claims, and maintains financial records. Covers budget tracking, reconciliation, and reporting.",
    href: "/policies/WL-POL-01-financial-management.pdf",
  },
  {
    icon: Search,
    title: "Fraud Prevention",
    description:
      "Controls and processes we use to prevent, detect, and respond to fraud related to NDIS funding.",
    href: "/policies/WL-POL-02-fraud-prevention.pdf",
  },
  {
    icon: Scale,
    title: "Conflict of Interest",
    description:
      "How we identify and manage conflicts of interest to make sure our decisions always put participants first.",
    href: "/policies/WL-POL-03-conflict-of-interest.pdf",
  },
  {
    icon: Handshake,
    title: "Participant Money & Property",
    description:
      "Safeguards for participant funds and property. Covers handling, separation of funds, and accountability.",
    href: "/policies/WL-POL-04-participant-money-property.pdf",
  },
  {
    icon: FileText,
    title: "Service Agreement",
    description:
      "The framework for participant agreements, including scope of service, consent, and termination.",
    href: "/policies/WL-POL-05-service-agreement.pdf",
  },
  {
    icon: Building2,
    title: "Governance",
    description:
      "How Waylight is governed, including decision-making, accountability, and organisational oversight.",
    href: "/policies/WL-POL-06-governance.pdf",
  },
  {
    icon: AlertTriangle,
    title: "Incident Management",
    description:
      "How we identify, report, and respond to incidents. Covers reporting obligations to the NDIS Quality and Safeguards Commission.",
    href: "/policies/WL-POL-07-incident-management.pdf",
  },
  {
    icon: FileText,
    title: "Complaints Management",
    description:
      "How to raise a complaint, how we investigate, and what to expect. If you are unhappy with any aspect of our service, we want to hear about it.",
    href: "/policies/WL-POL-08-complaints-management.pdf",
  },
  {
    icon: ClipboardCheck,
    title: "Risk Management & WHS",
    description:
      "How we identify, assess, and manage risks to participants and the business, including workplace health and safety.",
    href: "/policies/WL-POL-09-risk-management-whs.pdf",
  },
  {
    icon: Briefcase,
    title: "HR Management",
    description:
      "How Waylight manages workforce arrangements, including the contractor-accountant model and performance oversight.",
    href: "/policies/WL-POL-10-hr-management.pdf",
  },
  {
    icon: UserCheck,
    title: "Worker Screening & Induction",
    description:
      "Requirements for NDIS Worker Screening Checks, induction processes, and ongoing training obligations.",
    href: "/policies/WL-POL-11-worker-screening-induction.pdf",
  },
  {
    icon: RefreshCw,
    title: "Continuity of Supports",
    description:
      "What happens if our service is disrupted. How we make sure your supports continue and your providers keep getting paid.",
    href: "/policies/WL-POL-12-continuity-of-supports.pdf",
  },
  {
    icon: Lock,
    title: "Information Management & Privacy",
    description:
      "How we collect, store, and protect your personal information. Your data is handled in line with the Australian Privacy Principles and NDIS requirements.",
    href: "/policies/WL-POL-13-information-management.pdf",
  },
  {
    icon: ShieldCheck,
    title: "Code of Conduct",
    description:
      "The standards we hold ourselves to when working with NDIS participants. Covers respect, privacy, safety, and professional behaviour.",
    href: "/policies/WL-POL-14-code-of-conduct.pdf",
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
              All 14 NDIS Practice Standards-aligned policies are published
              above. If you need a policy in an alternative format, please
              contact us.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
