import type { NextConfig } from "next";
import path from "path";
import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";

const STATIC_EXPORT = process.env.NEXT_STATIC_EXPORT === "1";

const securityHeaders = [
  {
    key: "X-Frame-Options",
    value: "DENY",
  },
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
  {
    key: "X-DNS-Prefetch-Control",
    value: "on",
  },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
  },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  {
    key: "Content-Security-Policy",
    value: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data: blob:; font-src 'self' data:; frame-ancestors 'none'; base-uri 'self'; form-action 'self'",
  },
];

// Static export pathway (`npm run export`) bypasses headers/redirects and emits
// raw HTML to ./out for serving via npm run serve-export. Cloudflare Workers
// deploy goes through the non-export branch via OpenNext.
const nextConfig: NextConfig = STATIC_EXPORT
  ? {
      output: "export",
      images: { unoptimized: true },
      trailingSlash: true,
      turbopack: { root: path.join(__dirname) },
    }
  : {
      turbopack: { root: path.join(__dirname) },
      async headers() {
        return [{ source: "/(.*)", headers: securityHeaders }];
      },
      async redirects() {
        return [
          {
            source: "/services",
            destination: "/what-we-handle",
            permanent: true,
          },
        ];
      },
    };

export default nextConfig;

initOpenNextCloudflareForDev();
