import { motion } from 'framer-motion'
import { 
  FaReact, FaNodeJs, FaPython, FaJava, FaDocker, FaGitAlt, FaDatabase, FaAws 
} from 'react-icons/fa'
import { 
  SiMongodb, SiExpress, SiPostgresql, SiSpringboot, SiTensorflow, 
  SiJavascript, SiTypescript, SiTailwindcss, SiRedis, SiFirebase
} from 'react-icons/si'
import './TechStack.css'

const techItems = [
  { icon: FaReact, name: 'React', color: '#61DAFB' },
  { icon: SiJavascript, name: 'JavaScript', color: '#F7DF1E' },
  { icon: FaNodeJs, name: 'Node.js', color: '#339933' },
  { icon: SiExpress, name: 'Express', color: '#ffffff' },
  { icon: SiMongodb, name: 'MongoDB', color: '#47A248' },
  { icon: SiPostgresql, name: 'PostgreSQL', color: '#4169E1' },
  { icon: FaJava, name: 'Java', color: '#ED8B00' },
  { icon: SiSpringboot, name: 'Spring Boot', color: '#6DB33F' },
  { icon: FaPython, name: 'Python', color: '#3776AB' },
  { icon: SiTensorflow, name: 'TensorFlow', color: '#FF6F00' },
  { icon: SiTypescript, name: 'TypeScript', color: '#3178C6' },
  { icon: SiTailwindcss, name: 'Tailwind', color: '#06B6D4' },
  { icon: FaDocker, name: 'Docker', color: '#2496ED' },
  { icon: FaGitAlt, name: 'Git', color: '#F05032' },
  { icon: SiRedis, name: 'Redis', color: '#DC382D' },
  { icon: SiFirebase, name: 'Firebase', color: '#FFCA28' },
]

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.05 },
  },
}

const item = {
  hidden: { opacity: 0, scale: 0.8 },
  show: { opacity: 1, scale: 1 },
}

export default function TechStack() {
  return (
    <section className="section" id="stack">
      <div className="section-row">
        <span className="section-label">Stack</span>
        <motion.div
          className="stack-grid"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-50px' }}
        >
          {techItems.map((tech) => (
            <motion.div
              key={tech.name}
              className="stack-item"
              variants={item}
              whileHover={{ scale: 1.12, y: -4 }}
              title={tech.name}
            >
              <tech.icon
                className="stack-icon"
                style={{ color: tech.color }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
