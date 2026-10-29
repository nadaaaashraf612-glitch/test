import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Building2, Home, Store, BarChart3, Settings, Users, ArrowRight } from "lucide-react";
import { Link } from "react-router";
import { useLanguage } from "../LanguageContext";

const HERO_IMG = "https://images.unsplash.com/photo-1486325212027-8081e485255e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920";

export const SERVICES_DATA = [
  {
    slug: "real-estate-development",
    icon: Building2,
    en: "Real Estate Development",
    ar: "التطوير العقاري",
    short_en: "Full-cycle development from land acquisition to handover.",
    short_ar: "تطوير متكامل من اقتناء الأرض حتى التسليم.",
    desc_en: "We handle every phase of the development lifecycle — from identifying and acquiring prime land to master planning, design, construction, and final handover. Our integrated approach ensures quality and efficiency at every step.",
    desc_ar: "نتولى كل مرحلة من مراحل دورة التطوير — من تحديد الأراضي المتميزة واقتنائها إلى التخطيط الرئيسي والتصميم والبناء والتسليم النهائي. نهجنا المتكامل يضمن الجودة والكفاءة في كل خطوة.",
    img: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    benefits_en: ["Land identification & acquisition", "Master planning & design", "Construction management", "Quality control & inspection", "Regulatory approvals", "Project handover"],
    benefits_ar: ["تحديد الأراضي واقتنائها", "التخطيط الرئيسي والتصميم", "إدارة البناء", "مراقبة الجودة والتفتيش", "الموافقات التنظيمية", "تسليم المشروع"],
    steps_en: ["Feasibility study", "Design & approvals", "Construction", "Quality review", "Handover"],
    steps_ar: ["دراسة الجدوى", "التصميم والموافقات", "البناء", "مراجعة الجودة", "التسليم"],
  },
  {
    slug: "residential-projects",
    icon: Home,
    en: "Residential Projects",
    ar: "المشاريع السكنية",
    short_en: "Premium villas, apartments, and gated compounds.",
    short_ar: "فلل وشقق ومجمعات مسوّرة راقية.",
    desc_en: "From luxury villas to modern apartments and gated communities, our residential projects are crafted for those who expect more. Every unit combines thoughtful design, premium materials, and smart home technology to create spaces where families thrive.",
    desc_ar: "من الفلل الفاخرة إلى الشقق الحديثة والمجمعات المسوّرة، مشاريعنا السكنية مصممة لمن يتوقع الأفضل. كل وحدة تجمع بين التصميم المدروس والمواد المتميزة وتكنولوجيا المنزل الذكي.",
    img: "https://images.unsplash.com/photo-1564078516393-cf04bd966897?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    benefits_en: ["Smart home integration", "Premium finishes", "Landscaped gardens", "24/7 security", "Community amenities", "Flexible payment plans"],
    benefits_ar: ["تكامل المنزل الذكي", "تشطيبات راقية", "حدائق منسقة", "أمن على مدار الساعة", "مرافق المجتمع", "خطط دفع مرنة"],
    steps_en: ["Choose your unit", "Reservation", "Financing options", "Construction updates", "Key handover"],
    steps_ar: ["اختر وحدتك", "الحجز", "خيارات التمويل", "تحديثات البناء", "تسليم المفاتيح"],
  },
  {
    slug: "commercial-projects",
    icon: Store,
    en: "Commercial Projects",
    ar: "المشاريع التجارية",
    short_en: "State-of-the-art offices, retail, and mixed-use spaces.",
    short_ar: "مكاتب ومراكز تجزئة ومساحات متعددة الاستخدامات.",
    desc_en: "Our commercial developments are built for productivity, prestige, and long-term value. From Grade A office towers to retail centers and mixed-use destinations, we create environments where businesses can grow and brands can thrive.",
    desc_ar: "مشاريعنا التجارية مبنية للإنتاجية والمكانة والقيمة طويلة الأمد. من أبراج المكاتب من الفئة A إلى مراكز التجزئة والوجهات متعددة الاستخدامات، نخلق بيئات تنمو فيها الأعمال.",
    img: "https://images.unsplash.com/photo-1587410198315-1f277736e66d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    benefits_en: ["Grade A office space", "Retail & F&B zones", "Premium amenities", "Smart building systems", "Ample parking", "Flexible layouts"],
    benefits_ar: ["مساحات مكتبية من الفئة A", "مناطق بيع بالتجزئة ومطاعم", "مرافق متميزة", "أنظمة المباني الذكية", "مواقف واسعة", "تخطيطات مرنة"],
    steps_en: ["Concept design", "Tenant engagement", "Construction", "Fit-out", "Operations launch"],
    steps_ar: ["التصميم المفاهيمي", "تفاعل المستأجرين", "البناء", "التجهيز", "إطلاق العمليات"],
  },
  {
    slug: "investment-opportunities",
    icon: BarChart3,
    en: "Investment Opportunities",
    ar: "فرص الاستثمار",
    short_en: "High-yield real estate investment portfolios.",
    short_ar: "محافظ استثمارية عقارية ذات عائد مرتفع.",
    desc_en: "We offer structured real estate investment opportunities for individuals and institutional investors. Our portfolios are carefully curated to balance risk, maximize returns, and provide transparency at every stage of the investment journey.",
    desc_ar: "نقدم فرص استثمار عقاري منظمة للأفراد والمستثمرين المؤسسيين. محافظنا مختارة بعناية لتحقيق التوازن بين المخاطر وتعظيم العوائد وتوفير الشفافية.",
    img: "https://images.unsplash.com/photo-1619218070141-bcfeb8b93074?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    benefits_en: ["Competitive ROI", "Flexible investment plans", "Portfolio diversification", "Expert advisory", "Transparent reporting", "Exit strategy planning"],
    benefits_ar: ["عائد تنافسي على الاستثمار", "خطط استثمارية مرنة", "تنويع المحفظة", "استشارات متخصصة", "تقارير شفافة", "تخطيط استراتيجية الخروج"],
    steps_en: ["Portfolio review", "Investment plan", "Asset allocation", "Ongoing monitoring", "Returns distribution"],
    steps_ar: ["مراجعة المحفظة", "خطة الاستثمار", "توزيع الأصول", "المتابعة المستمرة", "توزيع العوائد"],
  },
  {
    slug: "property-management",
    icon: Settings,
    en: "Property Management",
    ar: "إدارة الممتلكات",
    short_en: "End-to-end asset and facility management.",
    short_ar: "إدارة الأصول والمرافق من الألف إلى الياء.",
    desc_en: "Protect and grow the value of your real estate portfolio with our comprehensive property management services. From tenant relations and maintenance to financial reporting and legal compliance, we handle everything so you don't have to.",
    desc_ar: "احمِ وانمِّ قيمة محفظتك العقارية بخدمات إدارة الممتلكات الشاملة. من علاقات المستأجرين والصيانة إلى التقارير المالية والامتثال القانوني، نتولى كل شيء.",
    img: "https://images.unsplash.com/photo-1628744876497-eb30460be9f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    benefits_en: ["Tenant management", "Maintenance & repairs", "Financial reporting", "Legal compliance", "Rent collection", "Vacancy minimization"],
    benefits_ar: ["إدارة المستأجرين", "الصيانة والإصلاحات", "التقارير المالية", "الامتثال القانوني", "تحصيل الإيجار", "تقليل الشواغر"],
    steps_en: ["Asset assessment", "Management plan", "Tenant onboarding", "Ongoing operations", "Performance review"],
    steps_ar: ["تقييم الأصول", "خطة الإدارة", "استقبال المستأجرين", "العمليات المستمرة", "مراجعة الأداء"],
  },
  {
    slug: "consultation-services",
    icon: Users,
    en: "Consultation Services",
    ar: "خدمات الاستشارة",
    short_en: "Expert real estate advisory and market insights.",
    short_ar: "استشارات عقارية متخصصة ورؤى السوق.",
    desc_en: "Our advisory team brings deep market knowledge and analytical rigor to every engagement. Whether you need a property valuation, investment strategy, or regulatory guidance, our consultants deliver actionable insights backed by data.",
    desc_ar: "يجلب فريق استشاراتنا معرفة عميقة بالسوق ودقة تحليلية لكل تعامل. سواء احتجت إلى تقييم عقار أو استراتيجية استثمار أو توجيه تنظيمي، يقدم مستشارونا رؤى قابلة للتنفيذ.",
    img: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    benefits_en: ["Market research & analysis", "Property valuation", "Legal & regulatory guidance", "Investment strategy", "Feasibility studies", "Due diligence"],
    benefits_ar: ["بحث وتحليل السوق", "تقييم العقارات", "التوجيه القانوني والتنظيمي", "استراتيجية الاستثمار", "دراسات الجدوى", "العناية الواجبة"],
    steps_en: ["Initial consultation", "Research & analysis", "Strategy development", "Recommendations", "Implementation support"],
    steps_ar: ["الاستشارة الأولية", "البحث والتحليل", "تطوير الاستراتيجية", "التوصيات", "دعم التنفيذ"],
  },
];

function FadeIn({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: "easeOut" }} className={className}>
      {children}
    </motion.div>
  );
}

export function ServicesPage() {
  const { t } = useLanguage();

  return (
    <div className="bg-white">

      {/* ── HERO (same style as AboutPage) ── */}
      <section className="relative w-full overflow-hidden" style={{ minHeight: "62vh" }}>
        <motion.img
          src={HERO_IMG}
          alt="Services"
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A]/90 via-[#0A0A0A]/55 to-[#0A0A0A]/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/40 to-transparent" />
        <div className="absolute top-0 left-0 w-1 h-full bg-[#C9A800]" />

        <div className="relative z-10 flex flex-col justify-center min-h-[62vh] px-10 md:px-16 lg:px-24 pt-32 pb-16 max-w-2xl">
          <motion.div initial={{ opacity: 0, x: -24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.15 }}>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-px bg-[#C9A800]" />
              <span className="text-[#C9A800] text-xs uppercase tracking-[0.25em]">
                {t("What We Offer", "ما نقدمه")}
              </span>
            </div>
            <h1 className="text-white leading-[1.08] mb-6" style={{ fontSize: "clamp(2.4rem, 5vw, 4rem)", fontWeight: 800 }}>
              {t("Our", "خدماتنا")}{" "}
              <br />
              <em className="not-italic text-[#C9A800]">{t("Services", "")}</em>
            </h1>
            <p className="text-white/65 leading-relaxed max-w-md" style={{ fontSize: "1.05rem" }}>
              {t(
                "Comprehensive real estate solutions — from development and investment to management and advisory — all under one trusted name.",
                "حلول عقارية شاملة — من التطوير والاستثمار إلى الإدارة والاستشارة — كلها تحت اسم موثوق واحد."
              )}
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── SERVICES CARDS ── */}
      <section className="py-[100px] bg-white">
        <div className="max-w-7xl mx-auto px-6">

          <FadeIn className="mb-14">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-[#C9A800]" />
              <span className="text-[#C9A800] text-xs uppercase tracking-[0.2em]">{t("All Services", "جميع الخدمات")}</span>
            </div>
            <h2 className="text-[#0A0A0A]" style={{ fontSize: "clamp(1.6rem, 2.8vw, 2.2rem)", fontWeight: 700 }}>
              {t("How Can We Help You?", "كيف يمكننا مساعدتك؟")}
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES_DATA.map((s, i) => (
              <FadeIn key={s.slug} delay={i * 0.08}>
                <motion.div
                  whileHover={{ y: -8 }}
                  className="group bg-white rounded-2xl border border-gray-100 hover:border-[#C9A800]/30 hover:shadow-[0_16px_48px_rgba(201,168,0,0.1)] transition-all duration-500 overflow-hidden flex flex-col"
                >
                  {/* Card image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={s.img}
                      alt={t(s.en, s.ar)}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    {/* Icon badge */}
                    <div className="absolute bottom-4 left-4 w-11 h-11 rounded-xl bg-[#C9A800] flex items-center justify-center shadow-lg">
                      <s.icon size={20} className="text-black" />
                    </div>
                  </div>

                  {/* Card body */}
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="text-[#0A0A0A] mb-2" style={{ fontWeight: 700, fontSize: "1.05rem" }}>
                      {t(s.en, s.ar)}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-1">
                      {t(s.short_en, s.short_ar)}
                    </p>

                    {/* Bottom line */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <div className="w-6 h-px bg-[#C9A800] group-hover:w-10 transition-all duration-500" />
                      <Link
                        to={`/services/${s.slug}`}
                        className="inline-flex items-center gap-2 text-sm text-[#C9A800] hover:gap-3 transition-all duration-300"
                        style={{ fontWeight: 600 }}
                      >
                        {t("Learn More", "المزيد")}
                        <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform duration-300" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA STRIP ── */}
      <section className="py-16 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-[#C9A800] text-xs uppercase tracking-widest mb-2">{t("Get Started", "ابدأ الآن")}</p>
            <h3 className="text-white" style={{ fontSize: "clamp(1.2rem, 2.5vw, 1.8rem)", fontWeight: 700 }}>
              {t("Not sure which service fits your needs?", "غير متأكد من الخدمة المناسبة لك؟")}
            </h3>
          </div>
          <Link
            to="/book-appointment"
            className="shrink-0 group bg-[#C9A800] text-black px-8 py-4 rounded-full flex items-center gap-2 hover:bg-[#E2C84B] transition-all duration-300 hover:shadow-[0_0_30px_rgba(201,168,0,0.4)] text-sm"
            style={{ fontWeight: 600 }}
          >
            {t("Book a Free Consultation", "احجز استشارة مجانية")}
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
}
