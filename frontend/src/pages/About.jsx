import { motion } from 'framer-motion'
import SectionTitle from '../components/SectionTitle/SectionTitle'
import Counter from '../components/Counter/Counter'
import WhatsAppButton from '../components/WhatsAppButton/WhatsAppButton'
import BackToTop from '../components/BackToTop/BackToTop'

const About = () => {
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
              About <span className="text-gradient">Kasa Bella</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Your premier destination for luxury grooming and wellness
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-dark-400">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.unsplash.com/photo-1560066984-138dadb5c4b2?w=800"
                alt="About Kasa Bella"
                className="w-full rounded-2xl shadow-2xl"
                loading="lazy"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-6 font-serif">Our Story</h2>
              <p className="text-gray-300 mb-4 leading-relaxed">
                Founded in Hyderabad, Kasa Bella has been at the forefront of premium grooming experiences. 
                Our journey began with a simple vision: to create a space where artistry meets excellence.
              </p>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Today, we're proud to be the trusted choice for thousands of clients who seek nothing but 
                the best in hair care, styling, and wellness treatments.
              </p>
              <div className="grid grid-cols-3 gap-6">
                <Counter end={5000} suffix="+" label="Happy Clients" />
                <Counter end={50} suffix="+" label="Services" />
                <Counter end={10} suffix="+" label="Years" />
              </div>
            </motion.div>
          </div>

          {/* Mission & Vision */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-dark-200 rounded-2xl p-8 border border-dark-100"
            >
              <h3 className="text-2xl font-bold mb-4 font-serif text-gold-500">Our Mission</h3>
              <p className="text-gray-400 leading-relaxed">
                To deliver exceptional grooming experiences that empower our clients to look and feel 
                their absolute best, every single day.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-dark-200 rounded-2xl p-8 border border-dark-100"
            >
              <h3 className="text-2xl font-bold mb-4 font-serif text-gold-500">Our Vision</h3>
              <p className="text-gray-400 leading-relaxed">
                To be Hyderabad's most trusted and innovative salon brand, setting new standards 
                in grooming excellence and client satisfaction.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <WhatsAppButton />
      <BackToTop />
    </div>
  )
}

export default About
