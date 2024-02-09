import React from 'react'
import './Header.css'
import {BiMenuAltRight} from 'react-icons/bi'
import OutsideClickHandler from 'react-outside-click-handler'
import { useState } from 'react'
import {Link} from 'react-router-dom'

function Header() {
  const [menuOpened, setMenuOpened] = useState(false)
  const getMenuStyles = (menuOpened) => {
    if(document.documentElement.clientWidth <= 800) {
      return {right: !menuOpened && "-100%"}
    }
  }
  return (
    <section className="h-wrapper">
        <div className="flexCenter paddings innerWidth h-container">
            <a href='/'><img src="/elvich_logo.png" alt="logo" width={150} /></a>

            <OutsideClickHandler onOutsideClick={()=>setMenuOpened(false)}>
            <div className="flexCenter h-menu" style={getMenuStyles(menuOpened)}>
                <a href="mailto:info@elvich.co.ke">info@elvich.co.ke</a>
                <a href="#value">Our Value</a>
                <a href="/jobs">Jobs</a>
                <button className="button">
                    <a href="/submit-cv">Submit cv</a>
                </button> 
            </div>
            </OutsideClickHandler>
            <div className="menu-icon"onClick={()=>setMenuOpened((prev)=>!prev)}>
              <BiMenuAltRight size={30}/>
            </div>
        </div>
        
    </section>
  )
}

export default Header