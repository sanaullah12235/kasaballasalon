import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiCalendar, FiUser, FiArrowLeft } from 'react-icons/fi'
import { blogData } from '../data/data'
import WhatsAppButton from '../components/WhatsAppButton/WhatsAppButton'
import BackToTop from '../components/BackToTop/BackToTop'
import { useEffect } from 'react'

const BlogDetail = () => {
  const { slug } = useParams()
  const post = blogData.find((b) => b.slug === slug)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  if (!post) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center pt-20">
        <div className="text-center">
          <h2 className="text-4xl font-serif text-white mb-4">Blog Post Not Found</h2>
          <Link to="/blog" className="text-gold-500 hover:text-gold-600 transition-colors">
            ← Back to Blog
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Header */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-black">
        <motion.img
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.6 }}
          transition={{ duration: 1.5 }}
          src={post.image}
          alt={post.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-10 container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <Link 
              to="/blog" 
              className="inline-flex items-center gap-2 text-gold-500 text-sm uppercase tracking-widest mb-6 hover:text-white transition-colors"
            >
              <FiArrowLeft /> Back to Blog
            </Link>
            <h1 className="text-4xl md:text-6xl font-serif text-white mb-6 leading-tight max-w-4xl mx-auto">
              {post.title}
            </h1>
            <div className="flex items-center justify-center gap-8 text-white/70 text-sm uppercase tracking-[0.2em]">
              <div className="flex items-center gap-2">
                <FiCalendar className="text-gold-500" />
                {post.date}
              </div>
              <div className="flex items-center gap-2">
                <FiUser className="text-gold-500" />
                Kasa Bella Expert
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-white">
        <div className="container-custom max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="prose prose-lg max-w-none prose-zinc"
          >
            <p className="text-xl text-gray-600 font-light leading-relaxed mb-12 border-l-4 border-gold-500 pl-8 italic">
              {post.excerpt}
            </p>
            
            <div className="text-gray-800 leading-relaxed space-y-8 font-light text-lg">
              <p>
                Kasa Bella Hair Salon & Spa is the First Branded Hair Salon and Spa in Hyderabad. We provide professional, premium-quality beauty, hair, and spa services with modern techniques and expert stylists.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              </p>
              <h3 className="text-3xl font-serif text-black mt-12 mb-6">Expert Grooming Solutions</h3>
              <p>
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
              </p>
              <div className="my-12 aspect-video rounded-sm overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1560066984-138dadb5c4b2?w=1200" 
                  alt="Salon Experience" 
                  className="w-full h-full object-cover"
                />
              </div>
              <p>
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
              </p>
            </div>

            {/* Tags/Categories */}
            <div className="mt-16 pt-8 border-t border-gray-100 flex flex-wrap gap-4">
              {['Hair Care', 'Luxury', 'Hyderabad', 'Beauty'].map(tag => (
                <span key={tag} className="px-4 py-2 bg-gray-50 text-gray-500 text-xs uppercase tracking-widest rounded-full">
                  #{tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <WhatsAppButton />
      <BackToTop />
    </div>
  )
}

export default BlogDetail
