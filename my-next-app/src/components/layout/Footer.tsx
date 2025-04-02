//import { Link } from "react-router-dom";
import { MessageSquare, Phone, Rocket } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { FaWhatsapp, FaTelegramPlane, FaInstagram } from "react-icons/fa";

import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

import Link from "next/link";

export function Footer({ onChange }: { onChange: (visible: boolean) => void }) {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.8, // сколько блока должно быть видно
  });

  // Сообщаем родителю при изменении видимости
  useEffect(() => {
    onChange(inView);
  }, [inView]);

  return (
    <footer ref={ref} className="py-12 px-4 border-t border-gray-800">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Rocket className="w-8 h-8 text-blue-500" />
              <span className="text-xl font-bold">Bolat & Co.</span>
            </Link>
            <p className="text-gray-400">
              Ваш надежный партнер в интеграции и автоматизации AmoCRM.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Компания</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link
                  href="/about"
                  className="hover:text-white transition-colors"
                >
                  О нас
                </Link>
              </li>
              <li>
                <Link
                  href="/portfolio"
                  className="hover:text-white transition-colors"
                >
                  Партнеры
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="hover:text-white transition-colors"
                >
                  Блог
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Контакты</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <a
                  href="tel:+77066398062"
                  className="hover:text-white transition-colors"
                >
                  +7 (706) 637-0105
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MessageSquare className="w-4 h-4" />
                <a
                  href="mailto:corp@bolatco.kz"
                  className="hover:text-white transition-colors"
                >
                  corp@bolatco.kz
                </a>
              </li>
            </ul>

            {/* Соцсети */}
            <TooltipProvider>
              <div className="flex gap-4 mt-4">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <a
                      href="https://wa.me/77066398062"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-green-500 transition-colors"
                      aria-label="WhatsApp"
                    >
                      <FaWhatsapp className="w-5 h-5" />
                    </a>
                  </TooltipTrigger>
                  <TooltipContent>WhatsApp</TooltipContent>
                </Tooltip>

                <Tooltip>
                  <TooltipTrigger asChild>
                    <a
                      href="https://t.me/Rizabek_Bolat"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-blue-400 transition-colors"
                      aria-label="Telegram"
                    >
                      <FaTelegramPlane className="w-5 h-5" />
                    </a>
                  </TooltipTrigger>
                  <TooltipContent>Telegram</TooltipContent>
                </Tooltip>

                <Tooltip>
                  <TooltipTrigger asChild>
                    <a
                      href="https://www.instagram.com/bolatandco"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-pink-500 transition-colors"
                      aria-label="Instagram"
                    >
                      <FaInstagram className="w-5 h-5" />
                    </a>
                  </TooltipTrigger>
                  <TooltipContent>Instagram</TooltipContent>
                </Tooltip>
              </div>
            </TooltipProvider>
          </div>
        </div>
      </div>
    </footer>
  );
}
