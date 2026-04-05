import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { FeatureCard } from "@/components/feature-card"
import { HeroBackground } from "@/components/hero-background"
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
  X,
} from "lucide-react"

export const metadata: Metadata = {
  title: "NDIS Plan Management | One Dedicated Plan Manager, No Call Centres",
  description:
    "Waylight handles the financial side of your NDIS plan. One dedicated plan manager, direct communication, no call centres. Queensland-based. Funded by the NDIS at no cost to your other supports.",
}

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/8 via-background to-accent/5 py-28 md:py-40">
        <HeroBackground />
        <div className="relative mx-auto max-w-6xl px-4 md:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-medium tracking-widest uppercase text-primary mb-4">
              NDIS Plan Management - Queensland
            </p>
            <h1 className="text-5xl font-bold tracking-tight text-foreground md:text-6xl lg:text-7xl leading-[1.1]">
              Your plan,{" "}
              <span className="text-primary">managed personally</span>
            </h1>
            <p className="mt-8 text-xl text-muted-foreground leading-relaxed max-w-[60ch]">
              One dedicated plan manager who knows your name, answers your calls,
              and handles every invoice. No call centres. No ticket systems.
              Just direct, personal service.
            </p>
            <p className="mt-4 text-base text-muted-foreground/80 leading-relaxed max-w-[55ch] border-l-2 border-primary/30 pl-4">
              Dealing with a plan manager who never picks up is exhausting.
              Waylight gives you one person who handles everything, so you
              stop chasing invoices and start focusing on your goals.
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

      {/* Stats bar */}
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

      {/* What we handle */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-4 md:px-8">
          <div className="max-w-2xl mb-16">
            <p className="text-sm font-medium tracking-widest uppercase text-primary mb-3">
              What we handle
            </p>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
              The financial admin, handled for you
            </h2>
            <p className="mt-4 text-muted-foreground text-lg max-w-[60ch]">
              We take on invoices, budgets, claims, and provider payments so
              you can focus on your goals, your supports, and your life.
            </p>
          </div>

          <div className="flex flex-wrap gap-6 [&>*]:min-w-[250px] [&>*]:flex-1 [&>*]:basis-[calc((30rem-100%)*999)]">
            <FeatureCard
              icon={FileText}
              title="Invoice Processing"
              description="We receive provider invoices, verify them against current NDIS rates, and process payment. Reimbursements handled the same way."
            />
            <FeatureCard
              icon={BarChart3}
              title="Budget Tracking"
              description="Monthly statements with spending breakdowns by category. You always know where your plan balance stands."
            />
            <FeatureCard
              icon={Bell}
              title="Budget Alerts"
              description="We track your spending against your plan timeline and flag when funding is running ahead or behind schedule."
            />
            <FeatureCard
              icon={Users}
              title="Provider Choice"
              description="Plan-managed participants can use both registered and unregistered providers. More choice, more flexibility."
            />
          </div>
        </div>
      </section>

      {/* Comparison table: Plan-managed vs Self-managed vs NDIA-managed */}
      <section className="bg-muted/30 py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-4 md:px-8">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Why plan management?
            </h2>
            <p className="mt-4 text-muted-foreground text-lg max-w-[60ch]">
              There are three ways to manage NDIS funding. Here is how they compare.
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr>
                  <th scope="col" className="text-left p-4 font-medium text-muted-foreground border-b border-border">&nbsp;</th>
                  <th scope="col" className="p-4 font-semibold border-b border-border bg-primary/5 text-primary rounded-t-lg">Plan-Managed</th>
                  <th scope="col" className="p-4 font-semibold text-muted-foreground border-b border-border">Self-Managed</th>
                  <th scope="col" className="p-4 font-semibold text-muted-foreground border-b border-border">NDIA-Managed</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: "Use unregistered providers", plan: true, self: true, ndia: false },
                  { feature: "Someone else handles invoices", plan: true, self: false, ndia: true },
                  { feature: "You choose your own providers", plan: true, self: true, ndia: false },
                  { feature: "Monthly budget reporting", plan: true, self: false, ndia: false },
                  { feature: "No financial admin", plan: true, self: false, ndia: true },
                  { feature: "Funded separately (no cost to supports)", plan: true, self: false, ndia: true },
                  { feature: "Personal plan manager who knows you", plan: true, self: false, ndia: false },
                ].map((row) => (
                  <tr key={row.feature} className="border-b border-border/50">
                    <th scope="row" className="p-4 text-foreground font-normal text-left">{row.feature}</th>
                    <td className="p-4 text-center bg-primary/5">
                      {row.plan ? <CheckCircle2 className="h-5 w-5 text-primary mx-auto" aria-label="Yes" /> : <X className="h-5 w-5 text-muted-foreground/40 mx-auto" aria-label="No" />}
                    </td>
                    <td className="p-4 text-center">
                      {row.self ? <CheckCircle2 className="h-5 w-5 text-muted-foreground/60 mx-auto" aria-label="Yes" /> : <X className="h-5 w-5 text-muted-foreground/40 mx-auto" aria-label="No" />}
                    </td>
                    <td className="p-4 text-center">
                      {row.ndia ? <CheckCircle2 className="h-5 w-5 text-muted-foreground/60 mx-auto" aria-label="Yes" /> : <X className="h-5 w-5 text-muted-foreground/40 mx-auto" aria-label="No" />}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-center text-xs text-muted-foreground mt-6">
            Plan management is funded under its own NDIS budget category (CB Choice and Control). It does not reduce your core or capacity building funding.
          </p>
        </div>
      </section>

      {/* For Support Coordinators */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-4 md:px-8">
          <div className="flex flex-wrap gap-16 items-center">
            <div className="flex-[1_25rem]">
              <Badge variant="outline" className="mb-4">
                For Support Coordinators
              </Badge>
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                A plan manager you can actually reach
              </h2>
              <p className="mt-4 text-muted-foreground text-lg leading-relaxed max-w-[60ch]">
                When you refer a participant to Waylight, you get a direct line to
                their plan manager. No call centre queues, no ticket numbers, no
                chasing emails that go unanswered.
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
            <div className="flex-[999_0_0] min-w-[50%] stack stack-lg">
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
                    Same plan manager for every conversation. You always know who to call.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* For Families and Carers */}
      <section className="bg-muted/30 py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-4 md:px-8">
          <div className="flex flex-wrap gap-16 items-center">
            <div className="order-2 lg:order-1 flex-[999_0_0] min-w-[50%] stack stack-lg">
              <div className="flex gap-4 items-start">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <FileText className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold mb-1">Monthly statements</p>
                  <p className="text-sm text-muted-foreground">
                    Spending breakdowns by category, sent to you and the participant each month.
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
                    Call, email, or message your plan manager directly. Same person every time.
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
                    Before a plan review, we prepare a funding summary so you know exactly what was used and what to request next.
                  </p>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2 flex-[1_25rem]">
              <Badge variant="outline" className="mb-4">For Families and Carers</Badge>
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                You will always know where the funding stands
              </h2>
              <p className="mt-4 text-muted-foreground text-lg leading-relaxed max-w-[60ch]">
                If you help manage a family member&apos;s NDIS plan, you need a plan
                manager who keeps you in the loop. Waylight sends monthly statements,
                answers your questions directly, and makes sure you never have to guess.
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

      {/* Provider Tools */}
      <section className="py-24 md:py-32">
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
            <p className="mt-4 text-muted-foreground text-lg max-w-[60ch]">
              Support workers lose hours to paperwork. Managers juggle
              spreadsheets. Compliance officers scramble before audits. We are
              building the tools to fix that.
            </p>
          </div>

          <div className="flex flex-wrap gap-6 [&>*]:min-w-[250px] [&>*]:flex-1 [&>*]:basis-[calc((30rem-100%)*999)]">
            <FeatureCard
              icon={Mic}
              title="NoteFlow"
              description="Talk through a shift summary. Get structured, NDIS-compliant progress notes back. Designed to save 60 to 90 minutes of documentation per shift."
            />
            <FeatureCard
              icon={Calendar}
              title="RosterIQ"
              description="Rostering that handles SCHADS compliance, participant matching, and gap alerts automatically. Your coordinator stops fighting spreadsheets."
            />
            <FeatureCard
              icon={ShieldCheck}
              title="AuditShield"
              description="Continuous compliance monitoring. Validates invoices against current NDIS rates in real time. Flags issues before your auditor finds them."
            />
            <FeatureCard
              icon={BookOpen}
              title="NDIS Butler"
              description="Your staff ask a question about NDIS pricing, legislation, or practice standards. They get an accurate, sourced answer in seconds."
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

      {/* Built by someone who gets it */}
      <section className="bg-muted/30 py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-4 md:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Built by someone who gets it
            </h2>
            <p className="mt-6 text-muted-foreground text-lg leading-relaxed max-w-[60ch] mx-auto">
              Waylight was started by a practising NDIS support worker who saw the
              problems from the inside: slow plan managers, lost invoices, zero
              transparency. That frontline experience changes how we operate.
              We catch invoice errors that desk-only plan managers miss because
              we understand what services actually look like on the ground.
            </p>
            <Link href="/about">
              <Button variant="outline" size="lg" className="mt-8">
                Read our story
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-primary/5 to-accent/5 py-24 md:py-32">
        <HeroBackground />
        <div className="relative mx-auto max-w-6xl px-4 md:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
            Be one of our first participants
          </h2>
          <p className="mt-6 text-muted-foreground text-lg max-w-[55ch] mx-auto leading-relaxed">
            We are starting small on purpose. Every participant gets dedicated,
            personal plan management from day one. Reach out while caseloads
            are low.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="text-base px-10 py-6">
                Get in touch
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/contact?role=sc">
              <Button variant="outline" size="lg" className="text-base px-10 py-6">
                Refer a participant
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
          <p className="mt-6 text-xs text-muted-foreground">
            NDIS provider registration in progress. Expressions of interest welcome.
          </p>
        </div>
      </section>
    </>
  )
}
