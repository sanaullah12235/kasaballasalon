import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiMaximize2, FiPlay } from 'react-icons/fi'

const GalleryItem = ({ image, title, type, isVideo = false, index }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      className="relative group overflow-hidden rounded-xl cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image */}
      <motion.img
        src={image}
        alt={title}
        loading="lazy"
        className="w-full h-full object-cover"
        animate={{ scale: isHovered ? 1.1 : 1 }}
        transition={{ duration: 0.5 }}
      />

      {/* Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        className="absolute inset-0 bg-gradient-to-t from-dark-400/90 via-dark-400/50 to-transparent flex flex-col items-center justify-center"
      >
        {/* Icon */}
        <motion.div
          initial={{ scale: 0.5 }}
          animate={{ scale: isHovered ? 1 : 0.5 }}
          className="w-16 h-16 bg-gold-500 rounded-full flex items-center justify-center mb-4"
        >
          {isVideo ? (
            <FiPlay className="text-dark-400 text-2xl ml-1" />
          ) : (
            <FiMaximize2 className="text-dark-400 text-2xl" />
          )}
        </motion.div>

        {/* Info */}
        <h3 className="text-white text-lg font-semibold font-serif">{title}</h3>
        <p className="text-gold-500 text-sm">{type}</p>
      </motion.div>

      {/* Border Effect */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        className="absolute inset-0 border-2 border-gold-500/50 rounded-xl"
      />
    </motion.div>
  )
}

export default GalleryItem
