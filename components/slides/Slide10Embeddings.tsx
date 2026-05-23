"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import SlideNav from "../SlideNav";

const fade = (d: number) => ({ initial: { opacity: 0, y: 14 }, animate: { opacity: 1, y: 0 }, transition: { delay: d, duration: 0.5 } });

const words = [
  { label: "מניה",    x: 72,  y: 25,  group: "מסחר",  color: "#fbbf24" },
  { label: "השקעה",  x: 55,  y: 38,  group: "מסחר",  color: "#fbbf24" },
  { label: "תיק",    x: 80,  y: 42,  group: "מסחר",  color: "#fbbf24" },
  { label: "ריצה",   x: 22,  y: 20,  group: "ספורט", color: "#86efac" },
  { label: "אימון",  x: 30,  y: 35,  group: "ספורט", color: "#86efac" },
  { label: "HRV",    x: 18,  y: 45,  group: "ספורט", color: "#86efac" },
  { label: "שינה",   x: 50,  y: 70,  group: "בריאות", color: "#93c5fd" },
  { label: "אנרגיה", x: 62,  y: 78,  group: "בריאות", color: "#93c5fd" },
];

export default function Slide10Embeddings() {
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setRevealed(true), 1200);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="slide" style={{ justifyContent: "center" }}>
      <div className="relative z-10" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "48px", alignItems: "center", maxWidth: "960px", width: "100%" }}>

        {/* Left: explanation */}
        <div>
          <motion.p {...fade(0.05)} style={{ fontFamily: "'Space Grotesk'", fontSize: "12px", fontWeight: 700, letterSpacing: "0.22em", color: "var(--text-muted)", textTransform: "uppercase", marginBottom: "16px" }}>
            בסיס הRAG
          </motion.p>

          <motion.h2 {...fade(0.13)} style={{ fontSize: "44px", fontWeight: 700, lineHeight: 1.1, marginBottom: "20px" }}>
            Embeddings — <br /><span className="gradient-text">מה זה בעצם?</span>
          </motion.h2>

          <motion.div {...fade(0.25)} className="highlight-box" style={{ marginBottom: "20px" }}>
            <p style={{ fontSize: "15px", color: "var(--text)", lineHeight: 1.65 }}>
              <strong style={{ color: "var(--primary-light)" }}>הסבר פשוט:</strong><br />
              כל מילה או משפט הופכים לרשימת מספרים (1536 מספרים אצלי).
              מילים עם מובן דומה = מספרים קרובים במרחב.
            </p>
          </motion.div>

          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {[
              { a: "\"מניה\"", b: "\"השקעה\"", result: "קרובים מאוד", color: "var(--success)" },
              { a: "\"ריצה\"", b: "\"אימון\"",  result: "קרובים מאוד", color: "var(--success)" },
              { a: "\"מניה\"", b: "\"ריצה\"",   result: "רחוקים", color: "var(--danger)" },
            ].map((row, i) => (
              <motion.div key={i} {...fade(0.38 + i * 0.1)}
                style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "14px" }}
              >
                <code style={{ color: "#fbbf24", fontFamily: "'JetBrains Mono'" }}>{row.a}</code>
                <span style={{ color: "var(--text-muted)" }}>+</span>
                <code style={{ color: "#86efac", fontFamily: "'JetBrains Mono'" }}>{row.b}</code>
                <span style={{ color: "var(--text-muted)" }}>→</span>
                <span style={{ color: row.color, fontWeight: 700 }}>{row.result}</span>
              </motion.div>
            ))}
          </div>

          <motion.p {...fade(0.68)} style={{ marginTop: "20px", fontSize: "13px", color: "var(--text-muted)", fontFamily: "'JetBrains Mono'" }}>
            המודל שלי: gemini-embedding-2 · 1536 dimensions
          </motion.p>
        </div>

        {/* Right: visual space */}
        <motion.div {...fade(0.2)} style={{ position: "relative", height: "380px", background: "var(--surface)", border: "1px solid var(--border)", borderRadius: "4px", overflow: "hidden" }}>
          <div style={{ position: "absolute", top: "12px", left: "12px", fontSize: "11px", fontFamily: "'JetBrains Mono'", color: "var(--text-muted)" }}>מרחב ויקטורים (2D)</div>

          {/* Grid lines */}
          {[25, 50, 75].map(pct => (
            <div key={pct} style={{ position: "absolute", left: `${pct}%`, top: 0, bottom: 0, borderLeft: "1px dashed rgba(255,255,255,0.04)" }} />
          ))}
          {[25, 50, 75].map(pct => (
            <div key={pct} style={{ position: "absolute", top: `${pct}%`, left: 0, right: 0, borderTop: "1px dashed rgba(255,255,255,0.04)" }} />
          ))}

          {/* Group circles */}
          {revealed && (
            <>
              <motion.div initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }}
                style={{ position: "absolute", left: "55%", top: "18%", width: "120px", height: "100px", borderRadius: "50%", background: "rgba(251,191,36,0.05)", border: "1px dashed rgba(251,191,36,0.2)", transform: "translate(-50%,-50%)" }} />
              <motion.div initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.15 }}
                style={{ position: "absolute", left: "22%", top: "30%", width: "110px", height: "100px", borderRadius: "50%", background: "rgba(134,239,172,0.05)", border: "1px dashed rgba(134,239,172,0.2)", transform: "translate(-50%,-50%)" }} />
              <motion.div initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.3 }}
                style={{ position: "absolute", left: "56%", top: "74%", width: "100px", height: "80px", borderRadius: "50%", background: "rgba(147,197,253,0.05)", border: "1px dashed rgba(147,197,253,0.2)", transform: "translate(-50%,-50%)" }} />
            </>
          )}

          {/* Word dots */}
          {words.map((w, i) => (
            <motion.div
              key={w.label}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: revealed ? 1 : 0, scale: revealed ? 1 : 0 }}
              transition={{ delay: 0.4 + i * 0.08, duration: 0.4 }}
              style={{ position: "absolute", left: `${w.x}%`, top: `${w.y}%`, transform: "translate(-50%,-50%)", textAlign: "center" }}
            >
              <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: w.color, margin: "0 auto 4px", boxShadow: `0 0 8px ${w.color}` }} />
              <span style={{ fontSize: "11px", color: w.color, fontFamily: "'Space Grotesk'", fontWeight: 600, whiteSpace: "nowrap" }}>{w.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <SlideNav current={10} total={16} label="Embeddings" />
    </div>
  );
}
