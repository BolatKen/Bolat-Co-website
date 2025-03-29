import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { Rocket } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export function Navigation() {
  const [ref, inView] = useInView({ threshold: 0 });

  return (
    <motion.nav
      ref={ref}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-colors duration-300",
        !inView && "bg-black/80 backdrop-blur-lg border-b border-white/10"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2">
            <Rocket className="w-8 h-8 text-blue-500" />
            <span className="text-xl font-bold">AmoCRM Pro</span>
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <Link to="/services" className="text-gray-300 hover:text-white transition-colors">
              Services
            </Link>
            <Link to="/portfolio" className="text-gray-300 hover:text-white transition-colors">
              Portfolio
            </Link>
            <Link to="/integrations" className="text-gray-300 hover:text-white transition-colors">
              Integrations
            </Link>
            <Link to="/about" className="text-gray-300 hover:text-white transition-colors">
              About
            </Link>
            <Button variant="outline" className="border-blue-500 text-blue-500 hover:bg-blue-500/10">
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}