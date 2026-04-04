import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { FeatureCard } from "@/components/feature-card"
import { Badge } from "@/components/ui/badge"
import {
  FileText,
  BarChart3,
  Users,
  ArrowRight,
  Mic,
  Calendar,
  ShieldCheck,
  BookOpen,
  Bell,
  CheckCircle2,
  Phone,
  Clock,
} from "lucide-react"

export const metadata: Metadata = {
  title: "NDIS Plan Management | Personal Service from a Dedicated Plan Manager",
  description:
    "Waylight handles the financial side of your NDIS plan. One dedicated plan manager, direct communication, no call centres. Queensland-based, funded by the NDIS at no cost to your other supports.",
}

export default function HomePage() {
  return (
    <>
      {/* Hero — big, bold, PayPaPlane-inspired */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/8 via-background to-accent/5 py-28 md:py-40">
        <div className="mx-auto max-w-6xl px-4 md:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-medium tracking-widest uppercase text-primary mb-4">
              NDIS Plan Management
            </p>
            <h1 className="text-5xl font-bold tracking-tight text-foreground md:text-6xl lg:text-7xl leading-[1.1]">
              Your plan,{" "}
              <span className="text-primary">managed personally</span>
            </h1>
            <p className="mt-8 text-xl text-muted-foreground leading-relaxed max-w-2xl">
              One dedicated plan manager who knows your name, answers your calls,
              and handles every invoice. No call centres. No ticket systems.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row items-start gap-3 text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                Funded by your NDIS plan
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                No cost to your other supports
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                Queensland based
              </span>
            </div>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <Button size="lg" className="w-full sm:w-auto text-base px-8 py-6">
                  Get in touch
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/services">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto text-base px-8 py-6"
                >
                  How it works
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Social proof — trust signal early */}
      <section className="border-y border-border/50 bg-muted/20 py-10">
        <div className="mx-auto max-w-6xl px-4 md:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-3xl font-bold text-foreground">2 days</p>
              <p className="text-sm text-muted-foreground mt-1">Onboarding turnaround</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-foreground">1 person</p>
              <p className="text-sm text-muted-foreground mt-1">Your dedicated plan manager</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-foreground">0 call centres</p>
              <p className="text-sm text-muted-foreground mt-1">Direct communication, always</p>
            </div>
          </div>
        </div>
      </section>

      {/* What we do — progressive reveal with stronger hierarchy */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-4 md:px-8">
          <div className="max-w-2xl mb-16">
            <p className="text-sm font-medium tracking-widest uppercase text-primary mb-3">
              What we handle
            </p>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
              Plan management that puts you first
            </h2>
            <p className="mt-4 text-muted-foreground text-lg">
              We take on the financial admin so you can focus on your goals,
              your supports, your life.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <FeatureCard
              icon={FileText}
              title="Invoice Processing"
              description="We process provider invoices, handle reimbursements, and pay claims against your NDIS plan. Accurate and on time."
            />
            <FeatureCard
              icon={BarChart3}
              title="Budget Tracking"
              description="Monthly statements with category breakdowns. Clear visibility of your plan balance so you always know where you stand."
            />
            <FeatureCard
              icon={Bell}
              title="Budget Alerts"
              description="We track your spending trajectory and notify you and your providers if funding is running ahead or behind schedule."
            />
            <FeatureCard
              icon={Users}
              title="Provider Choice"
              description="With plan management, you can use both registered and unregistered providers, giving you more choice and flexibility."
            />
          </div>
        </div>
      </section>

      {/* For Support Coordinators — alternating layout */}
      <section className="bg-muted/30 py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge variant="outline" className="mb-4">
                For Support Coordinators
              </Badge>
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                A plan manager you can actually reach
              </h2>
              <p className="mt-4 text-muted-foreground text-lg leading-relaxed">
                When you refer a participant to Waylight, you get a direct line to
                their plan manager. No call centre, no ticket system, no chasing.
              </p>
              <div className="mt-8">
                <Link href="/contact?role=sc">
                  <Button size="lg">
                    Refer a participant
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <Clock className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold mb-1">Fast onboarding</p>
                  <p className="text-sm text-muted-foreground">
                    Participant set up within 2 business days of referral.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <BarChart3 className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold mb-1">You stay informed</p>
                  <p className="text-sm text-muted-foreground">
                    Budget updates and claims progress shared with you directly.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold mb-1">One point of contact</p>
                  <p className="text-sm text-muted-foreground">
                    Same plan manager every time. You know who to call.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* For Families & Carers — reversed alternating layout */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 space-y-6">
              <div className="flex gap-4 items-start">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <FileText className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold mb-1">Monthly statements</p>
                  <p className="text-sm text-muted-foreground">
                    Clear breakdowns of spending by category, sent to you and the participant.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold mb-1">Direct access</p>
                  <p className="text-sm text-muted-foreground">
                    Call, email, or message. You talk to the same person every time.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <BarChart3 className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold mb-1">Plan review support</p>
                  <p className="text-sm text-muted-foreground">
                    Before a plan review, we prepare a funding summary so you know exactly what was used and what to request.
                  </p>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <Badge variant="outline" className="mb-4">For Families &amp; Carers</Badge>
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                You will always know where the funding stands
              </h2>
              <p className="mt-4 text-muted-foreground text-lg leading-relaxed">
                If you help manage a family member&apos;s NDIS plan, you need a plan manager
                who keeps you in the loop. Waylight sends monthly statements, answers your
                questions directly, and makes sure you are never left guessing.
              </p>
              <div className="mt-8">
                <Link href="/contact?role=family">
                  <Button size="lg">
                    Talk to us about your family member&apos;s plan
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Provider Tools — visual separation */}
      <section className="bg-muted/30 py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-4 md:px-8">
          <div className="max-w-2xl mb-16">
            <Badge variant="outline" className="mb-4">
              For Providers
            </Badge>
            <p className="text-sm font-medium tracking-widest uppercase text-primary mb-3">
              Coming Soon
            </p>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
              Your staff deserve better tools
            </h2>
            <p className="mt-4 text-muted-foreground text-lg">
              Support workers lose hours to paperwork. Managers juggle
              spreadsheets. Compliance officers scramble before audits. We are
              building the tools to fix that.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <FeatureCard
              icon={Mic}
              title="NoteFlow"
              description="Support workers talk through their shift. NoteFlow turns it into structured, NDIS-compliant progress notes. Designed to save 60-90 minutes per shift."
            />
            <FeatureCard
              icon={Calendar}
              title="RosterIQ"
              description="Rostering that handles SCHADS compliance, participant matching, and gap alerts automatically. Your coordinator stops fighting spreadsheets."
            />
            <FeatureCard
              icon={ShieldCheck}
              title="AuditShield"
              description="Continuous compliance monitoring. Validates invoices against current PAPL rates in real time. Flags issues before your auditor finds them."
            />
            <FeatureCard
              icon={BookOpen}
              title="NDIS Butler"
              description="Your staff ask a question about NDIS pricing, legislation, or practice standards. They get an accurate answer in seconds."
            />
          </div>

          <div className="mt-12">
            <Link href="/services">
              <Button variant="outline" size="lg">
                See all provider tools
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Built by — credibility section */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-4 md:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Built by someone who gets it
            </h2>
            <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
              Waylight was built by a practising NDIS support worker who saw the
              problems from the inside: slow plan managers, lost invoices, no
              transparency. We built what we wished existed.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA — strong close */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-primary/5 to-accent/5 py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-4 md:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
            Be one of our first participants
          </h2>
          <p className="mt-6 text-muted-foreground text-lg max-w-xl mx-auto leading-relaxed">
            We are deliberately starting small so every participant gets
            dedicated, personal plan management. Get in early while caseloads
            are low.
          </p>
          <Link href="/contact">
            <Button size="lg" className="mt-10 text-base px-10 py-6">
              Contact us today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </>
  )
}
