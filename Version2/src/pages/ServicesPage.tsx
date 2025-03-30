import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Bot,
  //Code,
  Database,
  //LineChart,
  //MessageSquare,
  Settings,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

import { useState } from "react";
import { ConsultationForm } from "./../components/ConsultationForm";

export function ServicesPage() {
  const [isOpen, setIsOpen] = useState(false);

  const [
    ref,
    //inView
  ] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto max-w-6xl px-4">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Наши{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
              Услуги
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Комплексные решения amoCRM, адаптированные к потребностям вашего
            бизнеса.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              ref={ref}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Card className="p-6 bg-gradient-to-br from-gray-900 to-gray-800 border-gray-800 hover:border-blue-500/30 transition-all duration-300 h-full flex flex-col">
                <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-white">
                  {service.title}
                </h3>
                <ol className="list-decimal pl-5 space-y-3 text-gray-400 mb-4">
                  {service.description.map((item, idx) => (
                    <li key={idx}>
                      <span className="font-medium text-white">
                        {item.title} —{" "}
                      </span>
                      {item.text}
                    </li>
                  ))}
                </ol>
                <Button
                  variant="outline"
                  className="w-full bg-gray-200 border-gray-700 hover:bg-gray-800 hover:text-gray-200 mt-auto"
                  onClick={() => setIsOpen(true)}
                >
                  Узнать больше
                </Button>
                <ConsultationForm isOpen={isOpen} setIsOpen={setIsOpen} />
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

const services = [
  {
    icon: Settings,
    title: "Внедрение CRM — быстро, по уму, с результатом",
    description: [
      {
        title: "Разбираемся в бизнесе",
        text: "Личное общение: встреча или созвон. Погружаемся в вашу воронку, находим, где уходят клиенты и сколько вы теряете каждый месяц. Всё честно, по цифрам.",
      },
      {
        title: "Строим архитектуру роста",
        text: "Готовим чёткое ТЗ — никакой воды. Только нужные автоматизации, нужные действия и нужный результат. Вы видите, как CRM будет работать на вас с первого дня.",
      },
      {
        title: "Запускаем результат",
        text: "Подписываем понятное КП, подключаем каналы, обучаем команду. CRM работает, заявки приходят, воронка дышит. Продажи растут — бизнес зарабатывает.",
      },
    ],
  },
  {
    icon: Bot,
    title: "Аудит CRM и продаж — найди деньги в своём бизнесе",
    description: [
      {
        title: "Погружаемся в процессы",
        text: "Созваниваемся, слушаем, как работает ваш отдел продаж, смотрим воронки, анализируем цифры. Всё строго по сути, без лирики.",
      },
      {
        title: "Делаем диагностику",
        text: "Анализируем систему или её отсутствие, выявляем слабые места, фиксируем недоработки. Получаете отчёт с выводами и чёткими рекомендациями.",
      },
      {
        title: "Включаем рост",
        text: "Хотите — внедряем улучшения. Не хотите — забираете план и внедряете сами. Главное: вы точно знаете, где теряли деньги и как перестать их терять.",
      },
    ],
  },
  {
    icon: Database,
    title: "Сопровождение CRM — чтобы система работала на вас, а не наоборот",
    description: [
      {
        title: "Слушаем бизнес",
        text: "Регулярно обсуждаем, как работает CRM: что тормозит, где теряются заявки, что мешает масштабироваться.",
      },
      {
        title: "Укрепляем систему",
        text: "Добавляем нужное: автоматизации, отчёты, интеграции, формы, права доступа. Оптимизируем всё, что влияет на скорость и деньги.",
      },
      {
        title: "Всегда рядом",
        text: "Оперативная поддержка, понятные доработки, помощь без бюрократии. Ваши продажи растут — потому что CRM жива, здорова и работает как надо.",
      },
    ],
  },
];
