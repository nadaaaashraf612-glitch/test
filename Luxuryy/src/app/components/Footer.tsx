import { Link } from "react-router";
import { MapPin, Phone, Mail, Instagram, Twitter, Linkedin, Facebook, Youtube } from "lucide-react";
import { useLanguage } from "./LanguageContext";
import logoImg from "figma:asset/Copy_of_output-onlinepngtools__14_.png";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-[#0A0A0A] border-t border-[#C9A800]/20">
      {/* Main Footer */}
  <div className="max-w-7xl mx-auto px-6 py-16">
  {/* استخدمنا flex وتوزيع justify-between لتفادي فراغات الجريد الثابتة */}
  <div className="flex flex-col md:grid md:grid-cols-2 lg:flex lg:flex-row lg:justify-between lg:items-start gap-12 lg:gap-6">
    
    {/* 1. العمود الأول: البراند */}
    <div className="w-full lg:w-[280px] shrink-0">
      <div className="flex items-center gap-3 mb-6">
        <div className="flex items-center gap-3">
  {/* أيقونة اللوجو الجديد الفخمة */}
  <img
    src="https://i.postimg.cc/1XJMyvRz/Copy-of-output-onlinepngtools-(14).png" 
    alt="Bayt Rafal Icon"
    className="h-8 w-auto object-contain"
  />
  
  {/* نصوص اسم الشركة بتنسيق تايبوجرافي نظيف */}
  <div className="flex flex-col justify-center">
    <span className="text-white text-xl font-bold tracking-wider leading-none mb-1 uppercase font-sans">
      Bayt Rafal
    </span>
    <span className="text-white/40 font-medium tracking-wide leading-none capitalize text-[12px]">
      Realestate Development
    </span>
  </div>
</div>
        <div>
          {/* تفاصيل اسم الشركة لو حابة تضيفيها */}
        </div>
      </div>
      <p className="text-white/50 text-sm leading-relaxed mb-6">
        {t(
          "Building the future with luxury, vision, and innovation. Your trusted partner in premium real estate development.",
          "نبني المستقبل بالفخامة والرؤية والابتكار. شريكك الموثوق في التطوير العقاري الراقي."
        )}
      </p>
      <div className="flex gap-4">
        {[Instagram, Twitter, Linkedin, Facebook, Youtube].map((Icon, i) => (
          <a
            key={i}
            href="#"
            className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:border-[#C9A800] hover:text-[#C9A800] transition-all duration-300"
          >
            <Icon size={15} />
          </a>
        ))}
      </div>
    </div>

    {/* 2. العمود الثاني: روابط سريعة — ملموم على قد الكلمة بالظبط لمنع الفراغات */}
    <div className="w-fit shrink-0">
      <h4 className="text-white mb-6 text-sm uppercase tracking-widest whitespace-nowrap">
        {t("Quick Links", "روابط سريعة")}
      </h4>
      <ul className="space-y-3">
        {[
          { href: "/", en: "Home", ar: "الرئيسية" },
          { href: "/about", en: "About Us", ar: "من نحن" },
          { href: "/services", en: "Services", ar: "خدماتنا" },
          { href: "/projects", en: "Projects", ar: "المشاريع" },
          { href: "/join-us", en: "Join Us", ar: "انضم إلينا" },
          { href: "/book-appointment", en: "Book Appointment", ar: "احجز موعد" },
        ].map((link) => (
          <li key={link.href}>
            <Link
              to={link.href}
              className="text-white/50 hover:text-[#C9A800] text-sm transition-colors flex items-center gap-2 group whitespace-nowrap"
            >
              <span className="w-4 h-px bg-[#C9A800]/0 group-hover:bg-[#C9A800] transition-all duration-300" />
              {t(link.en, link.ar)}
            </Link>
          </li>
        ))}
      </ul>
    </div>

    {/* 3. العمود الثالث: اتصل بنا — ملموم على قد الكلمة بالظبط */}
    <div className="w-fit shrink-0">
      <h4 className="text-white mb-6 text-sm uppercase tracking-widest whitespace-nowrap">
        {t("Contact Us", "اتصل بنا")}
      </h4>
      <ul className="space-y-4">
        <li className="flex items-start gap-3 text-white/50 text-sm whitespace-nowrap">
          <MapPin size={15} className="text-[#C9A800] mt-0.5 shrink-0" />
          <span>{t("Riyadh, Kingdom of Saudi Arabia", "الرياض، المملكة العربية السعودية")}</span>
        </li>
        <li className="flex items-center gap-3 text-white/50 text-sm whitespace-nowrap">
          <Phone size={15} className="text-[#C9A800] shrink-0" />
          <span dir="ltr">+966 11 XXX XXXX</span>
        </li>
        <li className="flex items-center gap-3 text-white/50 text-sm whitespace-nowrap">
          <Mail size={15} className="text-[#C9A800] shrink-0" />
          <span>info@baytrafalgroup.com</span>
        </li>
      </ul>
    </div>

    {/* 4. العمود الرابع: النشرة الإخبارية — واخد مساحة محددة وثابتة */}
    <div className="w-full lg:w-[280px] shrink-0">
      <h4 className="text-white mb-6 text-sm uppercase tracking-widest">
        {t("Newsletter", "النشرة الإخبارية")}
      </h4>
      <p className="text-white/50 text-sm mb-4">
        {t("Stay updated with our latest projects and news.", "ابق على اطلاع بأحدث مشاريعنا وأخبارنا.")}
      </p>
      <div className="flex gap-2 w-full">
        <input
          type="email"
          placeholder={t("Your email", "بريدك الإلكتروني")}
          className="flex-1 min-w-0 bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-[#C9A800]/50"
        />
        <button className="bg-[#C9A800] text-black px-4 py-2 rounded-lg text-sm hover:bg-[#E2C84B] transition-colors shrink-0">
          {t("Subscribe", "اشترك")}
        </button>
      </div>
    </div>

  </div>
</div>
  {/* Bottom Bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* 1. حقوق الملكية - على الشمال */}
          <p className="text-white/30 text-xs order-3 md:order-1">
            © 2024 {t("Bayt Rafal Real Estate Development. All rights reserved.", "بيت رفال للتطوير العقاري. جميع الحقوق محفوظة.")}
          </p>
          
          {/* 2. روابط السياسات - في النص بالضبط */}
          <div className="flex gap-6 order-2 md:order-2">
            <a href="#" className="text-white/30 hover:text-[#C9A800] text-xs transition-colors">
              {t("Privacy Policy", "سياسة الخصوصية")}
            </a>
            <a href="#" className="text-white/30 hover:text-[#C9A800] text-xs transition-colors">
              {t("Terms of Use", "شروط الاستخدام")}
            </a>
          </div>

          {/* 3. لوجو شركة التصميم - على اليمين */}
          <div className="flex items-center gap-2 order-1 md:order-3 bg-white/[0.02] border border-white/5 px-3 py-1.5 rounded-full">
            <span className="text-white/30 text-[11px]">{t("Designed by", "تصميم وتنفيذ")}</span>
            <div className="flex items-center gap-1.5">
              <img
                src="https://i.postimg.cc/yYmNSR4C/PUIUX-3.png" 
                alt="Designer Logo"
                className="h-6
              w-auto object-contain opacity-70"
              />
              
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}