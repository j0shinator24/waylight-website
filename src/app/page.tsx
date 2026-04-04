import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
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
} from "lucide-react"

export const metadata: Metadata = {
  title: "NDIS Plan Management | Personal Service from a Dedicated Plan Manager",
  description:
    "Waylight handles the financial side of your NDIS plan. One dedicated plan manager, direct communication, no call centres. Queensland-based, funded by the NDIS at no cost to your other supports.",
}

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-primary/5 to-background py-20 md:py-32">
        <div className="mx-auto max-w-6xl px-4 md:px-8">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
              Your NDIS plan,{" "}
              <span className="text-primary">managed personally</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed md:text-xl">
              Waylight handles the financial side of your NDIS plan so you can
              focus on what matters: your goals, your supports, your life.
            </p>
            <p className="mt-3 text-sm text-muted-foreground">
              Plan management is funded by the NDIS at no cost to your other
              supports.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <Button size="lg" className="w-full sm:w-auto">
                  Get in touch
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/services">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  How it works
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What we do */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-4 md:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Plan management that puts you first
            </h2>
            <p className="mt-4 text-muted-foreground text-lg">
              One dedicated plan manager. Direct communication. No call centres.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <Card className="border-border/50 bg-card">
              <CardContent className="pt-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <FileText className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Invoice Processing</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  We process provider invoices, handle reimbursements, and pay
                  claims against your NDIS plan. Accurate and on time.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border/50 bg-card">
              <CardContent className="pt-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <BarChart3 className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Budget Tracking</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Monthly statements with category breakdowns. Clear visibility
                  of your plan balance so you always know where you stand.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border/50 bg-card">
              <CardContent className="pt-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Bell className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Budget Alerts</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Your plan has a fixed timeline. We track your spending
                  trajectory and notify you and your providers if funding is
                  running ahead or behind schedule.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border/50 bg-card">
              <CardContent className="pt-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Provider Choice</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  With plan management, you can use both registered and
                  unregistered providers, giving you more choice and
                  flexibility.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* For Support Coordinators */}
      <section className="bg-muted/30 py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4 md:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <Badge variant="outline" className="mb-3">
              For Support Coordinators
            </Badge>
            <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
              A plan manager you can actually reach
            </h2>
            <p className="mt-4 text-muted-foreground">
              When you refer a participant to Waylight, you get a direct line to
              their plan manager. No call centre, no ticket system, no chasing.
            </p>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
              <div>
                <p className="text-sm font-semibold mb-1">Fast onboarding</p>
                <p className="text-sm text-muted-foreground">
                  Participant set up within 2 business days of referral.
                </p>
              </div>
              <div>
                <p className="text-sm font-semibold mb-1">You stay informed</p>
                <p className="text-sm text-muted-foreground">
                  Budget updates and claims progress shared with you directly.
                </p>
              </div>
              <div>
                <p className="text-sm font-semibold mb-1">One point of contact</p>
                <p className="text-sm text-muted-foreground">
                  Same plan manager every time. You know who to call.
                </p>
              </div>
            </div>
            <div className="mt-8">
              <Link href="/contact">
                <Button size="lg">
                  Refer a participant
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Provider Tools */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-4 md:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <Badge variant="outline" className="mb-3">
              For Providers
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Your staff deserve better tools
            </h2>
            <p className="mt-4 text-muted-foreground text-lg">
              Support workers lose hours to paperwork. Managers juggle
              spreadsheets. Compliance officers scramble before audits. We are
              building the tools to fix that.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <Card className="border-border/50 bg-card">
              <CardContent className="pt-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Mic className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">NoteFlow</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Support workers talk through their shift. NoteFlow turns it
                  into structured, NDIS-compliant progress notes. Designed to
                  save 60-90 minutes of documentation per shift.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border/50 bg-card">
              <CardContent className="pt-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Calendar className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">RosterIQ</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Rostering that handles SCHADS compliance, participant matching,
                  and gap alerts automatically. Your coordinator stops fighting
                  spreadsheets.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border/50 bg-card">
              <CardContent className="pt-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <ShieldCheck className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">AuditShield</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Continuous compliance monitoring. Validates invoices against
                  current PAPL rates in real time. The annual audit scramble
                  is over.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border/50 bg-card">
              <CardContent className="pt-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">NDIS Butler</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Your staff ask a question about NDIS pricing, legislation, or
                  practice standards. They get an accurate answer in seconds.
                  No more hunting through PDFs.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-10 text-center">
            <Link href="/services">
              <Button variant="outline" size="lg">
                See all provider tools
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary/5 py-20">
        <div className="mx-auto max-w-6xl px-4 md:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Ready to get started?
          </h2>
          <p className="mt-4 text-muted-foreground text-lg max-w-xl mx-auto">
            Whether you are a participant, support coordinator, or provider. We
            are here to help.
          </p>
          <Link href="/contact">
            <Button size="lg" className="mt-8">
              Contact us today
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>
    </>
  )
}
