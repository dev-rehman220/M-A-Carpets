import { motion } from 'framer-motion'
import Button from './Button'

const Hero = ({ 
  title, 
  subtitle, 
  primaryButton, 
  secondaryButton, 
  backgroundImage,
  height = 'h-[600px]',
  overlay = true 
}) => {
  return (
    <section className={`relative ${height} flex items-center justify-center overflow-hidden`}>
      {/* Background Image with overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="w-full h-full bg-cover bg-center"
          style={{ 
            backgroundImage: backgroundImage || 'linear-gradient(135deg, #2C3539 0%, #2D5016 100%)'
          }}
        />
        {overlay && (
          <div className="absolute inset-0 bg-charcoal/70" />
        )}
      </div>

      {/* Content */}
      <div className="container-custom relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight">
            {title}
          </h1>
          {subtitle && (
            <p className="text-lg md:text-xl lg:text-2xl text-beige mb-8 max-w-3xl mx-auto">
              {subtitle}
            </p>
          )}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {primaryButton && (
              <Button variant="primary" href={primaryButton.href}>
                {primaryButton.text}
              </Button>
            )}
            {secondaryButton && (
              <Button variant="secondary" href={secondaryButton.href}>
                {secondaryButton.text}
              </Button>
            )}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
      >
        <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-white rounded-full" />
        </div>
      </motion.div>
    </section>
  )
}

export default Hero
