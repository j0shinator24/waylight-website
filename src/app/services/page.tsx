import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { HeroBackground } from "@/components/hero-background"
import { BUSINESS } from "@/lib/constants"
import {
  FileText,
  BarChart3,
  Users,
  Clock,
  CheckCircle2,
  ArrowRight,
  Bell,
} from "lucide-react"

export const metadata: Metadata = {
  title: "NDIS Plan Management Services | Invoice Processing, Budget Tracking",
  description:
    "Everything your NDIS plan manager should handle. Invoice processing, budget tracking, provider payments, and claims management. Plus Waylight AI tools for providers. Queensland.",
}

const planServices = [
  {
    icon: FileText,
    title: "Invoice Processing & Payment",
    description:
      "We receive invoices from your providers, check them against the NDIS Price Arrangements and Price Limits, and process payment. Paid something out of pocket? Submit a reimbursement and we will process it. You choose whether to review invoices before we pay, or let us handle everything.",
    features: [
      "Provider invoice verification against NDIS price limits",
      "Timely payment to your providers",
      "Out-of-pocket reimbursement processing",
      "You choose: review invoices yourself or let us approve them",
    ],
  },
  {
    icon: BarChart3,
    title: "Budget Tracking & Reporting",
    description:
      "Know exactly where your NDIS funding stands at any time. We send you regular monthly statements with spending breakdowns by category, so there are no surprises at plan review.",
    features: [
      "Clear budget visibility",
      "Monthly statements with category breakdowns",
      "Plan utilisation insights",
      "Support for plan review preparation",
    ],
  },
  {
    icon: Bell,
    title: "Budget Alerts",
    description:
      "Your NDIS plan is designed to last a fixed period. We monitor your spending trajectory against that timeline and notify you and your providers when funding is being over or under-utilised, so you can adjust before it becomes a problem.",
    features: [
      "Spending trajectory analysis against plan timeline",
      "Early warning when categories are running ahead or behind",
      "Notifications to you and your relevant providers",
      "Helps avoid underspend at plan review",
    ],
  },
  {
    icon: Users,
    title: "Provider Choice & Flexibility",
    description:
      "Plan-managed participants can use both NDIS-registered and unregistered providers. This gives you access to a wider range of supports tailored to your needs.",
    features: [
      "Access to registered and unregistered providers",
      "Greater choice of support workers",
      "More flexibility in how supports are delivered",
      "No restriction to NDIA-managed provider panels",
    ],
  },
  {
    icon: Clock,
    title: "Claims & NDIS Portal Management",
    description:
      "We handle all claims through the NDIS portal on your behalf. Service bookings, payment requests, service agreements, plan queries. All managed for you.",
    features: [
      "Service booking and agreement management",
      "Payment request lodgement",
      "Portal query resolution",
      "Plan start-up assistance for new participants",
    ],
  },
]


const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is plan management?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A plan manager handles the financial side of your NDIS plan. We process invoices, pay your providers, track your budget, and manage claims through the NDIS portal. Think of it like having an accountant for your NDIS funding, fully covered by the NDIS.",
      },
    },
    {
      "@type": "Question",
      name: "Does plan management cost me anything?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Plan management is funded under its own budget line in your NDIS plan. It does not reduce your core, capital, or capacity building funding.",
      },
    },
    {
      "@type": "Question",
      name: "Can I use unregistered providers with plan management?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. One of the biggest benefits of plan management is access to both registered and unregistered NDIS providers. This gives you more choice over who delivers your supports.",
      },
    },
    {
      "@type": "Question",
      name: "How do I get plan management in my plan?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ask your Local Area Coordinator (LAC), support coordinator, or NDIA planner to include plan management at your next planning meeting. If you already have plan management, you will be able to switch to Waylight once our registration is confirmed.",
      },
    },
    {
      "@type": "Question",
      name: "How do I switch to Waylight from another plan manager?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Once our registration is confirmed, contact us and we will handle the transfer. There is no lock-in period with plan managers — you can switch at any point during your plan.",
      },
    },
    {
      "@type": "Question",
      name: "What happens if I overspend or underspend my plan?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We track your spending trajectory against your plan timeline and send you budget alerts if your funding is running ahead or behind schedule. This gives you time to adjust before it affects your plan review.",
      },
    },
    {
      "@type": "Question",
      name: "Is Waylight a registered NDIS provider?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Not yet. Our registration application with the NDIS Quality and Safeguards Commission is currently being processed. We are accepting expressions of interest and will contact you as soon as our registration is confirmed, expected Q3 2026.",
      },
    },
  ],
}

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-primary/5 to-background py-16 md:py-24">
        <HeroBackground />
        <div className="relative mx-auto max-w-6xl px-4 md:px-8">
          <div className="max-w-[60ch]">
            <Badge variant="secondary" className="mb-4">
              Plan Management and Provider Tools
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
              Everything your plan manager should handle
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Plan management for NDIS participants, plus software tools built
              for the providers who support them.
            </p>
            <p className="dark-reveal mt-4 text-4xl font-handwritten text-primary/60 -rotate-2">
              the fun part
            </p>
          </div>
        </div>
      </section>

      {/* Plan Management */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 md:px-8">
          <div className="mb-12">
            <Badge variant="outline" className="mb-3">
              For Participants
            </Badge>
            <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
              NDIS Plan Management
            </h2>
            <p className="mt-3 text-muted-foreground max-w-[60ch]">
              Plan management is funded under your NDIS plan at no cost to your
              other supports. It sits in its own budget category (CB Choice and
              Control) and does not reduce your core or capacity building funding.
            </p>
            <div className="mt-4 inline-flex items-center gap-2 rounded-lg bg-primary/5 border border-primary/15 px-4 py-2.5 text-sm">
              <span className="text-muted-foreground">Current NDIS rate:</span>
              <span className="font-semibold text-foreground">{BUSINESS.paplMonthly}/month</span>
              <span className="text-muted-foreground">per participant</span>
            </div>
            <p className="dark-reveal mt-4 text-4xl font-handwritten text-primary/50 rotate-1">
              this is what we actually do
            </p>
          </div>
          <div className="stack stack-xl">
            {planServices.map((service) => (
              <Card
                key={service.title}
                className="border-border/50 overflow-hidden transition-all duration-200 hover:border-primary/30 hover:shadow-md"
              >
                <CardContent className="p-6 md:p-8">
                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                      <service.icon className="h-7 w-7 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-3">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        {service.description}
                      </p>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {service.features.map((feature) => (
                          <li
                            key={feature}
                            className="flex items-start gap-2 text-sm text-muted-foreground"
                          >
                            <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How plan management works */}
      <section className="bg-muted/30 py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 md:px-8">
          <h2 className="text-2xl font-bold tracking-tight md:text-3xl mb-12 text-center">
            How plan management works
          </h2>
          <p className="dark-reveal text-4xl font-handwritten text-primary/50 text-center -rotate-1 -mt-4 mb-4">
            simple, right?
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                step: "1",
                title: "Sign up and choose providers",
                description:
                  "We start with a simple service agreement, then you choose the support workers, therapists, and services that work for you — registered or unregistered.",
              },
              {
                step: "2",
                title: "Providers invoice us",
                description:
                  "Your providers send their invoices directly to Waylight. We check everything and process payment.",
              },
              {
                step: "3",
                title: "You stay informed",
                description:
                  "We keep you updated on your budget, flag any issues, and make sure your plan runs smoothly.",
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-lg">
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inline CTA */}
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-6xl px-4 md:px-8 text-center">
          <p className="text-muted-foreground mb-4 max-w-[50ch] mx-auto">
            Ready to experience plan management with a personal touch?
          </p>
          <Link href="/contact">
            <Button size="lg">
              Ask us anything — no obligation
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
          <p className="dark-reveal mt-4 text-4xl font-handwritten text-primary/60 rotate-2">
            go on, say hello
          </p>
        </div>
      </section>

      {/* Waylight AI — Provider Tools teaser */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 md:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <Badge variant="outline" className="mb-3">
              Waylight AI — Coming Soon
            </Badge>
            <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
              AI tools for NDIS providers
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed max-w-[60ch] mx-auto">
              We are building AI-powered tools for NDIS providers: automated progress
              notes, shift rostering, compliance monitoring, and an instant NDIS
              knowledge assistant. Designed to save support workers hours of
              paperwork every shift.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Badge variant="secondary">NoteFlow — Progress Notes</Badge>
              <Badge variant="secondary">RosterIQ — Shift Rostering</Badge>
              <Badge variant="secondary">AuditShield — Compliance</Badge>
              <Badge variant="secondary">NDIS Butler — Instant Answers</Badge>
            </div>
            <p className="dark-reveal mt-4 text-4xl font-handwritten text-primary/50 -rotate-1">
              these are going to be good
            </p>
            <p className="mt-6 text-xs text-muted-foreground max-w-[50ch] mx-auto">
              Provider tools are in development. Features and availability may change before release.
            </p>
            <Link href="/waylight-ai">
              <Button variant="outline" size="lg" className="mt-6">
                Explore Waylight AI
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 md:px-8">
          <h2 className="text-2xl font-bold tracking-tight md:text-3xl mb-12 text-center">
            Frequently asked questions
          </h2>
          <p className="dark-reveal text-4xl font-handwritten text-primary/50 text-center rotate-1 -mt-4 mb-4">
            everyone asks these
          </p>
          <div className="max-w-[60ch] mx-auto stack stack-lg">
            {[
              {
                q: "What is plan management?",
                a: "A plan manager handles the financial side of your NDIS plan. We process invoices, pay your providers, track your budget, and manage claims through the NDIS portal. Think of it like having an accountant for your NDIS funding, fully covered by the NDIS.",
              },
              {
                q: "Does plan management cost me anything?",
                a: "No. Plan management is funded under its own budget line in your NDIS plan. It does not reduce your core, capital, or capacity building funding.",
              },
              {
                q: "Can I use unregistered providers with plan management?",
                a: "Yes. One of the biggest benefits of plan management is access to both registered and unregistered NDIS providers. This gives you more choice over who delivers your supports.",
              },
              {
                q: "How do I get plan management in my plan?",
                a: "Ask your Local Area Coordinator (LAC), support coordinator, or NDIA planner to include plan management at your next planning meeting. If you already have plan management, you will be able to switch to Waylight once our registration is confirmed.",
              },
              {
                q: "How do I switch to Waylight from another plan manager?",
                a: "Once our registration is confirmed, contact us and we will handle the transfer. There is no lock-in period with plan managers — you can switch at any point during your plan.",
              },
              {
                q: "What happens if I overspend or underspend my plan?",
                a: "We track your spending trajectory against your plan timeline and send you budget alerts if your funding is running ahead or behind schedule. This gives you time to adjust before it affects your plan review.",
              },
              {
                q: "Is Waylight a registered NDIS provider?",
                a: "Not yet. Our registration application with the NDIS Quality and Safeguards Commission is currently being processed. We are accepting expressions of interest and will contact you as soon as our registration is confirmed, expected Q3 2026.",
              },
            ].map((item) => (
              <details key={item.q} className="group border-b border-border pb-4">
                <summary className="flex cursor-pointer items-center justify-between text-base font-semibold py-2 list-none [&::-webkit-details-marker]:hidden">
                  {item.q}
                  <span className="ml-4 shrink-0 text-muted-foreground transition-transform duration-200 group-open:rotate-45">+</span>
                </summary>
                <p className="text-muted-foreground text-sm leading-relaxed pt-2 pb-1">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Split CTA */}
      <section className="bg-muted/30 py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 md:px-8">
          <p className="dark-reveal text-5xl font-handwritten text-primary/50 text-center -rotate-2 mb-8">
            pick your path
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div className="text-center md:text-left">
              <h3 className="text-xl font-semibold mb-3">NDIS Participant?</h3>
              <p className="text-muted-foreground mb-6">
                Every situation is different. Get in touch and we will walk you
                through how plan management works for your specific plan.
              </p>
              <Link href="/contact">
                <Button size="lg">
                  Ask about your plan
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-xl font-semibold mb-3">NDIS Provider?</h3>
              <p className="text-muted-foreground mb-6">
                Running compliance, rostering, and documentation across
                spreadsheets and paper forms? Let us show you what we are
                building.
              </p>
              <Link href="/contact">
                <Button variant="outline" size="lg">
                  See what we are building
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
