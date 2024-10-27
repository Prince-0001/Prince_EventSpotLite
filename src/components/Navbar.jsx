import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {

  return (
    <div className='navbar'>
        <div className="container">
            <div className="logo">
                <div className='img-before'></div>
                <Link to='/' >
                <img src="https://png.pngtree.com/png-clipart/20231101/original/pngtree-bike-event-logo-photo-png-image_13481453.png"
                alt='logo' 
                ></img>
                </Link>
                
            </div>
            <div className="links">
                <Link className='link' to="/?cat=ART">
                    <h6>ART</h6>
                </Link>
                <Link className='link' to="/?cat=SCIENCE">
                    <h6>SCIENCE</h6>
                </Link>
                <Link className='link' to="/?cat=TECHNOLOGY">
                    <h6>TECHNOLOGY</h6>
                </Link>
                <Link className='link' to="/?cat=CINEMA">
                    <h6>CINEMA</h6>
                </Link>
                <Link className='link' to="/?cat=DESIGN">
                    <h6>DESIGN</h6>
                </Link>
                <Link className='write' to='/write'>Write</Link>
                
                
            </div>
        </div>
    </div>
  )
}

export default Navbar
