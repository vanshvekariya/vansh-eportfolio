import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  Code2, 
  Database, 
  Cloud, 
  Wrench, 
  Layers,
  CreditCard,
  TestTube,
  Terminal
} from 'lucide-react'
import SectionHeading from './ui/SectionHeading'

const skillCategories = [
  {
    title: 'Programming Languages',
    icon: Code2,
    color: 'from-primary-500 to-cyan-500',
    skills: [
      { name: 'JavaScript', level: 95 },
      { name: 'TypeScript', level: 90 },
      { name: 'Python', level: 85 },
      { name: 'Java', level: 75 },
      { name: 'SQL', level: 85 },
      { name: 'HTML/CSS', level: 95 },
    ],
  },
  {
    title: 'Frontend',
    icon: Layers,
    color: 'from-purple-500 to-pink-500',
    skills: [
      { name: 'React.js', level: 95 },
      { name: 'Next.js', level: 90 },
      { name: 'Tailwind CSS', level: 95 },
      { name: 'Material UI', level: 85 },
      { name: 'Bootstrap', level: 85 },
      { name: 'ShadCN', level: 80 },
    ],
  },
  {
    title: 'Backend',
    icon: Terminal,
    color: 'from-orange-500 to-red-500',
    skills: [
      { name: 'Node.js', level: 90 },
      { name: 'Express.js', level: 90 },
      { name: 'TSed', level: 85 },
      { name: 'Sequelize ORM', level: 85 },
      { name: 'REST APIs', level: 95 },
    ],
  },
  {
    title: 'Databases',
    icon: Database,
    color: 'from-green-500 to-emerald-500',
    skills: [
      { name: 'MySQL', level: 90 },
      { name: 'PostgreSQL', level: 85 },
      { name: 'MongoDB', level: 85 },
      { name: 'Redis', level: 80 },
    ],
  },
  {
    title: 'Cloud & Services',
    icon: Cloud,
    color: 'from-blue-500 to-indigo-500',
    skills: [
      { name: 'AWS (EC2, S3, RDS)', level: 80 },
      { name: 'AWS Amplify', level: 75 },
      { name: 'Firebase', level: 85 },
      { name: 'SendGrid', level: 80 },
    ],
  },
  {
    title: 'Payment Gateways',
    icon: CreditCard,
    color: 'from-pink-500 to-rose-500',
    skills: [
      { name: 'Stripe', level: 85 },
      { name: 'Razorpay', level: 85 },
      { name: 'Billdesk', level: 75 },
    ],
  },
  {
    title: 'Testing & Tools',
    icon: TestTube,
    color: 'from-cyan-500 to-teal-500',
    skills: [
      { name: 'Jest', level: 85 },
      { name: 'Git', level: 95 },
      { name: 'JIRA', level: 85 },
      { name: 'Agile/Scrum', level: 90 },
    ],
  },
  {
    title: 'Other Technologies',
    icon: Wrench,
    color: 'from-violet-500 to-purple-500',
    skills: [
      { name: 'BullMQ', level: 80 },
      { name: 'Linux/Bash', level: 80 },
      { name: 'Docker', level: 70 },
      { name: 'VS Code', level: 95 },
    ],
  },
]

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="skills" ref={ref} className="section-padding relative bg-dark-900/30">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative">
        <SectionHeading
          title="Skills & Technologies"
          subtitle="What I work with"
          inView={inView}
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <SkillCard
              key={category.title}
              category={category}
              index={categoryIndex}
              inView={inView}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

const SkillCard = ({ category, index, inView }) => {
  const Icon = category.icon

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
    >
      <motion.div
        className="h-full p-6 rounded-2xl glass border border-dark-700/50 hover:border-primary-500/30 transition-all"
        whileHover={{ y: -4 }}
      >
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
            <Icon size={20} className="text-white" />
          </div>
          <h3 className="font-semibold text-white text-sm">{category.title}</h3>
        </div>

        {/* Skills */}
        <div className="space-y-4">
          {category.skills.map((skill, skillIndex) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.1 + skillIndex * 0.05 }}
            >
              <div className="flex justify-between items-center mb-1.5">
                <span className="text-sm text-dark-300">{skill.name}</span>
                <span className="text-xs text-dark-500">{skill.level}%</span>
              </div>
              <div className="h-1.5 bg-dark-800 rounded-full overflow-hidden">
                <motion.div
                  className={`h-full rounded-full bg-gradient-to-r ${category.color}`}
                  initial={{ width: 0 }}
                  animate={inView ? { width: `${skill.level}%` } : {}}
                  transition={{ duration: 1, delay: index * 0.1 + skillIndex * 0.05 + 0.3, ease: 'easeOut' }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  )
}

export default Skills
