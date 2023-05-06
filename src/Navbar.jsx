import React from 'react'
import {  Link, } from 'react-router-dom'

function Navbar() {
  return (
    <nav>
       <Link className="navbar"to='/'>Home</Link>
      <Link className="navbar"to='/about'>About</Link>
    </nav>
  )
}

export default Navbar
