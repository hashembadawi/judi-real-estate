import { getTranslations } from "next-intl/server";

const whatsappNumber = "905312646479";

export default async function WhatsAppButton() {
  const t = await getTranslations("WhatsApp");

  return (
    <a
      aria-label={t("label")}
      className="fixed end-6 bottom-6 z-50 flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-105 hover:bg-[#20bd5a] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#25D366]"
      href={`https://wa.me/${whatsappNumber}`}
      rel="noopener noreferrer"
      target="_blank"
    >
      <svg
        aria-hidden="true"
        className="size-8"
        fill="currentColor"
        viewBox="0 0 32 32"
      >
        <path d="M16.02 3.2A12.6 12.6 0 0 0 5.2 22.25L3.5 28.5l6.4-1.68A12.6 12.6 0 1 0 16.02 3.2Zm0 22.9c-1.88 0-3.72-.5-5.34-1.45l-.38-.22-3.8 1 .99-3.7-.25-.39a10.27 10.27 0 1 1 8.78 4.76Zm5.64-7.7c-.3-.15-1.79-.88-2.06-.98-.28-.1-.48-.15-.68.15-.2.3-.78.98-.95 1.18-.17.2-.35.22-.65.07-.3-.15-1.27-.47-2.42-1.5-.9-.8-1.51-1.79-1.69-2.09-.17-.3-.02-.46.13-.6.13-.13.3-.35.45-.53.15-.18.2-.3.3-.5.1-.2.05-.38-.02-.53-.08-.15-.68-1.63-.93-2.23-.24-.58-.49-.5-.68-.51h-.58c-.2 0-.53.08-.8.38-.28.3-1.05 1.03-1.05 2.5s1.08 2.9 1.23 3.1c.15.2 2.12 3.24 5.14 4.54.72.31 1.28.5 1.72.64.73.23 1.39.2 1.91.12.58-.09 1.79-.73 2.04-1.43.25-.7.25-1.3.18-1.43-.08-.13-.28-.2-.58-.35Z" />
      </svg>
    </a>
  );
}
