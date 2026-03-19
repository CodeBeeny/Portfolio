import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiArrowLeft } from 'react-icons/fi'
import { categories, defaultProjects } from '../data/projectsData.js'
import ProjectCard from '../components/ProjectCard.jsx'
import UploadButton from '../components/UploadButton.jsx'
import './ProjectCategory.css'

export default function ProjectCategory() {
  const { category } = useParams()
  const catInfo = categories.find((c) => c.slug === category)

  const [projects, setProjects] = useState([])

  useEffect(() => {
    // Load from localStorage or fallback to defaults
    const storageKey = `projects_${category}`
    const stored = localStorage.getItem(storageKey)
    if (stored) {
      setProjects(JSON.parse(stored))
    } else {
      setProjects(defaultProjects[category] || [])
    }
  }, [category])

  const saveProjects = (newProjects) => {
    setProjects(newProjects)
    localStorage.setItem(`projects_${category}`, JSON.stringify(newProjects))
  }

  const handleAddProject = (newProject) => {
    const updated = [newProject, ...projects]
    saveProjects(updated)
  }

  if (!catInfo) {
    return (
      <div className="section" style={{ textAlign: 'center', paddingTop: '120px' }}>
        <h2>Category not found</h2>
        <Link to="/projects" className="back-link" style={{ marginTop: '16px', display: 'inline-flex' }}>
          <FiArrowLeft /> Back to Projects
        </Link>
      </div>
    )
  }

  return (
    <div className="category-page section">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Link to="/projects" className="back-link">
          <FiArrowLeft /> All Projects
        </Link>

        <div className="category-page-header">
          <span className="category-page-icon">{catInfo.icon}</span>
          <div>
            <h1 className="page-title">{catInfo.name}</h1>
            <p className="page-subtitle">{catInfo.description}</p>
          </div>
        </div>
      </motion.div>

      <div className="project-list">
        {projects.length === 0 ? (
          <div className="empty-state">
            <p>No projects yet. Click the + button to add one!</p>
          </div>
        ) : (
          projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))
        )}
      </div>

      <UploadButton category={category} onAdd={handleAddProject} />
    </div>
  )
}
