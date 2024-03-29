import React from 'react'
import {Swiper, SwiperSlide, useSwiper} from 'swiper/react'
import "swiper/css"
import "./How.css"
import data from "../../utils/slider2.json"
import { sliderSettings } from '../../utils/common'

function How() {
  return (
    <section className='r-wrapper'>
      <div className='paddings innerWidth r-container'>
        <div className="r-head flexColStart">
          {/* <span className='greenText'>Our services</span> */}
          <span className='primaryText'>How we do it</span>
        </div>
        <Swiper {...sliderSettings}>
          <SliderButtons/>
          {
            data.map((card, i)=>(
              <SwiperSlide key={i}>
                <div className="r-card flexColCenter">
                  <img src={card.image} alt="home"/>
                  <span className='secondaryText r-price'>
                    {/* <span style={{color: "orange"}}></span><span>{card.price}</span> */}
                  </span>
                  <span className='primaryText'>{card.name}</span>
                  <span className='primaryText2'>{card.detail}</span>
                </div>
              </SwiperSlide>
            ))
          }
        </Swiper>
      </div>
    </section>
  )
}

export default How;

const SliderButtons = ()=> {
  const swiper = useSwiper();
  return (
    <div className='flexCenter r-button'>
     <button onClick={()=>swiper.slidePrev()}>&lt;</button>
     <button onClick={()=>swiper.slideNext()}>&gt;</button>
    </div>
  )
}