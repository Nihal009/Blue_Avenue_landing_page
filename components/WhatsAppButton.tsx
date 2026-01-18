import { SiWhatsapp } from 'react-icons/si';

interface WhatsAppButtonProps {
  phoneNumber?: string;
  message?: string;
}

export default function WhatsAppButton({
  phoneNumber = '15551234567',
  message = 'Hello! I would like to inquire about your tailoring services.',
}: WhatsAppButtonProps) {
  const handleClick = () => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#25D366] text-white shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-105 opacity-100 translate-y-0"
      aria-label="Contact us on WhatsApp"
      data-testid="button-whatsapp"
    >
      <SiWhatsapp className="w-7 h-7 md:w-8 md:h-8" />
    </button>
  );
}
