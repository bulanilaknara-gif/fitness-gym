import { useEffect, useState } from "react"
import AOS from "aos"
import "aos/dist/aos.css"

import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Services from "./components/Services"
import Trainers from "./components/Trainers"
import Pricing from "./components/Pricing"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

function App() {

  const [darkMode, setDarkMode] = useState(true)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    })

    setTimeout(() => {
      setLoading(false)
    }, 2000)

  }, [])

  if (loading) {
    return (
      <div className="loader">
        <h1>Fit Life Gym</h1>
      </div>
    )
  }

  return (
    <div className={darkMode ? "dark" : "light"}>
      <Navbar setDarkMode={setDarkMode} darkMode={darkMode} />
      <Hero />
      <About />
      <Services />
      <Trainers />
      <Pricing />
      <Contact />
      <Footer />
    </div>
  )
}

export default App