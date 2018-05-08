import React from 'react'
import { Link } from 'react-router-dom'

import './Nav.scss'

// The Header creates links that can be used to navigate
// between routes.
const Nav = ({ className }) => (
  <nav className={`nav ${className}`}>
    <ul className="nav-links">
      <li className="nav-link"><Link to='/'>Home</Link></li>
      <li className="nav-link"><Link to='/roster'>Roster</Link></li>
      <li className="nav-link"><Link to='/schedule'>Schedule</Link></li>
    </ul>
  </nav>
)

export default Nav;
