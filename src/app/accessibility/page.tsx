import type { Metadata } from "next"
import { BUSINESS } from "@/lib/constants"

export const metadata: Metadata = {
  title: "Accessibility Statement",
  description:
    "Waylight Plan Management is committed to making our website accessible to everyone, including people with disabilities.",
}

export default function AccessibilityPage() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-[60ch] px-4 md:px-8">
        <h1 className="text-3xl font-bold tracking-tight md:text-4xl mb-8">
          Accessibility Statement
        </h1>

        <div className="stack stack-lg text-muted-foreground leading-relaxed text-sm">
          <div>
            <h2 className="text-lg font-semibold text-foreground mb-3">
              Our commitment
            </h2>
            <p>
              {BUSINESS.name} is committed to making our website accessible to everyone, including people with disabilities. As an NDIS plan management provider, we recognise that accessibility is not optional. Our participants, their families, and support coordinators deserve a website that works for them regardless of ability, device, or assistive technology.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-foreground mb-3">
              Standards
            </h2>
            <p>
              We aim to meet the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA standard. This includes ensuring sufficient colour contrast, keyboard navigability, screen reader compatibility, semantic HTML structure, and responsive design across all devices.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-foreground mb-3">
              What we have done
            </h2>
            <ul className="space-y-2 list-disc pl-5">
              <li>Skip-to-content link for keyboard users</li>
              <li>Semantic HTML landmarks (header, nav, main, footer)</li>
              <li>ARIA labels on all interactive elements</li>
              <li>Visible focus indicators on all focusable elements</li>
              <li>Sufficient colour contrast ratios (WCAG AA minimum)</li>
              <li>Dark mode support for users who prefer reduced brightness</li>
              <li>Responsive layout that works on mobile, tablet, and desktop</li>
              <li>Form labels associated with all input fields</li>
              <li>Error messages announced to screen readers</li>
              <li>Touch targets meeting the 44px minimum</li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-foreground mb-3">
              Known limitations
            </h2>
            <p>
              Our policy documents are currently available as PDF files. We are working to provide HTML alternatives for improved accessibility. If you have difficulty accessing any policy document, contact us and we will provide the content in an alternative format.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-foreground mb-3">
              Feedback
            </h2>
            <p>
              If you encounter any accessibility barrier on this website, please contact us at{" "}
              <a
                href={`mailto:${BUSINESS.email}`}
                className="underline hover:text-foreground transition-colors"
              >
                {BUSINESS.email}
              </a>{" "}
              or call{" "}
              <a
                href={`tel:${BUSINESS.phone.replace(/\s/g, "")}`}
                className="underline hover:text-foreground transition-colors"
              >
                {BUSINESS.phone}
              </a>
              . We take accessibility feedback seriously and will respond within two business days.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
