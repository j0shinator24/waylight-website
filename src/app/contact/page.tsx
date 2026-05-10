import type { Metadata } from "next"
import { ContactForm } from "@/components/contact-form"
import { BASE_URL, BUSINESS } from "@/lib/constants"
import { SCHEMA_IDS } from "@/components/seo/json-ld"

export const metadata: Metadata = {
  title: { absolute: "Contact Waylight | NDIS Plan Manager Queensland" },
  description:
    "Contact Waylight Plan Management. Phone, email, and contact form. We respond within one business day. Queensland-based NDIS plan management.",
  alternates: { canonical: `${BASE_URL}/contact` },
  openGraph: {
    title: "Contact Waylight | NDIS Plan Manager Queensland",
    description: "Contact Waylight Plan Management. Response within one business day.",
    url: `${BASE_URL}/contact`,
    type: "website",
    locale: "en_AU",
    images: [
      {
        url: "/og/contact",
        width: 1200,
        height: 630,
        alt: "Contact Waylight - talk to a real person.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/og/contact"],
  },
}

const contactPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "@id": `${BASE_URL}/contact#contactpage`,
  url: `${BASE_URL}/contact`,
  name: "Contact Waylight | NDIS Plan Manager Queensland",
  description:
    "Get in touch with Waylight Plan Management. Contact form, phone, email, and Queensland location. Response within one business day.",
  isPartOf: { "@id": SCHEMA_IDS.website },
  about: { "@id": SCHEMA_IDS.organization },
  mainEntity: { "@id": SCHEMA_IDS.organization },
}

const contactPointsJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${BASE_URL}/contact#contactpoints`,
  url: BASE_URL,
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "customer service",
      email: BUSINESS.email,
      telephone: BUSINESS.phone,
      areaServed: "AU-QLD",
      availableLanguage: "English",
      hoursAvailable: "Mo-Fr 09:00-17:00",
    },
    {
      "@type": "ContactPoint",
      contactType: "support coordinator referrals",
      email: BUSINESS.email,
      telephone: BUSINESS.phone,
      areaServed: "AU-QLD",
      availableLanguage: "English",
    },
  ],
}

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
    { "@type": "ListItem", position: 2, name: "Contact", item: `${BASE_URL}/contact` },
  ],
}

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPointsJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <ContactForm />
    </>
  )
}
