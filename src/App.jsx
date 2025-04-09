import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Component/Navbar'
import Hero from './Component/Hero'
import Section from './Component/Section'
import Secondsection from './Component/Secondsection'
import Threesection from './Component/Threesection'
import Footer from './Component/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="pt-20"> {/* Matches navbar height */}
      <Navbar />
      <Hero />
      <Section />
      <Secondsection />
      <Threesection />
      <Footer />
    </div>
  )
}

export default App
