"use client";
import dynamic from "next/dynamic";

const BudgetMapEmbed = dynamic(() => import("@/components/BudgetMapEmbed"), { ssr: false });

export default function CountyMapPage() {
  return (
    <div className="page-enter" style={{ padding: "28px 28px 80px", maxWidth: 1400, margin: "0 auto" }}>

      {/* Hero */}
      <div style={{ marginBottom: 24 }}>
        <div
          style={{
            fontFamily: "var(--mono)",
            fontSize: 10,
            color: "#802CD7",
            letterSpacing: "0.18em",
            fontWeight: 700,
            marginBottom: 8,
            textTransform: "uppercase",
          }}
        >
          Geographic Analysis
        </div>
        <h2
          style={{
            fontFamily: "var(--font-headline)",
            fontSize: 36,
            fontWeight: 900,
            color: "#211030",
            letterSpacing: "-0.9px",
            marginBottom: 10,
            lineHeight: 1.08,
          }}
        >
          County Map
        </h2>
        <p
          style={{
            fontFamily: "var(--font)",
            fontStyle: "italic",
            fontSize: 14,
            color: "#555",
            maxWidth: 740,
            lineHeight: 1.6,
          }}
        >
          Maryland budget allocations and fiscal indicators broken down by county.
          Explore how state spending flows to each jurisdiction across all 24 counties.
        </p>
      </div>

      {/* Narrative context */}
      <div
        style={{
          background: "#fff",
          border: "1px solid rgba(33,16,48,0.09)",
          borderRadius: 14,
          padding: "20px 24px",
          marginBottom: 24,
          boxShadow: "0 2px 10px rgba(33,16,48,0.06)",
          borderLeft: "4px solid #802CD7",
        }}
      >
        <p style={{ fontFamily: "var(--font)", fontSize: 13, color: "#374151", lineHeight: 1.7, margin: 0 }}>
          Maryland&apos;s 24 jurisdictions — 23 counties and Baltimore City — receive state funding across
          education, health, transportation, and public safety. The map below visualizes per-capita budget
          flows and year-over-year changes, highlighting the geographic distribution of fiscal priorities
          in the FY2027 operating budget.
        </p>
      </div>

      {/* Map embed */}
      <div
        style={{
          background: "#fff",
          border: "1px solid rgba(33,16,48,0.09)",
          borderRadius: 14,
          overflow: "hidden",
          boxShadow: "0 2px 10px rgba(33,16,48,0.06)",
        }}
      >
        <div
          style={{
            padding: "14px 20px 10px",
            borderBottom: "1px solid rgba(33,16,48,0.07)",
            background: "#faf9fc",
            display: "flex",
            alignItems: "center",
            gap: 12,
          }}
        >
          <div>
            <div
              style={{
                fontFamily: "var(--mono)",
                fontSize: 9,
                color: "#802CD7",
                letterSpacing: "0.12em",
                fontWeight: 700,
                marginBottom: 4,
                textTransform: "uppercase",
              }}
            >
              Interactive Map
            </div>
            <h4
              style={{
                fontFamily: "var(--font-headline)",
                fontSize: 16,
                fontWeight: 700,
                color: "#211030",
                margin: 0,
              }}
            >
              Maryland Budget by County
            </h4>
          </div>
        </div>
        <div style={{ padding: 0 }}>
          <BudgetMapEmbed />
        </div>
      </div>

    </div>
  );
}
