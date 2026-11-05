import Image from "next/image";
import { hasLocale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import Lightbox from "@/components/Lightbox";
import { projects } from "@/data/projects";
import { Link } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}

export default async function ProjectDetailsPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const project = projects.find((item) => item.slug === slug);
  if (!project) {
    notFound();
  }

  setRequestLocale(locale);
  const t = await getTranslations("ProjectDetailsPage");
  const title = project.title[locale];

  return (
    <main className="mx-auto min-h-[calc(100vh-5rem)] w-full max-w-7xl px-6 py-12 sm:px-10">
      <Link
        href="/projects"
        className="inline-flex rounded-lg px-1 py-2 text-sm font-medium text-emerald-900 transition-colors hover:text-emerald-700"
      >
        {t("back")}
      </Link>

      <header className="mb-8 mt-6 grid gap-6 md:grid-cols-[1fr_auto] md:items-end">
        <div>
          <h1 className="text-4xl font-semibold tracking-tight text-stone-950 sm:text-5xl">
            {title}
          </h1>
          <p className="mt-3 text-lg text-stone-600">
            {project.location[locale]}
          </p>
        </div>
        <p className="text-sm text-stone-500">
          {t("year")}: {project.year}
        </p>
      </header>

      <div className="relative mb-10 aspect-[16/8] overflow-hidden rounded-2xl bg-stone-100">
        <Image
          src={project.coverImage}
          alt={title}
          fill
          priority
          sizes="(max-width: 768px) 100vw, 1200px"
          className="object-cover"
        />
      </div>

      <section className="mb-12 max-w-3xl">
        <h2 className="text-2xl font-semibold text-stone-950">
          {t("description")}
        </h2>
        <p className="mt-3 text-base leading-8 text-stone-600">
          {project.description[locale]}
        </p>
      </section>

      <section aria-label={t("gallery")}>
        <h2 className="mb-5 text-2xl font-semibold text-stone-950">
          {t("gallery")}
        </h2>
        <Lightbox images={project.images} title={title} />
      </section>
    </main>
  );
}
