import Head from "next/head";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ConsultationForm } from "@/components/ConsultationForm";
import { formatDate } from "@/components/ui/formatDate";
import Link from "next/link";
import { GetStaticProps } from "next";

import ScrollToTop from "@/components/ScrollToTop"; // Импортируем компонент

import { Navigation } from "@/components/layout/Navigation";

import { Footer } from "@/components/layout/Footer";

type BlogPost = {
  id: string;
  title: string;
  description: string;
  slug: string;
  body: string;
  date: string;
  image: string;
};

export const getStaticProps: GetStaticProps = async () => {
  try {
    const res = await fetch(
      "https://backend-for-bolat-co.onrender.com/articles/"
    );
    const posts: BlogPost[] = await res.json();

    return {
      props: { posts },
      revalidate: 60, // обновлять раз в 60 сек
    };
  } catch (error) {
    return {
      props: { posts: [], error: "Ошибка загрузки статей" },
    };
  }
};

export default function BlogPage({
  posts,
  error,
}: {
  posts: BlogPost[];
  error?: string;
}) {
  const [footerVisible, setFooterVisible] = useState(false);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="pt-24 pb-16">
        <Head>
          <title>Блог | Bolat & Co.</title>
          <meta
            name="description"
            content="Здесь мы делимся опытом, кейсами и знаниями в мире CRM, автоматизации и продаж."
          />
        </Head>
        <Navigation />
        <ScrollToTop />
        <div className="container mx-auto max-w-6xl px-4">
          {/* Header */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Блог{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
                Bolat & Co.
              </span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Здесь мы делимся опытом, кейсами и знаниями в мире CRM,
              автоматизации и продаж.
            </p>
            {error && <p className="text-red-500 mt-4">{error}</p>}
            {!error && posts.length === 0 && (
              <p className="text-gray-400 mt-4">Нет статей</p>
            )}
          </motion.div>
          {/* Blog Posts */}
          <motion.div
            ref={ref}
            initial={{ y: 20, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            className="grid grid-cols-1 md:grid-cols-2 gap-12"
          >
            {posts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ y: 20, opacity: 0 }}
                animate={inView ? { y: 0, opacity: 1 } : {}}
                transition={{ delay: index * 0.1 }}
                className="p-6 bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg border border-gray-800 shadow-lg h-full flex flex-col"
              >
                <div className="mb-4 rounded-lg overflow-hidden h-52">
                  <Link href={`/blog/${post.slug}`}>
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105 cursor-pointer"
                    />
                  </Link>
                </div>
                <div className="flex items-center gap-3 text-blue-400 mb-2">
                  <span className="text-sm text-gray-400">
                    {formatDate(post.date)}
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-2">{post.title}</h3>
                <p className="text-gray-400 mb-4">{post.description}</p>
                <div className="mt-auto">
                  <Link href={`/blog/${post.slug}`}>
                    <Button className="bg-blue-600 text-white hover:bg-blue-700 cursor-pointer">
                      Читать подробнее
                    </Button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
          {/* CTA */}
          <Button
            size="lg"
            className="fixed bottom-4 right-4 z-50 bg-blue-600 hover:bg-blue-700 text-lg px-8 py-6 rounded-sm shadow-lg cursor-pointer"
            onClick={() => setIsOpen(true)}
          >
            Бесплатная консультация
          </Button>
          <ConsultationForm isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
      </div>
      <Footer onChange={setFooterVisible} />
    </>
  );
}
