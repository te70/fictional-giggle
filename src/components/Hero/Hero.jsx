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
                    <motion.h1 initial={{y: "2rem", opacity: 0}} animate={{y:0, opacity:1}} transition={{duration: 2, type:"spring"}}>Your Partner<br/>in School <br/>Operations</motion.h1>
                </div>
                <div className="flexColStart hero-des">
                    <span className='primaryText'>supporting schools business<br/> through efficient operational systems</span>
                    <span className='secondaryText'>Ps: Forget all difficulties of managing operations in your vibrant institution</span>
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
                    <img src="./school.jpg" alt=""/>
                </motion.div>
            </div>
        </div>
    </section>
  )
}

export default Hero