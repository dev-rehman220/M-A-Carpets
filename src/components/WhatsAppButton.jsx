import { motion } from 'framer-motion'
import { FaWhatsapp } from 'react-icons/fa'

const WhatsAppButton = () => {
  const phoneNumber = '441234567890' // Replace with actual WhatsApp number
  const message = 'Hi! I would like to inquire about your flooring services.'

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 md:right-8 w-14 h-14 md:w-16 md:h-16 bg-green-500 text-white rounded-full shadow-soft-lg flex items-center justify-center z-40 hover:bg-green-600 transition-colors duration-300"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.2 }}
      aria-label="Contact us on WhatsApp"
    >
      <FaWhatsapp size={28} />
    </motion.a>
  )
}

export default WhatsAppButton
