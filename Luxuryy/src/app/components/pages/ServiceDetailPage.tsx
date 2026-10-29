import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { useParams, Link, useNavigate } from "react-router";
import { CheckCircle, ArrowRight, ArrowLeft, Phone, ChevronRight } from "lucide-react";
import { useLanguage } from "../LanguageContext";
import { SERVICES_DATA } from "./ServicesPage";

function FadeIn({ children, delay = 0, className = "", direction = "up" }: {
  children: React.ReactNode; delay?: number; className?: string; direction?: "up" | "left" | "right";
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const init: any = { opacity: 0 };
  if (direction === "up") init.y = 28;
  if (direction === "left") init.x = -28;
  if (direction === "right") init.x = 28;
  return (
    <motion.div ref={ref} initial={init}
      animate={inView ? { opacity: 1, y: 0, x: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: "easeOut" }} className={className}>
      {children}
    </motion.div>
  );
}

export function ServiceDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const { t, isRTL } = useLanguage();
  const navigate = useNavigate();

  const service = SERVICES_DATA.find((s) => s.slug === slug);

  if (!service) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white gap-4 pt-20">
        <p className="text-gray-400 text-lg">{t("Service not found", "الخدمة غير موجودة")}</p>
        <Link to="/services" className="text-[#C9A800] underline text-sm">
          {t("Back to Services", "العودة للخدمات")}
        </Link>
      </div>
    );
  }

  const otherServices = SERVICES_DATA.filter((s) => s.slug !== slug).slice(0, 3);

  return (
    <div className="bg-white">

      {/* ── HERO ── */}
      <section className="relative w-full overflow-hidden" style={{ minHeight: "55vh" }}>
        <motion.img
          src={service.img}
          alt={t(service.en, service.ar)}
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A]/92 via-[#0A0A0A]/60 to-[#0A0A0A]/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/50 to-transparent" />
        <div className="absolute top-0 left-0 w-1 h-full bg-[#C9A800]" />

        <div className="relative z-10 flex flex-col justify-center min-h-[55vh] px-10 md:px-16 lg:px-24 pt-32 pb-16 max-w-2xl">
          <motion.div initial={{ opacity: 0, x: -24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.1 }}>

            {/* Breadcrumb */}
            <div className="flex items-center gap-2 mb-8 text-white/40 text-xs">
              <Link to="/" className="hover:text-[#C9A800] transition-colors">{t("Home", "الرئيسية")}</Link>
              <ChevronRight size={12} />
              <Link to="/services" className="hover:text-[#C9A800] transition-colors">{t("Services", "الخدمات")}</Link>
              <ChevronRight size={12} />
              <span className="text-[#C9A800]">{t(service.en, service.ar)}</span>
            </div>

            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-[#C9A800]" />
              <span className="text-[#C9A800] text-xs uppercase tracking-[0.25em]">{t("Our Services", "خدماتنا")}</span>
            </div>

            <h1 className="text-white leading-[1.1] mb-5" style={{ fontSize: "clamp(2rem, 4.5vw, 3.5rem)", fontWeight: 800 }}>
              {t(service.en, service.ar)}
            </h1>
            <p className="text-white/60 leading-relaxed max-w-md" style={{ fontSize: "1.05rem" }}>
              {t(service.short_en, service.short_ar)}
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── MAIN CONTENT ── */}
      <section className="py-[100px]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-14">

            {/* Left — description + benefits */}
            <FadeIn direction="left" className="lg:col-span-7">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-[#C9A800] flex items-center justify-center shrink-0">
                  <service.icon size={20} className="text-black" />
                </div>
                <div className="w-8 h-px bg-[#C9A800]" />
              </div>

              <h2 className="text-[#0A0A0A] mb-6 leading-tight" style={{ fontSize: "clamp(1.5rem, 2.5vw, 2rem)", fontWeight: 700 }}>
                {t("About This Service", "عن هذه الخدمة")}
              </h2>

              <p className="text-gray-500 leading-relaxed mb-10" style={{ fontSize: "1.05rem" }}>
                {t(service.desc_en, service.desc_ar)}
              </p>

              {/* Benefits */}
              <h3 className="text-[#0A0A0A] mb-5" style={{ fontWeight: 700 }}>
                {t("Key Benefits", "المزايا الرئيسية")}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
                {service.benefits_en.map((b, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.07 }}
                    className="flex items-center gap-3 bg-[#F8F6F2] rounded-xl px-4 py-3 group hover:bg-[#C9A800]/10 transition-colors duration-300"
                  >
                    <CheckCircle size={16} className="text-[#C9A800] shrink-0" />
                    <span className="text-[#0A0A0A]/80 text-sm">{t(b, service.benefits_ar[i])}</span>
                  </motion.div>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap gap-3">
                <Link
                  to="/book-appointment"
                  className="group bg-[#C9A800] text-black px-8 py-4 rounded-full flex items-center gap-2 hover:bg-[#E2C84B] transition-all duration-300 hover:shadow-[0_0_30px_rgba(201,168,0,0.4)] text-sm"
                  style={{ fontWeight: 600 }}
                >
                  {t("Book a Consultation", "احجز استشارة")}
                  <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <a
                  href="tel:+966XXXXXXXX"
                  className="border border-gray-200 text-[#0A0A0A] px-8 py-4 rounded-full flex items-center gap-2 hover:border-[#C9A800] hover:text-[#C9A800] transition-all duration-300 text-sm"
                >
                  <Phone size={15} />
                  {t("Call Us", "اتصل بنا")}
                </a>
              </div>
            </FadeIn>

            {/* Right — How it works */}
            <FadeIn direction="right" delay={0.15} className="lg:col-span-5">
              <div className="bg-[#0A0A0A] rounded-3xl p-8 sticky top-28">
                <p className="text-[#C9A800] text-xs uppercase tracking-widest mb-6">{t("How It Works", "كيف يعمل")}</p>
                <div className="space-y-0">
                  {service.steps_en.map((step, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="flex gap-4 pb-6 last:pb-0 relative"
                    >
                      {/* Vertical line */}
                      {i < service.steps_en.length - 1 && (
                        <div className="absolute left-4 top-8 bottom-0 w-px bg-white/10" />
                      )}
                      {/* Step number */}
                      <div className="w-8 h-8 rounded-full bg-[#C9A800] text-black flex items-center justify-center shrink-0 text-xs" style={{ fontWeight: 800 }}>
                        {i + 1}
                      </div>
                      <div className="pt-1">
                        <p className="text-white text-sm" style={{ fontWeight: 500 }}>
                          {t(step, service.steps_ar[i])}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-white/10">
                  <p className="text-white/40 text-xs mb-3">{t("Ready to get started?", "مستعد للبدء؟")}</p>
                  <Link
                    to="/book-appointment"
                    className="w-full flex items-center justify-center gap-2 bg-[#C9A800] text-black py-3 rounded-xl text-sm hover:bg-[#E2C84B] transition-all duration-300"
                    style={{ fontWeight: 600 }}
                  >
                    {t("Start Now", "ابدأ الآن")}
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── OTHER SERVICES ── */}
      <section className="py-[100px] bg-[#F8F6F2]">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn className="mb-10">
            <div className="flex items-center justify-between">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-px bg-[#C9A800]" />
                  <span className="text-[#C9A800] text-xs uppercase tracking-[0.2em]">{t("Explore More", "استكشف المزيد")}</span>
                </div>
                <h2 className="text-[#0A0A0A]" style={{ fontSize: "clamp(1.4rem, 2.5vw, 1.9rem)", fontWeight: 700 }}>
                  {t("Other Services", "خدمات أخرى")}
                </h2>
              </div>
              <Link
                to="/services"
                className="hidden md:flex items-center gap-2 text-sm text-[#C9A800] hover:gap-3 transition-all duration-300"
                style={{ fontWeight: 600 }}
              >
                {t("All Services", "جميع الخدمات")}
                <ArrowRight size={14} />
              </Link>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {otherServices.map((s, i) => (
              <FadeIn key={s.slug} delay={i * 0.1}>
                <motion.div whileHover={{ y: -6 }} className="group bg-white rounded-2xl border border-gray-100 hover:border-[#C9A800]/30 hover:shadow-[0_12px_40px_rgba(201,168,0,0.1)] transition-all duration-500 overflow-hidden">
                  <div className="relative h-40 overflow-hidden">
                    <img src={s.img} alt={t(s.en, s.ar)} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-3 left-3 w-9 h-9 rounded-lg bg-[#C9A800] flex items-center justify-center">
                      <s.icon size={17} className="text-black" />
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="text-[#0A0A0A] mb-1" style={{ fontWeight: 600, fontSize: "0.95rem" }}>{t(s.en, s.ar)}</h3>
                    <p className="text-gray-400 text-xs leading-relaxed mb-4">{t(s.short_en, s.short_ar)}</p>
                    <Link
                      to={`/services/${s.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs text-[#C9A800] hover:gap-2.5 transition-all duration-300"
                      style={{ fontWeight: 600 }}
                    >
                      {t("Learn More", "المزيد")}
                      <ArrowRight size={13} />
                    </Link>
                  </div>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
