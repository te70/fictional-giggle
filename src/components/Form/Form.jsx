import React from 'react'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'

function Form() {
  return (
    <div>
    <Header/>
    <section className='r-wrapper'>
      <div className='paddings innerWidth r-container'>
        <div className="r-head flexColStart">
          <span className='primaryText'>Form</span>
        </div>
      </div>
    </section>
    <Footer/>
    </div>
  )
}

export default Form