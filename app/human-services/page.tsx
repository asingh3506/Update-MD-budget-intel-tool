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

export default function HumanServicesPage() {
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
          Human Services
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
          Department of Human Services (DHS) fiscal analysis — covering Family Investment,
          Social Services, Child Support, and the Developmental Disabilities Administration (DDA).
          Explore multi-year trends, program-level changes, and federal funding dependencies.
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
          Why Human Services?
        </div>
        <p style={{ fontFamily: "var(--font)", fontSize: 13, color: "#374151", lineHeight: 1.7, margin: 0 }}>
          DHS oversees programs serving Maryland&apos;s most vulnerable populations — including the
          Developmental Disabilities Administration (DDA), which absorbed a $126M cut in FY2027.
          With significant federal matching funds at risk from potential Medicaid reductions, DHS
          sits at the intersection of fiscal pressure and human impact across the state.
        </p>
      </div>

      {/* Charts stack */}
      <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>

        <ScrollReveal>
          <PlaceholderChart
            title="DHS Fiscal Overview & Year-Over-Year"
            description="Total DHS budget FY2019–FY2026 with annual growth rates and program breakdown."
          />
        </ScrollReveal>

        <ScrollReveal>
          <PlaceholderChart
            title="Budget Changes Year-Over-Year — Sorted by % Change"
            description="DHS sub-programs ranked by year-over-year percentage change, highlighting DDA reduction."
          />
        </ScrollReveal>

        <ScrollReveal>
          <PlaceholderChart
            title="DHS Program Heatmap"
            description="Matrix view: programs × fiscal years, colored by spending intensity relative to agency total."
          />
        </ScrollReveal>

      </div>
    </div>
  );
}
