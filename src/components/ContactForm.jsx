import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiUser, FiMail, FiPhone, FiMessageSquare, FiSend } from 'react-icons/fi'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const validate = () => {
    const newErrors = {}
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid'
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone is required'
    } else if (!/^[\d\s\-\+\(\)]+$/.test(formData.phone)) {
      newErrors.phone = 'Phone number is invalid'
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    }
    
    return newErrors
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    const newErrors = validate()
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    setIsSubmitting(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setIsSubmitting(false)
    setIsSuccess(true)
    setFormData({ name: '', email: '', phone: '', message: '' })
    
    setTimeout(() => setIsSuccess(false), 5000)
  }

  return (
    <div className="max-w-2xl mx-auto">
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name Field */}
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-charcoal mb-2">
            Full Name *
          </label>
          <div className="relative">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
              <FiUser size={20} />
            </div>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full pl-12 pr-4 py-3 rounded-2xl border-2 transition-colors duration-200 ${
                errors.name 
                  ? 'border-red-500 focus:border-red-500' 
                  : 'border-gray-200 focus:border-dark-green'
              } focus:outline-none`}
              placeholder="John Doe"
            />
          </div>
          {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
        </div>

        {/* Email Field */}
        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-charcoal mb-2">
            Email Address *
          </label>
          <div className="relative">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
              <FiMail size={20} />
            </div>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full pl-12 pr-4 py-3 rounded-2xl border-2 transition-colors duration-200 ${
                errors.email 
                  ? 'border-red-500 focus:border-red-500' 
                  : 'border-gray-200 focus:border-dark-green'
              } focus:outline-none`}
              placeholder="john@example.com"
            />
          </div>
          {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
        </div>

        {/* Phone Field */}
        <div>
          <label htmlFor="phone" className="block text-sm font-semibold text-charcoal mb-2">
            Phone Number *
          </label>
          <div className="relative">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
              <FiPhone size={20} />
            </div>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className={`w-full pl-12 pr-4 py-3 rounded-2xl border-2 transition-colors duration-200 ${
                errors.phone 
                  ? 'border-red-500 focus:border-red-500' 
                  : 'border-gray-200 focus:border-dark-green'
              } focus:outline-none`}
              placeholder="+44 123 456 7890"
            />
          </div>
          {errors.phone && <p className="mt-1 text-sm text-red-500">{errors.phone}</p>}
        </div>

        {/* Message Field */}
        <div>
          <label htmlFor="message" className="block text-sm font-semibold text-charcoal mb-2">
            Your Message *
          </label>
          <div className="relative">
            <div className="absolute left-4 top-4 text-gray-400">
              <FiMessageSquare size={20} />
            </div>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              className={`w-full pl-12 pr-4 py-3 rounded-2xl border-2 transition-colors duration-200 resize-none ${
                errors.message 
                  ? 'border-red-500 focus:border-red-500' 
                  : 'border-gray-200 focus:border-dark-green'
              } focus:outline-none`}
              placeholder="Tell us about your flooring needs..."
            />
          </div>
          {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
        </div>

        {/* Submit Button */}
        <motion.button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-dark-green text-white py-4 rounded-2xl font-semibold hover:bg-dark-green-dark transition-all duration-300 shadow-soft hover:shadow-soft-lg flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
          whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
          whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
        >
          {isSubmitting ? (
            <span>Sending...</span>
          ) : (
            <>
              <span>Send Message</span>
              <FiSend size={20} />
            </>
          )}
        </motion.button>

        {/* Success Message */}
        {isSuccess && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-green-50 border-2 border-green-500 text-green-700 px-6 py-4 rounded-2xl text-center"
          >
            Thank you! Your message has been sent successfully. We'll get back to you soon.
          </motion.div>
        )}
      </form>
    </div>
  )
}

export default ContactForm
