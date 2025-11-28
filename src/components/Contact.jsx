import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  Mail, 
  MapPin, 
  Send, 
  Github, 
  Linkedin, 
  Twitter,
  CheckCircle,
  Loader2,
  MessageSquare,
  Sparkles,
  Lock,
  Unlock,
  AlertCircle
} from 'lucide-react'
import SectionHeading from './ui/SectionHeading'

// Google Sheets Web App URL - Replace with your own
// Instructions in README.md
const GOOGLE_SHEETS_URL = 'https://script.google.com/macros/s/AKfycbwCcZwy9S4ey4RFYbC8xMyKRgjVlaQQeS_iq89tYNzJNv-feLRLnzx50LcuYwy-HodmNA/exec'

const contactInfo = [
  {
    icon: MapPin,
    label: 'Location',
    value: 'Victoria, BC, Canada',
    href: null,
    color: 'from-purple-500 to-pink-500',
  },
]

const socialLinks = [
  {
    icon: Github,
    label: 'GitHub',
    href: 'https://github.com/vanshvekariya',
    color: 'hover:text-white',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/vekaria-vansh/',
    color: 'hover:text-blue-400',
  },
]

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [submitError, setSubmitError] = useState('')
  
  // CAPTCHA state for email reveal
  const [captchaAnswer, setCaptchaAnswer] = useState('')
  const [isEmailRevealed, setIsEmailRevealed] = useState(false)
  const [captchaError, setCaptchaError] = useState('')
  
  // Generate random math problem
  const [num1] = useState(() => Math.floor(Math.random() * 10) + 1)
  const [num2] = useState(() => Math.floor(Math.random() * 10) + 1)
  const correctAnswer = num1 + num2

  const handleChange = (e) => {
    setFormState((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleCaptchaSubmit = (e) => {
    e.preventDefault()
    setCaptchaError('')
    
    if (parseInt(captchaAnswer) === correctAnswer) {
      setIsEmailRevealed(true)
    } else {
      setCaptchaError('Incorrect answer. Please try again.')
      setCaptchaAnswer('')
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitError('')

    try {
      // Submit to Google Sheets
      const formData = new FormData()
      formData.append('name', formState.name)
      formData.append('email', formState.email)
      formData.append('subject', formState.subject)
      formData.append('message', formState.message)
      formData.append('timestamp', new Date().toISOString())

      const response = await fetch(GOOGLE_SHEETS_URL, {
        method: 'POST',
        body: formData,
      })

      if (response.ok) {
        setIsSubmitted(true)
        setFormState({ name: '', email: '', subject: '', message: '' })
        setTimeout(() => setIsSubmitted(false), 5000)
      } else {
        throw new Error('Failed to submit form')
      }
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitError('Failed to send message. Please try emailing directly.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" ref={ref} className="section-padding relative bg-dark-900/30">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative">
        <SectionHeading
          title="Get In Touch"
          subtitle="Let's connect"
          inView={inView}
        />

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 max-w-6xl mx-auto">
          {/* Left Column - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Let's work together
              </h3>
              <p className="text-dark-400 leading-relaxed">
                I'm always open to discussing new opportunities, interesting projects, 
                or just having a chat about technology. Feel free to reach out!
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
              {/* Email with CAPTCHA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5 }}
              >
                <div className="p-4 rounded-xl glass border border-dark-700/50">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary-500 to-cyan-500 flex items-center justify-center">
                      {isEmailRevealed ? <Unlock size={22} className="text-white" /> : <Lock size={22} className="text-white" />}
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-dark-400">Email</p>
                      {isEmailRevealed ? (
                        <a
                          href="mailto:vekariyavansh@gmail.com"
                          className="text-white font-medium hover:text-primary-400 transition-colors"
                        >
                          vekariyavansh@gmail.com
                        </a>
                      ) : (
                        <p className="text-dark-500 font-medium">Verify you're human to reveal</p>
                      )}
                    </div>
                  </div>
                  
                  {!isEmailRevealed && (
                    <form onSubmit={handleCaptchaSubmit} className="space-y-3">
                      <div>
                        <label className="block text-sm text-dark-400 mb-2">
                          What is {num1} + {num2}?
                        </label>
                        <div className="flex gap-2">
                          <input
                            type="number"
                            value={captchaAnswer}
                            onChange={(e) => setCaptchaAnswer(e.target.value)}
                            className="flex-1 px-3 py-2 rounded-lg bg-dark-800/50 border border-dark-700/50 text-white placeholder-dark-500 focus:border-primary-500/50 outline-none transition-all"
                            placeholder="Answer"
                            required
                          />
                          <motion.button
                            type="submit"
                            className="px-4 py-2 rounded-lg bg-primary-500 text-white font-medium hover:bg-primary-600 transition-colors"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            Verify
                          </motion.button>
                        </div>
                        {captchaError && (
                          <p className="text-red-400 text-xs mt-2 flex items-center gap-1">
                            <AlertCircle size={12} />
                            {captchaError}
                          </p>
                        )}
                      </div>
                    </form>
                  )}
                </div>
              </motion.div>

              {/* Other contact info */}
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: (index + 1) * 0.1 }}
                >
                  <div className="flex items-center gap-4 p-4 rounded-xl glass border border-dark-700/50">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${info.color} flex items-center justify-center`}>
                      <info.icon size={22} className="text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-dark-400">{info.label}</p>
                      <p className="text-white font-medium">{info.value}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <p className="text-sm text-dark-400 mb-4">Connect with me</p>
              <div className="flex items-center gap-3">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 rounded-xl glass border border-dark-700/50 text-dark-400 ${social.color} hover:border-primary-500/30 transition-all`}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label={social.label}
                  >
                    <social.icon size={20} />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Decorative element */}
            <motion.div
              className="hidden lg:block p-6 rounded-2xl glass border border-dark-700/50"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <Sparkles size={20} className="text-primary-400" />
                <span className="text-white font-medium">Quick Response</span>
              </div>
              <p className="text-dark-400 text-sm">
                I typically respond within 24-48 hours. For urgent matters, 
                feel free to reach out via LinkedIn.
              </p>
            </motion.div>
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="p-6 md:p-8 rounded-2xl glass border border-dark-700/50">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary-500 to-purple-600 flex items-center justify-center">
                  <MessageSquare size={20} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">Send a Message</h3>
              </div>

              {isSubmitted ? (
                <motion.div
                  className="flex flex-col items-center justify-center py-12 text-center"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mb-4">
                    <CheckCircle size={32} className="text-green-400" />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">Message Sent!</h4>
                  <p className="text-dark-400">
                    Thank you for reaching out. I'll get back to you soon!
                  </p>
                  <p className="text-dark-500 text-sm mt-2">
                    Your message has been saved securely.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-dark-300 mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl bg-dark-800/50 border border-dark-700/50 text-white placeholder-dark-500 focus:border-primary-500/50 focus:ring-1 focus:ring-primary-500/50 outline-none transition-all"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-dark-300 mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formState.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl bg-dark-800/50 border border-dark-700/50 text-white placeholder-dark-500 focus:border-primary-500/50 focus:ring-1 focus:ring-primary-500/50 outline-none transition-all"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-dark-300 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formState.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-dark-800/50 border border-dark-700/50 text-white placeholder-dark-500 focus:border-primary-500/50 focus:ring-1 focus:ring-primary-500/50 outline-none transition-all"
                      placeholder="Project Inquiry"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-dark-300 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-xl bg-dark-800/50 border border-dark-700/50 text-white placeholder-dark-500 focus:border-primary-500/50 focus:ring-1 focus:ring-primary-500/50 outline-none transition-all resize-none"
                      placeholder="Tell me about your project or just say hi..."
                    />
                  </div>

                  {submitError && (
                    <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 text-sm flex items-center gap-2">
                      <AlertCircle size={16} />
                      {submitError}
                    </div>
                  )}

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-gradient-to-r from-primary-500 to-purple-600 text-white font-medium shadow-lg shadow-primary-500/25 hover:shadow-primary-500/40 disabled:opacity-70 disabled:cursor-not-allowed transition-all"
                    whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 size={20} className="animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={20} />
                        Send Message
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
