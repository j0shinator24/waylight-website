import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { HeroBackground } from "@/components/hero-background"
import { Lock, BarChart3, FileText, Bell, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Participant Portal",
  description:
    "Waylight participant portal for viewing your NDIS plan balance, transaction history, and budget reports. Coming soon.",
}

export default function PortalPage() {
  return (
    <section className="relative flex flex-1 items-center justify-center py-16 md:py-24 bg-gradient-to-b from-primary/5 to-background overflow-hidden">
      <HeroBackground />
      <div className="relative mx-auto w-full max-w-md px-4">
        <div className="text-center mb-8">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary text-primary-foreground">
            <Lock className="h-7 w-7" />
          </div>
          <h1 className="text-2xl font-bold tracking-tight">
            Participant Portal
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">
            View your plan balance, transaction history, and budget reports.
          </p>
        </div>

        <Card className="border-border/50">
          <CardContent className="pt-6">
            <p className="text-lg font-semibold mb-4 text-center">Coming soon</p>
            <div className="space-y-3 mb-6">
              <div className="flex items-start gap-3 text-sm text-muted-foreground">
                <BarChart3 className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                <span>Real-time budget tracking by category</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-muted-foreground">
                <FileText className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                <span>Invoice history and statement downloads</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-muted-foreground">
                <Bell className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                <span>Budget alerts and spending notifications</span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6 text-center">
              In the meantime, contact us directly for any budget queries.
              We will add you to the portal launch notification list.
            </p>
            <Link href="/contact">
              <Button size="lg" className="w-full">
                Contact us
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
