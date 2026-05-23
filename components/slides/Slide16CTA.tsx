"use client";
import { motion } from "framer-motion";
import SlideNav from "../SlideNav";

const items = [0.1, 0.22, 0.34, 0.46, 0.58];

export default function Slide16CTA() {
  return (
    <div className="slide" style={{ justifyContent: "center" }}>
      <div className="relative z-10" style={{ maxWidth: "720px" }}>
        <motion.p
          initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: items[0], duration: 0.5 }}
          style={{ fontFamily: "'JetBrains Mono'", fontSize: "11px", letterSpacing: "0.22em", color: "rgba(167,139,250,0.65)", marginBottom: "20px", textTransform: "uppercase" }}
        >
          סיכום · 2026
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: items[1], duration: 0.55 }}
          className="display"
          style={{ fontSize: "96px", lineHeight: 0.9, color: "var(--text)", marginBottom: "24px" }}
        >
          לא ChatGPT.<br />
          <span style={{ color: "var(--primary-light)" }}>סוכן.</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }} animate={{ opacity: 1, scaleX: 1 }} transition={{ delay: items[2], duration: 0.4, ease: "easeOut" }}
          style={{ width: "56px", height: "3px", background: "var(--primary)", marginBottom: "28px", transformOrigin: "left" }}
        />

        <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: items[3], duration: 0.5 }}
          style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "32px" }}
        >
          {[
            "בניתי Personal OS שפועל — לא chatbot",
            "יש לי RAG, MCP servers, pipelines אוטומטיים",
            "הפערים ברורים — ויש תוכנית לסגור אותם",
          ].map((item, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <span style={{ color: "var(--success)", fontSize: "16px", flexShrink: 0 }}>✓</span>
              <span style={{ fontSize: "17px", color: "rgba(238,242,247,0.8)" }}>{item}</span>
            </div>
          ))}
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: items[4], duration: 0.45 }}
          style={{ padding: "18px 22px", background: "rgba(124,58,237,0.08)", border: "1px solid rgba(124,58,237,0.3)", borderRadius: "4px" }}
        >
          <p style={{ fontSize: "18px", color: "var(--primary-light)", fontWeight: 600, lineHeight: 1.6 }}>
            המסר הכי חשוב:<br />
            <span style={{ color: "var(--text)", fontWeight: 400 }}>
              מה שבנית הוא functional ועובד בייצור.<br />
              הקורס יהפוך את &quot;עובד&quot; ל-&quot;מבין למה&quot;.
            </span>
          </p>
        </motion.div>
      </div>

      <SlideNav current={16} total={16} label="סיכום" />
    </div>
  );
}
