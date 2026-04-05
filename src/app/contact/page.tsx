"use client"

import { Suspense, useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Mail, MapPin, CheckCircle2, Clock } from "lucide-react"
import { HeroBackground } from "@/components/hero-background"
import { submitContactForm } from "./actions"

const roleParamMap: Record<string, string> = {
  sc: "support-coordinator",
  provider: "provider",
  family: "family",
  participant: "participant",
}

export default function ContactPage() {
  return (
    <Suspense>
      <ContactPageInner />
    </Suspense>
  )
}

function ContactPageInner() {
  const searchParams = useSearchParams()
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [selectedRole, setSelectedRole] = useState("")

  useEffect(() => {
    const roleParam = searchParams.get("role")
    if (roleParam && roleParamMap[roleParam]) {
      setSelectedRole(roleParamMap[roleParam])
    }
  }, [searchParams])

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setError(null)
    setSubmitting(true)

    try {
      const form = e.currentTarget
      const formData = new FormData(form)
      const result = await submitContactForm(formData)

      if (result.success) {
        setSubmitted(true)
      } else {
        setError(result.error ?? "Something went wrong. Please try again.")
      }
    } catch {
      setError(
        "Unable to send your message. Please try again or email us directly."
      )
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-primary/5 to-background py-16 md:py-24">
        <HeroBackground />
        <div className="relative mx-auto max-w-6xl px-4 md:px-8">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
              Contact us
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Have a question about plan management? Looking to switch plan
              managers? We respond to every enquiry personally.
            </p>
            <div className="mt-4 inline-flex items-center gap-2 rounded-lg bg-primary/5 border border-primary/15 px-3 py-2 text-sm">
              <Clock className="h-4 w-4 text-primary" />
              <span className="text-muted-foreground">Response within 1 business day</span>
            </div>
          </div>
        </div>
      </section>

      {/* Form + Info */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 md:px-8">
          <div className="flex flex-wrap gap-12">
            {/* Form */}
            <div className="min-w-[50%] flex-[999_0_0]">
              <Card className="border-border/50">
                <CardHeader>
                  <CardTitle>Send us a message</CardTitle>
                </CardHeader>
                <CardContent>
                  {submitted ? (
                    <div className="flex flex-col items-center justify-center py-12 text-center">
                      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-4">
                        <CheckCircle2 className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold mb-2">
                        Message received
                      </h3>
                      <p className="text-muted-foreground max-w-sm">
                        We will get back to you within one business day. If your
                        matter is urgent, please call us directly.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      {/* Honeypot - hidden from real users, bots fill it */}
                      <input
                        type="text"
                        name="website"
                        style={{ display: "none" }}
                        tabIndex={-1}
                        autoComplete="off"
                        aria-hidden="true"
                      />

                      {error && (
                        <div
                          id="form-error"
                          role="alert"
                          aria-live="assertive"
                          className="rounded-md border border-destructive/50 bg-destructive/10 px-4 py-3 text-sm text-destructive"
                        >
                          {error}
                        </div>
                      )}

                      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="name">Name</Label>
                          <Input
                            id="name"
                            name="name"
                            placeholder="Your name"
                            required
                            maxLength={200}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="you@example.com"
                            required
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone (optional)</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          placeholder="04XX XXX XXX"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="role">I am a...</Label>
                        <Select name="role" required value={selectedRole} onValueChange={(value) => setSelectedRole(value ?? "")}>
                          <SelectTrigger id="role">
                            <SelectValue placeholder="Select your role" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="participant">
                              NDIS Participant
                            </SelectItem>
                            <SelectItem value="family">
                              Family Member / Carer
                            </SelectItem>
                            <SelectItem value="support-coordinator">
                              Support Coordinator
                            </SelectItem>
                            <SelectItem value="provider">
                              NDIS Provider
                            </SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="enquiry">
                          How can we help?
                        </Label>
                        <Textarea
                          id="enquiry"
                          name="enquiry"
                          placeholder="Tell us about your situation and what you need help with."
                          rows={5}
                          required
                          maxLength={5000}
                        />
                      </div>

                      <Button
                        type="submit"
                        size="lg"
                        className="w-full sm:w-auto"
                        disabled={submitting}
                        aria-describedby={error ? "form-error" : undefined}
                      >
                        {submitting ? "Sending..." : "Send message"}
                      </Button>

                      <p className="text-xs text-muted-foreground">
                        Information submitted through this form is handled in
                        accordance with our{" "}
                        <a
                          href="/policies/WL-POL-13-information-management.pdf"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="underline hover:text-foreground transition-colors"
                        >
                          Privacy Policy
                        </a>
                        .
                      </p>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Contact info */}
            <div className="flex-[1_20rem] stack stack-lg">
              <div>
                <h2 className="text-xl font-semibold mb-4">Get in touch</h2>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  You will hear back within one business day. For support
                  coordinators with urgent referrals, please note this in your
                  message.
                </p>
                <p className="text-xs text-muted-foreground leading-relaxed mb-6 border-l-2 border-primary/30 pl-3">
                  Waylight is currently completing NDIS provider registration.
                  Expressions of interest are welcome and we will be in touch
                  as soon as we are accepting participants.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Email</p>
                    <a
                      href="mailto:hello@waylightpm.com.au"
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      hello@waylightpm.com.au
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Location</p>
                    <p className="text-sm text-muted-foreground">
                      Queensland, Australia
                    </p>
                  </div>
                </div>
              </div>

              <Card className="border-border/50 bg-muted/30">
                <CardContent className="pt-6">
                  <h3 className="text-sm font-semibold mb-2">
                    For support coordinators
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed mb-3">
                    Referring a participant? Select &ldquo;Support
                    Coordinator&rdquo; in the form and include the
                    participant&apos;s name and NDIS number. We will handle
                    onboarding, set up their plan, and keep you updated on
                    progress.
                  </p>
                  <ul className="space-y-1.5 text-xs text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-3.5 w-3.5 text-primary mt-0.5 shrink-0" />
                      Onboarding handled within 2 business days
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-3.5 w-3.5 text-primary mt-0.5 shrink-0" />
                      You stay in the loop on budget and claims
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-3.5 w-3.5 text-primary mt-0.5 shrink-0" />
                      Direct line to the plan manager, not a queue
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
