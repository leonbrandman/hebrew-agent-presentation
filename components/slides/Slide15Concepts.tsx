"use client";
import { motion } from "framer-motion";
import SlideNav from "../SlideNav";

const fade = (d: number) => ({ initial: { opacity: 0, y: 14 }, animate: { opacity: 1, y: 0 }, transition: { delay: d, duration: 0.5 } });

const concepts = [
  { term: "AI Agent",       he: "סוכן",           def: "תוכנה שתופסת מידע, חושבת, מחליטה ופועלת בלולאה" },
  { term: "ReAct",          he: "חשוב + פעל",     def: "Reason + Act — הסוכן חושב בקול רם ואז מבצע פעולה" },
  { term: "MCP",            he: "פרוטוקול כלים",  def: "שפה אחידה שמאפשרת לסוכן לדבר עם כל כלי" },
  { term: "Embedding",      he: "ייצוג מספרי",    def: "כל טקסט הופך לרשימת מספרים — מילים דומות = מספרים קרובים" },
  { term: "RAG",            he: "חיפוש + יצירה",  def: "שולף ידע רלוונטי מהDB, נותן לסוכן כהקשר לפני שהוא עונה" },
  { term: "Vector DB",      he: "מסד נתוני ייצוגים", def: "Pinecone — שומר embeddings ומחפש אותם במהירות" },
  { term: "Pipeline",       he: "שרשרת עיבוד",    def: "סדרת צעדים אוטומטיים: מקור → AI → עיבוד → שמירה" },
  { term: "Context Window", he: "חלון הקשר",      def: "כמה טקסט Claude יכול &apos;לראות&apos; בבת אחת" },
];

export default function Slide15Concepts() {
  return (
    <div className="slide" style={{ justifyContent: "center" }}>
      <div className="relative z-10" style={{ maxWidth: "960px", width: "100%" }}>
        <motion.p {...fade(0.05)} style={{ fontFamily: "'Heebo'", fontSize: "12px", fontWeight: 700, letterSpacing: "0.22em", color: "var(--text-muted)", textTransform: "uppercase", marginBottom: "16px" }}>
          מילון מונחים
        </motion.p>

        <motion.h2 {...fade(0.13)} style={{ fontSize: "54px", fontWeight: 700, lineHeight: 1.1, marginBottom: "28px" }}>
          המושגים — <span className="gradient-text">בעברית פשוטה</span>
        </motion.h2>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
          {concepts.map((c, i) => (
            <motion.div key={c.term} {...fade(0.22 + i * 0.07)}
              style={{ display: "flex", gap: "14px", padding: "14px 18px", background: "var(--surface)", border: "1px solid var(--border)", borderRadius: "4px", alignItems: "flex-start" }}
            >
              <div style={{ minWidth: "100px" }}>
                <p style={{ fontSize: "15px", fontFamily: "'JetBrains Mono'", color: "var(--primary-light)", marginBottom: "2px" }}>{c.term}</p>
                <p style={{ fontSize: "12px", color: "var(--text-muted)", fontWeight: 600 }}>{c.he}</p>
              </div>
              <p style={{ fontSize: "15px", color: "var(--text-muted)", lineHeight: 1.55 }}>{c.def}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <SlideNav current={15} total={16} label="מושגים" />
    </div>
  );
}


