import type { Metadata } from "next"
import { Geist } from "next/font/google"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { BASE_URL } from "@/lib/constants"
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
    "Queensland NDIS Plan Management. We handle the financial side of your NDIS plan so you can focus on your goals. Personal service from a dedicated plan manager.",
  openGraph: {
    type: "website",
    locale: "en_AU",
    siteName: "Waylight Plan Management",
    title: "Waylight Plan Management | NDIS Plan Manager QLD",
    description:
      "Queensland NDIS Plan Management. Personal service from a dedicated plan manager. Invoice processing, budget tracking, and provider choice.",
  },
  twitter: {
    card: "summary",
    title: "Waylight Plan Management | NDIS Plan Manager QLD",
    description:
      "Queensland NDIS Plan Management. Personal service from a dedicated plan manager.",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
