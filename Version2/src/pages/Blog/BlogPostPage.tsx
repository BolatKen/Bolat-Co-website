import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ConsultationForm } from "../../components/ConsultationForm";

//for proper date format
import { formatDate } from "@/components/ui/formatDate";

export function BlogPostPage() {
  type BlogPost = {
    id: string;
    title: string;
    description: string;
    slug: string;
    body: string;
    date: string;
    image: string;
  };

  const { slug } = useParams();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await axios.get<BlogPost>(
          `https://backend-for-bolat-co.onrender.com/articles/${slug}/`
        );
        setPost(res.data);
      } catch (err: any) {
        console.log(err.message);
      }
    };

    fetchPosts();
  }, [slug]);

  if (!post) return <div className="text-center pt-24">Загрузка...</div>;

  return (
    <div className="pt-24 pb-16">
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

        {/* Тело статьи */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-800 p-6 rounded-lg text-gray-300 text-lg leading-relaxed whitespace-pre-line break-words overflow-hidden"
        >
          {post.body}
        </motion.div>

        {/* Фиксированная кнопка */}
        <Button
          size="lg"
          className="fixed bottom-4 right-4 z-50 bg-blue-600 hover:bg-blue-700 text-lg px-8 py-6 rounded-sm shadow-lg"
          onClick={() => setIsOpen(true)}
        >
          Бесплатная консультация
        </Button>

        <ConsultationForm isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    </div>
  );
}
