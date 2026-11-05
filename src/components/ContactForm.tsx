"use client";

import { useState, type FormEvent } from "react";
import { useTranslations } from "next-intl";

export default function ContactForm() {
  const t = useTranslations("ContactForm");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setIsSubmitted(false);

    const form = event.currentTarget;
    const formData = new FormData(form);
    console.log("Contact form submission (demo):", {
      name: formData.get("name"),
      phone: formData.get("phone"),
      email: formData.get("email"),
      message: formData.get("message"),
    });

    await new Promise((resolve) => setTimeout(resolve, 700));
    setIsSubmitting(false);
    setIsSubmitted(true);
    form.reset();
  }

  return (
    <section
      id="contact"
      className="scroll-mt-24 bg-stone-50 px-6 py-20 text-stone-950 sm:px-10"
    >
      <div className="mx-auto max-w-3xl">
        <h2 className="text-3xl font-semibold sm:text-4xl">{t("title")}</h2>
        <form className="mt-8 grid gap-5" onSubmit={handleSubmit}>
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="grid gap-2 text-sm font-medium">
              {t("name")}
              <input
                autoComplete="name"
                className="rounded-lg border border-stone-300 bg-white px-4 py-3 outline-none transition focus:border-emerald-800"
                name="name"
                required
              />
            </label>
            <label className="grid gap-2 text-sm font-medium">
              {t("phone")}
              <input
                autoComplete="tel"
                className="rounded-lg border border-stone-300 bg-white px-4 py-3 outline-none transition focus:border-emerald-800"
                name="phone"
                type="tel"
                required
              />
            </label>
          </div>
          <label className="grid gap-2 text-sm font-medium">
            {t("email")}
            <input
              autoComplete="email"
              className="rounded-lg border border-stone-300 bg-white px-4 py-3 outline-none transition focus:border-emerald-800"
              name="email"
              type="email"
              required
            />
          </label>
          <label className="grid gap-2 text-sm font-medium">
            {t("message")}
            <textarea
              className="min-h-36 resize-y rounded-lg border border-stone-300 bg-white px-4 py-3 outline-none transition focus:border-emerald-800"
              name="message"
              required
            />
          </label>
          <button
            className="inline-flex min-h-12 items-center justify-center rounded-lg bg-emerald-900 px-6 py-3 font-semibold text-white transition-colors hover:bg-emerald-800 disabled:cursor-wait disabled:opacity-70 sm:justify-self-start"
            disabled={isSubmitting}
            type="submit"
          >
            {isSubmitting ? t("loading") : t("submit")}
          </button>
          {isSubmitted && (
            <p
              className="rounded-lg bg-green-100 px-4 py-3 font-medium text-green-800"
              role="status"
            >
              {t("success")}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
