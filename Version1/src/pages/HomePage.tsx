import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  ArrowRight,
  BarChart3,
  Bot,
  CheckCircle,
  ChevronRight,
  Globe2,
  LayoutDashboard,
  MessageSquare,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export function HomePage() {
  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [featuresRef, featuresInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [statsRef, statsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [pricingRef, pricingInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div>
      {/* Hero Section */}
      <motion.section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center pt-16 px-4"
      >
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
            <div className="inline-flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full mb-8">
              <span className="text-blue-400">Trusted by 1000+ companies</span>
              <div className="flex -space-x-2">
                {[...Array(4)].map((_, i) => (
                  <div
                    key={i}
                    className="w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-blue-600"
                  />
                ))}
              </div>
            </div>

            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={heroInView ? { y: 0, opacity: 1 } : {}}
              transition={{ delay: 0.6 }}
              className="text-5xl md:text-7xl font-bold mb-6"
            >
              Boost Your Sales with{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
                AmoCRM
              </span>
            </motion.h1>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={heroInView ? { y: 0, opacity: 1 } : {}}
              transition={{ delay: 0.8 }}
              className="text-xl text-gray-400 max-w-2xl mx-auto mb-12"
            >
              Automate your sales process, increase conversions, and simplify
              workflow with our expert AmoCRM integration services.
            </motion.p>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={heroInView ? { y: 0, opacity: 1 } : {}}
              transition={{ delay: 1 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Book Free Consultation <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-gray-700 hover:bg-gray-900 text-black hover:text-white"
              >
                View Case Studies <ChevronRight className="ml-2 w-4 h-4" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

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
              Everything You Need to{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
                Scale Your Business
              </span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Powerful features that help you manage leads, automate tasks, and
              close more deals.
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
              Simple, Transparent{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
                Pricing
              </span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Choose the perfect plan for your business needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.title}
                initial={{ y: 20, opacity: 0 }}
                animate={pricingInView ? { y: 0, opacity: 1 } : {}}
                transition={{ delay: 0.2 + index * 0.1 }}
              >
                <Card className="relative p-6 bg-gradient-to-br from-gray-900 to-gray-800 border-gray-800 text-white">
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-500 text-white px-3 py-1 rounded-full text-sm">
                      Popular
                    </div>
                  )}
                  <div className="text-xl font-semibold mb-4">{plan.title}</div>
                  <div className="flex items-baseline mb-6">
                    <span className="text-4xl font-bold">${plan.price}</span>
                    <span className="text-gray-400 ml-2">/month</span>
                  </div>
                  <ul className="space-y-4 mb-6">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-blue-400" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className={cn(
                      "w-full",
                      plan.popular
                        ? "bg-blue-600 hover:bg-blue-700"
                        : "border-gray-700 hover:bg-gray-800 text-black hover:text-white"
                    )}
                    variant={plan.popular ? "default" : "outline"}
                  >
                    Choose Plan
                  </Button>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  );
}

const features = [
  {
    icon: BarChart3,
    title: "Sales Analytics",
    description:
      "Get detailed insights into your sales pipeline and team performance.",
  },
  {
    icon: Bot,
    title: "Smart Automation",
    description:
      "Automate repetitive tasks and focus on what matters most - closing deals.",
  },
  {
    icon: Globe2,
    title: "Integration Hub",
    description:
      "Connect AmoCRM with your favorite tools and services seamlessly.",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description:
      "Work together efficiently with built-in team communication tools.",
  },
  {
    icon: LayoutDashboard,
    title: "Custom Dashboard",
    description:
      "Create personalized dashboards to track your most important metrics.",
  },
  {
    icon: MessageSquare,
    title: "Multi-Channel Support",
    description: "Engage with customers across email, chat, and social media.",
  },
];

const stats = [
  { value: "1000+", label: "Active Users" },
  { value: "50M+", label: "Leads Processed" },
  { value: "99.9%", label: "Uptime" },
  { value: "24/7", label: "Support" },
];

const pricingPlans = [
  {
    title: "Starter",
    price: 49,
    features: [
      "Up to 1,000 contacts",
      "Basic automation",
      "Email integration",
      "Standard support",
    ],
  },
  {
    title: "Professional",
    price: 99,
    popular: true,
    features: [
      "Up to 10,000 contacts",
      "Advanced automation",
      "All integrations",
      "Priority support",
    ],
  },
  {
    title: "Enterprise",
    price: 199,
    features: [
      "Unlimited contacts",
      "Custom automation",
      "Dedicated manager",
      "24/7 premium support",
    ],
  },
];
