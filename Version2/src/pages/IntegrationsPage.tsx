import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  MessageSquare,
  //Mail,
  //Phone,
  Package,
  Puzzle,
  Gift,
  BarChart,
  PhoneCall,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

import { useState } from "react";
import { ConsultationForm } from "./../components/ConsultationForm";

export function IntegrationsPage() {
  const [isOpen, setIsOpen] = useState(false);

  const [
    ref,
    //inView
  ] = useInView({
    triggerOnce: true,
    //threshold: 0.05,
    //rootMargin: "0px 0px -100px 0px",
  });

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto max-w-6xl px-4">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }} // Быстрее появление
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Мощная{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
              Интеграция
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Объедините amoCRM с вашими любимыми инструментами и сервисами.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {integrations.map((integration, index) => (
            <motion.div
              key={integration.title}
              ref={ref}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="p-6 bg-gradient-to-br from-gray-900 to-gray-800 border-gray-800 hover:border-blue-500/30 transition-all duration-300 h-full flex flex-col">
                <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center mb-4">
                  <integration.icon className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">
                  {integration.title}
                </h3>
                <p className="text-gray-400 mb-4 whitespace-pre-line">
                  {integration.description}
                </p>
                <Button
                  variant="outline"
                  className="w-full bg-gray-200 border-gray-700 hover:bg-gray-800 hover:text-gray-200 mt-auto"
                  onClick={() => setIsOpen(true)}
                >
                  Подключить
                </Button>
                <ConsultationForm isOpen={isOpen} setIsOpen={setIsOpen} />
              </Card>
            </motion.div>
          ))}
          <Button
            size="lg"
            className="fixed bottom-8 right-4 z-50 bg-blue-600 hover:bg-blue-700 text-lg px-8 py-6 rounded-sm shadow-lg"
            onClick={() => setIsOpen(true)}
          >
            Бесплатная консультация
          </Button>
        </div>
      </div>
    </div>
  );
}

const integrations = [
  {
    icon: BarChart,
    title: "amoCRM — все клиенты под контролем",
    description: `Зачем нужно:
Чтобы заявки не терялись, менеджеры не забывали звонить, а продажи шли быстрее.

Что будет после подключения:
• Все клиенты — в одной системе.
• Видно, на каком этапе кто находится.
• Напоминания, письма, задачи — всё ставится автоматически.
• Можно смотреть, кто сколько продал и где бизнес теряет деньги.

Польза:
Ты наконец управляешь продажами, а не догоняешь клиентов.`,
  },
  {
    icon: MessageSquare,
    title: "Wazzup — мессенджеры и соцсети прямо в CRM",
    description: `Зачем нужно:
Чтобы переписки с клиентами не терялись в телефонах и все заявки шли в работу.

Что будет после подключения:
• Все сообщения — в одном месте, прямо в CRM.
• Менеджеры видят всю историю общения.
• Легко переключаться между переписками.
• Можно подключить несколько номеров и разделить клиентов по сотрудникам.

Польза:
Быстро отвечаешь, не теряешь клиентов, всё под контролем.`,
  },
  {
    icon: PhoneCall,
    title: "onlinePBX — умная телефония",
    description: `Зачем нужно:
Чтобы звонки шли через систему и ни один не был пропущен.

Что будет после подключения:
• Все звонки записываются и сохраняются.
• Видно, кто звонил, когда и о чём говорили.
• Автоматически создаются задачи и заметки.
• Звонки легко распределяются между сотрудниками.

Польза:
Ты всегда знаешь, как работают менеджеры и куда уходят звонки.`,
  },
  {
    icon: Package,
    title: "СДЭК — отправка заказов без головной боли",
    description: `Зачем нужно:
Чтобы быстро отправлять посылки и не заполнять всё вручную.

Что будет после подключения:
• Заказ из CRM сразу попадает в СДЭК.
• Трек-номер создаётся сам.
• Клиенту автоматически уходит сообщение.
• Видно, где сейчас посылка.

Польза:
Ты экономишь время, исключаешь ошибки и радуешь клиента быстрой доставкой.`,
  },
  {
    icon: Puzzle,
    title: "Интеграция с Мой Склад",
    description: `Зачем нужно:
Чтобы видеть остатки, движение товаров и всю цепочку продаж.

Что будет после подключения:
• Централизованный склад для онлайн и офлайн продаж.
• Интеграция с OZON, WB, KASPI.
• Видно, где и что продаётся.
• Всё автоматически синхронизируется с amoCRM.

Польза:
Ты управляешь товаром и деньгами без путаницы.`,
  },
  {
    icon: Gift,
    title: "Персональная программа лояльности",
    description: `Зачем нужно:
Чтобы клиенты возвращались снова и снова.

Что будет после подключения:
• Приветственные бонусы и начисления за покупки.
• Сценарии возврата «спящих» клиентов.
• Сегментация по интересам и частоте покупок.
• Увеличение LTV и повторных продаж.

Польза:
Ты превращаешь клиентов в стабильный доход.`,
  },
];
