export type Program = {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  tag: string;
  duration: string;
  description: string;
  about: string[];
  whatYouLearn: string[];
  format: string[];
  outcomes: string[];
  color: "primary" | "accent";
  curriculum?: { title: string; topics: string[] }[];
  faq: { question: string; answer: string }[];
};

export const programs: Program[] = [
  {
    id: "01",
    slug: "frontend",
    title: "Frontend Development",
    tagline: "Müasir veb interfeyslər qurun — HTML-dən React-a qədər.",
    tag: "Ən populyar",
    duration: "6 ay",
    description:
      "HTML, CSS, JavaScript, React.js. Müasir interfeys dizaynından başlayaraq tam layihə qurma bacarıqları.",
    about: [
      "Frontend Development proqramı sizi sıfırdan müasir veb tətbiqlər qurmağa hazırlayır. HTML, CSS və JavaScript əsaslarından başlayaraq React.js ilə tək səhifəli tətbiqlər (SPA), state idarəetməsi və real API inteqrasiyası öyrənəcəksiniz.",
      "Proqram həm yeni başlayanlar, həm də əsasları mövcud olanlar üçün uyğundur. Hər modul real layihələrlə möhkəmlənir, beləliklə portfolio üçün hazır işlər əldə edəcəksiniz.",
    ],
    whatYouLearn: [
      "HTML5 & semantik markup",
      "CSS3, Flexbox, Grid",
      "JavaScript (ES6+)",
      "React.js & hooks",
      "State management",
      "REST API inteqrasiyası",
      "Responsive dizayn",
      "Git & layihə workflow",
    ],
    format: ["6 ay", "Həftəlik canlı dərslər", "Real layihə əsaslı", "Mentor dəstəyi"],
    outcomes: ["React Developer", "UI Engineer", "Freelancer"],
    color: "primary",
    curriculum: [
      { title: "Modul 1: HTML & CSS əsasları", topics: ["HTML5 struktur", "CSS layout", "Responsive dizayn"] },
      { title: "Modul 2: JavaScript", topics: ["Syntax & DOM", "Async JavaScript", "ES6+"] },
      { title: "Modul 3: React.js", topics: ["Components", "Hooks", "State", "Routing"] },
      { title: "Modul 4: Layihə & portfolio", topics: ["Real layihələr", "API", "Deploy"] },
    ],
    faq: [
      { question: "Proqram üçün əvvəlki təcrübə lazımdır?", answer: "Xeyr. Proqram sıfırdan başlayanlar üçün nəzərdə tutulub. Sadəcə kompüter əsasları və öyrənməyə vaxt ayırmaq kifayətdir." },
      { question: "Dərslər canlı keçirilir?", answer: "Bəli. Həftəlik canlı dərslər və mentor dəstəyi ilə materialları mənimsəyir və suallarınıza cavab alırsınız." },
      { question: "Bitirdikdən sonra işə qəbul imkanı necədir?", answer: "Proqramda CV hazırlığı, müsahibə simulyasiyası və iş elanlarına çıxış daxildir. Tələbələrimizin əhəmiyyətli hissəsi 6 ay ərzində ilk işini tapır." },
    ],
  },
  {
    id: "02",
    slug: "backend",
    title: "Backend Development",
    tagline: "Server tərəfi məntiqdən mikroservis arxitekturasına.",
    tag: "Yüksək tələb",
    duration: "7 ay",
    description:
      "Node.js, Express, verilənlər bazaları, API dizaynı. Server tərəfi məntiqdən mikroservis arxitekturasına qədər.",
    about: [
      "Backend Development proqramında Node.js və Express ilə API-lər qurmağı, verilənlər bazaları (SQL və NoSQL) ilə işləməyi və təhlükəsiz, miqyaslanan sistemlər dizayn etməyi öyrənəcəksiniz.",
      "Real layihələrlə RESTful API, autentifikasiya və verilənlər bazası sxemləri qurursunuz. Proqramın sonunda Full-Stack və ya Backend Developer kimi işə hazır olacaqsınız.",
    ],
    whatYouLearn: [
      "Node.js & Express",
      "RESTful API dizaynı",
      "SQL (PostgreSQL)",
      "NoSQL (MongoDB)",
      "Autentifikasiya & JWT",
      "Mikroservis əsasları",
      "Docker əsasları",
      "Testing & debugging",
    ],
    format: ["7 ay", "Həftəlik canlı dərslər", "Real layihə əsaslı", "Mentor dəstəyi"],
    outcomes: ["Backend Developer", "Full-Stack", "API Engineer"],
    color: "accent",
    curriculum: [
      { title: "Modul 1: Node.js əsasları", topics: ["JavaScript runtime", "Express", "Routing"] },
      { title: "Modul 2: Verilənlər bazaları", topics: ["PostgreSQL", "MongoDB", "ORM"] },
      { title: "Modul 3: API & təhlükəsizlik", topics: ["REST", "Auth", "Validation"] },
      { title: "Modul 4: Layihə & deploy", topics: ["Mikroservislər", "Docker", "Deploy"] },
    ],
    faq: [
      { question: "Frontend bilik tələb olunur?", answer: "Əsas HTML/CSS/JS bilik faydalıdır, amma proqramda zəruri deyil. Əsas diqqət server tərəfi məntiq və API qurmağadır." },
      { question: "Hansı verilənlər bazası öyrədilir?", answer: "PostgreSQL (SQL) və MongoDB (NoSQL) əsasları öyrədilir. Real layihələrdə hər ikisi ilə işləyəcəksiniz." },
      { question: "Proqram bitirdikdən sonra sertifikat verilir?", answer: "Bəli. Udemy və AppMillers tərəfindən təsdiqlənmiş bitirmə sertifikatı təqdim olunur." },
    ],
  },
  {
    id: "03",
    slug: "data-ai",
    title: "Data & AI",
    tagline: "Məlumat analitikasından süni intellekt modellərinə.",
    tag: "Gələcəyin sahəsi",
    duration: "8 ay",
    description:
      "Python, Machine Learning, Data Analysis. Məlumat analitikasından süni intellekt modellərinin qurulmasına.",
    about: [
      "Data & AI proqramı Python əsasları, məlumat analitikası və maşın öyrənməsi (Machine Learning) üzrə praktiki bacarıqlar qazandırır. Pandas, NumPy, scikit-learn və əsas ML modelləri ilə real məlumatlar üzərində işləyəcəksiniz.",
      "Proqram data analyst, ML engineer və ya AI developer kimi karyera qurmaq istəyənlər üçün uyğundur. Layihələr portfolio üçün hazır nümunələr təqdim edir.",
    ],
    whatYouLearn: [
      "Python əsasları",
      "Pandas & NumPy",
      "Data vizualization",
      "Statistik analiz",
      "Machine Learning əsasları",
      "scikit-learn",
      "Data pipeline əsasları",
      "AI/LLM əsasları",
    ],
    format: ["8 ay", "Həftəlik canlı dərslər", "Real layihə əsaslı", "Mentor dəstəyi"],
    outcomes: ["Data Analyst", "ML Engineer", "AI Developer"],
    color: "primary",
    curriculum: [
      { title: "Modul 1: Python & data", topics: ["Python", "Pandas", "Vizualization"] },
      { title: "Modul 2: Statistika & analiz", topics: ["Statistik əsaslar", "A/B test", "Reporting"] },
      { title: "Modul 3: Machine Learning", topics: ["ML modelləri", "scikit-learn", "Evaluation"] },
      { title: "Modul 4: Layihə & portfolio", topics: ["Real datasetlər", "Deploy", "Portfolio"] },
    ],
    faq: [
      { question: "Riyazi bilik nə dərəcədə lazımdır?", answer: "Orta məktəb riyaziyyatı (funksiyalar, statistik əsaslar) kifayətdir. Proqramda lazım olan riyazi anlayışlar izah olunur." },
      { question: "Öz kompüterimdə işləyə bilərəm?", answer: "Bəli. Python və açıq mənbə alətlər istifadə olunur, bütün məşğulələr öz kompüterinizdə edilə bilər." },
      { question: "AI / LLM hissəsi nə qədər daxildir?", answer: "Proqramda ML əsasları və müasir AI/LLM anlayışları daxildir. Dərin öyrənmə (deep learning) əlavə modul kimi təklif oluna bilər." },
    ],
  },
  {
    id: "04",
    slug: "cybersecurity",
    title: "Cybersecurity",
    tagline: "Şəbəkə təhlükəsizliyi və etik hacking əsasları.",
    tag: "Kritik sahə",
    duration: "6 ay",
    description:
      "Şəbəkə təhlükəsizliyi, etik hacking, sistem auditləri. Real ssenarilərlə müdafiə bacarıqları.",
    about: [
      "Cybersecurity proqramı şəbəkə təhlükəsizliyi, zəifliklərin qiymətləndirilməsi və etik hacking əsasları ilə tanış edir. Real lab mühitində təhlükəsizlik testləri və müdafiə strategiyaları öyrənəcəksiniz.",
      "Proqram Security Analyst, Penetration Tester və ya SOC analyst kimi rolara hazırlıq üçün uyğundur. Praktiki bacarıqlar real ssenarilər və təhlükəsiz lab vasitəsilə qazandırılır.",
    ],
    whatYouLearn: [
      "Şəbəkə əsasları",
      "Təhlükəsizlik əsasları",
      "Zəiflik skanı",
      "Etik hacking əsasları",
      "Kriptoqrafiya əsasları",
      "Incident response",
      "SOC əsasları",
      "Compliance əsasları",
    ],
    format: ["6 ay", "Həftəlik canlı dərslər", "Lab əsaslı", "Mentor dəstəyi"],
    outcomes: ["Security Analyst", "Pen Tester", "SOC Analyst"],
    color: "primary",
    curriculum: [
      { title: "Modul 1: Şəbəkə & sistem əsasları", topics: ["TCP/IP", "OS", "Network security"] },
      { title: "Modul 2: Zəifliklər & skan", topics: ["Vulnerability assessment", "Tools", "Reporting"] },
      { title: "Modul 3: Etik hacking əsasları", topics: ["Recon", "Exploitation əsasları", "Defense"] },
      { title: "Modul 4: SOC & incident", topics: ["Monitoring", "Incident response", "Playbooks"] },
    ],
    faq: [
      { question: "Proqramda hücum üsulları öyrədilir?", answer: "Bəli, etik hacking çərçivəsində və yalnız öyrətmə/icazəli test məqsədi ilə. Qanuni və etik istifadə vurğulanır." },
      { question: "Sertifikasiya hazırlığı daxildirmi?", answer: "Proqram əsas sertifikatlara (məs. CompTIA Security+, CEH əsasları) hazırlıq üçün əsas verir; sertifikat imtahanları ayrıca hazırlıq tələb edir." },
      { question: "Lab mühiti necə təmin olunur?", answer: "Virtual maşınlar və təhlükəsiz lab mühiti proqram daxilində təqdim olunur. Öz kompüterinizdə VirtualBox və ya ekvivalent işlədə bilərsiniz." },
    ],
  },
];

export function getProgramBySlug(slug: string): Program | undefined {
  return programs.find((p) => p.slug === slug);
}
