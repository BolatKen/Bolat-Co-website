import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
//import { Link } from "react-router-dom";
import { Rocket } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
//import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { Menu, X } from "lucide-react";

import Link from "next/link";

export function Navigation() {
  const [ref, inView] = useInView({ threshold: 0 });
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <motion.nav
      ref={ref}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-colors duration-300 bg-transparent backdrop-blur-md",
        !inView && "bg-gray-900/90 backdrop-blur-lg border-b border-white/10"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <Rocket className="w-8 h-8 text-blue-500" />
            <span className="text-xl font-bold">Bolat & Co.</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <Link
              href="/services"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Услуги
            </Link>
            <Link
              href="/portfolio"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Партнеры
            </Link>
            <Link
              href="/integrations"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Интеграции
            </Link>
            <Link
              href="/about"
              className="text-gray-300 hover:text-white transition-colors"
            >
              О нас
            </Link>
            <Link
              href="/blog"
              className="block text-gray-300 hover:text-white"
              onClick={() => setMenuOpen(false)}
            >
              Блог
            </Link>
            <a
              href="https://wa.me/77066398062"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-500 hover:text-green-400 transition-colors"
              aria-label="WhatsApp"
            >
              <FaWhatsapp className="w-5 h-5" />
            </a>
            <a
              href="tel:+77066398062"
              className="text-gray-300 hover:text-white transition-colors"
            >
              +7 (706) 637-0105
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-gray-300 hover:text-white focus:outline-none"
            >
              {menuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden mt-2 space-y-4 px-2 pb-4 bg-gray-900/90 rounded-lg">
            <Link
              href="/services"
              className="block text-gray-300 hover:text-white"
              onClick={() => setMenuOpen(false)}
            >
              Услуги
            </Link>
            <Link
              href="/portfolio"
              className="block text-gray-300 hover:text-white"
              onClick={() => setMenuOpen(false)}
            >
              Партнеры
            </Link>
            <Link
              href="/integrations"
              className="block text-gray-300 hover:text-white"
              onClick={() => setMenuOpen(false)}
            >
              Интеграции
            </Link>
            <Link
              href="/about"
              className="block text-gray-300 hover:text-white"
              onClick={() => setMenuOpen(false)}
            >
              О нас
            </Link>

            <Link
              href="/blog"
              className="block text-gray-300 hover:text-white"
              onClick={() => setMenuOpen(false)}
            >
              Блог
            </Link>

            <a
              href="https://wa.me/77066398062"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-green-500 hover:text-green-400"
              aria-label="WhatsApp"
            >
              WhatsApp
            </a>
            <a
              href="tel:+77066398062"
              className="block text-gray-300 hover:text-white"
            >
              +7 (706) 639-8062
            </a>
          </div>
        )}
      </div>
    </motion.nav>
  );
}
