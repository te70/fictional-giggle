import React from 'react'
import './Contact.css'
import { MdCall } from 'react-icons/md'
import { BsFillChatDotsFill, BsMailbox, BsMailbox2 } from 'react-icons/bs'
import { HiChatBubbleBottomCenter } from 'react-icons/hi2'

function Contact() {
  return (
    <section className='c-wrapper' id="contact">
        <div className="paddings innerWidth flexCenter c-container">
            {/* left side */}
            <div className="flexColStart c-left">
                <span className='greenText'>Our Contacts</span>
                <span className='primaryText'>Easy to contact us</span>
                <span className='secondaryText'>We always ready to help by believing better operations can make your institution better</span>

                <div className="flexColStart contactModes">
                    {/* first row */}
                    <div className="flexStart row">
                        <div className="flexColCenter mode">
                            <div className="flexStart">
                                <div className="flexCenter icon">
                                    <MdCall size={25}/>
                                </div>
                                <div className="flexColStart detail">
                                    <span className='primaryText'>Call</span>
                                    <span className='secondaryText'>+254 722 664002</span>
                                </div>
                            </div>
                            <div className="flexCenter button">
                                Call now
                            </div>
                        </div>
                        {/* second mode */}
                        <div className="flexColCenter mode">
                            <div className="flexStart">
                                <div className="flexCenter icon">
                                    <BsMailbox size={25}/>
                                </div>
                                <div className="flexColStart detail">
                                    <span className='primaryText'>Mail</span>
                                    <span className='secondaryText'>info@elvich.co.ke</span>
                                </div>
                            </div>
                            <div className="flexCenter button">
                                Mail now
                            </div>
                        </div>
                    </div>
                    {/* second row */}
                    
                </div>
            </div>
            {/* right side */}
            <div className="flexCenter c-right">
                <div className="image-container">
                    <img src='./lady_3.jpg' alt=''/>
                </div>
            </div> 
        </div>
    </section>
  )
}

export default Contact