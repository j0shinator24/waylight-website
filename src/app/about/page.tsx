import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { HeroBackground } from "@/components/hero-background"
import { Heart, Target, Handshake, ArrowRight, PhoneOff, FileQuestion, Clock, ShieldCheck } from "lucide-react"

export const metadata: Metadata = {
  title: "About Waylight | NDIS Plan Manager, Queensland",
  description:
    "Waylight Plan Management was started by a practising NDIS support worker in Queensland. One dedicated plan manager, direct access, no call centres. Read our story.",
}

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-primary/5 to-background py-16 md:py-24">
        <HeroBackground />
        <div className="relative mx-auto max-w-6xl px-4 md:px-8">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
              About Waylight
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              A Queensland NDIS plan management provider built on a simple idea:
              participants deserve a plan manager who actually knows their name.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 md:px-8">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-bold tracking-tight md:text-3xl mb-6">
              Why Waylight exists
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Too many NDIS participants are stuck with plan managers who treat
                them like a ticket number. Invoices get lost. Calls go
                unanswered. Budget updates arrive weeks late, if they arrive at
                all.
              </p>
              <p>
                Waylight was started by Joshua, a practising NDIS support
                worker in Queensland. Working on the ground, he saw the same
                problems repeated across every participant he supported: plan
                managers who could not be reached, invoices that sat in queues
                for weeks, and participants who had no idea where their funding
                stood. He built Waylight to fix that.
              </p>
              <p>
                That frontline experience changes how Waylight operates. Joshua
                catches invoice errors that desk-only plan managers miss because
                he understands what services actually look like on the ground. He
                spots underspend patterns because he knows which supports
                participants tend to underuse. The combination of plan management
                and hands-on NDIS experience is rare, and it is the core of what
                makes Waylight different.
              </p>
              <p>
                As your plan manager, Joshua works directly with every
                participant. There is no switchboard, no queue, no
                &ldquo;your call is important to us.&rdquo; You get one
                person who knows your situation, your providers, and your
                goals.
              </p>
              <p>
                Plan management is fundamentally about trust. You are trusting
                someone to handle your NDIS funding accurately and
                transparently. That trust is earned through consistent,
                personal service, not through a brand name or a large team.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="border-y border-border/50 bg-muted/20 py-10">
        <div className="mx-auto max-w-6xl px-4 md:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-sm font-semibold text-foreground">Practising NDIS support worker</p>
              <p className="text-xs text-muted-foreground mt-1">Frontline experience with NDIS services</p>
            </div>
            <div>
              <p className="text-sm font-semibold text-foreground">14 NDIS Practice Standards policies</p>
              <p className="text-xs text-muted-foreground mt-1">Published and available on our website</p>
            </div>
            <div>
              <p className="text-sm font-semibold text-foreground">Contractor-accountant model</p>
              <p className="text-xs text-muted-foreground mt-1">Qualified backup with system access</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 md:px-8">
          <h2 className="text-2xl font-bold tracking-tight md:text-3xl mb-12 text-center">
            What guides us
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <Card className="border-border/50 transition-all duration-200 hover:border-primary/30 hover:shadow-md">
              <CardContent className="pt-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Personal service</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  You speak to the same person every time. Your plan manager
                  knows your situation, your providers, and your goals.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border/50 transition-all duration-200 hover:border-primary/30 hover:shadow-md">
              <CardContent className="pt-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Accuracy</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Every invoice checked against the NDIS Price Arrangements.
                  Every claim lodged correctly. Every dollar accounted for.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border/50 transition-all duration-200 hover:border-primary/30 hover:shadow-md">
              <CardContent className="pt-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Handshake className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Transparency</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  You always know where your funding stands. Clear budget
                  updates, no surprises, no hidden processes.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why participants switch */}
      <section className="bg-muted/30 py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 md:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <Badge variant="outline" className="mb-3">
              Common frustrations
            </Badge>
            <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
              Why participants switch plan managers
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <Card className="border-border/50 transition-all duration-200 hover:border-primary/30 hover:shadow-md">
              <CardContent className="pt-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <PhoneOff className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Cannot reach anyone</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Large plan management companies run call centres. You wait on
                  hold and explain your situation to a different person every
                  time. At Waylight, you have one person who knows your plan.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border/50 transition-all duration-200 hover:border-primary/30 hover:shadow-md">
              <CardContent className="pt-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <FileQuestion className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">No idea where funding stands</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Some plan managers send statements quarterly, if at all.
                  Waylight sends monthly breakdowns by category so you always
                  know exactly where your funding sits.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border/50 transition-all duration-200 hover:border-primary/30 hover:shadow-md">
              <CardContent className="pt-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Invoices sit in a queue</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  When your provider is waiting on payment, it affects your
                  relationship with them. A small caseload means nothing sits
                  in a pile at Waylight.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Continuity */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <ShieldCheck className="h-5 w-5 text-primary" />
                </div>
                <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
                  Continuity of service
                </h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Waylight has a documented continuity plan. A qualified
                contractor-accountant has system access and is authorised to
                process urgent invoices, answer budget queries, and manage
                reportable incidents during any period of unavailability.
              </p>
            </div>
            <Card className="border-border/50">
              <CardContent className="pt-6">
                <h3 className="text-sm font-semibold mb-3">How it works</h3>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-semibold mt-0.5">1.</span>
                    For planned leave, participants are notified in advance
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-semibold mt-0.5">2.</span>
                    Urgent invoices and incidents are handled by the backup accountant
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-semibold mt-0.5">3.</span>
                    Non-urgent matters wait for Joshua&apos;s return
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-semibold mt-0.5">4.</span>
                    Delegation is documented in a formal contractor agreement
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-primary/5 to-accent/5 py-16 md:py-20">
        <HeroBackground />
        <div className="relative mx-auto max-w-6xl px-4 md:px-8 text-center">
          <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
            Ready to experience personal plan management?
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Whether you are a participant, support coordinator, or family
            member, get in touch and we will walk you through how it works.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg">
                Get in touch
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/policies">
              <Button variant="outline" size="lg">
                View our policies
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
