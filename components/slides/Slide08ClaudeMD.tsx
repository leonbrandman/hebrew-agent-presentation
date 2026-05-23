"use client";
import { motion } from "framer-motion";
import SlideNav from "../SlideNav";

const fade = (d: number) => ({ initial: { opacity: 0, y: 14 }, animate: { opacity: 1, y: 0 }, transition: { delay: d, duration: 0.5 } });

const paths = [
  {
    name: "FAST PATH",
    color: "#86efac",
    bg: "rgba(63,185,80,0.06)",
    border: "var(--success)",
    trigger: "מה ה-stop על NVDA? / כמה זה 1% מ-X?",
    action: "עונה ישירות מהזיכרון. בלי כלים, בלי עיכוב.",
    icon: "⚡",
  },
  {
    name: "MCP PATH",
    color: "#fbbf24",
    bg: "rgba(217,119,6,0.06)",
    border: "var(--warning)",
    trigger: "יומן / גרמין / סרוק / Drive / מניה / פרויקט קיים",
    action: "מפעיל כלי קודם, אז עונה עם הנתונים שקיבל.",
    icon: "🔌",
  },
  {
    name: "AGENTIC PATH",
    color: "var(--primary-light)",
    bg: "rgba(124,58,237,0.06)",
    border: "var(--primary)",
    trigger: "כתוב קוד / בנה / תקן / deploy",
    action: "מתכנן, מבצע, מדווח. יכול לבצע עשרות פעולות ברצף.",
    icon: "🤖",
  },
];

export default function Slide08ClaudeMD() {
  return (
    <div className="slide" style={{ justifyContent: "center" }}>
      <div className="relative z-10" style={{ maxWidth: "920px", width: "100%" }}>
        <motion.p {...fade(0.05)} style={{ fontFamily: "'Heebo'", fontSize: "12px", fontWeight: 700, letterSpacing: "0.22em", color: "var(--text-muted)", textTransform: "uppercase", marginBottom: "16px" }}>
          המוח של הסוכן
        </motion.p>

        <motion.h2 {...fade(0.13)} style={{ fontSize: "54px", fontWeight: 700, lineHeight: 1.1, marginBottom: "10px" }}>
          <code style={{ fontFamily: "'JetBrains Mono'", fontSize: "42px", color: "var(--primary-light)" }}>CLAUDE.md</code> — ה-DNA
        </motion.h2>

        <motion.p {...fade(0.2)} style={{ fontSize: "17px", color: "var(--text-muted)", marginBottom: "30px" }}>
          קובץ טקסט אחד שמגדיר מי הסוכן, איך הוא חושב, ומה הוא עושה עם כל סוג בקשה.
          זה מה שהופך Claude הכללי לסוכן אישי שלי.
        </motion.p>

        <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
          {paths.map((p, i) => (
            <motion.div key={p.name} {...fade(0.3 + i * 0.13)}
              style={{ display: "grid", gridTemplateColumns: "36px 140px 1fr 1fr", gap: "16px", alignItems: "center", padding: "16px 20px", background: p.bg, border: `1px solid ${p.border}`, borderRadius: "4px" }}
            >
              <span style={{ fontSize: "22px", textAlign: "center" }}>{p.icon}</span>
              <p style={{ fontSize: "16px", fontWeight: 700, color: p.color, fontFamily: "'Heebo'", letterSpacing: "0.04em" }}>{p.name}</p>
              <div>
                <p style={{ fontSize: "11px", color: "var(--text-muted)", marginBottom: "4px", textTransform: "uppercase", letterSpacing: "0.1em", fontFamily: "'Heebo'" }}>טריגר</p>
                <p style={{ fontSize: "15px", color: "var(--text)" }}>{p.trigger}</p>
              </div>
              <div>
                <p style={{ fontSize: "11px", color: "var(--text-muted)", marginBottom: "4px", textTransform: "uppercase", letterSpacing: "0.1em", fontFamily: "'Heebo'" }}>מה קורה</p>
                <p style={{ fontSize: "15px", color: "var(--text)" }}>{p.action}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div {...fade(0.7)} style={{ marginTop: "20px", display: "flex", gap: "24px" }}>
          {[
            { label: "Finance Gate", desc: "כל שאלת מסחר → Trading Constitution" },
            { label: "Memory Protocol", desc: "אחרי כל שיחה → זיכרון מתעדכן" },
            { label: "Journal Flow", desc: "\"יומן\" → 4 שאלות → Obsidian" },
          ].map((item, i) => (
            <motion.div key={i} {...fade(0.75 + i * 0.08)} style={{ flex: 1, padding: "12px 16px", background: "var(--surface)", border: "1px solid var(--border)", borderRadius: "4px" }}>
              <p style={{ fontSize: "11px", fontWeight: 700, color: "var(--primary-light)", marginBottom: "5px", fontFamily: "'Heebo'", letterSpacing: "0.1em" }}>{item.label}</p>
              <p style={{ fontSize: "15px", color: "var(--text-muted)" }}>{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <SlideNav current={8} total={16} label="CLAUDE.md" />
    </div>
  );
}


