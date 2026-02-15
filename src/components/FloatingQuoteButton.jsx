import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiFileText, FiX } from 'react-icons/fi'

const FloatingQuoteButton = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Floating Button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-24 right-6 md:right-8 w-14 h-14 md:w-16 md:h-16 bg-dark-green text-white rounded-full shadow-soft-lg flex items-center justify-center z-40 hover:bg-dark-green-dark transition-colors duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1 }}
        aria-label="Request a quote"
      >
        <FiFileText size={24} />
      </motion.button>

      {/* Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-charcoal/80 z-50 flex items-center justify-center p-4"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-2xl shadow-soft-lg max-w-md w-full p-6 md:p-8 relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center text-gray-400 hover:text-charcoal transition-colors"
                aria-label="Close"
              >
                <FiX size={24} />
              </button>

              <h3 className="text-2xl font-bold text-charcoal mb-4">Request a Free Quote</h3>
              <p className="text-gray-600 mb-6">Fill in your details and we'll get back to you with a free quote.</p>

              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full px-4 py-3 rounded-2xl border-2 border-gray-200 focus:border-dark-green focus:outline-none transition-colors"
                  required
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-3 rounded-2xl border-2 border-gray-200 focus:border-dark-green focus:outline-none transition-colors"
                  required
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full px-4 py-3 rounded-2xl border-2 border-gray-200 focus:border-dark-green focus:outline-none transition-colors"
                  required
                />
                <select
                  className="w-full px-4 py-3 rounded-2xl border-2 border-gray-200 focus:border-dark-green focus:outline-none transition-colors"
                  required
                >
                  <option value="">Select Service</option>
                  <option value="carpet">Carpet</option>
                  <option value="laminate">Laminate</option>
                  <option value="vinyl">Vinyl</option>
                  <option value="lvt">LVT</option>
                  <option value="other">Other</option>
                </select>
                <textarea
                  placeholder="Additional Details"
                  rows="3"
                  className="w-full px-4 py-3 rounded-2xl border-2 border-gray-200 focus:border-dark-green focus:outline-none transition-colors resize-none"
                />
                <button
                  type="submit"
                  className="w-full bg-dark-green text-white py-3 rounded-2xl font-semibold hover:bg-dark-green-dark transition-all duration-300 shadow-soft hover:shadow-soft-lg"
                >
                  Submit Request
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default FloatingQuoteButton
