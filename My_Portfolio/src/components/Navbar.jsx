import { NavLink, Link } from 'react-router-dom'
import "../css/Navbar.css";

export default function Navbar() {
  return (
    <header className="site-header">
      <nav className="navbar container">
        <Link className="brand" to="/">Venkata Jayanth</Link>
        <ul className="nav-list">
          <li><NavLink to="/home" end>Home</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/education">Education</NavLink></li>
          <li><NavLink to="/projects">Projects</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
        </ul>
      </nav>
    </header>
  )
}
