// Импортируем нужные зависимости
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  ArrowRight,
  BarChart3,
  Bot,
  ChevronRight,
  Globe2,
  LayoutDashboard,
  MessageSquare,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
//import { Link } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import { ConsultationForm } from "./../components/ConsultationForm";

import Link from "next/link";

type HomeProps = {
  footerVisible: boolean;
};

export function HomePage({ footerVisible }: HomeProps) {
  //fixing video
  const blockRef2 = useRef(null);
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);
  //

  const [isOpen, setIsOpen] = useState(false);

  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
    threshold: 0.05,
  });
  const [featuresRef, featuresInView] = useInView({
    triggerOnce: true,
    threshold: 0.05,
  });
  const [statsRef, statsInView] = useInView({
    triggerOnce: true,
    threshold: 0.05,
  });
  const [pricingRef, pricingInView] = useInView({
    triggerOnce: true,
    threshold: 0.05,
  });

  const { ref: blockRef, inView: isBlockInView } = useInView({
    triggerOnce: false,
    threshold: 0.2, // сколько блока должно быть видно
  });

  const trustedLogos = [
    "/logos/SDUNEW-Photoroom.png",
    "/logos/Alfarab.jpg",
    "/logos/chunki.jpeg",
    "/logos/royal.png",
  ];

  return (
    <div>
      <ConsultationForm isOpen={isOpen} setIsOpen={setIsOpen} />

      {/* Hero Section */}
      <motion.section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center pt-16 px-4 overflow-hidden"
      >
        {/* Video background */}
        <section ref={blockRef}>
          {isClient && (
            <video
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover z-0 opacity-30"
            >
              <source
                src="https://bolatco.kz/bolatcoamocrm.mp4"
                type="video/mp4"
              />
            </video>
          )}
        </section>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 bg-gradient-to-b from-blue-500/20 via-transparent to-transparent"
        />

        <div className="container mx-auto max-w-6xl relative z-10">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={heroInView ? { y: 0, opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
            className="text-center"
          >
            <Link href="/portfolio">
              <div className="inline-flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full mb-8">
                <span className="text-blue-400">Нам доверяют 50+ компаний</span>
                <div className="flex -space-x-2">
                  {trustedLogos.map((src, i) => (
                    <img
                      key={i}
                      src={src}
                      alt={`Логотип ${i + 1}`}
                      className="w-6 h-6 rounded-full border-2 border-white object-cover"
                    />
                  ))}
                </div>
              </div>
            </Link>

            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={heroInView ? { y: 0, opacity: 1 } : {}}
              transition={{ delay: 0.6 }}
              className="text-5xl md:text-7xl font-bold mb-6"
            >
              Увеличьте продажи с{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
                amoCRM
              </span>
            </motion.h1>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={heroInView ? { y: 0, opacity: 1 } : {}}
              transition={{ delay: 0.8 }}
              className="text-xl text-gray-200 max-w-2xl mx-auto mb-12"
            >
              Пока менеджеры тупят над заявками, твои клиенты уже зависают у
              конкурентов. <strong>Хватит терять бабки!</strong> Подключай
              amoCRM, свяжи онлайн с оффлайном и{" "}
              <strong>начинай возвращать клиентов уже завтра!</strong>
            </motion.p>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={heroInView ? { y: 0, opacity: 1 } : {}}
              transition={{ delay: 1 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-stretch w-full px-4"
            >
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 w-full sm:w-auto px-6 py-4 cursor-pointer"
                onClick={() => setIsOpen(true)}
              >
                Бесплатная консультация{" "}
                <ArrowRight className="ml-2 w-5 h-5   " />
              </Button>
              <Link href="/portfolio" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 hover:text-white w-full sm:w-auto px-6 py-4 cursor-pointer"
                >
                  Посмотреть кейсы <ChevronRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Остальные секции — features, stats, pricing и т.д. */}
      {/* Features Section */}
      <motion.section ref={featuresRef} className="py-20 px-4" id="features">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={featuresInView ? { y: 0, opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Все что нужно для{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
                роста твоего ритейла
              </span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Держи всех клиентов на радаре: с amoCRM менеджеры перестанут
              сливать заявки, а вернуть клиента станет проще, чем потерять!
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ y: 20, opacity: 0 }}
                animate={featuresInView ? { y: 0, opacity: 1 } : {}}
                transition={{ delay: 0.2 + index * 0.1 }}
                className={cn(
                  "p-6 rounded-2xl",
                  "bg-gradient-to-br from-gray-900 to-gray-800",
                  "border border-gray-800 hover:border-blue-500/30 transition-all duration-300"
                )}
              >
                <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Stats Section */}
      <motion.section
        ref={statsRef}
        className="py-20 px-4 bg-gradient-to-b from-black to-gray-900"
      >
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={statsInView ? { y: 0, opacity: 1 } : {}}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ y: 20, opacity: 0 }}
                animate={statsInView ? { y: 0, opacity: 1 } : {}}
                transition={{ delay: 0.2 + index * 0.1 }}
              >
                <div className="text-4xl font-bold text-blue-400 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Pricing Section */}
      <motion.section ref={pricingRef} className="py-20 px-4" id="pricing">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={pricingInView ? { y: 0, opacity: 1 } : {}}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              С нами легко запустить продажи на{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
                максимум
              </span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto"></p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.title}
                initial={{ y: 20, opacity: 0 }}
                animate={pricingInView ? { y: 0, opacity: 1 } : {}}
                transition={{ delay: 0.2 + index * 0.1 }}
              >
                <Card className="relative p-6 bg-gradient-to-br from-gray-900 to-gray-800 border-gray-800">
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-500 text-white px-3 py-1 rounded-full text-sm">
                    {`${index + 1} ЭТАП`}
                  </div>

                  <div className="text-xl font-semibold mb-4 text-white mt-4 text-center">
                    {plan.title}
                  </div>

                  <ul className="space-y-4 mb-6">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
        {/*
        <Button
          size="lg"
          className="fixed bottom-4 right-4 z-50 bg-blue-600 hover:bg-blue-700 text-lg px-8 py-6 rounded-sm shadow-lg"
          onClick={() => setIsOpen(true)}
        >
          Бесплатная консультация
        </Button>*/}

        <AnimatePresence>
          {!isBlockInView && !footerVisible && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed bottom-4 right-4 z-50"
            >
              <Button
                size="lg"
                className="fixed bottom-4 right-4 z-50 bg-blue-600 hover:bg-blue-700 text-lg px-8 py-6 rounded-sm shadow-lg cursor-pointer"
                onClick={() => setIsOpen(true)}
              >
                Бесплатная консультация
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.section>
    </div>
  );
}

const features = [
  {
    icon: BarChart3,
    title: "Аналитика продаж",
    description:
      "Каждый клиент на виду, менеджеры под контролем, а ты точно знаешь, куда уходят деньги.",
  },
  {
    icon: Bot,
    title: "Умная автоматизация",
    description:
      "Автоматический возврат потерянных клиентов, сегментация аудитории и рост среднего чека без головной боли.",
  },
  {
    icon: Globe2,
    title: "Центр интеграций",
    description:
      "Мгновенно подключим amoCRM к Instagram, WhatsApp, Telegram, телефонии и твоим оффлайн-точкам.",
  },
  {
    icon: Users,
    title: "Программа лояльности",
    description:
      "Сегментируй и возвращай клиентов бонусами и акциями прямо из amoCRM — больше никакой «текучки» покупателей.",
  },
  {
    icon: LayoutDashboard,
    title: "Работа в команде",
    description:
      "Менеджеры не теряют заявки и видят каждого клиента, а ты контролируешь работу всех точек в одной системе.",
  },
  {
    icon: MessageSquare,
    title: "Персональная панель управления",
    description:
      "Настрой панель под себя и отслеживай работу магазинов, каналов и эффективность лояльности в реальном времени.",
  },
];

const stats = [
  { value: "50+", label: "Успешных кейсов" },
  { value: "17.5к+", label: "В день - обработанных лидов" },
  { value: "80.9%", label: "Возвращаемость клиентов" },
  { value: "80сек.", label: "Время ответа клиенту" },
];

const pricingPlans = [
  {
    title: "Разговор по делу",
    features: [
      "Созвонимся или встретимся, обсудим твои процессы и сразу скажем, где теряешь деньги и клиентов.",
    ],
  },
  {
    title: "Все по полочкам",
    features: [
      "Быстро готовим и согласовываем понятное техническое задание, чтобы ты видел, как будут расти продажи.",
    ],
  },
  {
    title: "Пора зарабатывать",
    features: [
      "Отправляем прозрачное коммерческое предложение и запускаем систему. Клиенты возвращаются, прибыль растёт.",
    ],
  },
];
