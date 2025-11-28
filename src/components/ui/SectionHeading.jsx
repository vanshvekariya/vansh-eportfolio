import { motion } from 'framer-motion'

const SectionHeading = ({ title, subtitle, inView, align = 'center' }) => {
  const alignmentClasses = {
    center: 'text-center',
    left: 'text-left',
    right: 'text-right',
  }

  return (
    <div className={`mb-12 md:mb-16 ${alignmentClasses[align]}`}>
      <motion.span
        className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-primary-500/10 text-primary-400 border border-primary-500/20 mb-4"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        {subtitle}
      </motion.span>
      <motion.h2
        className="text-responsive-xl font-bold font-display text-white"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        {title}
      </motion.h2>
    </div>
  )
}

export default SectionHeading
