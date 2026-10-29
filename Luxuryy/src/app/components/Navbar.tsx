import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Globe } from "lucide-react";
import { useLanguage } from "./LanguageContext";
import logoImg from "figma:asset/Copy_of_output-onlinepngtools__14_.png";

const navLinks = [
  { href: "/", en: "Home", ar: "الرئيسية" },
  { href: "/about", en: "About Us", ar: "من نحن" },
  { href: "/services", en: "Services", ar: "خدماتنا" },
  { href: "/projects", en: "Projects", ar: "المشاريع" },
  { href: "/join-us", en: "Join Us", ar: "انضم إلينا" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { lang, setLang, t } = useLanguage();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#0A0A0A]/95 backdrop-blur-xl border-b border-[#C9A800]/20 py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-3 group"
          >
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
            <div className="hidden sm:block"></div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`text-sm transition-all duration-300 hover:text-[#C9A800] relative group ${
                  location.pathname === link.href
                    ? "text-[#C9A800]"
                    : "text-white/80"
                }`}
              >
                {t(link.en, link.ar)}
                <span
                  className={`absolute -bottom-1 left-0 h-px bg-[#C9A800] transition-all duration-300 ${
                    location.pathname === link.href
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            ))}
          </div>

          {/* Right Controls */}
          <div className="flex items-center gap-4">
            {/* Language Toggle */}
            <button
              onClick={() =>
                setLang(lang === "en" ? "ar" : "en")
              }
              className="flex items-center gap-1.5 text-white/70 hover:text-[#C9A800] transition-colors text-sm border border-white/20 hover:border-[#C9A800]/50 rounded-full px-3 py-1.5"
            >
              <Globe size={14} />
              <span>
                {lang === "en" ? "العربية" : "English"}
              </span>
            </button>

            {/* Book Appointment CTA */}
            <Link
              to="/book-appointment"
              className="hidden lg:block bg-[#C9A800] text-black text-sm px-5 py-2 rounded-full hover:bg-[#E2C84B] transition-all duration-300 hover:shadow-[0_0_20px_rgba(201,168,0,0.4)]"
            >
              {t("Book Appointment", "احجز موعد")}
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden text-white hover:text-[#C9A800] transition-colors"
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 left-0 right-0 bottom-0 z-40 bg-[#0A0A0A]/98 backdrop-blur-xl flex flex-col items-center justify-center gap-8"
          >
            {navLinks.map((link, i) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <Link
                  to={link.href}
                  className={`text-2xl transition-colors hover:text-[#C9A800] ${
                    location.pathname === link.href
                      ? "text-[#C9A800]"
                      : "text-white"
                  }`}
                >
                  {t(link.en, link.ar)}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: navLinks.length * 0.1 }}
            >
              <Link
                to="/book-appointment"
                className="bg-[#C9A800] text-black px-8 py-3 rounded-full text-lg hover:bg-[#E2C84B] transition-all"
              >
                {t("Book Appointment", "احجز موعد")}
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}