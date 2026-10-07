import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const WhatsAppButton = () => {
  const phoneNumber = "542915275183";
  const message = "Hola, vi tu portfolio y me gustaría contactarte.";
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escribime por WhatsApp"
      className="fixed bottom-6 right-6 z-[300] flex items-center justify-center w-14 h-14 rounded-full bg-whatsapp-500 text-white shadow-lg transition-transform duration-200 hover:scale-110 hover:bg-whatsapp-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
    >
      <FontAwesomeIcon icon={faWhatsapp} size="xl" aria-hidden="true" />
    </a>
  );
};

export default WhatsAppButton;