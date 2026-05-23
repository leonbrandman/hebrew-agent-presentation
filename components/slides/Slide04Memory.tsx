"use client";
import { motion } from "framer-motion";
import SlideNav from "../SlideNav";

const memTypes = [
  {
    icon: "🧠",
    type: "סמנטי",
    eng: "Semantic",
    color: "var(--primary-light)",
    border: "var(--primary)",
    desc: "מי אתה, מה אתה אוהב, מה המטרות שלך",
    example: "לאון — 22, חייל לשעבר, רץ, מתעניין במסחר",
    analogy: "כמו זיכרון אישיות — מה שחבר טוב יודע עלייך",
  },
  {
    icon: "📋",
    type: "פרוצדורלי",
    eng: "Procedural",
    color: "#93c5fd",
    border: "var(--blue)",
    desc: "מה עובד, מה לא עובד, כיצד לגשת לבעיות",
    example: "אל תוסיף גלילה לdiv — כל מה שבונים חייב להיכנס ל-100vh",
    analogy: "כמו זיכרון שרירים — מיומנות שנרכשה מניסיון",
  },
  {
    icon: "📁",
    type: "אפיזודי",
    eng: "Episodic",
    color: "#86efac",
    border: "var(--success)",
    desc: "מה קרה, מה בנינו, אירועים ומאורעות",
    example: "11 מאי — שדרוג מערכת הזיכרון. 6 מאי — התחלת קורס Agentic AI",
    analogy: "כמו יומן — מה קרה ומתי",
  },
];

const fade = (d: number) => ({ initial: { opacity: 0, y: 16 }, animate: { opacity: 1, y: 0 }, transition: { delay: d, duration: 0.5 } });

export default function Slide04Memory() {
  return (
    <div className="slide" style={{ justifyContent: "center" }}>
      <div className="relative z-10" style={{ maxWidth: "960px", width: "100%" }}>
        <motion.p {...fade(0.05)} style={{ fontFamily: "'Space Grotesk'", fontSize: "12px", fontWeight: 700, letterSpacing: "0.22em", color: "var(--text-muted)", textTransform: "uppercase", marginBottom: "16px" }}>זיכרון הסוכן</motion.p>

        <motion.h2 {...fade(0.15)} style={{ fontSize: "48px", fontWeight: 700, lineHeight: 1.1, marginBottom: "10px" }}>
          איך הסוכן <span className="gradient-text">זוכר?</span>
        </motion.h2>

        <motion.p {...fade(0.22)} style={{ fontSize: "15px", color: "var(--text-muted)", marginBottom: "32px" }}>
          לChatGPT אין זיכרון — כל שיחה מתחילה מאפס. לסוכן שלי יש 3 סוגי זיכרון, כמו לבן אדם.
        </motion.p>

        <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
          {memTypes.map((m, i) => (
            <motion.div key={m.type} {...fade(0.3 + i * 0.12)}
              className="card" style={{ display: "grid", gridTemplateColumns: "48px 140px 1fr 1fr", gap: "16px", alignItems: "center", borderLeft: `3px solid ${m.border}` }}
            >
              <span style={{ fontSize: "26px", textAlign: "center" }}>{m.icon}</span>
              <div>
                <p style={{ fontSize: "16px", fontWeight: 700, color: m.color, marginBottom: "2px" }}>{m.type}</p>
                <p style={{ fontSize: "11px", fontFamily: "'JetBrains Mono'", color: "var(--text-muted)", letterSpacing: "0.05em" }}>{m.eng}</p>
              </div>
              <div>
                <p style={{ fontSize: "13px", color: "var(--text-muted)", marginBottom: "6px" }}>{m.desc}</p>
                <p style={{ fontSize: "12px", fontFamily: "'JetBrains Mono'", color: "rgba(238,242,247,0.5)", fontStyle: "italic" }}>&quot;{m.example}&quot;</p>
              </div>
              <div style={{ background: "var(--surface-2)", borderRadius: "3px", padding: "10px 14px" }}>
                <p style={{ fontSize: "11px", color: "var(--text-muted)", marginBottom: "4px", fontFamily: "'Space Grotesk'", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>אנלוגיה</p>
                <p style={{ fontSize: "13px", color: "var(--text)" }}>{m.analogy}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div {...fade(0.7)} style={{ marginTop: "18px", padding: "12px 18px", background: "rgba(124,58,237,0.06)", borderLeft: "3px solid var(--primary)", borderRadius: "0" }}>
          <p style={{ fontSize: "14px", color: "rgba(167,139,250,0.8)" }}>
            הזיכרון שלי מאוחסן בקבצים — כל קובץ הוא זיכרון עם תאריך ורמת decay. כשזיכרון מתיישן, הוא מקבל דגל.
          </p>
        </motion.div>
      </div>

      <SlideNav current={4} total={16} label="זיכרון" />
    </div>
  );
}
