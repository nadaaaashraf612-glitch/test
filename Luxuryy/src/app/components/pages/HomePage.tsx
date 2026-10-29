import { useState, useRef } from "react";
import { Link } from "react-router";
import { motion, useInView, AnimatePresence } from "motion/react";
import {
  ChevronDown, ArrowRight, Star, MapPin, Calendar, TrendingUp,
  Building2, Home, Store, BarChart3, Settings, Users,
  Shield, MapPinned, Award, CheckCircle, Phone,
  ChevronLeft, ChevronRight, Quote, Droplets, Layers, Ruler
} from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import { useLanguage } from "../LanguageContext";
import { ClientsSection } from "../ClientsSection";

const HERO_IMAGE = "https://images.unsplash.com/photo-1762337009787-bad651efb880?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxsdXh1cnklMjBtb2Rlcm4lMjBhcmNoaXRlY3R1cmUlMjBidWlsZGluZyUyMGV4dGVyaW9yJTIwbmlnaHR8ZW58MXx8fHwxNzgwODM1MzcwfDA&ixlib=rb-4.1.0&q=80&w=1920";
const INTERIOR_IMAGE = "https://images.unsplash.com/photo-1564078516393-cf04bd966897?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjByZXNpZGVudGlhbCUyMHJlYWwlMjBlc3RhdGUlMjBpbnRlcmlvciUyMGxpdmluZyUyMHJvb218ZW58MXx8fHwxNzgwODM1MzcxfDA&ixlib=rb-4.1.0&q=80&w=1080";
const INTERIOR2_IMAGE = "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080";
const BUILDING_IMAGE = "https://images.unsplash.com/photo-1619218070141-bcfeb8b93074?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080";
const COMMERCIAL_IMAGE = "https://images.unsplash.com/photo-1587410198315-1f277736e66d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080";
const POOL_IMAGE = "https://images.unsplash.com/photo-1627616010739-78ee1aacf431?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080";
const VILLA_IMAGE = "https://images.unsplash.com/photo-1776762893257-fe5f9bd4b258?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080";
const INTERIOR3_IMAGE = "https://images.unsplash.com/photo-1628744876497-eb30460be9f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080";

function SectionWrapper({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function GoldDivider() {
  return (
    <div className="flex items-center gap-3 mb-4">
      <div className="w-12 h-px bg-[#C9A800]" />
      <div className="w-2 h-2 rounded-full bg-[#C9A800]" />
      <div className="w-6 h-px bg-[#C9A800]/50" />
    </div>
  );
}

function CounterStat({ value, label }: { value: string; label: string }) {
  return (
    <div className="text-center">
      <p className="text-3xl md:text-4xl text-[#C9A800] mb-1">{value}</p>
      <p className="text-white/60 text-xs uppercase tracking-wider">{label}</p>
    </div>
  );
}

// ─── HERO SECTION ────────────────────────────────────────────────────────────
const HERO_SLIDES = [
  {
    img: HERO_IMAGE,
    title_en: "Building Dreams,",
    title_ar: "نبني الأحلام،",
    highlight_en: "Crafting Legacies",
    highlight_ar: "نصنع الإرث",
    sub_en: "Premium real estate development with a commitment to excellence, innovation, and lasting value across Saudi Arabia.",
    sub_ar: "تطوير عقاري راقٍ مع الالتزام بالتميز والابتكار والقيمة الدائمة في جميع أنحاء المملكة العربية السعودية.",
  },
  {
    img: VILLA_IMAGE,
    title_en: "Luxury Villas,",
    title_ar: "فلل فاخرة،",
    highlight_en: "Timeless Design",
    highlight_ar: "تصميم خالد",
    sub_en: "Exceptional residential communities crafted for those who appreciate the finest in modern living.",
    sub_ar: "مجتمعات سكنية استثنائية مصممة لمن يقدّرون أرقى مستويات الحياة العصرية.",
  },
  {
    img: BUILDING_IMAGE,
    title_en: "Strategic Locations,",
    title_ar: "مواقع استراتيجية،",
    highlight_en: "Maximum Returns",
    highlight_ar: "أعلى العوائد",
    sub_en: "Prime commercial and residential developments positioned for superior investment performance.",
    sub_ar: "مشاريع تجارية وسكنية متميزة الموقع تحقق أعلى عوائد استثمارية.",
  },
  {
    img: POOL_IMAGE,
    title_en: "World-Class Amenities,",
    title_ar: "مرافق عالمية المستوى،",
    highlight_en: "Elevated Living",
    highlight_ar: "حياة راقية",
    sub_en: "Every detail thoughtfully curated — from resort-style pools to state-of-the-art fitness centers.",
    sub_ar: "كل تفصيل مُعتنى به بدقة — من المسابح الفاخرة إلى مراكز اللياقة المتطورة.",
  },
];

function HeroSection() {
  const { t } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="relative h-screen min-h-[700px] overflow-hidden">
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        className="w-full h-full"
        style={{ position: "absolute", inset: 0 } as React.CSSProperties}
      >
        {HERO_SLIDES.map((slide, i) => (
          <SwiperSlide key={i}>
            <div className="absolute inset-0">
              <img src={slide.img} alt={slide.title_en} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/30" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Gold geometric accents */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#C9A800]/5 rounded-full blur-3xl pointer-events-none z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[#C9A800]/8 rounded-full blur-2xl pointer-events-none z-10" />

      {/* Content — always on top */}
      <div className="absolute inset-0 z-20 flex items-center">
        <div className="max-w-7xl mx-auto px-6 w-full pt-20">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="max-w-3xl"
            >
              <GoldDivider />
              <p className="text-[#C9A800] text-sm uppercase tracking-widest mb-4">
                {t("Bayt Rafal Real Estate Development", "بيت رفال للتطوير العقاري")}
              </p>
              <h1 className="text-white mb-4 leading-tight" style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)", fontWeight: 700 }}>
                {t(HERO_SLIDES[activeIndex].title_en, HERO_SLIDES[activeIndex].title_ar)}
                <br />
                <span className="text-[#C9A800]">
                  {t(HERO_SLIDES[activeIndex].highlight_en, HERO_SLIDES[activeIndex].highlight_ar)}
                </span>
              </h1>
              <p className="text-white/70 text-lg mb-10 max-w-xl leading-relaxed">
                {t(HERO_SLIDES[activeIndex].sub_en, HERO_SLIDES[activeIndex].sub_ar)}
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/projects"
                  className="group bg-[#C9A800] text-black px-8 py-4 rounded-full flex items-center gap-2 hover:bg-[#E2C84B] transition-all duration-300 hover:shadow-[0_0_30px_rgba(201,168,0,0.4)]"
                >
                  {t("View Projects", "استعرض المشاريع")}
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/book-appointment"
                  className="border border-white/30 text-white px-8 py-4 rounded-full hover:border-[#C9A800] hover:text-[#C9A800] transition-all duration-300 backdrop-blur-sm"
                >
                  {t("Book Appointment", "احجز موعد")}
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>

         {/* Slide counter */}
        <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex items-center justify-center gap-3 z-30">
          {HERO_SLIDES.map((_, i) => (
            <div
              key={i}
              className={`h-0.5 rounded-full transition-all duration-500 ${
                i === activeIndex ? "w-10 bg-[#C9A800]" : "w-4 bg-white/30"
              }`}
            />
          ))}
        </div>
      </div>
    </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/40 z-30"
      >
        <ChevronDown size={24} />
      </motion.div>

    </section>
  );
}

// ─── ABOUT SECTION ───────────────────────────────────────────────────────────
function AboutSection() {
  const { t } = useLanguage();

  const pillars = [
    {
      icon: Award,
      en: "Our Vision",
      ar: "رؤيتنا",
      desc_en: "To be Saudi Arabia's most trusted developer — setting new benchmarks of luxury and innovation.",
      desc_ar: "أن نكون المطوّر الأكثر ثقةً في المملكة، ونضع معايير جديدة للفخامة والابتكار.",
    },
    {
      icon: CheckCircle,
      en: "Our Mission",
      ar: "مهمتنا",
      desc_en: "Delivering properties that elevate lifestyles and maximize investment value for generations.",
      desc_ar: "تقديم عقارات ترفع مستوى الحياة وتعظّم قيمة الاستثمار للأجيال القادمة.",
    },
    {
      icon: Star,
      en: "Our Values",
      ar: "قيمنا",
      desc_en: "Integrity, precision, and a relentless pursuit of excellence — from groundbreaking to handover.",
      desc_ar: "النزاهة والدقة والسعي الدؤوب نحو التميّز — من حجر الأساس حتى التسليم.",
    },
  ];

  const stats = [
    { value: "15+", en: "Years", ar: "عاماً" },
    { value: "120+", en: "Projects", ar: "مشروع" },
    { value: "5,000+", en: "Families", ar: "عائلة" },
    { value: "2B+", en: "SAR Portfolio", ar: "ريال محفظة" },
  ];

  return (
    <section className="bg-white py-[100px] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">

          {/* ── Image column ── */}
          <SectionWrapper className="relative">
            {/* Main tall image */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl" style={{ height: "700px" }}>
              <img
                src={INTERIOR_IMAGE}
                alt="Luxury interior"
                className="w-full h-full object-cover"
              />
              {/* Subtle gradient at bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>

            {/* Floating stats card — bottom left */}
            

            {/* Gold accent badge — top left */}
            

            {/* Small overlay image — right side */}
            
          </SectionWrapper>

          {/* ── Content column ── */}
          <SectionWrapper className="lg:pl-6">
            {/* Label */}
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-px bg-[#C9A800]" />
              <p className="text-[#C9A800] text-xs uppercase tracking-[0.2em]">{t("Who We Are?", "من نحن؟")}</p>
            </div>

            {/* Headline */}
            <h2
              className="text-[#0A0A0A] mb-6 leading-tight"
              style={{ fontSize: "clamp(1.9rem, 3.5vw, 3rem)", fontWeight: 700 }}
            >
              {t("A Legacy Built on", "إرث مبنيٌّ على")}{" "}
              <span className="text-[#C9A800]">{t("Excellence", "التميّز")}</span>
            </h2>

            {/* Body */}
            <p className="text-gray-500 leading-relaxed mb-10" style={{ fontSize: "1rem" }}>
              {t(
                "Since 2009, Bayt Rafal has shaped Saudi Arabia's skyline with landmark residential and commercial developments. Each project is a testament to our unwavering commitment to quality, innovation, and the highest standards of modern living.",
                "منذ عام 2009، شكّلت بيت رفال أفق المملكة العربية السعودية بمشاريع سكنية وتجارية بارزة. كل مشروع شاهد على التزامنا الراسخ بالجودة والابتكار وأعلى معايير الحياة العصرية."
              )}
            </p>

            {/* Pillars — clean list style */}
            <div className="space-y-6 mb-10">
              {pillars.map((p, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12, duration: 0.6 }}
                  className="flex items-start gap-4 group"
                >
                  {/* Gold left accent */}
                  <div className="w-10 h-10 rounded-xl bg-[#C9A800]/10 group-hover:bg-[#C9A800] flex items-center justify-center shrink-0 transition-all duration-300 mt-0.5">
                    <p.icon size={18} className="text-[#C9A800] group-hover:text-black transition-colors duration-300" />
                  </div>
                  <div>
                    <p className="text-[#0A0A0A] mb-1" style={{ fontWeight: 600 }}>{t(p.en, p.ar)}</p>
                    <p className="text-gray-400 text-sm leading-relaxed">{t(p.desc_en, p.desc_ar)}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Divider */}
            <div className="w-full h-px bg-gray-100 mb-8" />

            {/* CTA */}
            <Link
              to="/about"
              className="group inline-flex items-center gap-3 bg-[#C9A800] text-black px-8 py-4 rounded-full hover:bg-[#C9A800] hover:text-black transition-all duration-400 text-sm"
            >
              {t("Discover Our Story", "اكتشف قصتنا")}
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </SectionWrapper>

        </div>
      </div>
    </section>
  );
}

// ─── SERVICES SECTION ────────────────────────────────────────────────────────
function ServicesSection() {
  const { t } = useLanguage();
  const services = [
    { icon: Building2, en: "Real Estate Development", ar: "التطوير العقاري", desc_en: "Full-cycle development from land acquisition to handover.", desc_ar: "تطوير متكامل من اقتناء الأرض حتى التسليم." },
    { icon: Home, en: "Residential Projects", ar: "المشاريع السكنية", desc_en: "Premium villas, apartments, and compounds.", desc_ar: "فلل وشقق ومجمعات راقية." },
    { icon: Store, en: "Commercial Projects", ar: "المشاريع التجارية", desc_en: "State-of-the-art offices and retail spaces.", desc_ar: "مكاتب ومساحات تجارية متطورة." },
    { icon: BarChart3, en: "Investment Opportunities", ar: "فرص الاستثمار", desc_en: "High-yield real estate investment portfolios.", desc_ar: "محافظ استثمارية عقارية ذات عائد مرتفع." },
    { icon: Settings, en: "Property Management", ar: "إدارة الممتلكات", desc_en: "End-to-end asset and facility management.", desc_ar: "إدارة الأصول والمرافق من الألف إلى الياء." },
    { icon: Users, en: "Consultation Services", ar: "خدمات الاستشارة", desc_en: "Expert real estate advisory and market insights.", desc_ar: "استشارات عقارية متخصصة ورؤى السوق." },
  ];

  return (
    <section className="bg-[#0A0A0A] py-[100px]">
      <div className="max-w-7xl mx-auto px-6">
        <SectionWrapper className="text-center mb-16">
          
          <p className="text-[#C9A800] text-sm uppercase tracking-widest mb-2">{t("What We Offer", "ما نقدمه")}</p>
          <h2 className="text-white mb-4" style={{ fontSize: "clamp(1.8rem, 3vw, 2.8rem)", fontWeight: 700 }}>
            {t("Our Premium Services", "خدماتنا الراقية")}
          </h2>
          <p className="text-white/50 max-w-xl mx-auto">
            {t("Comprehensive real estate solutions tailored to investors, families, and businesses.", "حلول عقارية شاملة مصممة للمستثمرين والعائلات والشركات.")}
          </p>
        </SectionWrapper>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              whileHover={{ y: -8 }}
              className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-[#C9A800]/40 hover:bg-[#C9A800]/5 transition-all duration-500 cursor-pointer"
            >
              <div className="w-14 h-14 rounded-2xl bg-[#C9A800]/10 group-hover:bg-[#C9A800] flex items-center justify-center mb-6 transition-all duration-300">
                <s.icon size={24} className="text-[#C9A800] group-hover:text-black transition-colors duration-300" />
              </div>
              <h3 className="text-white mb-3" style={{ fontWeight: 600 }}>
                {t(s.en, s.ar)}
              </h3>
              <p className="text-white/50 text-sm leading-relaxed mb-4">
                {t(s.desc_en, s.desc_ar)}
              </p>
              <div className="flex items-center gap-2 text-[#C9A800] text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span>{t("Learn more", "اعرف المزيد")}</span>
                <ArrowRight size={14} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── GUARANTEES SECTION ──────────────────────────────────────────────────────
function GuaranteesSection() {
  const { t } = useLanguage();

  const warranties = [
    {
      years: 5,
      icon: Droplets,
      en: "Plumbing & Electrical Systems",
      ar: "أنظمة السباكة والكهرباء",
    },
    {
      years: 20,
      icon: Building2,
      en: "Building Structural Framework",
      ar: "الهيكل الإنشائي للمبنى",
    },
    {
      years: 1,
      icon: Users,
      en: "Owners Association Management",
      ar: "إدارة جمعية الملاك",
    },
    {
      years: 25,
      icon: Layers,
      en: "Partitions & Aluminum Works",
      ar: "أعمال التقسيمات والألومنيوم",
    },
  ];

  return (
    <section className="bg-white py-[100px] overflow-hidden relative">
      {/* Subtle gold shimmer top-right */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-[#C9A800]/6 rounded-full blur-[80px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Header row */}
        <SectionWrapper className="mb-16">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            <div className="flex flex-col items-center justify-center text-center w-full my-8">
  {/* الـ div الصغيرة الخاصة بكلمة ضماناتنا */}
  <div className="flex items-center justify-center gap-3 mb-4 w-full">
    <p className="text-[#C9A800] text-xs uppercase tracking-[0.2em] font-bold">
      {t("Our Guarantees", "ضماناتنا")}
    </p>
  </div>
  
  {/* العنوان الرئيسي */}
  <h2
    className="text-[#0A0A0A] leading-tight"
    style={{ fontSize: "clamp(1.8rem, 3vw, 2.8rem)", fontWeight: 700 }}
  >
    {t("We Stand Behind", "نقف خلف")}{" "}
    <span className="text-[#C9A800]">{t("Every Project", "كل مشروع")}</span>
  </h2>
</div>

            {/* Total area badge */}
            
          </div>
        </SectionWrapper>

        {/* Warranty cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {warranties.map((w, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.6 }}
              whileHover={{ y: -6 }}
              className="group relative rounded-3xl border-2 border-gray-100 bg-white overflow-hidden transition-all duration-500 hover:border-[#C9A800]/40 hover:shadow-[0_16px_48px_rgba(201,168,0,0.1)] cursor-default"
            >
              {/* Giant year number — watermark */}
              <div
                className="absolute -bottom-4 -right-2 select-none pointer-events-none text-gray-100 group-hover:text-[#C9A800]/10 transition-colors duration-500"
                style={{ fontSize: "9rem", fontWeight: 900, lineHeight: 1 }}
              >
                {w.years}
              </div>

              {/* Top gold accent bar — animates in on hover */}
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#C9A800]/0 to-transparent group-hover:via-[#C9A800] transition-all duration-500" />

              <div className="relative p-8">
                {/* Icon */}
                <div className="w-12 h-12 rounded-2xl bg-[#C9A800]/10 group-hover:bg-[#C9A800] flex items-center justify-center mb-6 transition-all duration-400">
                  <w.icon size={20} className="text-[#C9A800] group-hover:text-black transition-colors duration-400" />
                </div>

                {/* Year + label */}
                <div className="flex items-end gap-2 mb-4">
                  <span
                    className="text-[black] leading-none"
                    style={{ fontSize: "3.5rem", fontWeight: 800, lineHeight: 1 }}
                  >
                    {w.years}
                  </span>
                  <div className="mb-1.5">
                    <p className="text-gray-400 text-xs uppercase tracking-wider leading-tight">
                      {t("Year", "سنة")}
                    </p>
                    <p className="text-gray-300 text-xs uppercase tracking-wider leading-tight">
                      {t("Warranty", "ضمان")}
                    </p>
                  </div>
                </div>

                {/* Category name */}
                <p className="text-[#0A0A0A]/80 group-hover:text-[#0A0A0A] transition-colors duration-300 leading-snug" style={{ fontWeight: 500 }}>
                  {t(w.en, w.ar)}
                </p>

                {/* Bottom separator */}
                <div className="mt-6 w-8 h-px bg-[#C9A800]/30 group-hover:w-16 group-hover:bg-[#C9A800] transition-all duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── PROJECTS SECTION ────────────────────────────────────────────────────────
function ProjectsSection() {
  const { t } = useLanguage();
  const [tab, setTab] = useState<"residential" | "commercial">("residential");
  const [activeIdx, setActiveIdx] = useState(0);
  const swiperRef = useRef<any>(null);

  const projects = {
    residential: [
      { name_en: "Rafal Heights", name_ar: "رفال هايتس", location_en: "Riyadh, Al-Malqa", location_ar: "الرياض، الملقا", progress: 85, status_en: "Under Construction", status_ar: "قيد الإنشاء", img: INTERIOR_IMAGE },
      { name_en: "Rafal Villas", name_ar: "فلل رفال", location_en: "Riyadh, Hittin", location_ar: "الرياض، حطين", progress: 100, status_en: "Delivered", status_ar: "تم التسليم", img: POOL_IMAGE },
      { name_en: "Rafal Residences", name_ar: "سكن رفال", location_en: "Jeddah, Al-Shati", location_ar: "جدة، الشاطئ", progress: 60, status_en: "Under Construction", status_ar: "قيد الإنشاء", img: INTERIOR2_IMAGE },
    ],
    commercial: [
      { name_en: "Rafal Business Tower", name_ar: "برج رفال التجاري", location_en: "Riyadh, KAFD", location_ar: "الرياض، مركز الملك عبدالله", progress: 70, status_en: "Under Construction", status_ar: "قيد الإنشاء", img: BUILDING_IMAGE },
      { name_en: "Rafal Mall", name_ar: "مول رفال", location_en: "Riyadh, Olaya", location_ar: "الرياض، العليا", progress: 100, status_en: "Delivered", status_ar: "تم التسليم", img: COMMERCIAL_IMAGE },
      { name_en: "Rafal Office Park", name_ar: "مجمع مكاتب رفال", location_en: "Dammam, Corniche", location_ar: "الدمام، الكورنيش", progress: 40, status_en: "Upcoming", status_ar: "قادم", img: INTERIOR3_IMAGE },
    ],
  };

  const list = projects[tab];

  return (
    <section className="bg-white py-[100px] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <SectionWrapper className="mb-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <p className="text-[#C9A800] text-sm uppercase tracking-widest mb-2">{t("Portfolio", "المحفظة")}</p>
              <h2 className="text-[#0A0A0A]" style={{ fontSize: "clamp(1.8rem, 3vw, 2.8rem)", fontWeight: 700 }}>
                {t("Current Projects", "المشاريع الحالية")}
              </h2>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex gap-2">
                {(["residential", "commercial"] as const).map((t_key) => (
                  <button
                    key={t_key}
                    onClick={() => { setTab(t_key); setActiveIdx(0); }}
                    className={`px-5 py-2 rounded-full text-sm transition-all duration-300 ${
                      tab === t_key
                        ? "bg-[#C9A800] text-black"
                        : "border border-gray-200 text-gray-500 hover:border-[#C9A800] hover:text-[#C9A800]"
                    }`}
                  >
                    {t_key === "residential" ? t("Residential", "سكني") : t("Commercial", "تجاري")}
                  </button>
                ))}
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => swiperRef.current?.slidePrev()}
                  className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:border-[#C9A800] hover:text-[#C9A800] transition-all duration-300"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  onClick={() => swiperRef.current?.slideNext()}
                  className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:border-[#C9A800] hover:text-[#C9A800] transition-all duration-300"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </SectionWrapper>

        <AnimatePresence mode="wait">
          <motion.div
            key={tab}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
          >
            <Swiper
              modules={[Autoplay]}
              onSwiper={(sw) => { swiperRef.current = sw; }}
              onSlideChange={(sw) => setActiveIdx(sw.activeIndex)}
              autoplay={{ delay: 4000, disableOnInteraction: true }}
              speed={600}
              spaceBetween={24}
              breakpoints={{
                0:   { slidesPerView: 1.1 },
                640: { slidesPerView: 2 },
                1024:{ slidesPerView: 3 },
              }}
            >
              {list.map((p, i) => (
                <SwiperSlide key={i}>
                  <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                    className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-gray-100 transition-all duration-500"
                  >
                    <div className="relative h-52 overflow-hidden">
                      <img
                        src={p.img}
                        alt={t(p.name_en, p.name_ar)}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full">
                        {t(p.status_en, p.status_ar)}
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-[#0A0A0A] mb-1" style={{ fontWeight: 600 }}>
                        {t(p.name_en, p.name_ar)}
                      </h3>
                      <div className="flex items-center gap-1 text-gray-400 text-sm mb-4">
                        <MapPin size={13} />
                        <span>{t(p.location_en, p.location_ar)}</span>
                      </div>
                      <div className="mb-4">
                        
                        
                      </div>
                      <Link
                        to="/projects"
                        className="w-full block text-center border border-[#C9A800]/30 text-[#C9A800] py-2 rounded-xl text-sm hover:bg-[#C9A800] hover:text-black transition-all duration-300"
                      >
                        {t("View Details", "عرض التفاصيل")}
                      </Link>
                    </div>
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-8">
              {list.map((_, i) => (
                <button
                  key={i}
                  onClick={() => swiperRef.current?.slideTo(i)}
                  className="transition-all duration-400"
                  style={{
                    width: i === activeIdx ? 28 : 8,
                    height: 8,
                    borderRadius: 9999,
                    background: i === activeIdx ? "#C9A800" : "#E5E7EB",
                  }}
                />
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

// ─── UPCOMING PROJECTS ───────────────────────────────────────────────────────
function UpcomingSection() {
  const { t } = useLanguage();
  const [tab, setTab] = useState<"residential" | "commercial">("residential");
  const [activeIdx, setActiveIdx] = useState(0);
  const swiperRef = useRef<any>(null);

  const upcoming = {
    residential: [
      { name_en: "Rafal Garden Estate", name_ar: "مجمع رفال الحديقة", location_en: "Riyadh, North Ring", location_ar: "الرياض، الطريق الدائري الشمالي", launch: "Q1 2025", completion: "Q4 2027", img: VILLA_IMAGE },
      { name_en: "Rafal Waterfront", name_ar: "واجهة رفال البحرية", location_en: "Jeddah, Obhur", location_ar: "جدة، أبحر", launch: "Q2 2025", completion: "Q1 2028", img: POOL_IMAGE },
      { name_en: "Rafal Green Hills", name_ar: "رفال جرين هيلز", location_en: "Riyadh, Diriyah", location_ar: "الرياض، الدرعية", launch: "Q3 2025", completion: "Q2 2028", img: INTERIOR_IMAGE },
    ],
    commercial: [
      { name_en: "Rafal Plaza", name_ar: "بلازا رفال", location_en: "Riyadh, KAFD", location_ar: "الرياض، مركز الملك عبدالله", launch: "Q3 2025", completion: "Q2 2028", img: BUILDING_IMAGE },
      { name_en: "Rafal Tech Hub", name_ar: "مركز رفال التقني", location_en: "Riyadh, Riyadh Tech", location_ar: "الرياض، وادي الرياض", launch: "Q4 2025", completion: "Q3 2028", img: COMMERCIAL_IMAGE },
      { name_en: "Rafal Tower", name_ar: "برج رفال", location_en: "Jeddah, Corniche", location_ar: "جدة، الكورنيش", launch: "Q1 2026", completion: "Q4 2028", img: INTERIOR3_IMAGE },
    ],
  };

  const list = upcoming[tab];

  return (
    <section className="bg-[#0A0A0A] py-[100px] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <SectionWrapper className="mb-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <p className="text-[#C9A800] text-sm uppercase tracking-widest mb-2">{t("Future Pipeline", "المستقبل")}</p>
              <h2 className="text-white" style={{ fontSize: "clamp(1.8rem, 3vw, 2.8rem)", fontWeight: 700 }}>
                {t("Upcoming Projects", "المشاريع القادمة")}
              </h2>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex gap-2">
                {(["residential", "commercial"] as const).map((t_key) => (
                  <button
                    key={t_key}
                    onClick={() => { setTab(t_key); setActiveIdx(0); }}
                    className={`px-5 py-2 rounded-full text-sm transition-all duration-300 ${
                      tab === t_key
                        ? "bg-[#C9A800] text-black"
                        : "border border-white/20 text-white/60 hover:border-[#C9A800] hover:text-[#C9A800]"
                    }`}
                  >
                    {t_key === "residential" ? t("Residential", "سكني") : t("Commercial", "تجاري")}
                  </button>
                ))}
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => swiperRef.current?.slidePrev()}
                  className="w-10 h-10 rounded-full border border-white/20 text-white flex items-center justify-center hover:border-[#C9A800] hover:text-[#C9A800] transition-all duration-300"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  onClick={() => swiperRef.current?.slideNext()}
                  className="w-10 h-10 rounded-full border border-white/20 text-white flex items-center justify-center hover:border-[#C9A800] hover:text-[#C9A800] transition-all duration-300"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </SectionWrapper>

        <AnimatePresence mode="wait">
          <motion.div
            key={tab}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
          >
            <Swiper
              modules={[Autoplay]}
              onSwiper={(sw) => { swiperRef.current = sw; }}
              onSlideChange={(sw) => setActiveIdx(sw.activeIndex)}
              autoplay={{ delay: 4500, disableOnInteraction: true }}
              speed={600}
              spaceBetween={24}
              breakpoints={{
                0:   { slidesPerView: 1.1 },
                640: { slidesPerView: 2 },
                1024:{ slidesPerView: 2 },
              }}
            >
              {list.map((p, i) => (
                <SwiperSlide key={i}>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.97 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                    className="group relative overflow-hidden rounded-2xl"
                  >
                    <img
                      src={p.img}
                      alt={t(p.name_en, p.name_ar)}
                      className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <span className="bg-[#C9A800] text-black text-xs px-3 py-1 rounded-full">
                        {t("Coming Soon", "قريباً")}
                      </span>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-white mb-1" style={{ fontWeight: 600 }}>
                        {t(p.name_en, p.name_ar)}
                      </h3>
                      <div className="flex items-center gap-1 text-white/60 text-sm mb-3">
                        <MapPin size={12} />
                        <span>{t(p.location_en, p.location_ar)}</span>
                      </div>
                      
                    </div>
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-8">
              {list.map((_, i) => (
                <button
                  key={i}
                  onClick={() => swiperRef.current?.slideTo(i)}
                  className="transition-all duration-400"
                  style={{
                    width: i === activeIdx ? 28 : 8,
                    height: 8,
                    borderRadius: 9999,
                    background: i === activeIdx ? "#C9A800" : "rgba(255,255,255,0.25)",
                  }}
                />
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

// ─── WHY CHOOSE US ───────────────────────────────────────────────────────────
function WhyChooseUsSection() {
  const { t } = useLanguage();
  const reasons = [
    { icon: Shield, en: "Trusted Developer", ar: "مطور موثوق", desc_en: "15+ years of proven excellence", desc_ar: "+15 عاماً من التميز المثبت" },
    { icon: MapPinned, en: "Prime Locations", ar: "مواقع متميزة", desc_en: "Strategic sites across Saudi Arabia", desc_ar: "مواقع استراتيجية في جميع أنحاء المملكة" },
    { icon: TrendingUp, en: "High ROI", ar: "عائد استثماري مرتفع", desc_en: "Consistent returns for investors", desc_ar: "عوائد ثابتة للمستثمرين" },
    { icon: Award, en: "Premium Quality", ar: "جودة عالية", desc_en: "World-class construction standards", desc_ar: "معايير بناء عالمية المستوى" },
    { icon: Star, en: "Customer Satisfaction", ar: "رضا العملاء", desc_en: "5000+ satisfied clients and counting", desc_ar: "+5000 عميل راضٍ ونمو مستمر" },
    { icon: Building2, en: "Innovative Designs", ar: "تصاميم مبتكرة", desc_en: "Award-winning architecture and design", desc_ar: "معمار وتصميم حائز على جوائز" },
  ];

  return (
    <section className="bg-white py-[100px] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#C9A800]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#C9A800]/5 rounded-full blur-2xl" />
      </div>
      <div className="max-w-7xl mx-auto px-6 relative">
        <SectionWrapper className="text-center mb-16">
          
          <p className="text-[#C9A800] text-sm uppercase tracking-widest mb-2">{t("Why Choose Us?", "لماذا تختارنا؟")}</p>
          <h2 className="text-[#0A0A0A]" style={{ fontSize: "clamp(1.8rem, 3vw, 2.8rem)", fontWeight: 700 }}>
            {t("The Bayt Rafal Advantage", "ميزة بيت رفال")}
          </h2>
        </SectionWrapper>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {reasons.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="group text-center p-8 rounded-2xl border border-gray-100 hover:border-[#C9A800]/30 hover:shadow-[0_8px_40px_rgba(201,168,0,0.1)] transition-all duration-500"
            >
              <div className="w-16 h-16 rounded-full bg-[#C9A800]/10 group-hover:bg-[#C9A800] flex items-center justify-center mx-auto mb-5 transition-all duration-300">
                <r.icon size={26} className="text-[#C9A800] group-hover:text-black transition-colors duration-300" />
              </div>
              <h3 className="text-[#0A0A0A] mb-2" style={{ fontWeight: 600 }}>
                {t(r.en, r.ar)}
              </h3>
              <p className="text-gray-500 text-sm">{t(r.desc_en, r.desc_ar)}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── LOCATION SECTION ────────────────────────────────────────────────────────
function LocationSection() {
  const { t } = useLanguage();

  return (
    <section className="bg-[#F8F6F2] py-[100px]">
      <div className="max-w-7xl mx-auto px-6">
        <SectionWrapper className="text-center mb-12">
          
          <p className="text-[#C9A800] text-sm uppercase tracking-widest mb-2">{t("Find Us", "موقعنا")}</p>
          <h2 className="text-[#0A0A0A]" style={{ fontSize: "clamp(1.8rem, 3vw, 2.8rem)", fontWeight: 700 }}>
            {t("Our Location", "موقعنا")}
          </h2>
        </SectionWrapper>

        {/* Full-width map */}
        <SectionWrapper>
          <div className="w-full rounded-3xl overflow-hidden shadow-2xl border border-[#C9A800]/10" style={{ height: "500px" }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d463376.5887993688!2d46.38621!3d24.68765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f03890d489399%3A0xba974d1c98e79fd5!2sRiyadh%20Saudi%20Arabia!5e0!3m2!1sen!2s!4v1700000000000"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Bayt Rafal Location"
            />
          </div>
        </SectionWrapper>
      </div>
    </section>
  );
}

// ─── TESTIMONIALS ────────────────────────────────────────────────────────────
function TestimonialsSection() {
  const { t } = useLanguage();
  const [active, setActive] = useState(0);
  const testimonials = [
    { name_en: "Abdullah Al-Rashidi", name_ar: "عبدالله الرشيدي", project_en: "Rafal Heights", project_ar: "رفال هايتس", review_en: "An exceptional experience from start to finish. The quality exceeded all expectations and delivery was perfectly on schedule.", review_ar: "تجربة استثنائية من البداية إلى النهاية. الجودة تجاوزت كل التوقعات والتسليم كان في موعده تماماً." },
    { name_en: "Nora Al-Qahtani", name_ar: "نورة القحطاني", project_en: "Rafal Villas", project_ar: "فلل رفال", review_en: "Bayt Rafal transformed our vision of a dream home into reality. The attention to detail and premium finishes are outstanding.", review_ar: "حوّلت بيت رفال رؤيتنا لمنزل الأحلام إلى حقيقة. الاهتمام بالتفاصيل والتشطيبات الراقية مذهلة." },
    { name_en: "Khalid Al-Mansour", name_ar: "خالد المنصور", project_en: "Rafal Business Tower", project_ar: "برج رفال التجاري", review_en: "As an investor, the ROI from Bayt Rafal projects has consistently outperformed the market. Highly recommended.", review_ar: "كمستثمر، العائد على الاستثمار من مشاريع بيت رفال تجاوز السوق باستمرار. أوصي به بشدة." },
  ];

  return (
    null
  );
}

// ─── CTA SECTION ─────────────────────────────────────────────────────────────
function CTASection() {
  const { t } = useLanguage();
  return (
    <section className="relative py-[100px] overflow-hidden">
      <img src={INTERIOR3_IMAGE} alt="cta" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-[#0A0A0A]/85" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#C9A800]/10 to-transparent" />
      <div className="relative max-w-3xl mx-auto px-6 text-center">
        <SectionWrapper>
          
          <h2 className="text-white mb-4" style={{ fontSize: "clamp(1.8rem, 3vw, 2.8rem)", fontWeight: 700 }}>
            {t("Ready to Invest in Your Future?", "هل أنت مستعد للاستثمار في مستقبلك؟")}
          </h2>
          <p className="text-white/60 mb-8 text-lg">
            {t("Speak with our experts today and discover your perfect property.", "تحدث مع خبرائنا اليوم واكتشف عقارك المثالي.")}
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/book-appointment"
              className="bg-[#C9A800] text-black px-10 py-4 rounded-full hover:bg-[#E2C84B] transition-all duration-300 hover:shadow-[0_0_30px_rgba(201,168,0,0.5)]"
            >
              {t("Book a Free Consultation", "احجز استشارة مجانية")}
            </Link>
            <a
              href="tel:+966XXXXXXXX"
              className="border border-white/30 text-white px-10 py-4 rounded-full flex items-center gap-2 hover:border-[#C9A800] hover:text-[#C9A800] transition-all duration-300"
            >
              <Phone size={18} />
              {t("Call Us Now", "اتصل بنا الآن")}
            </a>
          </div>
        </SectionWrapper>
      </div>
    </section>
  );
}

// ─── FULL HOME PAGE ───────────────────────────────────────────────────────────
export function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <GuaranteesSection />
      <ProjectsSection />
      <UpcomingSection />
      <WhyChooseUsSection />
      <ClientsSection />
      <LocationSection />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}
