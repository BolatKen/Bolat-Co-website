import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { CalendarDays, BookOpen, PenTool } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { ConsultationForm } from "./../components/ConsultationForm";

export function BlogPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <div className="pt-24 pb-16">
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
              key={index}
              initial={{ y: 20, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : {}}
              transition={{ delay: index * 0.1 }}
              className="p-6 bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg border border-gray-800 shadow-lg h-full flex flex-col"
            >
              <div className="mb-4 rounded-lg overflow-hidden h-52">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>

              <div className="flex items-center gap-3 text-blue-400 mb-2">
                <post.icon className="w-5 h-5" />
                <span className="text-sm text-gray-400">{post.date}</span>
              </div>
              <h3 className="text-2xl font-bold mb-2">{post.title}</h3>
              <p className="text-gray-400 mb-4">{post.description}</p>
              <div className="mt-auto">
                <Button variant="outline" className="text-black">
                  Читать подробнее
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
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

const posts = [
  {
    icon: BookOpen,
    title: "Как правильно внедрить amoCRM в ритейл",
    description:
      "Пошаговый подход к внедрению CRM в ритейл-бизнес: от первичного аудита до автоматизации процессов.",
    date: "Март 2025",
    image:
      "https://c4.wallpaperflare.com/wallpaper/1020/1/213/world-of-warcraft-battle-for-azeroth-video-games-warcraft-alliance-wallpaper-preview.jpg",
  },
  {
    icon: PenTool,
    title: "Ошибки бизнеса при выборе CRM",
    description:
      "Рассказываем, почему не каждая CRM подходит вам, и как избежать распространённых ошибок.",
    date: "Февраль 2025",
    image:
      "https://c4.wallpaperflare.com/wallpaper/39/346/426/digital-art-men-city-futuristic-night-hd-wallpaper-preview.jpg",
  },
  {
    icon: CalendarDays,
    title: "Что даёт автоматизация клиентского сервиса?",
    description:
      "Узнай, как автоматизация коммуникаций повышает лояльность и увеличивает средний чек.",
    date: "Январь 2025",
    image:
      "https://c4.wallpaperflare.com/wallpaper/39/346/426/digital-art-men-city-futuristic-night-hd-wallpaper-preview.jpg",
  },
];
