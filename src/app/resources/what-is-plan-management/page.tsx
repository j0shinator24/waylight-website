import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { HeroBackground } from "@/components/hero-background"
import { BookOpen, ArrowLeft, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "What Does an NDIS Plan Manager Actually Do? | Waylight",
  description:
    "A plain-English guide to NDIS plan management. Learn what a plan manager handles, the 3 management types, how plan management is funded, and how to get it in your NDIS plan.",
}

export default function WhatIsPlanManagementPage() {
  return (
    <article>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-primary/5 to-background py-16 md:py-24">
        <HeroBackground />
        <div className="relative mx-auto max-w-6xl px-4 md:px-8">
          <div className="max-w-[60ch]">
            <Link
              href="/resources"
              className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mb-6"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              All resources
            </Link>
            <Badge variant="outline" className="mb-4 block w-fit">
              <BookOpen className="mr-1.5 h-3.5 w-3.5" />
              Guide
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
              What does an NDIS plan manager actually do?
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              If you have an NDIS plan (or you are about to get one), you have
              probably heard the term &ldquo;plan management.&rdquo; Here is
              what it actually means, in plain English.
            </p>
            <p className="dark-reveal mt-4 text-4xl font-handwritten text-primary/60 -rotate-2">
              no jargon, promise
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 md:px-8">
          <div className="max-w-[60ch]">
            {/* What plan management is */}
            <h2 className="text-2xl font-bold tracking-tight md:text-3xl mb-6">
              What is plan management?
            </h2>
            <div className="stack stack-sm text-muted-foreground leading-relaxed">
              <p>
                Plan management is a financial service for NDIS participants. A
                plan manager takes care of the money side of your NDIS plan so
                you do not have to.
              </p>
              <p>
                Think of it this way: your NDIS plan has funding in it for
                different types of support. When you use those supports, someone
                needs to handle the invoices, track the spending, and make sure
                everything lines up with NDIS rules. That someone is your plan
                manager.
              </p>
              <p>
                You still choose your own providers and make your own decisions
                about what supports you use. Your plan manager handles the
                financial administration behind the scenes.
              </p>
            </div>

            {/* What a plan manager handles */}
            <h2 className="text-2xl font-bold tracking-tight md:text-3xl mt-14 mb-6">
              What your plan manager handles
            </h2>
            <div className="stack stack-sm text-muted-foreground leading-relaxed">
              <p>
                The day-to-day work of a plan manager covers a few key areas:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong className="text-foreground">Processing invoices.</strong>{" "}
                  Your providers send invoices to your plan manager. The plan
                  manager checks each invoice against the NDIS Price Arrangements
                  to make sure it is correct, then processes the payment.
                </li>
                <li>
                  <strong className="text-foreground">Tracking your budget.</strong>{" "}
                  Your plan manager keeps a running record of how much has been
                  spent in each category and how much is remaining. This means
                  you always know where your funding stands.
                </li>
                <li>
                  <strong className="text-foreground">Lodging claims with the NDIA.</strong>{" "}
                  After paying your providers, your plan manager submits
                  payment claims to the National Disability Insurance Agency
                  (NDIA) to draw down the funding from your plan.
                </li>
                <li>
                  <strong className="text-foreground">Paying your providers.</strong>{" "}
                  Your plan manager makes sure your providers are paid on time.
                  This keeps your relationships with your providers running
                  smoothly.
                </li>
                <li>
                  <strong className="text-foreground">Providing budget reports.</strong>{" "}
                  You receive regular statements showing what has been spent,
                  what is remaining, and how your funding is tracking across your
                  plan period.
                </li>
              </ul>
            </div>

            <p className="dark-reveal mt-8 text-4xl font-handwritten text-primary/50 rotate-1">
              they handle the paperwork, you live your life
            </p>

            {/* The 3 management types */}
            <h2 className="text-2xl font-bold tracking-tight md:text-3xl mt-14 mb-6">
              The three ways to manage your NDIS funding
            </h2>
            <div className="stack stack-sm text-muted-foreground leading-relaxed">
              <p>
                Every NDIS participant uses one of three options (or a
                combination) to manage their funding:
              </p>
              <ol className="list-decimal pl-6 space-y-4">
                <li>
                  <strong className="text-foreground">NDIA-managed.</strong>{" "}
                  The NDIA manages your funding directly. Your providers send
                  invoices straight to the NDIA. You can only use registered NDIS
                  providers.
                </li>
                <li>
                  <strong className="text-foreground">Plan-managed.</strong>{" "}
                  You choose a plan manager to handle the financial side. You
                  can use both registered and unregistered providers, giving you
                  more choice. Your plan manager processes invoices and claims
                  on your behalf.
                </li>
                <li>
                  <strong className="text-foreground">Self-managed.</strong>{" "}
                  You handle everything yourself. You pay providers, keep
                  records, and submit claims to the NDIA. You have full control
                  but also full responsibility for the financial administration.
                </li>
              </ol>
              <p>
                Many participants choose plan management because it gives them
                provider choice (both registered and unregistered providers)
                without the administrative workload of self-management.
              </p>
            </div>

            {/* Who it is for */}
            <h2 className="text-2xl font-bold tracking-tight md:text-3xl mt-14 mb-6">
              Who is plan management for?
            </h2>
            <div className="stack stack-sm text-muted-foreground leading-relaxed">
              <p>
                Plan management suits a wide range of NDIS participants. You
                might benefit from plan management if:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  You want to use unregistered providers but do not want to
                  manage the invoices and claims yourself.
                </li>
                <li>
                  You (or a family member or nominee) find the financial
                  paperwork stressful or time-consuming.
                </li>
                <li>
                  You want regular, clear updates about how your funding is
                  tracking.
                </li>
                <li>
                  You want someone checking that invoices are correct and that
                  providers are charging within NDIS guidelines.
                </li>
              </ul>
              <p>
                There is no &ldquo;right&rdquo; type of participant for plan
                management. It is simply one option for managing your funding,
                and it is available to any NDIS participant who has it included
                in their plan.
              </p>
            </div>

            {/* How it is funded */}
            <h2 className="text-2xl font-bold tracking-tight md:text-3xl mt-14 mb-6">
              How plan management is funded
            </h2>
            <div className="stack stack-sm text-muted-foreground leading-relaxed">
              <p>
                This is one of the most common questions, and the answer is
                straightforward: plan management is funded as a separate line
                item in your NDIS plan. It does not come out of your other
                support budgets.
              </p>
              <p>
                The NDIA adds a specific allocation for &ldquo;Improved Life
                Choices&rdquo; (the budget category that covers plan management
                fees) on top of your other funded supports. This means choosing
                plan management does not reduce the funding available for your
                therapy, support workers, or any other support category.
              </p>
              <p>
                In practical terms: plan management is funded by the NDIS at no
                cost to your other supports.
              </p>
            </div>

            {/* How to get it */}
            <h2 className="text-2xl font-bold tracking-tight md:text-3xl mt-14 mb-6">
              How to get plan management in your NDIS plan
            </h2>
            <div className="stack stack-sm text-muted-foreground leading-relaxed">
              <p>
                If you do not already have plan management in your plan, you can
                request it at your next plan reassessment. Let your planner or
                Local Area Coordinator (LAC) know that you would like your plan
                to be plan-managed.
              </p>
              <p>
                If you currently have an active plan without plan management
                funding, you can request a plan variation to add it. Speak to
                your LAC or contact the NDIA directly.
              </p>
              <p>
                Once plan management is in your plan, you are free to choose
                any registered plan management provider. There is no lock-in
                period, and you can switch plan managers at any time.
              </p>
            </div>

            <p className="dark-reveal mt-8 text-4xl font-handwritten text-primary/50 -rotate-1">
              your plan, your choice
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-primary/5 to-accent/5 py-16 md:py-20">
        <HeroBackground />
        <div className="relative mx-auto max-w-6xl px-4 md:px-8 text-center">
          <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
            Have questions about plan management?
          </h2>
          <p className="mt-4 text-muted-foreground max-w-[55ch] mx-auto">
            We are happy to answer any questions you have, whether you are a
            participant, family member, or support coordinator. No pressure, no
            obligation.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg">
                Get in touch
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/resources">
              <Button variant="outline" size="lg">
                More guides
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </article>
  )
}
