import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiChevronDown } from 'react-icons/fi'

const faqs = [
  {
    id: 1,
    question: 'Do you offer free measuring and quotation?',
    answer: 'Yes! We provide a completely free, no-obligation measuring service and quotation. One of our experienced team members will visit your property to measure and discuss your requirements.'
  },
  {
    id: 2,
    question: 'How long does installation typically take?',
    answer: 'Installation time depends on the size of the area and type of flooring. Most residential jobs are completed within 1-2 days. We\'ll provide an accurate timeframe during your consultation.'
  },
  {
    id: 3,
    question: 'What brands do you work with?',
    answer: 'We work with all leading carpet and flooring brands, ensuring you get high-quality products at competitive prices. We can source specific brands upon request.'
  },
  {
    id: 4,
    question: 'Do you remove old flooring?',
    answer: 'Yes, we offer a complete service including removal and disposal of your old flooring. This can be discussed during your free consultation.'
  },
  {
    id: 5,
    question: 'Is there a warranty on your work?',
    answer: 'Absolutely! All our installations come with a workmanship guarantee. Product warranties vary by manufacturer, and we\'ll explain these in detail when you choose your flooring.'
  },
  {
    id: 6,
    question: 'Do you work on commercial projects?',
    answer: 'Yes, we handle both residential and commercial flooring projects of all sizes. Contact us to discuss your specific requirements.'
  }
]

const FAQAccordion = () => {
  const [openId, setOpenId] = useState(null)

  return (
    <div className="max-w-3xl mx-auto space-y-4">
      {faqs.map((faq, index) => (
        <motion.div
          key={faq.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="bg-white rounded-2xl shadow-soft overflow-hidden"
        >
          <button
            onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
            className="w-full flex items-center justify-between p-6 text-left hover:bg-beige/50 transition-colors duration-200"
          >
            <span className="font-semibold text-charcoal pr-4">{faq.question}</span>
            <motion.div
              animate={{ rotate: openId === faq.id ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              className="flex-shrink-0"
            >
              <FiChevronDown size={24} className="text-dark-green" />
            </motion.div>
          </button>
          <AnimatePresence>
            {openId === faq.id && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-6 text-gray-600">
                  {faq.answer}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  )
}

export default FAQAccordion
