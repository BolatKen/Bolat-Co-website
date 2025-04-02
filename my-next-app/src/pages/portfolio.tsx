import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { ConsultationForm } from "@/components/ConsultationForm";
import { PortfolioPage } from "@/components/PortfolioPage";
import { useState } from "react";
import ScrollToTop from "@/components/ScrollToTop"; // Импортируем компонент

import Head from "next/head";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  //const [footerVisible, setFooterVisible] = useState(false);

  return (
    <>
      <Head>
        <title>Партнеры| Мой сайт</title>
        <meta name="description" content="Информация о наших партнерах" />
      </Head>
      <div className="min-h-screen bg-black text-white">
        <Navigation />
        <ScrollToTop />
        <PortfolioPage />
        <Footer
        //onChange={setFooterVisible}
        />
        <ConsultationForm isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    </>
  );
}

export default App;
