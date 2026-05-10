"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"

const navItems = [
  { href: "/", label: "Home" },
  { href: "/what-we-handle", label: "What we handle" },
  { href: "/how-it-works", label: "How it works" },
  { href: "/for-support-coordinators", label: "Coordinators" },
  { href: "/about", label: "About" },
]

export function Header() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // close mobile menu on route change
  useEffect(() => {
    setOpen(false)
  }, [pathname])

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(href + "/")

  return (
    <header
      className={[
        "sticky top-0 z-50 w-full transition-colors duration-300",
        scrolled
          ? "bg-[#FBF7EE]/95 dark:bg-transparent dark:backdrop-blur-md"
          : "bg-transparent",
      ].join(" ")}
    >
      <div className="mx-auto max-w-[1240px] px-6 md:px-10 h-20 flex items-center justify-between gap-6">
        {/* Left group: brandmark + desktop nav share a fixed gap */}
        <div className="flex items-center gap-10 lg:gap-14">
          <Link href="/" className="flex items-center gap-3 group shrink-0" aria-label="Waylight home">
            <Image
              src="/logo.png"
              alt=""
              width={42}
              height={42}
              className="h-10 w-10 object-contain transition-transform duration-500 group-hover:rotate-[-3deg] logo-candle"
              priority
            />
            <span className="font-display text-2xl tracking-tight text-foreground" style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 60" }}>
              waylight
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-9" aria-label="Main navigation">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="nav-link"
                data-active={isActive(item.href) ? "true" : "false"}
                aria-current={isActive(item.href) ? "page" : undefined}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Desktop CTA + theme */}
        <div className="hidden md:flex items-center gap-4 shrink-0">
          <ThemeToggle />
          <Link href="/contact" className="btn btn-ghost btn-sm">
            Talk to us
          </Link>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-black/10 text-foreground hover:bg-white/60 transition"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile sheet */}
      {open && (
        <div className="md:hidden border-t border-black/[0.06] bg-[color:var(--color-ivory-50)]">
          <nav className="mx-auto max-w-[1240px] px-6 py-6 flex flex-col gap-1" aria-label="Mobile navigation">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-3 py-3 text-base font-medium text-foreground/80 hover:text-foreground rounded-lg hover:bg-white/60"
                aria-current={isActive(item.href) ? "page" : undefined}
              >
                {item.label}
              </Link>
            ))}
            <Link href="/contact" className="btn btn-primary mt-3 w-full justify-center">
              Talk to us
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
