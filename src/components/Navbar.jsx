import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMenu, FiX, FiPhone } from 'react-icons/fi'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [location])

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ]

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-soft py-4' : 'bg-white/95 py-6'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex flex-col"
            >
              <span className="text-2xl md:text-3xl font-bold text-charcoal">
                M & A CARPETS
              </span>
              <span className="text-xs text-dark-green font-medium tracking-wider">
                PREMIUM FLOORING SOLUTIONS
              </span>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-medium transition-colors duration-200 ${
                  location.pathname === link.path
                    ? 'text-dark-green'
                    : 'text-charcoal hover:text-dark-green'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <a
              href="tel:+441234567890"
              className="flex items-center space-x-2 bg-dark-green text-white px-6 py-2 rounded-2xl font-semibold hover:bg-dark-green-dark transition-all duration-300"
            >
              <FiPhone size={18} />
              <span>Call Now</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-charcoal hover:text-dark-green transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden"
            >
              <div className="py-6 space-y-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`block py-2 font-medium transition-colors duration-200 ${
                      location.pathname === link.path
                        ? 'text-dark-green'
                        : 'text-charcoal hover:text-dark-green'
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
                <a
                  href="tel:+441234567890"
                  className="flex items-center justify-center space-x-2 bg-dark-green text-white px-6 py-3 rounded-2xl font-semibold hover:bg-dark-green-dark transition-all duration-300 mt-4"
                >
                  <FiPhone size={18} />
                  <span>Call Now</span>
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  )
}

export default Navbar
