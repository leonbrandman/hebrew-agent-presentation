"use client";
import { motion } from "framer-motion";
import SlideNav from "../SlideNav";

const fade = (delay: number) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { delay, duration: 0.5 },
});

export default function Slide02WhatIsAgent() {
  return (
    <div className="slide" style={{ justifyContent: "center" }}>
      <div className="relative z-10" style={{ maxWidth: "900px" }}>
        <motion.p {...fade(0.05)} style={{ fontFamily: "'Space Grotesk'", fontSize: "12px", fontWeight: 700, letterSpacing: "0.22em", color: "var(--text-muted)", textTransform: "uppercase", marginBottom: "20px" }}>
          מושג בסיס
        </motion.p>

        <motion.h2 {...fade(0.15)} style={{ fontSize: "52px", fontWeight: 700, lineHeight: 1.1, marginBottom: "32px" }}>
          מה זה בכלל<br />
          <span className="gradient-text">AI Agent?</span>
        </motion.h2>

        {/* The 4-year-old explanation */}
        <motion.div {...fade(0.28)} className="highlight-box" style={{ marginBottom: "32px", padding: "20px 24px" }}>
          <p style={{ fontSize: "13px", fontFamily: "'JetBrains Mono'", color: "rgba(167,139,250,0.6)", letterSpacing: "0.1em", marginBottom: "10px", textTransform: "uppercase" }}>
            הסבר לבן 4
          </p>
          <p style={{ fontSize: "22px", color: "var(--text)", lineHeight: 1.6 }}>
            ChatGPT הוא כמו ספר — אתה שואל, הוא עונה, ושוכח.<br />
            <strong style={{ color: "var(--primary-light)" }}>Agent הוא כמו עוזר חי</strong> — הוא יכול לזכור, לחשוב, לקבל החלטות, ולעשות דברים בעולם.
          </p>
        </motion.div>

        {/* Two columns: chatgpt vs agent */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
          <motion.div {...fade(0.4)} className="card" style={{ borderTop: "2px solid var(--border)" }}>
            <p style={{ fontSize: "11px", fontFamily: "'Space Grotesk'", fontWeight: 700, letterSpacing: "0.18em", color: "var(--text-muted)", textTransform: "uppercase", marginBottom: "14px" }}>ChatGPT רגיל</p>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {["שואל → עונה → נגמר", "שוכח הכל אחרי השיחה", "לא יכול לעשות דברים", "תלוי בך לספק הכל"].map((item, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <span style={{ color: "var(--danger)", fontSize: "14px" }}>✕</span>
                  <span style={{ fontSize: "15px", color: "rgba(238,242,247,0.65)" }}>{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div {...fade(0.5)} className="card" style={{ borderTop: "2px solid var(--primary)" }}>
            <p style={{ fontSize: "11px", fontFamily: "'Space Grotesk'", fontWeight: 700, letterSpacing: "0.18em", color: "var(--primary-light)", textTransform: "uppercase", marginBottom: "14px" }}>AI Agent</p>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {["חושב בלולאה — צועד אחרי צעד", "זוכר בין שיחות", "יכול לקרוא קבצים, לשלוח הודעות, לגלוש", "פועל לבד על סמך מה שקרה"].map((item, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <span style={{ color: "var(--success)", fontSize: "14px" }}>✓</span>
                  <span style={{ fontSize: "15px", color: "rgba(238,242,247,0.85)" }}>{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <SlideNav current={2} total={16} label="מה זה Agent" />
    </div>
  );
}
