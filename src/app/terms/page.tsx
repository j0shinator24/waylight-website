import type { Metadata } from "next"
import { BUSINESS } from "@/lib/constants"

export const metadata: Metadata = {
  title: "Terms of Use",
  description:
    "Terms of use for the Waylight Plan Management website. General information disclaimer, limitation of liability, and governing law.",
}

export default function TermsPage() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-[60ch] px-4 md:px-8">
        <h1 className="text-3xl font-bold tracking-tight md:text-4xl mb-8">
          Terms of Use
        </h1>
        <p className="text-xs text-muted-foreground mb-8">
          Last updated: April 2026
        </p>

        <div className="stack stack-lg text-muted-foreground leading-relaxed text-sm">
          <div>
            <h2 className="text-lg font-semibold text-foreground mb-3">
              General information
            </h2>
            <p>
              The content on this website is provided by {BUSINESS.legalName} (ABN {BUSINESS.abn}) for general information purposes only. It is not intended as professional, financial, legal, or accounting advice. You should not rely on any information on this website as a substitute for professional advice relevant to your specific circumstances.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-foreground mb-3">
              NDIS pricing and rates
            </h2>
            <p>
              NDIS rates displayed on this website are sourced from the current NDIS Pricing Arrangements and Price Limits (PAPL) published by the National Disability Insurance Agency. These rates are set by the NDIA, not by Waylight, and may change. Always refer to the{" "}
              <a
                href="https://www.ndis.gov.au/providers/pricing-arrangements"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-foreground transition-colors"
              >
                official NDIS Pricing Arrangements
              </a>{" "}
              for the latest rates.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-foreground mb-3">
              Registration status
            </h2>
            <p>
              {BUSINESS.name} is not yet a registered NDIS provider. Our registration application is currently being processed by the NDIS Quality and Safeguards Commission. Until registration is confirmed, we cannot accept participants or process NDIS claims. All enquiries received through this website are treated as expressions of interest.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-foreground mb-3">
              Provider tools
            </h2>
            <p>
              Provider tools described on this website (NoteFlow, RosterIQ, AuditShield, NDIS Butler) are in development. Features described reflect our development goals and may change. No commitment is made regarding availability, pricing, or specific capabilities until the products are released.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-foreground mb-3">
              Limitation of liability
            </h2>
            <p>
              To the maximum extent permitted by law, {BUSINESS.legalName} excludes all liability for any loss or damage arising from the use of this website or reliance on any information contained on it. This includes, without limitation, indirect or consequential loss, loss of data, or loss of opportunity.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-foreground mb-3">
              Intellectual property
            </h2>
            <p>
              All content on this website, including text, design, and layout, is the property of {BUSINESS.legalName} unless otherwise stated. You may not reproduce, distribute, or republish any content without prior written permission.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-foreground mb-3">
              External links
            </h2>
            <p>
              This website may contain links to external websites. {BUSINESS.legalName} is not responsible for the content, accuracy, or privacy practices of any linked website.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-foreground mb-3">
              Governing law
            </h2>
            <p>
              These terms are governed by the laws of Queensland, Australia. Any disputes arising from the use of this website are subject to the exclusive jurisdiction of the courts of Queensland.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-foreground mb-3">
              Contact
            </h2>
            <p>
              Questions about these terms can be directed to{" "}
              <a
                href={`mailto:${BUSINESS.email}`}
                className="underline hover:text-foreground transition-colors"
              >
                {BUSINESS.email}
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
