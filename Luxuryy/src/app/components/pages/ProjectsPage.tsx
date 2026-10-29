import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "motion/react";
import { MapPin, ChevronDown, X, Calendar, TrendingUp } from "lucide-react";
import { useLanguage } from "../LanguageContext";

const HERO_IMG = "https://images.unsplash.com/photo-1582530239825-1878a59deeb1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920";

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

interface Project {
  id: number;
  name_en: string; name_ar: string;
  location_en: string; location_ar: string;
  type: "residential" | "commercial";
  status_en: string; status_ar: string;
  progress: number;
  img: string;
  features_en: string[]; features_ar: string[];
  desc_en: string; desc_ar: string;
  launch?: string;
  completion?: string;
}

const CURRENT_PROJECTS: Project[] = [
  {
    id: 1,
    name_en: "Rafal Heights", name_ar: "رفال هايتس",
    location_en: "Riyadh, Al-Malqa", location_ar: "الرياض، الملقا",
    type: "residential", status_en: "Under Construction", status_ar: "قيد الإنشاء",
    progress: 85,
    img: "https://images.unsplash.com/photo-1564078516393-cf04bd966897?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    features_en: ["200 luxury apartments", "Rooftop pool", "Smart home", "24/7 security"],
    features_ar: ["200 شقة فاخرة", "مسبح على السطح", "منزل ذكي", "أمن على مدار الساعة"],
    desc_en: "A landmark residential tower in the heart of Al-Malqa, offering premium apartments with stunning city views.",
    desc_ar: "برج سكني بارز في قلب الملقا يقدم شققاً راقية مع إطلالات خلابة على المدينة.",
  },
  {
    id: 2,
    name_en: "Rafal Villas", name_ar: "فلل رفال",
    location_en: "Riyadh, Hittin", location_ar: "الرياض، حطين",
    type: "residential", status_en: "Delivered", status_ar: "تم التسليم",
    progress: 100,
    img: "https://images.unsplash.com/photo-1627616010739-78ee1aacf431?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    features_en: ["60 luxury villas", "Private pools", "Landscaped gardens", "Community clubhouse"],
    features_ar: ["60 فيلا فاخرة", "مسابح خاصة", "حدائق منسقة", "نادي اجتماعي"],
    desc_en: "An exclusive gated community of luxury villas in prime Hittin, each with private pools and lush landscaping.",
    desc_ar: "مجمع مسوّر حصري من الفلل الفاخرة في حطين الراقية، كل منها مزود بمسبح خاص.",
  },
  {
    id: 3,
    name_en: "Rafal Residences", name_ar: "سكن رفال",
    location_en: "Jeddah, Al-Shati", location_ar: "جدة، الشاطئ",
    type: "residential", status_en: "Under Construction", status_ar: "قيد الإنشاء",
    progress: 60,
    img: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    features_en: ["Sea view apartments", "Beach access", "Infinity pool", "Concierge service"],
    features_ar: ["شقق بإطلالة بحرية", "وصول للشاطئ", "مسبح لانهائي", "خدمة كونسيرج"],
    desc_en: "Waterfront luxury residences along Jeddah's prestigious Al-Shati coastline.",
    desc_ar: "مساكن فاخرة على الواجهة البحرية على طول ساحل الشاطئ الراقي في جدة.",
  },
  {
    id: 4,
    name_en: "Rafal Business Tower", name_ar: "برج رفال التجاري",
    location_en: "Riyadh, KAFD", location_ar: "الرياض، مركز الملك عبدالله",
    type: "commercial", status_en: "Under Construction", status_ar: "قيد الإنشاء",
    progress: 70,
    img: "https://images.unsplash.com/photo-1619218070141-bcfeb8b93074?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    features_en: ["Grade A offices", "Conference facilities", "Retail ground floor", "Smart building systems"],
    features_ar: ["مكاتب من الفئة A", "مرافق المؤتمرات", "طابق أرضي تجاري", "أنظمة المباني الذكية"],
    desc_en: "A prestigious 30-story business tower in KAFD, Saudi Arabia's financial hub.",
    desc_ar: "برج تجاري فاخر من 30 طابقاً في مركز الملك عبدالله المالي.",
  },
  {
    id: 5,
    name_en: "Rafal Mall", name_ar: "مول رفال",
    location_en: "Riyadh, Olaya", location_ar: "الرياض، العليا",
    type: "commercial", status_en: "Delivered", status_ar: "تم التسليم",
    progress: 100,
    img: "https://images.unsplash.com/photo-1587410198315-1f277736e66d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    features_en: ["150+ retail stores", "Dining & entertainment", "Anchor hypermarket", "Multi-level parking"],
    features_ar: ["+150 متجر", "مطاعم وترفيه", "هايبرماركت رئيسي", "مواقف متعددة الطوابق"],
    desc_en: "A premier retail and lifestyle destination in the heart of Olaya, Riyadh's commercial core.",
    desc_ar: "وجهة بيع بالتجزئة وأسلوب حياة متميزة في قلب العليا.",
  },
  {
    id: 6,
    name_en: "Rafal Compound", name_ar: "مجمع رفال السكني",
    location_en: "Dammam, Al-Faisaliah", location_ar: "الدمام، الفيصلية",
    type: "residential", status_en: "Delivered", status_ar: "تم التسليم",
    progress: 100,
    img: "https://images.unsplash.com/photo-1776762893257-fe5f9bd4b258?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    features_en: ["120 residential units", "Community pool", "Children's play area", "Covered parking"],
    features_ar: ["120 وحدة سكنية", "مسبح مجتمعي", "منطقة ألعاب للأطفال", "مواقف مغطاة"],
    desc_en: "A fully integrated residential compound in Dammam offering modern family living.",
    desc_ar: "مجمع سكني متكامل في الدمام يوفر حياة عائلية عصرية.",
  },
];

const UPCOMING_PROJECTS: Project[] = [
  {
    id: 7,
    name_en: "Rafal Garden Estate", name_ar: "مجمع رفال الحديقة",
    location_en: "Riyadh, North Ring", location_ar: "الرياض، الطريق الدائري الشمالي",
    type: "residential", status_en: "Coming Soon", status_ar: "قريباً",
    progress: 0,
    launch: "Q1 2025", completion: "Q4 2027",
    img: "https://images.unsplash.com/photo-1776762893257-fe5f9bd4b258?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    features_en: ["Eco-friendly design", "Community gardens", "Smart infrastructure", "Retail promenade"],
    features_ar: ["تصميم صديق للبيئة", "حدائق مجتمعية", "بنية تحتية ذكية", "ممشى تجاري"],
    desc_en: "A next-generation residential estate set around expansive landscaped gardens on Riyadh's North Ring.",
    desc_ar: "مجمع سكني من الجيل التالي يمتد حول حدائق منسقة واسعة على الطريق الدائري الشمالي بالرياض.",
  },
  {
    id: 8,
    name_en: "Rafal Waterfront", name_ar: "واجهة رفال البحرية",
    location_en: "Jeddah, Obhur", location_ar: "جدة، أبحر",
    type: "residential", status_en: "Coming Soon", status_ar: "قريباً",
    progress: 0,
    launch: "Q2 2025", completion: "Q1 2028",
    img: "https://images.unsplash.com/photo-1627616010739-78ee1aacf431?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    features_en: ["Private marina", "Beach villas", "Water sports facilities", "5-star amenities"],
    features_ar: ["مارينا خاصة", "فلل شاطئية", "مرافق الرياضات المائية", "مرافق 5 نجوم"],
    desc_en: "An exclusive waterfront residential community on Jeddah's sought-after Obhur coastline.",
    desc_ar: "مجتمع سكني حصري على الواجهة البحرية على ساحل أبحر المرغوب في جدة.",
  },
  {
    id: 9,
    name_en: "Rafal Plaza", name_ar: "بلازا رفال",
    location_en: "Riyadh, KAFD", location_ar: "الرياض، مركز الملك عبدالله",
    type: "commercial", status_en: "Coming Soon", status_ar: "قريباً",
    progress: 0,
    launch: "Q3 2025", completion: "Q2 2028",
    img: "https://images.unsplash.com/photo-1619218070141-bcfeb8b93074?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    features_en: ["Mixed-use podium", "Premium retail", "F&B terraces", "Event spaces"],
    features_ar: ["بودیوم متعدد الاستخدامات", "بيع بالتجزئة الراقية", "تراسات مطاعم", "مساحات للفعاليات"],
    desc_en: "A mixed-use commercial plaza at the heart of KAFD, designed as a destination for business and lifestyle.",
    desc_ar: "بلازا تجارية متعددة الاستخدامات في قلب مركز الملك عبدالله المالي.",
  },
  {
    id: 10,
    name_en: "Rafal Tech Hub", name_ar: "مركز رفال التقني",
    location_en: "Riyadh, Riyadh Tech", location_ar: "الرياض، وادي الرياض",
    type: "commercial", status_en: "Coming Soon", status_ar: "قريباً",
    progress: 0,
    launch: "Q4 2025", completion: "Q3 2028",
    img: "https://images.unsplash.com/photo-1628744876497-eb30460be9f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    features_en: ["Innovation labs", "Co-working floors", "Auditorium", "Rooftop gardens"],
    features_ar: ["مختبرات الابتكار", "طوابق عمل مشتركة", "قاعة مؤتمرات", "حدائق على السطح"],
    desc_en: "A tech-focused office campus within Riyadh's emerging innovation district, built for the future of work.",
    desc_ar: "مجمع مكاتب موجّه للتقنية داخل حي الابتكار الناشئ في الرياض، مبني لمستقبل العمل.",
  },
];

// ── STATUS BADGE COLOR ────────────────────────────────────────────────────────
function StatusBadge({ status_en, status_ar, progress }: { status_en: string; status_ar: string; progress: number }) {
  const { t } = useLanguage();
  const color =
    progress === 100 ? "bg-emerald-500/80 text-white"
    : status_en === "Coming Soon" ? "bg-[#C9A800] text-black"
    : "bg-black/60 text-white backdrop-blur-sm";
  return <span className={`text-xs px-3 py-1 rounded-full ${color}`}>{t(status_en, status_ar)}</span>;
}

// ── PROJECT CARD ─────────────────────────────────────────────────────────────
function ProjectCard({ p, onClick, upcoming = false }: { p: Project; onClick: () => void; upcoming?: boolean }) {
  const { t } = useLanguage();
  return (
    <motion.div
      whileHover={{ y: -6 }}
      className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-[#C9A800]/30 hover:shadow-[0_16px_48px_rgba(201,168,0,0.1)] transition-all duration-500 cursor-pointer h-full flex flex-col"
      onClick={onClick}
    >
      <div className="relative h-52 overflow-hidden shrink-0">
        <img src={p.img} alt={t(p.name_en, p.name_ar)} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        <div className="absolute top-3 right-3">
          <StatusBadge status_en={p.status_en} status_ar={p.status_ar} progress={p.progress} />
        </div>
        <div className="absolute top-3 left-3">
          <span className="text-xs px-3 py-1 rounded-full bg-white/90 text-gray-700">
            {p.type === "residential" ? t("Residential", "سكني") : t("Commercial", "تجاري")}
          </span>
        </div>
      </div>

      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-[#0A0A0A] mb-1" style={{ fontWeight: 600 }}>{t(p.name_en, p.name_ar)}</h3>
        <div className="flex items-center gap-1 text-gray-400 text-sm mb-4">
          <MapPin size={13} />
          <span>{t(p.location_en, p.location_ar)}</span>
        </div>

        {upcoming && p.launch ? (
          <div className="grid grid-cols-2 gap-2 mt-auto">
            
            
          </div>
        ) : (
          <div className="mt-auto">
            
            
          </div>
        )}

        <button className="mt-4 w-full border border-[#C9A800]/30 text-[#C9A800] py-2.5 rounded-xl text-sm hover:bg-[#C9A800] hover:text-black transition-all duration-300">
          {t("View Details", "عرض التفاصيل")}
        </button>
      </div>
    </motion.div>
  );
}

// ── PROJECT MODAL ─────────────────────────────────────────────────────────────
function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  const { t } = useLanguage();
  return (
    <motion.div
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.92, y: 24 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.92, y: 24 }}
        className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative h-64">
          <img src={project.img} alt={t(project.name_en, project.name_ar)} className="w-full h-full object-cover rounded-t-3xl" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-t-3xl" />
          <button onClick={onClose} className="absolute top-4 right-4 w-9 h-9 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white hover:text-black transition-all">
            <X size={18} />
          </button>
          <div className="absolute bottom-4 left-5">
            <StatusBadge status_en={project.status_en} status_ar={project.status_ar} progress={project.progress} />
          </div>
        </div>
        <div className="p-8">
          <h2 className="text-[#0A0A0A] mb-1" style={{ fontSize: "1.5rem", fontWeight: 700 }}>{t(project.name_en, project.name_ar)}</h2>
          <div className="flex items-center gap-1 text-gray-400 text-sm mb-5">
            <MapPin size={14} /><span>{t(project.location_en, project.location_ar)}</span>
          </div>
          <p className="text-gray-500 leading-relaxed mb-6">{t(project.desc_en, project.desc_ar)}</p>

         

          {project.launch && (
            <div className="grid grid-cols-2 gap-3 mb-6">
              <div className="bg-[#F8F6F2] rounded-xl p-4">
                <p className="text-[#C9A800] text-xs mb-1">{t("Launch", "الإطلاق")}</p>
                <p className="text-[#0A0A0A]" style={{ fontWeight: 600 }}>{project.launch}</p>
              </div>
              <div className="bg-[#F8F6F2] rounded-xl p-4">
                <p className="text-[#C9A800] text-xs mb-1">{t("Completion", "الإنجاز")}</p>
                <p className="text-[#0A0A0A]" style={{ fontWeight: 600 }}>{project.completion}</p>
              </div>
            </div>
          )}

          <p className="text-[#0A0A0A] text-sm mb-3" style={{ fontWeight: 600 }}>{t("Key Features", "المميزات الرئيسية")}</p>
          <div className="grid grid-cols-2 gap-2 mb-8">
            {project.features_en.map((f, fi) => (
              <div key={fi} className="flex items-center gap-2 text-gray-500 text-sm bg-[#F8F6F2] rounded-lg px-3 py-2">
                <ChevronDown size={13} className="text-[#C9A800] -rotate-90 shrink-0" />
                {t(f, project.features_ar[fi])}
              </div>
            ))}
          </div>
          <div className="flex gap-3">
            <button className="flex-1 bg-[#C9A800] text-black py-3 rounded-xl text-sm hover:bg-[#E2C84B] transition-colors" style={{ fontWeight: 600 }}>
              {t("Request Inquiry", "طلب استفسار")}
            </button>
            <button onClick={onClose} className="flex-1 border border-gray-200 py-3 rounded-xl text-sm text-gray-500 hover:border-[#C9A800] hover:text-[#C9A800] transition-all">
              {t("Close", "إغلاق")}
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

// ── PAGE ──────────────────────────────────────────────────────────────────────
export function ProjectsPage() {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<"current" | "upcoming">("current");
  const [filter, setFilter] = useState<"all" | "residential" | "commercial">("all");
  const [selected, setSelected] = useState<Project | null>(null);

  const isUpcoming = activeTab === "upcoming";
  const projects = isUpcoming ? UPCOMING_PROJECTS : CURRENT_PROJECTS;
  const filtered = projects.filter((p) => filter === "all" || p.type === filter);

  return (
    <div className="bg-white">

      {/* ── HERO ── */}
      <section className="relative w-full overflow-hidden" style={{ minHeight: "62vh" }}>
        <motion.img src={HERO_IMG} alt="Projects"
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ opacity: 0, scale: 1.05 }} animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A]/90 via-[#0A0A0A]/55 to-[#0A0A0A]/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/40 to-transparent" />
        <div className="absolute top-0 left-0 w-1 h-full bg-[#C9A800]" />

        <div className="relative z-10 flex flex-col justify-center min-h-[62vh] px-10 md:px-16 lg:px-24 pt-32 pb-16 max-w-2xl">
          <motion.div initial={{ opacity: 0, x: -24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.15 }}>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-px bg-[#C9A800]" />
              <span className="text-[#C9A800] text-xs uppercase tracking-[0.25em]">{t("Portfolio", "المحفظة")}</span>
            </div>
            <h1 className="text-white leading-[1.08] mb-6" style={{ fontSize: "clamp(2.4rem, 5vw, 4rem)", fontWeight: 800 }}>
              {t("Our", "مشاريعنا")}{" "}<br />
              <em className="not-italic text-[#C9A800]">{t("Projects", "")}</em>
            </h1>
            <p className="text-white/65 leading-relaxed max-w-md" style={{ fontSize: "1.05rem" }}>
              {t(
                "From luxury residences to landmark commercial towers — every project is a statement of our commitment to quality and innovation.",
                "من المساكن الفاخرة إلى الأبراج التجارية البارزة — كل مشروع تعبير عن التزامنا بالجودة والابتكار."
              )}
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── PROJECTS SECTION WITH TABS ── */}
      <section className="py-[100px] bg-white">
        <div className="max-w-7xl mx-auto px-6">

          {/* Header + Tabs */}
          <FadeIn className="mb-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-[#C9A800]" />
              <span className="text-[#C9A800] text-xs uppercase tracking-[0.2em]">{t("Portfolio", "المحفظة")}</span>
            </div>

            {/* Main tabs */}
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div className="flex gap-1 bg-[#F8F6F2] p-1 rounded-2xl">
                {(["current", "upcoming"] as const).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => { setActiveTab(tab); setFilter("all"); }}
                    className="relative px-7 py-2.5 rounded-xl text-sm transition-all duration-300"
                    style={{ fontWeight: 600 }}
                  >
                    {activeTab === tab && (
                      <motion.div
                        layoutId="tab-bg"
                        className="absolute inset-0 bg-[#C9A800] rounded-xl"
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      />
                    )}
                    <span className={`relative z-10 ${activeTab === tab ? "text-black" : "text-gray-500"}`}>
                      {tab === "current" ? t("Current Projects", "المشاريع الحالية") : t("Upcoming Projects", "المشاريع القادمة")}
                    </span>
                  </button>
                ))}
              </div>

              {/* Type filter pills */}
              <div className="flex gap-2">
                {(["all", "residential", "commercial"] as const).map((f) => (
                  <button key={f} onClick={() => setFilter(f)}
                    className={`px-4 py-2 rounded-full text-sm border transition-all duration-300 ${filter === f ? "bg-[#0A0A0A] text-white border-transparent" : "border-gray-200 text-gray-500 hover:border-[#0A0A0A] hover:text-[#0A0A0A]"}`}>
                    {f === "all" ? t("All", "الكل") : f === "residential" ? t("Residential", "سكني") : t("Commercial", "تجاري")}
                  </button>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab + filter}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filtered.map((p, i) => (
                <motion.div
                  key={p.id}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.07, ease: "easeOut" }}
                >
                  <ProjectCard p={p} onClick={() => setSelected(p)} upcoming={isUpcoming} />
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Count */}
          <motion.p
            key={activeTab + filter + "count"}
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
            className="text-center text-gray-400 text-sm mt-10"
          >
            {t(`Showing ${filtered.length} projects`, `عرض ${filtered.length} مشاريع`)}
          </motion.p>
        </div>
      </section>

      <AnimatePresence>
        {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>
    </div>
  );
}
