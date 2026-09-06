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
  projects: { en: "Projects", ar: "المشاريع" },
  finance: { en: "Finance", ar: "التحليل المالي" },
  contact: { en: "Contact", ar: "تواصل" },
  language: { en: "العربية", ar: "English" },
  cta: { en: "Start a project", ar: "ابدأ مشروعاً" },
  menu: { en: "Main menu", ar: "القائمة الرئيسية" },
} satisfies Record<string, Copy>;

export const hero = {
  kicker: { en: "Brand Architect", ar: "مهندسو الهوية" },
  title: {
    en: "We do not yell to be seen.",
    ar: "لا نصرخ لجذب الانتباه.",
  },
  line: {
    en: "We position brands so the industry leans in — architecture first, prestige by design.",
    ar: "نُموضِع العلامات كي ينصت السوق باحترام. العمارة أولاً. والهيبة من التصميم.",
  },
  primary: { en: "Start a conversation", ar: "ابدأ الحوار" },
  secondary: { en: "Explore practices", ar: "استكشف الممارسات" },
};

export const about = {
  kicker: { en: "The house", ar: "البيت" },
  title: { en: "About us", ar: "من نحن" },
  body: {
    en: "Forget aesthetic fluff and sweet talk. We are not your typical agency; we are brand architects. We dissect your business, eliminate the clutter, and rebuild it into a powerhouse driven by hard numbers and defined by visual prestige. In an era of endless noise and generic content, we stand for Premium Minimalism and direct, human-centric marketing. We do not yell to be seen. We strategically position your brand so the industry leans in and listens.",
    ar: "نحن لسنا وكالة إعلانات أخرى تبيعك تصاميم جميلة ومنمّقة وكلاماً معسولاً. نحن مهندسو هوية تجارية. نأخذ عملك لنجرّده من العشوائية ونعيده إلى السوق كعلامة تجارية رائدة ذات هيبة بصرية مبنية على أرقام وحقائق صلبة لا تقبل الجدل. في عالم مليء بالضجيج والمحتوى المعلّب، نحن نؤمن بالفخامة البسيطة Premium Minimalism والتسويق الإنساني المباشر. لا نصرخ لجذب الانتباه، بل نصنع لعملائنا تموضعاً ذكياً يجعل السوق ينصت إليهم باحترام.",
  },
  highlight: { en: "Premium Minimalism", ar: "الفخامة البسيطة" },
  pillars: [
    {
      id: "architecture",
      title: { en: "Architecture first", ar: "العمارة أولاً" },
      body: {
        en: "Systems before decoration. Every mark, room, and campaign holds a single structure.",
        ar: "الأنظمة قبل الزخرفة. كل علامة وقاعة وحملة تحمل بنية واحدة.",
      },
    },
    {
      id: "prestige",
      title: { en: "Visual prestige", ar: "هيبة بصرية" },
      body: {
        en: "Quiet surfaces. Precise type. Presence that does not need to raise its voice.",
        ar: "أسطح هادئة. حروف دقيقة. حضور لا يحتاج إلى رفع الصوت.",
      },
    },
    {
      id: "human",
      title: { en: "Human marketing", ar: "تسويق إنساني" },
      body: {
        en: "Direct language. No canned noise. A conversation the market can respect.",
        ar: "لغة مباشرة. بلا ضجيج معلّب. حوار يحترمه السوق.",
      },
    },
  ],
};

export const philosophy = {
  kicker: { en: "How we think", ar: "كيف نفكّر" },
  title: { en: "Our philosophy", ar: "فلسفتنا" },
  pillars: [
    {
      id: "complex",
      label: { en: "Complexity", ar: "التعقيد" },
      title: { en: "Mastering the Complex", ar: "إتقان التعقيد" },
      body: {
        en: "We thrive where others struggle. From sophisticated cloud infrastructures to rigid engineering materials, we comprehend your deepest technical nuances. We distill this complexity into powerful, strategic messaging that drives investor confidence and consumer conversion.",
        ar: "سواء كان عملك نظاماً سحابياً معقّداً، أو تقنيات دقيقة، أو منتجات إنشائية وهندسية جافّة؛ نحن لا نعتبرها تحدياً لأننا ببساطة نفهم لغتك التقنية المعقّدة ونترجمها إلى رسائل تجارية ذكية يفهمها المستثمر ويشتريها المستهلك.",
      },
    },
    {
      id: "visual",
      label: { en: "Vision", ar: "الرؤية" },
      title: { en: "Visual Innovation 3D", ar: "ابتكار بصري ثلاثي الأبعاد" },
      body: {
        en: "We do not depend on existing reality; we construct the ideal one. Leveraging advanced tech and hyper-realistic 3D simulations, we deliver cinematic visual equity that positions your brand as a futuristic industry leader.",
        ar: "لا ننتظر الواقع لكي نُصوّر؛ نحن نصنع الواقع. ندمج أدوات الجيل القادم والمحاكاة ثلاثية الأبعاد فائقة الواقعية لإنتاج مواد بصرية سينمائية تضع علامتك التجارية في المستقبل قبل منافسيك.",
      },
    },
    {
      id: "precision",
      label: { en: "Precision", ar: "الدقة" },
      title: { en: "Precision Over Presumption", ar: "الدقة بدل التخمين" },
      body: {
        en: "We do not gamble on campaigns. We tear down industry standards, forensically analyze competitors, and root our positioning in undeniable facts. By identifying unexploited market gaps, we guarantee our clients distinct competitive and commercial supremacy.",
        ar: "لا نبني حملاتنا على التخمين، لأننا نفكّك معايير السوق ونحلّل المنافسين، ونعتمد على الحقائق الصلبة لنكشف الفجوات التسويقية لعملائنا ونمنحهم تفوّقاً فنياً وتجارياً واضحاً.",
      },
    },
  ],
};

export const services = {
  kicker: { en: "Practices", ar: "ممارساتنا" },
  title: { en: "Our services", ar: "خدماتنا" },
  lead: {
    en: "Fourteen practices. One architectural standard.",
    ar: "أربع عشرة ممارسة. معيار معماري واحد.",
  },
  items: [
    {
      id: "social",
      en: "Social Media",
      ar: "السوشل ميديا",
      tone: "orange" as const,
    },
    {
      id: "accounts",
      en: "Account Management",
      ar: "إدارة الحسابات",
      tone: "purple" as const,
    },
    {
      id: "marketing",
      en: "Marketing",
      ar: "التسويق",
      tone: "teal" as const,
    },
    {
      id: "ads",
      en: "Paid Ads",
      ar: "حملات ممولة",
      tone: "orange" as const,
    },
    {
      id: "exhibitions",
      en: "Exhibitions & Conferences",
      ar: "تنظيم المعارض والمؤتمرات",
      tone: "blue" as const,
    },
    {
      id: "events",
      en: "Event Management",
      ar: "إدارة الفعاليات",
      tone: "blue" as const,
    },
    {
      id: "booths",
      en: "Booth Design",
      ar: "تصميم البوثات",
      tone: "peach" as const,
    },
    {
      id: "identity",
      en: "Visual Identities",
      ar: "الهويات البصرية",
      tone: "blue" as const,
    },
    {
      id: "film",
      en: "Filming & Editing",
      ar: "تصوير ومونتاج",
      tone: "orange" as const,
    },
    {
      id: "gifts",
      en: "Promo Gifts",
      ar: "الهدايا الدعائية",
      tone: "orange" as const,
    },
    {
      id: "outdoor",
      en: "Roadside Ads",
      ar: "إعلانات طرقية",
      tone: "blue" as const,
    },
    {
      id: "web",
      en: "Websites & Ecommerce",
      ar: "المواقع والمتاجر الإلكترونية",
      tone: "teal" as const,
    },
    {
      id: "apps",
      en: "App Design",
      ar: "تصميم التطبيقات",
      tone: "orange" as const,
    },
    {
      id: "finance",
      en: "Financial Analysis",
      ar: "التحليل المالي",
      tone: "purple" as const,
    },
  ],
};

export const projects = {
  kicker: { en: "Selected work", ar: "أعمال مختارة" },
  title: { en: "Projects", ar: "المشاريع" },
  lead: {
    en: "Spatial, visual, and digital systems built to hold a room — not just a slide.",
    ar: "أنظمة مكانية وبصرية ورقمية تُبنى لتملأ القاعة، لا الشريحة فقط.",
  },
  items: [
    {
      id: "events",
      label: { en: "Live", ar: "الحدث" },
      title: { en: "Event management", ar: "إدارة الفعاليات" },
      body: {
        en: "Stages, halls, and conferences at architectural scale — brand systems that hold a room.",
        ar: "قاعات ومؤتمرات بمقياس معماري: أنظمة هوية تملأ القاعة.",
      },
    },
    {
      id: "booths",
      label: { en: "Space", ar: "المكان" },
      title: { en: "Exhibition booths", ar: "بوثات المعارض" },
      body: {
        en: "Spatial identities for trade floors — geometry, light, and prestige in three dimensions.",
        ar: "هويات مكانية لأرض المعارض: هندسة وضوء وهيبة في ثلاثة أبعاد.",
      },
    },
    {
      id: "identity",
      label: { en: "Mark", ar: "العلامة" },
      title: { en: "Visual identity", ar: "الهوية البصرية" },
      body: {
        en: "Marks for IZORA, Faiz Wahba, Enginety, Smart Vision, Future Lin, and Riva.",
        ar: "علامات لـ IZORA وفايز وهبة وإنجنيتي وسمارت فيجن وفيوتشر لن وريفا.",
      },
    },
    {
      id: "editorial",
      label: { en: "Paper", ar: "الورق" },
      title: { en: "Profiles & print", ar: "الملفات والمطبوعات" },
      body: {
        en: "Bilingual editorial systems, cards, and collateral — grid and tactility instead of brochure clutter.",
        ar: "أنظمة تحريرية ثنائية اللغة وبطاقات ومطبوعات: شبكة وملمس بدل فوضى الكتيّبات.",
      },
    },
    {
      id: "media",
      label: { en: "Motion", ar: "الحركة" },
      title: { en: "Social, film & outdoor", ar: "السوشل والتصوير والطرق" },
      body: {
        en: "Disciplined grids, cinematic motion, and one-line roadside prestige — proof, not stock.",
        ar: "شبكات منضبطة وتحريك سينمائي وهيبة بطريقية: برهان لا صور جاهزة.",
      },
    },
    {
      id: "digital",
      label: { en: "Click", ar: "الرقمي" },
      title: { en: "Web & applications", ar: "المواقع والتطبيقات" },
      body: {
        en: "Sites, stores, and identity applications with the same editorial discipline as the mark.",
        ar: "مواقع ومتاجر وتطبيقات للهوية بنفس انضباط العلامة.",
      },
    },
  ],
};

export const finance = {
  kicker: { en: "Intelligence", ar: "الاستخبارات" },
  title: { en: "Financial analysis", ar: "التحليل المالي" },
  heading: {
    en: "Smart solutions for strategic and financial decision-making",
    ar: "حلولنا الذكية لدعم القرارات الاستراتيجية والمالية",
  },
  body: {
    en: "We are your strategic partner in transforming complex data into smart visual insights that drive your financial and investment decisions. Our primary focus is on data engineering, analysis, and designing interactive dashboards (Excel & Power BI) that turn raw numbers into clear key performance indicators to monitor profits and liquidity. Our services also encompass remote financial management, bookkeeping, and preparing certified balance sheets to ensure comprehensive financial control for your business.",
    ar: "نحن شريككم الاستراتيجي في تحويل البيانات المعقّدة إلى رؤى بصرية ذكية تدعم قراراتكم الاستثمارية والمالية، ونركّز بشكل أساسي على هندسة وتحليل البيانات، وتصميم لوحات المعلومات التفاعلية (Excel & Power BI) التي تحوّل الأرقام إلى مؤشرات أداء واضحة لرصد الأرباح والسيولة. كما تشمل خدماتنا أيضاً إدارة الشؤون المالية عن بُعد، ومسك الدفاتر، وإعداد الميزانيات العمومية المعتمدة لضمان رقابة مالية متكاملة لأعمالكم.",
  },
  offerings: [
    {
      id: "data",
      title: { en: "Data engineering", ar: "هندسة البيانات" },
      body: {
        en: "We structure raw financial records so the story of profit and liquidity is readable.",
        ar: "نُهندس السجلات المالية الخام كي تكون قصة الربح والسيولة مقروءة.",
      },
    },
    {
      id: "dashboards",
      title: { en: "Excel & Power BI", ar: "إكسل وباور بي آي" },
      body: {
        en: "Interactive dashboards that turn figures into clear performance indicators.",
        ar: "لوحات تفاعلية تحوّل الأرقام إلى مؤشرات أداء واضحة.",
      },
    },
    {
      id: "control",
      title: { en: "Remote control", ar: "رقابة عن بُعد" },
      body: {
        en: "Bookkeeping, certified balance sheets, and remote financial management.",
        ar: "مسك دفاتر وميزانيات معتمدة وإدارة مالية عن بُعد.",
      },
    },
  ],
};

export const contact = {
  kicker: { en: "Begin", ar: "ابدأ" },
  title: { en: "Contact us", ar: "تواصل معنا" },
  region: { en: "Syria — Saudi Arabia", ar: "سوريا — السعودية" },
  lead: {
    en: "Tell us what you are building. We will reply with a precise next step.",
    ar: "أخبرنا بما تبنونه. نرد بخطوة تالية دقيقة.",
  },
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
  form: {
    name: { en: "Name", ar: "الاسم" },
    email: { en: "Email", ar: "البريد الإلكتروني" },
    phone: { en: "Phone", ar: "الهاتف" },
    interest: { en: "Interest", ar: "الاهتمام" },
    interestPlaceholder: { en: "Choose a practice", ar: "اختر ممارسة" },
    message: { en: "Message", ar: "الرسالة" },
    submit: { en: "Send via WhatsApp", ar: "إرسال عبر واتساب" },
    sending: { en: "Opening WhatsApp…", ar: "جارٍ فتح واتساب…" },
    success: {
      en: "WhatsApp is ready with your message. Send it to start the conversation.",
      ar: "واتساب جاهز برسالتك. أرسلها لتبدأ الحوار.",
    },
    error: {
      en: "Please complete the required fields before sending.",
      ar: "أكمل الحقول المطلوبة قبل الإرسال.",
    },
    whatsappTemplate: {
      en: "Hello Home of Creativity, my name is {{name}}. Email: {{email}}. Phone: {{phone}}. Interest: {{interest}}.\n\n{{message}}",
      ar: "مرحباً هوم أوف كريتيفيتي، أنا {{name}}. البريد: {{email}}. الهاتف: {{phone}}. الاهتمام: {{interest}}.\n\n{{message}}",
    },
  },
};

export const footer = {
  rights: {
    en: "Home of Creativity — Creativation Source",
    ar: "هوم أوف كريتيفيتي — كريتيفيشن سورس",
  },
};

export const WHATSAPP_NUMBER = "963968862822";
