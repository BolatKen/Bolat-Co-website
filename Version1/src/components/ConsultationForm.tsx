import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, Phone, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

export function ConsultationForm() {
  const [isOpen, setIsOpen] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Success!",
      description: "We'll contact you shortly to schedule your consultation.",
    });
    setIsOpen(false);
  };

  return (
    <>
      <Button
        size="lg"
        className="fixed bottom-4 right-4 z-50 bg-blue-600 hover:bg-blue-700"
        onClick={() => setIsOpen(true)}
      >
        Get Free Consultation
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
                Fill out the form below and we'll get back to you within 24 hours.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    placeholder="Your Name"
                    className="bg-gray-800 border-gray-700"
                    required
                  />
                </div>
                <div>
                  <Input
                    type="tel"
                    placeholder="Phone Number"
                    className="bg-gray-800 border-gray-700"
                    required
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Your Message"
                    className="bg-gray-800 border-gray-700"
                    required
                  />
                </div>
                <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
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