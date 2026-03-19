import { NavLink } from 'react-router-dom'
import { 
  FiHome, FiGrid, FiLayers, FiUser, FiMail 
} from 'react-icons/fi'
import './Sidebar.css'

const navItems = [
  { path: '/', icon: FiHome, label: 'Home', exact: true },
  { path: '/projects', icon: FiGrid, label: 'Projects' },
  { path: '/stack', icon: FiLayers, label: 'Stack' },
  { path: '/about', icon: FiUser, label: 'About' },
  { path: '/contact', icon: FiMail, label: 'Contact' },
]

export default function Sidebar() {
  return (
    <nav className="sidebar" id="sidebar">
      <div className="sidebar-inner">
        <NavLink to="/" className="sidebar-logo" title="Home">
          <span className="logo-text">S</span>
        </NavLink>
        <ul className="sidebar-nav">
          {navItems.map((item) => (
            <li key={item.path} className="nav-item">
              <NavLink
                to={item.path}
                end={item.exact}
                className={({ isActive }) =>
                  `nav-link ${isActive ? 'active' : ''}`
                }
                title={item.label}
              >
                <item.icon className="nav-icon" />
                <span className="nav-tooltip">{item.label}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
