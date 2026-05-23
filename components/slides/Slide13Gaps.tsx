"use client";
import { motion } from "framer-motion";
import SlideNav from "../SlideNav";

const fade = (d: number) => ({ initial: { opacity: 0, y: 14 }, animate: { opacity: 1, y: 0 }, transition: { delay: d, duration: 0.5 } });

const gaps = [
  {
    num: "01",
    title: "הבנת Embeddings",
    simple: "אתה יודע שvectors עובדים — אבל למה cosine similarity ולא מרחק אוקלידי?",
    impact: "לא תוכל לאבחן למה החיפוש מחזיר תוצאות רעות",
    fix: "לימוד: vector math basics + similarity metrics",
    color: "var(--danger)",
  },
  {
    num: "02",
    title: "Evaluation — אין לך",
    simple: "אתה לא יודע אם הRAG שלך עובד טוב, או סתם נראה עובד.",
    impact: "אתה עיוור — לא יודע מה לשפר",
    fix: "להוסיף: לכל שאלה — האם קיבלתי את הchunk הנכון?",
    color: "var(--warning)",
  },
  {
    num: "03",
    title: "Python — קריאה אמיתית",
    simple: "אתה כותב Python עם עזרה. אבל אם משהו נשבר בלילה — תוכל לקרוא stack trace לבד?",
    impact: "תלוי ב-AI לכל debug. לא יכול לתחזק לבד.",
    fix: "שיעורים 2-4 בקורס — loops, functions, debugging",
    color: "var(--primary-light)",
  },
];

export default function Slide13Gaps() {
  return (
    <div className="slide" style={{ justifyContent: "center" }}>
      <div className="relative z-10" style={{ maxWidth: "920px", width: "100%" }}>
        <motion.p {...fade(0.05)} style={{ fontFamily: "'Space Grotesk'", fontSize: "12px", fontWeight: 700, letterSpacing: "0.22em", color: "var(--text-muted)", textTransform: "uppercase", marginBottom: "16px" }}>
          הפערים הנוכחיים
        </motion.p>

        <motion.h2 {...fade(0.13)} style={{ fontSize: "48px", fontWeight: 700, lineHeight: 1.1, marginBottom: "10px" }}>
          מה עוד <span style={{ color: "var(--danger)" }}>חסר</span>
        </motion.h2>

        <motion.p {...fade(0.2)} style={{ fontSize: "15px", color: "var(--text-muted)", marginBottom: "28px" }}>
          3 פערים שמבדילים top 40% מ-top 15%. כנות מלאה.
        </motion.p>

        <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
          {gaps.map((g, i) => (
            <motion.div key={g.num} {...fade(0.3 + i * 0.14)} className="card"
              style={{ display: "grid", gridTemplateColumns: "52px 1fr 1fr 1fr", gap: "20px", alignItems: "start", borderLeft: `3px solid ${g.color}` }}
            >
              <div style={{ fontFamily: "'Bebas Neue'", fontSize: "40px", color: g.color, lineHeight: 1 }}>{g.num}</div>
              <div>
                <p style={{ fontSize: "15px", fontWeight: 700, color: "var(--text)", marginBottom: "6px", fontFamily: "'Space Grotesk'" }}>{g.title}</p>
                <p style={{ fontSize: "13px", color: "var(--text-muted)", lineHeight: 1.55 }}>{g.simple}</p>
              </div>
              <div>
                <p style={{ fontSize: "11px", fontWeight: 700, color: "var(--danger)", marginBottom: "5px", fontFamily: "'Space Grotesk'", letterSpacing: "0.1em", textTransform: "uppercase" }}>השפעה</p>
                <p style={{ fontSize: "13px", color: "var(--text-muted)", lineHeight: 1.55 }}>{g.impact}</p>
              </div>
              <div>
                <p style={{ fontSize: "11px", fontWeight: 700, color: "var(--success)", marginBottom: "5px", fontFamily: "'Space Grotesk'", letterSpacing: "0.1em", textTransform: "uppercase" }}>איך סוגרים</p>
                <p style={{ fontSize: "13px", color: "var(--text)", lineHeight: 1.55 }}>{g.fix}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <SlideNav current={13} total={16} label="פערים" />
    </div>
  );
}
