import React from 'react'
import {Link} from "react-router-dom"

const Navbar = () => {
  return (
    <nav>
        <ul>
            <li>
                <Link className='nav-link' to="/">Home</Link>
                <Link className='nav-link' to="/switch">Condition Render</Link>
                <Link className='nav-link' to="/event">Handle Event</Link>
                <Link className='nav-link' to="/expandabletext">Expandable Text</Link>
                <Link className='nav-link' to="/randomcolor">Random Color</Link>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar