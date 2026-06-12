"use client";
import dynamic from "next/dynamic";
import KpiRow from "@/components/KpiRow";
import ScrollReveal from "@/components/ScrollReveal";

const MarylandFiscalJourneyChart = dynamic(() => import("@/components/charts/MarylandFiscalJourneyChart"), { ssr: false });
const SankeyChart                 = dynamic(() => import("@/components/charts/SankeyChart"),                { ssr: false });
const DeficiencyChart             = dynamic(() => import("@/components/charts/DeficiencyChart"),            { ssr: false });
const StructuralGapChart          = dynamic(() => import("@/components/charts/StructuralGapChart"),         { ssr: false });
const FederalCutCalculator        = dynamic(() => import("@/components/charts/FederalCutCalculator"),       { ssr: false });
const HealthSpendingChart         = dynamic(() => import("@/components/charts/HealthSpendingChart"),         { ssr: false });
const JcrCutsChart                = dynamic(() => import("@/components/charts/JcrCutsChart"),               { ssr: false });

const TICKER = [
  "FY2027 Operating Budget: $70.8B",
  "Shortfall Closed: $1.5B, No new taxes or fees",
  "Structural Deficit Ahead: $2.3B projected for FY2028",
  "Budget Surplus: $250M",
  "Rainy Day Fund: 8% of General Fund revenues",
  "DDA Cut: -$126M from Developmental Disabilities Admin",
  "SEIF Transfer: $292M moved to General Fund",
  "Retirement Cost Shift: $39.3M to local governments",
  "Implementation: New budget begins July 1",
  "Gap-closing Mix: Cuts, Transfers, Bond swaps",
];

const CHARTS = [
  { id: "fiscal-journey",  viz: <MarylandFiscalJourneyChart /> },
  { id: "deficiency",      viz: <DeficiencyChart /> },
  { id: "structural-gap",  viz: <StructuralGapChart /> },
  { id: "federal-cuts",    viz: <FederalCutCalculator /> },
  { id: "sankey",          viz: <SankeyChart /> },
  { id: "health",          viz: <HealthSpendingChart /> },
  { id: "jcr-cuts",        viz: <JcrCutsChart /> },
];

export default function TrendsAnalysisPage() {
  return (
    <div className="page-enter" style={{ padding: "28px 28px 80px", maxWidth: 1400, margin: "0 auto" }}>

      {/* ── Hero ──────────────────────────────────────────────── */}
      <div style={{ marginBottom: 20 }}>
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
          Maryland Budget Intel Tool
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
          Trends Analysis
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
          Seven interactive visualizations sourced directly from Maryland&apos;s official budget documents.
          Scroll to explore fiscal trends, agency spending, and structural pressures.
        </p>
      </div>

      {/* ── Scrolling ticker ──────────────────────────────────── */}
      <div
        style={{
          background: "#211030",
          color: "#fff",
          borderRadius: 8,
          overflow: "hidden",
          marginBottom: 22,
          border: "1px solid rgba(179,118,246,0.2)",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: 40,
            padding: "9px 0",
            whiteSpace: "nowrap",
            animation: "tickerScroll 55s linear infinite",
            fontFamily: "var(--mono)",
            fontSize: 11,
            letterSpacing: "0.03em",
          }}
        >
          {[...TICKER, ...TICKER].map((t, i) => (
            <span key={i} style={{ display: "inline-flex", alignItems: "center", gap: 10 }}>
              <span style={{ color: "#B376F6", fontSize: 8 }}>◆</span>
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* ── KPI cards ─────────────────────────────────────────── */}
      <KpiRow />

      {/* ── Section header ────────────────────────────────────── */}
      <ScrollReveal>
        <div style={{ margin: "32px 0 8px", display: "flex", alignItems: "center", gap: 12 }}>
          <h3
            style={{
              fontFamily: "var(--font-headline)",
              fontSize: 20,
              fontWeight: 800,
              color: "#211030",
              letterSpacing: "-0.3px",
              margin: 0,
            }}
          >
            Key Trends &amp; Insights
          </h3>
          <div style={{ flex: 1, height: 1, background: "rgba(33,16,48,0.12)" }} />
          <span style={{ fontFamily: "var(--mono)", fontSize: 9, color: "#802CD7", letterSpacing: "0.1em" }}>
            SCROLL TO EXPLORE
          </span>
        </div>
      </ScrollReveal>

      {/* ── Vertical chart stack — no outer boxes ─────────────── */}
      <div style={{ display: "flex", flexDirection: "column" }}>
        {CHARTS.map((chart, i) => (
          <ScrollReveal key={chart.id}>
            <div
              style={{
                padding: "32px 0",
                borderTop: i === 0 ? "none" : "1px solid rgba(33,16,48,0.10)",
              }}
            >
              {chart.viz}
            </div>
          </ScrollReveal>
        ))}
      </div>

    </div>
  );
}
