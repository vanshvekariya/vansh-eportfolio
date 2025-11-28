import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  ExternalLink, 
  Github, 
  Construction, 
  Rocket, 
  Code2, 
  Database,
  Brain,
  Eye,
  Home,
  MapPin,
  BookOpen,
  Camera,
  Move,
  PenTool
} from 'lucide-react'
import SectionHeading from './ui/SectionHeading'

const projects = [
  {
    id: 1,
    title: 'Data Science Project',
    description: 'Currently working on an exciting data science project that applies machine learning techniques to solve real-world problems. More details coming soon!',
    longDescription: 'This project is currently in active development as part of my Master\'s program in Applied Data Science. It involves advanced machine learning algorithms and data analysis techniques.',
    image: null,
    status: 'in-progress',
    category: 'Data Science',
    technologies: ['Python', 'Pandas', 'Scikit-learn', 'TensorFlow'],
    icon: Brain,
    color: 'from-purple-500 to-pink-500',
    links: {
      demo: null,
      github: null,
    },
  },
  {
    id: 2,
    title: 'Rental Services Platform',
    description: 'A comprehensive rental platform with user-friendly interface and inventory management, providing a convenient alternative to product purchases.',
    longDescription: 'Independently designed and developed a full-stack rental platform using ASP.NET Core MVC. Features include user authentication, inventory management, booking system, and payment integration.',
    image: null,
    status: 'completed',
    category: 'Full Stack',
    technologies: ['ASP.NET Core MVC', 'HTML', 'CSS', 'JavaScript', 'SQL'],
    icon: Home,
    color: 'from-primary-500 to-cyan-500',
    links: {
      demo: null,
      github: null,
    },
  },
  {
    id: 3,
    title: 'Road Safety Tool',
    description: 'Interactive platform integrating Google Maps with accident-prone regions, weather data, traffic sign awareness, and emergency contacts.',
    longDescription: 'Developed during a .NET hackathon, this tool helps users navigate safely by providing real-time information about road conditions, accident statistics, and emergency services.',
    image: null,
    status: 'completed',
    category: 'Full Stack',
    technologies: ['ASP.NET Core MVC', 'Google Maps API', 'SQL', 'JavaScript'],
    icon: MapPin,
    color: 'from-orange-500 to-red-500',
    links: {
      demo: null,
      github: null,
    },
  },
  {
    id: 4,
    title: 'Multi Address Book',
    description: 'Feature-rich address book platform with categorization, search, and sort functionalities for managing personal and professional contacts.',
    longDescription: 'A comprehensive contact management system with advanced features including contact categorization, powerful search functionality, and sorting options.',
    image: null,
    status: 'completed',
    category: 'Full Stack',
    technologies: ['ASP.NET Core MVC', 'HTML', 'CSS', 'JavaScript', 'SQL'],
    icon: BookOpen,
    color: 'from-green-500 to-emerald-500',
    links: {
      demo: null,
      github: null,
    },
  },
  {
    id: 5,
    title: 'Bangalore House Price Prediction',
    description: 'Machine learning project analyzing real estate data to predict house prices with a user-friendly web application interface.',
    longDescription: 'Built a complete ML pipeline from data preprocessing to model deployment. The web application allows users to input property features and get instant price predictions.',
    image: null,
    status: 'completed',
    category: 'Machine Learning',
    technologies: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'Flask', 'Matplotlib'],
    icon: Database,
    color: 'from-blue-500 to-indigo-500',
    links: {
      demo: null,
      github: null,
    },
  },
  {
    id: 6,
    title: 'Face Detection System',
    description: 'Computer vision software using machine learning techniques to identify and track human faces in real-time video streams.',
    longDescription: 'Implemented using OpenCV and Haar Cascade classifier algorithm. The system captures video, detects faces in real-time, and displays bounding boxes around detected faces.',
    image: null,
    status: 'completed',
    category: 'Computer Vision',
    technologies: ['Python', 'OpenCV', 'Haar Cascade', 'NumPy'],
    icon: Camera,
    color: 'from-pink-500 to-rose-500',
    links: {
      demo: null,
      github: null,
    },
  },
  {
    id: 7,
    title: 'Moving Object Detection',
    description: 'Video analysis system using computer vision to detect and track motion by comparing pixel intensity differences between frames.',
    longDescription: 'Leverages Gaussian blur, thresholding, contour detection, and bounding box visualization to accurately identify moving objects in video streams.',
    image: null,
    status: 'completed',
    category: 'Computer Vision',
    technologies: ['Python', 'OpenCV', 'imutils', 'Image Processing'],
    icon: Move,
    color: 'from-cyan-500 to-teal-500',
    links: {
      demo: null,
      github: null,
    },
  },
  {
    id: 8,
    title: 'Handwriting Classification',
    description: 'ML solution for classifying handwritten characters using image preprocessing and trained models with high accuracy.',
    longDescription: 'Employed OpenCV for image preprocessing, feature extraction, and model training on labeled datasets. Achieved high classification accuracy through rigorous evaluation.',
    image: null,
    status: 'completed',
    category: 'Machine Learning',
    technologies: ['Python', 'OpenCV', 'Jupyter', 'Machine Learning'],
    icon: PenTool,
    color: 'from-violet-500 to-purple-500',
    links: {
      demo: null,
      github: null,
    },
  },
]

const categories = ['All', 'Data Science', 'Full Stack', 'Machine Learning', 'Computer Vision']

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })
  const [activeCategory, setActiveCategory] = useState('All')
  const [hoveredProject, setHoveredProject] = useState(null)

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.category === activeCategory)

  return (
    <section id="projects" ref={ref} className="section-padding relative">
      <div className="container-custom">
        <SectionHeading
          title="Featured Projects"
          subtitle="What I've built"
          inView={inView}
        />

        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-2 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-primary-500 to-purple-600 text-white shadow-lg shadow-primary-500/25'
                  : 'glass border border-dark-700 text-dark-300 hover:text-white hover:border-primary-500/50'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          layout
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                inView={inView}
                isHovered={hoveredProject === project.id}
                onHover={() => setHoveredProject(project.id)}
                onLeave={() => setHoveredProject(null)}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}

const ProjectCard = ({ project, index, inView, isHovered, onHover, onLeave }) => {
  const Icon = project.icon

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative"
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      <motion.div
        className="h-full p-6 rounded-2xl glass border border-dark-700/50 hover:border-primary-500/30 transition-all overflow-hidden"
        whileHover={{ y: -8 }}
      >
        {/* Status Badge */}
        {project.status === 'in-progress' && (
          <div className="absolute top-4 right-4 z-10">
            <motion.div
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-yellow-500/20 border border-yellow-500/30"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Construction size={14} className="text-yellow-400" />
              <span className="text-xs font-medium text-yellow-400">In Progress</span>
            </motion.div>
          </div>
        )}

        {/* Icon Header */}
        <div className="relative mb-6">
          <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${project.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
            <Icon size={28} className="text-white" />
          </div>
          
          {/* Decorative gradient */}
          <div className={`absolute -inset-4 bg-gradient-to-r ${project.color} opacity-0 group-hover:opacity-10 blur-2xl transition-opacity`} />
        </div>

        {/* Content */}
        <div className="relative">
          <div className="flex items-center gap-2 mb-2">
            <span className={`px-2 py-0.5 rounded text-xs font-medium bg-gradient-to-r ${project.color} bg-clip-text text-transparent`}>
              {project.category}
            </span>
          </div>

          <h3 className="text-lg font-bold text-white mb-2 group-hover:text-primary-400 transition-colors">
            {project.title}
          </h3>

          <p className="text-dark-400 text-sm mb-4 line-clamp-3">
            {project.description}
          </p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.technologies.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 rounded text-xs font-medium bg-dark-800/80 text-dark-300 border border-dark-700/50"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 4 && (
              <span className="px-2 py-1 rounded text-xs font-medium bg-dark-800/80 text-dark-400">
                +{project.technologies.length - 4}
              </span>
            )}
          </div>

          {/* Links */}
          <div className="flex items-center gap-3 pt-4 border-t border-dark-700/50">
            {project.status === 'in-progress' ? (
              <div className="flex items-center gap-2 text-dark-500">
                <Rocket size={16} />
                <span className="text-sm">Coming Soon</span>
              </div>
            ) : project.links.demo || project.links.github ? (
              <>
                {project.links.demo && (
                  <motion.a
                    href={project.links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm text-dark-400 hover:text-primary-400 transition-colors"
                    whileHover={{ x: 2 }}
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </motion.a>
                )}
                {project.links.github && (
                  <motion.a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm text-dark-400 hover:text-primary-400 transition-colors"
                    whileHover={{ x: 2 }}
                  >
                    <Github size={16} />
                    Source
                  </motion.a>
                )}
              </>
            ) : (
              <div className="flex items-center gap-2 text-dark-500">
                <Code2 size={16} />
                <span className="text-sm">Local Development</span>
              </div>
            )}
          </div>
        </div>

        {/* Hover overlay effect */}
        <motion.div
          className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-0 group-hover:opacity-5 transition-opacity pointer-events-none`}
        />
      </motion.div>
    </motion.div>
  )
}

export default Projects
