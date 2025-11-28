import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Code2, Database, Cloud, Cpu, GraduationCap, Briefcase } from 'lucide-react'
import SectionHeading from './ui/SectionHeading'

const highlights = [
  {
    icon: Briefcase,
    title: '2+ Years',
    subtitle: 'Professional Experience',
    color: 'from-primary-500 to-cyan-500',
  },
  {
    icon: Code2,
    title: 'Full Stack',
    subtitle: 'Development',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: Database,
    title: 'Data Science',
    subtitle: 'In Progress',
    color: 'from-orange-500 to-red-500',
  },
  {
    icon: GraduationCap,
    title: "Master's",
    subtitle: 'Applied Data Science',
    color: 'from-green-500 to-emerald-500',
  },
]

const techStack = [
  { name: 'React', category: 'Frontend' },
  { name: 'Next.js', category: 'Frontend' },
  { name: 'TypeScript', category: 'Language' },
  { name: 'Node.js', category: 'Backend' },
  { name: 'Python', category: 'Language' },
  { name: 'PostgreSQL', category: 'Database' },
  { name: 'MongoDB', category: 'Database' },
  { name: 'AWS', category: 'Cloud' },
]

const About = () => {
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

  return (
    <section id="about" ref={ref} className="section-padding relative">
      <div className="container-custom">
        <SectionHeading
          title="About Me"
          subtitle="Get to know me better"
          inView={inView}
        />

        <motion.div
          className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {/* Left Column - Text Content */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div className="space-y-4 text-dark-300 leading-relaxed">
              <p className="text-lg">
                I'm a <span className="text-white font-medium">software developer</span> with 
                extensive experience in building scalable web applications using modern JavaScript 
                frameworks. Currently pursuing my <span className="text-primary-400">Master's in Applied Data Science</span> at 
                the University of Victoria, Canada.
              </p>
              <p>
                My journey in tech started with a passion for creating solutions that make a 
                difference. Over the years, I've worked on diverse projects ranging from 
                B2B e-commerce platforms to SaaS products, always focusing on clean architecture 
                and optimal user experience.
              </p>
              <p>
                Now, I'm expanding my horizons into the world of data science, combining my 
                software development expertise with data-driven insights to build more 
                intelligent applications.
              </p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.title}
                  className="p-4 rounded-xl glass border border-dark-700/50 hover:border-primary-500/30 transition-all group"
                  variants={itemVariants}
                  whileHover={{ y: -4 }}
                >
                  <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${item.color} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                    <item.icon size={20} className="text-white" />
                  </div>
                  <h4 className="text-white font-semibold">{item.title}</h4>
                  <p className="text-dark-400 text-sm">{item.subtitle}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Visual Element */}
          <motion.div variants={itemVariants} className="relative">
            {/* Main card */}
            <div className="relative p-8 rounded-2xl glass border border-dark-700/50 overflow-hidden">
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary-500/20 to-purple-500/20 rounded-full blur-2xl" />
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-2xl" />

              <div className="relative">
                <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
                  <Cpu size={24} className="text-primary-400" />
                  Tech Stack
                </h3>

                <div className="flex flex-wrap gap-2">
                  {techStack.map((tech, index) => (
                    <motion.span
                      key={tech.name}
                      className="px-4 py-2 rounded-full text-sm font-medium bg-dark-800/80 text-dark-200 border border-dark-700/50 hover:border-primary-500/50 hover:text-primary-400 transition-all cursor-default"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: 0.5 + index * 0.05 }}
                      whileHover={{ scale: 1.05 }}
                    >
                      {tech.name}
                    </motion.span>
                  ))}
                </div>

                {/* Code snippet decoration */}
                <div className="mt-8 p-4 rounded-xl bg-dark-900/80 border border-dark-700/50 font-mono text-sm">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                  <code className="text-dark-400">
                    <span className="text-purple-400">const</span>{' '}
                    <span className="text-primary-400">developer</span>{' '}
                    <span className="text-white">=</span> {'{'}
                    <br />
                    <span className="ml-4 text-dark-500">// Passionate about clean code</span>
                    <br />
                    <span className="ml-4 text-green-400">passion</span>
                    <span className="text-white">:</span>{' '}
                    <span className="text-orange-400">"Building great products"</span>,
                    <br />
                    <span className="ml-4 text-green-400">focus</span>
                    <span className="text-white">:</span>{' '}
                    <span className="text-orange-400">"User Experience"</span>,
                    <br />
                    <span className="ml-4 text-green-400">learning</span>
                    <span className="text-white">:</span>{' '}
                    <span className="text-orange-400">"Data Science"</span>
                    <br />
                    {'}'};
                  </code>
                </div>
              </div>
            </div>

            {/* Floating badges */}
            <motion.div
              className="absolute -bottom-4 -left-0 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-medium shadow-lg"
              animate={{ y: [5, -5, 5] }}
              transition={{ duration: 4, repeat: Infinity, delay: 1 }}
            >
              <Code2 size={16} className="inline mr-1" />
              Clean Code
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
