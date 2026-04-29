export type Locale = "uk" | "en";

export const locales: Locale[] = ["uk", "en"];
export const defaultLocale: Locale = "uk";

export const altLocale = (l: Locale): Locale => (l === "uk" ? "en" : "uk");

export const langAttr = (l: Locale): string => (l === "uk" ? "uk" : "en");

type Track = {
  slug: "professionals" | "students" | "educators" | "family";
  title: string;
  oneLiner: string;
  forWhom: string;
  about: string;
  inside: string;
};

type Principle = { title: string; body: string };

type Site = {
  brand: string;
  tagline: string;
  email: string;
  telegram: string;
  telegramUrl: string;
  substack: string;
  substackUrl: string;
  ngoName: string;
  ngoCode: string;
};

export const site: Site = {
  brand: "NextEducationAI",
  tagline: "AI for learners who choose it.",
  email: "info@nexteducationai.org",
  telegram: "@nextedubot",
  telegramUrl: "https://t.me/nextedubot",
  substack: "nexteducationai.substack.com",
  substackUrl: "https://nexteducationai.substack.com",
  ngoName: "Демократична інформаційна ініціатива",
  ngoCode: "39745790",
};

type Nav = { href: string; label: string }[];

export const homeHref = (l: Locale): string => (l === "uk" ? "/" : "/en/");

export const nav = (l: Locale): Nav => {
  const base = l === "uk" ? "" : "/en";
  if (l === "uk") {
    return [
      { href: `${base}/principles/`, label: "Принципи" },
      { href: `${base}/tracks/professionals/`, label: "Треки" },
      { href: `${base}/skillboost/`, label: "SkillBoost" },
      { href: `${base}/about/`, label: "Про нас" },
    ];
  }
  return [
    { href: `${base}/principles/`, label: "Principles" },
    { href: `${base}/tracks/professionals/`, label: "Tracks" },
    { href: `${base}/skillboost/`, label: "SkillBoost" },
    { href: `${base}/about/`, label: "About" },
  ];
};

export const trackHref = (l: Locale, slug: string): string =>
  l === "uk" ? `/tracks/${slug}/` : `/en/tracks/${slug}/`;

export const principlesHref = (l: Locale): string =>
  l === "uk" ? "/principles/" : "/en/principles/";

export const skillboostHref = (l: Locale): string =>
  l === "uk" ? "/skillboost/" : "/en/skillboost/";

export const aboutHref = (l: Locale): string =>
  l === "uk" ? "/about/" : "/en/about/";

export const tracksList = (l: Locale): Track[] => {
  if (l === "uk") {
    return [
      {
        slug: "professionals",
        title: "Професіонали",
        oneLiner:
          "AI у щоденній роботі без втрати якості, репутації та приватності клієнтів.",
        forWhom:
          "Журналісти, юристи, маркетологи, держслужбовці, медики, дослідники.",
        about:
          "Як використовувати AI у щоденній роботі без втрати якості, репутації та приватності клієнтів. Що робити можна, а що не варто. Як перевіряти результат.",
        inside:
          "Мікро-уроки в @nextedubot. Статті на Substack. Добірки інструментів з оцінкою приватності та зрілості політики даних.",
      },
      {
        slug: "students",
        title: "Студенти ЗВО",
        oneLiner:
          "Академічне письмо, дослідницький AI, етика — без атрофії власних навичок.",
        forWhom: "Студенти університетів, аспіранти, докторанти.",
        about:
          "Академічне письмо, дослідницький AI, етика використання, як не втратити власні навички, поки навколо всі переходять на чат-боти.",
        inside:
          "Гайди з prompt-craft для академічних задач. Чек-листи «що можна / що не можна» від різних ЗВО. Приклади провалів і скандалів.",
      },
      {
        slug: "educators",
        title: "Викладачі",
        oneLiner:
          "Інтегрувати AI у свої курси і ставити завдання, які не зламає чат-бот.",
        forWhom: "Викладачі університетів, тренери, автори онлайн-курсів.",
        about:
          "Як інтегрувати AI у власні курси, як виявляти «AI-домашку», як ставити завдання, які не зламає чат-бот, як говорити зі студентами про чесність.",
        inside:
          "Методичні матеріали. Шаблони рубрик оцінювання. Спільнота для обговорення кейсів.",
      },
      {
        slug: "family",
        title: "Сімʼя",
        oneLiner:
          "Як свідомо вирішити, як AI входить у життя дитини. І як говорити зі школою.",
        forWhom:
          "Батьки, які хочуть свідомо вирішити, як AI входить у життя їхньої дитини.",
        about:
          "Як говорити зі школою про tech, які питання ставити вчителям, як облаштувати домашнє навчання без екранної пастки.",
        inside:
          "Гайд «20 запитань до школи про технології». Добірка фільмів і книжок. Поради щодо вікових обмежень.",
      },
    ];
  }
  return [
    {
      slug: "professionals",
      title: "Professionals",
      oneLiner:
        "AI in daily work without compromising quality, reputation, or client privacy.",
      forWhom:
        "Journalists, lawyers, marketers, civil servants, doctors, researchers.",
      about:
        "How to use AI in daily work without compromising quality, reputation, or client privacy. What you can do, what you shouldnʼt, and how to verify the result.",
      inside:
        "Micro-lessons in @nextedubot. Substack essays. Vetted tool lists with privacy ratings and data-policy maturity scores.",
    },
    {
      slug: "students",
      title: "University Students",
      oneLiner:
        "Academic writing, research-grade AI, and ethics — without atrophying your own skills.",
      forWhom: "University students, masterʼs, PhD candidates.",
      about:
        "Academic writing, research-grade AI, ethics of use, and how not to atrophy your own skills while everyone around switches to chatbots.",
      inside:
        "Prompt-craft guides for academic work. Allowed/not-allowed checklists from various universities. Case studies of failure.",
    },
    {
      slug: "educators",
      title: "Educators",
      oneLiner:
        "Integrate AI into your own courses and design assignments a chatbot canʼt shortcut.",
      forWhom: "University lecturers, trainers, online-course creators.",
      about:
        "How to integrate AI into your own courses, how to detect AI-written homework, how to design assignments a chatbot canʼt shortcut, how to talk to students about honesty.",
      inside:
        "Teaching materials. Grading rubric templates. A peer community to discuss cases.",
    },
    {
      slug: "family",
      title: "Family",
      oneLiner:
        "Decide consciously how AI enters your childʼs life. And how to talk to the school.",
      forWhom:
        "Parents who want to decide consciously how AI enters their childʼs life.",
      about:
        "How to talk to schools about tech, what to ask teachers, how to design home learning without screen traps.",
      inside:
        "Guide «20 questions to ask your school about technology». Curated films and books. Age-appropriateness advice.",
    },
  ];
};

export const principles = (l: Locale): Principle[] => {
  if (l === "uk") {
    return [
      {
        title: "Вік має значення.",
        body:
          "AI-інструменти — для тих, хто вже вміє ставити питання й сумніватися у відповідях. Ми не пропонуємо їх дітям молодшого віку та маємо окремий розділ «що НЕ варто автоматизувати».",
      },
      {
        title: "Доказова ефективність.",
        body:
          "Якщо інструмент не має оцінки реальної освітньої користі — ми не радимо його. Маркетинговий buzz і скріншоти «Made with AI» — не доказ.",
      },
      {
        title: "Без гачків залежності.",
        body:
          "Жодних балів за хвилини, жодних streakʼів, жодних «продовжуй грати». Внутрішня мотивація — найцінніший ресурс учня. Ми її не «хакаємо».",
      },
      {
        title: "Прозоре навчання, як перевіряти.",
        body:
          "AI помиляється, галюцинує і копіює зміщення. Ми вчимо це бачити, а не довіряти за замовчуванням.",
      },
      {
        title: "Приватність за замовчуванням.",
        body:
          "Жодного Google Analytics. Жодних трекерів. Жодних cookies-банерів — бо немає cookies. Інструменти, які ми радимо, мають зрозумілу політику даних.",
      },
    ];
  }
  return [
    {
      title: "Age matters.",
      body:
        "AI tools are for people who already know how to ask questions and doubt the answers. We donʼt push them on young children, and we keep a clear list of things AI shouldnʼt automate at all.",
    },
    {
      title: "Evidence over hype.",
      body:
        "If a tool has no honest evaluation of real educational value, we donʼt recommend it. Marketing buzz and «Made with AI» screenshots arenʼt proof.",
    },
    {
      title: "No engagement traps.",
      body:
        "No points-per-minute, no streaks, no «keep playing». A learnerʼs intrinsic motivation is the most valuable thing in the room. We donʼt hack it.",
    },
    {
      title: "Transparent on how to verify.",
      body:
        "AI gets things wrong, hallucinates, and inherits bias. We teach you to see that — not to trust by default.",
    },
    {
      title: "Privacy by default.",
      body:
        "No Google Analytics. No trackers. No cookie banners — because there are no cookies. The tools we recommend have data policies you can read.",
    },
  ];
};

type CopyShape = {
  brandSubline: string;
  navAria: string;
  langSwitchTo: string;
  langSwitchAria: string;
  heroHeadline: string;
  heroSub: string;
  heroCtaPrimary: string;
  heroCtaSecondary: string;
  homeTracksTitle: string;
  homeTracksLead: string;
  homePrinciplesTeaserTitle: string;
  homePrinciplesTeaserBody: string;
  homePrinciplesTeaserCta: string;
  principlesIntroTitle: string;
  principlesIntroBody: string;
  skillboostTitle: string;
  skillboostBody: string;
  skillboostCta: string;
  aboutTitle: string;
  aboutBody: string;
  aboutHostedBy: string;
  forWhomLabel: string;
  aboutLabel: string;
  insideLabel: string;
  exploreTrackCta: string;
  footerTagline: string;
  footerNoTrackers: string;
  metaTitle: string;
  metaDescription: string;
};

export const copy = (l: Locale): CopyShape => {
  if (l === "uk") {
    return {
      brandSubline: "Освітня ініціатива",
      navAria: "Головна навігація",
      langSwitchTo: "EN",
      langSwitchAria: "Перемкнути мову на англійську",
      heroHeadline: "AI для тих, хто сам обрав вчитися.",
      heroSub:
        "Ми робимо інструменти штучного інтелекту корисними для дорослих, студентів, викладачів і всіх, хто хоче вчитися свідомо. Без хайпу. Без геймифікації заради залежності. Без обіцянок, які не вдається довести.",
      heroCtaPrimary: "Подивитись треки",
      heroCtaSecondary: "Читати маніфест",
      homeTracksTitle: "Чотири треки",
      homeTracksLead:
        "Кожен трек — це міні-курс і добірка матеріалів для конкретної аудиторії. Без перетину зі шкільним лобі.",
      homePrinciplesTeaserTitle: "Пʼять принципів, на яких ми стоїмо",
      homePrinciplesTeaserBody:
        "Вік має значення. Доказова ефективність. Без гачків залежності. Прозорість перевірки. Приватність за замовчуванням.",
      homePrinciplesTeaserCta: "Прочитати маніфест",
      principlesIntroTitle: "Пʼять принципів, на яких стоїть NextEducationAI",
      principlesIntroBody:
        "В освіті відбувається перелом. Батьки в США домагаються заборон планшетів у початковій школі. ЮНЕСКО попереджає, що школи фактично передали цифрову освіту приватним компаніям. Дослідження не підтверджують, що пристрої підіймають оцінки — і часто заважають вчитися. Ми згодні з критикою. І робимо своє інакше.",
      skillboostTitle: "SkillBoost — щоденна доза AI-грамотності",
      skillboostBody:
        "Короткі уроки про те, як ставити питання AI, як перевіряти відповіді й де AI помиляється найчастіше. 3 хвилини на день. Без push-спаму.",
      skillboostCta: "Відкрити в Telegram",
      aboutTitle: "Про NextEducationAI",
      aboutBody:
        "NextEducationAI — освітня ініціатива, що допомагає дорослим, студентам і викладачам використовувати інструменти штучного інтелекту свідомо й результативно. Ми не несемо AI у школи. Ми працюємо з тими, хто сам вирішив вчитися — і потребує орієнтирів у швидкозмінному ландшафті інструментів.",
      aboutHostedBy: "Носій проєкту",
      forWhomLabel: "Кому",
      aboutLabel: "Про що",
      insideLabel: "Що всередині",
      exploreTrackCta: "Детальніше про трек",
      footerTagline: "Підтримує ГО «Демократична інформаційна ініціатива»",
      footerNoTrackers:
        "Цей сайт не використовує cookies, не запускає Google Analytics і не має жодних трекерів.",
      metaTitle:
        "NextEducationAI — AI-грамотність для тих, хто сам обрав вчитися",
      metaDescription:
        "Освітня ініціатива для дорослих, студентів і викладачів. Інструменти AI без хайпу, без геймифікації залежності, з повагою до приватності.",
    };
  }
  return {
    brandSubline: "Educational initiative",
    navAria: "Main navigation",
    langSwitchTo: "UA",
    langSwitchAria: "Switch language to Ukrainian",
    heroHeadline: "AI for learners who choose it.",
    heroSub:
      "We make AI tools useful for adults, students, educators, and anyone learning on purpose. No hype. No engagement-trap gamification. No promises we canʼt back up.",
    heroCtaPrimary: "Explore tracks",
    heroCtaSecondary: "Read the manifesto",
    homeTracksTitle: "Four tracks",
    homeTracksLead:
      "Each track is a mini-curriculum and curated material set for a specific audience. No school-procurement angle.",
    homePrinciplesTeaserTitle: "Five principles we stand on",
    homePrinciplesTeaserBody:
      "Age matters. Evidence over hype. No engagement traps. Transparent verification. Privacy by default.",
    homePrinciplesTeaserCta: "Read the manifesto",
    principlesIntroTitle: "Five principles NextEducationAI stands on",
    principlesIntroBody:
      "Education is at a turning point. U.S. parents are winning bans on tablets in elementary classrooms. UNESCO warns that schools have effectively handed digital learning over to private tech companies. Research doesnʼt show that devices raise test scores — and often shows the opposite. We agree with the critics. So we do it differently.",
    skillboostTitle: "SkillBoost — your daily AI-literacy dose",
    skillboostBody:
      "Short lessons on how to prompt, how to verify, and where AI fails most often. Three minutes a day. No push spam.",
    skillboostCta: "Open in Telegram",
    aboutTitle: "About NextEducationAI",
    aboutBody:
      "NextEducationAI is an educational initiative helping adults, students, and educators use AI tools consciously and effectively. We donʼt push AI into schools. We work with people who already decided to learn — and need a compass in a fast-shifting tools landscape.",
    aboutHostedBy: "Hosted by",
    forWhomLabel: "For",
    aboutLabel: "About",
    insideLabel: "Inside",
    exploreTrackCta: "More about this track",
    footerTagline: "Supported by NGO «Democratic Information Initiative»",
    footerNoTrackers:
      "This site uses no cookies, runs no Google Analytics, and has no trackers.",
    metaTitle: "NextEducationAI — AI literacy for learners who choose it",
    metaDescription:
      "An educational initiative for adults, students and educators. AI tools without hype, without engagement traps, with privacy by default.",
  };
};
