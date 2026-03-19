import { motion } from 'framer-motion'
import {
  FaReact, FaNodeJs, FaPython, FaJava, FaDocker, FaGitAlt
} from 'react-icons/fa'
import {
  SiMongodb, SiExpress, SiPostgresql, SiSpringboot, SiTensorflow,
  SiJavascript, SiTypescript, SiTailwindcss, SiRedis, SiFirebase
} from 'react-icons/si'
import '../components/TechStack.css'

const stackSections = [
  {
    title: 'Languages',
    items: [
      { icon: SiJavascript, name: 'JavaScript', color: '#F7DF1E', badge: 'Language' },
      { icon: SiTypescript, name: 'TypeScript', color: '#3178C6', badge: 'Language' },
      { icon: FaPython, name: 'Python', color: '#3776AB', badge: 'Language' },
      { icon: FaJava, name: 'Java', color: '#ED8B00', badge: 'Language' },
    ],
  },
  {
    title: 'Frontend',
    items: [
      { icon: FaReact, name: 'React', color: '#61DAFB', badge: 'Framework' },
      { icon: SiTailwindcss, name: 'Tailwind CSS', color: '#06B6D4', badge: 'Framework' },
    ],
  },
  {
    title: 'Backend',
    items: [
      { icon: FaNodeJs, name: 'Node.js', color: '#339933', badge: 'Runtime' },
      { icon: SiExpress, name: 'Express', color: '#eeeeee', badge: 'Framework' },
      { icon: SiSpringboot, name: 'Spring Boot', color: '#6DB33F', badge: 'Framework' },
    ],
  },
  {
    title: 'Databases',
    items: [
      { icon: SiMongodb, name: 'MongoDB', color: '#47A248', badge: 'Database' },
      { icon: SiPostgresql, name: 'PostgreSQL', color: '#4169E1', badge: 'Database' },
      { icon: SiRedis, name: 'Redis', color: '#DC382D', badge: 'Database' },
      { icon: SiFirebase, name: 'Firebase', color: '#FFCA28', badge: 'Platform' },
    ],
  },
  {
    title: 'ML & Data Science',
    items: [
      { icon: SiTensorflow, name: 'TensorFlow', color: '#FF6F00', badge: 'Framework' },
    ],
  },
  {
    title: 'DevOps & Tools',
    items: [
      { icon: FaDocker, name: 'Docker', color: '#2496ED', badge: 'Tool' },
      { icon: FaGitAlt, name: 'Git', color: '#F05032', badge: 'Tool' },
    ],
  },
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.05 } },
}

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0 },
}

export default function StackPage() {
  return (
    <div>
      <div className="page-header">
        <motion.h1
          className="page-title"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          Stack
        </motion.h1>
        <motion.p
          className="page-subtitle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.4 }}
        >
          Technologies & tools I work with
        </motion.p>
      </div>
      <div className="section">
        {stackSections.map((section, si) => (
          <div key={section.title}>
            <motion.h3
              className="stack-section-title"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: si * 0.06 }}
            >
              {section.title}
            </motion.h3>
            <motion.div
              className="stack-page-grid"
              variants={container}
              initial="hidden"
              animate="show"
            >
              {section.items.map((tech) => (
                <motion.div
                  key={tech.name}
                  className="stack-page-card"
                  variants={item}
                  whileHover={{ scale: 1.03, y: -4 }}
                >
                  <tech.icon
                    className="stack-card-icon"
                    style={{ color: tech.color }}
                  />
                  <div className="stack-card-bottom">
                    <span className="stack-card-badge">{tech.badge}</span>
                    <span className="stack-card-name">{tech.name}</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  )
}
