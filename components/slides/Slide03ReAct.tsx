"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import SlideNav from "../SlideNav";

const steps = [
  { badge: "badge-observe", label: "תצפה", icon: "👁", desc: "המשתמש אמר: \"כמה יש לי ב-NVDA?\"" },
  { badge: "badge-think",   label: "חשוב",  icon: "🧠", desc: "אני צריך להסתכל בזיכרון התיק שלו" },
  { badge: "badge-act",     label: "פעל",   icon: "⚡", desc: "קורא את קובץ project_portfolio.md" },
  { badge: "badge-observe", label: "תצפה", icon: "👁", desc: "ראיתי: NVDA — 15% מהתיק, stop ב-$108" },
  { badge: "badge-answer",  label: "ענה",   icon: "💬", desc: "\"יש לך 15% NVDA, stop ב-$108\"" },
];

export default function Slide03ReAct() {
  const [active, setActive] = useState(-1);

  useEffect(() => {
    const t = setTimeout(() => setActive(0), 600);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (active < 0 || active >= steps.length - 1) return;
    const t = setTimeout(() => setActive(p => p + 1), 1400);
    return () => clearTimeout(t);
  }, [active]);

  return (
    <div className="slide" style={{ justifyContent: "center" }}>
      <div className="relative z-10" style={{ maxWidth: "860px", width: "100%" }}>
        <motion.p
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.05 }}
          style={{ fontFamily: "'Space Grotesk'", fontSize: "12px", fontWeight: 700, letterSpacing: "0.22em", color: "var(--text-muted)", textTransform: "uppercase", marginBottom: "16px" }}
        >
          איך הסוכן חושב
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.12 }}
          style={{ fontSize: "48px", fontWeight: 700, lineHeight: 1.1, marginBottom: "10px" }}
        >
          לולאת <span className="gradient-text">ReAct</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
          style={{ fontSize: "15px", color: "var(--text-muted)", marginBottom: "32px" }}
        >
          <strong style={{ color: "rgba(251,191,36,0.8)" }}>Re</strong>ason + <strong style={{ color: "rgba(147,197,253,0.8)" }}>Act</strong> — הסוכן חושב ופועל בסבבים, עד שמגיע לתשובה
        </motion.p>

        {/* Steps */}
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: active >= i ? 1 : 0.15, x: active >= i ? 0 : -10 }}
              transition={{ duration: 0.4 }}
              style={{
                display: "flex", alignItems: "center", gap: "16px",
                padding: "14px 20px",
                background: active === i ? "rgba(124,58,237,0.08)" : "var(--surface)",
                border: `1px solid ${active === i ? "rgba(124,58,237,0.4)" : "var(--border)"}`,
                borderRadius: "4px",
                transition: "all 0.4s ease",
              }}
            >
              <span style={{ fontSize: "22px", minWidth: "28px", textAlign: "center" }}>{step.icon}</span>
              <span className={`badge ${step.badge}`} style={{ minWidth: "64px", justifyContent: "center" }}>{step.label}</span>
              <span style={{ fontSize: "16px", color: active >= i ? "var(--text)" : "var(--text-muted)" }}>{step.desc}</span>
              {active === i && (
                <motion.span
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                  style={{ marginLeft: "auto", width: "8px", height: "8px", borderRadius: "50%", background: "var(--primary)", boxShadow: "0 0 12px var(--primary)", flexShrink: 0 }}
                />
              )}
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }} animate={{ opacity: active >= steps.length - 1 ? 1 : 0 }} transition={{ duration: 0.6 }}
          style={{ marginTop: "20px", fontSize: "14px", color: "var(--text-muted)", fontFamily: "'JetBrains Mono'" }}
        >
          ← הלולאה הזאת יכולה לחזור עשרות פעמים בשיחה אחת
        </motion.p>
      </div>

      <SlideNav current={3} total={16} label="ReAct Loop" />
    </div>
  );
}
