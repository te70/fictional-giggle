import React from 'react'
import { Accordion, AccordionItem, AccordionItemHeading, AccordionItemButton, AccordionItemPanel, AccordionItemState } from "react-accessible-accordion";
import 'react-accessible-accordion/dist/fancy-example.css'
import {MdOutlineArrowDropDown} from 'react-icons/md'
import './Why.css'
import data from '../../utils/accordion'
import { useState } from 'react';
function Why() {
  return (
    <section className='v-wrapper' id="value">
        <div className="paddings innerWidth flexCenter v-container">
            <div className="v-right">
                <span className='greenText2 flexCenter'>Why us</span>
                <span className='primaryText2'><center>We have vast experience in school operations & will assist you to implement your business strategy.
             <br/> We make commitments, meet deadlines and deliver on our promise
                </center>
                </span>
            </div>
        </div>
    </section>
  )
}

export default Why