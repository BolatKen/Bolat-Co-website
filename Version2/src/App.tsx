import { Routes, Route } from "react-router-dom";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { ConsultationForm } from "@/components/ConsultationForm";
import { HomePage } from "@/pages/HomePage";
import { ServicesPage } from "@/pages/ServicesPage";
import { PortfolioPage } from "@/pages/PortfolioPage";
import { IntegrationsPage } from "@/pages/IntegrationsPage";
import { AboutPage } from "@/pages/AboutPage";
import { BlogPage } from "@/pages/Blog/BlogPage";
import { BlogPostPage } from "@/pages/Blog/BlogPostPage";

import { useState } from "react";

import ScrollToTop from "@/components/ScrollToTop"; // Импортируем компонент

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const [footerVisible, setFooterVisible] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage footerVisible={footerVisible} />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/integrations" element={<IntegrationsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:slug" element={<BlogPostPage />} />
      </Routes>

      <Footer onChange={setFooterVisible} />
      <ConsultationForm isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
}

export default App;
