import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { 
  FiPackage, 
  FiLayers, 
  FiDroplet, 
  FiGrid, 
  FiTrendingUp, 
  FiBriefcase 
} from 'react-icons/fi'
import Hero from '../components/Hero'
import Card from '../components/Card'
import SectionTitle from '../components/SectionTitle'
import Button from '../components/Button'

const Services = () => {
  const services = [
    {
      icon: <FiPackage size={50} />,
      title: 'Carpet Supply & Fitting',
      description: 'Premium quality carpets in a wide range of styles, colors, and textures. Professional fitting service ensures a perfect finish that enhances comfort and style.',
      features: [
        'Extensive range of carpets',
        'Professional measuring',
        'Expert installation',
        'Quality underlay options',
        'Stain-resistant treatments'
      ],
      image: 'https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?w=800'
    },
    {
      icon: <FiLayers size={50} />,
      title: 'Laminate Flooring',
      description: 'Durable, attractive laminate flooring that mimics the look of real wood. Easy to maintain and perfect for high-traffic areas in your home or business.',
      features: [
        'Wood-effect designs',
        'Scratch resistant',
        'Easy maintenance',
        'Long-lasting durability',
        'Quick installation'
      ],
      image: 'https://images.unsplash.com/photo-1615873968403-89e068629265?w=800'
    },
    {
      icon: <FiDroplet size={50} />,
      title: 'Vinyl Flooring',
      description: 'Waterproof vinyl flooring ideal for kitchens, bathrooms, and utility rooms. Available in various designs including wood and stone effects.',
      features: [
        '100% waterproof',
        'Slip-resistant options',
        'Hygienic and easy to clean',
        'Comfortable underfoot',
        'Wide design selection'
      ],
      image: 'https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?w=800'
    },
    {
      icon: <FiGrid size={50} />,
      title: 'Luxury Vinyl Tile (LVT)',
      description: 'Premium LVT flooring combining the beauty of natural materials with outstanding durability and easy maintenance. Perfect for modern living.',
      features: [
        'Realistic wood/stone looks',
        'Exceptional durability',
        'Underfloor heating compatible',
        'Sound absorbent',
        'Eco-friendly options'
      ],
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800'
    },
    {
      icon: <FiTrendingUp size={50} />,
      title: 'Stair Carpets',
      description: 'Specialized stair carpet fitting service. We ensure safe, secure installation on stairs and landings with professional finishing.',
      features: [
        'Safety-focused installation',
        'Durable stair-specific carpets',
        'Custom fitting',
        'Rods and gripper options',
        'Landing integration'
      ],
      image: 'https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=800'
    },
    {
      icon: <FiBriefcase size={50} />,
      title: 'Commercial Flooring',
      description: 'Complete commercial flooring solutions for offices, retail spaces, and hospitality venues. High-performance products and professional installation.',
      features: [
        'Heavy-duty options',
        'Minimal disruption',
        'Large-scale projects',
        'Maintenance plans',
        'Safety compliant'
      ],
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800'
    }
  ]

  return (
    <>
      <Helmet>
        <title>Our Services - M & A Carpets</title>
        <meta name="description" content="Professional carpet and flooring services including carpet fitting, laminate, vinyl, LVT, and commercial flooring solutions." />
      </Helmet>

      <Hero
        title="Our Services"
        subtitle="Professional Flooring Solutions for Every Space"
        height="h-[500px]"
      />

      {/* Services Grid */}
      <section className="py-20 bg-beige">
        <div className="container-custom">
          <SectionTitle
            subtitle="What We Offer"
            title="Comprehensive Flooring Services"
          />

          <div className="space-y-12">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card hover={false} className="overflow-hidden">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Image */}
                    <div className={`order-2 ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                      <div className="aspect-video lg:aspect-square rounded-xl overflow-hidden">
                        <img
                          src={service.image}
                          alt={service.title}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </div>
                    </div>

                    {/* Content */}
                    <div className={`order-1 ${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'} flex flex-col justify-center`}>
                      <div className="text-dark-green mb-4">{service.icon}</div>
                      <h3 className="text-2xl md:text-3xl font-bold text-charcoal mb-4">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 mb-6 text-lg">
                        {service.description}
                      </p>
                      <ul className="space-y-3 mb-6">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center space-x-3">
                            <div className="flex-shrink-0 w-5 h-5 bg-dark-green rounded-full flex items-center justify-center">
                              <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                            </div>
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <div>
                        <Button variant="primary" href="/contact">
                          Get a Quote
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <SectionTitle
            subtitle="Our Process"
            title="How We Work"
          />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              {
                step: '01',
                title: 'Consultation',
                description: 'Free home visit to discuss your needs and measure your space'
              },
              {
                step: '02',
                title: 'Selection',
                description: 'Choose from our extensive range with expert guidance'
              },
              {
                step: '03',
                title: 'Quotation',
                description: 'Receive a detailed, transparent quote with no hidden costs'
              },
              {
                step: '04',
                title: 'Installation',
                description: 'Professional fitting by our experienced team'
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
                <div className="w-20 h-20 bg-dark-green text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-charcoal mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-dark-green text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Ready to Transform Your Space?
            </h2>
            <p className="text-lg md:text-xl text-beige mb-8 max-w-2xl mx-auto">
              Contact us today for a free consultation and discover the perfect flooring solution for your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" href="/contact">
                Get Free Quote
              </Button>
              <Button variant="outline" href="/gallery" className="border-white text-white">
                View Gallery
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default Services
