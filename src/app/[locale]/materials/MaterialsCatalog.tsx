"use client";

import Image from "next/image";
import { X } from "lucide-react";
import { hasLocale, useLocale, useTranslations } from "next-intl";
import { useState, type FormEvent } from "react";
import { materials } from "@/data/materials";
import { routing } from "@/i18n/routing";

export default function MaterialsCatalog() {
  const locale = useLocale();
  const t = useTranslations("MaterialsPage");
  const modalT = useTranslations("MaterialsModal");
  const [selectedMaterialId, setSelectedMaterialId] = useState<string | null>(
    null,
  );
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const selectedMaterial = materials.find(
    (material) => material.id === selectedMaterialId,
  );

  if (!hasLocale(routing.locales, locale)) {
    throw new Error(`Unsupported materials locale: ${locale}`);
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!selectedMaterial) return;

    const form = event.currentTarget;
    const formData = new FormData(form);
    setIsSubmitting(true);
    console.log("Material quote request (demo):", {
      material: selectedMaterial.id,
      name: formData.get("name"),
      phone: formData.get("phone"),
      quantity: formData.get("quantity"),
    });

    await new Promise((resolve) => setTimeout(resolve, 600));
    setIsSubmitting(false);
    setIsSubmitted(true);
    form.reset();
  }

  function closeModal() {
    setSelectedMaterialId(null);
    setIsSubmitted(false);
    setIsSubmitting(false);
  }

  return (
    <>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {materials.map((material) => (
          <article
            key={material.id}
            className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-stone-200 transition-shadow hover:shadow-lg"
          >
            <div className="relative aspect-[4/3] bg-stone-100">
              <Image
                src={material.image}
                alt={t(`items.${material.id}.name`)}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover"
                loading="lazy"
              />
            </div>
            <div className="p-5">
              <h2 className="text-xl font-semibold text-stone-950">
                {t(`items.${material.id}.name`)}
              </h2>
              <p className="mt-2 min-h-14 text-sm leading-6 text-stone-600">
                {t(`items.${material.id}.description`)}
              </p>
              <button
                type="button"
                onClick={() => {
                  setIsSubmitted(false);
                  setSelectedMaterialId(material.id);
                }}
                className="mt-5 inline-flex w-full items-center justify-center rounded-lg bg-[#C9A227] px-5 py-3 font-semibold text-[#1B2A41] transition-colors hover:bg-[#d8b63d]"
              >
                {t("requestQuote")}
              </button>
            </div>
          </article>
        ))}
      </div>

      {selectedMaterial && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) closeModal();
          }}
        >
          <section
            aria-labelledby="quote-modal-title"
            aria-modal="true"
            className="relative w-full max-w-lg rounded-2xl bg-white p-6 text-stone-950 shadow-2xl sm:p-8"
            role="dialog"
          >
            <button
              type="button"
              aria-label={modalT("close")}
              className="absolute end-4 top-4 inline-flex size-9 items-center justify-center rounded-full text-stone-500 transition-colors hover:bg-stone-100 hover:text-stone-900"
              onClick={closeModal}
            >
              <X aria-hidden="true" size={20} />
            </button>
            <h2 id="quote-modal-title" className="pe-10 text-2xl font-semibold">
              {modalT("title", {
                material: t(`items.${selectedMaterial.id}.name`),
              })}
            </h2>
            <form className="mt-6 grid gap-4" onSubmit={handleSubmit}>
              <label className="grid gap-2 text-sm font-medium">
                {modalT("name")}
                <input
                  autoComplete="name"
                  className="rounded-lg border border-stone-300 px-4 py-3 outline-none focus:border-emerald-800"
                  name="name"
                  required
                />
              </label>
              <label className="grid gap-2 text-sm font-medium">
                {modalT("phone")}
                <input
                  autoComplete="tel"
                  className="rounded-lg border border-stone-300 px-4 py-3 outline-none focus:border-emerald-800"
                  name="phone"
                  type="tel"
                  required
                />
              </label>
              <label className="grid gap-2 text-sm font-medium">
                {modalT("quantity")}
                <input
                  className="rounded-lg border border-stone-300 px-4 py-3 outline-none focus:border-emerald-800"
                  min="1"
                  name="quantity"
                  required
                  type="number"
                />
              </label>
              <button
                className="mt-2 inline-flex min-h-12 items-center justify-center rounded-lg bg-[#C9A227] px-5 py-3 font-semibold text-[#1B2A41] transition-colors hover:bg-[#d8b63d] disabled:cursor-wait disabled:opacity-70"
                disabled={isSubmitting}
                type="submit"
              >
                {isSubmitting ? modalT("loading") : modalT("submit")}
              </button>
              {isSubmitted && (
                <p
                  className="rounded-lg bg-green-100 px-4 py-3 text-sm font-medium text-green-800"
                  role="status"
                >
                  {modalT("success")}
                </p>
              )}
            </form>
          </section>
        </div>
      )}
    </>
  );
}
