// components/ui/WhatsAppButton.tsx

import { Button } from "@/components/ui/button";
import { MessageSquare } from 'lucide-react';
import localFont from 'next/font/local';

const FontArista = localFont({ src: 'fonts/Arista-Pro-Regular-trial.woff2' });


interface WhatsAppButtonProps {
  phoneNumber: string;
  message: string;
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({ phoneNumber, message }) => {
  const handleWhatsAppClick = () => {
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <Button
      onClick={handleWhatsAppClick}
      className={`w-full bg-green-500 dark:bg-primary text-white dark:text-background  dark:hover:bg-primary/90 hover:bg-green-600 py-3 md:py-4 text-base md:text-lg font-semibold flex items-center justify-center space-x-2 ${FontArista.className}`}
    >
      <MessageSquare className="w-5 h-5" aria-hidden="true" />
      <span>Enviar Mensagem no WhatsApp</span>
    </Button>
  );
};

export default WhatsAppButton;
