import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ArrowDown, Github, Linkedin, Mail, MapPin, Sparkles } from 'lucide-react'

const Hero = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  }

  return (
    <section
      id="home"
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 -left-32 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/4 -right-32 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, delay: 2 }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {/* Status badge */}
          <motion.div variants={itemVariants} className="mb-6 md:mb-8">
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary-500/20"
              whileHover={{ scale: 1.05 }}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-sm text-dark-300">Open to opportunities</span>
            </motion.div>
          </motion.div>

          {/* Main heading */}
          <motion.div variants={itemVariants} className="mb-4 md:mb-6">
            <h1 className="text-responsive-3xl font-bold font-display leading-tight">
              <span className="text-white">Hi, I'm </span>
              <span className="gradient-text">Vansh Vekaria</span>
            </h1>
          </motion.div>

          {/* Role with typing effect */}
          <motion.div variants={itemVariants} className="mb-6 md:mb-8">
            <div className="flex flex-wrap items-center justify-center gap-2 text-responsive-lg text-dark-300">
              <span>Software Developer</span>
              <span className="text-primary-400">•</span>
              <span>Data Science Student</span>
              <motion.span
                className="inline-flex items-center gap-1 text-primary-400"
                variants={floatingVariants}
                animate="animate"
              >
                <Sparkles size={20} />
              </motion.span>
            </div>
          </motion.div>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-responsive-base text-dark-400 max-w-2xl mx-auto mb-8 md:mb-10 leading-relaxed"
          >
            Building scalable web applications with modern technologies. 
            Currently pursuing Master's in Applied Data Science at University of Victoria, 
            transitioning from full-stack development to data-driven solutions.
          </motion.p>

          {/* Location */}
          <motion.div
            variants={itemVariants}
            className="flex items-center justify-center gap-2 text-dark-400 mb-8 md:mb-10"
          >
            <MapPin size={18} className="text-primary-400" />
            <span className="text-sm md:text-base">Victoria, BC, Canada</span>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 md:mb-16"
          >
            <motion.a
              href="#contact"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-primary-500 to-purple-600 text-white font-medium shadow-lg shadow-primary-500/25 hover:shadow-primary-500/40 transition-all"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => {
                e.preventDefault()
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              Get in Touch
            </motion.a>
            <motion.a
              href="#projects"
              className="w-full sm:w-auto px-8 py-4 rounded-full glass border border-dark-600 text-white font-medium hover:border-primary-500/50 transition-all"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => {
                e.preventDefault()
                document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              View Projects
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={itemVariants}
            className="flex items-center justify-center gap-4"
          >
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
                className="p-3 rounded-xl glass border border-dark-700 text-dark-400 hover:text-primary-400 hover:border-primary-500/50 transition-all"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                aria-label={social.label}
              >
                <social.icon size={20} />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.5 }}
      >
        <motion.a
          href="#about"
          className="flex flex-col items-center gap-2 text-dark-500 hover:text-primary-400 transition-colors"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          onClick={(e) => {
            e.preventDefault()
            document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })
          }}
        >
          <span className="text-xs font-mono">Scroll</span>
          <ArrowDown size={20} />
        </motion.a>
      </motion.div>
    </section>
  )
}

export default Hero
