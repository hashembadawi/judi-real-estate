import { getTranslations } from "next-intl/server";
import MaterialsCatalog from "./MaterialsCatalog";

export default async function MaterialsPage() {
  const t = await getTranslations("MaterialsPage");

  return (
    <main className="mx-auto min-h-[calc(100vh-5rem)] w-full max-w-7xl px-6 py-16 text-stone-950 sm:px-10">
      <header className="mb-10">
        <p className="text-sm font-semibold text-emerald-800">{t("eyebrow")}</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
          {t("title")}
        </h1>
        <p className="mt-4 max-w-2xl leading-7 text-stone-600">
          {t("description")}
        </p>
      </header>
      <MaterialsCatalog />
    </main>
  );
}
