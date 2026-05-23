"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import SlideNav from "../SlideNav";

const chips = ["תופס מידע", "חושב", "מחליט", "פועל", "זוכר"];

export default function Slide01Hook() {
  const [activeChip, setActiveChip] = useState(-1);

  useEffect(() => {
    const t = setTimeout(() => setActiveChip(0), 1600);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (activeChip < 0) return;
    const t = setTimeout(() => setActiveChip(p => (p + 1) % chips.length), 1200);
    return () => clearTimeout(t);
  }, [activeChip]);

  return (
    <div className="slide" style={{ justifyContent: "center" }}>
      <div className="relative z-10" style={{ maxWidth: "800px" }}>
        <motion.p
          initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.5 }}
          style={{ fontFamily: "'JetBrains Mono'", fontSize: "11px", letterSpacing: "0.22em", color: "rgba(167,139,250,0.65)", marginBottom: "20px", textTransform: "uppercase" }}
        >
          מצגת לימוד אישית · 2026
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.22, duration: 0.55 }}
          className="display"
          style={{ fontSize: "108px", lineHeight: 0.9, color: "var(--text)", marginBottom: "24px" }}
        >
          הסוכן<br />
          <span style={{ color: "var(--primary-light)" }}>שלי</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }} animate={{ opacity: 1, scaleX: 1 }} transition={{ delay: 0.35, duration: 0.4, ease: "easeOut" }}
          style={{ width: "56px", height: "3px", background: "var(--primary)", marginBottom: "24px", transformOrigin: "left" }}
        />

        <motion.p
          initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45, duration: 0.5 }}
          style={{ fontSize: "20px", color: "rgba(238,242,247,0.6)", lineHeight: 1.65, marginBottom: "40px" }}
        >
          מה בניתי, איך זה עובד, ואיפה אני עומד.<br />
          <span style={{ color: "rgba(167,139,250,0.5)", fontSize: "16px" }}>הסבר בשפת אדם — מהמושג הכי פשוט עד הפרויקט שלי</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.58, duration: 0.45 }}
          style={{ display: "flex", gap: "8px", alignItems: "center", flexWrap: "wrap" }}
        >
          {chips.map((chip, i) => (
            <span key={chip} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <span style={{
                background: activeChip === i ? "rgba(124,58,237,0.18)" : "rgba(255,255,255,0.05)",
                border: `1px solid ${activeChip === i ? "rgba(124,58,237,0.65)" : "rgba(255,255,255,0.1)"}`,
                borderRadius: "2px", padding: "6px 16px", fontSize: "16px",
                color: activeChip === i ? "rgba(167,139,250,1)" : "rgba(238,242,247,0.65)",
                fontFamily: "'Heebo'", fontWeight: activeChip === i ? 700 : 500,
                transition: "all 0.35s ease",
                boxShadow: activeChip === i ? "0 0 18px rgba(124,58,237,0.3)" : "none",
              }}>
                {chip}
              </span>
              {i < chips.length - 1 && (
                <span style={{ color: activeChip === i ? "rgba(124,58,237,0.9)" : "rgba(124,58,237,0.3)", fontSize: "16px", transition: "color 0.35s ease" }}>→</span>
              )}
            </span>
          ))}
        </motion.div>
      </div>

      <SlideNav current={1} total={16} label="פתיחה" />
    </div>
  );
}


