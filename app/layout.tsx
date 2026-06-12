import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Maryland Budget Intel Tool",
  description:
    "Interactive fiscal analysis of Maryland's FY2027 proposed budget: revenues, expenditures, federal exposure, structural trends, and legislative impacts.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <footer
          style={{
            background: "#211030",
            borderTop: "3px solid #551C8E",
            padding: "40px 40px 24px",
            color: "#F0F0F0",
          }}
        >
          {/* 4-column grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "2fr 1fr 1fr 1fr",
              gap: "32px 40px",
              maxWidth: 1400,
              margin: "0 auto 32px",
            }}
          >
            {/* Col 1 — Brand */}
            <div>
              <div
                style={{
                  fontFamily: "var(--font-headline)",
                  fontSize: 15,
                  fontWeight: 800,
                  color: "#F0F0F0",
                  letterSpacing: "-0.3px",
                  marginBottom: 8,
                }}
              >
                Maryland Budget Intel Tool
              </div>
              <p
                style={{
                  fontFamily: "var(--font)",
                  fontSize: 12,
                  color: "rgba(240,240,240,0.60)",
                  lineHeight: 1.65,
                  marginBottom: 14,
                  maxWidth: 280,
                }}
              >
                Interactive fiscal analysis of Maryland&apos;s operating budget — revenues,
                expenditures, federal exposure, and structural trends. Sourced from official
                state budget documents.
              </p>
              <div
                style={{
                  display: "inline-block",
                  background: "rgba(179,118,246,0.15)",
                  border: "1px solid rgba(179,118,246,0.30)",
                  borderRadius: 6,
                  padding: "4px 10px",
                  fontFamily: "var(--mono)",
                  fontSize: 9,
                  color: "#B376F6",
                  letterSpacing: "0.10em",
                  fontWeight: 700,
                }}
              >
                AI-ASSISTED · HUMAN-REVIEWED
              </div>
            </div>

            {/* Col 2 — Analysis */}
            <div>
              <div
                style={{
                  fontFamily: "var(--mono)",
                  fontSize: 9,
                  color: "rgba(179,118,246,0.7)",
                  letterSpacing: "0.14em",
                  fontWeight: 700,
                  marginBottom: 12,
                  textTransform: "uppercase",
                }}
              >
                Analysis
              </div>
              {[
                { label: "Trends Analysis", href: "/" },
                { label: "Agency Deep-Dive", href: "/deep-dive" },
                { label: "Health", href: "/health" },
                { label: "Human Services", href: "/human-services" },
                { label: "County Map", href: "/county-map" },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  style={{
                    display: "block",
                    fontFamily: "var(--font)",
                    fontSize: 12,
                    color: "rgba(240,240,240,0.65)",
                    textDecoration: "none",
                    marginBottom: 7,
                    transition: "color 0.15s",
                  }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#B376F6"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "rgba(240,240,240,0.65)"; }}
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Col 3 — Documentation */}
            <div>
              <div
                style={{
                  fontFamily: "var(--mono)",
                  fontSize: 9,
                  color: "rgba(179,118,246,0.7)",
                  letterSpacing: "0.14em",
                  fontWeight: 700,
                  marginBottom: 12,
                  textTransform: "uppercase",
                }}
              >
                Documentation
              </div>
              {[
                { label: "Methodology", href: "/methodology" },
                { label: "Guardrails & Limitations", href: "/guardrails" },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  style={{
                    display: "block",
                    fontFamily: "var(--font)",
                    fontSize: 12,
                    color: "rgba(240,240,240,0.65)",
                    textDecoration: "none",
                    marginBottom: 7,
                    transition: "color 0.15s",
                  }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#B376F6"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "rgba(240,240,240,0.65)"; }}
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Col 4 — About */}
            <div>
              <div
                style={{
                  fontFamily: "var(--mono)",
                  fontSize: 9,
                  color: "rgba(179,118,246,0.7)",
                  letterSpacing: "0.14em",
                  fontWeight: 700,
                  marginBottom: 12,
                  textTransform: "uppercase",
                }}
              >
                About
              </div>
              <p
                style={{
                  fontFamily: "var(--font)",
                  fontSize: 11,
                  color: "rgba(240,240,240,0.55)",
                  lineHeight: 1.6,
                  marginBottom: 10,
                }}
              >
                A capstone project by the INFM737 team at the University of Maryland, in partnership
                with NXT Partner LLC.
              </p>
              <p
                style={{
                  fontFamily: "var(--mono)",
                  fontSize: 9,
                  color: "rgba(240,240,240,0.40)",
                  lineHeight: 1.7,
                }}
              >
                Aarushi Singh · Nadvi Haque<br />
                Priyanshu Gupta · James Van Doorn
              </p>
            </div>
          </div>

          {/* Bottom bar */}
          <div
            style={{
              borderTop: "1px solid rgba(255,255,255,0.08)",
              paddingTop: 18,
              maxWidth: 1400,
              margin: "0 auto",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: 12,
            }}
          >
            <span
              style={{
                fontFamily: "var(--mono)",
                fontSize: 9,
                color: "rgba(240,240,240,0.35)",
                letterSpacing: "0.06em",
              }}
            >
              © 2025 NXT Partner LLC · Maryland Budget Intel Tool · Data sourced from official
              Maryland state budget documents. For informational purposes only.
            </span>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                background: "rgba(128,44,215,0.15)",
                border: "1px solid rgba(128,44,215,0.25)",
                borderRadius: 6,
                padding: "5px 12px",
              }}
            >
              <span style={{ fontSize: 10 }}>🔒</span>
              <span
                style={{
                  fontFamily: "var(--mono)",
                  fontSize: 9,
                  color: "#B376F6",
                  letterSpacing: "0.08em",
                  fontWeight: 700,
                }}
              >
                CONFIDENTIAL · NXT PARTNER LLC
              </span>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
