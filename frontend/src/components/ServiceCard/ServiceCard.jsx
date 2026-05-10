import { motion } from 'framer-motion'

const ServiceCard = ({ image, title, description, index, price }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className="group relative h-[450px] overflow-hidden rounded-sm cursor-pointer"
    >
      {/* Background Image */}
      <motion.img
        src={image}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent transition-opacity duration-500 group-hover:bg-black/80" />

      {/* Content */}
      <div className="absolute inset-0 p-8 flex flex-col justify-end">
        <h3 className="text-2xl font-serif text-white mb-2 tracking-wider transition-transform duration-500 group-hover:-translate-y-2">
          {title}
        </h3>
        
        <div className="h-0 overflow-hidden transition-all duration-500 group-hover:h-auto opacity-0 group-hover:opacity-100">
          <p className="text-beige-300 text-sm mb-4 leading-relaxed font-light">
            {description}
          </p>
          {price && (
            <p className="text-gold-500 font-medium tracking-widest text-xs uppercase">
              {price}
            </p>
          )}
        </div>
        
        {/* Subtle Line Animation */}
        <motion.div 
          className="w-12 h-[1px] bg-gold-500 mt-4 transition-all duration-500 group-hover:w-full"
        />
      </div>
    </motion.div>
  )
}

export default ServiceCard
