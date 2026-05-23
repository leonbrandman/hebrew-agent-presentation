"use client";
import { useEffect, useState, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Slide01Hook from "@/components/slides/Slide01Hook";
import Slide02WhatIsAgent from "@/components/slides/Slide02WhatIsAgent";
import Slide03ReAct from "@/components/slides/Slide03ReAct";
import Slide04Memory from "@/components/slides/Slide04Memory";
import Slide05Tools from "@/components/slides/Slide05Tools";
import Slide06MCP from "@/components/slides/Slide06MCP";
import Slide07MyAgent from "@/components/slides/Slide07MyAgent";
import Slide08ClaudeMD from "@/components/slides/Slide08ClaudeMD";
import Slide09Pipelines from "@/components/slides/Slide09Pipelines";
import Slide10Embeddings from "@/components/slides/Slide10Embeddings";
import Slide11RAG from "@/components/slides/Slide11RAG";
import Slide12Percentile from "@/components/slides/Slide12Percentile";
import Slide13Gaps from "@/components/slides/Slide13Gaps";
import Slide14Future from "@/components/slides/Slide14Future";
import Slide15Concepts from "@/components/slides/Slide15Concepts";
import Slide16CTA from "@/components/slides/Slide16CTA";

const SLIDES = [
  Slide01Hook, Slide02WhatIsAgent, Slide03ReAct, Slide04Memory,
  Slide05Tools, Slide06MCP, Slide07MyAgent, Slide08ClaudeMD,
  Slide09Pipelines, Slide10Embeddings, Slide11RAG, Slide12Percentile,
  Slide13Gaps, Slide14Future, Slide15Concepts, Slide16CTA,
];

const variants = {
  enter: (dir: number) => ({ opacity: 0, y: dir > 0 ? 24 : -24 }),
  center: { opacity: 1, y: 0 },
  exit: (dir: number) => ({ opacity: 0, y: dir > 0 ? -16 : 16 }),
};

export default function Presentation() {
  const [current, setCurrent] = useState(0);
  const [dir, setDir] = useState(1);

  const next = useCallback(() => {
    setDir(1);
    setCurrent(c => Math.min(c + 1, SLIDES.length - 1));
  }, []);

  const prev = useCallback(() => {
    setDir(-1);
    setCurrent(c => Math.max(c - 1, 0));
  }, []);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " " || e.key === "ArrowDown") { e.preventDefault(); next(); }
      if (e.key === "ArrowLeft" || e.key === "ArrowUp") { e.preventDefault(); prev(); }
      if (e.key === "f" || e.key === "F") {
        if (!document.fullscreenElement) document.documentElement.requestFullscreen();
        else document.exitFullscreen();
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [next, prev]);

  const SlideComponent = SLIDES[current];

  return (
    <>
      <div className="grain" aria-hidden="true" />

      <div style={{ position: "relative", width: "100vw", height: "100vh", overflow: "hidden" }}>
        <AnimatePresence mode="wait" custom={dir}>
          <motion.div
            key={current}
            custom={dir}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.32, ease: [0.25, 0.1, 0.25, 1] }}
            style={{ position: "absolute", inset: 0 }}
          >
            <SlideComponent />
          </motion.div>
        </AnimatePresence>

        {/* Click zones */}
        <div onClick={prev} style={{ position: "absolute", left: 0, top: 0, width: "15%", height: "100%", cursor: "w-resize", zIndex: 10 }} />
        <div onClick={next} style={{ position: "absolute", right: 0, top: 0, width: "15%", height: "100%", cursor: "e-resize", zIndex: 10 }} />

        {/* Progress bar */}
        <div style={{ position: "fixed", top: 0, left: 0, right: 0, height: "2px", background: "var(--border)", zIndex: 20 }}>
          <motion.div
            style={{ height: "100%", background: "linear-gradient(90deg, var(--primary), var(--cyan))" }}
            animate={{ width: `${((current + 1) / SLIDES.length) * 100}%` }}
            transition={{ type: "spring", stiffness: 120, damping: 20 }}
          />
        </div>

        {current === 0 && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5, duration: 1 }}
            style={{ position: "fixed", bottom: "64px", left: "50%", transform: "translateX(-50%)", fontSize: "11px", color: "var(--text-muted)", fontFamily: "'JetBrains Mono'", letterSpacing: "0.12em", zIndex: 20, opacity: 0.4 }}
          >
            ← → ניווט &nbsp;·&nbsp; f מסך מלא
          </motion.div>
        )}
      </div>
    </>
  );
}
