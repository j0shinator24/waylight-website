/**
 * Dynamic Open Graph image generator.
 *
 * Single route handles every Waylight page's social preview.
 * URL pattern: https://waylight.com.au/og/[slug]
 *
 * Slugs map to entries in src/lib/og-content.ts. Missing slugs
 * fall through to the `default` template.
 *
 * Implementation notes (Satori constraints honoured):
 * - Flexbox only (no grid, no float).
 * - Custom fonts fetched from Google Fonts as TTF binary at request time.
 * - Variable Fraunces axes are not supported by Satori; we approximate
 *   the live site's `opsz`/`SOFT` axes with static italic + weight pairs
 *   (closest-equivalent: italic 300/400 stand in for SOFT 100, regular
 *   400 stands in for SOFT 60-70).
 * - Layered radial gradients are flattened to two stacked
 *   `radial-gradient` backgrounds where possible. Where a third overlay
 *   would push beyond Satori's reliable rendering, it is dropped.
 * - All visual tokens mirror the brand palette declared in
 *   src/app/globals.css (ivory, ink, teal, gold).
 */

import { ImageResponse } from "next/og"
import { getOgEntry, type OgEntry } from "@/lib/og-content"
import type { ReactElement } from "react"

/**
 * Inline SVG icons. Lucide React v1.7 ships with `"use client"` and a
 * React Context hook, which Satori (server-rendered) cannot evaluate.
 * Inlining the same paths keeps the route fully server-side and matches
 * the live site's stroke weight (1.7) used elsewhere in the codebase.
 *
 * Why an array of [tag, attrs] tuples instead of JSX fragments:
 * Satori chokes on React fragments when they reach the rendered tree
 * (TypeError: Cannot convert a Symbol value to a string). Building each
 * child directly via React.createElement with a string `key` sidesteps
 * the symbol-as-key path that Satori cannot serialise.
 */
type IconProps = { color: string; size?: number; strokeWidth?: number }
type IconPart = ["path" | "circle", Record<string, string | number>]

function makeIcon(parts: IconPart[]) {
  return function Icon({ color, size = 22, strokeWidth = 1.7 }: IconProps) {
    const children = parts.map(([tag, attrs], i) => {
      if (tag === "circle") {
        return (
          <circle
            key={i}
            cx={attrs.cx as number}
            cy={attrs.cy as number}
            r={attrs.r as number}
          />
        )
      }
      return <path key={i} d={attrs.d as string} />
    })
    return (
      <div style={{ width: size, height: size, display: "flex" }}>
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          xmlns="http://www.w3.org/2000/svg"
        >
          {children}
        </svg>
      </div>
    )
  }
}

const FileTextIcon = makeIcon([
  [
    "path",
    {
      d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",
    },
  ],
  ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5" }],
  ["path", { d: "M10 9H8" }],
  ["path", { d: "M16 13H8" }],
  ["path", { d: "M16 17H8" }],
])
const BarChart3Icon = makeIcon([
  ["path", { d: "M3 3v16a2 2 0 0 0 2 2h16" }],
  ["path", { d: "M18 17V9" }],
  ["path", { d: "M13 17V5" }],
  ["path", { d: "M8 17v-3" }],
])
const BellIcon = makeIcon([
  ["path", { d: "M10.268 21a2 2 0 0 0 3.464 0" }],
  [
    "path",
    {
      d: "M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",
    },
  ],
])
const UsersIcon = makeIcon([
  ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" }],
  ["circle", { cx: 9, cy: 7, r: 4 }],
  ["path", { d: "M22 21v-2a4 4 0 0 0-3-3.87" }],
  ["path", { d: "M16 3.13a4 4 0 0 1 0 7.75" }],
])
const BookOpenIcon = makeIcon([
  ["path", { d: "M12 7v14" }],
  [
    "path",
    {
      d: "M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",
    },
  ],
])
const LibraryIcon = makeIcon([
  ["path", { d: "m16 6 4 14" }],
  ["path", { d: "M12 6v14" }],
  ["path", { d: "M8 8v12" }],
  ["path", { d: "M4 4v16" }],
])
const HelpCircleIcon = makeIcon([
  ["circle", { cx: 12, cy: 12, r: 10 }],
  ["path", { d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" }],
  ["path", { d: "M12 17h.01" }],
])
const PhoneIcon = makeIcon([
  [
    "path",
    {
      d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",
    },
  ],
])
const ArrowRightIcon = makeIcon([
  ["path", { d: "M5 12h14" }],
  ["path", { d: "m12 5 7 7-7 7" }],
])

/** Small teal check tick used inside the home page's trust pills. */
function CheckTickIcon() {
  return (
    <div style={{ width: 12, height: 12, display: "flex" }}>
      <svg
        width={12}
        height={12}
        viewBox="0 0 24 24"
        fill="none"
        stroke={C.teal500}
        strokeWidth={3.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M20 6 9 17l-5-5" />
      </svg>
    </div>
  )
}

// Force dynamic rendering so updated OG content is reflected without redeploy.
export const dynamic = "force-dynamic"
export const runtime = "nodejs"

const SIZE = { width: 1200, height: 630 } as const

// ---------- Brand tokens (mirror globals.css) ---------------------------
const C = {
  ivory50: "#FDFAF4",
  ivory100: "#FBF7EE",
  ivory300: "#E8DFC9",
  ink: "#1A1F1E",
  inkSoft: "#2C3331",
  inkMuted: "#5C6764",
  inkFaint: "#8A938F",
  teal500: "#1F6F6F",
  teal600: "#175757",
  teal700: "#0E4242",
  teal900: "#0A2F2F",
  gold300: "#D9BE82",
  gold500: "#B8924A",
  gold700: "#9A7836",
}

// ---------- Font loader -------------------------------------------------
type FontSpec = {
  name: string
  data: ArrayBuffer
  weight: 300 | 400 | 500 | 600 | 700
  style: "normal" | "italic"
}

/**
 * Fetch a Google Font binary. The legacy User-Agent below makes Google's
 * CSS endpoint serve WOFF (not WOFF2) URLs - Satori supports WOFF/TTF/OTF
 * but not WOFF2. We grab the latin block (the last @font-face for our
 * family/weight pair, which targets latin Unicode) and download it.
 */
async function loadGoogleFont(
  family: string,
  weight: number,
  italic: boolean,
): Promise<ArrayBuffer> {
  const ital = italic ? "1" : "0"
  const cssUrl =
    `https://fonts.googleapis.com/css2?family=${encodeURIComponent(family)}` +
    `:ital,wght@${ital},${weight}&display=swap`
  const cssRes = await fetch(cssUrl, {
    headers: {
      // Legacy UA triggers WOFF (Satori-compatible) instead of WOFF2.
      "User-Agent":
        "Mozilla/5.0 (Windows NT 5.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/40.0.2214.115 Safari/537.36",
    },
  })
  const css = await cssRes.text()
  // Match all `src: url(...) format('woff'|'truetype'|'opentype')` runs,
  // pick the last one (latin subset is emitted last in Google's CSS).
  const matches = Array.from(
    css.matchAll(/src:\s*url\(([^)]+)\)\s*format\(['"](?:woff|truetype|opentype)['"]\)/g),
  )
  if (matches.length === 0) {
    throw new Error(`Could not resolve font URL for ${family} ${weight} ital=${ital}`)
  }
  const fontUrl = matches[matches.length - 1][1].replace(/^['"]|['"]$/g, "")
  const fontRes = await fetch(fontUrl)
  return await fontRes.arrayBuffer()
}

async function loadFonts(): Promise<FontSpec[]> {
  // Subset chosen to keep total font payload under Satori's 500KB budget.
  // We include: Fraunces 400/300-italic (display + emphasis),
  //             DM Sans 400/500 (body + eyebrow weights),
  //             Caveat 600 (hand annotations).
  const [frauncesReg, frauncesItalic, dmReg, dmMed, caveatBold] = await Promise.all([
    loadGoogleFont("Fraunces", 400, false),
    loadGoogleFont("Fraunces", 300, true),
    loadGoogleFont("DM Sans", 400, false),
    loadGoogleFont("DM Sans", 500, false),
    loadGoogleFont("Caveat", 600, false),
  ])
  return [
    { name: "Fraunces", data: frauncesReg, weight: 400, style: "normal" },
    { name: "Fraunces", data: frauncesItalic, weight: 300, style: "italic" },
    { name: "DM Sans", data: dmReg, weight: 400, style: "normal" },
    { name: "DM Sans", data: dmMed, weight: 500, style: "normal" },
    { name: "Caveat", data: caveatBold, weight: 600, style: "normal" },
  ]
}

// ---------- Visual primitives -------------------------------------------
const ATMOS_BACKGROUND = `
  radial-gradient(900px 700px at 0% 100%, rgba(31,111,111,0.16), transparent 55%),
  radial-gradient(1200px 600px at 85% 0%, rgba(184,146,74,0.18), transparent 60%),
  linear-gradient(180deg, ${C.ivory50}, ${C.ivory100})
`.trim()

const ATMOS_SOFT_BACKGROUND = `
  radial-gradient(800px 500px at 80% 10%, rgba(184,146,74,0.10), transparent 65%),
  linear-gradient(180deg, ${C.ivory100}, #F5EFE0)
`.trim()

const ATMOS_DEEP_BACKGROUND = `
  radial-gradient(700px 400px at 50% 0%, rgba(217,190,130,0.25), transparent 60%),
  radial-gradient(900px 700px at 100% 100%, rgba(31,111,111,0.30), transparent 55%),
  radial-gradient(900px 600px at 20% 0%, rgba(184,146,74,0.22), transparent 60%),
  linear-gradient(180deg, ${C.teal700}, ${C.teal900})
`.trim()

/** Reusable arch ornament. SVG path approximates the live `.arch` element. */
function Arch(props: { right: number; top: number; width: number; height: number; opacity?: number; stroke?: string }) {
  const stroke = props.stroke ?? `rgba(184,146,74,0.35)`
  return (
    <div
      style={{
        position: "absolute",
        right: props.right,
        top: props.top,
        width: props.width,
        height: props.height,
        opacity: props.opacity ?? 1,
        display: "flex",
      }}
    >
      <svg
        width={props.width}
        height={props.height}
        viewBox={`0 0 ${props.width} ${props.height}`}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d={`M 0 ${props.height} L 0 ${props.height / 2} A ${props.width / 2} ${props.height / 2} 0 0 1 ${props.width} ${props.height / 2} L ${props.width} ${props.height} Z`}
          fill="none"
          stroke={stroke}
          strokeWidth={1}
        />
      </svg>
    </div>
  )
}

/** Eyebrow row: 32px gold underscore + uppercase teal label. */
function Eyebrow(props: { text: string; color?: string; underscore?: string }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
      <div
        style={{
          width: 32,
          height: 1,
          background: props.underscore ?? C.gold500,
        }}
      />
      <div
        style={{
          fontFamily: "DM Sans",
          fontWeight: 500,
          fontSize: 18,
          letterSpacing: "0.22em",
          textTransform: "uppercase",
          color: props.color ?? C.teal500,
        }}
      >
        {props.text}
      </div>
    </div>
  )
}

/**
 * Headline composed of plain run + italic emphasis run.
 * Italic emphasis renders in teal-500 (or override for dark surfaces).
 * The italic run uses Fraunces italic 300 (closest static stand-in for
 * the live site's variable opsz 144 / SOFT 100 axis).
 */
function Headline(props: {
  pre: string
  italic: string
  post?: string
  size: number
  lineHeight?: number
  color?: string
  italicColor?: string
  italicWeight?: 300 | 400
}) {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        fontFamily: "Fraunces",
        fontSize: props.size,
        fontWeight: 400,
        lineHeight: props.lineHeight ?? 1.0,
        color: props.color ?? C.ink,
        letterSpacing: "-0.025em",
      }}
    >
      <span>{props.pre}</span>
      <span
        style={{
          fontFamily: "Fraunces",
          fontStyle: "italic",
          fontWeight: props.italicWeight ?? 300,
          color: props.italicColor ?? C.teal500,
        }}
      >
        {props.italic}
      </span>
      {props.post ? <span>{props.post}</span> : null}
    </div>
  )
}

// ---------- Templates ---------------------------------------------------

function DefaultTemplate(entry: OgEntry): ReactElement {
  return (
    <div
      style={{
        width: SIZE.width,
        height: SIZE.height,
        display: "flex",
        background: ATMOS_BACKGROUND,
        position: "relative",
        padding: "80px",
        fontFamily: "DM Sans",
      }}
    >
      <Arch right={-160} top={60} width={520} height={260} opacity={0.55} />
      <Arch right={-80} top={140} width={380} height={190} opacity={0.4} />

      {/* Left column */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          width: 760,
          height: "100%",
        }}
      >
        <Eyebrow text={entry.eyebrow} />
        <Headline
          pre={entry.headlinePre}
          italic={entry.headlineItalic}
          post={entry.headlinePost}
          size={70}
          lineHeight={1.0}
        />
        {entry.microline ? (
          <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
            <div style={{ width: "100%", height: 1, background: "rgba(26,31,30,0.10)" }} />
            <div style={{ fontSize: 18, color: C.inkMuted }}>{entry.microline}</div>
          </div>
        ) : null}
      </div>

      {/* Right column - logo monogram */}
      <div
        style={{
          position: "absolute",
          right: 80,
          top: 80,
          width: 320,
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
          gap: 28,
        }}
      >
        <LogoMonogram size={96} fill={C.teal500} />
        <div
          style={{
            fontFamily: "Fraunces",
            fontStyle: "italic",
            fontWeight: 300,
            fontSize: 26,
            color: C.ink,
          }}
        >
          Waylight
        </div>
      </div>
    </div>
  )
}

function HomeTemplate(entry: OgEntry): ReactElement {
  const extras = (entry.extras ?? {}) as {
    bullets?: string[]
    promiseEyebrow?: string
    promisePre?: string
    promiseItalic?: string
  }
  const bullets = extras.bullets ?? []

  return (
    <div
      style={{
        width: SIZE.width,
        height: SIZE.height,
        display: "flex",
        background: ATMOS_BACKGROUND,
        position: "relative",
        padding: "80px",
        fontFamily: "DM Sans",
      }}
    >
      <Arch right={-160} top={40} width={520} height={260} opacity={0.55} />
      <Arch right={-80} top={120} width={380} height={190} opacity={0.4} />

      {/* Left two-thirds */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          width: 700,
          height: "100%",
        }}
      >
        <Eyebrow text={entry.eyebrow} />

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <Headline
            pre={entry.headlinePre}
            italic={entry.headlineItalic}
            post={entry.headlinePost}
            size={72}
            lineHeight={1.0}
          />
        </div>

        <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
          {bullets.map((b) => (
            <div key={b} style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <div
                style={{
                  width: 22,
                  height: 22,
                  borderRadius: 999,
                  background: "rgba(31,111,111,0.12)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <CheckTickIcon />
              </div>
              <div style={{ fontSize: 17, color: C.inkMuted }}>{b}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Right promise card */}
      <div
        style={{
          position: "absolute",
          right: 80,
          top: 110,
          width: 320,
          display: "flex",
          flexDirection: "column",
          background: "#FFFFFF",
          borderRadius: 22,
          padding: "28px 26px",
          gap: 16,
          boxShadow:
            "0 1px 0 rgba(31,111,111,0.06), 0 12px 32px -16px rgba(20,60,60,0.18), 0 32px 64px -40px rgba(20,60,60,0.22)",
          border: "1px solid rgba(26,31,30,0.05)",
        }}
      >
        <Eyebrow text={extras.promiseEyebrow ?? "SMALL ON PURPOSE"} color={C.gold700} />
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            fontFamily: "Fraunces",
            fontSize: 28,
            fontWeight: 400,
            lineHeight: 1.18,
            color: C.ink,
          }}
        >
          <span>{extras.promisePre ?? "We stay "}</span>
          <span
            style={{
              fontFamily: "Fraunces",
              fontStyle: "italic",
              fontWeight: 300,
              color: C.teal500,
            }}
          >
            {extras.promiseItalic ?? "deliberately small."}
          </span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginTop: 4 }}>
          <LogoMonogram size={28} fill={C.teal500} />
          <div style={{ fontSize: 14, color: C.inkFaint, letterSpacing: "0.04em" }}>Waylight . QLD</div>
        </div>
      </div>
    </div>
  )
}

function AboutTemplate(entry: OgEntry): ReactElement {
  const extras = (entry.extras ?? {}) as { handAnnotation?: string }

  return (
    <div
      style={{
        width: SIZE.width,
        height: SIZE.height,
        display: "flex",
        background: ATMOS_SOFT_BACKGROUND,
        position: "relative",
        padding: "80px",
        fontFamily: "DM Sans",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Letter card */}
      <div
        style={{
          width: 880,
          display: "flex",
          flexDirection: "column",
          background: C.ivory50,
          borderRadius: 28,
          padding: "60px 80px 56px",
          gap: 28,
          boxShadow:
            "0 1px 0 rgba(31,111,111,0.08), 0 24px 48px -20px rgba(15,50,50,0.22), 0 60px 100px -60px rgba(10,40,40,0.30)",
          border: "1px solid rgba(26,31,30,0.05)",
          position: "relative",
        }}
      >
        {/* Card top accent line */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 96,
            right: 96,
            height: 6,
            background:
              "linear-gradient(90deg, transparent, rgba(184,146,74,0.55), transparent)",
            display: "flex",
          }}
        />
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Eyebrow text={entry.eyebrow} />
        </div>

        <div style={{ display: "flex", justifyContent: "center" }}>
          <Headline
            pre={entry.headlinePre}
            italic={entry.headlineItalic}
            size={64}
            lineHeight={1.05}
          />
        </div>

        {/* Candle-rule with logo */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 18 }}>
          <div
            style={{
              width: 220,
              height: 1,
              background:
                "linear-gradient(90deg, transparent, rgba(26,31,30,0.18))",
              display: "flex",
            }}
          />
          <LogoMonogram size={28} fill={C.teal500} opacity={0.85} />
          <div
            style={{
              width: 220,
              height: 1,
              background:
                "linear-gradient(90deg, rgba(26,31,30,0.18), transparent)",
              display: "flex",
            }}
          />
        </div>

        {entry.microline ? (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              fontSize: 17,
              color: C.inkMuted,
            }}
          >
            {entry.microline}
          </div>
        ) : null}
      </div>

      {/* Hand annotation below card */}
      {extras.handAnnotation ? (
        <div
          style={{
            position: "absolute",
            bottom: 32,
            left: 0,
            right: 0,
            display: "flex",
            justifyContent: "center",
            transform: "rotate(-2deg)",
          }}
        >
          <div
            style={{
              fontFamily: "Caveat",
              fontWeight: 600,
              fontSize: 32,
              color: C.teal500,
            }}
          >
            {extras.handAnnotation}
          </div>
        </div>
      ) : null}
    </div>
  )
}

function HowItWorksTemplate(entry: OgEntry): ReactElement {
  const extras = (entry.extras ?? {}) as {
    steps?: { numeral: string; caption: string }[]
    handAnnotation?: string
  }
  const steps = extras.steps ?? []

  return (
    <div
      style={{
        width: SIZE.width,
        height: SIZE.height,
        display: "flex",
        flexDirection: "column",
        background: ATMOS_BACKGROUND,
        position: "relative",
        padding: "70px 80px",
        fontFamily: "DM Sans",
        alignItems: "center",
      }}
    >
      <div style={{ display: "flex" }}>
        <Eyebrow text={entry.eyebrow} />
      </div>
      <div style={{ marginTop: 24, display: "flex", textAlign: "center" }}>
        <Headline
          pre={entry.headlinePre}
          italic={entry.headlineItalic}
          size={62}
          lineHeight={1.04}
        />
      </div>

      {/* Step row */}
      <div
        style={{
          marginTop: 56,
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          position: "relative",
        }}
      >
        {/* Dashed connector approximated with a dotted background */}
        <div
          style={{
            position: "absolute",
            top: 48,
            left: 140,
            right: 140,
            height: 1,
            display: "flex",
            backgroundImage:
              "repeating-linear-gradient(90deg, rgba(184,146,74,0.5) 0 6px, transparent 6px 14px)",
          }}
        />
        {steps.map((s) => (
          <div
            key={s.numeral}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: 220,
              gap: 22,
            }}
          >
            <div
              style={{
                width: 96,
                height: 96,
                borderRadius: 999,
                background: C.ivory100,
                border: "1px solid rgba(217,190,130,0.55)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: "Fraunces",
                fontStyle: "italic",
                fontWeight: 300,
                fontSize: 64,
                color: C.gold500,
                lineHeight: 1,
              }}
            >
              {s.numeral}
            </div>
            <div
              style={{
                fontSize: 19,
                fontWeight: 500,
                color: C.ink,
                textAlign: "center",
              }}
            >
              {s.caption}
            </div>
          </div>
        ))}
      </div>

      {extras.handAnnotation ? (
        <div
          style={{
            marginTop: 30,
            display: "flex",
            transform: "rotate(1deg)",
          }}
        >
          <div
            style={{
              fontFamily: "Caveat",
              fontWeight: 600,
              fontSize: 30,
              color: C.teal500,
            }}
          >
            {extras.handAnnotation}
          </div>
        </div>
      ) : null}
    </div>
  )
}

function WhatWeHandleTemplate(entry: OgEntry): ReactElement {
  const extras = (entry.extras ?? {}) as {
    cards?: { icon: string; title: string; body: string }[]
  }
  const cards = extras.cards ?? []

  return (
    <div
      style={{
        width: SIZE.width,
        height: SIZE.height,
        display: "flex",
        background: ATMOS_BACKGROUND,
        position: "relative",
        padding: "80px",
        fontFamily: "DM Sans",
      }}
    >
      {/* Left column */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          width: 460,
          height: "100%",
        }}
      >
        <Eyebrow text={entry.eyebrow} />
        <Headline
          pre={entry.headlinePre}
          italic={entry.headlineItalic}
          size={58}
          lineHeight={1.04}
        />
        {entry.microline ? (
          <div style={{ fontSize: 16, color: C.inkMuted, lineHeight: 1.5 }}>
            {entry.microline}
          </div>
        ) : null}
      </div>

      {/* 2x2 card grid */}
      <div
        style={{
          position: "absolute",
          right: 80,
          top: 100,
          width: 540,
          height: 470,
          display: "flex",
          flexWrap: "wrap",
          gap: 18,
        }}
      >
        {cards.map((card) => (
          <div
            key={card.title}
            style={{
              width: 261,
              height: 226,
              background: "#FFFFFF",
              borderRadius: 22,
              padding: 22,
              display: "flex",
              flexDirection: "column",
              gap: 14,
              boxShadow:
                "0 1px 0 rgba(31,111,111,0.06), 0 12px 32px -16px rgba(20,60,60,0.18)",
              border: "1px solid rgba(26,31,30,0.05)",
            }}
          >
            <div
              style={{
                width: 44,
                height: 44,
                borderRadius: 12,
                background: "rgba(31,111,111,0.10)",
                color: C.teal500,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <CardIcon name={card.icon} />
            </div>
            <div
              style={{
                fontFamily: "Fraunces",
                fontSize: 22,
                fontWeight: 400,
                color: C.ink,
                lineHeight: 1.18,
              }}
            >
              {card.title}
            </div>
            <div
              style={{
                fontSize: 13,
                color: C.inkMuted,
                lineHeight: 1.45,
              }}
            >
              {card.body}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function ForSupportCoordinatorsTemplate(entry: OgEntry): ReactElement {
  const extras = (entry.extras ?? {}) as {
    bullets?: { numeral: string; label: string }[]
    cardEyebrow?: string
    cardLine?: string
  }
  const bullets = extras.bullets ?? []

  return (
    <div
      style={{
        width: SIZE.width,
        height: SIZE.height,
        display: "flex",
        background: ATMOS_BACKGROUND,
        position: "relative",
        padding: "80px",
        fontFamily: "DM Sans",
      }}
    >
      {/* Left two-thirds */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          width: 640,
          height: "100%",
        }}
      >
        <Eyebrow text={entry.eyebrow} />
        <Headline
          pre={entry.headlinePre}
          italic={entry.headlineItalic}
          size={58}
          lineHeight={1.04}
        />
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {bullets.map((b) => (
            <div key={b.numeral} style={{ display: "flex", alignItems: "center", gap: 18 }}>
              <div
                style={{
                  width: 32,
                  height: 32,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontFamily: "Fraunces",
                  fontStyle: "italic",
                  fontWeight: 300,
                  fontSize: 28,
                  color: C.gold500,
                  lineHeight: 1,
                }}
              >
                {b.numeral}
              </div>
              <div style={{ fontSize: 19, fontWeight: 500, color: C.ink }}>{b.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Phone-card on the right */}
      <div
        style={{
          position: "absolute",
          right: 80,
          top: 100,
          width: 320,
          height: 420,
          background: ATMOS_DEEP_BACKGROUND,
          borderRadius: 24,
          padding: "30px 28px",
          display: "flex",
          flexDirection: "column",
          gap: 22,
          border: "1px solid rgba(217,190,130,0.30)",
          boxShadow:
            "0 24px 48px -20px rgba(15,50,50,0.45), 0 60px 100px -60px rgba(10,40,40,0.55)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
          }}
        >
          <PhoneIcon color={C.gold300} size={18} strokeWidth={1.7} />
          <div
            style={{
              fontFamily: "DM Sans",
              fontWeight: 500,
              fontSize: 11,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: C.gold300,
            }}
          >
            {extras.cardEyebrow ?? "WHEN THE PORTAL CAN'T ANSWER IT"}
          </div>
        </div>
        <div
          style={{
            fontFamily: "Fraunces",
            fontStyle: "italic",
            fontWeight: 300,
            fontSize: 24,
            color: C.ivory100,
            lineHeight: 1.3,
            display: "flex",
          }}
        >
          {extras.cardLine ?? "you reach the same plan manager. every time."}
        </div>
      </div>
    </div>
  )
}

function ResourcesTemplate(entry: OgEntry): ReactElement {
  const extras = (entry.extras ?? {}) as {
    rows?: { title: string; descriptor: string }[]
  }
  const rows = extras.rows ?? []
  const ICONS = [BookOpenIcon, LibraryIcon, HelpCircleIcon]

  return (
    <div
      style={{
        width: SIZE.width,
        height: SIZE.height,
        display: "flex",
        flexDirection: "column",
        background: ATMOS_SOFT_BACKGROUND,
        position: "relative",
        padding: "70px 100px",
        fontFamily: "DM Sans",
        alignItems: "center",
      }}
    >
      <div style={{ display: "flex" }}>
        <Eyebrow text={entry.eyebrow} />
      </div>
      <div style={{ marginTop: 22, display: "flex", textAlign: "center" }}>
        <Headline
          pre={entry.headlinePre}
          italic={entry.headlineItalic}
          size={58}
          lineHeight={1.04}
        />
      </div>

      <div
        style={{
          marginTop: 44,
          width: 1000,
          display: "flex",
          flexDirection: "column",
        }}
      >
        {rows.map((row, i) => {
          const Icon = ICONS[i] ?? BookOpenIcon
          return (
            <div
              key={row.title}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "16px 0",
                borderTop: i === 0 ? "1px solid rgba(26,31,30,0.08)" : "none",
                borderBottom: "1px solid rgba(26,31,30,0.08)",
                gap: 24,
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
                <Icon color={C.teal500} size={22} strokeWidth={1.7} />
                <div
                  style={{
                    fontFamily: "Fraunces",
                    fontSize: 26,
                    fontWeight: 400,
                    color: C.ink,
                  }}
                >
                  {row.title}
                </div>
              </div>
              <div style={{ fontSize: 14, color: C.inkMuted }}>{row.descriptor}</div>
            </div>
          )
        })}
      </div>

      {/* Candle-rule footer */}
      <div
        style={{
          marginTop: 28,
          display: "flex",
          alignItems: "center",
          gap: 16,
        }}
      >
        <div
          style={{
            width: 200,
            height: 1,
            background: "linear-gradient(90deg, transparent, rgba(26,31,30,0.18))",
            display: "flex",
          }}
        />
        <LogoMonogram size={20} fill={C.teal500} opacity={0.7} />
        <div
          style={{
            width: 200,
            height: 1,
            background: "linear-gradient(90deg, rgba(26,31,30,0.18), transparent)",
            display: "flex",
          }}
        />
      </div>
      {entry.microline ? (
        <div style={{ marginTop: 12, fontSize: 13, color: C.inkFaint, display: "flex" }}>
          {entry.microline}
        </div>
      ) : null}
    </div>
  )
}

function ContactTemplate(entry: OgEntry): ReactElement {
  const extras = (entry.extras ?? {}) as {
    buttonText?: string
    footer?: string
  }

  return (
    <div
      style={{
        width: SIZE.width,
        height: SIZE.height,
        display: "flex",
        flexDirection: "column",
        background: ATMOS_DEEP_BACKGROUND,
        position: "relative",
        padding: "70px 80px",
        fontFamily: "DM Sans",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      {/* Logo with halo glow */}
      <div
        style={{
          marginTop: 40,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: 96,
          height: 96,
          borderRadius: 999,
          background:
            "radial-gradient(circle at center, rgba(255,206,118,0.45), rgba(255,191,64,0.12) 60%, transparent 75%)",
        }}
      >
        <LogoMonogram size={56} fill={C.gold300} />
      </div>

      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 22 }}>
        <Headline
          pre={entry.headlinePre}
          italic={entry.headlineItalic}
          size={76}
          lineHeight={1.0}
          color={C.ivory100}
          italicColor={C.gold300}
        />
        {entry.microline ? (
          <div
            style={{
              fontSize: 18,
              color: "rgba(251,247,238,0.85)",
              lineHeight: 1.5,
            }}
          >
            {entry.microline}
          </div>
        ) : null}
      </div>

      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 22 }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            background: "rgba(253,250,244,0.96)",
            color: C.teal700,
            padding: "14px 26px",
            borderRadius: 999,
            fontSize: 16,
            fontWeight: 500,
            boxShadow:
              "0 1px 0 rgba(255,255,255,0.5), 0 12px 32px -16px rgba(0,0,0,0.4)",
          }}
        >
          <span>{extras.buttonText ?? "Talk to a real person"}</span>
          <ArrowRightIcon color={C.teal700} size={16} strokeWidth={2} />
        </div>
        {extras.footer ? (
          <div style={{ fontSize: 12, color: "rgba(251,247,238,0.45)", display: "flex" }}>
            {extras.footer}
          </div>
        ) : null}
      </div>
    </div>
  )
}

// ---------- Logo monogram (inline SVG) ----------------------------------
/**
 * Stylised candle-arch monogram approximating /logo.png.
 * Inlined so the route does not depend on external file fetches.
 */
function LogoMonogram(props: { size: number; fill: string; opacity?: number }) {
  return (
    <div
      style={{
        width: props.size,
        height: props.size,
        opacity: props.opacity ?? 1,
        display: "flex",
      }}
    >
      <svg
        width={props.size}
        height={props.size}
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Arch outline */}
        <path
          d="M 18 90 L 18 50 A 32 32 0 0 1 82 50 L 82 90 Z"
          fill="none"
          stroke={props.fill}
          strokeWidth={3}
        />
        {/* Inner candle shape */}
        <rect x={45} y={50} width={10} height={32} rx={3} fill={props.fill} />
        {/* Flame */}
        <path
          d="M 50 30 C 42 38 42 46 50 50 C 58 46 58 38 50 30 Z"
          fill={props.fill}
        />
      </svg>
    </div>
  )
}

// ---------- Card icon resolver ------------------------------------------
function CardIcon({ name }: { name: string }) {
  const props = { color: C.teal500, size: 22, strokeWidth: 1.7 }
  switch (name) {
    case "FileText":
      return <FileTextIcon {...props} />
    case "BarChart3":
      return <BarChart3Icon {...props} />
    case "Bell":
      return <BellIcon {...props} />
    case "Users":
      return <UsersIcon {...props} />
    default:
      return <FileTextIcon {...props} />
  }
}

// ---------- Route handler -----------------------------------------------
function renderTemplate(entry: OgEntry): ReactElement {
  switch (entry.template) {
    case "home":
      return HomeTemplate(entry)
    case "about":
      return AboutTemplate(entry)
    case "how-it-works":
      return HowItWorksTemplate(entry)
    case "what-we-handle":
      return WhatWeHandleTemplate(entry)
    case "for-support-coordinators":
      return ForSupportCoordinatorsTemplate(entry)
    case "resources":
      return ResourcesTemplate(entry)
    case "contact":
      return ContactTemplate(entry)
    case "default":
    default:
      return DefaultTemplate(entry)
  }
}

export async function GET(
  _request: Request,
  context: { params: Promise<{ slug: string }> },
) {
  try {
    const { slug } = await context.params
    const entry = getOgEntry(slug)
    const fonts = await loadFonts()

    return new ImageResponse(renderTemplate(entry), {
      ...SIZE,
      fonts,
      headers: {
        "Cache-Control": "public, max-age=3600, s-maxage=86400, stale-while-revalidate=604800",
      },
    })
  } catch (e) {
    const message = e instanceof Error ? e.message : "Unknown OG render error"
    return new Response(`Failed to render OG image: ${message}`, { status: 500 })
  }
}
