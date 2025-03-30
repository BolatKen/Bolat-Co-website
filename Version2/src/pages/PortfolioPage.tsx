import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

export function PortfolioPage() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto max-w-6xl px-4">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
          С нами работают бизнесы, которые{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
            хотят расти
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Каждый проект — как новый бизнес-пазл. Мы разбираемся, собираем по кусочкам и включаем на максимум. Вот как мы помогли нашим партнёрам:
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
                  <div className="flex items-center gap-2 mb-4">
                    {study.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{study.title}</h3>
                  <p className="text-gray-400 mb-4">{study.description}</p>
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-sm text-gray-400">Results:</p>
                      <p className="text-lg font-semibold text-blue-400">{study.results}</p>
                    </div>
                    <Button variant="outline" className="border-gray-700 hover:bg-gray-800">
                      View Case Study <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
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
    description: "Флористика — бизнес на эмоциях и скорости. Мы сделали так, чтобы каждая заявка из Instagram и WhatsApp попадала в систему мгновенно. Менеджеры больше не теряются в сообщениях, а букеты уходят точно в срок.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800",
    tags: ["E-commerce", "Automation"],
    results: "150% increase in sales"
  },
  {
    title: "SaaS Lead Management",
    description: "Streamlining the sales process for a growing SaaS company.",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=800",
    tags: ["SaaS", "Lead Management"],
    results: "3x more qualified leads"
  },
  {
    title: "Real Estate Agency Transformation",
    description: "Modernizing property management and client communication.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800",
    tags: ["Real Estate", "CRM"],
    results: "40% faster deal closure"
  },
  {
    title: "Manufacturing Sales Pipeline",
    description: "Optimizing the B2B sales process for a manufacturing company.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800",
    tags: ["Manufacturing", "B2B"],
    results: "2x pipeline efficiency"
  }
];