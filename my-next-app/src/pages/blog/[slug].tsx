import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ConsultationForm } from "@/components/ConsultationForm";
import { formatDate } from "@/components/ui/formatDate";
import { formatArticleBody } from "@/components/ui/formatArticleBody";

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

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch(
    "https://backend-for-bolat-co.onrender.com/articles/"
  );
  const posts: BlogPost[] = await res.json();

  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug;
  const res = await fetch(
    `https://backend-for-bolat-co.onrender.com/articles/${slug}/`
  );
  const post: BlogPost = await res.json();
  const { toc, html } = formatArticleBody(post.body);

  return {
    props: {
      post,
      toc,
      html,
    },
  };
};

export default function BlogPostPage({
  post,
  toc,
  html,
}: {
  post: BlogPost;
  toc: string;
  html: string;
}) {
  const [isOpen, setIsOpen] = useState(false);

  const [footerVisible, setFooterVisible] = useState(false);
  return (
    <>
      <div className="pt-24 pb-16">
        <Head>
          <title>{post.title} | Bolat & Co.</title>
          <meta name="description" content={post.description} />
        </Head>
        <Navigation />
        <ScrollToTop />
        <div className="container mx-auto max-w-4xl px-4">
          {/* Заголовок */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              {post.title}{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
                | Bolat & Co.
              </span>
            </h1>
            <p className="text-md text-gray-400">{formatDate(post.date)}</p>
          </motion.div>
          {/* Изображение */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="aspect-video rounded-lg overflow-hidden mb-8"
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </motion.div>
          {/* Статья и оглавление */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-800 p-6 md:p-10 rounded-2xl text-gray-300 text-base md:text-lg leading-relaxed break-words overflow-hidden space-y-8"
          >
            {/* Оглавление */}
            <div className="p-6 md:p-8 bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-2xl shadow-md">
              <p className="text-white text-2xl font-bold mb-6 tracking-wide">
                🔎Оглавление
              </p>
              <div
                dangerouslySetInnerHTML={{ __html: toc }}
                className="space-y-3"
              />
            </div>
            {/* Контент статьи */}
            <div
              className="prose prose-invert max-w-none"
              dangerouslySetInnerHTML={{ __html: html }}
            />
          </motion.div>
          {/* Кнопка */}
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
