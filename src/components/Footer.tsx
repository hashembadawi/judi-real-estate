"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

const quickLinks = [
  { key: "home", href: "/" },
  { key: "about", href: "/#about" },
  { key: "services", href: "/services" },
  { key: "projects", href: "/projects" },
  { key: "materials", href: "/materials" },
  { key: "contact", href: "/#contact" },
] as const;

const socialLinks = [
  { key: "facebook", href: "https://www.facebook.com/" },
  { key: "instagram", href: "https://www.instagram.com/" },
  { key: "linkedin", href: "https://www.linkedin.com/" },
] as const;

function SocialIcon({ name }: { name: (typeof socialLinks)[number]["key"] }) {
  if (name === "instagram") {
    return (
      <svg
        aria-hidden="true"
        className="size-[18px]"
        fill="none"
        viewBox="0 0 24 24"
      >
        <rect
          width="16"
          height="16"
          x="4"
          y="4"
          stroke="currentColor"
          strokeWidth="2"
          rx="5"
        />
        <circle
          cx="12"
          cy="12"
          r="3.5"
          stroke="currentColor"
          strokeWidth="2"
        />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
      </svg>
    );
  }

  return (
    <span aria-hidden="true" className="text-base font-bold leading-none">
      {name === "facebook" ? "f" : "in"}
    </span>
  );
}

export default function Footer() {
  const t = useTranslations("Footer");
  const nav = useTranslations("Navbar");

  return (
    <footer className="bg-[#0F1923] text-stone-200">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 ps-6 pe-6 py-14 sm:ps-10 sm:pe-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
        <section>
          <Link
            href="/"
            className="inline-flex text-2xl font-bold tracking-wide text-[#C9A227]"
          >
            جودي
          </Link>
          <p className="mt-4 max-w-xs text-sm leading-7 text-stone-400">
            {t("description")}
          </p>
        </section>

        <nav aria-label={t("quickLinks")}>
          <h2 className="text-base font-semibold text-white">
            {t("quickLinks")}
          </h2>
          <ul className="mt-4 grid gap-3">
            {quickLinks.map(({ key, href }) => (
              <li key={key}>
                <Link
                  href={href}
                  className="text-sm text-stone-400 transition-colors hover:text-[#C9A227]"
                >
                  {nav(key)}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <section>
          <h2 className="text-base font-semibold text-white">
            {t("contactTitle")}
          </h2>
          <address className="mt-4 grid gap-3 text-sm not-italic text-stone-400">
            <p>
              <span className="font-medium text-stone-200">{t("address")}: </span>
              {t("addressValue")}
            </p>
            <p>
              <span className="font-medium text-stone-200">{t("phone")}: </span>
              {t("phoneValue")}
            </p>
            <p>
              <span className="font-medium text-stone-200">{t("email")}: </span>
              <a
                className="transition-colors hover:text-[#C9A227]"
                href={`mailto:${t("emailValue")}`}
              >
                {t("emailValue")}
              </a>
            </p>
          </address>
        </section>

        <section>
          <h2 className="text-base font-semibold text-white">
            {t("followUs")}
          </h2>
          <ul className="mt-4 flex items-center gap-3">
            {socialLinks.map(({ key, href }) => (
              <li key={key}>
                <a
                  aria-label={t(`social.${key}`)}
                  className="inline-flex size-10 items-center justify-center rounded-full border border-white/15 text-stone-300 transition-colors hover:border-[#C9A227] hover:text-[#C9A227]"
                  href={href}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <SocialIcon name={key} />
                </a>
              </li>
            ))}
          </ul>
        </section>
      </div>

      <div className="border-t border-white/10">
        <p className="mx-auto max-w-7xl ps-6 pe-6 py-5 text-center text-xs text-stone-500 sm:ps-10 sm:pe-10">
          © {new Date().getFullYear()} {t("copyright")}
        </p>
      </div>
    </footer>
  );
}
