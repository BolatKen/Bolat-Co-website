import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { useState } from "react";
import ScrollToTop from "@/components/ScrollToTop"; // Импортируем компонент
import Head from "next/head";
import { HomePage } from "@/components/HomePage"; // путь к твоему компоненту
import { GetServerSideProps } from "next";

export default function Home({ data }: { data: any }) {
  const [footerVisible, setFooterVisible] = useState(false);

  return (
    <>
      <Head>
        <title>Главная | Мой сайт</title>
        <meta name="description" content="Главная страница сайта" />
      </Head>
      <div className="min-h-screen bg-black text-white">
        <Navigation />
        <ScrollToTop />
        <HomePage footerVisible={footerVisible} />
        <Footer onChange={setFooterVisible} />
      </div>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  //const res = await fetch("https://api.example.com/home");
  //const data = await res.json();

  const data = [
    { title: "Первая статья", slug: "first", body: "Контент..." },
    { title: "Вторая статья", slug: "second", body: "Контент..." },
  ];

  return {
    props: { data },
  };
};
