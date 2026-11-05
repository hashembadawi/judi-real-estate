"use client";

import { useLocale } from "next-intl";
import { useTransition } from "react";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";

const localeLabels = {
  ar: "AR",
  en: "EN",
  tr: "TR",
} as const;

export default function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  return (
    <nav
      aria-label="Language"
      className="inline-flex items-center gap-0.5 rounded-xl border border-white/10 bg-black/10 p-1 shadow-inner shadow-black/10"
    >
      {routing.locales.map((nextLocale) => {
        const isActive = locale === nextLocale;

        return (
          <button
            key={nextLocale}
            type="button"
            lang={nextLocale}
            aria-pressed={isActive}
            disabled={isPending || isActive}
            onClick={() => {
              startTransition(() => {
                router.replace(pathname, { locale: nextLocale });
              });
            }}
            className={`min-w-9 rounded-lg px-2.5 py-1.5 text-[11px] font-bold tracking-wide transition-all disabled:cursor-default ${
              isActive
                ? "bg-[#C9A227] text-[#1B2A41] shadow-sm"
                : "text-white/65 hover:bg-white/10 hover:text-white"
            }`}
          >
            {localeLabels[nextLocale]}
          </button>
        );
      })}
    </nav>
  );
}
