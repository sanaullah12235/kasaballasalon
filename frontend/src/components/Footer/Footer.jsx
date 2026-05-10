import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FiInstagram, FiFacebook, FiTwitter, FiMail, FiPhone, FiMapPin } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    quickLinks: [
      { name: 'Home', path: '/' },
      { name: 'About Us', path: '/about' },
      { name: 'Services', path: '/services' },
      { name: 'Gallery', path: '/gallery' },
      { name: 'Team', path: '/team' },
      { name: 'Blog', path: '/blog' },
      { name: 'Contact', path: '/contact' },
    ],
    services: [
      'Bridal Makeup',
      'Hair Styling',
      'Facial Treatments',
      'Skin Care',
      'Hair Coloring',
      'Spa Services',
    ],
  }

  const socialLinks = [
    { icon: <FiInstagram />, url: 'https://instagram.com/kasabella', label: 'Instagram' },
    { icon: <FaWhatsapp />, url: 'https://wa.me/923001234567', label: 'WhatsApp' },
    { icon: <FiFacebook />, url: 'https://facebook.com/kasabella', label: 'Facebook' },
    { icon: <FiTwitter />, url: 'https://twitter.com/kasabella', label: 'Twitter' },
  ]

  return (
    <footer className="bg-black border-t border-white/5 font-sans">
      {/* Main Footer */}
      <div className="container-custom py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <h3 className="text-3xl font-bold text-gold-500 font-serif mb-6 tracking-widest uppercase">Kasa Bella</h3>
            <p className="text-beige-300/60 mb-8 leading-relaxed font-light text-sm">
              Where luxury meets artistry. We provide a premium beauty experience that transcends the ordinary, tailored for the elite.
            </p>
            <div className="flex gap-6">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5, color: '#D4A532' }}
                  className="text-white/40 transition-all duration-500 text-xl"
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="text-xs font-medium text-gold-500 mb-8 uppercase tracking-[0.3em]">Quick Links</h4>
            <ul className="space-y-4">
              {footerLinks.quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-white/60 hover:text-white transition-colors duration-500 text-sm font-light tracking-widest"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="text-xs font-medium text-gold-500 mb-8 uppercase tracking-[0.3em]">Our Services</h4>
            <ul className="space-y-4">
              {footerLinks.services.map((service, index) => (
                <li key={index} className="text-white/60 text-sm font-light tracking-widest">
                  {service}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="text-xs font-medium text-gold-500 mb-8 uppercase tracking-[0.3em]">Visit Us</h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <FiMapPin className="text-gold-500 mt-1 flex-shrink-0" />
                <span className="text-white/60 text-sm font-light leading-relaxed tracking-wide">
                  Luxury Block, Gulberg III, Lahore, Pakistan
                </span>
              </li>
              <li className="flex items-center gap-4">
                <FiPhone className="text-gold-500 flex-shrink-0" />
                <a href="tel:+923001234567" className="text-white/60 hover:text-white transition-colors text-sm font-light tracking-widest">
                  +92 300 1234567
                </a>
              </li>
              <li className="flex items-center gap-4">
                <FiMail className="text-gold-500 flex-shrink-0" />
                <a href="mailto:info@kasabella.com" className="text-white/60 hover:text-white transition-colors text-sm font-light tracking-widest">
                  info@kasabella.com
                </a>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5 py-8">
        <div className="container-custom flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-white/20 text-[10px] uppercase tracking-[0.2em] text-center md:text-left">
            © {currentYear} Kasa Bella Studio & Academy. All rights reserved.
          </p>
          <div className="flex gap-8 text-[10px] uppercase tracking-[0.2em]">
            <Link to="/privacy" className="text-white/20 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-white/20 hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
