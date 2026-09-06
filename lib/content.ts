import type { Copy } from "./i18n";

export const brand = {
  name: "Home of Creativity",
  of: "of",
  secondary: "Creativation Source",
  mark: "S",
};

export const nav = {
  about: { en: "About", ar: "من نحن" },
  philosophy: { en: "Philosophy", ar: "فلسفتنا" },
  services: { en: "Services", ar: "خدماتنا" },
  work: { en: "Work", ar: "أعمالنا" },
  contact: { en: "Contact", ar: "تواصل" },
  language: { en: "العربية", ar: "English" },
} satisfies Record<string, Copy>;

export const hero = {
  kicker: { en: "Brand Architect", ar: "مهندسو الهوية" },
  line: {
    en: "We do not yell to be seen. We position brands so the industry leans in.",
    ar: "لا نصرخ لجذب الانتباه. نُموضِع العلامات كي ينصت السوق باحترام.",
  },
  scroll: { en: "Scroll the profile", ar: "تصفّح الملف" },
};

export const welcome = {
  script: { en: "Welcome", ar: "أهلاً" },
  name: { en: "creativation source", ar: "كريتيفيشن سورس" },
  body: {
    en: "A creative-tech partner for brands that refuse generic noise. Architecture first. Prestige by design.",
    ar: "شريك إبداعي تقني للعلامات التي ترفض الضجيج المعلب. العمارة أولاً. والهيبة من التصميم.",
  },
};

export const about = {
  index: "03",
  title: { en: "About Us", ar: "من نحن" },
  body: {
    en: "Forget aesthetic fluff and sweet talk. We are not your typical agency; we are brand architects. We dissect your business, eliminate the clutter, and rebuild it into a powerhouse driven by hard numbers and defined by visual prestige. In an era of endless noise and generic content, we stand for Premium Minimalism and direct, human-centric marketing. We do not yell to be seen. We strategically position your brand so the industry leans in and listens.",
    ar: "نحن لسنا وكالة إعلانات أخرى تبيعك تصاميم جميلة ومنمّقة وكلاماً معسولاً. نحن مهندسو هوية تجارية. نأخذ عملك لنجرّده من العشوائية ونعيده إلى السوق كعلامة تجارية رائدة ذات هيبة بصرية مبنية على أرقام وحقائق صلبة لا تقبل الجدل. في عالم مليء بالضجيج والمحتوى المعلّب، نحن نؤمن بالفخامة البسيطة Premium Minimalism والتسويق الإنساني المباشر. لا نصرخ لجذب الانتباه، بل نصنع لعملائنا تموضعاً ذكياً يجعل السوق ينصت إليهم باحترام.",
  },
  highlight: { en: "Premium Minimalism", ar: "الفخامة البسيطة" },
};

export const philosophy = {
  index: "04",
  title: { en: "Our Philosophy", ar: "فلسفتنا" },
  pillars: [
    {
      id: "complex",
      title: { en: "Mastering the Complex", ar: "إتقان التعقيد" },
      body: {
        en: "We thrive where others struggle. From sophisticated cloud infrastructures to rigid engineering materials, we comprehend your deepest technical nuances. We distill this complexity into powerful, strategic messaging that drives investor confidence and consumer conversion.",
        ar: "سواء كان عملك نظاماً سحابياً معقّداً، أو تقنيات دقيقة، أو منتجات إنشائية وهندسية جافّة؛ نحن لا نعتبرها تحدياً لأننا ببساطة نفهم لغتك التقنية المعقّدة ونترجمها إلى رسائل تجارية ذكية يفهمها المستثمر ويشتريها المستهلك.",
      },
    },
    {
      id: "visual",
      title: { en: "Visual Innovation 3D", ar: "ابتكار بصري ثلاثي الأبعاد" },
      body: {
        en: "We do not depend on existing reality; we construct the ideal one. Leveraging advanced tech and hyper-realistic 3D simulations, we deliver cinematic visual equity that positions your brand as a futuristic industry leader.",
        ar: "لا ننتظر الواقع لكي نُصوّر؛ نحن نصنع الواقع. ندمج أدوات الجيل القادم والمحاكاة ثلاثية الأبعاد فائقة الواقعية لإنتاج مواد بصرية سينمائية تضع علامتك التجارية في المستقبل قبل منافسيك.",
      },
    },
    {
      id: "precision",
      title: { en: "Precision Over Presumption", ar: "الدقة بدل التخمين" },
      body: {
        en: "We do not gamble on campaigns. We tear down industry standards, forensically analyze competitors, and root our positioning in undeniable facts. By identifying unexploited market gaps, we guarantee our clients distinct competitive and commercial supremacy.",
        ar: "لا نبني حملاتنا على التخمين، لأننا نفكّك معايير السوق ونحلّل المنافسين، ونعتمد على الحقائق الصلبة لنكشف الفجوات التسويقية لعملائنا ونمنحهم تفوّقاً فنياً وتجارياً واضحاً.",
      },
    },
  ],
};

export const services = {
  index: "05",
  title: { en: "Our Services", ar: "خدماتنا" },
  lead: {
    en: "Fourteen practices. One architectural standard.",
    ar: "أربع عشرة ممارسة. معيار معماري واحد.",
  },
  items: [
    {
      id: "social",
      href: "#social",
      en: "Social Media",
      ar: "السوشل ميديا",
      tone: "orange" as const,
    },
    {
      id: "accounts",
      href: "#social",
      en: "Account Management",
      ar: "إدارة الحسابات",
      tone: "purple" as const,
    },
    {
      id: "marketing",
      href: "#ads",
      en: "Marketing",
      ar: "التسويق",
      tone: "teal" as const,
    },
    {
      id: "ads",
      href: "#ads",
      en: "Paid Ads",
      ar: "حملات ممولة",
      tone: "orange" as const,
    },
    {
      id: "exhibitions",
      href: "#booths",
      en: "Exhibitions & Conferences",
      ar: "تنظيم المعارض والمؤتمرات",
      tone: "blue" as const,
    },
    {
      id: "events",
      href: "#events",
      en: "Event Management",
      ar: "إدارة الفعاليات",
      tone: "blue" as const,
    },
    {
      id: "booths",
      href: "#booths",
      en: "Booth Design",
      ar: "تصميم البوثات",
      tone: "peach" as const,
    },
    {
      id: "identity",
      href: "#identity",
      en: "Visual Identities",
      ar: "الهويات البصرية",
      tone: "blue" as const,
    },
    {
      id: "film",
      href: "#photography",
      en: "Filming & Editing",
      ar: "تصوير ومونتاج",
      tone: "orange" as const,
    },
    {
      id: "gifts",
      href: "#gifts",
      en: "Promo Gifts",
      ar: "الهدايا الدعائية",
      tone: "orange" as const,
    },
    {
      id: "outdoor",
      href: "#outdoor",
      en: "Roadside Ads",
      ar: "إعلانات طرقية",
      tone: "blue" as const,
    },
    {
      id: "web",
      href: "#web",
      en: "Websites & Ecommerce",
      ar: "المواقع والمتاجر الإلكترونية",
      tone: "teal" as const,
    },
    {
      id: "apps",
      href: "#web",
      en: "App Design",
      ar: "تصميم التطبيقات",
      tone: "orange" as const,
    },
    {
      id: "finance",
      href: "#finance",
      en: "Financial Analysis",
      ar: "التحليل المالي",
      tone: "purple" as const,
    },
  ],
};

export const work = {
  events: {
    index: "06",
    title: { en: "Event Management", ar: "إدارة الفعاليات" },
    arabicStack: { top: "تنظيم", mid: "Event Management", bottom: "المعارض والمؤتمرات" },
    body: {
      en: "Stages, halls, and conferences built at architectural scale — brand systems that hold a room, not just a slide.",
      ar: "قاعات ومؤتمرات بمقياس معماري: أنظمة هوية تملأ القاعة، لا الشريحة فقط.",
    },
  },
  booths: {
    index: "07",
    title: { en: "Exhibition Booth Design", ar: "تصميم بوثات المعارض" },
    body: {
      en: "Spatial identities for trade floors — geometry, light, and prestige in three dimensions.",
      ar: "هويات مكانية لأرض المعارض: هندسة وضوء وهيبة في ثلاثة أبعاد.",
    },
  },
  identity: {
    index: "08",
    title: { en: "Visual Identity", ar: "الهوية البصرية" },
    logos: { en: "Logos", ar: "الشعارات" },
    body: {
      en: "Marks for IZORA, Faiz Wahba, Enginety, Smart Vision, Future Lin, Riva, and houses that needed a voice with weight.",
      ar: "علامات لـ IZORA وفايز وهبة وإنجنيتي وسمارت فيجن وفيوتشر لن وريفا، ولبيوت احتاجت صوتاً بوزن.",
    },
  },
  profile: {
    index: "09",
    title: { en: "Company Profile Design", ar: "تصميم الملف التعريفي" },
    body: {
      en: "Editorial systems for bilingual profiles — grid, paper, and prestige instead of brochure clutter.",
      ar: "أنظمة تحريرية للملفات ثنائية اللغة: شبكة وورق وهيبة بدل فوضى الكتيّبات.",
    },
  },
  print: {
    index: "10",
    title: { en: "Business Cards & Print", ar: "بطاقات العمل والمطبوعات" },
    body: {
      en: "Cards, menus, and collateral that survive the hand-off — tactility as brand architecture.",
      ar: "بطاقات وقوائم ومطبوعات تصمد في اليد: الملمس كعمارة للعلامة.",
    },
  },
  applications: {
    index: "11",
    title: { en: "Identity Applications", ar: "تطبيق الهوية البصرية" },
    body: {
      en: "Uniforms, merch, and gifts that carry the system off the page and into the room.",
      ar: "أزياء ومنتجات وهدايا تنقل النظام من الصفحة إلى المكان.",
    },
  },
  packaging: {
    index: "12",
    title: { en: "Packaging", ar: "تصميم التغليف" },
    body: {
      en: "Structures and skins for products that need to be held, stacked, and remembered.",
      ar: "هياكل وأسطح لمنتجات تُمسك وتُرصّ وتُتذكّر.",
    },
  },
  social: {
    index: "13",
    title: { en: "Social Media", ar: "السوشل ميديا" },
    posts: { en: "Posts", ar: "المنشورات" },
    body: {
      en: "From MASA travel systems to Faiz Wahba architecture — grids with discipline, not filler.",
      ar: "من أنظمة ماسا للسفر إلى عمارة فايز وهبة: شبكات بانضباط، لا حشواً.",
    },
  },
  motion: {
    index: "14",
    title: { en: "Motion", ar: "التحريك" },
    body: {
      en: "Cinematic motion that extends the identity in time — restrained, precise, unforgettable.",
      ar: "تحريك سينمائي يمدّ الهوية في الزمن: منضبط، دقيق، لا يُنسى.",
    },
  },
  photography: {
    index: "15",
    title: { en: "Photography & Editing", ar: "التصوير والمونتاج" },
    body: {
      en: "Image-making and montage for brands that need proof, not stock.",
      ar: "صناعة صورة ومونتاج للعلامات التي تحتاج برهاناً لا صوراً جاهزة.",
    },
  },
  ads: {
    index: "16",
    title: { en: "Paid Advertising", ar: "حملات إعلانية ممولة" },
    platforms: {
      en: "Meta · Instagram · TikTok · Google",
      ar: "ميتا · إنستغرام · تيك توك · غوغل",
    },
    body: {
      en: "High-view social systems rooted in numbers — placement with intent, not volume for its own sake.",
      ar: "أنظمة إعلان عالية المشاهدة مبنية على الأرقام: تموضع بقصد، لا حجماً لأجل الحجم.",
    },
  },
  gifts: {
    index: "17",
    title: { en: "Promotional Gifts", ar: "الهدايا الدعائية" },
    body: {
      en: "Objects that keep the mark in the hand long after the meeting ends.",
      ar: "قطع تُبقي العلامة في اليد بعد انتهاء اللقاء.",
    },
  },
  outdoor: {
    index: "18",
    title: { en: "Outdoor Advertising", ar: "إعلانات طرقية" },
    stack: { top: "إعلانات", mid: "Roadside advertisements", bottom: "طرقية" },
    body: {
      en: "One image. One line. Prestige at roadside scale.",
      ar: "صورة واحدة. جملة واحدة. هيبة بمقياس الطريق.",
    },
  },
  web: {
    index: "19",
    title: { en: "Websites & Ecommerce", ar: "المواقع والمتاجر الإلكترونية" },
    body: {
      en: "Sites and stores with the same editorial discipline as the identity — architecture you can click.",
      ar: "مواقع ومتاجر بنفس انضباط الهوية: عمارة يمكن النقر عليها.",
    },
  },
  finance: {
    index: "20",
    title: { en: "Financial Analysis", ar: "التحليل المالي" },
    heading: {
      en: "Smart solutions for strategic & financial decision-making",
      ar: "حلولنا الذكية لدعم القرارات الاستراتيجية والمالية",
    },
    body: {
      en: "We are your strategic partner in transforming complex data into smart visual insights that drive your financial and investment decisions. Our primary focus is on data engineering, analysis, and designing interactive dashboards (Excel & Power BI) that turn raw numbers into clear key performance indicators (KPIs) to monitor profits and liquidity. Our services also encompass remote financial management, bookkeeping, and preparing certified balance sheets to ensure comprehensive financial control for your business.",
      ar: "رؤية ذكية لبياناتكم وقرارات سديدة لأعمالكم. نحن شريككم الاستراتيجي في تحويل البيانات المعقّدة إلى رؤى بصرية ذكية تدعم قراراتكم الاستثمارية والمالية، ونركّز بشكل أساسي على هندسة وتحليل البيانات، وتصميم لوحات المعلومات التفاعلية (Excel & Power BI) التي تحوّل الأرقام إلى مؤشرات أداء واضحة لرصد الأرباح والسيولة. كما تشمل خدماتنا أيضاً إدارة الشؤون المالية عن بُعد، ومسك الدفاتر، وإعداد الميزانيات العمومية المعتمدة لضمان رقابة مالية متكاملة لأعمالكم.",
    },
  },
};

export const contact = {
  index: "21",
  title: { en: "Contact us", ar: "تواصل معنا" },
  region: { en: "SYR — KSA", ar: "سوريا — السعودية" },
  offices: [
    {
      id: "syr",
      country: { en: "Syria", ar: "سوريا" },
      city: { en: "Damascus, Al Hamra", ar: "دمشق، الحمراء" },
      phones: ["+963 968 862 822", "+963 954 187 154", "+963 11 323 6255"],
    },
    {
      id: "ksa",
      country: { en: "Saudi Arabia", ar: "المملكة العربية السعودية" },
      city: { en: "Riyadh, Al Murabaa", ar: "الرياض، المربّع" },
      phones: ["+966 55 035 0295", "+966 11 422 2528"],
    },
  ],
};

export const thanks = {
  index: "22",
  script: { en: "Thank You", ar: "شكراً لكم" },
  line: {
    en: "The industry leans in when the work is this quiet.",
    ar: "ينصت السوق حين يكون العمل بهذا الهدوء.",
  },
};

export const footer = {
  rights: {
    en: "Home of Creativity — Creativation Source",
    ar: "هوم أوف كريتيفيتي — كريتيفيشن سورس",
  },
};
