import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "הסוכן שלי — מה בניתי ואיך",
  description: "מצגת לימוד אישית: מה זה AI Agent, איך בניתי את הסוכן שלי, ואיפה אני עומד.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="he" className="h-full">
      <body className="h-full overflow-hidden bg-[#060818]">{children}</body>
    </html>
  );
}
