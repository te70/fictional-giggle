import React from 'react'
import { Accordion, AccordionItem, AccordionItemHeading, AccordionItemButton, AccordionItemPanel, AccordionItemState } from "react-accessible-accordion";
import 'react-accessible-accordion/dist/fancy-example.css'
import {MdOutlineArrowDropDown} from 'react-icons/md'
import './Value.css'
import data from '../../utils/accordion'
import { useState } from 'react';
function Value() {
  return (
    <section className='v-wrapper' id="value">
        <div className="paddings innerWidth flexCenter v-container">
            {/* left side */}
            <div className="flexCenter v-left"> 
                <div className="image-container"> 
                    <img src='./value.jpg' alt=''/>
                </div>
            </div>

            {/* right side */}
            <div className="flexColStart v-right">
                <span className='greenText'>Our Value</span>
                <span className='primaryText'>Value we give to you</span>
                <span className='secondaryText'>We are ideally suited to help schools manage their operational tasks and ensure they are being maintained in an efficient and effective manner.
                </span>
                <Accordion
                    className="accordion"
                    allowMultipleExpanded={false}
                    preExpanded={[0]}
                >
                    {
                        data.map((item, i)=>{
                            const [className, setClassName] = useState(null)
                            return(
                                <AccordionItem className={`accordionItem ${className}`} key={i} uuid={i}>
                                    <AccordionItemHeading>
                                        <AccordionItemButton className="flexCenter accordionButton">
                                            <AccordionItemState>
                                                {({expanded}) => expanded ? setClassName("expanded") : setClassName("collapsed")}
                                            </AccordionItemState>
                                            <div className="flexCenter icon">{item.icon}</div>
                                            <span className='primaryText'>
                                                {item.heading}
                                            </span>
                                            <div className="flexCenter icon">
                                                <MdOutlineArrowDropDown size={20}/>
                                            </div>
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                        <p className="secondaryText">
                                            {item.detail}
                                        </p>
                                    </AccordionItemPanel>
                                </AccordionItem>
                            )
                        })
                    }
                </Accordion>
            </div>
        </div>
    </section>
  )
}

export default Value