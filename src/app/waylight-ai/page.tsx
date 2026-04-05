import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { HeroBackground } from "@/components/hero-background"
import { BUSINESS } from "@/lib/constants"
import {
  ArrowRight,
  Mail,
  MessageSquare,
  Receipt,
  FileCheck,
  Wrench,
  ClipboardList,
  CalendarClock,
  ShieldAlert,
  BookOpen,
  CheckCircle2,
  Lightbulb,
  Stethoscope,
  HardHat,
  Users,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Waylight AI | Business Automation & AI Workflow Tools",
  description:
    "AI-powered automation for businesses drowning in repetitive admin. Email, invoices, scheduling, compliance, documentation — we build the workflows that free your team. Plus purpose-built NDIS provider tools.",
}

const broadTools = [
  {
    icon: Mail,
    title: "Email Automation",
    description:
      "Your inbox should not be a full-time job. We build workflows that triage incoming email, draft and send responses, trigger follow-up sequences, and route messages to the right person — so your team spends less time in their inbox and more time on actual work.",
    features: [
      "Smart inbox triage and categorisation",
      "Auto-drafted replies based on your tone and rules",
      "Follow-up sequences that fire on schedule",
      "Routing to the right team member, automatically",
    ],
  },
  {
    icon: MessageSquare,
    title: "Social Media & DM Management",
    description:
      "Leads slip through when DMs sit unread for hours. We connect your social channels to workflows that auto-respond, route enquiries, and schedule content — so you capture every opportunity without living on your phone.",
    features: [
      "Auto-respond to DMs with context-aware replies",
      "Route enquiries to the right person instantly",
      "Schedule and queue content across platforms",
      "Never miss a lead buried in your inbox",
    ],
  },
  {
    icon: Receipt,
    title: "Invoice & Payment Funneling",
    description:
      "Invoices arrive from email, portals, uploads, and sometimes photos of paper. We build funnels that capture them all, validate line items, route for approval, and process payment. No more chasing paper or double-handling data entry.",
    features: [
      "Capture invoices from any source — email, portal, upload",
      "Auto-validate against pricing rules and budgets",
      "Approval routing with escalation logic",
      "Payment processing and reconciliation",
    ],
  },
  {
    icon: FileCheck,
    title: "Document & Compliance Automation",
    description:
      "Reports, progress notes, compliance docs — the stuff that eats hours every week. We pull data from your existing systems, structure it into the formats you need, and generate outputs that are audit-ready without the manual grind.",
    features: [
      "Auto-generate reports from structured data",
      "Pull from multiple sources into one document",
      "Compliance-formatted outputs ready for audit",
      "Version tracking and change logs built in",
    ],
  },
  {
    icon: Wrench,
    title: "Custom Workflows",
    description:
      "If you can describe it, we can probably automate it. Connect your existing tools, trigger actions based on events, and eliminate the repetitive stuff your team does every day. We scope it, build it, and hand it over.",
    features: [
      "Connect the tools you already use",
      "Event-driven triggers and conditional logic",
      "Multi-step workflows across platforms",
      "Built to your specs, not a template",
    ],
  },
]

const ndisTools = [
  {
    icon: ClipboardList,
    name: "NoteFlow",
    title: "Progress Notes Automation",
    description:
      "Voice-to-text progress notes that meet NDIS Practice Standards. Record a shift summary on your phone, and NoteFlow structures it into a compliant progress note with incident flags, goal tracking, and participant context — ready to file.",
    features: [
      "Voice-to-text with NDIS-compliant structuring",
      "Incident report auto-generation",
      "Goal tracking linked to participant plans",
      "Shift handover summaries",
    ],
  },
  {
    icon: CalendarClock,
    name: "RosterIQ",
    title: "Shift Rostering",
    description:
      "Rostering that understands SCHADS Award rules, participant preferences, and worker availability. RosterIQ matches the right worker to the right participant, flags gaps before they become problems, and keeps you compliant without the spreadsheet gymnastics.",
    features: [
      "SCHADS Award compliance built in",
      "Participant-worker preference matching",
      "Gap alerts and shift coverage warnings",
      "Overtime and penalty rate tracking",
    ],
  },
  {
    icon: ShieldAlert,
    name: "AuditShield",
    title: "Compliance Monitoring",
    description:
      "Real-time monitoring against NDIS price limits, practice standards, and regulatory changes. AuditShield flags issues before your auditor does — so you walk into reviews with confidence, not dread.",
    features: [
      "Real-time NDIS price limit validation",
      "Audit-ready document generation",
      "Regulatory change alerts and impact summaries",
      "Practice Standards compliance tracking",
    ],
  },
  {
    icon: BookOpen,
    name: "NDIS Butler",
    title: "Instant NDIS Knowledge",
    description:
      "Ask any question about NDIS pricing, legislation, or practice standards and get a sourced answer in seconds. No more digging through PDFs or calling the Commission. NDIS Butler knows the rules so you do not have to memorise them.",
    features: [
      "Natural language questions, sourced answers",
      "Covers pricing arrangements, practice standards, legislation",
      "Always up to date with latest NDIS changes",
      "Citation links to source documents",
    ],
  },
]

const customExamples = [
  {
    icon: Stethoscope,
    text: "A physio clinic that needed appointment reminders synced with their booking system and auto-rescheduling for no-shows.",
  },
  {
    icon: Users,
    text: "A support coordination business that wanted client progress summaries auto-generated from case notes across three different platforms.",
  },
  {
    icon: HardHat,
    text: "A trades business that needed quotes auto-generated from job site photos and descriptions, formatted and sent same-day.",
  },
]

export default function WaylightAiPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/8 via-background to-accent/5 py-28 md:py-40">
        <HeroBackground />
        <div className="relative mx-auto max-w-6xl px-4 md:px-8">
          <div className="max-w-[65ch]">
            <Badge variant="secondary" className="mb-4">
              Waylight AI
            </Badge>
            <h1 className="text-5xl font-bold tracking-tight text-foreground md:text-6xl lg:text-7xl leading-[1.1]">
              Your business runs on autopilot.{" "}
              <span className="text-primary">You run your business.</span>
            </h1>
            <p className="mt-8 text-xl text-muted-foreground leading-relaxed max-w-[60ch]">
              AI-powered automation for businesses drowning in repetitive admin.
              Email, invoices, scheduling, compliance, documentation — we build
              the workflows that free your team to do the work that actually
              matters.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <Button size="lg" className="w-full sm:w-auto text-base px-8 py-6">
                  Tell us what you need
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="#ndis-tools">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto text-base px-8 py-6"
                >
                  See our NDIS tools
                </Button>
              </Link>
            </div>
            <p className="dark-reveal mt-6 text-4xl font-handwritten text-primary/60 -rotate-2">
              less admin, more life
            </p>
          </div>
        </div>
      </section>

      {/* Broad Business AI Tools */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 md:px-8">
          <div className="max-w-[60ch] mb-16">
            <p className="text-sm font-medium tracking-widest uppercase text-primary mb-3">
              What we build
            </p>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
              The stuff that eats your week? Automated.
            </h2>
            <p className="mt-4 text-muted-foreground text-lg max-w-[60ch]">
              Every business has processes that should take minutes but somehow
              eat hours. We find them, scope a solution, and build workflows
              that handle the repetitive parts while you focus on the work
              your team was actually hired to do.
            </p>
            <p className="dark-reveal mt-4 text-4xl font-handwritten text-primary/60 rotate-1">
              are you a property manager?
            </p>
          </div>

          <div className="stack stack-xl">
            {broadTools.map((tool) => (
              <Card
                key={tool.title}
                className="border-border/50 overflow-hidden transition-all duration-200 hover:border-primary/30 hover:shadow-md"
              >
                <CardContent className="p-6 md:p-8">
                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                      <tool.icon className="h-7 w-7 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-3">
                        {tool.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        {tool.description}
                      </p>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {tool.features.map((feature) => (
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
          <p className="dark-reveal mt-8 text-4xl font-handwritten text-primary/50 rotate-2">
            imagine what you would do with all that time back
          </p>
          <p className="dark-reveal mt-2 text-4xl font-handwritten text-primary/40 -rotate-1 ml-16">
            perhaps a medical clinic?
          </p>
        </div>
      </section>

      {/* Industry whispers */}
      <div className="mx-auto max-w-6xl px-4 md:px-8 py-2 flex flex-wrap gap-x-12 gap-y-1 justify-center">
        <p className="dark-reveal text-4xl font-handwritten text-primary/40 rotate-2">
          running a trades business?
        </p>
        <p className="dark-reveal text-4xl font-handwritten text-primary/35 -rotate-1">
          a law firm?
        </p>
        <p className="dark-reveal text-4xl font-handwritten text-primary/45 rotate-1">
          maybe a gym?
        </p>
      </div>

      {/* NDIS-Specific Tools */}
      <section id="ndis-tools" className="bg-muted/30 py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 md:px-8">
          <div className="max-w-[60ch] mb-16">
            <Badge variant="outline" className="mb-4">
              Built for NDIS Providers
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
              Purpose-built for the NDIS sector
            </h2>
            <p className="mt-4 text-muted-foreground text-lg max-w-[60ch]">
              We work in NDIS every day. These tools are built from the ground
              up for providers who are tired of compliance spreadsheets and
              paper-based shift notes. Not adapted from generic software —
              designed for how NDIS actually works.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {ndisTools.map((tool) => (
              <Card
                key={tool.name}
                className="border-border/50 overflow-hidden transition-all duration-200 hover:border-primary/30 hover:shadow-md"
              >
                <CardContent className="p-6 md:p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                      <tool.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="text-lg font-semibold">{tool.name}</h3>
                        <Badge variant="secondary" className="text-xs">
                          Coming Soon
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {tool.title}
                      </p>
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-4 text-sm">
                    {tool.description}
                  </p>
                  <ul className="space-y-1.5">
                    {tool.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
          <p className="dark-reveal mt-8 text-4xl font-handwritten text-primary/50 -rotate-1">
            built by people who actually write shift notes
          </p>
          <p className="mt-6 text-xs text-muted-foreground text-center max-w-[50ch] mx-auto">
            NDIS tools are in development. Features and availability may change
            before release.
          </p>
        </div>
      </section>

      {/* Custom Solutions */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 md:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <Lightbulb className="h-10 w-10 text-primary mx-auto mb-4" />
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
                Got a problem that won&apos;t fit in a box?
              </h2>
              <p className="mt-6 text-muted-foreground text-lg leading-relaxed max-w-[60ch] mx-auto">
                Every business has that one process everyone hates. The thing
                that takes three hours and should take three minutes. Tell us
                about it. We will scope a solution, show you what is possible,
                and build it if it makes sense. No sales pitch, no commitment —
                just a conversation about what AI can actually do for your
                specific situation.
              </p>
              <p className="dark-reveal mt-3 text-4xl font-handwritten text-primary/50 -rotate-2">
                a restaurant? a school? a real estate agency?
              </p>
            </div>

            <div className="stack stack-lg mb-12">
              {customExamples.map((example) => (
                <div key={example.text} className="flex gap-4 items-start">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <example.icon className="h-5 w-5 text-primary" />
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {example.text}
                  </p>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Link href="/contact">
                <Button size="lg" className="text-base px-10 py-6">
                  Tell us what&apos;s slowing you down
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <p className="dark-reveal mt-4 text-4xl font-handwritten text-primary/50 -rotate-2">
                do you guys need an app?
              </p>
              <p className="dark-reveal mt-2 text-4xl font-handwritten text-primary/60 rotate-1">
                we literally built this page with AI
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-primary/5 to-accent/5 py-24 md:py-32">
        <HeroBackground />
        <div className="relative mx-auto max-w-6xl px-4 md:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
            Whether it&apos;s one workflow or a full overhaul,{" "}
            <span className="text-primary">start with a conversation</span>
          </h2>
          <p className="mt-6 text-muted-foreground text-lg max-w-[55ch] mx-auto leading-relaxed">
            Describe the problem. We will tell you what is possible, what it
            would take, and whether it makes sense. No obligation, no pitch
            deck — just a straight answer.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="text-base px-10 py-6">
                Start a conversation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/services">
              <Button variant="outline" size="lg" className="text-base px-10 py-6">
                Back to plan management
              </Button>
            </Link>
          </div>
          <p className="mt-6 text-xs text-muted-foreground max-w-[55ch] mx-auto">
            NDIS-specific tools are in development. Broad business automation
            services are available now. {BUSINESS.legalName} | ABN{" "}
            {BUSINESS.abn}
          </p>
          <p className="dark-reveal mt-4 text-5xl font-handwritten text-primary/60 -rotate-2">
            still here? let&apos;s talk.
          </p>
        </div>
      </section>
    </>
  )
}
