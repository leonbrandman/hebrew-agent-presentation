"use client";
import { motion } from "framer-motion";
import SlideNav from "../SlideNav";

const fade = (d: number) => ({ initial: { opacity: 0, y: 14 }, animate: { opacity: 1, y: 0 }, transition: { delay: d, duration: 0.5 } });

const mcpServers = [
  { name: "leon-garmin", icon: "🏃", desc: "חיבור לGarmin — שינה, HRV, אנרגיה", color: "#86efac" },
  { name: "leon-brain",  icon: "🧠", desc: "חיפוש סמנטי בPinecone — הזיכרון הגדול", color: "var(--primary-light)" },
  { name: "notion",      icon: "📋", desc: "קריאה וכתיבה לNotion", color: "#f9a8d4" },
  { name: "filesystem",  icon: "📂", desc: "גישה לוולט Obsidian שלי", color: "#fbbf24" },
  { name: "playwright",  icon: "🌐", desc: "שליטה בדפדפן", color: "var(--cyan)" },
];

export default function Slide06MCP() {
  return (
    <div className="slide" style={{ justifyContent: "center" }}>
      <div className="relative z-10" style={{ maxWidth: "920px", width: "100%" }}>
        <motion.p {...fade(0.05)} style={{ fontFamily: "'Space Grotesk'", fontSize: "12px", fontWeight: 700, letterSpacing: "0.22em", color: "var(--text-muted)", textTransform: "uppercase", marginBottom: "16px" }}>פרוטוקול חיבור</motion.p>

        <motion.h2 {...fade(0.13)} style={{ fontSize: "48px", fontWeight: 700, lineHeight: 1.1, marginBottom: "16px" }}>
          <span className="gradient-text">MCP</span> — שפה משותפת לכלים
        </motion.h2>

        {/* Analogy */}
        <motion.div {...fade(0.22)} style={{ display: "grid", gridTemplateColumns: "1fr auto 1fr", gap: "20px", alignItems: "center", marginBottom: "30px" }}>
          <div className="card" style={{ textAlign: "center", padding: "20px" }}>
            <p style={{ fontSize: "32px", marginBottom: "8px" }}>🔌</p>
            <p style={{ fontSize: "14px", color: "var(--text-muted)" }}>לפני MCP:<br />כל כלי צריך חיבור אחר — USB-A, Mini, Micro...</p>
          </div>
          <div style={{ fontSize: "28px", color: "var(--primary-light)" }}>→</div>
          <div className="card" style={{ textAlign: "center", padding: "20px", borderTop: "2px solid var(--primary)" }}>
            <p style={{ fontSize: "32px", marginBottom: "8px" }}>⚡</p>
            <p style={{ fontSize: "14px", color: "var(--text)" }}>עם MCP:<br />חיבור אחיד לכולם — כמו USB-C. <span style={{ color: "var(--primary-light)" }}>כתוב פעם אחת, עובד בכל מקום.</span></p>
          </div>
        </motion.div>

        {/* My MCP servers */}
        <motion.p {...fade(0.35)} style={{ fontSize: "12px", fontWeight: 700, letterSpacing: "0.18em", color: "var(--text-muted)", textTransform: "uppercase", marginBottom: "14px", fontFamily: "'Space Grotesk'" }}>
          שרתי MCP שמותקנים אצלי
        </motion.p>

        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          {mcpServers.map((s, i) => (
            <motion.div key={s.name} {...fade(0.42 + i * 0.08)}
              style={{ display: "flex", alignItems: "center", gap: "14px", padding: "12px 18px", background: "var(--surface)", border: "1px solid var(--border)", borderRadius: "4px" }}
            >
              <span style={{ fontSize: "20px" }}>{s.icon}</span>
              <code style={{ fontSize: "13px", color: s.color, fontFamily: "'JetBrains Mono'", minWidth: "140px" }}>{s.name}</code>
              <span style={{ fontSize: "14px", color: "var(--text-muted)" }}>{s.desc}</span>
            </motion.div>
          ))}
        </div>
      </div>

      <SlideNav current={6} total={16} label="MCP" />
    </div>
  );
}
