export type ProjectLocale = "ar" | "en" | "tr";
export type ProjectCategory = "residential" | "commercial" | "construction";

export type Project = {
  id: string;
  slug: string;
  title: Record<ProjectLocale, string>;
  location: Record<ProjectLocale, string>;
  description: Record<ProjectLocale, string>;
  coverImage: string;
  images: string[];
  category: ProjectCategory;
  year: number;
};

export const projects: Project[] = [
  {
    id: "1",
    slug: "palm-complex",
    title: {
      ar: "مجمع النخيل السكني",
      en: "Palm Residential Complex",
      tr: "Palmiye Konut Kompleksi",
    },
    location: {
      ar: "الرياض، المملكة العربية السعودية",
      en: "Riyadh, Saudi Arabia",
      tr: "Riyad, Suudi Arabistan",
    },
    description: {
      ar: "مجمع سكني عصري يجمع بين التصميم المدروس والمساحات المريحة، مع مرافق متكاملة تلبي احتياجات الحياة اليومية.",
      en: "A contemporary residential complex combining thoughtful design and comfortable spaces with amenities for everyday living.",
      tr: "Özenli tasarımı ve konforlu yaşam alanlarını günlük ihtiyaçlara yönelik olanaklarla buluşturan çağdaş bir konut kompleksi.",
    },
    coverImage: "/images/projects/project-1.jpg",
    images: [
      "/images/projects/project-1.jpg",
      "/images/projects/palm-complex-01.webp",
      "/images/projects/judi-villas-01.webp",
    ],
    category: "residential",
    year: 2024,
  },
  {
    id: "2",
    slug: "urban-tower",
    title: {
      ar: "برج الأعمال الحضري",
      en: "Urban Business Tower",
      tr: "Urban İş Merkezi",
    },
    location: {
      ar: "جدة، المملكة العربية السعودية",
      en: "Jeddah, Saudi Arabia",
      tr: "Cidde, Suudi Arabistan",
    },
    description: {
      ar: "وجهة أعمال متعددة الاستخدامات صُممت لتوفر بيئة عمل عملية ومتصلة في قلب المدينة.",
      en: "A mixed-use business destination designed to provide a practical, connected workplace in the heart of the city.",
      tr: "Şehrin merkezinde işlevsel ve bağlantılı bir çalışma ortamı sunmak üzere tasarlanmış karma kullanımlı bir iş merkezi.",
    },
    coverImage: "/images/projects/project-2.jpg",
    images: [
      "/images/projects/project-2.jpg",
      "/images/projects/urban-tower-01.webp",
      "/images/projects/palm-complex-01.webp",
    ],
    category: "commercial",
    year: 2023,
  },
  {
    id: "3",
    slug: "judi-villas",
    title: {
      ar: "فلل جودي",
      en: "Judi Villas",
      tr: "Judi Villaları",
    },
    location: {
      ar: "الدمام، المملكة العربية السعودية",
      en: "Dammam, Saudi Arabia",
      tr: "Dammam, Suudi Arabistan",
    },
    description: {
      ar: "أعمال إنشاء فلل عائلية بتفاصيل متقنة ومواد عالية الجودة، من مرحلة التخطيط حتى التسليم.",
      en: "Construction of family villas with considered details and quality materials, from planning through delivery.",
      tr: "Planlamadan teslime kadar özenli detaylar ve kaliteli malzemelerle hayata geçirilen aile villaları.",
    },
    coverImage: "/images/projects/project-3.jpg",
    images: [
      "/images/projects/project-3.jpg",
      "/images/projects/judi-villas-01.webp",
      "/images/projects/urban-tower-01.webp",
    ],
    category: "construction",
    year: 2024,
  },
  {
    id: "4",
    slug: "coastal-residences",
    title: {
      ar: "مساكن الواجهة البحرية",
      en: "Coastal Residences",
      tr: "Sahil Konutları",
    },
    location: {
      ar: "الخبر، المملكة العربية السعودية",
      en: "Al Khobar, Saudi Arabia",
      tr: "Al Khobar, Suudi Arabistan",
    },
    description: {
      ar: "مجموعة سكنية تستلهم تصميمها من أجواء الساحل وتوفر مساحات عصرية للعائلات.",
      en: "A residential community inspired by the coast, offering contemporary spaces for families.",
      tr: "Kıyı atmosferinden ilham alan ve aileler için çağdaş yaşam alanları sunan bir konut topluluğu.",
    },
    coverImage: "/images/projects/project-4.jpg",
    images: [
      "/images/projects/project-4.jpg",
      "/images/projects/palm-complex-01.webp",
      "/images/projects/judi-villas-01.webp",
    ],
    category: "residential",
    year: 2025,
  },
  {
    id: "5",
    slug: "central-plaza",
    title: {
      ar: "سنترال بلازا",
      en: "Central Plaza",
      tr: "Central Plaza",
    },
    location: {
      ar: "الرياض، المملكة العربية السعودية",
      en: "Riyadh, Saudi Arabia",
      tr: "Riyad, Suudi Arabistan",
    },
    description: {
      ar: "وجهة تجارية تجمع المكاتب والمتاجر والخدمات في مساحة حضرية متصلة.",
      en: "A commercial destination bringing offices, retail, and services together in a connected urban space.",
      tr: "Ofisleri, mağazaları ve hizmetleri bağlantılı bir şehir alanında buluşturan ticari bir merkez.",
    },
    coverImage: "/images/projects/project-5.jpg",
    images: [
      "/images/projects/project-5.jpg",
      "/images/projects/urban-tower-01.webp",
      "/images/projects/project-2.jpg",
    ],
    category: "commercial",
    year: 2025,
  },
  {
    id: "6",
    slug: "heritage-restoration",
    title: {
      ar: "ترميم بيت التراث",
      en: "Heritage House Restoration",
      tr: "Tarihi Konak Restorasyonu",
    },
    location: {
      ar: "جدة، المملكة العربية السعودية",
      en: "Jeddah, Saudi Arabia",
      tr: "Cidde, Suudi Arabistan",
    },
    description: {
      ar: "مشروع ترميم يحافظ على الطابع المعماري الأصيل مع تحديث البنية والخدمات.",
      en: "A restoration project preserving original architectural character while upgrading structure and services.",
      tr: "Yapıyı ve hizmetleri yenilerken özgün mimari karakteri koruyan bir restorasyon projesi.",
    },
    coverImage: "/images/projects/project-6.jpg",
    images: [
      "/images/projects/project-6.jpg",
      "/images/projects/judi-villas-01.webp",
      "/images/projects/project-3.jpg",
    ],
    category: "construction",
    year: 2022,
  },
];
