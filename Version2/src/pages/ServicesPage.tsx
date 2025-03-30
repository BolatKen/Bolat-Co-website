import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Bot, Code, Database, LineChart, MessageSquare, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

export function ServicesPage() {
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
            Our{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
              Services
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Comprehensive AmoCRM solutions tailored to your business needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              ref={ref}
              initial={{ y: 20, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : {}}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="p-6 bg-gradient-to-br from-gray-900 to-gray-800 border-gray-800 hover:border-blue-500/30 transition-all duration-300">
                <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-400 mb-4">{service.description}</p>
                <Button variant="outline" className="w-full border-gray-700 hover:bg-gray-800">
                  Learn More
                </Button>
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
    title: "CRM Setup & Configuration",
    description: "Custom AmoCRM setup tailored to your business processes and requirements."
  },
  {
    icon: Bot,
    title: "Automation Solutions",
    description: "Streamline your workflow with intelligent automation and business rules."
  },
  {
    icon: Database,
    title: "Data Migration",
    description: "Seamless transfer of your existing data into AmoCRM without loss."
  },
  {
    icon: Code,
    title: "Custom Integration",
    description: "Connect AmoCRM with your existing tools and third-party services."
  },
  {
    icon: MessageSquare,
    title: "Training & Support",
    description: "Comprehensive training and ongoing support for your team."
  },
  {
    icon: LineChart,
    title: "Analytics Setup",
    description: "Advanced reporting and analytics configuration for better insights."
  }
];