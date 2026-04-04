import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Lock } from "lucide-react"

export const metadata: Metadata = {
  title: "Participant Portal",
  description:
    "Waylight participant portal for viewing your NDIS plan balance, transaction history, and budget reports.",
}

export default function PortalPage() {
  return (
    <section className="flex flex-1 items-center justify-center py-16 md:py-24 bg-gradient-to-b from-primary/5 to-background">
      <div className="mx-auto w-full max-w-md px-4">
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
          <CardContent className="pt-6 text-center">
            <p className="text-lg font-semibold mb-2">Coming soon</p>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              We are building a portal where you can track your NDIS budget,
              view invoices, and download statements. In the meantime, contact
              us directly for any budget queries.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6">
              Want to know when the participant portal launches? Get in touch
              and we will add you to the notification list.
            </p>
            <Link href="/contact">
              <Button size="lg" className="w-full">
                Contact us
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
