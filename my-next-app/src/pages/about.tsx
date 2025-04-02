import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { ConsultationForm } from "@/components/ConsultationForm";
import { useState } from "react";
import ScrollToTop from "@/components/ScrollToTop"; // Импортируем компонент

import Head from "next/head";
import { AboutPage } from "@/components/AboutPage";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const [footerVisible, setFooterVisible] = useState(false);

  return (
    <>
      <Head>
        <title>О нас | Мой сайт</title>
        <meta name="description" content="Информация о нашей компании" />
      </Head>
      <div className="min-h-screen bg-black text-white">
        <Navigation />
        <ScrollToTop />
        <AboutPage />
        <Footer onChange={setFooterVisible} />S
        <ConsultationForm isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    </>
  );
}

export default App;
