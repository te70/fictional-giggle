import React from 'react'
import Header from '../Header/Header'
import Value from '../Value/Value';
import Contact from '../Contact/Contact';
import GetStarted from '../GetStarted/GetStarted';
import Footer from '../Footer/Footer';
import What from '../What/What';
import How from '../How/How';
import Cor from '../Cor/Cor';
import Hero from '../Hero/Hero';

function Plus() {
  return (
    <div>
        <div>
          <div className="white-gradient"/>
          <Header/>
          <Hero/>
        </div>
        <What/>
        <How/>
        <Cor/>
        <Value/>
        <Contact/>
        <GetStarted/>
        <Footer/>
    </div>
  )
}

export default Plus