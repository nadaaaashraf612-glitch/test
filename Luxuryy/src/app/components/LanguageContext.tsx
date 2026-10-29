import { createContext, useContext, useState, ReactNode } from "react";

type Language = "en" | "ar";

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  isRTL: boolean;
  t: (en: string, ar: string) => string;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: "en",
  setLang: () => {},
  isRTL: false,
  t: (en) => en,
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>("en");
  const isRTL = lang === "ar";
  const t = (en: string, ar: string) => (lang === "ar" ? ar : en);

  return (
    <LanguageContext.Provider value={{ lang, setLang, isRTL, t }}>
      <div dir={isRTL ? "rtl" : "ltr"} style={{ fontFamily: "var(--font-primary)" }}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
