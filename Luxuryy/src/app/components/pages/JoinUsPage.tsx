import { useState, useRef } from "react";
import { motion, useInView } from "motion/react";
import { useForm } from "react-hook-form";
import { CheckCircle, Upload, Award, Users, TrendingUp, Coffee, Heart, Globe } from "lucide-react";
import { useLanguage } from "../LanguageContext";

const HERO_IMG = "https://images.unsplash.com/photo-1704040686510-b747ff423ebb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920";

interface FormData {
  name: string;
  email: string;
  mobile: string;
  position: string;
  message: string;
}

const positions = [
  { en: "Real Estate Sales Manager", ar: "مدير مبيعات عقارية" },
  { en: "Project Manager", ar: "مدير مشروع" },
  { en: "Architect / Designer", ar: "مهندس / مصمم" },
  { en: "Financial Analyst", ar: "محلل مالي" },
  { en: "Marketing Specialist", ar: "أخصائي تسويق" },
  { en: "Legal Advisor", ar: "مستشار قانوني" },
  { en: "Customer Relations", ar: "علاقات العملاء" },
  { en: "Other", ar: "أخرى" },
];

export function JoinUsPage() {
  const { t } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [fileName, setFileName] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();

  const onSubmit = async (_data: FormData) => {
    await new Promise((r) => setTimeout(r, 1200));
    setSubmitted(true);
  };

  const benefits = [
    { icon: Award, en: "Career Growth", ar: "النمو المهني", desc_en: "Structured growth paths and leadership programs.", desc_ar: "مسارات نمو منظمة وبرامج قيادية." },
    { icon: TrendingUp, en: "Competitive Salary", ar: "راتب تنافسي", desc_en: "Industry-leading compensation packages.", desc_ar: "حزم تعويضات رائدة في الصناعة." },
    { icon: Heart, en: "Health Benefits", ar: "مزايا صحية", desc_en: "Comprehensive medical insurance for you and family.", desc_ar: "تأمين طبي شامل لك ولعائلتك." },
    { icon: Coffee, en: "Work Culture", ar: "ثقافة العمل", desc_en: "Collaborative, inclusive, and innovative environment.", desc_ar: "بيئة تعاونية وشاملة ومبتكرة." },
    { icon: Globe, en: "Global Exposure", ar: "انكشاف دولي", desc_en: "Work on international-standard projects.", desc_ar: "العمل على مشاريع بمعايير دولية." },
    { icon: Users, en: "Team Excellence", ar: "تميز الفريق", desc_en: "Work alongside industry's top talents.", desc_ar: "العمل جنباً إلى جنب مع أفضل المواهب." },
  ];

  if (submitted) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center pt-20 px-6">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", duration: 0.8 }}
          className="text-center max-w-md"
        >
          <div className="w-24 h-24 rounded-full bg-[#C9A800]/10 flex items-center justify-center mx-auto mb-6">
            <CheckCircle size={48} className="text-[#C9A800]" />
          </div>
          <h2 className="text-[#0A0A0A] mb-3" style={{ fontSize: "2rem", fontWeight: 700 }}>
            {t("Application Received!", "تم استلام طلبك!")}
          </h2>
          <p className="text-gray-500 mb-8">
            {t(
              "Thank you for your interest in joining Bayt Rafal. Our HR team will review your application and reach out within 5 business days.",
              "شكراً لاهتمامك بالانضمام إلى بيت رفال. سيراجع فريق الموارد البشرية طلبك ويتواصل معك خلال 5 أيام عمل."
            )}
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="bg-[#C9A800] text-black px-8 py-3 rounded-full hover:bg-[#E2C84B] transition-all duration-300"
          >
            {t("Submit Another Application", "تقديم طلب آخر")}
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="bg-white">
      {/* ── HERO ── */}
      <section className="relative w-full overflow-hidden" style={{ minHeight: "62vh" }}>
        <motion.img
          src={HERO_IMG} alt="Join Us"
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
              <span className="text-[#C9A800] text-xs uppercase tracking-[0.25em]">{t("Careers", "الوظائف")}</span>
            </div>
            <h1 className="text-white leading-[1.08] mb-6" style={{ fontSize: "clamp(2.4rem, 5vw, 4rem)", fontWeight: 800 }}>
              {t("Join Our", "انضم إلى")}{" "}<br />
              <em className="not-italic text-[#C9A800]">{t("Team", "فريقنا")}</em>
            </h1>
            <p className="text-white/65 leading-relaxed max-w-md" style={{ fontSize: "1.05rem" }}>
              {t("Build your career at one of Saudi Arabia's leading real estate developers.", "ابنِ مسيرتك المهنية مع واحدة من كبار شركات التطوير العقاري في المملكة العربية السعودية.")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Culture & Benefits */}
      <section className="py-[100px] max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-px bg-[#C9A800]" />
            <div className="w-2 h-2 rounded-full bg-[#C9A800]" />
          </div>
          <h2 className="text-[#0A0A0A]" style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 700 }}>
            {t("Why Work With Us", "لماذا تعمل معنا")}
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-16">
          {benefits.map((b, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group text-center p-6 rounded-2xl border border-gray-100 hover:border-[#C9A800]/30 hover:shadow-md transition-all duration-400"
            >
              <div className="w-14 h-14 rounded-full bg-[#C9A800]/10 group-hover:bg-[#C9A800] flex items-center justify-center mx-auto mb-4 transition-all duration-300">
                <b.icon size={24} className="text-[#C9A800] group-hover:text-black transition-colors duration-300" />
              </div>
              <h3 className="text-[#0A0A0A] mb-1 text-sm" style={{ fontWeight: 600 }}>{t(b.en, b.ar)}</h3>
              <p className="text-gray-500 text-xs">{t(b.desc_en, b.desc_ar)}</p>
            </motion.div>
          ))}
        </div>

        {/* Open Positions */}
        <div className="mb-16">
          <h3 className="text-[#0A0A0A] mb-6" style={{ fontWeight: 700 }}>{t("Open Positions", "الوظائف المتاحة")}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {positions.slice(0, 6).map((pos, i) => (
              <div key={i} className="flex items-center justify-between p-4 border border-gray-100 rounded-xl hover:border-[#C9A800]/30 transition-all group">
                <div>
                  <p className="text-[#0A0A0A] text-sm" style={{ fontWeight: 500 }}>{t(pos.en, pos.ar)}</p>
                  <p className="text-gray-400 text-xs">{t("Riyadh, Saudi Arabia", "الرياض، المملكة العربية السعودية")}</p>
                </div>
                <span className="text-xs bg-[#C9A800]/10 text-[#C9A800] px-3 py-1 rounded-full">{t("Full-time", "دوام كامل")}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Application Form */}
        <div className="bg-[#F8F6F2] rounded-3xl p-8 md:p-12">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h3 className="text-[#0A0A0A] mb-2" style={{ fontSize: "1.5rem", fontWeight: 700 }}>
                {t("Apply Now", "قدّم الآن")}
              </h3>
              <p className="text-gray-500 text-sm">{t("Send us your details and we'll be in touch.", "أرسل لنا بياناتك وسنتواصل معك.")}</p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-gray-600 mb-1.5">{t("Full Name *", "الاسم الكامل *")}</label>
                  <input
                    {...register("name", { required: true })}
                    placeholder={t("Your full name", "اسمك الكامل")}
                    className={`w-full border rounded-xl px-4 py-3 text-sm outline-none bg-white transition-all focus:border-[#C9A800] focus:ring-2 focus:ring-[#C9A800]/10 ${errors.name ? "border-red-300" : "border-gray-200"}`}
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-1.5">{t("Email *", "البريد الإلكتروني *")}</label>
                  <input
                    {...register("email", { required: true, pattern: /^\S+@\S+\.\S+$/ })}
                    type="email"
                    placeholder="name@email.com"
                    className={`w-full border rounded-xl px-4 py-3 text-sm outline-none bg-white transition-all focus:border-[#C9A800] focus:ring-2 focus:ring-[#C9A800]/10 ${errors.email ? "border-red-300" : "border-gray-200"}`}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-gray-600 mb-1.5">{t("Mobile *", "الجوال *")}</label>
                  <input
                    {...register("mobile", { required: true })}
                    type="tel"
                    placeholder="+966 5X XXX XXXX"
                    className={`w-full border rounded-xl px-4 py-3 text-sm outline-none bg-white transition-all focus:border-[#C9A800] focus:ring-2 focus:ring-[#C9A800]/10 ${errors.mobile ? "border-red-300" : "border-gray-200"}`}
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-1.5">{t("Position Applied For", "الوظيفة المطلوبة")}</label>
                  <select
                    {...register("position")}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none bg-white transition-all focus:border-[#C9A800] focus:ring-2 focus:ring-[#C9A800]/10"
                  >
                    <option value="">{t("Select position", "اختر الوظيفة")}</option>
                    {positions.map((pos, i) => (
                      <option key={i} value={pos.en}>{t(pos.en, pos.ar)}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* CV Upload */}
              <div>
                <label className="block text-sm text-gray-600 mb-1.5">{t("Upload CV (PDF)", "رفع السيرة الذاتية (PDF)")}</label>
                <label className="flex items-center gap-3 border-2 border-dashed border-gray-200 hover:border-[#C9A800] rounded-xl px-4 py-4 cursor-pointer transition-colors group">
                  <Upload size={18} className="text-gray-400 group-hover:text-[#C9A800] transition-colors" />
                  <span className="text-sm text-gray-400 group-hover:text-[#C9A800] transition-colors">
                    {fileName || t("Click to upload your CV", "انقر لرفع سيرتك الذاتية")}
                  </span>
                  <input
                    type="file"
                    accept=".pdf,.doc,.docx"
                    className="hidden"
                    onChange={(e) => setFileName(e.target.files?.[0]?.name || "")}
                  />
                </label>
              </div>

              <div>
                <label className="block text-sm text-gray-600 mb-1.5">{t("Message", "رسالة")}</label>
                <textarea
                  {...register("message")}
                  rows={4}
                  placeholder={t("Tell us why you'd like to join Bayt Rafal...", "أخبرنا لماذا تريد الانضمام إلى بيت رفال...")}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none bg-white transition-all focus:border-[#C9A800] focus:ring-2 focus:ring-[#C9A800]/10 resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#C9A800] text-black py-4 rounded-xl hover:bg-[#E2C84B] transition-all duration-300 hover:shadow-[0_0_20px_rgba(201,168,0,0.4)] disabled:opacity-60"
              >
                {isSubmitting ? t("Submitting...", "جارٍ الإرسال...") : t("Submit Application", "إرسال الطلب")}
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
