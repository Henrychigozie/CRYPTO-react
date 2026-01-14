import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from '../components/navbar.jsx'
import Hero from '../components/hero.jsx'
import Market from '../components/market.jsx'
import About from '../components/about.jsx'
import Platform from '../components/platform.jsx'
import GetStarted from '../components/get-started.jsx'
import HeroServiceSection from '../components/explore.jsx'
import Reviews from '../components/reviews.jsx'
import Reviews2 from '../components/reviews2.jsx'
import ContactUs from '../components/contact.jsx'
import Footer from '../components/footer.jsx'

function App() {
 

  return (
    <>
     <Navbar />
      <Hero />
      <Market />
      <About />
      <Platform />
      <GetStarted />
      <HeroServiceSection />
      <Reviews />
      <Reviews2 />
      <ContactUs />
      <Footer />
    </>
  )
}

export default App