import type { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { HeroBackground } from "@/components/hero-background"
import { BookOpen, ArrowRight, Clock } from "lucide-react"

export const metadata: Metadata = {
  title: "NDIS Plan Management Guides & Resources | Waylight",
  description:
    "Free guides to help you understand NDIS plan management in Queensland. Learn what a plan manager does, how to switch, and whether plan management is right for you.",
}

const guides = [
  {
    title: "What does an NDIS plan manager actually do?",
    description:
      "A plain-English explanation of plan management: what it is, what your plan manager handles, how it is funded, and how to get it in your plan.",
    href: "/resources/what-is-plan-management",
    readingTime: "6 min read",
  },
  {
    title: "How to switch NDIS plan managers",
    description:
      "You can change plan managers at any time with no lock-in period. Here is exactly how the process works, step by step.",
    href: "/resources/how-to-switch-plan-managers",
    readingTime: "5 min read",
  },
  {
    title: "Plan management vs self-management: which is right for you?",
    description:
      "A side-by-side look at the three NDIS management options so you can decide which one fits your situation.",
    href: "/resources/plan-management-vs-self-management",
    readingTime: "6 min read",
  },
]

export default function ResourcesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-primary/5 to-background py-16 md:py-24">
        <HeroBackground />
        <div className="relative mx-auto max-w-6xl px-4 md:px-8">
          <div className="max-w-[60ch]">
            <Badge variant="outline" className="mb-4">
              <BookOpen className="mr-1.5 h-3.5 w-3.5" />
              Resources
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
              NDIS plan management, explained simply
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Honest, jargon-free guides written for participants and families.
              No sales pitch, just the information you need to make good
              decisions about your NDIS funding.
            </p>
            <p className="dark-reveal mt-4 text-4xl font-handwritten text-primary/60 -rotate-2">
              finally, some clarity
            </p>
          </div>
        </div>
      </section>

      {/* Guides grid */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 md:px-8">
          <h2 className="text-2xl font-bold tracking-tight md:text-3xl mb-10">
            Guides
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {guides.map((guide) => (
              <Link key={guide.href} href={guide.href} className="group">
                <Card className="h-full border-border/50 transition-all duration-200 hover:border-primary/30 hover:shadow-md">
                  <CardContent className="pt-6 flex flex-col h-full">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                      <BookOpen className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                      {guide.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                      {guide.description}
                    </p>
                    <div className="mt-4 flex items-center justify-between">
                      <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                        <Clock className="h-3.5 w-3.5" />
                        {guide.readingTime}
                      </span>
                      <span className="flex items-center gap-1 text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                        Read guide
                        <ArrowRight className="h-3.5 w-3.5" />
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
