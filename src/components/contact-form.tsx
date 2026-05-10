"use client"

import { Suspense, useState, useEffect } from "react"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import {
  Mail,
  MapPin,
  Phone,
  CheckCircle2,
  Clock,
  ArrowRight,
} from "lucide-react"
import { BUSINESS } from "@/lib/constants"
import { submitContactForm } from "@/app/contact/actions"

const roleParamMap: Record<string, string> = {
  sc: "support-coordinator",
  provider: "provider",
  family: "family",
  participant: "participant",
}

export function ContactForm() {
  return (
    <Suspense>
      <ContactFormInner />
    </Suspense>
  )
}

function ContactFormInner() {
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
      setError("Unable to send your message. Please try again or email us directly.")
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <>
      {/* ========================================================== */}
      {/* HERO                                                       */}
      {/* ========================================================== */}
      <section className="relative overflow-hidden atmos grain pt-28 md:pt-36 pb-20 md:pb-24">
        <div className="arch hidden md:block" style={{ right: "-160px", top: "60px", width: "520px", height: "260px" }} />
        <div className="arch hidden md:block" style={{ right: "-80px", top: "140px", width: "380px", height: "190px", opacity: 0.55 }} />

        <div className="relative mx-auto max-w-[1240px] px-6 md:px-10">
          <div className="max-w-[60ch]">
            <p className="eyebrow rise d1">Get in touch</p>
            <h1
              className="text-[2.6rem] sm:text-5xl md:text-[4.6rem] leading-[0.96] mt-7 rise d2 text-foreground"
              style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 60" }}
            >
              Let&apos;s talk about{" "}
              <span
                className="italic text-[color:var(--color-teal-500)]"
                style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 100" }}
              >
                your plan
              </span>
              .
            </h1>
            <p className="mt-8 text-lg md:text-xl text-[color:var(--color-ink-soft)] leading-[1.7] max-w-[58ch] rise d3">
              Got a question, switching plan managers, or referring a participant. Tell us what&apos;s going on and we&apos;ll
              walk you through how Waylight works for your situation.
            </p>
            <div className="mt-9 inline-flex items-center gap-3 rounded-full border border-[color:var(--color-gold-500)]/40 bg-white/60 px-5 py-2.5 rise d4">
              <Clock className="h-4 w-4 text-[color:var(--color-teal-500)]" />
              <span className="text-sm text-[color:var(--color-ink-muted)]">Response within 1 business day. Every time.</span>
            </div>
            <p className="hand hand-lg -rotate-2 mt-8 ml-2">we actually respond.</p>
            <p className="dark-reveal hand hand-lg rotate-1 mt-3 ml-2">
              read at 2am. replied to by 9am.
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================== */}
      {/* FORM + CONTACT INFO                                         */}
      {/* ========================================================== */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-[1240px] px-6 md:px-10">
          <div className="grid lg:grid-cols-12 gap-12">
            {/* Form */}
            <div className="lg:col-span-7">
              <div className="brand-card !p-8 md:!p-10">
                {submitted ? (
                  <div className="flex flex-col items-center justify-center py-16 text-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[color:var(--color-teal-500)]/10 mb-5">
                      <CheckCircle2 className="h-8 w-8 text-[color:var(--color-teal-500)]" strokeWidth={1.8} />
                    </div>
                    <h2
                      className="text-3xl text-foreground mb-3"
                      style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 70" }}
                    >
                      Message received.
                    </h2>
                    <p className="text-[color:var(--color-ink-muted)] max-w-[44ch] leading-relaxed">
                      We&apos;ll get back to you within one business day. If your matter is urgent, please call us directly on{" "}
                      <a href={`tel:${BUSINESS.phone.replace(/\s/g, "")}`} className="text-[color:var(--color-teal-500)] font-medium">
                        {BUSINESS.phone}
                      </a>
                      .
                    </p>
                    <p className="hand hand-lg mt-6 -rotate-1">we&apos;ll be in touch.</p>
                  </div>
                ) : (
                  <>
                    <p className="eyebrow">Send us a message</p>
                    <h2
                      className="text-3xl md:text-[2.4rem] leading-tight mt-4 mb-8 text-foreground"
                      style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 60" }}
                    >
                      Tell us what&apos;s{" "}
                      <span
                        className="italic text-[color:var(--color-teal-500)]"
                        style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 100" }}
                      >
                        going on
                      </span>
                      .
                    </h2>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      {/* Honeypot — hidden from real users, bots fill it */}
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
                          className="rounded-2xl border border-red-300/60 bg-red-50 px-4 py-3 text-sm text-red-800"
                        >
                          {error}
                        </div>
                      )}

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label htmlFor="name" className="field-label">
                            Name
                          </label>
                          <input
                            id="name"
                            name="name"
                            placeholder="Your name"
                            required
                            maxLength={200}
                            className="field-input"
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="field-label">
                            Email
                          </label>
                          <input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="you@example.com"
                            required
                            className="field-input"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="phone" className="field-label">
                          Phone <span className="text-[color:var(--color-ink-faint)] normal-case tracking-normal text-[10px]">(optional)</span>
                        </label>
                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          placeholder="04XX XXX XXX"
                          className="field-input"
                        />
                      </div>

                      <div>
                        <label htmlFor="role" className="field-label">
                          I am a&hellip;
                        </label>
                        <select
                          id="role"
                          name="role"
                          required
                          value={selectedRole}
                          onChange={(e) => setSelectedRole(e.target.value)}
                          className="field-select"
                        >
                          <option value="" disabled>
                            Select your role
                          </option>
                          <option value="participant">NDIS Participant</option>
                          <option value="family">Family Member or Carer</option>
                          <option value="support-coordinator">Support Coordinator</option>
                          <option value="provider">NDIS Provider</option>
                          <option value="other">Other</option>
                        </select>
                      </div>

                      <div>
                        <label htmlFor="enquiry" className="field-label">
                          How can we help?
                        </label>
                        <textarea
                          id="enquiry"
                          name="enquiry"
                          placeholder="Tell us about your situation and what you need help with."
                          rows={5}
                          required
                          maxLength={5000}
                          className="field-textarea"
                        />
                      </div>

                      <div className="flex items-start gap-3 pt-2">
                        <input
                          type="checkbox"
                          id="consent"
                          name="consent"
                          required
                          className="mt-1 h-4 w-4 shrink-0 rounded border-[color:var(--color-ink-muted)]/30 accent-[color:var(--color-teal-500)]"
                        />
                        <label htmlFor="consent" className="text-xs text-[color:var(--color-ink-muted)] font-normal leading-relaxed">
                          I consent to Waylight collecting and storing this information to respond to my enquiry, in accordance
                          with our{" "}
                          <a
                            href="/policies/WL-POL-13-information-management.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline hover:text-foreground transition-colors"
                          >
                            Privacy Policy
                          </a>
                          . This is an expression of interest, not a service agreement.
                        </label>
                      </div>

                      <button
                        type="submit"
                        disabled={submitting}
                        aria-describedby={error ? "form-error" : undefined}
                        className="btn btn-primary w-full sm:w-auto disabled:opacity-60 disabled:cursor-not-allowed"
                      >
                        {submitting ? "Sending..." : "Send message"}
                        {!submitting && <ArrowRight className="h-4 w-4" />}
                      </button>
                    </form>
                  </>
                )}
              </div>
            </div>

            {/* Contact info sidebar */}
            <aside className="lg:col-span-5 stack stack-lg">
              <div>
                <p className="eyebrow">Or reach out directly</p>
                <h2
                  className="text-3xl md:text-[2.4rem] leading-tight mt-4 text-foreground"
                  style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 60" }}
                >
                  Three ways to{" "}
                  <span
                    className="italic text-[color:var(--color-teal-500)]"
                    style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 100" }}
                  >
                    find us
                  </span>
                  .
                </h2>
              </div>

              <div className="space-y-4">
                <ContactRow
                  icon={<Phone className="h-5 w-5" strokeWidth={1.8} />}
                  label="Phone"
                  value={BUSINESS.phone}
                  href={`tel:${BUSINESS.phone.replace(/\s/g, "")}`}
                />
                <ContactRow
                  icon={<Mail className="h-5 w-5" strokeWidth={1.8} />}
                  label="Email"
                  value={BUSINESS.email}
                  href={`mailto:${BUSINESS.email}`}
                />
                <ContactRow
                  icon={<MapPin className="h-5 w-5" strokeWidth={1.8} />}
                  label="Location"
                  value={BUSINESS.location}
                />
              </div>

              <div className="rounded-2xl border border-[color:var(--color-gold-500)]/30 bg-[color:var(--color-gold-100)]/30 px-5 py-4 text-xs text-[color:var(--color-ink-muted)] leading-relaxed">
                <p className="font-medium text-foreground mb-1">Heads up</p>
                <p>
                  Waylight isn&apos;t yet a registered NDIS provider. Every enquiry is treated as an expression of interest. We
                  will be in touch the moment we&apos;re accepting participants (expected {BUSINESS.launchTarget}).
                </p>
              </div>

              <article className="brand-card">
                <p className="eyebrow eyebrow-gold">For support coordinators</p>
                <h3
                  className="text-2xl text-foreground mt-3 leading-tight"
                  style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 70" }}
                >
                  Referring a participant?
                </h3>
                <p className="text-sm text-[color:var(--color-ink-muted)] leading-relaxed mt-3">
                  Select &ldquo;Support Coordinator&rdquo; in the form and include the participant&apos;s name. Once registration
                  is confirmed, we handle onboarding end-to-end and keep you in the loop the whole way.
                </p>
                <ul className="space-y-2 mt-5 text-sm text-[color:var(--color-ink-muted)]">
                  <li className="flex items-start gap-2">
                    <span className="yes mt-0.5" style={{ width: 18, height: 18 }}>
                      <CheckCircle2 className="h-2.5 w-2.5" strokeWidth={3.5} />
                    </span>
                    Onboarding within 2 business days
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="yes mt-0.5" style={{ width: 18, height: 18 }}>
                      <CheckCircle2 className="h-2.5 w-2.5" strokeWidth={3.5} />
                    </span>
                    You stay in the loop on budget and claims
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="yes mt-0.5" style={{ width: 18, height: 18 }}>
                      <CheckCircle2 className="h-2.5 w-2.5" strokeWidth={3.5} />
                    </span>
                    Direct line to the plan manager, not a queue
                  </li>
                </ul>
                <Link href="/for-support-coordinators" className="btn btn-ghost btn-sm mt-6">
                  More for coordinators
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </article>
              <p className="hand -rotate-1 ml-3">a real human reads every message.</p>
            </aside>
          </div>
        </div>
      </section>
    </>
  )
}

/* ============================================================ */
/* Local helpers                                                */
/* ============================================================ */

function ContactRow({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode
  label: string
  value: string
  href?: string
}) {
  const inner = (
    <div className="flex items-start gap-4 group">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[color:var(--color-teal-500)]/10 text-[color:var(--color-teal-500)] group-hover:bg-[color:var(--color-teal-500)] group-hover:text-[color:var(--color-ivory-50)] transition-colors duration-300">
        {icon}
      </div>
      <div>
        <p className="text-[11px] uppercase tracking-[0.18em] text-[color:var(--color-ink-faint)] font-medium">{label}</p>
        <p className="text-base text-foreground mt-0.5">{value}</p>
      </div>
    </div>
  )
  if (href) {
    return (
      <a href={href} className="block hover:bg-white/40 -mx-3 px-3 py-1 rounded-2xl transition-colors">
        {inner}
      </a>
    )
  }
  return <div className="-mx-3 px-3 py-1">{inner}</div>
}
