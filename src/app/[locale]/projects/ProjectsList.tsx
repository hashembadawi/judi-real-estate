"use client";

import Image from "next/image";
import { hasLocale, useLocale, useTranslations } from "next-intl";
import { useState } from "react";
import { Link } from "@/i18n/navigation";
import { projects } from "@/data/projects";
import { routing } from "@/i18n/routing";

const filters = [
  "all",
  "residential",
  "commercial",
  "construction",
] as const;

type Filter = (typeof filters)[number];

export default function ProjectsList() {
  const t = useTranslations("ProjectsPage");
  const locale = useLocale();
  const [activeFilter, setActiveFilter] = useState<Filter>("all");

  if (!hasLocale(routing.locales, locale)) {
    throw new Error(`Unsupported project locale: ${locale}`);
  }

  const visibleProjects = projects.filter(
    (project) =>
      activeFilter === "all" || project.category === activeFilter,
  );

  return (
    <main className="mx-auto w-full max-w-7xl px-6 py-16 sm:px-10">
      <header className="mb-10">
        <p className="text-sm font-semibold text-emerald-800">{t("eyebrow")}</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-stone-950 sm:text-5xl">
          {t("title")}
        </h1>
      </header>

      <div
        className="mb-8 flex flex-wrap gap-3"
        role="group"
        aria-label={t("filters.label")}
      >
        {filters.map((filter) => (
          <button
            key={filter}
            type="button"
            aria-pressed={activeFilter === filter}
            onClick={() => setActiveFilter(filter)}
            className={`rounded-full px-5 py-2.5 text-sm font-medium transition-colors ${
              activeFilter === filter
                ? "bg-[#C9A227] text-[#1B2A41]"
                : "bg-stone-100 text-stone-700 hover:bg-stone-200"
            }`}
          >
            {t(`filters.${filter}`)}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {visibleProjects.map((project) => (
          <Link
            key={project.slug}
            href={`/projects/${project.slug}`}
            className="animate-[project-enter_300ms_ease-out_both] group overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-stone-200 transition-[opacity,transform,box-shadow] duration-300 hover:scale-[1.02] hover:shadow-lg"
          >
            <div className="relative aspect-[4/3] overflow-hidden bg-stone-100">
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
              <h2 className="text-xl font-semibold text-stone-950">
                {project.title[locale]}
              </h2>
              <div className="mt-3 flex items-center justify-between gap-3 text-sm text-stone-600">
                <span>{project.location[locale]}</span>
                <span>{project.year}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
