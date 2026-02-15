import { motion } from 'framer-motion'

const SectionTitle = ({ title, subtitle, centered = true, className = '' }) => {
  return (
    <motion.div
      className={`mb-12 ${centered ? 'text-center' : ''} ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {subtitle && (
        <p className="text-dark-green font-semibold text-sm uppercase tracking-wider mb-2">
          {subtitle}
        </p>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal">
        {title}
      </h2>
    </motion.div>
  )
}

export default SectionTitle
