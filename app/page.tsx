"use client";
import dynamic from "next/dynamic";
import KpiRow from "@/components/KpiRow";
import ScrollReveal from "@/components/ScrollReveal";

const MarylandFiscalJourneyChart = dynamic(() => import("@/components/charts/MarylandFiscalJourneyChart"), { ssr: false });
const SankeyChart                 = dynamic(() => import("@/components/charts/SankeyChart"),                { ssr: false });
const JcrCommerceChart            = dynamic(() => import("@/components/charts/JcrCommerceChart"),           { ssr: false });
const DeficiencyChart             = dynamic(() => import("@/components/charts/DeficiencyChart"),            { ssr: false });
const StructuralGapChart          = dynamic(() => import("@/components/charts/StructuralGapChart"),         { ssr: false });
const BlueprintChart              = dynamic(() => import("@/components/charts/BlueprintChart"),             { ssr: false });
const FederalCutCalculator        = dynamic(() => import("@/components/charts/FederalCutCalculator"),       { ssr: false });
const ReserveChart                = dynamic(() => import("@/components/charts/ReserveChart"),               { ssr: false });
const HealthSpendingChart         = dynamic(() => import("@/components/charts/HealthSpendingChart"),        { ssr: false });
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

interface ChartSection {
  id: string;
  label: string;
  title: string;
  subtitle: string;
  viz: React.ReactNode;
}

const CHARTS: ChartSection[] = [
  {
    id: "fiscal-journey",
    label: "Chart 1 of 7",
    title: "Maryland's Fiscal Journey",
    subtitle: "Eight-year expenditure trend FY2019–FY2026, from $43.8B to $67.3B.",
    viz: <MarylandFiscalJourneyChart />,
  },
  {
    id: "deficiency",
    label: "Chart 2 of 7",
    title: "One Agency Caused 77¢ of Every Dollar in Maryland's Budget Shortfall",
    subtitle: "FY2025 deficiency: $2.9B total — MDH accounted for $2.25B.",
    viz: <DeficiencyChart />,
  },
  {
    id: "structural-gap",
    label: "Chart 3 of 7",
    title: "Spending Is Growing Faster Than Revenue",
    subtitle: "Actuals only — expenditures overtook revenues in FY2025.",
    viz: <StructuralGapChart />,
  },
  {
    id: "federal-cuts",
    label: "Chart 4 of 7",
    title: "Federal Cut Calculator",
    subtitle: "Model 1–20% federal reduction impact per agency.",
    viz: <FederalCutCalculator />,
  },
  {
    id: "sankey",
    label: "Chart 5 of 7",
    title: "Budget Flow: Revenue to Agency",
    subtitle: "6 revenue streams → 3 fund types → 30+ agencies.",
    viz: <SankeyChart />,
  },
  {
    id: "health",
    label: "Chart 6 of 7",
    title: "Health Spending Grew Twice as Fast as Every Other Agency",
    subtitle: "MDH grew 84% over 10 years at 7% CAGR.",
    viz: <HealthSpendingChart />,
  },
  {
    id: "jcr-cuts",
    label: "Chart 7 of 7",
    title: "The Legislature's $1.1B Response: Where the Cuts Fell",
    subtitle: "JCR 2025 statewide reductions summary.",
    viz: <JcrCutsChart />,
  },
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

      {/* ── Vertical chart stack ──────────────────────────────── */}
      <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
        {CHARTS.map((chart) => (
          <ScrollReveal key={chart.id}>
            <div
              style={{
                background: "#fff",
                border: "1px solid rgba(33,16,48,0.09)",
                borderRadius: 14,
                overflow: "hidden",
                boxShadow: "0 2px 10px rgba(33,16,48,0.06)",
              }}
            >
              {/* Chart header bar */}
              <div
                style={{
                  padding: "14px 20px 10px",
                  borderBottom: "1px solid rgba(33,16,48,0.07)",
                  background: "#faf9fc",
                }}
              >
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
                  {chart.label}
                </div>
                <h4
                  style={{
                    fontFamily: "var(--font-headline)",
                    fontSize: 16,
                    fontWeight: 700,
                    color: "#211030",
                    margin: 0,
                    lineHeight: 1.3,
                  }}
                >
                  {chart.title}
                </h4>
                <p
                  style={{
                    fontFamily: "var(--font)",
                    fontSize: 12,
                    color: "#6B7280",
                    margin: "4px 0 0",
                  }}
                >
                  {chart.subtitle}
                </p>
              </div>

              {/* Chart body */}
              <div style={{ padding: "0" }}>
                {chart.viz}
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>

    </div>
  );
}
