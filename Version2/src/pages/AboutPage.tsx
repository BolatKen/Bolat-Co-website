import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, Users, Clock, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function AboutPage() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

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
            About{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
              AmoCRM Pro
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Your trusted partner in AmoCRM integration and automation
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
              <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
              <p className="text-gray-400 mb-6">
                We help businesses streamline their sales processes and grow their revenue through
                expert AmoCRM implementation and automation. Our goal is to make complex technology
                simple and accessible for everyone.
              </p>
              <Button className="bg-blue-600 hover:bg-blue-700">
                Learn More About Us
              </Button>
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
        <motion.div
          ref={ref}
          initial={{ y: 20, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-center mb-12">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ y: 20, opacity: 0 }}
                animate={inView ? { y: 0, opacity: 1 } : {}}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-gray-400 mb-2">{member.role}</p>
                <p className="text-sm text-gray-500">{member.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

const stats = [
  {
    icon: Users,
    value: "1000+",
    label: "Clients Served"
  },
  {
    icon: Award,
    value: "50+",
    label: "Awards Won"
  },
  {
    icon: Clock,
    value: "10+ Years",
    label: "Experience"
  },
  {
    icon: Globe,
    value: "20+",
    label: "Countries"
  }
];

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