import React from 'react'
import './NavBar.css'
const NavBar = ({resultRef}) => {
 
  return (
    <div >
        <div class="Navbar">
            <span >Food</span>
            <span>Beverage</span>
            <span>Dessert</span>
            <span>Partner</span>
            <span className='right'>Recommend</span>
        </div>
    </div>
  )
}

export default NavBar 

