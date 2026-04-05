import type { Metadata } from "next"
import { Geist } from "next/font/google"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { ThemeProvider } from "@/components/theme-provider"
import { BASE_URL, BUSINESS } from "@/lib/constants"
import "./globals.css"

const geistSans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Waylight Plan Management | NDIS Plan Manager QLD",
    template: "%s | Waylight Plan Management",
  },
  description:
    "Queensland NDIS plan management with a dedicated plan manager. Invoice processing, budget tracking, provider payments, and monthly reporting. No call centres.",
  openGraph: {
    type: "website",
    locale: "en_AU",
    siteName: "Waylight Plan Management",
    title: "Waylight Plan Management | NDIS Plan Manager QLD",
    description:
      "Queensland NDIS plan management. One dedicated plan manager who knows your name. Invoice processing, budget tracking, and full provider choice.",
  },
  twitter: {
    card: "summary",
    title: "Waylight Plan Management | NDIS Plan Manager QLD",
    description:
      "Queensland NDIS plan management. One dedicated plan manager who knows your name.",
  },
}

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: BUSINESS.name,
  legalName: BUSINESS.legalName,
  description:
    "NDIS plan management service providing invoice processing, budget tracking, and provider payments for NDIS participants in Queensland.",
  url: BASE_URL,
  email: BUSINESS.email,
  telephone: BUSINESS.phone,
  taxID: `ABN ${BUSINESS.abn}`,
  founder: {
    "@type": "Person",
    name: BUSINESS.founder,
    jobTitle: "Plan Manager",
  },
  areaServed: {
    "@type": "State",
    name: "Queensland",
    containedInPlace: { "@type": "Country", name: "Australia" },
  },
  address: {
    "@type": "PostalAddress",
    addressRegion: "QLD",
    addressCountry: "AU",
  },
  priceRange: "Funded by NDIS",
  knowsAbout: [
    "NDIS Plan Management",
    "NDIS Invoice Processing",
    "NDIS Budget Tracking",
    "NDIS Provider Payments",
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} h-full antialiased`} suppressHydrationWarning>
      <body className="min-h-full flex flex-col font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground focus:text-sm"
        >
          Skip to main content
        </a>
        <ThemeProvider>
          <div className="bg-accent/10 border-b border-accent/20 text-center py-2 px-4 text-xs text-muted-foreground">
            Waylight is not yet a registered NDIS provider. We are accepting expressions of interest ahead of our expected {BUSINESS.launchTarget} launch.
          </div>
          <Header />
          <main id="main-content" className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
