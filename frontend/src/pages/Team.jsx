import { motion } from 'framer-motion'
import SectionTitle from '../components/SectionTitle/SectionTitle'
import TeamCard from '../components/TeamCard/TeamCard'
import WhatsAppButton from '../components/WhatsAppButton/WhatsAppButton'
import BackToTop from '../components/BackToTop/BackToTop'
import { teamData } from '../data/data'

const Team = () => {
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
              Meet Our <span className="text-gradient">Team</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Skilled professionals dedicated to making you look your best
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-20 bg-dark-400">
        <div className="container-custom">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamData.map((member, index) => (
              <TeamCard
                key={member.id}
                image={member.image}
                name={member.name}
                role={member.role}
                instagram={member.instagram}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section className="py-20 bg-dark-300">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-serif">
              Join Our <span className="text-gradient">Team</span>
            </h2>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              We're always looking for talented individuals to join our growing family
            </p>
            <motion.a
              href="mailto:careers@kasabella.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary"
            >
              Apply Now
            </motion.a>
          </motion.div>
        </div>
      </section>

      <WhatsAppButton />
      <BackToTop />
    </div>
  )
}

export default Team
