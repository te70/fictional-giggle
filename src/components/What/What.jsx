import React from 'react'
import { Accordion, AccordionItem, AccordionItemHeading, AccordionItemButton, AccordionItemPanel, AccordionItemState } from "react-accessible-accordion";
import 'react-accessible-accordion/dist/fancy-example.css'
import {MdOutlineArrowDropDown} from 'react-icons/md'
import './What.css'
import data from '../../utils/accordion'
import { useState } from 'react';
function What() {
  return (
    <section className='v-wrapper'>
        <div className="paddings innerWidth flexCenter v-container"> 
            <div className="flexCenter v-right">
                <span className='greenText2'>What we do</span>
                <span className='primaryText2'><center>We strive to be the best school operations consultancy firm in the education industry.<br/> Our team will assist you to implement your
                business strategy. <br/> Our goal is to ensure that educators focus on teaching & learning while our team provides effective & efficient solutions for the day to day operations of your institution.
                </center>
                </span>
            </div>
        </div>
    </section>
  )
}

export default What