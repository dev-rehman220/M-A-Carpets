import { Helmet } from 'react-helmet-async'
import Hero from '../components/Hero'
import SectionTitle from '../components/SectionTitle'
import GalleryGrid from '../components/GalleryGrid'
import Button from '../components/Button'
import { motion } from 'framer-motion'

const Gallery = () => {
  return (
    <>
      <Helmet>
        <title>Gallery - M & A Carpets</title>
        <meta name="description" content="View our portfolio of completed flooring projects. Browse through carpets, laminate, vinyl, and LVT installations." />
      </Helmet>

      <Hero
        title="Our Gallery"
        subtitle="Explore Our Completed Projects"
        height="h-[500px]"
      />

      {/* Gallery Section */}
      <section className="py-20 bg-beige">
        <div className="container-custom">
          <SectionTitle
            subtitle="Portfolio"
            title="Quality Work We're Proud Of"
          />
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center text-gray-600 mb-12 max-w-3xl mx-auto text-lg"
          >
            Browse through our collection of completed projects showcasing the quality and 
            variety of our flooring installations. Each project represents our commitment to 
            excellence and customer satisfaction.
          </motion.p>

          <GalleryGrid />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-6">
              Inspired by What You See?
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Let us help you create a beautiful space with our professional flooring services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" href="/contact">
                Start Your Project
              </Button>
              <Button variant="outline" href="/services">
                View Services
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default Gallery
