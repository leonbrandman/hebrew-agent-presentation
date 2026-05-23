"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import SlideNav from "../SlideNav";

const steps = [
  { icon: "❓", label: "שאלה",     desc: "\"מה מיכה אמר על MA150?\"",        color: "var(--cyan)" },
  { icon: "🔢", label: "Embed",    desc: "השאלה הופכת ל-1536 מספרים",        color: "var(--primary-light)" },
  { icon: "🔍", label: "חיפוש",   desc: "Pinecone מחפש את הvectors הקרובים", color: "#fbbf24" },
  { icon: "📄", label: "Context",  desc: "מביא 5 קטעים רלוונטיים מהידע",     color: "#86efac" },
  { icon: "🧠", label: "Claude",   desc: "שאלה + context → תשובה מדויקת",   color: "var(--primary-light)" },
];

export default function Slide11RAG() {
  const [active, setActive] = useState(-1);

  useEffect(() => {
    const t = setTimeout(() => setActive(0), 700);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (active < 0 || active >= steps.length - 1) return;
    const t = setTimeout(() => setActive(p => p + 1), 1300);
    return () => clearTimeout(t);
  }, [active]);

  return (
    <div className="slide" style={{ justifyContent: "center" }}>
      <div className="relative z-10" style={{ maxWidth: "880px", width: "100%" }}>
        <motion.p
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.05 }}
          style={{ fontFamily: "'Space Grotesk'", fontSize: "12px", fontWeight: 700, letterSpacing: "0.22em", color: "var(--text-muted)", textTransform: "uppercase", marginBottom: "16px" }}
        >
          איך הסוכן מוצא ידע
        </motion.p>

        <motion.h2 initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.13 }}
          style={{ fontSize: "48px", fontWeight: 700, lineHeight: 1.1, marginBottom: "10px" }}>
          <span className="gradient-text">RAG</span> — חיפוש + יצירה
        </motion.h2>

        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
          style={{ fontSize: "15px", color: "var(--text-muted)", marginBottom: "36px" }}>
          <strong style={{ color: "rgba(167,139,250,0.8)" }}>R</strong>etrieval <strong style={{ color: "rgba(147,197,253,0.8)" }}>A</strong>ugmented <strong style={{ color: "rgba(134,239,172,0.8)" }}>G</strong>eneration —
          Claude לא יודע הכל. RAG נותן לו לדעת.
        </motion.p>

        {/* Flow */}
        <div style={{ display: "flex", alignItems: "center", gap: "0", marginBottom: "32px" }}>
          {steps.map((step, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", flex: 1 }}>
              <motion.div
                animate={{
                  opacity: active >= i ? 1 : 0.2,
                  scale: active === i ? 1.04 : 1,
                }}
                transition={{ duration: 0.4 }}
                style={{
                  flex: 1,
                  padding: "18px 12px",
                  background: active >= i ? "var(--surface)" : "var(--bg)",
                  border: `1px solid ${active >= i ? step.color.replace("var(", "").replace(")", "") === step.color ? step.color : "var(--border)" : "var(--border)"}`,
                  borderColor: active >= i ? step.color : "var(--border)",
                  borderRadius: "4px",
                  textAlign: "center",
                  transition: "all 0.4s ease",
                }}
              >
                <div style={{ fontSize: "24px", marginBottom: "8px" }}>{step.icon}</div>
                <p style={{ fontSize: "13px", fontWeight: 700, color: active >= i ? step.color : "var(--text-muted)", fontFamily: "'Space Grotesk'", marginBottom: "6px" }}>{step.label}</p>
                <p style={{ fontSize: "11px", color: "var(--text-muted)", lineHeight: 1.5 }}>{step.desc}</p>
              </motion.div>
              {i < steps.length - 1 && (
                <motion.div animate={{ color: active > i ? "var(--primary)" : "var(--border)" }} transition={{ duration: 0.4 }}
                  style={{ fontSize: "20px", padding: "0 6px", flexShrink: 0 }}>→</motion.div>
              )}
            </div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: active >= steps.length - 1 ? 1 : 0 }} transition={{ duration: 0.6 }}
          style={{ padding: "16px 20px", background: "rgba(124,58,237,0.06)", borderLeft: "3px solid var(--primary)" }}>
          <p style={{ fontSize: "15px", color: "rgba(167,139,250,0.9)" }}>
            בלי RAG: Claude יענה מהידע הכללי שלו — בינוני.<br />
            <strong>עם RAG:</strong> Claude יענה עם הידע הספציפי של מיכה סטוקס שלמדת — מדויק.
          </p>
        </motion.div>
      </div>

      <SlideNav current={11} total={16} label="RAG" />
    </div>
  );
}
