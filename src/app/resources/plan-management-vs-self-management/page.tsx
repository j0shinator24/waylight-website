import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { HeroBackground } from "@/components/hero-background"
import { BookOpen, ArrowLeft, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title:
    "Plan Management vs Self-Management: Which Is Right for You? | Waylight",
  description:
    "Compare NDIS plan management, self-management, and NDIA-managed options. Learn the pros and cons of each so you can decide which way to manage your NDIS funding.",
}

export default function PlanManagementVsSelfManagementPage() {
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
              Plan management vs self-management: which is right for you?
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              There is no single best way to manage your NDIS funding. Here is
              an honest look at the three options so you can decide what works
              for your situation.
            </p>
            <p className="dark-reveal mt-4 text-4xl font-handwritten text-primary/60 -rotate-1">
              no wrong answer here
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 md:px-8">
          <div className="max-w-[60ch]">
            {/* The 3 options */}
            <h2 className="text-2xl font-bold tracking-tight md:text-3xl mb-6">
              The three management options explained
            </h2>
            <div className="stack stack-sm text-muted-foreground leading-relaxed">
              <p>
                Every NDIS participant manages their funding in one of three
                ways. You can also use a combination (for example,
                plan-managed for some supports and self-managed for others).
              </p>
            </div>

            <div className="mt-8 space-y-6">
              {/* NDIA-managed */}
              <Card className="border-border/50">
                <CardContent className="pt-6">
                  <h3 className="text-lg font-semibold mb-3">
                    1. NDIA-managed (Agency-managed)
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    The NDIA manages your funding directly. Your providers
                    submit invoices to the NDIA, and the NDIA pays them.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <p className="text-xs font-semibold text-foreground mb-2 uppercase tracking-wide">
                        Advantages
                      </p>
                      <ul className="text-sm text-muted-foreground space-y-1.5">
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">+</span>
                          No financial admin for you at all
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">+</span>
                          Providers claim directly from the NDIA
                        </li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-foreground mb-2 uppercase tracking-wide">
                        Trade-offs
                      </p>
                      <ul className="text-sm text-muted-foreground space-y-1.5">
                        <li className="flex items-start gap-2">
                          <span className="text-muted-foreground/60 mt-1">&ndash;</span>
                          You can only use registered NDIS providers
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-muted-foreground/60 mt-1">&ndash;</span>
                          Less flexibility and provider choice
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-muted-foreground/60 mt-1">&ndash;</span>
                          Less visibility into real-time budget tracking
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Plan-managed */}
              <Card className="border-border/50">
                <CardContent className="pt-6">
                  <h3 className="text-lg font-semibold mb-3">
                    2. Plan-managed
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    You choose a plan manager to handle the financial side.
                    They process invoices, pay providers, track your budget,
                    and lodge claims with the NDIA on your behalf.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <p className="text-xs font-semibold text-foreground mb-2 uppercase tracking-wide">
                        Advantages
                      </p>
                      <ul className="text-sm text-muted-foreground space-y-1.5">
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">+</span>
                          Use both registered and unregistered providers
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">+</span>
                          Someone else handles the financial admin
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">+</span>
                          Regular budget reports and spending visibility
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">+</span>
                          Invoices checked against NDIS Price Arrangements
                        </li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-foreground mb-2 uppercase tracking-wide">
                        Trade-offs
                      </p>
                      <ul className="text-sm text-muted-foreground space-y-1.5">
                        <li className="flex items-start gap-2">
                          <span className="text-muted-foreground/60 mt-1">&ndash;</span>
                          You rely on your plan manager to process things
                          promptly
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-muted-foreground/60 mt-1">&ndash;</span>
                          Quality varies between plan management providers
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Self-managed */}
              <Card className="border-border/50">
                <CardContent className="pt-6">
                  <h3 className="text-lg font-semibold mb-3">
                    3. Self-managed
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    You manage everything yourself. You pay your providers
                    directly, keep records of all transactions, and submit
                    claims to the NDIA for reimbursement.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <p className="text-xs font-semibold text-foreground mb-2 uppercase tracking-wide">
                        Advantages
                      </p>
                      <ul className="text-sm text-muted-foreground space-y-1.5">
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">+</span>
                          Full control over every payment and decision
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">+</span>
                          Use both registered and unregistered providers
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">+</span>
                          No middleperson between you and your providers
                        </li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-foreground mb-2 uppercase tracking-wide">
                        Trade-offs
                      </p>
                      <ul className="text-sm text-muted-foreground space-y-1.5">
                        <li className="flex items-start gap-2">
                          <span className="text-muted-foreground/60 mt-1">&ndash;</span>
                          You handle all invoices, payments, and record-keeping
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-muted-foreground/60 mt-1">&ndash;</span>
                          You need to understand NDIS pricing and claiming rules
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-muted-foreground/60 mt-1">&ndash;</span>
                          You must keep records for audit purposes
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <p className="dark-reveal mt-8 text-4xl font-handwritten text-primary/50 rotate-1">
              three paths, same destination
            </p>

            {/* Who self-management suits */}
            <h2 className="text-2xl font-bold tracking-tight md:text-3xl mt-14 mb-6">
              Who does self-management suit?
            </h2>
            <div className="stack stack-sm text-muted-foreground leading-relaxed">
              <p>
                Self-management works well for participants (or their nominees
                and families) who:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Want complete control over every payment and financial
                  decision.
                </li>
                <li>
                  Are comfortable managing invoices, keeping detailed records,
                  and submitting claims to the NDIA.
                </li>
                <li>
                  Have the time and confidence to learn NDIS pricing rules and
                  stay across updates to the Price Arrangements.
                </li>
                <li>
                  Are happy to pay providers upfront and then claim
                  reimbursement from the NDIA.
                </li>
              </ul>
              <p>
                Self-management gives you the most control, but it also comes
                with the most administrative responsibility. It is a good fit
                for people who are confident with financial paperwork and have
                the time to stay on top of it.
              </p>
            </div>

            {/* Who plan management suits */}
            <h2 className="text-2xl font-bold tracking-tight md:text-3xl mt-14 mb-6">
              Who does plan management suit?
            </h2>
            <div className="stack stack-sm text-muted-foreground leading-relaxed">
              <p>
                Plan management works well for participants who:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Want the flexibility to use both registered and unregistered
                  providers.
                </li>
                <li>
                  Prefer someone else to handle the financial paperwork
                  (invoices, claims, budget tracking).
                </li>
                <li>
                  Want regular budget updates without having to calculate
                  everything themselves.
                </li>
                <li>
                  Want an extra set of eyes checking that invoices are correct
                  and providers are charging within NDIS guidelines.
                </li>
              </ul>
              <p>
                Plan management gives you provider choice without the
                administrative load. Your plan manager handles the financial
                side while you focus on your supports and goals.
              </p>
            </div>

            {/* Can you change later? */}
            <h2 className="text-2xl font-bold tracking-tight md:text-3xl mt-14 mb-6">
              Can you change your management type later?
            </h2>
            <div className="stack stack-sm text-muted-foreground leading-relaxed">
              <p>
                Yes. Your choice is not permanent. You can request a change to
                how your funding is managed at your next plan reassessment. If
                you start with one option and find it does not suit you, you
                can ask to switch.
              </p>
              <p>
                You can also use a combination within a single plan. For
                example, some participants choose to plan-manage most of their
                supports but self-manage a specific category where they want
                more direct control.
              </p>
              <p>
                The important thing is that there is no wrong choice. You can
                try an option, see how it works for you, and adjust if needed.
              </p>
            </div>

            <p className="dark-reveal mt-8 text-4xl font-handwritten text-primary/50 -rotate-2">
              try it, adjust, repeat
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-primary/5 to-accent/5 py-16 md:py-20">
        <HeroBackground />
        <div className="relative mx-auto max-w-6xl px-4 md:px-8 text-center">
          <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
            Still deciding?
          </h2>
          <p className="mt-4 text-muted-foreground max-w-[55ch] mx-auto">
            If you are not sure which option is right for you, we are happy to
            talk it through. No pressure, no obligation, just a straightforward
            conversation.
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
