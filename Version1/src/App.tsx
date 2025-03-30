import { Routes, Route } from "react-router-dom";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { ConsultationForm } from "@/components/ConsultationForm";
import { HomePage } from "@/pages/HomePage";
import { ServicesPage } from "@/pages/ServicesPage";
import { PortfolioPage } from "@/pages/PortfolioPage";
import { IntegrationsPage } from "@/pages/IntegrationPage";
import { AboutPage } from "@/pages/AboutPage";

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/integrations" element={<IntegrationsPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
      <Footer />
      <ConsultationForm />
    </div>
  );
}

export default App;
