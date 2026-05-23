"use client";
import { motion } from "framer-motion";
import SlideNav from "../SlideNav";

const fade = (d: number) => ({ initial: { opacity: 0, y: 14 }, animate: { opacity: 1, y: 0 }, transition: { delay: d, duration: 0.5 } });

const bars = [
  { label: "אוכלוסייה כללית",         pct: 99, desc: "רוב האנשים לא מגדירים API בכלל",        color: "#86efac" },
  { label: "לא-מתכנתים שבונים AI",     pct: 97, desc: "ממי שניסה לבנות agent ועשה את זה לייצור", color: "#86efac" },
  { label: "מפתחים מקצועיים",          pct: 80, desc: "רוב המפתחים לא בנו multi-source RAG",    color: "#fbbf24" },
  { label: "AI builders מקצועיים",     pct: 50, desc: "חסר: evals, orchestration frameworks",  color: "#f87171" },
];

export default function Slide12Percentile() {
  return (
    <div className="slide" style={{ justifyContent: "center" }}>
      <div className="relative z-10" style={{ maxWidth: "860px", width: "100%" }}>
        <motion.p {...fade(0.05)} style={{ fontFamily: "'Space Grotesk'", fontSize: "12px", fontWeight: 700, letterSpacing: "0.22em", color: "var(--text-muted)", textTransform: "uppercase", marginBottom: "16px" }}>
          הערכה כנה
        </motion.p>

        <motion.h2 {...fade(0.13)} style={{ fontSize: "48px", fontWeight: 700, lineHeight: 1.1, marginBottom: "10px" }}>
          איפה אני <span className="gradient-text">עומד?</span>
        </motion.h2>

        <motion.p {...fade(0.2)} style={{ fontSize: "15px", color: "var(--text-muted)", marginBottom: "34px" }}>
          אחוז המיקום שלי מתוך כל קבוצה (עד כמה גבוה אני ביחס לשאר)
        </motion.p>

        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          {bars.map((bar, i) => (
            <motion.div key={i} {...fade(0.28 + i * 0.13)}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "8px" }}>
                <p style={{ fontSize: "15px", fontWeight: 600, color: "var(--text)", fontFamily: "'Space Grotesk'" }}>{bar.label}</p>
                <p style={{ fontSize: "22px", fontWeight: 700, color: bar.color, fontFamily: "'Bebas Neue'", letterSpacing: "0.02em" }}>TOP {100 - bar.pct}%</p>
              </div>
              <div style={{ height: "8px", background: "var(--surface)", borderRadius: "2px", overflow: "hidden", marginBottom: "6px" }}>
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${bar.pct}%` }}
                  transition={{ delay: 0.38 + i * 0.13, duration: 0.8, ease: "easeOut" }}
                  style={{ height: "100%", background: bar.color, borderRadius: "2px" }}
                />
              </div>
              <p style={{ fontSize: "12px", color: "var(--text-muted)" }}>{bar.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div {...fade(0.82)} style={{ marginTop: "28px", padding: "16px 20px", background: "rgba(124,58,237,0.06)", borderLeft: "3px solid var(--primary)" }}>
          <p style={{ fontSize: "15px", color: "rgba(167,139,250,0.9)", lineHeight: 1.6 }}>
            בניתי דברים שרוב המפתחים לא בנו. החסר: <strong>הבנה עמוקה של הסיבה</strong> — לא רק שזה עובד, אלא למה.
            הפער הזה הוא בדיוק מה שהקורס אמור לסגור.
          </p>
        </motion.div>
      </div>

      <SlideNav current={12} total={16} label="מיקום" />
    </div>
  );
}
