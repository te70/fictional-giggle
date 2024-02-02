import React from 'react'
import './GetStarted.css'

function GetStarted() {
  return (
    <section className="g-wrapper">
        <div className="paddings innerWidth g-container">
            <div className="flexColCenter inner-container">
                <span className='primaryText'>Get Started with Elvich</span>
                <span className='secondaryText'>In an ever changing business world
                    <br/>
                    Find coveted school operations consultancy here
                </span>
                <button className="button">
                    <a href="mailto:info@elvich.co.ke">Get Started</a>
                </button>
            </div>
        </div>
    </section> 
  )
}

export default GetStarted