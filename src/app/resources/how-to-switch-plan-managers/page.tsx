import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { HeroBackground } from "@/components/hero-background"
import { BookOpen, ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react"

export const metadata: Metadata = {
  title: "How to Switch NDIS Plan Managers | Waylight",
  description:
    "You can change your NDIS plan manager at any time with no lock-in period. Learn the steps to switch, what happens to your funding, and what to look for in a new plan manager.",
}

export default function HowToSwitchPlanManagersPage() {
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
              How to switch NDIS plan managers
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              If your current plan manager is not working out, you are not
              stuck. Switching is straightforward, and your funding stays
              exactly the same.
            </p>
            <p className="dark-reveal mt-4 text-4xl font-handwritten text-primary/60 rotate-1">
              you are never locked in
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 md:px-8">
          <div className="max-w-[60ch]">
            {/* Can you switch? */}
            <h2 className="text-2xl font-bold tracking-tight md:text-3xl mb-6">
              Can you switch plan managers?
            </h2>
            <div className="stack stack-sm text-muted-foreground leading-relaxed">
              <p>
                Yes. You can change your plan manager at any time during your
                plan period. There is no lock-in, no minimum term, and no
                penalty for switching.
              </p>
              <p>
                This is your right as an NDIS participant. The NDIS is built on
                the principle of choice and control, and that includes choosing
                who manages your funding.
              </p>
            </div>

            {/* Steps to switch */}
            <h2 className="text-2xl font-bold tracking-tight md:text-3xl mt-14 mb-6">
              Steps to switch plan managers
            </h2>
            <div className="stack stack-sm text-muted-foreground leading-relaxed">
              <p>
                Switching is simpler than most people expect. Here is what
                happens:
              </p>
            </div>
            <div className="mt-6 space-y-4">
              <Card className="border-border/50">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary text-sm font-semibold">
                      1
                    </span>
                    <div>
                      <h3 className="font-semibold mb-1">Choose your new plan manager</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Decide who you want to move to. You do not need to have
                        a reason, and you do not need to justify your decision
                        to anyone.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-border/50">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary text-sm font-semibold">
                      2
                    </span>
                    <div>
                      <h3 className="font-semibold mb-1">Tell your new plan manager</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Contact the plan manager you want to switch to and let
                        them know. They will sign a new service agreement with
                        you and handle most of the transfer process from there.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-border/50">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary text-sm font-semibold">
                      3
                    </span>
                    <div>
                      <h3 className="font-semibold mb-1">Your new plan manager takes over</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Your new plan manager will register as your active plan
                        manager with the NDIA. Your old plan manager is required
                        to transfer your records (including any outstanding
                        invoices and budget information) to your new provider.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-border/50">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary text-sm font-semibold">
                      4
                    </span>
                    <div>
                      <h3 className="font-semibold mb-1">Let your providers know</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        It is a good idea to tell your providers that you have a
                        new plan manager, so they know where to send future
                        invoices.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <p className="dark-reveal mt-8 text-4xl font-handwritten text-primary/50 -rotate-2">
              less hassle than changing phone plans
            </p>

            {/* What to look for */}
            <h2 className="text-2xl font-bold tracking-tight md:text-3xl mt-14 mb-6">
              What to look for in a new plan manager
            </h2>
            <div className="stack stack-sm text-muted-foreground leading-relaxed">
              <p>
                Not all plan managers are the same. Here are some things worth
                considering when choosing a new one:
              </p>
              <ul className="space-y-3 mt-2">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-foreground">Direct contact.</strong>{" "}
                    Can you speak to your actual plan manager, or will you be
                    routed through a call centre?
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-foreground">Invoice turnaround.</strong>{" "}
                    How quickly do they process invoices? Slow payments affect
                    your relationship with your providers.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-foreground">Budget visibility.</strong>{" "}
                    Will you get regular, clear statements showing where your
                    funding stands across each category?
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-foreground">NDIS registration.</strong>{" "}
                    Plan management is one of the support categories that
                    requires provider registration with the NDIS Quality and
                    Safeguards Commission.
                  </span>
                </li>
              </ul>
            </div>

            {/* Common reasons people switch */}
            <h2 className="text-2xl font-bold tracking-tight md:text-3xl mt-14 mb-6">
              Common reasons people switch
            </h2>
            <div className="stack stack-sm text-muted-foreground leading-relaxed">
              <p>There is no wrong reason to switch. Common ones include:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Difficulty getting through to your plan manager (call centres,
                  long wait times, speaking to a different person every time).
                </li>
                <li>
                  Invoices taking too long to be processed, causing frustration
                  for your providers.
                </li>
                <li>
                  Lack of clear or regular budget updates, leaving you unsure
                  how your funding is tracking.
                </li>
                <li>
                  Wanting a more personal service where your plan manager knows
                  your situation.
                </li>
                <li>
                  Moving to a different area and wanting a plan manager who
                  understands local providers.
                </li>
              </ul>
            </div>

            {/* What happens to funding */}
            <h2 className="text-2xl font-bold tracking-tight md:text-3xl mt-14 mb-6">
              What happens to your funding when you switch?
            </h2>
            <div className="stack stack-sm text-muted-foreground leading-relaxed">
              <p>
                Nothing changes. Your NDIS plan and your funding stay exactly
                the same. Switching plan managers does not affect your budget,
                your plan dates, or the supports you have been approved for.
              </p>
              <p>
                The only thing that changes is who processes your invoices and
                claims. Your new plan manager picks up where the old one left
                off, working from the same plan with the same remaining
                funding.
              </p>
            </div>

            <p className="dark-reveal mt-8 text-4xl font-handwritten text-primary/50 rotate-1">
              same plan, same funding, better service
            </p>

            {/* About Waylight */}
            <h2 className="text-2xl font-bold tracking-tight md:text-3xl mt-14 mb-6">
              About Waylight Plan Management
            </h2>
            <div className="stack stack-sm text-muted-foreground leading-relaxed">
              <p>
                Waylight is a Queensland-based plan management provider. Our
                NDIS registration is currently in progress, with an expected
                timeline of Q3 2026. We are accepting expressions of interest
                from participants, families, and support coordinators ahead of
                our registration.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-primary/5 to-accent/5 py-16 md:py-20">
        <HeroBackground />
        <div className="relative mx-auto max-w-6xl px-4 md:px-8 text-center">
          <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
            Thinking about switching?
          </h2>
          <p className="mt-4 text-muted-foreground max-w-[55ch] mx-auto">
            If you have questions about how switching works or want to learn
            more about Waylight, we are happy to chat. No pressure, no
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
