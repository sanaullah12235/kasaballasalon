import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const BlogCard = ({ image, title, excerpt, date, slug, index }) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group bg-dark-200 rounded-2xl overflow-hidden border border-dark-100 hover:border-gold-500/50 transition-all duration-500"
    >
      {/* Image */}
      <div className="relative h-56 overflow-hidden">
        <motion.img
          src={image}
          alt={title}
          loading="lazy"
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.5 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-400 to-transparent opacity-60" />
        
        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className="bg-gold-500 text-dark-400 text-xs font-semibold px-3 py-1 rounded-full">
            Hair Care
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Date */}
        <p className="text-gray-500 text-sm mb-3">{date}</p>

        {/* Title */}
        <h3 className="text-xl font-semibold text-white mb-3 font-serif group-hover:text-gold-500 transition-colors duration-300 line-clamp-2">
          {title}
        </h3>

        {/* Excerpt */}
        <p className="text-gray-400 text-sm mb-4 line-clamp-3 leading-relaxed">
          {excerpt}
        </p>

        {/* Read More */}
        <Link
          to={`/blog/${slug}`}
          className="inline-flex items-center gap-2 text-gold-500 hover:text-gold-600 font-medium transition-colors duration-300"
        >
          Read More →
        </Link>
      </div>
    </motion.article>
  )
}

export default BlogCard
