import { motion } from 'framer-motion'
import { FiInstagram } from 'react-icons/fi'

const TeamCard = ({ image, name, role, instagram, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group relative h-[400px] perspective-1000"
    >
      <motion.div
        className="relative w-full h-full transform-style-preserve-3d transition-transform duration-700 group-hover:rotate-y-180"
        style={{ transformStyle: 'preserve-3d' }}
        whileHover={{ rotateY: 180 }}
      >
        {/* Front */}
        <div
          className="absolute inset-0 backface-hidden rounded-2xl overflow-hidden"
          style={{ backfaceVisibility: 'hidden' }}
        >
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark-400 via-transparent to-transparent" />
          
          {/* Name Overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <h3 className="text-2xl font-bold text-white font-serif">{name}</h3>
            <p className="text-gold-500">{role}</p>
          </div>
        </div>

        {/* Back */}
        <div
          className="absolute inset-0 bg-gradient-to-br from-dark-200 to-dark-300 rounded-2xl p-8 flex flex-col items-center justify-center border border-gold-500/30"
          style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
        >
          <div className="w-32 h-32 rounded-full overflow-hidden mb-6 border-4 border-gold-500">
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover"
            />
          </div>
          
          <h3 className="text-2xl font-bold text-white font-serif mb-2">{name}</h3>
          <p className="text-gold-500 mb-4">{role}</p>
          
          <p className="text-gray-400 text-sm text-center mb-6">
            Expert stylist with years of experience in premium hair care and styling.
          </p>

          <a
            href={instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 bg-gold-500 rounded-full flex items-center justify-center text-dark-400 hover:bg-gold-600 transition-colors"
          >
            <FiInstagram className="text-xl" />
          </a>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default TeamCard
