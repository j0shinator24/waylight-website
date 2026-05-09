import { ImageResponse } from "next/og"
import { ogContent } from "@/lib/og-content"

// Cache OG images for 24h. Re-renders only when content map changes
// and the route re-deploys.
export const revalidate = 86400

const BG_FROM = "#0a141a"
const BG_TO = "#142435"
const TEXT = "#f0f4f7"
const PRIMARY = "#5cc4d4"
const MUTED = "#7e9aab"

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ slug: string }> },
) {
  const { slug } = await params
  const content = ogContent[slug] ?? ogContent.default

  const [interRegular, interBold] = await Promise.all([
    fetch(
      "https://cdn.jsdelivr.net/npm/@fontsource/inter@5.0.16/files/inter-latin-400-normal.woff",
    ).then((r) => r.arrayBuffer()),
    fetch(
      "https://cdn.jsdelivr.net/npm/@fontsource/inter@5.0.16/files/inter-latin-700-normal.woff",
    ).then((r) => r.arrayBuffer()),
  ])

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: `linear-gradient(135deg, ${BG_FROM} 0%, ${BG_TO} 100%)`,
          padding: 80,
          fontFamily: "Inter",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 14,
              background: PRIMARY,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 38,
              fontWeight: 700,
              color: BG_FROM,
            }}
          >
            W
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontSize: 36, fontWeight: 700, color: TEXT, lineHeight: 1 }}>
              Waylight
            </span>
            <span style={{ fontSize: 18, color: MUTED, marginTop: 4 }}>
              NDIS Plan Management, Queensland
            </span>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 16, maxWidth: 1000 }}>
          <span style={{ fontSize: 26, color: PRIMARY, fontWeight: 600 }}>
            {content.eyebrow}
          </span>
          <span
            style={{
              fontSize: 68,
              fontWeight: 700,
              color: TEXT,
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
            }}
          >
            {content.headline}
          </span>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div style={{ width: 8, height: 8, borderRadius: 999, background: PRIMARY }} />
          <span style={{ fontSize: 22, color: MUTED }}>waylight.com.au</span>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        { name: "Inter", data: interRegular, style: "normal", weight: 400 },
        { name: "Inter", data: interBold, style: "normal", weight: 700 },
      ],
    },
  )
}
