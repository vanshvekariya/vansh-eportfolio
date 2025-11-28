import { motion } from 'framer-motion'

const Loader = () => {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-dark-950"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
    >
      <div className="relative flex items-center justify-center">
        {/* Animated rings */}
        <motion.div
          className="absolute rounded-full border-2 border-primary-500/30"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: [0.8, 1.2, 0.8], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          style={{ width: 120, height: 120 }}
        />
        <motion.div
          className="absolute rounded-full border-2 border-purple-500/30"
          initial={{ scale: 1, opacity: 0 }}
          animate={{ scale: [1, 1.4, 1], opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}
          style={{ width: 120, height: 120 }}
        />
        
        {/* Center logo */}
        <motion.div
          className="relative flex items-center justify-center"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary-500 to-purple-600 flex items-center justify-center shadow-lg shadow-primary-500/30">
            <span className="text-2xl font-bold text-white font-display">V</span>
          </div>
        </motion.div>
        
        {/* Loading text */}
        <motion.div
          className="absolute top-[calc(100%+3rem)] left-1/4.5 -translate-x-1/2 whitespace-nowrap"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <div className="flex items-center justify-center gap-1">
            <span className="text-dark-400 text-sm font-mono">Loading</span>
            <motion.span
              className="text-primary-400"
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              ...
            </motion.span>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default Loader
