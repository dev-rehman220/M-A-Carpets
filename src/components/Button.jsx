import { motion } from 'framer-motion'

const Button = ({ children, variant = 'primary', onClick, href, className = '', ...props }) => {
  const baseClasses = 'inline-block text-center transition-all duration-300 rounded-2xl px-6 py-3 font-semibold shadow-soft hover:shadow-soft-lg'
  
  const variants = {
    primary: 'bg-dark-green text-white hover:bg-dark-green-dark',
    secondary: 'bg-white text-charcoal hover:bg-beige',
    outline: 'border-2 border-dark-green text-dark-green hover:bg-dark-green hover:text-white'
  }

  const buttonClass = `${baseClasses} ${variants[variant]} ${className}`

  if (href) {
    return (
      <motion.a
        href={href}
        className={buttonClass}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        {...props}
      >
        {children}
      </motion.a>
    )
  }

  return (
    <motion.button
      onClick={onClick}
      className={buttonClass}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      {...props}
    >
      {children}
    </motion.button>
  )
}

export default Button
