import {
  Briefcase,
  Building2,
  ClipboardCheck,
  HardHat,
  Paintbrush,
  Ruler,
} from "lucide-react";
import { hasLocale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { services, type ServiceIconName } from "@/data/services";
import { Link } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";

const serviceIcons = {
  Building2,
  HardHat,
  Ruler,
  ClipboardCheck,
  Paintbrush,
  Briefcase,
} satisfies Record<ServiceIconName, typeof Building2>;

export default async function ServicesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);
  const t = await getTranslations("ServicesPage");

  return (
    <main className="min-h-[calc(100vh-5rem)] bg-stone-50 text-stone-950">
      <section className="bg-[#1B2A41] px-6 py-16 text-center text-white sm:px-10 sm:py-20">
        <p className="text-sm font-semibold tracking-wide text-[#E4C45D]">
          {t("eyebrow")}
        </p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
          {t("title")}
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-white/75 sm:text-lg">
          {t("subtitle")}
        </p>
      </section>

      <section
        aria-label={t("title")}
        className="mx-auto max-w-7xl px-6 py-14 sm:px-10 sm:py-20"
      >
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = serviceIcons[service.iconName];

            return (
              <article
                key={service.id}
                className="group relative overflow-hidden rounded-2xl border border-stone-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#C9A227]/50 hover:shadow-xl hover:shadow-stone-900/10"
              >
                <span className="absolute end-6 top-6 text-xs font-semibold tracking-widest text-stone-300">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="inline-flex size-14 items-center justify-center rounded-2xl bg-[#C9A227]/10 transition-colors group-hover:bg-[#C9A227]/20">
                  <Icon
                    aria-hidden="true"
                    className="text-[#C9A227]"
                    size={30}
                    strokeWidth={1.8}
                  />
                </div>
                <h2 className="mt-6 text-xl font-semibold leading-snug">
                  {service.title[locale]}
                </h2>
                <p className="mt-3 min-h-20 text-sm leading-7 text-stone-600">
                  {service.description[locale]}
                </p>
                <Link
                  href="/#contact"
                  className="mt-5 inline-flex items-center rounded-lg border border-[#C9A227]/50 px-4 py-2 text-sm font-semibold text-[#806111] transition-colors hover:bg-[#C9A227] hover:text-[#1B2A41]"
                >
                  {t("cta")}
                </Link>
              </article>
            );
          })}
        </div>
      </section>
    </main>
  );
}
