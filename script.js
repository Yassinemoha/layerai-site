const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

if (menuToggle && mainNav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = mainNav.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
  });

  mainNav.querySelectorAll("a").forEach(link =>
    link.addEventListener("click", () => {
      mainNav.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
    })
  );
}

document.querySelectorAll("#year").forEach(el => {
  el.textContent = new Date().getFullYear();
});

const translations = {
  en: {
    nav_home: "Home",
    nav_tools: "AI Tools",
    nav_library: "PSD Library",
    nav_learn: "Learn",
    nav_blog: "Blog",
    nav_about: "About",
    nav_cta: "Explore tools",
    language_label: "Choose language",

    eyebrow: "CREATIVE WORKFLOWS, REIMAGINED",
    hero_title: 'Your ideas.<br>Every layer.<br><span class="gradient-text">Made editable.</span>',
    hero_text: "Create, separate and explore visual ideas with practical AI-powered tools built for modern creators.",
    hero_primary: "Explore AI tools",
    hero_secondary: "Discover how it works",
    proof_title: "Made for creators everywhere",
    proof_text: "One creative space. Many possibilities.",
    ready: "Layers organized",
    layers: "Layers",
    background: "Background",
    subject: "Main subject",
    objects: "Objects",
    text_layer: "Text & details",
    effects: "Effects",
    editable: "Ready for editing",
    tag_ai: "AI-powered creativity",
    tag_export: "Layered export",

    strip_title: "A CREATIVE WORKSPACE FOR EVERY KIND OF MAKER",
    strip_one: "Image editing",
    strip_two: "AI design",
    strip_three: "Layered PSD",
    strip_four: "Creative learning",

    tools_kicker: "THE LAYERAI TOOLKIT",
    tools_title: 'Two ways to create.<br><span class="gradient-text">More room to imagine.</span>',
    tools_intro: "Start with an image you already have, or bring a completely new idea to life.",

    tool_one_status: "Image conversion",
    tool_one_title: "Image to PSD",
    tool_one_text: "Turn an existing image into a layered PSD project. Separate visual elements and continue editing in your design workflow.",
    tool_one_link: "Open Image to PSD",

    tool_two_status: "Generative design",
    tool_two_title: "AI Design Generator",
    tool_two_text: "Create a new design from a prompt, a reference image, or both—with the goal of making its elements independently editable.",
    tool_two_link: "Discover the generator",

    generator_note_title: "A new way to build layered designs",
    generator_note_text: "The AI Design Generator is being developed as a separate tool. Its launch details will appear here when ready.",

    library_kicker: "THE CREATIVE LIBRARY",
    library_title: 'Inspiration you can<br><span class="gradient-text">take into your workflow.</span>',
    library_intro: "A growing collection of layered resources and visual assets for your next project.",
    lib_card_one: "Layered design files",
    lib_card_one_sub: "Editable project resources",
    lib_card_two: "Creative elements",
    lib_card_two_sub: "Assets for visual projects",
    lib_card_three: "Design inspiration",
    lib_card_three_sub: "Ideas to start from",
    library_soon: "The library is taking shape",
    library_soon_text: "Downloadable PSD and PNG resources will be added as they are ready and cleared for sharing.",

    learn_kicker: "LEARN. EXPERIMENT. CREATE.",
    learn_title: 'Understand the layers<br><span class="gradient-text">behind every image.</span>',
    learn_text: "Explore practical guides about PSD files, image editing, AI workflows and creative techniques—step by step.",
    learn_button: "Explore tutorials",
    learn_badge: "Practical, creator-focused guides",

    blog_kicker: "FROM THE BLOG",
    blog_title: 'Ideas worth <span class="gradient-text">exploring.</span>',
    blog_intro: "Helpful starting points for understanding your creative tools.",
    blog_all: "View all articles",
    read_article: "Read article",

    cta_kicker: "YOUR NEXT IDEA STARTS HERE",
    cta_title: "Make room for every layer.",
    cta_text: "Explore tools, learn new techniques and create with LayerAI.",
    cta_button: "Explore LayerAI",

    footer_text: "Creative tools and learning resources for image makers everywhere.",
    footer_explore: "Explore",
    footer_layerai: "LayerAI",
    footer_contact: "Contact",
    footer_info: "Information",
    footer_privacy: "Privacy Policy",
    footer_terms: "Terms of Use",
    rights: "All rights reserved.",
    footer_made: "Made for creators everywhere ✦"
  },

  ar: {
    nav_home: "الرئيسية",
    nav_tools: "أدوات الذكاء الاصطناعي",
    nav_library: "مكتبة PSD",
    nav_learn: "تعلّم",
    nav_blog: "المدونة",
    nav_about: "من نحن",
    nav_cta: "اكتشف الأدوات",
    language_label: "اختر اللغة",

    eyebrow: "مساحة إبداعية بطرق جديدة",
    hero_title: 'أفكارك،<br>كل طبقة فيها،<br><span class="gradient-text">قابلة للتحرير.</span>',
    hero_text: "أنشئ التصاميم وافصل عناصر الصور واكتشف أفكاراً بصرية باستخدام أدوات عملية مدعومة بالذكاء الاصطناعي.",
    hero_primary: "اكتشف الأدوات",
    hero_secondary: "اكتشف كيف تعمل",
    proof_title: "مصممة للمبدعين في كل مكان",
    proof_text: "مساحة إبداعية واحدة، وإمكانيات كثيرة.",
    ready: "الطبقات منظمة",
    layers: "الطبقات",
    background: "الخلفية",
    subject: "العنصر الرئيسي",
    objects: "العناصر",
    text_layer: "النص والتفاصيل",
    effects: "التأثيرات",
    editable: "جاهز للتحرير",
    tag_ai: "إبداع مدعوم بالذكاء الاصطناعي",
    tag_export: "تصدير بطبقات",

    strip_title: "مساحة إبداعية لكل صانع محتوى",
    strip_one: "تحرير الصور",
    strip_two: "تصميم بالذكاء الاصطناعي",
    strip_three: "ملفات PSD بطبقات",
    strip_four: "تعلم إبداعي",

    tools_kicker: "أدوات LAYERAI",
    tools_title: 'طريقتان للإبداع.<br><span class="gradient-text">ومجال أوسع للخيال.</span>',
    tools_intro: "ابدأ بصورة لديك بالفعل، أو حوّل فكرة جديدة إلى تصميم.",

    tool_one_status: "تحويل الصور",
    tool_one_title: "تحويل الصورة إلى PSD",
    tool_one_text: "حوّل صورة موجودة إلى مشروع PSD بطبقات. افصل العناصر البصرية ثم واصل تحريرها في برنامج التصميم.",
    tool_one_link: "افتح أداة Image to PSD",

    tool_two_status: "توليد التصاميم",
    tool_two_title: "مولّد التصاميم بالذكاء الاصطناعي",
    tool_two_text: "أنشئ تصميماً جديداً انطلاقاً من وصف نصي أو صورة مرجعية أو الاثنين معاً، بهدف جعل عناصره قابلة للتحرير بشكل مستقل.",
    tool_two_link: "اكتشف المولّد",

    generator_note_title: "طريقة جديدة لبناء تصاميم متعددة الطبقات",
    generator_note_text: "يجري تطوير مولّد التصاميم كأداة مستقلة، وسنضيف تفاصيل إطلاقه هنا عند جاهزيته.",

    library_kicker: "المكتبة الإبداعية",
    library_title: 'إلهام يمكنك<br><span class="gradient-text">استخدامه في مشاريعك.</span>',
    library_intro: "مجموعة متنامية من الموارد متعددة الطبقات والعناصر البصرية لمشروعك القادم.",
    lib_card_one: "ملفات تصميم بطبقات",
    lib_card_one_sub: "مشاريع قابلة للتحرير",
    lib_card_two: "عناصر إبداعية",
    lib_card_two_sub: "موارد للمشاريع البصرية",
    lib_card_three: "إلهام للتصميم",
    lib_card_three_sub: "أفكار تنطلق منها",
    library_soon: "المكتبة قيد التجهيز",
    library_soon_text: "سنضيف ملفات PSD وPNG قابلة للتحميل عندما تصبح جاهزة ومسموحاً بمشاركتها.",

    learn_kicker: "تعلّم. جرّب. أبدع.",
    learn_title: 'افهم الطبقات<br><span class="gradient-text">الموجودة خلف كل صورة.</span>',
    learn_text: "اكتشف شروحات عملية حول ملفات PSD وتحرير الصور وأدوات الذكاء الاصطناعي وتقنيات التصميم خطوة بخطوة.",
    learn_button: "استكشف الشروحات",
    learn_badge: "شروحات عملية للمبدعين",

    blog_kicker: "من المدونة",
    blog_title: 'أفكار تستحق <span class="gradient-text">الاكتشاف.</span>',
    blog_intro: "مواضيع تساعدك على فهم أدواتك الإبداعية.",
    blog_all: "كل المقالات",
    read_article: "اقرأ المقال",

    cta_kicker: "فكرتك القادمة تبدأ هنا",
    cta_title: "امنح كل طبقة مساحتها.",
    cta_text: "اكتشف الأدوات وتعلّم تقنيات جديدة وأبدع مع LayerAI.",
    cta_button: "اكتشف LayerAI",

    footer_text: "أدوات إبداعية وموارد تعليمية لصنّاع الصور في كل مكان.",
    footer_explore: "استكشف",
    footer_layerai: "LayerAI",
    footer_contact: "اتصل بنا",
    footer_info: "معلومات",
    footer_privacy: "سياسة الخصوصية",
    footer_terms: "شروط الاستخدام",
    rights: "جميع الحقوق محفوظة.",
    footer_made: "صُنع للمبدعين في كل مكان ✦"
  },

  fr: {
    nav_home: "Accueil",
    nav_tools: "Outils IA",
    nav_library: "Bibliothèque PSD",
    nav_learn: "Apprendre",
    nav_blog: "Blog",
    nav_about: "À propos",
    nav_cta: "Découvrir les outils",
    language_label: "Choisir la langue",

    eyebrow: "DES FLUX CRÉATIFS REPENSÉS",
    hero_title: 'Vos idées.<br>Chaque calque.<br><span class="gradient-text">Modifiable.</span>',
    hero_text: "Créez, séparez et explorez des idées visuelles grâce à des outils pratiques d’IA conçus pour les créateurs.",
    hero_primary: "Explorer les outils IA",
    hero_secondary: "Découvrir le fonctionnement",
    proof_title: "Pour les créateurs du monde entier",
    proof_text: "Un espace créatif. De nombreuses possibilités.",
    ready: "Calques organisés",
    layers: "Calques",
    background: "Arrière-plan",
    subject: "Sujet principal",
    objects: "Objets",
    text_layer: "Texte et détails",
    effects: "Effets",
    editable: "Prêt à modifier",
    tag_ai: "Créativité assistée par IA",
    tag_export: "Export en calques",

    strip_title: "UN ESPACE CRÉATIF POUR TOUS",
    strip_one: "Retouche d’image",
    strip_two: "Design IA",
    strip_three: "PSD en calques",
    strip_four: "Apprentissage créatif",

    tools_kicker: "LES OUTILS LAYERAI",
    tools_title: 'Deux façons de créer.<br><span class="gradient-text">Plus de place à l’imagination.</span>',
    tools_intro: "Commencez avec une image existante ou donnez vie à une idée entièrement nouvelle.",

    tool_one_status: "Conversion d’image",
    tool_one_title: "Image vers PSD",
    tool_one_text: "Transformez une image existante en projet PSD avec calques. Séparez les éléments visuels et poursuivez votre édition.",
    tool_one_link: "Ouvrir Image to PSD",

    tool_two_status: "Design génératif",
    tool_two_title: "Générateur de design IA",
    tool_two_text: "Créez un design à partir d’un prompt, d’une image de référence ou des deux, avec des éléments conçus pour être modifiables séparément.",
    tool_two_link: "Découvrir le générateur",

    generator_note_title: "Une nouvelle façon de créer des designs en calques",
    generator_note_text: "Le générateur IA est développé comme un outil distinct. Les détails de lancement seront publiés ici.",

    library_kicker: "BIBLIOTHÈQUE CRÉATIVE",
    library_title: 'Des inspirations à<br><span class="gradient-text">intégrer à vos projets.</span>',
    library_intro: "Une collection évolutive de ressources en calques et d’éléments visuels.",
    lib_card_one: "Fichiers de design en calques",
    lib_card_one_sub: "Projets modifiables",
    lib_card_two: "Éléments créatifs",
    lib_card_two_sub: "Ressources visuelles",
    lib_card_three: "Inspiration design",
    lib_card_three_sub: "Des idées pour commencer",
    library_soon: "La bibliothèque se prépare",
    library_soon_text: "Des ressources PSD et PNG seront ajoutées lorsqu’elles seront prêtes et autorisées au partage.",

    learn_kicker: "APPRENDRE. EXPÉRIMENTER. CRÉER.",
    learn_title: 'Comprendre les calques<br><span class="gradient-text">derrière chaque image.</span>',
    learn_text: "Des guides pratiques sur les fichiers PSD, la retouche d’image, l’IA et les techniques créatives.",
    learn_button: "Voir les tutoriels",
    learn_badge: "Des guides pratiques pour les créateurs",

    blog_kicker: "SUR LE BLOG",
    blog_title: 'Des idées à <span class="gradient-text">explorer.</span>',
    blog_intro: "Des ressources pour mieux comprendre vos outils créatifs.",
    blog_all: "Tous les articles",
    read_article: "Lire l’article",

    cta_kicker: "VOTRE PROCHAINE IDÉE COMMENCE ICI",
    cta_title: "Donnez de la place à chaque calque.",
    cta_text: "Explorez les outils, apprenez et créez avec LayerAI.",
    cta_button: "Explorer LayerAI",

    footer_text: "Des outils créatifs et des ressources pour les créateurs d’images.",
    footer_explore: "Explorer",
    footer_layerai: "LayerAI",
    footer_contact: "Contact",
    footer_info: "Informations",
    footer_privacy: "Confidentialité",
    footer_terms: "Conditions",
    rights: "Tous droits réservés.",
    footer_made: "Conçu pour les créateurs du monde entier ✦"
  }
};

const extraLanguages = {
  es: {
    nav_home: "Inicio",
    nav_tools: "Herramientas IA",
    nav_library: "Biblioteca PSD",
    nav_learn: "Aprender",
    nav_blog: "Blog",
    nav_about: "Acerca de",
    nav_cta: "Explorar herramientas",
    eyebrow: "FLUJOS CREATIVOS RENOVADOS",
    hero_title: 'Tus ideas.<br>Cada capa.<br><span class="gradient-text">Editable.</span>',
    hero_text: "Crea, separa y explora ideas visuales con herramientas prácticas de IA para creadores.",
    hero_primary: "Explorar herramientas IA",
    hero_secondary: "Descubre cómo funciona",
    proof_title: "Para creadores de todo el mundo",
    proof_text: "Un espacio creativo. Muchas posibilidades.",
    ready: "Capas organizadas",
    layers: "Capas",
    background: "Fondo",
    subject: "Elemento principal",
    objects: "Objetos",
    text_layer: "Texto y detalles",
    effects: "Efectos",
    editable: "Listo para editar",
    tag_ai: "Creatividad con IA",
    tag_export: "Exportación por capas",
    strip_title: "UN ESPACIO CREATIVO PARA TODOS",
    strip_one: "Edición de imágenes",
    strip_two: "Diseño con IA",
    strip_three: "PSD por capas",
    strip_four: "Aprendizaje creativo",
    tools_kicker: "HERRAMIENTAS LAYERAI",
    tools_title: 'Dos formas de crear.<br><span class="gradient-text">Más espacio para imaginar.</span>',
    tools_intro: "Empieza con una imagen existente o da vida a una idea nueva.",
    tool_one_status: "Conversión de imagen",
    tool_one_title: "Imagen a PSD",
    tool_one_text: "Convierte una imagen existente en un proyecto PSD por capas y sigue editando sus elementos.",
    tool_one_link: "Abrir Image to PSD",
    tool_two_status: "Diseño generativo",
    tool_two_title: "Generador de diseño IA",
    tool_two_text: "Crea diseños desde un texto, una imagen de referencia o ambos, con elementos pensados para editarse por separado.",
    tool_two_link: "Descubrir el generador",
    generator_note_title: "Una nueva forma de crear diseños por capas",
    generator_note_text: "El generador se desarrolla como herramienta independiente. Publicaremos aquí los detalles cuando esté listo.",
    library_kicker: "BIBLIOTECA CREATIVA",
    library_title: 'Inspiración para<br><span class="gradient-text">llevar a tus proyectos.</span>',
    library_intro: "Una colección en crecimiento de recursos por capas y elementos visuales.",
    lib_card_one: "Archivos de diseño por capas",
    lib_card_one_sub: "Proyectos editables",
    lib_card_two: "Elementos creativos",
    lib_card_two_sub: "Recursos visuales",
    lib_card_three: "Inspiración de diseño",
    lib_card_three_sub: "Ideas para comenzar",
    library_soon: "La biblioteca está en preparación",
    library_soon_text: "Añadiremos recursos PSD y PNG cuando estén listos y autorizados para compartir.",
    learn_kicker: "APRENDE. EXPERIMENTA. CREA.",
    learn_title: 'Comprende las capas<br><span class="gradient-text">detrás de cada imagen.</span>',
    learn_text: "Guías prácticas sobre PSD, edición de imágenes, IA y técnicas creativas.",
    learn_button: "Explorar tutoriales",
    learn_badge: "Guías prácticas para creadores",
    blog_kicker: "DEL BLOG",
    blog_title: 'Ideas que vale la pena <span class="gradient-text">explorar.</span>',
    blog_intro: "Puntos de partida para conocer mejor tus herramientas creativas.",
    blog_all: "Ver todos los artículos",
    read_article: "Leer artículo",
    cta_kicker: "TU PRÓXIMA IDEA EMPIEZA AQUÍ",
    cta_title: "Deja espacio para cada capa.",
    cta_text: "Explora herramientas y crea con LayerAI.",
    cta_button: "Explorar LayerAI",
    footer_text: "Herramientas creativas y recursos para creadores de imágenes.",
    footer_explore: "Explorar",
    footer_layerai: "LayerAI",
    footer_contact: "Contacto",
    footer_info: "Información",
    footer_privacy: "Privacidad",
    footer_terms: "Condiciones",
    rights: "Todos los derechos reservados.",
    footer_made: "Hecho para creadores de todo el mundo ✦"
  },

  de: {
    nav_home: "Startseite",
    nav_tools: "KI-Tools",
    nav_library: "PSD-Bibliothek",
    nav_learn: "Lernen",
    nav_blog: "Blog",
    nav_about: "Über uns",
    nav_cta: "Tools entdecken",
    eyebrow: "KREATIVE WORKFLOWS NEU GEDACHT",
    hero_title: 'Deine Ideen.<br>Jede Ebene.<br><span class="gradient-text">Bearbeitbar.</span>',
    hero_text: "Erstelle, trenne und entdecke Bildideen mit praktischen KI-Tools für Kreative.",
    hero_primary: "KI-Tools entdecken",
    hero_secondary: "So funktioniert es",
    proof_title: "Für Kreative überall",
    proof_text: "Ein kreativer Ort. Viele Möglichkeiten.",
    ready: "Ebenen organisiert",
    layers: "Ebenen",
    background: "Hintergrund",
    subject: "Hauptmotiv",
    objects: "Objekte",
    text_layer: "Text und Details",
    effects: "Effekte",
    editable: "Bereit zur Bearbeitung",
    tag_ai: "KI-gestützte Kreativität",
    tag_export: "Ebenenexport",
    strip_title: "EIN KREATIVER ARBEITSPLATZ FÜR ALLE",
    strip_one: "Bildbearbeitung",
    strip_two: "KI-Design",
    strip_three: "PSD-Ebenen",
    strip_four: "Kreatives Lernen",
    tools_kicker: "DAS LAYERAI-TOOLKIT",
    tools_title: 'Zwei Wege zum Gestalten.<br><span class="gradient-text">Mehr Raum für Ideen.</span>',
    tools_intro: "Beginne mit einem vorhandenen Bild oder erwecke eine neue Idee zum Leben.",
    tool_one_status: "Bildkonvertierung",
    tool_one_title: "Bild zu PSD",
    tool_one_text: "Wandle ein vorhandenes Bild in ein PSD-Projekt mit Ebenen um und bearbeite einzelne Elemente weiter.",
    tool_one_link: "Image to PSD öffnen",
    tool_two_status: "Generatives Design",
    tool_two_title: "KI-Designgenerator",
    tool_two_text: "Erstelle Designs aus Text, Referenzbild oder beidem – mit dem Ziel, Elemente einzeln bearbeiten zu können.",
    tool_two_link: "Generator entdecken",
    generator_note_title: "Eine neue Art, Ebenen-Designs zu erstellen",
    generator_note_text: "Der KI-Designgenerator wird als separates Tool entwickelt. Startinformationen folgen hier.",
    library_kicker: "DIE KREATIVE BIBLIOTHEK",
    library_title: 'Inspiration für<br><span class="gradient-text">deine Projekte.</span>',
    library_intro: "Eine wachsende Sammlung von Ebenen-Ressourcen und visuellen Elementen.",
    lib_card_one: "Geschichtete Designdateien",
    lib_card_one_sub: "Bearbeitbare Projekte",
    lib_card_two: "Kreative Elemente",
    lib_card_two_sub: "Visuelle Ressourcen",
    lib_card_three: "Design-Inspiration",
    lib_card_three_sub: "Ideen für den Start",
    library_soon: "Die Bibliothek entsteht",
    library_soon_text: "PSD- und PNG-Ressourcen werden ergänzt, sobald sie bereit und zur Weitergabe freigegeben sind.",
    learn_kicker: "LERNEN. TESTEN. GESTALTEN.",
    learn_title: 'Verstehe die Ebenen<br><span class="gradient-text">hinter jedem Bild.</span>',
    learn_text: "Praktische Anleitungen zu PSD-Dateien, Bildbearbeitung, KI-Workflows und Kreativtechniken.",
    learn_button: "Tutorials entdecken",
    learn_badge: "Praktische Guides für Kreative",
    blog_kicker: "AUS DEM BLOG",
    blog_title: 'Ideen zum <span class="gradient-text">Entdecken.</span>',
    blog_intro: "Hilfreiche Einstiege in deine Kreativwerkzeuge.",
    blog_all: "Alle Artikel",
    read_article: "Artikel lesen",
    cta_kicker: "DEINE NÄCHSTE IDEE BEGINNT HIER",
    cta_title: "Jede Ebene verdient Platz.",
    cta_text: "Entdecke Tools und gestalte mit LayerAI.",
    cta_button: "LayerAI entdecken",
    footer_text: "Kreative Tools und Lernressourcen für Bildgestalter.",
    footer_explore: "Entdecken",
    footer_layerai: "LayerAI",
    footer_contact: "Kontakt",
    footer_info: "Informationen",
    footer_privacy: "Datenschutz",
    footer_terms: "Nutzungsbedingungen",
    rights: "Alle Rechte vorbehalten.",
    footer_made: "Für Kreative überall gemacht ✦"
  }
};

translations.es = extraLanguages.es;
translations.de = extraLanguages.de;

function applyLanguage(lang) {
  const dict = translations[lang] || translations.en;

  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;
    if (dict[key]) {
      el.textContent = dict[key];
    }
  });

  document.querySelectorAll("[data-i18n-html]").forEach(el => {
    const key = el.dataset.i18nHtml;
    if (dict[key]) {
      el.innerHTML = dict[key];
    }
  });

  localStorage.setItem("layerai-language", lang);
}

const languageSelect = document.getElementById("languageSelect");
const savedLanguage = localStorage.getItem("layerai-language");
const browserLanguage = (navigator.language || "en").slice(0, 2).toLowerCase();

const initialLanguage =
  savedLanguage ||
  (translations[browserLanguage] ? browserLanguage : "en");

if (languageSelect) {
  languageSelect.value = initialLanguage;
  applyLanguage(initialLanguage);

  languageSelect.addEventListener("change", event => {
    applyLanguage(event.target.value);
  });
}
