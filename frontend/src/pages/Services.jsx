import { motion } from 'framer-motion'
import SectionTitle from '../components/SectionTitle/SectionTitle'
import ServiceCard from '../components/ServiceCard/ServiceCard'
import WhatsAppButton from '../components/WhatsAppButton/WhatsAppButton'
import BackToTop from '../components/BackToTop/BackToTop'
import { servicesData } from '../data/data'

const Services = () => {
  return (
    <div>
      {/* Hero */}
      <section className="pt-40 pb-20 bg-black">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 font-serif uppercase tracking-tighter">
              Our <span className="text-gold-500">Services</span>
            </h1>
            <p className="text-beige-300/60 text-lg max-w-2xl mx-auto font-light tracking-widest uppercase text-sm">
              Comprehensive luxury beauty solutions
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-black">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((service, index) => (
              <ServiceCard
                key={service.id}
                image={service.image}
                title={service.title}
                description={service.description}
                price={service.price}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-dark-300">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-serif">
              Ready for a <span className="text-gradient">Transformation</span>?
            </h2>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Book your appointment today and experience the Kasa Bella difference
            </p>
            <motion.a
              href="/#appointment"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary"
            >
              Book Now
            </motion.a>
          </motion.div>
        </div>
      </section>

      <WhatsAppButton />
      <BackToTop />
    </div>
  )
}

export default Services
