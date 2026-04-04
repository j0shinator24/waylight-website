import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, Target, Handshake, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "About",
  description:
    "Waylight Plan Management is a Queensland-based NDIS plan manager providing personal, dedicated financial management for NDIS participants.",
}

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-primary/5 to-background py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 md:px-8">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
              About Waylight
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Waylight is a Queensland-based NDIS plan management provider built
              on a simple idea: participants deserve a plan manager who actually
              knows their name.
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
                worker in Queensland. He saw the same problems from the inside:
                plan managers who could not be reached, invoices that sat in
                queues for weeks, participants who had no idea where their
                funding stood. He built Waylight to fix that.
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

      {/* Values */}
      <section className="bg-muted/30 py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 md:px-8">
          <h2 className="text-2xl font-bold tracking-tight md:text-3xl mb-12 text-center">
            What guides us
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <Card className="border-border/50">
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

            <Card className="border-border/50">
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

            <Card className="border-border/50">
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
      {/* Continuity */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 md:px-8">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-bold tracking-tight md:text-3xl mb-6">
              What happens if you are unavailable?
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Waylight has a continuity plan. A qualified contractor-accountant
              has system access and is authorised to process urgent invoices,
              answer budget queries, and manage reportable incidents. For
              planned leave, participants are notified in advance. Non-urgent
              matters wait for Joshua&apos;s return. The delegation is
              documented in a formal contractor agreement.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary/5 py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4 md:px-8 text-center">
          <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
            Ready to experience personal plan management?
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Whether you are a participant, support coordinator, or family
            member, get in touch and we will walk you through how it works.
          </p>
          <Link href="/contact">
            <Button size="lg" className="mt-8">
              Get in touch
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>
    </>
  )
}
