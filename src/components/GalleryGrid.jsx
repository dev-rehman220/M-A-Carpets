import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiX } from 'react-icons/fi'

const categories = ['All', 'Carpet', 'Laminate', 'Vinyl', 'LVT']

// Sample gallery images - replace with actual images
const galleryItems = [
  { id: 1, category: 'Carpet', title: 'Luxury Bedroom Carpet', image: 'https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?w=800' },
  { id: 2, category: 'Laminate', title: 'Modern Laminate Flooring', image: 'https://images.unsplash.com/photo-1615873968403-89e068629265?w=800' },
  { id: 3, category: 'Vinyl', title: 'Kitchen Vinyl Flooring', image: 'https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?w=800' },
  { id: 4, category: 'LVT', title: 'Premium LVT Installation', image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800' },
  { id: 5, category: 'Carpet', title: 'Stair Carpet Fitting', image: 'https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=800' },
  { id: 6, category: 'Laminate', title: 'Oak Laminate Flooring', image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800' },
  { id: 7, category: 'Vinyl', title: 'Bathroom Vinyl', image: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800' },
  { id: 8, category: 'Carpet', title: 'Living Room Carpet', image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800' },
  { id: 9, category: 'LVT', title: 'Commercial LVT', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800' },
  { id: 10, category: 'Laminate', title: 'Herringbone Laminate', image: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800' },
  { id: 11, category: 'Vinyl', title: 'Wood Effect Vinyl', image: 'https://images.unsplash.com/photo-1600566752229-250ed79470e8?w=800' },
  { id: 12, category: 'Carpet', title: 'Commercial Carpet', image: 'https://images.unsplash.com/photo-1600566753104-4082dc4e6e19?w=800' },
]

const GalleryGrid = () => {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedImage, setSelectedImage] = useState(null)

  const filteredItems = selectedCategory === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory)

  return (
    <>
      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-6 py-2 rounded-2xl font-semibold transition-all duration-300 ${
              selectedCategory === category
                ? 'bg-dark-green text-white shadow-soft'
                : 'bg-white text-charcoal hover:bg-beige shadow-soft'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredItems.map((item, index) => (
          <motion.div
            key={item.id}
            layout
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer shadow-soft hover:shadow-soft-lg transition-all duration-300"
            onClick={() => setSelectedImage(item)}
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
              <div className="p-4 w-full">
                <h3 className="text-white font-semibold">{item.title}</h3>
                <p className="text-beige text-sm">{item.category}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-charcoal/95 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
            aria-label="Close"
          >
            <FiX size={24} className="text-white" />
          </button>
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            className="max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage.image}
              alt={selectedImage.title}
              className="w-full h-auto rounded-2xl shadow-soft-lg"
            />
            <div className="mt-4 text-center">
              <h3 className="text-white text-2xl font-bold">{selectedImage.title}</h3>
              <p className="text-beige">{selectedImage.category}</p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  )
}

export default GalleryGrid
