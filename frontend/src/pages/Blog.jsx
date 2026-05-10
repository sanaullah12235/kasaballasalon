import { motion } from 'framer-motion'
import SectionTitle from '../components/SectionTitle/SectionTitle'
import BlogCard from '../components/BlogCard/BlogCard'
import WhatsAppButton from '../components/WhatsAppButton/WhatsAppButton'
import BackToTop from '../components/BackToTop/BackToTop'
import { blogData } from '../data/data'

const Blog = () => {
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
              Our <span className="text-gradient">Blog</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Stay updated with the latest grooming tips and trends
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20 bg-dark-400">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogData.map((post, index) => (
              <BlogCard
                key={post.id}
                image={post.image}
                title={post.title}
                excerpt={post.excerpt}
                date={post.date}
                slug={post.slug}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      <WhatsAppButton />
      <BackToTop />
    </div>
  )
}

export default Blog
