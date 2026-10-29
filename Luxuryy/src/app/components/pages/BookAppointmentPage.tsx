import { useState } from "react";
import { motion } from "motion/react";
import { useForm } from "react-hook-form";
import { CheckCircle, Phone, Mail, MapPin, Calendar } from "lucide-react";
import { useLanguage } from "../LanguageContext";

const HERO_IMG = "https://images.unsplash.com/photo-1765439178218-e54dcbb64bcb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920";

interface FormData {
  fullName: string;
  email: string;
  mobile: string;
  interest: string;
  message: string;
}

export function BookAppointmentPage() {
  const { t } = useLanguage();
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();

  const onSubmit = async (_data: FormData) => {
    await new Promise((r) => setTimeout(r, 1200));
    setSubmitted(true);
  };

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
            {t("Appointment Booked!", "تم حجز الموعد!")}
          </h2>
          <p className="text-gray-500 mb-8">
            {t(
              "Thank you for reaching out. Our team will contact you within 24 hours to confirm your appointment.",
              "شكراً لتواصلك معنا. سيتواصل معك فريقنا خلال 24 ساعة لتأكيد موعدك."
            )}
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="bg-[#C9A800] text-black px-8 py-3 rounded-full hover:bg-[#E2C84B] transition-all duration-300"
          >
            {t("Book Another Appointment", "احجز موعداً آخر")}
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
          src={HERO_IMG} alt="Book Appointment"
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
              <span className="text-[#C9A800] text-xs uppercase tracking-[0.25em]">{t("Get in Touch", "تواصل معنا")}</span>
            </div>
            <h1 className="text-white leading-[1.08] mb-6" style={{ fontSize: "clamp(2.4rem, 5vw, 4rem)", fontWeight: 800 }}>
              {t("Book an", "احجز")}{" "}<br />
              <em className="not-italic text-[#C9A800]">{t("Appointment", "موعداً")}</em>
            </h1>
            <p className="text-white/65 leading-relaxed max-w-md" style={{ fontSize: "1.05rem" }}>
              {t("Schedule a free consultation with our real estate experts.", "احجز استشارة مجانية مع خبراء العقارات لدينا.")}
            </p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 py-[100px]">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Form */}
          <div className="lg:col-span-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white border border-gray-100 rounded-3xl p-8 md:p-10 shadow-lg"
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="w-px h-6 bg-[#C9A800]" />
                <h2 className="text-[#0A0A0A]" style={{ fontWeight: 700 }}>
                  {t("Fill in Your Details", "أدخل بياناتك")}
                </h2>
              </div>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <div>
                  <label className="block text-sm text-gray-600 mb-1.5">{t("Full Name *", "الاسم الكامل *")}</label>
                  <input
                    {...register("fullName", { required: true })}
                    placeholder={t("e.g. Ahmed Al-Rashidi", "مثال: أحمد الراشدي")}
                    className={`w-full border rounded-xl px-4 py-3 text-sm outline-none transition-all duration-200 focus:border-[#C9A800] focus:ring-2 focus:ring-[#C9A800]/10 ${errors.fullName ? "border-red-300 bg-red-50" : "border-gray-200"}`}
                  />
                  {errors.fullName && <p className="text-red-400 text-xs mt-1">{t("Required", "مطلوب")}</p>}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-gray-600 mb-1.5">{t("Email Address *", "البريد الإلكتروني *")}</label>
                    <input
                      {...register("email", { required: true, pattern: /^\S+@\S+\.\S+$/ })}
                      type="email"
                      placeholder="name@email.com"
                      className={`w-full border rounded-xl px-4 py-3 text-sm outline-none transition-all duration-200 focus:border-[#C9A800] focus:ring-2 focus:ring-[#C9A800]/10 ${errors.email ? "border-red-300 bg-red-50" : "border-gray-200"}`}
                    />
                    {errors.email && <p className="text-red-400 text-xs mt-1">{t("Valid email required", "بريد إلكتروني صحيح مطلوب")}</p>}
                  </div>

                  <div>
                    <label className="block text-sm text-gray-600 mb-1.5">{t("Mobile Number *", "رقم الجوال *")}</label>
                    <input
                      {...register("mobile", { required: true })}
                      type="tel"
                      placeholder="+966 5X XXX XXXX"
                      className={`w-full border rounded-xl px-4 py-3 text-sm outline-none transition-all duration-200 focus:border-[#C9A800] focus:ring-2 focus:ring-[#C9A800]/10 ${errors.mobile ? "border-red-300 bg-red-50" : "border-gray-200"}`}
                    />
                    {errors.mobile && <p className="text-red-400 text-xs mt-1">{t("Required", "مطلوب")}</p>}
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-gray-600 mb-1.5">{t("Area of Interest", "مجال الاهتمام")}</label>
                  <select
                    {...register("interest")}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none transition-all duration-200 focus:border-[#C9A800] focus:ring-2 focus:ring-[#C9A800]/10 text-gray-700"
                  >
                    <option value="">{t("Select an option", "اختر خياراً")}</option>
                    <option value="residential">{t("Residential Projects", "المشاريع السكنية")}</option>
                    <option value="commercial">{t("Commercial Projects", "المشاريع التجارية")}</option>
                    <option value="investment">{t("Investment Opportunities", "فرص الاستثمار")}</option>
                    <option value="management">{t("Property Management", "إدارة الممتلكات")}</option>
                    <option value="consultation">{t("General Consultation", "استشارة عامة")}</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm text-gray-600 mb-1.5">{t("Message", "رسالة")}</label>
                  <textarea
                    {...register("message")}
                    rows={5}
                    placeholder={t("Tell us about your needs or any questions...", "أخبرنا عن احتياجاتك أو أي استفسارات...")}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none transition-all duration-200 focus:border-[#C9A800] focus:ring-2 focus:ring-[#C9A800]/10 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#C9A800] text-black py-4 rounded-xl hover:bg-[#E2C84B] transition-all duration-300 hover:shadow-[0_0_20px_rgba(201,168,0,0.4)] disabled:opacity-60"
                >
                  {isSubmitting ? t("Submitting...", "جارٍ الإرسال...") : t("Book Appointment", "احجز موعد")}
                </button>
              </form>
            </motion.div>
          </div>

          {/* Info Sidebar */}
          <div className="lg:col-span-2 space-y-6">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="mb-6">
                <h3 className="text-[#0A0A0A] mb-2" style={{ fontWeight: 700 }}>
                  {t("Get in Touch", "تواصل معنا")}
                </h3>
                <p className="text-gray-500 text-sm">
                  {t("Our team is available 6 days a week to assist you.", "فريقنا متاح 6 أيام في الأسبوع لمساعدتك.")}
                </p>
              </div>

              {[
                { icon: Phone, label_en: "Phone", label_ar: "الهاتف", value: "+966 11 XXX XXXX" },
                { icon: Mail, label_en: "Email", label_ar: "البريد", value: "info@baytrafalgroup.com" },
                { icon: MapPin, label_en: "Head Office", label_ar: "المقر الرئيسي", value_en: "Al-Malqa, Riyadh", value_ar: "الملقا، الرياض" },
                { icon: Calendar, label_en: "Working Hours", label_ar: "ساعات العمل", value_en: "Sat-Thu, 8AM – 6PM", value_ar: "السبت-الخميس، ٨ص – ٦م" },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 p-5 bg-[#F8F6F2] rounded-2xl mb-3">
                  <div className="w-10 h-10 rounded-xl bg-[#C9A800]/10 flex items-center justify-center shrink-0">
                    <item.icon size={18} className="text-[#C9A800]" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs mb-0.5">{t(item.label_en, item.label_ar)}</p>
                    <p className="text-[#0A0A0A] text-sm">{(item as any).value_en ? t((item as any).value_en, (item as any).value_ar) : item.value}</p>
                  </div>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-[#0A0A0A] rounded-2xl p-6 text-center"
            >
              <div className="text-[#C9A800] mb-2" style={{ fontSize: "2rem" }}>🏆</div>
              <h4 className="text-white mb-2" style={{ fontWeight: 600 }}>
                {t("Free Consultation", "استشارة مجانية")}
              </h4>
              <p className="text-white/50 text-sm">
                {t("Your first consultation with our experts is completely free of charge.", "استشارتك الأولى مع خبرائنا مجانية تماماً.")}
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
