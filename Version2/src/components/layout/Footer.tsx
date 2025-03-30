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
              <span className="text-xl font-bold">Bolat & Co.</span>
            </Link>
            <p className="text-gray-400">
            Ваш надежный партнер в интеграции и автоматизации AmoCRM.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Компания</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link to="/about" className="hover:text-white transition-colors">
                  О нас
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="hover:text-white transition-colors">
                  Партнеры
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-white transition-colors">
                  Блог
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Контакты</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                +7 (706) 637-0105
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