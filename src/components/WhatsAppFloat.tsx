import { MessageCircle } from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/254702587919?text=Hello%20D%27Zizi%20Petroleum%2C%20I%27d%20like%20to%20enquire%20about%20your%20services.";

export function WhatsAppFloat() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="pulse-ring fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full text-white shadow-lg transition-transform hover:scale-110"
      style={{ backgroundColor: "#25D366" }}
    >
      <MessageCircle className="h-7 w-7" fill="currentColor" />
    </a>
  );
}
