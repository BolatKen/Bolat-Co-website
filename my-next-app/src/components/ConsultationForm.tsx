import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

import { useEffect } from "react";

const token = process.env.NEXT_PUBLIC_TELEGRAM_TOKEN;
const chat_id = process.env.NEXT_PUBLIC_TELEGRAM_CHAT_ID;

interface ConsultationFormProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

export function ConsultationForm({ isOpen, setIsOpen }: ConsultationFormProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"; // Блокируем скролл
    } else {
      document.body.style.overflow = "auto"; // Восстанавливаем скролл
    }

    return () => {
      document.body.style.overflow = "auto"; // Очистка при размонтировании
    };
  }, [isOpen]);

  //const [isOpen, setIsOpen] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;
    const name = (form[0] as HTMLInputElement).value;
    const phone = (form[1] as HTMLInputElement).value;
    const message = (form[2] as HTMLTextAreaElement).value;

    const telegramMessage = `
📞 *Новая заявка на консультацию!*
👤 Имя: ${name}
📱 Телефон: ${phone}
💬 Сообщение: ${message}
    `;

    try {
      await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: chat_id,
          text: telegramMessage,
          parse_mode: "Markdown",
        }),
      });

      toast({
        title: "Успех!",
        description:
          "Мы свяжемся с вами в ближайшее время, чтобы договориться о вашей консультации.",
      });
      setIsOpen(false);
    } catch (error) {
      console.error("Error sending message:", error);
      toast({
        title: "Ошибка!",
        description:
          "Не удалось отправить ваш запрос. Попробуйте еще раз позже.",
      });
    }
  };

  return (
    <>
      {/*
      {!isOpen && (
        <Button
          size="lg"
          className="fixed bottom-4 right-4 z-50 bg-blue-600 hover:bg-blue-700"
          onClick={() => setIsOpen(true)}
        >
          Бесплатная консультация
        </Button>
      )}
        */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-gray-900 p-6 rounded-lg w-full max-w-md relative"
            >
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>

              <h2 className="text-2xl font-bold mb-4 text-gray-300">
                Получите бесплатную консультацию
              </h2>
              <p className="text-gray-400 mb-6">
                Заполните форму ниже, и мы свяжемся с вами в течение 24 часов.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4 text-white">
                <Input
                  placeholder="Ваше имя"
                  className="bg-gray-800 border-gray-700"
                  required
                />
                <Input
                  type="tel"
                  placeholder="Ваш номер"
                  className="bg-gray-800 border-gray-700"
                  required
                />
                <Textarea
                  placeholder="Детали"
                  className="bg-gray-800 border-gray-700"
                  required
                />
                <Button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700"
                >
                  Отправить
                </Button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
