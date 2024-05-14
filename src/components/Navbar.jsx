import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='nav'>
      <div className="leftContainer">
        
          <button><Link to="/">Home</Link></button>
        
        <button><Link to="/Projects">Projects</Link></button>
        <button><Link to="/About">About me</Link></button>
      </div>
      <div className="middleContainer">
        <span className='qoute'>YOU BECOME<br />WHAT YOU <br />BELIEVE </span>
      </div>
      <div className="rightContainer">
        <div className="media">
            <img src="https://png.pngtree.com/png-clipart/20180626/ourmid/pngtree-instagram-icon-instagram-logo-png-image_3584853.png" alt="" className="icon" />
        </div>
        <div className="media">
            <img src="https://freepnglogo.com/images/all_img/1691832581twitter-x-icon-png.png" alt="" className="icon" />
        </div>
        <div className="media">
            <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="" className="icon" />
        </div>
      </div>
    </div>
  )
}

export default Navbar
