import React from 'react'
import { Link } from 'react-router-dom'


const NavBar = () => {
  return (

    <div>
      <ul>
        <Link to='/home'>Home</Link>
        <Link to='/create'>Create Pokemon</Link>
      </ul>
    </div>
    
  )
}

export default NavBar