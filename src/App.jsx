import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from '../components/navbar.jsx'
import Hero from '../components/hero.jsx'
import Market from '../components/market.jsx'
import About from '../components/about.jsx'

function App() {
 

  return (
    <>
     <Navbar />
      <Hero />
      <Market />
      <About />
    </>
  )
}

export default App