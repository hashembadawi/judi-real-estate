export type ServiceLocale = "ar" | "en" | "tr";
export type ServiceIconName =
  | "Building2"
  | "HardHat"
  | "Ruler"
  | "ClipboardCheck"
  | "Paintbrush"
  | "Briefcase";

export type Service = {
  id: string;
  title: Record<ServiceLocale, string>;
  description: Record<ServiceLocale, string>;
  iconName: ServiceIconName;
};

export const services: Service[] = [
  {
    id: "real-estate-development",
    title: {
      ar: "التطوير العقاري",
      en: "Real Estate Development",
      tr: "Gayrimenkul Geliştirme",
    },
    description: {
      ar: "نطوّر مشاريع عقارية مدروسة من الفكرة واختيار الموقع إلى التنفيذ، مع التركيز على الجودة والقيمة المستدامة.",
      en: "We develop considered real estate projects from concept and site selection through delivery, with a focus on quality and lasting value.",
      tr: "Kalite ve kalıcı değer odağıyla fikir ve konum seçiminden teslim aşamasına kadar kapsamlı gayrimenkul projeleri geliştiriyoruz.",
    },
    iconName: "Building2",
  },
  {
    id: "general-contracting",
    title: {
      ar: "المقاولات العامة والإنشاءات",
      en: "General Contracting",
      tr: "Genel Müteahhitlik",
    },
    description: {
      ar: "تنفيذ أعمال البناء والإنشاء وفق المخططات والمواصفات المعتمدة وبإشراف يضمن جودة العمل.",
      en: "We deliver building and construction work to approved plans and specifications, with oversight that ensures quality.",
      tr: "Onaylı plan ve şartnamelere uygun inşaat işleri gerçekleştiriyor, kaliteyi güvence altına alan denetim sağlıyoruz.",
    },
    iconName: "HardHat",
  },
  {
    id: "architectural-design",
    title: {
      ar: "التصميم الهندسي والمعماري",
      en: "Architectural Design",
      tr: "Mimari Tasarım",
    },
    description: {
      ar: "تصاميم تجمع بين الجمال والوظيفة، وتستجيب لاحتياجات المشروع ومتطلبات الموقع.",
      en: "Designs that balance beauty and function while responding to project needs and site requirements.",
      tr: "Estetik ve işlevselliği dengeleyen, proje ihtiyaçlarına ve saha koşullarına yanıt veren tasarımlar.",
    },
    iconName: "Ruler",
  },
  {
    id: "project-management",
    title: {
      ar: "إدارة المشاريع والإشراف",
      en: "Project Management",
      tr: "Proje Yönetimi",
    },
    description: {
      ar: "تنسيق مراحل المشروع ومتابعة الجودة والوقت والتكلفة لتحقيق أهداف التنفيذ.",
      en: "We coordinate project stages and monitor quality, schedule, and cost to achieve delivery goals.",
      tr: "Teslim hedeflerine ulaşmak için proje aşamalarını koordine ediyor, kaliteyi, takvimi ve maliyeti izliyoruz.",
    },
    iconName: "ClipboardCheck",
  },
  {
    id: "finishing-decor",
    title: {
      ar: "التشطيبات والديكور",
      en: "Finishing & Decor",
      tr: "İnce İşler ve Dekorasyon",
    },
    description: {
      ar: "تنفيذ التشطيبات الداخلية واللمسات النهائية بعناية لتقديم مساحات متناسقة وجاهزة للاستخدام.",
      en: "Carefully delivered interior finishes and final details create cohesive spaces ready to use.",
      tr: "Özenle uygulanan iç mekân işleri ve son dokunuşlar, kullanıma hazır ve uyumlu alanlar oluşturur.",
    },
    iconName: "Paintbrush",
  },
  {
    id: "real-estate-consulting",
    title: {
      ar: "الاستشارات العقارية",
      en: "Real Estate Consulting",
      tr: "Gayrimenkul Danışmanlığı",
    },
    description: {
      ar: "رؤى وتوصيات عملية تساعد على تقييم الفرص العقارية واتخاذ قرارات مدروسة.",
      en: "Practical insights and recommendations help evaluate real estate opportunities and make informed decisions.",
      tr: "Gayrimenkul fırsatlarını değerlendirmek ve bilinçli kararlar almak için pratik görüş ve öneriler sunuyoruz.",
    },
    iconName: "Briefcase",
  },
];
