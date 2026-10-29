import { useRef } from "react";
import { motion, useInView } from "motion/react";
import {
  Award, Users, Building2, TrendingUp, CheckCircle, Star,
  Shield, Zap, HeartHandshake, Globe, ArrowRight, Phone,
} from "lucide-react";
import { Link } from "react-router";
import { useLanguage } from "../LanguageContext";

const HERO_IMG    = "https://images.unsplash.com/photo-1486325212027-8081e485255e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200";
const STORY_IMG   = "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080";
const COMMIT_IMG  = "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800";

function FadeIn({ children, delay = 0, className = "", direction = "up" }: {
  children: React.ReactNode; delay?: number; className?: string; direction?: "up" | "left" | "right";
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const init: any = { opacity: 0 };
  if (direction === "up") init.y = 30;
  if (direction === "left") init.x = -30;
  if (direction === "right") init.x = 30;
  return (
    <motion.div ref={ref} initial={init}
      animate={inView ? { opacity: 1, y: 0, x: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: "easeOut" }} className={className}>
      {children}
    </motion.div>
  );
}

// ─── HERO ────────────────────────────────────────────────────────────────────
function AboutHero() {
  const { t } = useLanguage();
  return (
    <section className="relative w-full overflow-hidden" style={{ minHeight: "62vh" }}>
      {/* Full-width image */}
      <motion.img
        src={HERO_IMG}
        alt="Bayt Rafal"
        className="absolute inset-0 w-full h-full object-cover"
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      />

      {/* Gradient overlay — dark left, transparent right */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A]/90 via-[#0A0A0A]/55 to-[#0A0A0A]/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/40 to-transparent" />

      {/* Gold left accent */}
      <div className="absolute top-0 left-0 w-1 h-full bg-[#C9A800]" />

      {/* Text */}
      <div className="relative z-10 flex flex-col justify-center min-h-[62vh] px-10 md:px-16 lg:px-24 pt-32 pb-16 max-w-2xl">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="w-8 h-px bg-[#C9A800]" />
            <span className="text-[#C9A800] text-xs uppercase tracking-[0.25em]">
              {t("Since 2009", "منذ 2009")}
            </span>
          </div>

          <h1
            className="text-white leading-[1.08] mb-6"
            style={{ fontSize: "clamp(2.4rem, 5vw, 4rem)", fontWeight: 800 }}
          >
            {t("About", "عن")}{" "}
            <br />
            <em className="not-italic text-[#C9A800]">{t("Bayt Rafal", "بيت رفال")}</em>
          </h1>

          <p className="text-white/65 leading-relaxed max-w-md" style={{ fontSize: "1.05rem" }}>
            {t(
              "A real estate developer built on one conviction — that every family deserves a home that exceeds their expectations, and every investor deserves returns that reward their trust.",
              "مطور عقاري مبني على قناعة واحدة — أن كل عائلة تستحق منزلاً يفوق توقعاتها، وكل مستثمر يستحق عوائد تكافئ ثقته."
            )}
          </p>
        </motion.div>
      </div>

      {/* Year badge */}
    
    </section>
  );
}

// ─── STORY — editorial ───────────────────────────────────────────────────────
function StorySection() {
  const { t } = useLanguage();
  return (
    <section className="py-[100px] bg-[#F8F6F2]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Top row: label + pull quote */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-16 items-end">
          <FadeIn direction="left" className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-[#C9A800]" />
              <span className="text-[#C9A800] text-xs uppercase tracking-[0.2em]">{t("Our Story", "قصتنا")}</span>
            </div>
            <h2 className="text-[#0A0A0A] leading-tight" style={{ fontSize: "clamp(1.6rem, 2.5vw, 2.4rem)", fontWeight: 700 }}>
              {t("15 Years of Building More Than Homes", "15 عاماً نبني أكثر من مجرد منازل")}
            </h2>
          </FadeIn>

          <FadeIn direction="right" delay={0.1} className="lg:col-span-7 lg:col-start-6">
            <blockquote
              className="text-[#0A0A0A]/70 leading-relaxed border-l-2 border-[#C9A800] pl-6"
              style={{ fontSize: "1.15rem" }}
            >
              {t(
                '"We started with a single compound in Riyadh and a promise to our clients. Fifteen years later, that promise has been delivered 120 times over — and we\'re just getting started."',
                '"بدأنا بمجمع واحد في الرياض ووعد لعملائنا. بعد خمسة عشر عاماً، تم الوفاء بهذا الوعد أكثر من 120 مرة — ونحن بدأنا للتو."'
              )}
            </blockquote>
          </FadeIn>
        </div>

        {/* Body: image + text columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <FadeIn direction="left" className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden" style={{ height: 480 }}>
              <img src={STORY_IMG} alt="Story" className="w-full h-full object-cover" />
              {/* overlay card */}
              
            </div>
          </FadeIn>

          <FadeIn direction="right" delay={0.15} className="lg:col-span-7">
            <div className="space-y-5 text-gray-600 leading-relaxed" style={{ fontSize: "1rem" }}>
              <p>
                {t(
                  "Bayt Rafal was founded in 2009 with a straightforward mission: to deliver residential and commercial developments that genuinely improve people's lives. In a market crowded with promises, we chose to lead with results.",
                  "تأسست بيت رفال عام 2009 بمهمة واضحة: تقديم مشاريع سكنية وتجارية تُحسّن حياة الناس فعلاً. في سوق مليء بالوعود، اخترنا أن نقود بالنتائج."
                )}
              </p>
              <p>
                {t(
                  "Over the years, we expanded from our home city of Riyadh to Jeddah and Dammam — always carrying the same uncompromising standards of quality, design, and client care that defined our earliest projects.",
                  "على مر السنين، توسعنا من مدينتنا الأم الرياض إلى جدة والدمام — حاملين دائماً نفس المعايير الصارمة للجودة والتصميم ورعاية العملاء التي ميّزت مشاريعنا الأولى."
                )}
              </p>
              <p>
                {t(
                  "Today, our portfolio exceeds SAR 2 billion and includes luxury villas, residential compounds, commercial towers, and mixed-use developments — all built to outlast generations.",
                  "اليوم، تتجاوز محفظتنا 2 مليار ريال وتشمل فللاً فاخرة ومجمعات سكنية وأبراجاً تجارية ومشاريع متعددة الاستخدامات — كلها مبنية لتدوم عبر الأجيال."
                )}
              </p>
            </div>

            {/* Horizontal dividers with values */}
            <div className="mt-10 space-y-0 border-t border-gray-200">
              {[
                { icon: Award,       en: "Excellence in every detail",      ar: "التميز في كل تفصيل" },
                { icon: CheckCircle, en: "Transparent and ethical dealings", ar: "تعاملات شفافة وأخلاقية" },
                { icon: Building2,   en: "Premium build quality guaranteed", ar: "جودة بناء متميزة مضمونة" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="flex items-center gap-4 py-4 border-b border-gray-100 group"
                >
                  <div className="w-8 h-8 rounded-lg bg-[#C9A800]/10 group-hover:bg-[#C9A800] flex items-center justify-center shrink-0 transition-all duration-300">
                    <item.icon size={15} className="text-[#C9A800] group-hover:text-black transition-colors duration-300" />
                  </div>
                  <span className="text-[#0A0A0A]/80 text-sm">{t(item.en, item.ar)}</span>
                </motion.div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

// ─── VALUES — horizontal numbered list ───────────────────────────────────────
function ValuesSection() {
  const { t } = useLanguage();
  const values = [
    { icon: Award,       en: "Excellence",    ar: "التميز",    desc_en: "Highest standards in every project, no exceptions.", desc_ar: "أعلى المعايير في كل مشروع، بلا استثناء." },
    { icon: CheckCircle, en: "Integrity",     ar: "النزاهة",   desc_en: "Transparent, ethical, and accountable at every step.", desc_ar: "شفاف وأخلاقي ومساءل في كل خطوة." },
    { icon: Users,       en: "Community",     ar: "المجتمع",   desc_en: "Spaces that enrich lives and strengthen neighborhoods.", desc_ar: "مساحات تثري الحياة وتعزز الأحياء." },
    { icon: TrendingUp,  en: "Innovation",    ar: "الابتكار",  desc_en: "Pioneering design and smarter ways to develop.", desc_ar: "تصميم رائد وطرق أذكى للتطوير." },
    { icon: Star,        en: "Sustainability",ar: "الاستدامة", desc_en: "Eco-conscious development built for future generations.", desc_ar: "تطوير واعٍ بيئياً مبني للأجيال القادمة." },
    { icon: Building2,   en: "Quality",       ar: "الجودة",    desc_en: "Premium materials and craftsmanship, inside and out.", desc_ar: "مواد وحرفية متميزة من الداخل والخارج." },
  ];

  return (
    <section className="py-[100px] bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-6">

        <FadeIn className="mb-14">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-[#C9A800]" />
            <span className="text-[#C9A800] text-xs uppercase tracking-[0.2em]">{t("What We Stand For", "ما نؤمن به")}</span>
          </div>
          <h2 className="text-white" style={{ fontSize: "clamp(1.6rem, 2.8vw, 2.4rem)", fontWeight: 700 }}>
            {t("Our Core Values", "قيمنا الأساسية")}
          </h2>
        </FadeIn>

        {/* List style — 2 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-white/10 rounded-2xl overflow-hidden">
          {values.map((v, i) => (
            <FadeIn key={i} delay={i * 0.06}>
              <motion.div
                whileHover={{ backgroundColor: "rgba(201,168,0,0.04)" }}
                className="flex items-start gap-5 p-7 border-b border-r-0 md:border-r border-white/10 last:border-b-0 group transition-colors duration-300"
                style={{ borderBottom: i >= values.length - 2 ? "none" : undefined }}
              >
                <span className="text-[#C9A800]/30 shrink-0 mt-1" style={{ fontWeight: 800, fontSize: "0.85rem" }}>
                  0{i + 1}
                </span>
                <div className="w-9 h-9 rounded-xl bg-white/5 group-hover:bg-[#C9A800] flex items-center justify-center shrink-0 transition-all duration-300">
                  <v.icon size={16} className="text-[#C9A800] group-hover:text-black transition-colors duration-300" />
                </div>
                <div>
                  <p className="text-white mb-1" style={{ fontWeight: 600 }}>{t(v.en, v.ar)}</p>
                  <p className="text-white/40 text-sm leading-relaxed">{t(v.desc_en, v.desc_ar)}</p>
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── WHY CHOOSE US — alternating rows ────────────────────────────────────────
function WhySection() {
  const { t } = useLanguage();
  const reasons = [
    {
      icon: Shield,
      en: "Proven Track Record",
      ar: "سجل حافل بالإنجازات",
      desc_en: "Over 15 years and SAR 2 billion in completed projects. Our results don't require marketing — they speak for themselves across thousands of satisfied clients.",
      desc_ar: "أكثر من 15 عاماً و2 مليار ريال في مشاريع مكتملة. نتائجنا لا تحتاج إلى تسويق — تتحدث عن نفسها عبر الآلاف من العملاء الراضين.",
      stat: "98%", stat_label_en: "On-time delivery", stat_label_ar: "تسليم في الموعد",
    },
    {
      icon: HeartHandshake,
      en: "Client-First Culture",
      ar: "ثقافة العميل أولاً",
      desc_en: "From the first consultation to the final handover — and long after — you're at the center of every decision we make. Our dedicated aftercare team is always one call away.",
      desc_ar: "من أول استشارة حتى التسليم النهائي — وما بعده — أنت في مركز كل قرار. فريق خدمة ما بعد التسليم دائماً على بُعد مكالمة.",
      stat: "5K+", stat_label_en: "Happy clients", stat_label_ar: "عميل سعيد",
    },
    {
      icon: TrendingUp,
      en: "Strong Investment Returns",
      ar: "عوائد استثمارية قوية",
      desc_en: "Our portfolio consistently outperforms market benchmarks. We select prime locations, apply rigorous design standards, and deliver projects that appreciate in value over time.",
      desc_ar: "محفظتنا تتفوق باستمرار على معايير السوق. نختار أفضل المواقع ونطبّق معايير تصميم صارمة ونقدم مشاريع تزداد قيمتها مع الوقت.",
      stat: "2B+", stat_label_en: "SAR portfolio", stat_label_ar: "ريال محفظة",
    },
  ];

  return (
    <section className="py-[100px] bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <FadeIn className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-[#C9A800]" />
            <span className="text-[#C9A800] text-xs uppercase tracking-[0.2em]">{t("Why Choose Us", "لماذا تختارنا")}</span>
          </div>
          <h2 className="text-[#0A0A0A]" style={{ fontSize: "clamp(1.6rem, 2.8vw, 2.4rem)", fontWeight: 700 }}>
            {t("The Bayt Rafal Difference", "الفرق مع بيت رفال")}
          </h2>
        </FadeIn>

        <div className="space-y-0 border-t border-gray-100">
          {reasons.map((r, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <motion.div
                whileHover={{ backgroundColor: "#FAFAFA" }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 py-12 border-b border-gray-100 items-center transition-colors duration-300"
              >
                {/* Number */}
                <div className="lg:col-span-1 hidden lg:flex items-center">
                  <span className="text-gray-200" style={{ fontSize: "2.5rem", fontWeight: 900 }}>
                    0{i + 1}
                  </span>
                </div>

                {/* Icon + title */}
                <div className="lg:col-span-3">
                  <div className="w-12 h-12 rounded-xl bg-[#C9A800]/10 flex items-center justify-center mb-4">
                    <r.icon size={22} className="text-[#C9A800]" />
                  </div>
                  <h3 className="text-[#0A0A0A]" style={{ fontSize: "1.15rem", fontWeight: 700 }}>
                    {t(r.en, r.ar)}
                  </h3>
                </div>

                {/* Description */}
                <div className="lg:col-span-5">
                  <p className="text-gray-500 leading-relaxed">{t(r.desc_en, r.desc_ar)}</p>
                </div>

                {/* Stat */}
                <div className="lg:col-span-3 flex flex-col items-start lg:items-end">
                  <p className="text-[#C9A800]" style={{ fontSize: "2.5rem", fontWeight: 900, lineHeight: 1 }}>
                    {r.stat}
                  </p>
                  <p className="text-gray-400 text-sm mt-1">{t(r.stat_label_en, r.stat_label_ar)}</p>
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── CTA ─────────────────────────────────────────────────────────────────────
function CtaSection() {
  const { t } = useLanguage();
  return (
    <section className="py-[100px] bg-[#F8F6F2]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          <FadeIn direction="left">
            <div className="relative rounded-2xl overflow-hidden shadow-xl" style={{ height: 400 }}>
              <img src={COMMIT_IMG} alt="commitment" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/50 to-transparent" />
              <div className="absolute bottom-6 left-6">
                <p className="text-[#C9A800] text-xs uppercase tracking-widest mb-1">{t("Our Warranty", "ضماننا")}</p>
                <p className="text-white" style={{ fontWeight: 700, fontSize: "1.1rem" }}>
                  {t("Up to 25-Year Structural Guarantee", "ضمان هيكلي حتى 25 عاماً")}
                </p>
              </div>
            </div>
          </FadeIn>

          <FadeIn direction="right" delay={0.1}>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-px bg-[#C9A800]" />
              <span className="text-[#C9A800] text-xs uppercase tracking-[0.2em]">{t("Work With Us", "تعاون معنا")}</span>
            </div>
            <h2 className="text-[#0A0A0A] mb-5 leading-tight" style={{ fontSize: "clamp(1.6rem, 2.8vw, 2.4rem)", fontWeight: 700 }}>
              {t("Ready to Find Your Next Property?", "مستعد للعثور على عقارك القادم؟")}
            </h2>
            <p className="text-gray-500 leading-relaxed mb-8">
              {t(
                "Whether you're looking for a family home, an investment opportunity, or a commercial space — our team is ready to guide you every step of the way.",
                "سواء كنت تبحث عن منزل عائلي أو فرصة استثمارية أو مساحة تجارية — فريقنا مستعد لإرشادك في كل خطوة."
              )}
            </p>

            {/* Warranty mini-list */}
            <div className="grid grid-cols-2 gap-3 mb-8">
              {[
                { y: "25", en: "Structural warranty", ar: "ضمان هيكلي" },
                { y: "5",  en: "Systems warranty",    ar: "ضمان الأنظمة" },
                { y: "1",  en: "Owners association",  ar: "جمعية الملاك" },
                { y: "∞",  en: "Client support",      ar: "دعم العملاء" },
              ].map((w, i) => (
                <div key={i} className="flex items-center gap-3 bg-white rounded-xl p-4 border border-gray-100">
                  <span className="text-[#C9A800]" style={{ fontWeight: 800, fontSize: "1.3rem", minWidth: 28 }}>{w.y}</span>
                  <span className="text-gray-600 text-sm">{t(w.en, w.ar)}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                to="/book-appointment"
                className="group bg-[#0A0A0A] text-white px-7 py-3.5 rounded-full flex items-center gap-2 hover:bg-[#C9A800] hover:text-black transition-all duration-300 text-sm"
              >
                {t("Book a Consultation", "احجز استشارة")}
                <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="tel:+966XXXXXXXX"
                className="border border-gray-300 text-[#0A0A0A] px-7 py-3.5 rounded-full flex items-center gap-2 hover:border-[#C9A800] hover:text-[#C9A800] transition-all duration-300 text-sm"
              >
                <Phone size={15} />
                {t("Call Us", "اتصل بنا")}
              </a>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

// ─── PAGE ─────────────────────────────────────────────────────────────────────
export function AboutPage() {
  return (
    <div className="bg-white">
      <AboutHero />
      <StorySection />
      <ValuesSection />
      <WhySection />
      <CtaSection />
    </div>
  );
}
