import { useEffect } from "react"
import Hero from "./components/Hero"
import MakeImpactSection from "./components/MakeImpactSection"
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import VisualStories from "./components/VisualStories"
import Featured from "./components/Featured"
import FooterSection from "./components/FooterSection"
import Lenis from '@studio-freight/lenis'

function App() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    const lenis = new Lenis({
      wheelMultiplier: 0.3,
    })

    lenis.on('scroll', ScrollTrigger.update)
    
    gsap.ticker.add((time)=>{
      lenis.raf(time * 5000)
    })
    
    gsap.ticker.lagSmoothing(0)
  })
  return (
    <div className="relative " id="main-con">
      <div className="hero-container">
        <Hero />
        <MakeImpactSection />
        <VisualStories/>
        <Featured/>
        <FooterSection/>
      </div>
    </div>
  )
}

export default App
