import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { FiAward, FiUsers, FiTrendingUp, FiHeart } from 'react-icons/fi'
import Hero from '../components/Hero'
import Card from '../components/Card'
import SectionTitle from '../components/SectionTitle'

const About = () => {
  const values = [
    {
      icon: <FiAward size={40} />,
      title: 'Quality First',
      description: 'We never compromise on quality. Every product we supply and every installation we complete meets the highest standards.'
    },
    {
      icon: <FiUsers size={40} />,
      title: 'Customer Focused',
      description: 'Your satisfaction is our priority. We listen to your needs and deliver solutions that exceed expectations.'
    },
    {
      icon: <FiTrendingUp size={40} />,
      title: 'Continuous Improvement',
      description: 'We stay updated with the latest flooring trends and techniques to provide you with modern, innovative solutions.'
    },
    {
      icon: <FiHeart size={40} />,
      title: 'Passion & Pride',
      description: 'We take pride in every project, treating your home with the care and respect it deserves.'
    }
  ]

  const stats = [
    { number: '15+', label: 'Years Experience' },
    { number: '5000+', label: 'Happy Customers' },
    { number: '100%', label: 'Quality Guarantee' },
    { number: '24/7', label: 'Support Available' }
  ]

  return (
    <>
      <Helmet>
        <title>About Us - M & A Carpets</title>
        <meta name="description" content="Learn about M & A Carpets - your trusted flooring partner with years of experience delivering quality carpet and flooring solutions." />
      </Helmet>

      <Hero
        title="About M & A Carpets"
        subtitle="Your Trusted Flooring Partner for Over 15 Years"
        height="h-[500px]"
      />

      {/* Company Introduction */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-6">
                Welcome to M & A Carpets
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">
                For over 15 years, M & A Carpets has been the trusted name in premium flooring solutions. 
                We specialize in supplying and fitting high-quality carpets, vinyl, laminate, and LVT flooring 
                for both residential and commercial properties.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">
                Our commitment to excellence, attention to detail, and customer-first approach has made us 
                the preferred choice for thousands of satisfied customers across the region.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Whether you're renovating your home, updating a single room, or working on a large commercial 
                project, our experienced team is here to guide you through every step of the process.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-dark-green text-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-beige text-sm md:text-base">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20 bg-beige">
        <div className="container-custom">
          <SectionTitle
            subtitle="Our Mission"
            title="What Drives Us"
          />
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl shadow-soft-lg p-8 md:p-12 mb-16 max-w-4xl mx-auto"
          >
            <p className="text-lg text-gray-700 leading-relaxed text-center">
              Our mission is to transform spaces with premium flooring solutions that combine quality, 
              style, and value. We believe everyone deserves a beautiful home or workspace, and we're 
              committed to making that vision a reality through expert craftsmanship and personalized service.
            </p>
          </motion.div>

          <SectionTitle
            title="Our Core Values"
            className="mb-12"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <Card key={index} delay={index * 0.1}>
                <div className="text-dark-green mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-charcoal mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Team */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <SectionTitle
            subtitle="Our Team"
            title="Professional Installers"
          />
          
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Our team consists of highly skilled, fully trained professionals who take pride in their work. 
                Each installer has years of experience and receives ongoing training to stay current with the 
                latest installation techniques and industry standards.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                <div className="text-center">
                  <div className="w-24 h-24 bg-dark-green rounded-full flex items-center justify-center mx-auto mb-4">
                    <FiAward size={40} className="text-white" />
                  </div>
                  <h3 className="font-bold text-charcoal mb-2">Certified Installers</h3>
                  <p className="text-gray-600 text-sm">All team members hold professional certifications</p>
                </div>
                <div className="text-center">
                  <div className="w-24 h-24 bg-dark-green rounded-full flex items-center justify-center mx-auto mb-4">
                    <FiUsers size={40} className="text-white" />
                  </div>
                  <h3 className="font-bold text-charcoal mb-2">Experienced Team</h3>
                  <p className="text-gray-600 text-sm">Average 10+ years in the flooring industry</p>
                </div>
                <div className="text-center">
                  <div className="w-24 h-24 bg-dark-green rounded-full flex items-center justify-center mx-auto mb-4">
                    <FiHeart size={40} className="text-white" />
                  </div>
                  <h3 className="font-bold text-charcoal mb-2">Customer Care</h3>
                  <p className="text-gray-600 text-sm">Dedicated to your complete satisfaction</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Building Section */}
      <section className="py-20 bg-beige">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-6">
                Why Trust M & A Carpets?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                {[
                  'Free, no-obligation measuring and quotation service',
                  'Competitive pricing with transparent costs',
                  'Wide selection from leading brands',
                  'Professional installation by certified experts',
                  'Full warranty on all workmanship',
                  'Flexible scheduling to suit your needs',
                  'Clean and tidy installation process',
                  'Aftercare support and maintenance advice'
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start space-x-3"
                  >
                    <div className="flex-shrink-0 w-6 h-6 bg-dark-green rounded-full flex items-center justify-center mt-1">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-gray-700">{item}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}

export default About
