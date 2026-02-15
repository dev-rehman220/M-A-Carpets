import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { FiCheck, FiDollarSign, FiUsers, FiPackage } from 'react-icons/fi'
import Hero from '../components/Hero'
import Card from '../components/Card'
import SectionTitle from '../components/SectionTitle'
import Button from '../components/Button'
import TestimonialSlider from '../components/TestimonialSlider'
import FAQAccordion from '../components/FAQAccordion'

const Home = () => {
  const features = [
    {
      icon: <FiCheck size={40} />,
      title: 'Free Measuring Service',
      description: 'Professional measuring at no cost to ensure perfect fitting and accurate quotations.'
    },
    {
      icon: <FiUsers size={40} />,
      title: 'Professional Fitting',
      description: 'Expert installers with years of experience delivering flawless results every time.'
    },
    {
      icon: <FiDollarSign size={40} />,
      title: 'Affordable Prices',
      description: 'Competitive pricing without compromising on quality. Best value for your investment.'
    },
    {
      icon: <FiPackage size={40} />,
      title: 'Wide Selection',
      description: 'Extensive range of carpets and flooring options from leading brands.'
    }
  ]

  const products = [
    {
      name: 'Carpet',
      description: 'Luxurious comfort and warmth for any room in your home.',
      image: 'https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?w=600',
      link: '/services'
    },
    {
      name: 'Vinyl',
      description: 'Durable, waterproof flooring perfect for kitchens and bathrooms.',
      image: 'https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?w=600',
      link: '/services'
    },
    {
      name: 'Laminate',
      description: 'Stylish wood-effect flooring that\'s easy to maintain.',
      image: 'https://images.unsplash.com/photo-1615873968403-89e068629265?w=600',
      link: '/services'
    },
    {
      name: 'LVT',
      description: 'Premium luxury vinyl tiles combining beauty and durability.',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600',
      link: '/services'
    }
  ]

  return (
    <>
      <Helmet>
        <title>M & A Carpets - Premium Carpets & Flooring Solutions</title>
        <meta name="description" content="Professional carpet and flooring services with free measuring, expert fitting, and competitive prices. Transform your space with quality flooring." />
      </Helmet>

      {/* Hero Section */}
      <Hero
        title="Premium Carpets & Flooring Solutions in Your Area"
        subtitle="Quality Supply & Expert Fitting at Competitive Prices"
        primaryButton={{ text: 'Get Free Quote', href: '/contact' }}
        secondaryButton={{ text: 'View Our Range', href: '/services' }}
        height="h-[700px]"
      />

      {/* Why Choose Us Section */}
      <section className="py-20 bg-beige">
        <div className="container-custom">
          <SectionTitle
            subtitle="Why Choose Us"
            title="Your Trusted Flooring Partner"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} delay={index * 0.1}>
                <div className="text-dark-green mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-charcoal mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <SectionTitle
            subtitle="Our Products"
            title="Premium Flooring Options"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="relative overflow-hidden rounded-2xl shadow-soft hover:shadow-soft-lg transition-all duration-300">
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 to-transparent flex flex-col justify-end p-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{product.name}</h3>
                    <p className="text-beige text-sm mb-4">{product.description}</p>
                    <Button variant="secondary" href={product.link} className="text-sm">
                      Learn More
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-beige">
        <div className="container-custom">
          <SectionTitle
            subtitle="Testimonials"
            title="What Our Customers Say"
          />
          <TestimonialSlider />
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 bg-dark-green text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Book Your Free Home Consultation Today
            </h2>
            <p className="text-lg md:text-xl text-beige mb-8 max-w-2xl mx-auto">
              Let our experts help you choose the perfect flooring solution for your space.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" href="/contact">
                Schedule Consultation
              </Button>
              <Button variant="outline" href="tel:+441234567890" className="border-white text-white">
                Call Now
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <SectionTitle
            subtitle="FAQ"
            title="Frequently Asked Questions"
          />
          <FAQAccordion />
        </div>
      </section>
    </>
  )
}

export default Home
