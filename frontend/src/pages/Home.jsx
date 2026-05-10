import { useState, useEffect } from 'react'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { FiPhone, FiMapPin, FiCheck } from 'react-icons/fi'
import SectionTitle from '../components/SectionTitle/SectionTitle'
import ServiceCard from '../components/ServiceCard/ServiceCard'
import TeamCard from '../components/TeamCard/TeamCard'
import BlogCard from '../components/BlogCard/BlogCard'
import GalleryItem from '../components/GalleryItem/GalleryItem'
import WhatsAppButton from '../components/WhatsAppButton/WhatsAppButton'
import BackToTop from '../components/BackToTop/BackToTop'
import Counter from '../components/Counter/Counter'
import { servicesData, teamData, blogData, testimonialsData, galleryData } from '../data/data'
import axios from 'axios'

const Home = () => {
  const { scrollY } = useScroll()
  const opacity = useTransform(scrollY, [0, 300], [1, 0])

  // Hero Slider with reliable luxury images
  const [currentSlide, setCurrentSlide] = useState(0)
  const heroImages = [
   "/images/herosection1.jpg",
   "/images/herosection2.jpg",
   "/images/herosection3.jpg",
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  // Form handling
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    date: '',
    time: '',
  })
  const [formStatus, setFormStatus] = useState('')

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setFormStatus('submitting')
    try {
      await axios.post('/api/appointment', formData)
      setFormStatus('success')
      setFormData({ name: '', phone: '', service: '', date: '', time: '' })
      setTimeout(() => setFormStatus(''), 3000)
    } catch (error) {
      setFormStatus('error')
      setTimeout(() => setFormStatus(''), 3000)
    }
  }

  // Text Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.5
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
    }
  }

  return (
    <div className="bg-black text-white">
      {/* SECTION 1: HERO */}
      <section className="relative h-screen flex items-center overflow-hidden">
        {/* Background Slider */}
        <div className="absolute inset-0 z-0">
          <AnimatePresence mode='wait'>
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 2, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <img
                src={heroImages[currentSlide]}
                alt="Luxury Salon Interior"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/60" />
              <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent" />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Content Container with 100px left padding */}
        <div className="relative z-10 w-full px-6 md:pl-[100px]  pt-38" >
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-4xl"
          >
            <motion.p
              variants={itemVariants}
              className="text-gold-500 text-sm md:text-base mb-6 tracking-[0.5em] uppercase font-light"
            >
              Salon | Studio | Academy
            </motion.p>

            <motion.h1 
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-serif tracking-tight leading-tight"
            >
            
              KASA BELLA
            </motion.h1>
            
            <motion.p 
              variants={itemVariants}
              className="text-white/90 text-lg md:text-xl mb-8 font-light tracking-wide max-w-2xl leading-relaxed"
            >
              Kasa Bella Hair Salon & Spa is the <span className="text-gold-500 font-medium">First Branded</span> Hair Salon and Spa in Hyderabad. We provide professional, premium-quality beauty, hair, and spa services with modern techniques and expert stylists.
            </motion.p>

            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-6"
            >
              <motion.a 
                href="#appointment" 
                whileHover={{ scale: 1.05, backgroundColor: '#D4A532', color: '#000' }} 
                whileTap={{ scale: 0.95 }} 
                className="btn-primary"
              >
                Book Appointment
              </motion.a>
              <motion.a 
                href="#services" 
                whileHover={{ scale: 1.05, borderColor: '#D4A532', color: '#D4A532' }} 
                whileTap={{ scale: 0.95 }} 
                className="btn-secondary"
              >
                Our Services
              </motion.a>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator - Bottom Center */}
        <motion.div
          style={{ opacity }}
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 z-20"
        >
          <span className="text-[10px] text-gold-500 uppercase tracking-[0.4em]">Scroll</span>
          <div className="w-[1px] h-16 bg-gradient-to-b from-gold-500 to-transparent" />
        </motion.div>
      </section>

      {/* SECTION 2: ABOUT US */}
      <section id="about" className="py-24 md:py-32 bg-zinc-950">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="text-left"
            >
              <SectionTitle 
                title="Our Story" 
                subtitle="Founded in Hyderabad, Kasa Bella has been at the forefront of premium grooming experiences." 
              />
              <p className="text-beige-300 text-lg mb-0 leading-relaxed font-light -mt-10">
                Kasa Bella Hair Salon & Spa is the First Branded Hair Salon and Spa in Hyderabad. Our journey began with a simple vision: to create a space where artistry meets excellence.
              </p>
              <p className="text-beige-300/60 mb-10 leading-relaxed font-light">
                Today, we're proud to be the trusted choice for thousands of clients who seek nothing but the best in hair care, styling, and wellness treatments.
              </p>
              <div className="grid grid-cols-3 gap-8">
                <Counter end={5000} suffix="+" label="Happy Clients" />
                <Counter end={50} suffix="+" label="Services" />
                <Counter end={10} suffix="+" label="Years" />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative"
            >
              <div className="aspect-square rounded-sm overflow-hidden border border-gold-500/20">
                <img src="/images/herosection3.jpg" alt="About" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-6 -left-6 w-48 h-48 border border-gold-500/30 -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 3: SERVICES */}
      <section id="services" className="py-24 md:py-32 bg-black">
        <div className="container-custom">
          <SectionTitle 
            title="Professional Services" 
            subtitle="Premium quality beauty, hair, and spa services including our signature Hydra Facial." 
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {servicesData.slice(0, 4).map((service, index) => (
              <ServiceCard key={service.id} {...service} index={index} />
            ))}
          </div>
          <div className="text-center mt-12">
            <motion.a href="/services" whileHover={{ scale: 1.05 }} className="text-gold-500 uppercase tracking-widest text-sm border-b border-gold-500/30 pb-2">
              View All Services
            </motion.a>
          </div>
        </div>
      </section>

      {/* SECTION 4: GALLERY */}
      <section id="gallery" className="py-24 md:py-32 bg-zinc-950">
        <div className="container-custom">
          <SectionTitle 
            title="Visual Artistry" 
            subtitle="A glimpse into our world of beauty and perfection." 
          />
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6 mt-16">
            {galleryData.slice(0, 6).map((item, index) => (
              <GalleryItem key={item.id} {...item} index={index} />
            ))}
          </div>
          <div className="text-center mt-16">
            <motion.a href="/gallery" whileHover={{ scale: 1.05 }} className="btn-secondary">
              View Full Gallery
            </motion.a>
          </div>
        </div>
      </section>

      {/* SECTION 5: BLOG */}
      <section id="blog" className="py-24 md:py-32 bg-black">
        <div className="container-custom">
          <SectionTitle 
            title="Latest Blog" 
            subtitle="Stay updated with the latest grooming tips and trends from Kasa Bella experts." 
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-16">
            {blogData.slice(0, 3).map((post, index) => (
              <BlogCard key={post.id} {...post} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: OUR TEAM */}
      <section id="team" className="py-24 md:py-32 bg-zinc-950">
        <div className="container-custom">
          <SectionTitle 
            title="Expert Stylists" 
            subtitle="Meet our professional team dedicated to your transformation." 
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            {teamData.map((member, index) => (
              <TeamCard key={member.id} {...member} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7: TESTIMONIALS (SLIDER) */}
      <section id="testimonials" className="py-24 md:py-32 bg-beige-100 overflow-hidden">
        <div className="container-custom text-center mb-16">
          <p className="text-gold-600 text-sm tracking-[0.4em] uppercase mb-4">What our clients say</p>
          <h2 className="text-4xl md:text-5xl font-serif text-black uppercase">Guest Experiences</h2>
        </div>

        <div className="flex relative">
          <motion.div 
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="flex gap-8 whitespace-nowrap"
          >
            {[...testimonialsData, ...testimonialsData].map((testimonial, index) => (
              <div 
                key={index}
                className="w-[400px] bg-white p-10 rounded-sm shadow-sm border border-gold-500/10 flex-shrink-0"
              >
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-gold-500 text-lg">★</span>
                  ))}
                </div>
                <p className="text-gray-700 text-lg italic mb-8 whitespace-normal leading-relaxed">
                  "{testimonial.review}"
                </p>
                <div className="flex items-center gap-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover border border-gold-500/20"
                  />
                  <div>
                    <h4 className="text-black font-bold uppercase tracking-wider text-sm">{testimonial.name}</h4>
                    <p className="text-gold-600 text-[10px] uppercase tracking-widest">Premium Client</p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SECTION 8: CONTACT */}
      <section id="appointment" className="py-24 md:py-32 bg-black">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <h2 className="text-4xl md:text-5xl font-serif mb-8 leading-tight uppercase">
                Secure Your <br /><span className="text-gold-500">Luxury</span> Session
              </h2>
              <p className="text-beige-300 text-lg mb-12 font-light leading-relaxed">
                Experience the pinnacle of grooming at Hyderabad's first branded salon. Reach out to book your transformation.
              </p>
              
              <div className="space-y-10">
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 bg-gold-500/10 rounded-sm flex items-center justify-center text-gold-500 border border-gold-500/20">
                    <FiPhone size={24} />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-widest text-gold-500 mb-2">Direct Contact</h4>
                    <p className="text-2xl font-light">+91 123 456 7890</p>
                  </div>
                </div>
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 bg-gold-500/10 rounded-sm flex items-center justify-center text-gold-500 border border-gold-500/20">
                    <FiMapPin size={24} />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-widest text-gold-500 mb-2">Our Location</h4>
                    <p className="text-2xl font-light">Hyderabad, India</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
              className="bg-beige-100 p-10 md:p-14 rounded-sm shadow-2xl"
            >
              <h3 className="text-3xl font-serif text-black mb-10 uppercase">Reservation</h3>
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-[0.2em] text-gray-500">Full Name</label>
                  <input type="text" name="name" value={formData.name} onChange={handleChange} required className="w-full bg-white border-b border-gray-200 py-3 text-black focus:outline-none focus:border-gold-500 transition-colors" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-[0.2em] text-gray-500">Phone</label>
                  <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required className="w-full bg-white border-b border-gray-200 py-3 text-black focus:outline-none focus:border-gold-500 transition-colors" placeholder="+91 123 456 7890" />
                </div>
                <div className="grid grid-cols-2 gap-10">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-[0.2em] text-gray-500">Date</label>
                    <input type="date" name="date" value={formData.date} onChange={handleChange} required className="w-full bg-white border-b border-gray-200 py-3 text-black focus:outline-none focus:border-gold-500 transition-colors" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-[0.2em] text-gray-500">Time</label>
                    <input type="time" name="time" value={formData.time} onChange={handleChange} required className="w-full bg-white border-b border-gray-200 py-3 text-black focus:outline-none focus:border-gold-500 transition-colors" />
                  </div>
                </div>
                <button type="submit" className="btn-primary w-full mt-6 py-4">
                  {formStatus === 'submitting' ? 'Processing...' : 'Confirm Booking'}
                </button>
                {formStatus === 'success' && (
                  <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-green-600 text-center text-[10px] uppercase tracking-widest font-bold">
                    ✓ Reservation Successful. We will contact you shortly.
                  </motion.p>
                )}
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      <WhatsAppButton />
      <BackToTop />
    </div>
  )
}

export default Home
