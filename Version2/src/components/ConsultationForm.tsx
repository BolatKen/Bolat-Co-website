import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, Phone, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import.meta.env.VITE_TELEGRAM_TOKEN;

export function ConsultationForm() {
  const [isOpen, setIsOpen] = useState(false);
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
      await fetch(
        `https://api.telegram.org/bot${
          import.meta.env.VITE_TELEGRAM_TOKEN
        }/sendMessage`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            chat_id: import.meta.env.VITE_TELEGRAM_CHAT_ID,
            text: telegramMessage,
            parse_mode: "Markdown",
          }),
        }
      );

      toast({
        title: "Success!",
        description: "We'll contact you shortly to schedule your consultation.",
      });
      setIsOpen(false);
    } catch (error) {
      console.error("Error sending message:", error);
      toast({
        title: "Error!",
        description: "Failed to send your request. Try again later.",
      });
    }
  };

  return (
    <>
      <Button
        size="lg"
        className="fixed bottom-4 right-4 z-50 bg-blue-600 hover:bg-blue-700"
        onClick={() => setIsOpen(true)}
      >
        Бесплатная консультация
      </Button>

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

              <h2 className="text-2xl font-bold mb-4">Get Free Consultation</h2>
              <p className="text-gray-400 mb-6">
                Fill out the form below and we'll get back to you within 24
                hours.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  placeholder="Your Name"
                  className="bg-gray-800 border-gray-700"
                  required
                />
                <Input
                  type="tel"
                  placeholder="Phone Number"
                  className="bg-gray-800 border-gray-700"
                  required
                />
                <Textarea
                  placeholder="Your Message"
                  className="bg-gray-800 border-gray-700"
                  required
                />
                <Button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700"
                >
                  Submit
                </Button>

                <div className="flex gap-4 mt-6">
                  <Button
                    variant="outline"
                    className="flex-1 border-green-600 text-green-500 hover:bg-green-600/10"
                  >
                    <MessageSquare className="w-4 h-4 mr-2" />
                    WhatsApp
                  </Button>
                  <Button
                    variant="outline"
                    className="flex-1 border-blue-400 text-blue-400 hover:bg-blue-400/10"
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Telegram
                  </Button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
