"use client";
import { motion } from "framer-motion";
import SlideNav from "../SlideNav";

const fade = (d: number) => ({ initial: { opacity: 0, y: 14 }, animate: { opacity: 1, y: 0 }, transition: { delay: d, duration: 0.5 } });

const steps = [
  { week: "עכשיו", title: "סיים שיעור 2", desc: "Loops + functions בPython. זה הבסיס.", done: false, color: "var(--primary)" },
  { week: "שבוע 2", title: "Reflexion + Toolformer", desc: "איך סוכן לומד מהטעויות שלו.", done: false, color: "#fbbf24" },
  { week: "שבוע 3", title: "הוסף Evals לBrain", desc: "בדיקה: האם RAG מחזיר את הchunk הנכון?", done: false, color: "#86efac" },
  { week: "שבוע 4", title: "Multi-Agent", desc: "שני סוכנים שעובדים ביחד — Orchestrator + Worker.", done: false, color: "var(--cyan)" },
];

export default function Slide14Future() {
  return (
    <div className="slide" style={{ justifyContent: "center" }}>
      <div className="relative z-10" style={{ maxWidth: "860px", width: "100%" }}>
        <motion.p {...fade(0.05)} style={{ fontFamily: "'Heebo'", fontSize: "12px", fontWeight: 700, letterSpacing: "0.22em", color: "var(--text-muted)", textTransform: "uppercase", marginBottom: "16px" }}>
          הצעדים הבאים
        </motion.p>

        <motion.h2 {...fade(0.13)} style={{ fontSize: "54px", fontWeight: 700, lineHeight: 1.1, marginBottom: "10px" }}>
          מה <span className="gradient-text">הלאה?</span>
        </motion.h2>

        <motion.p {...fade(0.2)} style={{ fontSize: "17px", color: "var(--text-muted)", marginBottom: "36px" }}>
          מה שבנינו זה הבסיס. הצעדים הבאים יהפכו אותך מ-builder ל-engineer.
        </motion.p>

        <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
          {steps.map((step, i) => (
            <motion.div key={i} {...fade(0.28 + i * 0.13)}
              style={{ display: "flex", gap: "0", alignItems: "stretch" }}
            >
              {/* Timeline line */}
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginRight: "20px", width: "24px", flexShrink: 0 }}>
                <div style={{ width: "16px", height: "16px", borderRadius: "50%", background: step.color, border: "3px solid var(--bg)", flexShrink: 0, marginTop: "18px", boxShadow: `0 0 12px ${step.color}` }} />
                {i < steps.length - 1 && <div style={{ width: "2px", flex: 1, background: "var(--border)", margin: "4px 0" }} />}
              </div>

              <div style={{ flex: 1, padding: "14px 0 20px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "6px" }}>
                  <span style={{ fontSize: "11px", fontFamily: "'JetBrains Mono'", color: step.color, letterSpacing: "0.08em" }}>{step.week}</span>
                  <p style={{ fontSize: "17px", fontWeight: 700, color: "var(--text)", fontFamily: "'Heebo'" }}>{step.title}</p>
                </div>
                <p style={{ fontSize: "17px", color: "var(--text-muted)", lineHeight: 1.55 }}>{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div {...fade(0.85)} style={{ marginTop: "24px", padding: "16px 20px", background: "rgba(124,58,237,0.06)", borderLeft: "3px solid var(--primary)" }}>
          <p style={{ fontSize: "16px", color: "rgba(167,139,250,0.9)", lineHeight: 1.6 }}>
            <strong>המסר:</strong> מה שבנינו הוא functional ועובד בייצור.
            הקורס יהפוך את ה-&quot;עובד&quot; ל-&quot;מבין למה&quot;.
            זה ההפרש בין top 40% ל-top 15%.
          </p>
        </motion.div>
      </div>

      <SlideNav current={14} total={16} label="מה הלאה" />
    </div>
  );
}


