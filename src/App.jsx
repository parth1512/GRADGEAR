import React from 'react'
import Navbar from './components/Navbar'
import Hero from "./components/Hero";
import Hero_2 from "./components/Hero_2"
import BottomBar from './components/BottomBar';
import Work from './components/Work'
import About from './components/About'
import Footer from './components/Footer'

export const App = () => {
  return (
    <>
      <nav>
        <Navbar/>
      </nav>
      <Hero/>
      <br/>
      <Hero_2/>
      <BottomBar/>
      <br/>
      <Work/>
      <br/>
      <About/>
      <Footer/>
    </>
  )
}

export default App 
