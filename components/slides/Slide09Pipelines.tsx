"use client";
import { motion } from "framer-motion";
import SlideNav from "../SlideNav";

const fade = (d: number) => ({ initial: { opacity: 0, y: 14 }, animate: { opacity: 1, y: 0 }, transition: { delay: d, duration: 0.5 } });

const pipelines = [
  {
    name: "Discord → Pinecone",
    icon: "💬",
    color: "#93c5fd",
    steps: ["סורק 297 ערוצי מיכה סטוקס", "Claude Haiku: האם זה ידע מסחרי?", "Gemini Embed: הופך לvector", "Pinecone: שומר tier=discord"],
    schedule: "כל יום ראשון 09:00",
    status: "פעיל",
  },
  {
    name: "YouTube Academy → Pinecone",
    icon: "🎬",
    color: "#fbbf24",
    steps: ["100 סרטוני אקדמיה", "youtube-transcript-api: מוציא תמלול", "Claude Haiku: מחלץ 5-15 תובנות לסרטון", "Pinecone: שומר tier=youtube_academy"],
    schedule: "חד-פעמי (רץ עכשיו)",
    status: "בתהליך",
  },
  {
    name: "RSS → NotebookLM",
    icon: "📺",
    color: "#86efac",
    steps: ["YouTube RSS של מיכה", "האם יש סרטון חדש ב-26 שעות האחרונות?", "מוצא → מוסיף לNotebook \"Micha Stocks — יומי\"", "אוטומטי לחלוטין"],
    schedule: "כל יום 06:00",
    status: "פעיל",
  },
];

export default function Slide09Pipelines() {
  return (
    <div className="slide" style={{ justifyContent: "center" }}>
      <div className="relative z-10" style={{ maxWidth: "960px", width: "100%" }}>
        <motion.p {...fade(0.05)} style={{ fontFamily: "'Heebo'", fontSize: "12px", fontWeight: 700, letterSpacing: "0.22em", color: "var(--text-muted)", textTransform: "uppercase", marginBottom: "16px" }}>
          צבירת ידע אוטומטית
        </motion.p>

        <motion.h2 {...fade(0.13)} style={{ fontSize: "54px", fontWeight: 700, lineHeight: 1.1, marginBottom: "10px" }}>
          3 Pipelines שבניתי
        </motion.h2>

        <motion.p {...fade(0.2)} style={{ fontSize: "17px", color: "var(--text-muted)", marginBottom: "28px" }}>
          כל pipeline אוסף ידע ממקור, מעבד אותו עם AI, ושומר בצורה שאפשר לחפש.
          אני לא צריך לקרוא כלום — הסוכן יודע.
        </motion.p>

        <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
          {pipelines.map((p, i) => (
            <motion.div key={p.name} {...fade(0.28 + i * 0.13)} className="card" style={{ display: "grid", gridTemplateColumns: "36px 1fr auto", gap: "16px", alignItems: "start" }}>
              <span style={{ fontSize: "24px", marginTop: "2px" }}>{p.icon}</span>
              <div>
                <p style={{ fontSize: "16px", fontWeight: 700, color: p.color, marginBottom: "10px", fontFamily: "'Heebo'" }}>{p.name}</p>
                <div style={{ display: "flex", gap: "8px", alignItems: "center", flexWrap: "wrap" }}>
                  {p.steps.map((step, j) => (
                    <span key={j} style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                      <span style={{ fontSize: "12px", color: "var(--text-muted)" }}>{step}</span>
                      {j < p.steps.length - 1 && <span style={{ color: "rgba(124,58,237,0.5)", fontSize: "12px" }}>→</span>}
                    </span>
                  ))}
                </div>
              </div>
              <div style={{ textAlign: "right", minWidth: "130px" }}>
                <span style={{
                  display: "inline-block", padding: "3px 10px", borderRadius: "2px", marginBottom: "8px",
                  background: p.status === "פעיל" ? "rgba(63,185,80,0.1)" : "rgba(217,119,6,0.1)",
                  color: p.status === "פעיל" ? "var(--success)" : "var(--warning)",
                  fontSize: "11px", fontWeight: 700, fontFamily: "'Heebo'", letterSpacing: "0.08em",
                }}>
                  {p.status}
                </span>
                <p style={{ fontSize: "12px", color: "var(--text-muted)", fontFamily: "'JetBrains Mono'" }}>{p.schedule}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <SlideNav current={9} total={16} label="Pipelines" />
    </div>
  );
}


