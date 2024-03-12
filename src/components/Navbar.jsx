import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
        <h1>aa</h1>
        <div className='container'>
            <div className="logo">
                <img src="/EduHub_logo/.png" alt="EduHub Logo" />
            </div>
            <ul>
                <li> <link to="/">Home</link> </li>
                <li> <link to="/courses">Courses</link> </li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar
