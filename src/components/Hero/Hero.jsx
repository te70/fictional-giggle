import React from 'react';
import './Hero.css';
import {HiLocationMarker} from 'react-icons/hi';
import CountUp from 'react-countup';
import {motion} from 'framer-motion'
function Hero() {
  return (
    <section className="hero-wrapper">
        <div className="paddings innerWidth flexCenter hero-container">
            {/* left side */}
            <div className="flexColStart hero-left">
                <div className="hero-title">
                    <div className="green-circle"/>
                    <motion.h1 initial={{y: "2rem", opacity: 0}} animate={{y:0, opacity:1}} transition={{duration: 2, type:"spring"}}>Discover <br/>Most Suitable <br/>Talent</motion.h1>
                </div>
                <div className="flexColStart hero-des">
                    <span className='primaryText'>a recruitment agency<br/>that drives value to your business.</span>
                    <span className='secondaryText'>Ps: Forget all difficulties in finding talent for your vibrant company </span>
                </div>

                <div className='flexCenter stats'>
                    <div className='flexColCenter stat'>
                        
                    </div> 
                    <div className='flexColCenter stat'>
                        
                    </div>
                </div>
            </div>
            {/* right side */}
            <div className="flexCenter hero-right">
                <motion.div initial={{x:"7rem",opacity:0}} animate={{x:0, opacity:1}} transition={{duration: 2, type:"spring"}} className="image-container">
                    <img src="./office_lady.jpg" alt=""/>
                </motion.div>
            </div>
        </div>
    </section>
  )
}

export default Hero