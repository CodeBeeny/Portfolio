import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiArrowRight } from 'react-icons/fi'
import { categories } from '../data/projectsData.js'
import './FeaturedProjects.css'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
}

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
}

export default function FeaturedProjects() {
  return (
    <section className="section" id="work">
      <div className="section-row">
        <span className="section-label">Work</span>
        <motion.div
          className="featured-list"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-50px' }}
        >
          {categories.map((cat) => (
            <motion.div key={cat.slug} variants={item}>
              <Link to={`/projects/${cat.slug}`} className="featured-card glass-card">
                <div className="featured-card-header">
                  <span className="featured-icon">{cat.icon}</span>
                  <h3 className="featured-title">{cat.name}</h3>
                </div>
                <p className="featured-desc">{cat.description}</p>
                <div className="featured-tags">
                  {cat.tags.map((tag) => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
                <span className="featured-arrow">
                  <FiArrowRight />
                </span>
              </Link>
            </motion.div>
          ))}

          <motion.div variants={item}>
            <Link to="/projects" className="view-all-link">
              View all projects <FiArrowRight />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
