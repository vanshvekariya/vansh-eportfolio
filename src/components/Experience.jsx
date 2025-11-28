import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Calendar, MapPin, ExternalLink, ChevronRight } from 'lucide-react'
import SectionHeading from './ui/SectionHeading'

const experiences = [
  {
    id: 1,
    role: 'Software Developer',
    company: 'BOSC Tech Labs Pvt. Ltd.',
    location: 'Gujarat, India',
    period: 'April 2024 - July 2025',
    type: 'Full-time',
    description: 'Led development of multiple full-stack applications including B2B e-commerce platforms and SaaS products.',
    highlights: [
      'Led backend, frontend, and admin panel development for a B2B e-commerce platform with direct supplier ordering',
      'Designed normalized relational database schemas (2NF) using MySQL and PostgreSQL for data integrity',
      'Implemented two-level queue architecture using Redis and BullMQ for async job processing',
      'Integrated third-party accounting systems (Xero, QuickBooks, MYOB) for automated invoice syncing',
      'Developed robust role-based access control (RBAC) system with comprehensive unit testing using Jest',
      'Built a chatbot SDK enabling seamless website integration in 5-10 minutes',
      'Created SaaS product for managing landing pages across multiple domains with SSR for SEO optimization',
    ],
    technologies: ['React.js', 'Next.js', 'Node.js', 'TypeScript', 'MySQL', 'PostgreSQL', 'Redis', 'BullMQ', 'AWS'],
    color: 'from-primary-500 to-cyan-500',
  },
  {
    id: 2,
    role: 'Software Developer Intern',
    company: 'BOSC Tech Labs Pvt. Ltd.',
    location: 'Gujarat, India',
    period: 'September 2023 - April 2024',
    type: 'Internship',
    description: 'Developed reusable codebase for landing pages and automated webpage generation systems.',
    highlights: [
      'Designed and implemented reusable codebase for landing pages, initially in React JS',
      'Optimized for SEO by transitioning to Next.js with server-side rendering',
      'Automated webpage generation via form-based system, reducing development time to under an hour',
      'Integrated React Admin for streamlined landing page management',
      'Enhanced project scalability and deployment efficiency',
    ],
    technologies: ['React.js', 'Next.js', 'React Admin', 'JavaScript', 'CSS', 'SEO'],
    color: 'from-purple-500 to-pink-500',
  },
  {
    id: 3,
    role: 'Data Analytics Intern',
    company: 'CSRBOX Foundation',
    location: 'Remote',
    period: 'February 2023 - May 2023',
    type: 'Internship',
    description: 'Developed data analysis and visualization skills while contributing to project management initiatives.',
    highlights: [
      'Conducted comprehensive data analysis using Excel, SQL, and Tableau',
      'Developed skills in data cleaning, preprocessing, and visualization',
      'Presented actionable insights to stakeholders for informed decision-making',
      'Participated in project planning and management activities',
    ],
    technologies: ['Excel', 'SQL', 'Tableau', 'Data Analysis', 'Data Visualization'],
    color: 'from-orange-500 to-red-500',
  },
]

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="experience" ref={ref} className="section-padding relative bg-dark-900/30">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative">
        <SectionHeading
          title="Work Experience"
          subtitle="My professional journey"
          inView={inView}
        />

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary-500/50 via-purple-500/50 to-transparent hidden md:block" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <ExperienceCard
                key={exp.id}
                experience={exp}
                index={index}
                inView={inView}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

const ExperienceCard = ({ experience, index, inView }) => {
  const isEven = index % 2 === 0

  return (
    <motion.div
      className={`relative flex flex-col md:flex-row gap-8 ${
        isEven ? 'md:flex-row' : 'md:flex-row-reverse'
      }`}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.2 }}
    >
      {/* Timeline dot */}
      <div className="absolute left-0 md:left-1/2 top-0 w-4 h-4 -translate-x-1/2 hidden md:block">
        <motion.div
          className={`w-4 h-4 rounded-full bg-gradient-to-r ${experience.color} shadow-lg`}
          initial={{ scale: 0 }}
          animate={inView ? { scale: 1 } : {}}
          transition={{ duration: 0.3, delay: index * 0.2 + 0.3 }}
        />
        <motion.div
          className={`absolute inset-0 rounded-full bg-gradient-to-r ${experience.color} opacity-50`}
          animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </div>

      {/* Content */}
      <div className={`flex-1 ${isEven ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
        <motion.div
          className="p-6 md:p-8 rounded-2xl glass border border-dark-700/50 hover:border-primary-500/30 transition-all group"
          whileHover={{ y: -4 }}
        >
          {/* Header */}
          <div className={`flex flex-col gap-2 mb-4 ${isEven ? 'md:items-end' : 'md:items-start'}`}>
            <div className={`flex items-center gap-2 flex-wrap ${isEven ? 'md:flex-row-reverse' : ''}`}>
              <span className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${experience.color} text-white`}>
                {experience.type}
              </span>
              <span className="text-dark-400 text-sm flex items-center gap-1">
                <Calendar size={14} />
                {experience.period}
              </span>
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-primary-400 transition-colors">
              {experience.role}
            </h3>
            <div className={`flex items-center gap-4 text-dark-400 flex-wrap ${isEven ? 'md:flex-row-reverse' : ''}`}>
              <span className="font-medium text-dark-200">{experience.company}</span>
              <span className="flex items-center gap-1 text-sm">
                <MapPin size={14} />
                {experience.location}
              </span>
            </div>
          </div>

          {/* Description */}
          <p className={`text-dark-400 mb-4 ${isEven ? 'md:text-right' : ''}`}>
            {experience.description}
          </p>

          {/* Highlights */}
          <ul className={`space-y-2 mb-6 ${isEven ? 'md:text-right' : ''}`}>
            {experience.highlights.slice(0, 4).map((highlight, i) => (
              <li
                key={i}
                className={`flex items-start gap-2 text-sm text-dark-300 ${
                  isEven ? 'md:flex-row-reverse' : ''
                }`}
              >
                <ChevronRight size={16} className="text-primary-400 flex-shrink-0 mt-0.5" />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>

          {/* Technologies */}
          <div className={`flex flex-wrap gap-2 ${isEven ? 'md:justify-end' : ''}`}>
            {experience.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-full text-xs font-medium bg-dark-800 text-dark-300 border border-dark-700/50"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Spacer for timeline alignment */}
      <div className="hidden md:block flex-1" />
    </motion.div>
  )
}

export default Experience
