import { useState } from 'react'
import { FiPlus, FiX } from 'react-icons/fi'
import { motion, AnimatePresence } from 'framer-motion'
import './UploadButton.css'

export default function UploadButton({ category, onAdd }) {
  const [isOpen, setIsOpen] = useState(false)
  const [form, setForm] = useState({
    title: '',
    description: '',
    tags: '',
    github: '',
    demo: '',
    timeline: '',
    role: '',
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!form.title.trim() || !form.description.trim()) return

    const newProject = {
      id: `${category}-${Date.now()}`,
      title: form.title.trim(),
      description: form.description.trim(),
      tags: form.tags.split(',').map((t) => t.trim()).filter(Boolean),
      github: form.github.trim(),
      demo: form.demo.trim(),
      timeline: form.timeline.trim() || 'Present',
      role: form.role.trim() || 'Developer',
    }

    onAdd(newProject)
    setForm({ title: '', description: '', tags: '', github: '', demo: '', timeline: '', role: '' })
    setIsOpen(false)
  }

  return (
    <>
      <motion.button
        className="upload-fab"
        onClick={() => setIsOpen(true)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        title="Add new project"
      >
        <FiPlus />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              className="modal-content glass-card"
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="modal-header">
                <h3>Add New Project</h3>
                <button className="modal-close" onClick={() => setIsOpen(false)}>
                  <FiX />
                </button>
              </div>
              <form onSubmit={handleSubmit} className="modal-form">
                <div className="form-group">
                  <label>Project Title *</label>
                  <input
                    type="text"
                    value={form.title}
                    onChange={(e) => setForm({ ...form, title: e.target.value })}
                    placeholder="My Awesome Project"
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Description *</label>
                  <textarea
                    value={form.description}
                    onChange={(e) => setForm({ ...form, description: e.target.value })}
                    placeholder="Brief description of the project..."
                    rows={3}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Tech Tags (comma separated)</label>
                  <input
                    type="text"
                    value={form.tags}
                    onChange={(e) => setForm({ ...form, tags: e.target.value })}
                    placeholder="React, Node.js, MongoDB"
                  />
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label>Timeline</label>
                    <input
                      type="text"
                      value={form.timeline}
                      onChange={(e) => setForm({ ...form, timeline: e.target.value })}
                      placeholder="Jan 2026 — Mar 2026"
                    />
                  </div>
                  <div className="form-group">
                    <label>Role</label>
                    <input
                      type="text"
                      value={form.role}
                      onChange={(e) => setForm({ ...form, role: e.target.value })}
                      placeholder="Developer"
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label>GitHub URL</label>
                    <input
                      type="url"
                      value={form.github}
                      onChange={(e) => setForm({ ...form, github: e.target.value })}
                      placeholder="https://github.com/..."
                    />
                  </div>
                  <div className="form-group">
                    <label>Live Demo URL</label>
                    <input
                      type="url"
                      value={form.demo}
                      onChange={(e) => setForm({ ...form, demo: e.target.value })}
                      placeholder="https://..."
                    />
                  </div>
                </div>
                <button type="submit" className="btn btn-primary submit-btn">
                  Add Project
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
