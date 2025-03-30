import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Award, Users, Clock, Globe } from "lucide-react";
//import { Button } from '@/components/ui/button';

export function AboutPage() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto max-w-6xl px-4">
        {/* Hero Section */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            О компании{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
              Bolat & Co.
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Твой надежный партнёр по интеграции amoCRM для ритейла в Казахстане
          </p>
        </motion.div>

        {/* Mission Section */}
        <motion.div
          ref={ref}
          initial={{ y: 20, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          className="mb-20"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Что нами движет?</h2>
              <p className="text-gray-400 mb-6">
                Наша миссия - избавить предпринимателя от хаоса. Вместо потока
                потерянных лидов ты получаешь чёткую систему: где каждый клиент
                учтён, каждый менеджер под контролем, а каждый тенге из рекламы
                - отрабатывает на максимум.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ y: 20, opacity: 0 }}
                  animate={inView ? { y: 0, opacity: 1 } : {}}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg border border-gray-800"
                >
                  <stat.icon className="w-8 h-8 text-blue-400 mb-2" />
                  <div className="text-2xl font-bold mb-1">{stat.value}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Team Section */}
        <div>
          <h2 className="text-3xl font-bold mb-4">Компания Bolat & Co. —</h2>
          <p className="text-gray-400 mb-6">
            лицензированный интегратор amoCRM с фокусом на автоматизацию и рост
            продаж ритейл-бизнесов. Наше ключевое отличие — это глубокая
            экспертиза в объединении онлайн-каналов (Instagram, WhatsApp,
            Telegram) и оффлайн-точек в единую мощную CRM-систему. Мы не просто
            настраиваем CRM — мы перестраиваем подход к продажам.
          </p>
        </div>
      </div>
    </div>
  );
}

const stats = [
  {
    icon: Users,
    value: "50+",
    label:
      "Довольных клиентов. От премиальных цветочных бутиков до сетей косметики и охотничьей экипировки — мы внедрили работающие решения по всей стране. Система работает с первой недели.",
  },
  {
    icon: Award,
    value: "35%",
    label:
      "Рост продаж в среднем. Это не абстрактные цифры, а результат автоматизации, сегментации клиентов, возврата неактивных покупателей и правильной работы с лояльностью.",
  },
  {
    icon: Clock,
    value: "3+ Лет",
    label:
      "Совокупного опыта. Наша команда — это не просто специалисты, это люди, которые понимают боли бизнеса. Дорогой трафик? Теряющиеся заявки? Менеджеры в отпуске? Мы знаем, как закрывать эти дыры",
  },
  {
    icon: Globe,
    value: "20+",
    label:
      "В нишах по Казахстану, мы адаптируемся под твой бизнес, а не загоняем его в шаблон. Beauty, fashion, услуги, розница, ювелирка, недвижимость — у нас есть кейсы в каждом сегменте.",
  },
];
/*
const team = [
  {
    name: "Alex Thompson",
    role: "CEO & Founder",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400",
    description: "10+ years of experience in CRM implementation"
  },
  {
    name: "Sarah Chen",
    role: "Head of Development",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400",
    description: "Expert in custom integrations and automation"
  },
  {
    name: "Michael Roberts",
    role: "Customer Success Manager",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400",
    description: "Dedicated to ensuring client satisfaction"
  }
];
*/
