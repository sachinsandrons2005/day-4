import React from 'react'
import  '../../assets/Home.css'
import { Link } from 'react-router-dom'
 const NavBar = () => {
  return (
    <div><ul>
        <li id ='textb  '><Link  to ='/'>Home</Link></li>
        <li id ='text'><Link to ='/about'>About</Link></li>
        <li id ='text'><Link to ='/contact'>Contact</Link></li>
        <li id ='text'><Link to = '/Services'>Services</Link></li>
      </ul>
      <hr/>
    </div>
  )
}
export default NavBar
