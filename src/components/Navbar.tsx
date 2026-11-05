"use client";

import { ArrowUpRight, Building2, Menu, X } from "lucide-react";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { Link, usePathname } from "@/i18n/navigation";

const navigationItems = [
  { key: "home", href: "/" },
  { key: "about", href: "/#about" },
  { key: "services", href: "/services" },
  { key: "projects", href: "/projects" },
  { key: "materials", href: "/materials" },
  { key: "contact", href: "/#contact" },
] as const;

export default function Navbar() {
  const t = useTranslations("Navbar");
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isHomePage = pathname === "/";
  const hasDarkBackground = isScrolled || isMenuOpen || !isHomePage;
  const primaryNavigationItems = navigationItems.filter(
    ({ key }) => key !== "contact",
  );

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-40 px-3 pt-3 sm:px-6">
      <div
        className={`mx-auto max-w-7xl rounded-2xl border backdrop-blur-xl transition-all duration-300 ${
          hasDarkBackground
            ? "border-white/10 bg-[#1B2A41]/95 shadow-xl shadow-black/15"
            : "border-white/15 bg-[#0F1923]/35 shadow-lg shadow-black/5"
        }`}
      >
        <div className="flex h-[4.25rem] items-center justify-between gap-3 px-3 sm:px-5">
          <Link
            href="/"
            aria-label={t("home")}
            className="group flex min-w-0 shrink-0 items-center gap-2.5"
          >
            <span className="inline-flex size-10 items-center justify-center rounded-xl bg-[#C9A227] text-[#1B2A41] shadow-md shadow-black/10 transition-transform duration-300 group-hover:rotate-[-4deg] group-hover:scale-105">
              <Building2 aria-hidden="true" size={21} strokeWidth={2.2} />
            </span>
            <span className="flex min-w-0 flex-col">
              <span className="text-xl font-bold leading-tight tracking-wide text-white sm:text-2xl">
                جودي
              </span>
              <span className="hidden text-[10px] leading-4 text-white/60 sm:block">
                {t("tagline")}
              </span>
            </span>
          </Link>

          <nav
            aria-label={t("label")}
            className="hidden items-center gap-1 xl:flex"
          >
            {primaryNavigationItems.map(({ key, href }) => {
              const isActive =
                (key === "home" && pathname === "/") ||
                (key === "services" && pathname.startsWith("/services")) ||
                (key === "projects" && pathname.startsWith("/projects")) ||
                (key === "materials" && pathname.startsWith("/materials"));

              return (
                <Link
                  key={key}
                  href={href}
                  onClick={() => setIsMenuOpen(false)}
                  aria-current={isActive ? "page" : undefined}
                  className={`relative whitespace-nowrap rounded-xl px-3 py-2 text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-white/10 text-[#E4C45D]"
                      : "text-white/80 hover:bg-white/8 hover:text-white"
                  }`}
                >
                  {t(key)}
                </Link>
              );
            })}
          </nav>

          <div className="flex shrink-0 items-center gap-2 sm:gap-3">
            <div onClick={() => setIsMenuOpen(false)}>
              <LanguageSwitcher />
            </div>
            <Link
              href="/#contact"
              onClick={() => setIsMenuOpen(false)}
              className="hidden items-center gap-2 rounded-xl bg-[#C9A227] px-4 py-2.5 text-sm font-semibold text-[#1B2A41] shadow-md shadow-black/10 transition-all hover:-translate-y-0.5 hover:bg-[#dfbd48] xl:inline-flex"
            >
              {t("contact")}
              <ArrowUpRight aria-hidden="true" size={16} />
            </Link>
            <button
              type="button"
              aria-label={isMenuOpen ? t("closeMenu") : t("openMenu")}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-navigation"
              className="inline-flex size-10 items-center justify-center rounded-xl border border-white/10 text-white transition-colors hover:border-white/20 hover:bg-white/10 xl:hidden"
              onClick={() => setIsMenuOpen((open) => !open)}
            >
              {isMenuOpen ? (
                <X aria-hidden="true" size={22} />
              ) : (
                <Menu aria-hidden="true" size={22} />
              )}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <nav
            id="mobile-navigation"
            aria-label={t("label")}
            className="border-t border-white/10 px-3 py-3 xl:hidden"
          >
            <ul className="grid gap-1">
              {navigationItems.map(({ key, href }) => {
                const isActive =
                  (key === "home" && pathname === "/") ||
                  (key === "services" && pathname.startsWith("/services")) ||
                  (key === "projects" && pathname.startsWith("/projects")) ||
                  (key === "materials" && pathname.startsWith("/materials"));

                return (
                  <li key={key}>
                    <Link
                      href={href}
                      onClick={() => setIsMenuOpen(false)}
                      aria-current={isActive ? "page" : undefined}
                      className={`flex items-center justify-between rounded-xl px-4 py-3 text-sm font-medium transition-colors ${
                        isActive
                          ? "bg-white/10 text-[#E4C45D]"
                          : "text-white/85 hover:bg-white/8 hover:text-white"
                      }`}
                    >
                      {t(key)}
                      {isActive && (
                        <span className="size-1.5 rounded-full bg-[#C9A227]" />
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}
