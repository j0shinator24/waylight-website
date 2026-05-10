import type { Metadata } from "next"
import {
  FileText,
  ShieldCheck,
  AlertTriangle,
  Scale,
  Lock,
  RefreshCw,
  DollarSign,
  Search,
  Handshake,
  Building2,
  ClipboardCheck,
  UserCheck,
  Briefcase,
} from "lucide-react"
import { BASE_URL } from "@/lib/constants"
import { SCHEMA_IDS } from "@/components/seo/json-ld"

export const metadata: Metadata = {
  title: "NDIS Practice Standards Policies",
  description:
    "All 14 NDIS Practice Standards-aligned policies from Waylight. Financial management, fraud prevention, complaints, code of conduct, privacy, and more.",
  alternates: { canonical: `${BASE_URL}/policies` },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Policies | Waylight Plan Management",
    description: "All 14 NDIS Practice Standards-aligned policies, published openly.",
    url: `${BASE_URL}/policies`,
    type: "website",
    locale: "en_AU",
    images: [
      {
        url: "/og/default",
        width: 1200,
        height: 630,
        alt: "Waylight Plan Management - NDIS plan manager based in Queensland.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/og/default"],
  },
}

const policies = [
  {
    icon: DollarSign,
    title: "Financial Management",
    description:
      "How Waylight manages NDIS funds, processes claims, and maintains financial records. Covers budget tracking, reconciliation, and reporting.",
    href: "/policies/WL-POL-01-financial-management.pdf",
  },
  {
    icon: Search,
    title: "Fraud Prevention",
    description:
      "Controls and processes we use to prevent, detect, and respond to fraud related to NDIS funding.",
    href: "/policies/WL-POL-02-fraud-prevention.pdf",
  },
  {
    icon: Scale,
    title: "Conflict of Interest",
    description:
      "How we identify and manage conflicts of interest to make sure our decisions always put participants first.",
    href: "/policies/WL-POL-03-conflict-of-interest.pdf",
  },
  {
    icon: Handshake,
    title: "Participant Money & Property",
    description:
      "Safeguards for participant funds and property. Covers handling, separation of funds, and accountability.",
    href: "/policies/WL-POL-04-participant-money-property.pdf",
  },
  {
    icon: FileText,
    title: "Service Agreement",
    description:
      "The framework for participant agreements, including scope of service, consent, and termination.",
    href: "/policies/WL-POL-05-service-agreement.pdf",
  },
  {
    icon: Building2,
    title: "Governance",
    description:
      "How Waylight is governed, including decision-making, accountability, and organisational oversight.",
    href: "/policies/WL-POL-06-governance.pdf",
  },
  {
    icon: AlertTriangle,
    title: "Incident Management",
    description:
      "How we identify, report, and respond to incidents. Covers reporting obligations to the NDIS Quality and Safeguards Commission.",
    href: "/policies/WL-POL-07-incident-management.pdf",
  },
  {
    icon: FileText,
    title: "Complaints Management",
    description:
      "How to raise a complaint, how we investigate, and what to expect. If you are unhappy with any aspect of our service, we want to hear about it.",
    href: "/policies/WL-POL-08-complaints-management.pdf",
  },
  {
    icon: ClipboardCheck,
    title: "Risk Management & WHS",
    description:
      "How we identify, assess, and manage risks to participants and the business, including workplace health and safety.",
    href: "/policies/WL-POL-09-risk-management-whs.pdf",
  },
  {
    icon: Briefcase,
    title: "HR Management",
    description:
      "How Waylight manages workforce arrangements, including the contractor-accountant model and performance oversight.",
    href: "/policies/WL-POL-10-hr-management.pdf",
  },
  {
    icon: UserCheck,
    title: "Worker Screening & Induction",
    description:
      "Requirements for NDIS Worker Screening Checks, induction processes, and ongoing training obligations.",
    href: "/policies/WL-POL-11-worker-screening-induction.pdf",
  },
  {
    icon: RefreshCw,
    title: "Continuity of Supports",
    description:
      "What happens if our service is disrupted. How we make sure your supports continue and your providers keep getting paid.",
    href: "/policies/WL-POL-12-continuity-of-supports.pdf",
  },
  {
    icon: Lock,
    title: "Information Management & Privacy",
    description:
      "How we collect, store, and protect your personal information. Your data is handled in line with the Australian Privacy Principles and NDIS requirements.",
    href: "/policies/WL-POL-13-information-management.pdf",
  },
  {
    icon: ShieldCheck,
    title: "Code of Conduct",
    description:
      "The standards we hold ourselves to when working with NDIS participants. Covers respect, privacy, safety, and professional behaviour.",
    href: "/policies/WL-POL-14-code-of-conduct.pdf",
  },
]

const collectionPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": `${BASE_URL}/policies#collectionpage`,
  url: `${BASE_URL}/policies`,
  name: "Waylight Plan Management Policies",
  description: "All 14 NDIS Practice Standards-aligned policies published by Waylight Plan Management.",
  isPartOf: { "@id": SCHEMA_IDS.website },
  about: { "@id": SCHEMA_IDS.organization },
  hasPart: policies.map((p) => ({
    "@type": "DigitalDocument",
    name: `${p.title} Policy`,
    url: `${BASE_URL}${p.href}`,
    encodingFormat: "application/pdf",
  })),
}

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
    { "@type": "ListItem", position: 2, name: "Policies", item: `${BASE_URL}/policies` },
  ],
}

export default function PoliciesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionPageJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* HERO */}
      <section className="relative overflow-hidden atmos grain pt-28 md:pt-36 pb-20 md:pb-24">
        <div className="arch hidden md:block" style={{ right: "-160px", top: "60px", width: "520px", height: "260px" }} />
        <div className="arch hidden md:block" style={{ right: "-80px", top: "140px", width: "380px", height: "190px", opacity: 0.55 }} />

        <div className="relative mx-auto max-w-[1240px] px-6 md:px-10">
          <div className="max-w-[60ch]">
            <p className="eyebrow rise d1">Our policies</p>
            <h1
              className="text-[2.6rem] sm:text-5xl md:text-[4rem] leading-[1] mt-7 rise d2 text-foreground"
              style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 60" }}
            >
              All 14, in{" "}
              <span
                className="italic text-[color:var(--color-teal-500)]"
                style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 100" }}
              >
                plain sight
              </span>
              .
            </h1>
            <p className="mt-8 text-lg md:text-xl text-[color:var(--color-ink-soft)] leading-[1.7] max-w-[58ch] rise d3">
              Transparency is part of how we work. Every NDIS Practice Standards-aligned policy is published here, in full,
              for anyone to read. How Waylight operates. How we protect your information. What to do if something goes wrong.
            </p>
            <p className="hand hand-lg -rotate-2 mt-7 ml-2">no hidden filing cabinets.</p>
          </div>
        </div>
      </section>

      {/* POLICIES GRID */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-[1180px] px-6 md:px-10">
          <h2 className="sr-only">NDIS Practice Standards-aligned policies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {policies.map((policy, i) => (
              <a
                key={policy.title}
                href={policy.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block group"
              >
                <article className="brand-card h-full">
                  <div className="flex items-start gap-5">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[color:var(--color-teal-500)]/10 text-[color:var(--color-teal-500)] group-hover:bg-[color:var(--color-teal-500)] group-hover:text-[color:var(--color-ivory-50)] transition-colors duration-500">
                      <policy.icon className="h-5 w-5" strokeWidth={1.7} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-baseline gap-3">
                        <span
                          className="font-display italic text-xl text-[color:var(--color-gold-500)] leading-none"
                          style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 100" }}
                        >
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <h3 className="text-xl text-foreground leading-tight">{policy.title}</h3>
                      </div>
                      <p className="text-[15px] text-[color:var(--color-ink-muted)] leading-relaxed mt-3">
                        {policy.description}
                      </p>
                      <p className="mt-4 text-xs uppercase tracking-[0.18em] text-[color:var(--color-ink-faint)] font-medium">
                        View policy (PDF) →
                      </p>
                    </div>
                  </div>
                </article>
              </a>
            ))}
          </div>

          <p className="mt-12 max-w-[60ch] text-sm text-[color:var(--color-ink-muted)] leading-relaxed">
            All 14 NDIS Practice Standards-aligned policies are published above. If you need a policy in an alternative
            format, please contact us and we&apos;ll provide it.
          </p>
          <p className="hand mt-6 -rotate-1">honest, open, on the record.</p>
        </div>
      </section>
    </>
  )
}
