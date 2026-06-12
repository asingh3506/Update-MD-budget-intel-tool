"use client";
import ScrollReveal from "@/components/ScrollReveal";

function PlaceholderChart({ title, description }: { title: string; description: string }) {
  return (
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
        }}
      >
        <h4
          style={{
            fontFamily: "var(--font-headline)",
            fontSize: 16,
            fontWeight: 700,
            color: "#211030",
            margin: 0,
          }}
        >
          {title}
        </h4>
        <p style={{ fontFamily: "var(--font)", fontSize: 12, color: "#6B7280", margin: "4px 0 0" }}>
          {description}
        </p>
      </div>
      <div
        style={{
          height: 260,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #faf9fc 0%, #f3f0f9 100%)",
          flexDirection: "column",
          gap: 10,
        }}
      >
        <div
          style={{
            width: 48,
            height: 48,
            borderRadius: "50%",
            background: "rgba(128,44,215,0.10)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <span style={{ fontSize: 22 }}>📊</span>
        </div>
        <span
          style={{
            fontFamily: "var(--mono)",
            fontSize: 10,
            color: "#802CD7",
            letterSpacing: "0.12em",
            fontWeight: 700,
            textTransform: "uppercase",
          }}
        >
          Visualization Coming Soon
        </span>
        <span style={{ fontFamily: "var(--font)", fontSize: 12, color: "#9CA3AF" }}>
          Data pipeline integration in progress
        </span>
      </div>
    </div>
  );
}

export default function HealthPage() {
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
          Agency Deep-Dive
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
          Health
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
          Maryland Department of Health (MDH) fiscal analysis — the agency responsible for 77¢ of every
          dollar in Maryland&apos;s FY2025 budget shortfall. Explore spending trends, year-over-year changes,
          and program-level breakdowns.
        </p>
      </div>

      {/* Context banner */}
      <div
        style={{
          background: "#fff",
          border: "1px solid rgba(33,16,48,0.09)",
          borderRadius: 14,
          padding: "20px 24px",
          marginBottom: 28,
          boxShadow: "0 2px 10px rgba(33,16,48,0.06)",
          borderLeft: "4px solid #802CD7",
        }}
      >
        <div
          style={{
            fontFamily: "var(--mono)",
            fontSize: 9,
            color: "#802CD7",
            letterSpacing: "0.12em",
            fontWeight: 700,
            marginBottom: 8,
            textTransform: "uppercase",
          }}
        >
          Why Health?
        </div>
        <p style={{ fontFamily: "var(--font)", fontSize: 13, color: "#374151", lineHeight: 1.7, margin: 0 }}>
          MDH grew 84% over the past decade at a 7% compound annual growth rate — twice the rate of any
          other agency in Maryland. In FY2025, it generated a $2.25B deficiency out of a total $2.9B
          statewide shortfall. Understanding where and why health spending accelerates is essential to
          Maryland&apos;s fiscal sustainability.
        </p>
      </div>

      {/* Charts stack */}
      <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>

        <ScrollReveal>
          <PlaceholderChart
            title="MDH Fiscal Overview & Year-Over-Year"
            description="Total MDH budget FY2019–FY2026 with annual growth rates and program breakdown."
          />
        </ScrollReveal>

        <ScrollReveal>
          <PlaceholderChart
            title="Budget Changes Year-Over-Year — Sorted by % Change"
            description="MDH sub-programs ranked by year-over-year percentage change to surface acceleration points."
          />
        </ScrollReveal>

        <ScrollReveal>
          <PlaceholderChart
            title="MDH Program Heatmap"
            description="Matrix view: programs × fiscal years, colored by spending intensity relative to agency total."
          />
        </ScrollReveal>

      </div>
    </div>
  );
}
