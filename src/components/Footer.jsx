import { motion } from 'framer-motion'
import { Heart, ArrowUp, Github, Linkedin, Mail } from 'lucide-react'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative py-12 border-t border-dark-800/50">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-dark-950 to-transparent pointer-events-none" />

      <div className="container-custom relative">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Copyright */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <motion.a
              href="#home"
              onClick={(e) => {
                e.preventDefault()
                scrollToTop()
              }}
              className="flex items-center gap-3 group"
              whileHover={{ scale: 1.02 }}
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-purple-600 flex items-center justify-center shadow-lg shadow-primary-500/20 group-hover:shadow-primary-500/40 transition-shadow">
                <span className="text-lg font-bold text-white font-display">V</span>
              </div>
              <span className="text-white font-display font-semibold">Vansh Vekaria</span>
            </motion.a>
            <p className="text-dark-500 text-sm flex items-center gap-1">
              Made with <Heart size={14} className="text-red-500 fill-red-500" /> in Victoria, BC
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex items-center gap-6">
            {['About', 'Experience', 'Projects', 'Contact'].map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-dark-400 hover:text-primary-400 text-sm transition-colors"
                whileHover={{ y: -2 }}
                onClick={(e) => {
                  e.preventDefault()
                  document.querySelector(`#${item.toLowerCase()}`)?.scrollIntoView({ behavior: 'smooth' })
                }}
              >
                {item}
              </motion.a>
            ))}
          </div>

          {/* Social & Back to Top */}
          <div className="flex items-center gap-4">
            {/* Social Icons */}
            <div className="flex items-center gap-2">
              {[
                { icon: Github, href: 'https://github.com/vanshvekariya', label: 'GitHub' },
                { icon: Linkedin, href: 'https://www.linkedin.com/in/vekaria-vansh/', label: 'LinkedIn' },
                { icon: Mail, href: 'mailto:vekariyavansh@gmail.com', label: 'Email' },
              ].map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg text-dark-400 hover:text-primary-400 hover:bg-dark-800/50 transition-all"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>

            {/* Divider */}
            <div className="w-px h-6 bg-dark-700" />

            {/* Back to Top */}
            <motion.button
              onClick={scrollToTop}
              className="p-2 rounded-lg text-dark-400 hover:text-primary-400 hover:bg-dark-800/50 transition-all"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Back to top"
            >
              <ArrowUp size={18} />
            </motion.button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-6 border-t border-dark-800/50">
          <div className="flex items-center justify-center text-sm text-dark-500">
            <p>© {currentYear} Vansh Vekaria. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
