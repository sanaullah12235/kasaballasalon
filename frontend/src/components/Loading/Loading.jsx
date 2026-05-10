import { motion } from 'framer-motion'

const Loading = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black flex items-center justify-center z-[100]"
    >
      <div className="relative">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ 
            duration: 1.5,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse"
          }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-6xl font-serif text-gold-500 tracking-[0.3em] uppercase">
            Kasa Bella
          </h1>
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 2, ease: "easeInOut", repeat: Infinity }}
            className="h-[1px] bg-gold-500/50 mt-4 mx-auto"
          />
          <p className="text-beige-300 text-xs tracking-[0.5em] uppercase mt-4 opacity-70">
            Studio & Academy
          </p>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default Loading
