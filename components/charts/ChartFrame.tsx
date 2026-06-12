"use client";
import { ReactNode } from "react";

interface Props {
  title: string;
  deck?: string;
  source: string;
  children: ReactNode;
  compact?: boolean;
}

export default function ChartFrame({ title, deck, source, children, compact }: Props) {
  return (
    <div style={{ fontFamily: "Roboto,Arial,sans-serif", background: "white" }}>
      <h3
        style={{
          fontFamily: "Montserrat,Arial,sans-serif",
          fontSize: compact ? 16 : 19,
          fontWeight: 800,
          color: "#121212",
          letterSpacing: "-0.2px",
          lineHeight: 1.25,
          margin: 0,
          paddingBottom: 6,
        }}
      >
        {title}
      </h3>

      {deck && (
        <p
          style={{
            fontFamily: "Montserrat,Arial,sans-serif",
            fontStyle: "italic",
            fontSize: compact ? 11 : 12,
            color: "#666666",
            lineHeight: 1.45,
            marginBottom: 8,
          }}
        >
          {deck}
        </p>
      )}

      <div style={{ height: 1, background: "#DDDDDD", marginBottom: 10 }} />

      <div>{children}</div>

      {source && (
        <div
          style={{
            marginTop: 10,
            fontSize: 10,
            color: "#9B9B9B",
            fontFamily: "var(--mono)",
            borderTop: "1px solid #EEEEEE",
            paddingTop: 6,
            lineHeight: 1.5,
          }}
        >
          Source: {source}
        </div>
      )}
    </div>
  );
}
