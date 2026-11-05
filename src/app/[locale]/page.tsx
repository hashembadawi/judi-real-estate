import Image from "next/image";
import { Check, Target } from "lucide-react";
import { hasLocale } from "next-intl";
import { getLocale, getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/Reveal";
import { projects } from "@/data/projects";
import { Link } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";

export default async function HomePage() {
  const t = await getTranslations("HomePage");
  const locale = await getLocale();

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <main>
      <section
        className="-mt-20 flex min-h-screen items-center justify-center bg-[#1B2A41] bg-cover bg-center px-6 py-20 text-center text-white"
        style={{
          backgroundImage:
            "linear-gradient(rgb(27 42 65 / 78%), rgb(27 42 65 / 86%)), url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2400&q=85')",
        }}
      >
        <Reveal className="mx-auto flex w-full max-w-5xl flex-col items-center">
          <h1 className="text-4xl font-semibold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
            {t("hero.title")}
          </h1>
          <p className="mt-6 text-lg text-white/85 sm:text-2xl">
            {t("hero.subtitle")}
          </p>
          <div className="mt-10 flex w-full flex-col gap-4 sm:w-auto sm:flex-row">
            <Link
              href="/projects"
              className="inline-flex w-full items-center justify-center rounded-lg bg-[#C9A227] px-8 py-4 font-semibold text-[#1B2A41] transition-colors hover:bg-[#d8b63d] sm:w-auto"
            >
              {t("hero.ctaPrimary")}
            </Link>
            <a
              href="#contact"
              className="inline-flex w-full items-center justify-center rounded-lg border border-white bg-transparent px-8 py-4 font-semibold text-white transition-colors hover:bg-white/10 sm:w-auto"
            >
              {t("hero.ctaSecondary")}
            </a>
          </div>
        </Reveal>
      </section>
      <section
        id="about"
        className="bg-white px-6 py-20 text-stone-950 sm:px-10 lg:py-28"
      >
        <Reveal className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-stone-100 shadow-lg">
            <Image
              src="/images/about-company.webp"
              alt={t("about.imageAlt")}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div>
            <p className="text-sm font-semibold text-emerald-800">
              {t("about.eyebrow")}
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              {t("about.title")}
            </h2>
            <p className="mt-5 text-base leading-8 text-stone-600">
              {t("about.description")}
            </p>

            <ul className="mt-8 grid gap-5">
              {(
                [
                  { key: "vision", Icon: Target },
                  { key: "mission", Icon: Check },
                  { key: "values", Icon: Check },
                ] as const
              ).map(({ key, Icon }) => (
                <li key={key} className="flex items-start gap-4">
                  <span className="mt-1 inline-flex size-10 shrink-0 items-center justify-center rounded-full bg-[#C9A227]/15 text-[#9A7615]">
                    <Icon aria-hidden="true" size={20} />
                  </span>
                  <div>
                    <h3 className="font-semibold">{t(`about.${key}.title`)}</h3>
                    <p className="mt-1 text-sm leading-7 text-stone-600">
                      {t(`about.${key}.description`)}
                    </p>
                  </div>
                </li>
              ))}
            </ul>

            <Link
              href="/projects"
              className="mt-8 inline-flex items-center justify-center rounded-lg bg-[#C9A227] px-6 py-3 font-semibold text-[#1B2A41] transition-colors hover:bg-[#d8b63d]"
            >
              {t("about.cta")}
            </Link>
          </div>
        </Reveal>
      </section>
      <section
        id="projects"
        className="bg-stone-50 px-6 py-20 text-stone-950 sm:px-10 lg:py-28"
      >
        <Reveal className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-semibold text-emerald-800">
                {t("projects.eyebrow")}
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                {t("projects.title")}
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.slice(0, 3).map((project) => (
              <Link
                key={project.id}
                href={`/projects/${project.slug}`}
                className="group overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-stone-200 transition-[transform,box-shadow] duration-300 hover:scale-[1.02] hover:shadow-xl"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-stone-200">
                  <Image
                    src={project.coverImage}
                    alt={project.title[locale]}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-semibold">
                    {project.title[locale]}
                  </h3>
                  <div className="mt-3 flex items-center justify-between gap-3 text-sm text-stone-600">
                    <span>{project.location[locale]}</span>
                    <span>{project.year}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-10 flex justify-center">
            <Link
              href="/projects"
              className="inline-flex items-center justify-center rounded-lg bg-[#C9A227] px-7 py-3 font-semibold text-[#1B2A41] transition-colors hover:bg-[#d8b63d]"
            >
              {t("projects.viewAll")}
            </Link>
          </div>
        </Reveal>
      </section>
      <Reveal>
        <ContactForm />
      </Reveal>
    </main>
  );
}
