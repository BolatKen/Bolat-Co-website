import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  MessageSquare,
  Mail,
  Phone,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  FileText,
  CreditCard,
  BarChart
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

export function IntegrationsPage() {
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
            Powerful{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
              Integrations
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Connect AmoCRM with your favorite tools and services
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {integrations.map((integration, index) => (
            <motion.div
              key={integration.title}
              ref={ref}
              initial={{ y: 20, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : {}}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="p-6 bg-gradient-to-br from-gray-900 to-gray-800 border-gray-800 hover:border-blue-500/30 transition-all duration-300">
                <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center mb-4">
                  <integration.icon className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{integration.title}</h3>
                <p className="text-gray-400 mb-4">{integration.description}</p>
                <Button variant="outline" className="w-full border-gray-700 hover:bg-gray-800">
                  Connect
                </Button>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

const integrations = [
  {
    icon: MessageSquare,
    title: "WhatsApp Business",
    description: "Connect with customers through WhatsApp messaging."
  },
  {
    icon: Mail,
    title: "Email Services",
    description: "Integrate with Gmail, Outlook, and other email providers."
  },
  {
    icon: Phone,
    title: "VoIP Systems",
    description: "Connect your phone system for call tracking and recording."
  },
  {
    icon: Facebook,
    title: "Facebook & Instagram",
    description: "Manage social media leads and conversations."
  },
  {
    icon: FileText,
    title: "Document Management",
    description: "Connect with Google Docs, Dropbox, and other storage services."
  },
  {
    icon: CreditCard,
    title: "Payment Systems",
    description: "Process payments through various payment gateways."
  },
  {
    icon: BarChart,
    title: "Analytics Tools",
    description: "Connect with Google Analytics and other tracking tools."
  },
  {
    icon: Instagram,
    title: "Social Media",
    description: "Integrate with various social media platforms."
  },
  {
    icon: Twitter,
    title: "Twitter",
    description: "Monitor and respond to Twitter interactions."
  }
];