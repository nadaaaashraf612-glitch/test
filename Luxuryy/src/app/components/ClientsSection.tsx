import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { useLanguage } from "./LanguageContext";

function GoldDivider() {
  return (
    <div className="flex items-center gap-3 mb-4">
      <div className="w-12 h-px bg-[#C9A800]" />
      <div className="w-2 h-2 rounded-full bg-[#C9A800]" />
      <div className="w-6 h-px bg-[#C9A800]/50" />
    </div>
  );
}

const clients = [
  {
    name_en: "Saudi Aramco",
    name_ar: "أرامكو السعودية",
    abbr: "ARAMCO",
    color: "#00A651",
    bg: "#f0faf4",
    textColor: "#00A651",
  },
  {
    name_en: "STC Group",
    name_ar: "مجموعة stc",
    abbr: "stc",
    color: "#6600CC",
    bg: "#f5f0ff",
    textColor: "#6600CC",
  },
  {
    name_en: "SABIC",
    name_ar: "سابك",
    abbr: "SABIC",
    color: "#004B87",
    bg: "#f0f5fb",
    textColor: "#004B87",
  },
  {
    name_en: "Al Rajhi Bank",
    name_ar: "مصرف الراجحي",
    abbr: "الراجحي",
    color: "#1A5276",
    bg: "#edf3fb",
    textColor: "#1A5276",
  },
  {
    name_en: "Saudi Airlines",
    name_ar: "الخطوط السعودية",
    abbr: "SAUDIA",
    color: "#006633",
    bg: "#f0faf5",
    textColor: "#006633",
  },
  {
    name_en: "Mobily",
    name_ar: "موبايلي",
    abbr: "mobily",
    color: "#E4002B",
    bg: "#fff0f2",
    textColor: "#E4002B",
  },
  {
    name_en: "PIF",
    name_ar: "صندوق الاستثمارات العامة",
    abbr: "PIF",
    color: "#1A237E",
    bg: "#edf0ff",
    textColor: "#1A237E",
  },
  {
    name_en: "NEOM",
    name_ar: "نيوم",
    abbr: "NEOM",
    color: "#000000",
    bg: "#f5f5f5",
    textColor: "#000000",
  },
  {
    name_en: "National Water Company",
    name_ar: "المياه الوطنية",
    abbr: "NWC",
    color: "#0072BC",
    bg: "#f0f7ff",
    textColor: "#0072BC",
  },
  {
    name_en: "Saudi Electricity",
    name_ar: "الكهرباء السعودية",
    abbr: "SEC",
    color: "#00539B",
    bg: "#f0f5fb",
    textColor: "#00539B",
  },
  {
    name_en: "Zain KSA",
    name_ar: "زين السعودية",
    abbr: "zain",
    color: "#CC2E85",
    bg: "#fff0f8",
    textColor: "#CC2E85",
  },
  {
    name_en: "Ministry of Housing",
    name_ar: "وزارة الإسكان",
    abbr: "إسكان",
    color: "#154360",
    bg: "#edf3f8",
    textColor: "#154360",
  },
];

function LogoCard({ client }: { client: (typeof clients)[0] }) {
  const { t } = useLanguage();
  return (
    <div
      className="flex-shrink-0 mx-4 flex flex-col items-center justify-center rounded-2xl border border-gray-100 hover:border-[#C9A800]/40 hover:shadow-[0_8px_30px_rgba(201,168,0,0.12)] transition-all duration-400 cursor-default group"
      style={{ width: 160, height: 100, background: client.bg }}
    >
      <span
        className="group-hover:scale-110 transition-transform duration-300"
        style={{
          color: client.textColor,
          fontSize: "1.25rem",
          fontWeight: 800,
          letterSpacing: "0.04em",
          fontFamily: "var(--font-primary, sans-serif)",
        }}
      >
        {client.abbr}
      </span>
      <span
        className="text-xs mt-1 text-gray-400 group-hover:text-gray-600 transition-colors duration-300 text-center px-2"
        style={{ lineHeight: 1.2 }}
      >
        {t(client.name_en, client.name_ar)}
      </span>
    </div>
  );
}

export function ClientsSection() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const inView = useInView(ref, {
    once: true,
    margin: "-80px",
  });

  // 1. روابط الصور الحقيقية بتاعتك جاهزة بدون أي تعديل
  const realClients = [
    { logo: "https://i.postimg.cc/ZRYZ517B/Picture3.png" }, 
    { logo: "https://i.postimg.cc/qqtPt08g/Picture7.png" }, 
    { logo: "https://i.postimg.cc/MHjL65Sj/Picture2.png" }, 
    { logo: "https://i.postimg.cc/HLvHj6qk/Picture5.png" }, 
    { logo: "https://i.postimg.cc/sfhyD9Km/Picture6.png" }, 
    { logo: "https://i.postimg.cc/NjgwDht3/Picture9.png" }, 
  ];

  // مضاعفة المصفوفة لضمان استمرار حركة الـ Marquee
  const doubled = [...realClients, ...realClients];

  return (
    <section className="bg-white py-[100px] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <p className="text-[#C9A800] text-sm uppercase tracking-widest mb-2">
            {t("Our Clients", "عملاؤنا")}
          </p>
          <h2
            className="text-[#0A0A0A] mb-4"
            style={{
              fontSize: "clamp(1.8rem, 3vw, 2.8rem)",
              fontWeight: 700,
            }}
          >
            {t("Trusted by Industry Leaders", "ثقة قادة الصناعة")}
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            {t(
              "We are proud to serve the largest names across Saudi Arabia's public and private sectors.",
              "نفخر بخدمة أكبر الأسماء في القطاعين العام والخاص في المملكة العربية السعودية."
            )}
          </p>
        </motion.div>
      </div>

      {/* Marquee row 1 — left to right */}
      <div className="relative mb-5">
        <div
          className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{
            background: "linear-gradient(to right, white, transparent)",
          }}
        />
        <div
          className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{
            background: "linear-gradient(to left, white, transparent)",
          }}
        />
        <motion.div
          className="flex items-center"
          animate={{
            x: [
              0,
              -160 * realClients.length - 32 * realClients.length,
            ],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {doubled.map((client, i) => (
            <div
              key={i}
              className="w-40 h-20 flex items-center justify-center bg-transparent mx-4 shrink-0 p-2"
            >
              <img
                src={client.logo}
                alt="Client Logo"
                className="max-h-full max-w-full object-contain transition-all duration-300"
              />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Marquee row 2 — right to left */}
      <div className="relative">
        <div
          className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{
            background: "linear-gradient(to right, white, transparent)",
          }}
        />
        <div
          className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{
            background: "linear-gradient(to left, white, transparent)",
          }}
        />
        <motion.div
          className="flex items-center"
          animate={{
            x: [
              -160 * realClients.length - 32 * realClients.length,
              0,
            ],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {doubled.map((client, i) => (
            <div
              key={i}
              className="w-40 h-20 flex items-center justify-center bg-transparent mx-4 shrink-0 p-2"
            >
              <img
                src={client.logo}
                alt="Client Logo"
                className="max-h-full max-w-full object-contain transition-all duration-300"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}