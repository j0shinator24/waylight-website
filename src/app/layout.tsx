import type { Metadata } from "next"
import { Fraunces, DM_Sans, Caveat } from "next/font/google"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { ThemeProvider } from "@/components/theme-provider"
import { SiteJsonLd } from "@/components/seo/json-ld"
import { BASE_URL, BUSINESS } from "@/lib/constants"
import "./globals.css"

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
  axes: ["opsz", "SOFT"],
})

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
})

const caveat = Caveat({
  variable: "--font-handwritten",
  subsets: ["latin"],
  display: "swap",
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
    title: "Waylight Plan Management | NDIS Plan Manager QLD",
    description:
      "Queensland NDIS plan management. One dedicated plan manager who knows your name.",
    images: ["/og/default"],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${dmSans.variable} ${caveat.variable} h-full antialiased`} suppressHydrationWarning>
      <body className="min-h-full flex flex-col font-sans bg-background text-foreground">
        <div className="candlelight-ambient" aria-hidden="true" />
        <SiteJsonLd />
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
