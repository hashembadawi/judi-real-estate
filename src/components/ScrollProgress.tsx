"use client";

import { useLocale } from "next-intl";
import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const locale = useLocale();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let frame = 0;

    const updateProgress = () => {
      window.cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(() => {
        const scrollableHeight =
          document.documentElement.scrollHeight - window.innerHeight;
        const nextProgress =
          scrollableHeight > 0
            ? (window.scrollY / scrollableHeight) * 100
            : 0;

        setProgress(Math.min(100, Math.max(0, nextProgress)));
      });
    };

    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, []);

  return (
    <div
      aria-label="Reading progress"
      aria-valuemax={100}
      aria-valuemin={0}
      aria-valuenow={Math.round(progress)}
      className="pointer-events-none fixed inset-x-0 top-0 z-[60] h-1"
      role="progressbar"
    >
      <div
        className="h-full origin-left bg-[#C9A227] transition-transform duration-100 ease-out rtl:origin-right"
        style={{
          transform: `scaleX(${progress / 100})`,
          transformOrigin: locale === "ar" ? "right" : "left",
        }}
      />
    </div>
  );
}
