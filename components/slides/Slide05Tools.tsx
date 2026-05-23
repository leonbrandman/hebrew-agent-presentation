"use client";
import { motion } from "framer-motion";
import SlideNav from "../SlideNav";

const tools = [
  { icon: "📂", name: "קריאת קבצים",    desc: "רואה את כל הזיכרון שלי", color: "var(--primary-light)" },
  { icon: "✍️", name: "כתיבה ל-Obsidian", desc: "יוצר יומן, מעדכן נוטס",   color: "#93c5fd" },
  { icon: "🏃", name: "Garmin API",       desc: "HRV, שינה, ריצות",        color: "#86efac" },
  { icon: "🔍", name: "Pinecone Search",  desc: "מחפש ידע מהזיכרון הגדול", color: "#fbbf24" },
  { icon: "📋", name: "Notion",           desc: "מוסיף רעיונות, קורא משימות", color: "#f9a8d4" },
  { icon: "🌐", name: "גלישה באינטרנט",  desc: "מחפש מידע חדש",            color: "var(--cyan)" },
  { icon: "📸", name: "Playwright/Screenshot", desc: "רואה מסכים, מנווט אתרים", color: "#fb923c" },
  { icon: "💻", name: "הרצת קוד",        desc: "כותב ומריץ Python/JS",     color: "var(--success)" },
];

const fade = (d: number) => ({ initial: { opacity: 0, y: 12 }, animate: { opacity: 1, y: 0 }, transition: { delay: d, duration: 0.45 } });

export default function Slide05Tools() {
  return (
    <div className="slide" style={{ justifyContent: "center" }}>
      <div className="relative z-10" style={{ maxWidth: "960px", width: "100%" }}>
        <motion.p {...fade(0.05)} style={{ fontFamily: "'Heebo'", fontSize: "12px", fontWeight: 700, letterSpacing: "0.22em", color: "var(--text-muted)", textTransform: "uppercase", marginBottom: "16px" }}>כלים</motion.p>

        <motion.h2 {...fade(0.13)} style={{ fontSize: "54px", fontWeight: 700, lineHeight: 1.1, marginBottom: "10px" }}>
          סוכן בלי כלים = <span style={{ color: "var(--danger)" }}>מוח בלי ידיים</span>
        </motion.h2>

        <motion.p {...fade(0.2)} style={{ fontSize: "17px", color: "var(--text-muted)", marginBottom: "30px" }}>
          כלים הם מה שנותנים לסוכן יכולת לפעול בעולם האמיתי, מחוץ לשיחה. אלה הכלים של הסוכן שלי:
        </motion.p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "12px" }}>
          {tools.map((t, i) => (
            <motion.div key={i} {...fade(0.28 + i * 0.06)} className="card" style={{ textAlign: "center", padding: "18px 16px" }}>
              <div style={{ fontSize: "28px", marginBottom: "10px" }}>{t.icon}</div>
              <p style={{ fontSize: "15px", fontWeight: 700, color: t.color, marginBottom: "6px", fontFamily: "'Heebo'" }}>{t.name}</p>
              <p style={{ fontSize: "12px", color: "var(--text-muted)", lineHeight: 1.5 }}>{t.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div {...fade(0.75)} style={{ marginTop: "18px", display: "flex", alignItems: "center", gap: "12px", padding: "12px 18px", background: "var(--surface)", border: "1px solid var(--border)", borderRadius: "4px" }}>
          <span style={{ fontSize: "20px" }}>💡</span>
          <p style={{ fontSize: "17px", color: "var(--text-muted)" }}>
            בכל פעם שהסוכן רוצה להשתמש בכלי — הוא מבקש רשות. תוכל לאשר או לסרב לכל פעולה.
          </p>
        </motion.div>
      </div>

      <SlideNav current={5} total={16} label="כלים" />
    </div>
  );
}


