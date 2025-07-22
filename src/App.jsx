import React from 'react'
import Header from './component/Header'
import About from './component/About'
import Project from './component/Project'
import Hero from './component/Hero'
import Skills from './component/Skills'
import Contact from './component/Contact'
import Footer from './component/Footer'

const App = () => {
  return (
    <div className='scroll-smooth'>
      <Header />
      <Hero />
      <About />
      <Project />
      <Skills />
      <Contact />
      <Footer />


    </div>
  )
}

export default App