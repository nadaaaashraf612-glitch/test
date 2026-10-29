import { BrowserRouter, Routes, Route, useLocation } from "react-router";
import { useEffect } from "react";
import { LanguageProvider } from "./components/LanguageContext";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { HomePage } from "./components/pages/HomePage";
import { AboutPage } from "./components/pages/AboutPage";
import { ServicesPage } from "./components/pages/ServicesPage";
import { ProjectsPage } from "./components/pages/ProjectsPage";
import { BookAppointmentPage } from "./components/pages/BookAppointmentPage";
import { JoinUsPage } from "./components/pages/JoinUsPage";
import { ServiceDetailPage } from "./components/pages/ServiceDetailPage";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);
  return null;
}

function Layout() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/:slug" element={<ServiceDetailPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/book-appointment" element={<BookAppointmentPage />} />
          <Route path="/join-us" element={<JoinUsPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <LanguageProvider>
        <Layout />
      </LanguageProvider>
    </BrowserRouter>
  );
}
