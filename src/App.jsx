import React from 'react'
import Header from './component/header/Header.jsx'
import Nav from './component/nav/Nav.jsx'
import About from './component/about/About.jsx'
import Experience from './component/experience/Experience.jsx'
import Services from './component/services/Services.jsx'
import Portfolio from './component/portfolio/Portfolio.jsx'
import Testimonials from './component/testimonials/Testimonials.jsx'
import Contact from './component/contact/Contact.jsx'
import Footer from './component/footer/Footer.jsx'
import './index.css'


const App = () => {

  

  return (
    <div>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
      <Testimonials />
    </div>
  )
}

export default App


