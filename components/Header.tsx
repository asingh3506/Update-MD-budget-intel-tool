"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV = [
  { label: "Trends Analysis",  href: "/" },
  { label: "Agency Deep-Dive", href: "/deep-dive" },
  { label: "Health",           href: "/health" },
  { label: "Human Services",   href: "/human-services" },
  { label: "County Map",       href: "/county-map" },
];

export default function Header() {
  const path = usePathname();

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 1000,
        background: "#211030",
        borderBottom: "1px solid rgba(255,255,255,0.10)",
        boxShadow: "0 2px 12px rgba(33,16,48,0.35)",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          padding: "10px 28px",
          maxWidth: 1600,
          margin: "0 auto",
          gap: 14,
        }}
      >
        <img
          src="/logo.png"
          alt="Maryland state crest"
          width={38}
          height={42}
          style={{ flexShrink: 0, display: "block" }}
        />

        <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
          <span
            style={{
              fontSize: 15,
              fontWeight: 800,
              letterSpacing: "-0.4px",
              color: "#F0F0F0",
              fontFamily: "var(--font-headline)",
              lineHeight: 1.1,
            }}
          >
            Maryland Budget Intel Tool
          </span>
          <span
            style={{
              fontFamily: "var(--font)",
              fontSize: 9,
              color: "rgba(179,118,246,0.8)",
              letterSpacing: "0.08em",
              lineHeight: 1.2,
            }}
          >
            Fiscal Analysis · NXT Partner LLC
          </span>
        </div>

        <nav style={{ display: "flex", gap: 2, marginLeft: 24 }}>
          {NAV.map((item) => {
            const active =
              item.href === "/"
                ? path === "/"
                : path.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                style={{
                  fontSize: 12,
                  fontWeight: 600,
                  fontFamily: "var(--font)",
                  color: active ? "#ffffff" : "rgba(240,240,240,0.65)",
                  textDecoration: "none",
                  padding: "7px 14px",
                  borderRadius: 7,
                  background: active ? "#802CD7" : "transparent",
                  transition: "all 0.18s",
                  whiteSpace: "nowrap",
                } as React.CSSProperties}
                onMouseEnter={(e) => {
                  if (!active) {
                    (e.currentTarget as HTMLAnchorElement).style.background = "rgba(128,44,215,0.25)";
                    (e.currentTarget as HTMLAnchorElement).style.color = "#ffffff";
                  }
                }}
                onMouseLeave={(e) => {
                  if (!active) {
                    (e.currentTarget as HTMLAnchorElement).style.background = "transparent";
                    (e.currentTarget as HTMLAnchorElement).style.color = "rgba(240,240,240,0.65)";
                  }
                }}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Maryland flag stripe */}
      <div style={{ display: "flex", height: 3, width: "100%" }}>
        <div style={{ flex: 1, background: "#CE1126" }} />
        <div style={{ flex: 1, background: "#E8A317" }} />
        <div style={{ flex: 1, background: "#000000" }} />
        <div style={{ flex: 1, background: "#F0F0F0" }} />
      </div>
    </header>
  );
}
