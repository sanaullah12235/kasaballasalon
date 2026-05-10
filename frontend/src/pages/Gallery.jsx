import { useState } from 'react'
import { motion } from 'framer-motion'
import SectionTitle from '../components/SectionTitle/SectionTitle'
import GalleryItem from '../components/GalleryItem/GalleryItem'
import WhatsAppButton from '../components/WhatsAppButton/WhatsAppButton'
import BackToTop from '../components/BackToTop/BackToTop'
import { galleryData } from '../data/data'

const Gallery = () => {
  const [filter, setFilter] = useState('All')
  
  const categories = ['All', ...new Set(galleryData.map(item => item.type))]
  
  const filteredData = filter === 'All' 
    ? galleryData 
    : galleryData.filter(item => item.type === filter)

  return (
    <div>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-dark-300">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-4 font-serif">
              Our <span className="text-gradient">Gallery</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Browse through our portfolio of stunning transformations
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-dark-400">
        <div className="container-custom">
          {/* Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {categories.map((category, index) => (
              <motion.button
                key={category}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                onClick={() => setFilter(category)}
                className={`px-6 py-2 rounded-full transition-all duration-300 ${
                  filter === category
                    ? 'bg-gold-500 text-dark-400 font-semibold'
                    : 'bg-dark-200 text-gray-400 hover:bg-dark-100'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>

          {/* Masonry Grid */}
          <motion.div
            layout
            className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4"
          >
            {filteredData.map((item, index) => (
              <motion.div layout key={item.id}>
                <GalleryItem
                  image={item.image}
                  title={item.title}
                  type={item.type}
                  index={index}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <WhatsAppButton />
      <BackToTop />
    </div>
  )
}

export default Gallery
