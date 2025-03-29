import { Link } from 'react-router-dom';
import { MessageSquare, Phone, Rocket } from 'lucide-react';

export function Footer() {
  return (
    <footer className="py-12 px-4 border-t border-gray-800">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <Rocket className="w-8 h-8 text-blue-500" />
              <span className="text-xl font-bold">AmoCRM Pro</span>
            </Link>
            <p className="text-gray-400">
              Your trusted partner in AmoCRM integration and automation.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link to="/about" className="hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/careers" className="hover:text-white transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link to="/docs" className="hover:text-white transition-colors">
                  Documentation
                </Link>
              </li>
              <li>
                <Link to="/help" className="hover:text-white transition-colors">
                  Help Center
                </Link>
              </li>
              <li>
                <Link to="/api" className="hover:text-white transition-colors">
                  API
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                +1 (555) 123-4567
              </li>
              <li className="flex items-center gap-2">
                <MessageSquare className="w-4 h-4" />
                support@amocrmpro.com
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}