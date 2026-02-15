import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiChevronLeft, FiChevronRight, FiStar } from 'react-icons/fi'

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    location: 'London',
    rating: 5,
    text: 'Exceptional service from start to finish. The team was professional, punctual, and the quality of work exceeded our expectations. Our new carpet looks absolutely stunning!'
  },
  {
    id: 2,
    name: 'Michael Brown',
    location: 'Manchester',
    rating: 5,
    text: 'Highly recommend M & A Carpets! They helped us choose the perfect flooring for our home and the installation was flawless. Great value for money.'
  },
  {
    id: 3,
    name: 'Emma Wilson',
    location: 'Birmingham',
    rating: 5,
    text: 'Fantastic experience! The free measuring service was very helpful, and the fitters were incredibly skilled. Will definitely use them again for our next project.'
  },
  {
    id: 4,
    name: 'David Taylor',
    location: 'Leeds',
    rating: 5,
    text: 'Professional team with excellent attention to detail. Our LVT flooring looks amazing and has transformed our entire home. Thank you!'
  },
  {
    id: 5,
    name: 'Lisa Anderson',
    location: 'Bristol',
    rating: 5,
    text: 'Outstanding quality and service. The team took time to understand our needs and delivered exactly what we wanted. Couldn\'t be happier with our new laminate flooring.'
  }
]

const TestimonialSlider = () => {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext()
    }, 5000)
    return () => clearInterval(timer)
  }, [current])

  const handleNext = () => {
    setDirection(1)
    setCurrent((prev) => (prev + 1) % testimonials.length)
  }

  const handlePrev = () => {
    setDirection(-1)
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  }

  return (
    <div className="relative max-w-4xl mx-auto">
      <div className="relative overflow-hidden min-h-[280px] flex items-center">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={current}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.5 }}
            className="w-full"
          >
            <div className="bg-white rounded-2xl shadow-soft-lg p-8 md:p-12">
              {/* Stars */}
              <div className="flex justify-center mb-4">
                {[...Array(testimonials[current].rating)].map((_, i) => (
                  <FiStar key={i} className="text-yellow-500 fill-current" size={24} />
                ))}
              </div>

              {/* Quote */}
              <p className="text-lg md:text-xl text-charcoal text-center mb-6 italic">
                "{testimonials[current].text}"
              </p>

              {/* Author */}
              <div className="text-center">
                <p className="font-bold text-charcoal">{testimonials[current].name}</p>
                <p className="text-sm text-gray-600">{testimonials[current].location}</p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={handlePrev}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 w-12 h-12 bg-white rounded-full shadow-soft flex items-center justify-center hover:bg-dark-green hover:text-white transition-all duration-300"
        aria-label="Previous testimonial"
      >
        <FiChevronLeft size={24} />
      </button>
      <button
        onClick={handleNext}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 w-12 h-12 bg-white rounded-full shadow-soft flex items-center justify-center hover:bg-dark-green hover:text-white transition-all duration-300"
        aria-label="Next testimonial"
      >
        <FiChevronRight size={24} />
      </button>

      {/* Dots */}
      <div className="flex justify-center mt-8 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setDirection(index > current ? 1 : -1)
              setCurrent(index)
            }}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === current ? 'bg-dark-green w-8' : 'bg-gray-300'
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

export default TestimonialSlider
