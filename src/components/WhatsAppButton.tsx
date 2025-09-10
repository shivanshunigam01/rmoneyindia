import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  const handleWhatsAppClick = () => {
    const phoneNumber = "919876543210"; // Replace with actual WhatsApp number
    const message = "Hi! I'm interested in RMoney services. Can you help me?";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <motion.div
      className="fixed bottom-6 left-6 z-50"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <motion.button
        onClick={handleWhatsAppClick}
        className="w-16 h-16 rounded-full bg-[#25D366] text-white shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
        whileHover={{ 
          boxShadow: "0 0 30px rgba(37, 211, 102, 0.5)",
          y: -2
        }}
      >
        <MessageCircle className="w-8 h-8 group-hover:scale-110 transition-transform" />
        
        {/* Pulsing Ring Animation */}
        <motion.div
          className="absolute inset-0 rounded-full border-2 border-[#25D366]"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.7, 0, 0.7],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        {/* Tooltip */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          whileHover={{ opacity: 1, x: 0 }}
          className="absolute left-20 bg-charcoal text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap shadow-lg"
        >
          Chat on WhatsApp
          <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1 border-4 border-transparent border-r-charcoal"></div>
        </motion.div>
      </motion.button>
    </motion.div>
  );
}