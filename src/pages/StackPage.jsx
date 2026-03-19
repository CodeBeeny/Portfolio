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
    title: 'Frontend',
    items: [
      { icon: FaReact, name: 'React', color: '#61DAFB' },
      { icon: SiJavascript, name: 'JavaScript', color: '#F7DF1E' },
      { icon: SiTypescript, name: 'TypeScript', color: '#3178C6' },
      { icon: SiTailwindcss, name: 'Tailwind', color: '#06B6D4' },
    ],
  },
  {
    title: 'Backend',
    items: [
      { icon: FaNodeJs, name: 'Node.js', color: '#339933' },
      { icon: SiExpress, name: 'Express', color: '#eeeeee' },
      { icon: FaJava, name: 'Java', color: '#ED8B00' },
      { icon: SiSpringboot, name: 'Spring Boot', color: '#6DB33F' },
    ],
  },
  {
    title: 'Databases',
    items: [
      { icon: SiMongodb, name: 'MongoDB', color: '#47A248' },
      { icon: SiPostgresql, name: 'PostgreSQL', color: '#4169E1' },
      { icon: SiRedis, name: 'Redis', color: '#DC382D' },
      { icon: SiFirebase, name: 'Firebase', color: '#FFCA28' },
    ],
  },
  {
    title: 'ML & Data Science',
    items: [
      { icon: FaPython, name: 'Python', color: '#3776AB' },
      { icon: SiTensorflow, name: 'TensorFlow', color: '#FF6F00' },
    ],
  },
  {
    title: 'DevOps & Tools',
    items: [
      { icon: FaDocker, name: 'Docker', color: '#2496ED' },
      { icon: FaGitAlt, name: 'Git', color: '#F05032' },
    ],
  },
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.04 } },
}

const item = {
  hidden: { opacity: 0, scale: 0.85 },
  show: { opacity: 1, scale: 1 },
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
          Tech Stack
        </motion.h1>
        <motion.p
          className="page-subtitle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.4 }}
        >
          Technologies and tools I use to build fullstack applications,
          machine learning models, and enterprise systems.
        </motion.p>
      </div>
      <div className="section">
        {stackSections.map((section, si) => (
          <div key={section.title}>
            <motion.h3
              className="stack-section-title"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: si * 0.08 }}
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
                  className="stack-page-item"
                  variants={item}
                  whileHover={{ scale: 1.08, y: -4 }}
                  title={tech.name}
                >
                  <tech.icon className="stack-icon" style={{ color: tech.color }} />
                  <span className="stack-name">{tech.name}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  )
}
