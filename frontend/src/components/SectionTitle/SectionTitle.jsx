import { motion } from 'framer-motion'

const SectionTitle = ({ title, subtitle, light = false }) => {
  return (
    <div className="text-center mb-16 md:mb-24">
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-gold-500 text-[10px] md:text-xs tracking-[0.4em] uppercase mb-4 font-light"
      >
        Kasa Bella Exclusive
      </motion.p>
      
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl md:text-5xl lg:text-6xl font-bold mb-8 font-serif text-white tracking-tight uppercase"
      >
        {title}
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, width: 0 }}
        whileInView={{ opacity: 1, width: 80 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.2 }}
        className="h-[1px] bg-gold-500 mx-auto mb-8"
      />

      {subtitle && (
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-beige-300 text-sm md:text-base max-w-2xl mx-auto font-light tracking-widest leading-relaxed opacity-80"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  )
}

export default SectionTitle
