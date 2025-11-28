import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { GraduationCap, Calendar, MapPin, Award, BookOpen } from 'lucide-react'
import SectionHeading from './ui/SectionHeading'

const education = [
  {
    id: 1,
    degree: "Master of Engineering",
    field: "Applied Data Science",
    institution: "University of Victoria",
    location: "Victoria, BC, Canada",
    period: "2025 - Present",
    status: "current",
    description: "Pursuing advanced studies in data science, machine learning, and statistical analysis. Focusing on applying data-driven solutions to real-world problems.",
    highlights: [
      "Machine Learning & Deep Learning",
      "Statistical Analysis & Modeling",
      "Big Data Technologies",
      "Data Visualization",
    ],
    color: "from-primary-500 to-cyan-500",
  },
  {
    id: 2,
    degree: "Bachelor of Engineering",
    field: "Computer Engineering",
    institution: "Darshan Institute of Engineering and Technology",
    location: "Rajkot, Gujarat, India",
    period: "2020 - 2024",
    status: "completed",
    grade: "8.94 / 10 CGPA",
    description: "Comprehensive education in computer science fundamentals, software development, and engineering principles.",
    highlights: [
      "Data Structures & Algorithms",
      "Database Management Systems",
      "Web Development",
      "Machine Learning Fundamentals",
      "Computer Vision",
    ],
    color: "from-purple-500 to-pink-500",
  },
]

const Education = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="education" ref={ref} className="section-padding relative">
      <div className="container-custom">
        <SectionHeading
          title="Education"
          subtitle="Academic background"
          inView={inView}
        />

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary-500/50 via-purple-500/50 to-transparent" />

            <div className="space-y-8">
              {education.map((edu, index) => (
                <EducationCard
                  key={edu.id}
                  education={edu}
                  index={index}
                  inView={inView}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const EducationCard = ({ education, index, inView }) => {
  return (
    <motion.div
      className="relative pl-16 md:pl-20"
      initial={{ opacity: 0, x: -30 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
    >
      {/* Timeline dot */}
      <div className="absolute left-4 md:left-6 top-2">
        <motion.div
          className={`w-4 h-4 rounded-full bg-gradient-to-r ${education.color} shadow-lg`}
          initial={{ scale: 0 }}
          animate={inView ? { scale: 1 } : {}}
          transition={{ duration: 0.3, delay: index * 0.15 + 0.2 }}
        />
        {education.status === 'current' && (
          <motion.div
            className={`absolute inset-0 rounded-full bg-gradient-to-r ${education.color}`}
            animate={{ scale: [1, 1.8, 1], opacity: [0.5, 0, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        )}
      </div>

      {/* Card */}
      <motion.div
        className="p-6 rounded-2xl glass border border-dark-700/50 hover:border-primary-500/30 transition-all group"
        whileHover={{ y: -4, x: 4 }}
      >
        {/* Header */}
        <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              {education.status === 'current' && (
                <span className="px-2 py-0.5 rounded text-xs font-medium bg-green-500/20 text-green-400 border border-green-500/30">
                  Current
                </span>
              )}
              <span className={`px-2 py-0.5 rounded text-xs font-medium bg-gradient-to-r ${education.color} bg-clip-text text-transparent`}>
                {education.field}
              </span>
            </div>
            <h3 className="text-xl font-bold text-white group-hover:text-primary-400 transition-colors">
              {education.degree}
            </h3>
            <p className="text-dark-300 font-medium">{education.institution}</p>
          </div>

          {education.grade && (
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-dark-800/80 border border-dark-700/50">
              <Award size={16} className="text-yellow-400" />
              <span className="text-sm font-medium text-white">{education.grade}</span>
            </div>
          )}
        </div>

        {/* Meta info */}
        <div className="flex flex-wrap items-center gap-4 text-sm text-dark-400 mb-4">
          <span className="flex items-center gap-1.5">
            <Calendar size={14} className="text-primary-400" />
            {education.period}
          </span>
          <span className="flex items-center gap-1.5">
            <MapPin size={14} className="text-primary-400" />
            {education.location}
          </span>
        </div>

        {/* Description */}
        <p className="text-dark-400 text-sm mb-4">{education.description}</p>

        {/* Highlights */}
        {education.highlights && (
          <div className="pt-4 border-t border-dark-700/50">
            <div className="flex items-center gap-2 mb-3">
              <BookOpen size={14} className="text-primary-400" />
              <span className="text-xs font-medium text-dark-400 uppercase tracking-wider">Key Areas</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {education.highlights.map((highlight) => (
                <span
                  key={highlight}
                  className="px-3 py-1 rounded-full text-xs font-medium bg-dark-800/80 text-dark-300 border border-dark-700/50"
                >
                  {highlight}
                </span>
              ))}
            </div>
          </div>
        )}
      </motion.div>
    </motion.div>
  )
}

export default Education
