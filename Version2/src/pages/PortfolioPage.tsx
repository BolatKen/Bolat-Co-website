import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
//import { ArrowRight } from "lucide-react";
//import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export function PortfolioPage() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto max-w-6xl px-4">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            С нами работают бизнесы, которые{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
              хотят расти
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Каждый проект — как новый бизнес-пазл. Мы разбираемся, собираем по
            кусочкам и включаем на максимум. Вот как мы помогли нашим партнёрам:
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.title}
              ref={ref}
              initial={{ y: 20, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : {}}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800 border-gray-800 hover:border-blue-500/30 transition-all duration-300">
                <div className="aspect-video relative">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl text-gray-200 font-semibold mb-2">
                    {study.title}
                  </h3>
                  <p className="text-gray-400 mb-2 whitespace-pre-line">
                    {study.description}
                  </p>
                  <div className="text-sm text-gray-400 whitespace-pre-line mb-4">
                    <strong>Что сделали:</strong>
                    <ul className="list-disc list-inside mt-1 space-y-1">
                      {study.steps.map((step, i) => (
                        <li key={i}>{step}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-sm text-gray-400">Результат:</p>
                      <p className="text-lg font-semibold text-blue-400">
                        {study.results}
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

const caseStudies = [
  {
    title: "Royal Flowers",
    description:
      "Флористика — бизнес на эмоциях и скорости. Мы сделали так, чтобы каждая заявка из Instagram и WhatsApp попадала в систему мгновенно. Менеджеры больше не теряются в сообщениях, а букеты уходят точно в срок.",
    image:
      "https://glovo.dhmedia.io/image/stores-glovo/stores/cb11b4558321f5cf504487a36705b261e7dc1442e96863c1e27dadd538614c58?t=W3siYXV0byI6eyJxIjoibG93In19LHsicmVzaXplIjp7ImhlaWdodCI6MjI1fX1d",
    tags: ["E-commerce", "Automation"],
    results: "Конверсия из заявки в заказ — 70%",
    steps: [
      "Подключили мессенджеры и соцсети к CRM",
      "Настроили моментальную обработку заказов",
      "Внедрили понятную аналитику: видно, что продаётся и как быстро доставляется",
    ],
  },
  {
    title: "SDU — Университет нового поколения",
    description:
      "Приёмная кампания — как марафон. Мы сделали так, чтобы каждый контакт с абитуриентом был под контролем. Всё общение — в одной системе, ни один запрос не теряется, а руководитель видит эффективность команды в реальном времени.",
    image:
      "https://www.akorda.kz/public/assets/media/uploadMedia/1693930293_222.jpg",
    results: "+35% заявок обработано в приёмную кампанию",
    steps: [
      "Построили удобную воронку для приёма студентов",
      "Интегрировали WhatsApp — общение стало быстрее",
      "Настроили аналитику по школам, регионам, направлениям",
    ],
  },
  {
    title: "KazNU MBA",
    description:
      "Продажа образования — как B2С-услуга: важно быстро отреагировать, показать ценность, довести до сделки. Мы выстроили систему, где каждая заявка отслеживается, каждое касание фиксируется, и вся воронка — как на ладони.",
    image:
      "https://kaztag.kz/upload/iblock/54c/Snimok_ekrana_2024_02_14_v_13.27.12.png",
    tags: ["Real Estate", "CRM"],
    results: "Снижение стоимости заявки на 28%",
    steps: [
      "Внедрили amoCRM с логикой для онлайн и офлайн заявок",
      "Интегрировали сайт, почту и Instagram",
      "Настроили отчёты для руководства — понятно, откуда клиенты и кто их закрывает",
    ],
  },
  {
    title: "Chunky — снеки, которые продаются сами (но с CRM ещё лучше)",
    description:
      "Chunky — это не только розничные заказы в Instagram, но и мощный B2B-сегмент: кофейни, дистрибьюторы, партнёры. Мы настроили CRM так, чтобы периодические заказы, напоминания, оплаты и логистика работали сами.",
    image: "https://imageproxy.wolt.com/assets/6733119d0822135ce77dcdbf",
    tags: ["Manufacturing", "B2B"],
    results: "Повторные заказы от B2B-клиентов выросли на 50%",
    steps: [
      "Внедрили amoCRM под дистрибьюторский формат",
      "Настроили цикличные закупки и авто-напоминания",
      "Сделали систему, где продукция приходит вовремя, а клиенты заказывают снова и снова",
    ],
  },
];
