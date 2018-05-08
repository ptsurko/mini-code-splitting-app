import React from 'react'
import { Link } from 'react-router-dom'

// The Header creates links that can be used to navigate
// between routes.
const Header = ({ className }) => (
  <header className={className}>
    <h1>Code splitting sample application</h1>
  </header>
)

export default Header
