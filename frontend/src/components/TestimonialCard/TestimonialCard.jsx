import { motion } from 'framer-motion'
import { FiStar } from 'react-icons/fi'

const TestimonialCard = ({ name, review, rating, image }) => {
  return (
    <motion.div
      className="bg-dark-200 rounded-2xl p-8 border border-dark-100 hover:border-gold-500/50 transition-all duration-300"
      whileHover={{ y: -5 }}
    >
      {/* Quote Icon */}
      <div className="text-gold-500 text-4xl font-serif mb-4">"</div>
      
      {/* Review Text */}
      <p className="text-gray-300 mb-6 leading-relaxed italic">
        {review}
      </p>

      {/* Rating */}
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <FiStar
            key={i}
            className={`text-lg ${
              i < rating ? 'text-gold-500 fill-gold-500' : 'text-gray-600'
            }`}
          />
        ))}
      </div>

      {/* Client Info */}
      <div className="flex items-center gap-4">
        <img
          src={image}
          alt={name}
          className="w-12 h-12 rounded-full object-cover border-2 border-gold-500"
        />
        <div>
          <h4 className="text-white font-semibold">{name}</h4>
          <p className="text-gray-400 text-sm">Happy Client</p>
        </div>
      </div>
    </motion.div>
  )
}

export default TestimonialCard
