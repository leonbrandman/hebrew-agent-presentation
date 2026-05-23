"use client";
import { motion } from "framer-motion";
import SlideNav from "../SlideNav";

const fade = (d: number) => ({ initial: { opacity: 0, y: 14 }, animate: { opacity: 1, y: 0 }, transition: { delay: d, duration: 0.5 } });

const layers = [
  { label: "Leon",        desc: "שואל שאלה",         color: "var(--cyan)",          icon: "👤" },
  { label: "CLAUDE.md",   desc: "מסווג: FAST / MCP / AGENTIC", color: "var(--primary-light)", icon: "🧭" },
  { label: "MCP Tools",   desc: "Garmin · Notion · Obsidian · Pinecone", color: "#fbbf24", icon: "⚡" },
  { label: "Pipelines",   desc: "Discord · YouTube Academy · Micha Morning", color: "#86efac", icon: "🔄" },
  { label: "Memory",      desc: "Semantic · Procedural · Episodic", color: "#f9a8d4", icon: "🧠" },
  { label: "Claude",      desc: "מעבד, מחליט, מגיב", color: "#93c5fd", icon: "✨" },
];

export default function Slide07MyAgent() {
  return (
    <div className="slide" style={{ justifyContent: "center" }}>
      <div className="relative z-10" style={{ maxWidth: "920px", width: "100%" }}>
        <motion.p {...fade(0.05)} style={{ fontFamily: "'Space Grotesk'", fontSize: "12px", fontWeight: 700, letterSpacing: "0.22em", color: "var(--text-muted)", textTransform: "uppercase", marginBottom: "16px" }}>
          הפרויקט שלי
        </motion.p>

        <motion.h2 {...fade(0.13)} style={{ fontSize: "48px", fontWeight: 700, lineHeight: 1.1, marginBottom: "10px" }}>
          הסוכן שלי — <span className="gradient-text">הארכיטקטורה</span>
        </motion.h2>

        <motion.p {...fade(0.2)} style={{ fontSize: "15px", color: "var(--text-muted)", marginBottom: "30px" }}>
          כל שכבה בונה על הקודמת. ביחד — זה Leon OS, מערכת הפעלה אישית.
        </motion.p>

        {/* Stack diagram */}
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          {layers.map((layer, i) => (
            <motion.div
              key={layer.label}
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.28 + i * 0.1, duration: 0.5 }}
              style={{
                display: "grid", gridTemplateColumns: "36px 160px 1fr",
                gap: "16px", alignItems: "center",
                padding: "13px 20px",
                background: "var(--surface)",
                border: "1px solid var(--border)",
                borderLeft: `3px solid ${layer.color}`,
                borderRadius: "4px",
              }}
            >
              <span style={{ fontSize: "20px", textAlign: "center" }}>{layer.icon}</span>
              <p style={{ fontSize: "15px", fontWeight: 700, color: layer.color, fontFamily: "'Space Grotesk'" }}>{layer.label}</p>
              <p style={{ fontSize: "14px", color: "var(--text-muted)" }}>{layer.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div {...fade(0.95)} style={{ marginTop: "18px", padding: "14px 20px", display: "flex", gap: "12px", background: "rgba(124,58,237,0.06)", borderLeft: "3px solid var(--primary)" }}>
          <span style={{ fontSize: "18px" }}>💡</span>
          <p style={{ fontSize: "14px", color: "rgba(167,139,250,0.8)", lineHeight: 1.6 }}>
            כל הסודות נמצאים בקובץ <code style={{ background: "rgba(255,255,255,0.08)", padding: "1px 6px", borderRadius: "2px" }}>.env</code> אחד.
            כל הפרויקטים טוענים ממנו — לא מעתיקים סיסמאות.
          </p>
        </motion.div>
      </div>

      <SlideNav current={7} total={16} label="ארכיטקטורה" />
    </div>
  );
}
