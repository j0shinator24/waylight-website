import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { HeroBackground } from "@/components/hero-background"
import { BUSINESS } from "@/lib/constants"
import {
  ArrowRight,
  Clock,
  Phone,
  BarChart3,
  UserCheck,
  Headphones,
  Send,
  ClipboardCheck,
  Eye,
  MessageSquareQuote,
} from "lucide-react"

export const metadata: Metadata = {
  title:
    "For Support Coordinators | NDIS Plan Manager Referral | Waylight Plan Management",
  description:
    "Refer your NDIS participants to a plan manager who actually picks up the phone. Fast onboarding, direct communication, budget updates shared with you. Queensland-based NDIS support coordinator plan manager referral.",
}

export default function ForSupportCoordinatorsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/8 via-background to-accent/5 py-28 md:py-40">
        <HeroBackground />
        <div className="relative mx-auto max-w-6xl px-4 md:px-8">
          <div className="max-w-[65ch]">
            <Badge variant="outline" className="mb-4">
              For Support Coordinators
            </Badge>
            <h1 className="text-5xl font-bold tracking-tight text-foreground md:text-6xl lg:text-7xl leading-[1.1]">
              A plan manager your participants can{" "}
              <span className="text-primary">actually reach</span>
            </h1>
            <p className="mt-8 text-xl text-muted-foreground leading-relaxed max-w-[60ch]">
              When you refer to Waylight, your participants get a direct line to
              their plan manager. No ticket systems. No call centre queues.
              One person who knows their name and picks up the phone.
            </p>
            <p className="mt-4 text-base text-muted-foreground/80 leading-relaxed max-w-[55ch] border-l-2 border-primary/30 pl-4">
              You should not have to chase a plan manager on behalf of your
              participants. We make sure you never have to.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link href="/contact?role=sc">
                <Button
                  size="lg"
                  className="w-full sm:w-auto text-base px-8 py-6"
                >
                  Refer a participant
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/services">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto text-base px-8 py-6"
                >
                  Learn more about our services
                </Button>
              </Link>
            </div>
            <p className="dark-reveal mt-6 text-4xl font-handwritten text-primary/60 -rotate-2">
              you found the good referral
            </p>
          </div>
        </div>
      </section>

      {/* What you get when you refer */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 md:px-8">
          <div className="max-w-[60ch] mb-12">
            <p className="text-sm font-medium tracking-widest uppercase text-primary mb-3">
              What you get
            </p>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              When you refer a participant to Waylight
            </h2>
            <p className="mt-4 text-muted-foreground text-lg max-w-[60ch]">
              We built this service around the things support coordinators
              actually need from a plan manager.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Clock,
                title: "Fast onboarding",
                description:
                  "Participant set up within 2 business days of referral. Service agreements sorted, no delays.",
              },
              {
                icon: Phone,
                title: "Direct line to the plan manager",
                description:
                  "Call, email, or message the same person every time. No reception desk, no transfers.",
              },
              {
                icon: BarChart3,
                title: "Budget updates shared with you",
                description:
                  "Monthly budget reports sent directly to you so you can plan supports with confidence.",
              },
              {
                icon: Headphones,
                title: "No hold music or ticket queues",
                description:
                  "Your call gets answered by the person who manages the plan. Not a queue number.",
              },
              {
                icon: UserCheck,
                title: "One consistent point of contact",
                description:
                  "Same plan manager for every conversation. No explaining the situation from scratch.",
              },
            ].map((item) => (
              <Card key={item.title} className="border-border/50">
                <CardContent className="pt-6">
                  <div className="flex gap-4 items-start">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <item.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How referral works */}
      <section className="bg-muted/30 py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 md:px-8">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-12 text-center">
            How the referral works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                step: "1",
                icon: Send,
                title: "Send us the participant's details",
                description:
                  "Use our contact form or email us directly. Include the participant's name, NDIS number, and your contact details.",
              },
              {
                step: "2",
                icon: ClipboardCheck,
                title: "We handle onboarding",
                description:
                  "We reach out to the participant, complete the service agreement, and get everything set up within 2 business days.",
              },
              {
                step: "3",
                icon: Eye,
                title: "You stay in the loop",
                description:
                  "Budget updates and claims progress shared with you directly. You always know where the funding stands.",
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-lg">
                  {item.step}
                </div>
                <item.icon className="h-6 w-6 text-primary mx-auto mb-3" />
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
          <p className="dark-reveal text-center mt-8 text-4xl font-handwritten text-primary/50 rotate-1">
            two days. not two weeks.
          </p>
        </div>
      </section>

      {/* What SCs tell us */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 md:px-8">
          <div className="max-w-[60ch] mx-auto text-center mb-12">
            <p className="text-sm font-medium tracking-widest uppercase text-primary mb-3">
              Sound familiar?
            </p>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              What we hear from support coordinators
            </h2>
            <p className="mt-4 text-muted-foreground text-lg">
              These are the frustrations that come up again and again. We built
              Waylight to fix them.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              {
                quote:
                  "I just need someone who picks up the phone.",
              },
              {
                quote:
                  "My participant's invoices have been sitting for 3 weeks.",
              },
              {
                quote:
                  "I have to explain the situation from scratch every time I call.",
              },
            ].map((item) => (
              <Card key={item.quote} className="border-border/50 bg-muted/20">
                <CardContent className="pt-6">
                  <MessageSquareQuote className="h-6 w-6 text-primary/40 mb-3" />
                  <p className="text-foreground font-medium italic leading-relaxed">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                  <p className="mt-3 text-xs text-muted-foreground">
                    Common SC feedback
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
          <p className="dark-reveal text-center mt-8 text-4xl font-handwritten text-primary/60 -rotate-1">
            we hear you. and we pick up.
          </p>
        </div>
      </section>

      {/* Quick facts strip */}
      <section className="border-y border-border/50 bg-muted/20 py-10">
        <div className="mx-auto max-w-6xl px-4 md:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-3xl font-bold text-foreground">2 days</p>
              <p className="text-sm text-muted-foreground mt-1">
                Onboarding turnaround
              </p>
            </div>
            <div>
              <p className="text-3xl font-bold text-foreground">Monthly</p>
              <p className="text-sm text-muted-foreground mt-1">
                Budget reports to you
              </p>
            </div>
            <div>
              <p className="text-3xl font-bold text-foreground">1 person</p>
              <p className="text-sm text-muted-foreground mt-1">
                One plan manager per participant
              </p>
            </div>
            <div>
              <p className="text-3xl font-bold text-foreground">No lock-in</p>
              <p className="text-sm text-muted-foreground mt-1">
                Leave any time, no penalties
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
            Refer a participant to Waylight
          </h2>
          <p className="mt-6 text-muted-foreground text-lg max-w-[55ch] mx-auto leading-relaxed">
            We are starting small on purpose. Every participant gets dedicated,
            personal plan management from day one. Refer now while caseloads
            are low.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact?role=sc">
              <Button size="lg" className="text-base px-10 py-6">
                Refer a participant
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/services">
              <Button
                variant="outline"
                size="lg"
                className="text-base px-10 py-6"
              >
                Learn more about our services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
          <p className="mt-6 text-xs text-muted-foreground">
            NDIS provider registration in progress. Expressions of interest
            welcome.
          </p>
          <p className="dark-reveal mt-4 text-4xl font-handwritten text-primary/60 -rotate-2">
            your participants deserve better
          </p>
        </div>
      </section>
    </>
  )
}
