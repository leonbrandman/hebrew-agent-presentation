"use client";
interface Props { current: number; total: number; label: string; }

export default function SlideNav({ current, total, label }: Props) {
  return (
    <div className="slide-footer">
      <div className="flex items-center gap-4">
        <span className="slide-number">{String(current).padStart(2, "0")} / {String(total).padStart(2, "0")}</span>
        <span className="slide-label">{label}</span>
      </div>
      <span className="slide-brand">הסוכן שלי · 2026</span>
    </div>
  );
}
