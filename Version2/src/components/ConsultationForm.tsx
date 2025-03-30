import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, Phone, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

export function ConsultationForm() {
  const [isOpen, setIsOpen] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget; // Теперь TypeScript понимает, что это HTMLFormElement

    const formData = {
      name: (form.elements.namedItem("name") as HTMLInputElement)?.value || "",
      phone:
        (form.elements.namedItem("phone") as HTMLInputElement)?.value || "",
      message:
        (form.elements.namedItem("message") as HTMLTextAreaElement)?.value ||
        "",
    };

    console.log("Отправляемые данные:", formData); // Проверка в консоли

    //const accessToken = "ТВОЙ_AMOCRM_TOKEN";
    //const subdomain = "ТВОЙ_СУБДОМЕН";

    try {
      const response = await fetch(`https://bolatco.amocrm.ru/api/v4/leads`, {
        method: "POST",
        headers: {
          Authorization: `eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImFjNDI3NWZlZjNhMTU1ZjI3YjRhMTNiY2VmMzY4ZWZjZjYwNDkyZjgyYTM1OGQwYjAyZDY1NjMxNzZhNmZmOGM3YjExY2I0NmJiMWE4NzFkIn0.eyJhdWQiOiJiZmJlNmJiMS0wZWVmLTQwZTktOGI4Zi04ZTkwNGVmYThhOGYiLCJqdGkiOiJhYzQyNzVmZWYzYTE1NWYyN2I0YTEzYmNlZjM2OGVmY2Y2MDQ5MmY4MmEzNThkMGIwMmQ2NTYzMTc2YTZmZjhjN2IxMWNiNDZiYjFhODcxZCIsImlhdCI6MTc0MTU5MTY4MCwibmJmIjoxNzQxNTkxNjgwLCJleHAiOjE4NjgyMjcyMDAsInN1YiI6IjEyMTA2MDIyIiwiZ3JhbnRfdHlwZSI6IiIsImFjY291bnRfaWQiOjMxNzQ5Njk0LCJiYXNlX2RvbWFpbiI6ImFtb2NybS5ydSIsInZlcnNpb24iOjIsInNjb3BlcyI6WyJjcm0iLCJmaWxlcyIsImZpbGVzX2RlbGV0ZSIsIm5vdGlmaWNhdGlvbnMiLCJwdXNoX25vdGlmaWNhdGlvbnMiXSwiaGFzaF91dWlkIjoiMTcwY2RmOGItOGNlNC00YzA2LWFlNjItYjBiNjBhNDEwMTZkIiwiYXBpX2RvbWFpbiI6ImFwaS1iLmFtb2NybS5ydSJ9.etS-M4Wnj8tXTfPrTDp3OdU6HBFJIkLi4ggvW2REXFZ9kuhRqffrnBqJOp59B0i1qpGCdSb21HMfP07M3ngW7BfSlOwLSIw8P9VsJeWRnVLzlo-WAYPR7YMgNu61qrbeO_-gcEgTSaP0cz48UorPnzY7XGQaaitTlBu4NcPzPAYQd1Cw_WXOpSmt1cWn43xy7X5dep0wlAO9WFpQziMXEid3unQp47E9UtBV9R00sO4Oinltfnc6qBjrafyEgJuNuNWL_IxD_qBcp6ryWEUuLDC0FqwRbRMrBMpRNjpHyyQ_LntEsi7sE2mJqsXHixU3qzblSgG3pwzS3AafeDrI7g`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify([
          {
            name: `Web-Site|${formData.name}`,
            pipeline_id: 8166530,
            group_id: -1,
            created_by: 0,
            custom_fields_values: [
              {
                field_id: 891365, // ID поля "Дата создания"
                values: [{ value: new Date().toLocaleDateString("ru-RU") }], // Текущая дата
              },
              {
                field_id: 891369, // ID поля "Телефон"
                values: [{ value: formData.phone }],
              },
              {
                field_id: 891371, // ID поля "Сообщение"
                values: [{ value: formData.message }],
              },
            ],
          },
        ]),
      });

      if (response.ok) {
        toast({
          title: "Success!",
          description: "Your request has been sent!",
        });
        setIsOpen(false);
      } else {
        console.error("Ошибка:", await response.json());
      }
    } catch (error) {
      console.error("Ошибка отправки:", error);
    }

    /*
    toast({
      title: "Success!",
      description: "We'll contact you shortly to schedule your consultation.",
    });
    setIsOpen(false);
    */
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
                Fill out the form below and we'll get back to you within 24
                hours.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    name="name"
                    placeholder="Your Name"
                    className="bg-gray-800 border-gray-700"
                    required
                  />
                </div>
                <div>
                  <Input
                    name="phone"
                    type="tel"
                    placeholder="Phone Number"
                    className="bg-gray-800 border-gray-700"
                    required
                  />
                </div>
                <div>
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    className="bg-gray-800 border-gray-700"
                    required
                  />
                </div>
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
