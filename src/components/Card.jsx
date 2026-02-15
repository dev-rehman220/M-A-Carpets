import { motion } from 'framer-motion'

const Card = ({ children, className = '', hover = true, delay = 0 }) => {
  return (
    <motion.div
      className={`bg-white rounded-2xl shadow-soft p-6 ${hover ? 'hover:shadow-soft-lg' : ''} transition-all duration-300 ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      whileHover={hover ? { y: -5 } : {}}
    >
      {children}
    </motion.div>
  )
}

export default Card
