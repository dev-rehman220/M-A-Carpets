import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { FiPhone, FiMail, FiMapPin, FiClock } from 'react-icons/fi'
import Hero from '../components/Hero'
import SectionTitle from '../components/SectionTitle'
import ContactForm from '../components/ContactForm'
import Card from '../components/Card'

const Contact = () => {
  const contactInfo = [
    {
      icon: <FiPhone size={30} />,
      title: 'Phone',
      details: '+44 123 456 7890',
      link: 'tel:+441234567890'
    },
    {
      icon: <FiMail size={30} />,
      title: 'Email',
      details: 'info@macarpets.co.uk',
      link: 'mailto:info@macarpets.co.uk'
    },
    {
      icon: <FiMapPin size={30} />,
      title: 'Address',
      details: '123 Flooring Street, London, UK',
      link: 'https://maps.google.com'
    },
    {
      icon: <FiClock size={30} />,
      title: 'Opening Hours',
      details: 'Mon-Sat: 9am-6pm',
      link: null
    }
  ]

  return (
    <>
      <Helmet>
        <title>Contact Us - M & A Carpets</title>
        <meta name="description" content="Get in touch with M & A Carpets for a free consultation and quote. Contact us via phone, email, or visit our showroom." />
      </Helmet>

      <Hero
        title="Contact Us"
        subtitle="Get in Touch for Your Free Consultation"
        height="h-[500px]"
      />

      {/* Contact Info Cards */}
      <section className="py-20 bg-beige">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <Card key={index} delay={index * 0.1} className="text-center">
                <div className="text-dark-green mb-4 flex justify-center">{info.icon}</div>
                <h3 className="font-bold text-charcoal mb-2">{info.title}</h3>
                {info.link ? (
                  <a
                    href={info.link}
                    target={info.link.startsWith('http') ? '_blank' : undefined}
                    rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="text-gray-600 hover:text-dark-green transition-colors"
                  >
                    {info.details}
                  </a>
                ) : (
                  <p className="text-gray-600">{info.details}</p>
                )}
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <SectionTitle
                title="Send Us a Message"
                centered={false}
                className="mb-8"
              />
              <ContactForm />
            </div>

            {/* Booking Form & Map */}
            <div>
              <SectionTitle
                title="Book a Free Consultation"
                centered={false}
                className="mb-8"
              />
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-2xl shadow-soft p-6 mb-8"
              >
                <form className="space-y-4">
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full px-4 py-3 rounded-2xl border-2 border-gray-200 focus:border-dark-green focus:outline-none transition-colors"
                    required
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full px-4 py-3 rounded-2xl border-2 border-gray-200 focus:border-dark-green focus:outline-none transition-colors"
                    required
                  />
                  <input
                    type="date"
                    placeholder="Preferred Date"
                    className="w-full px-4 py-3 rounded-2xl border-2 border-gray-200 focus:border-dark-green focus:outline-none transition-colors"
                    required
                  />
                  <select
                    className="w-full px-4 py-3 rounded-2xl border-2 border-gray-200 focus:border-dark-green focus:outline-none transition-colors"
                    required
                  >
                    <option value="">Preferred Time</option>
                    <option value="morning">Morning (9am-12pm)</option>
                    <option value="afternoon">Afternoon (12pm-3pm)</option>
                    <option value="evening">Evening (3pm-6pm)</option>
                  </select>
                  <button
                    type="submit"
                    className="w-full bg-dark-green text-white py-3 rounded-2xl font-semibold hover:bg-dark-green-dark transition-all duration-300 shadow-soft hover:shadow-soft-lg"
                  >
                    Book Consultation
                  </button>
                </form>
              </motion.div>

              {/* Map Placeholder */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-gray-200 rounded-2xl overflow-hidden shadow-soft h-64"
              >
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-charcoal to-dark-green text-white">
                  <div className="text-center">
                    <FiMapPin size={48} className="mx-auto mb-4" />
                    <p className="font-semibold">Map Integration</p>
                    <p className="text-sm text-beige">Google Maps can be integrated here</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Contact Us Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <SectionTitle
            subtitle="Get Started"
            title="Why Contact Us Today?"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: 'Free Measuring',
                description: 'No-obligation measuring service at your convenience'
              },
              {
                title: 'Expert Advice',
                description: 'Professional guidance on the best flooring for your needs'
              },
              {
                title: 'Competitive Quotes',
                description: 'Transparent pricing with no hidden costs'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-dark-green rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-dark-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-charcoal mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WhatsApp CTA */}
      <section className="py-16 bg-green-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-charcoal mb-4">
              Prefer to Chat on WhatsApp?
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Click the WhatsApp button at the bottom right to start a conversation with us instantly!
            </p>
            <a
              href="https://wa.me/441234567890?text=Hi!%20I%20would%20like%20to%20inquire%20about%20your%20flooring%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-green-500 text-white px-8 py-4 rounded-2xl font-semibold hover:bg-green-600 transition-all duration-300 shadow-soft hover:shadow-soft-lg"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              <span>Chat on WhatsApp</span>
            </a>
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default Contact
