import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { ConsultationForm } from "@/components/ConsultationForm";

import { IntegrationsPage } from "@/components/IntegrationsPage";

import { useState } from "react";
import ScrollToTop from "@/components/ScrollToTop"; // Импортируем компонент

import Head from "next/head";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const [footerVisible, setFooterVisible] = useState(false);

  return (
    <>
      <Head>
        <title>Интеграции | Мой сайт</title>
        <meta name="description" content="Информация об интеграциях" />
      </Head>
      <div className="min-h-screen bg-black text-white">
        <Navigation />
        <ScrollToTop />
        <IntegrationsPage />
        <Footer onChange={setFooterVisible} />
        <ConsultationForm isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    </>
  );
}

export default App;
