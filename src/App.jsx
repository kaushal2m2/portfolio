import { BrowserRouter } from "react-router-dom"
import {useState} from "react"
import {logo, logo_black} from "./assets"
import {motion} from "framer-motion"

import {About, SimpleScreen, Contact, Experience, Hero, Navbar, Tech, Works, StarsCanvas, Bottom } from "./components"


const App = () => {
  const [isSelected, setSelected] = useState(false)
  if(isSelected){
    return (
  
      <div className='h-full min-h-screen w-[100vw] relative z-0 bg-[#f5f1ea] flex flex-col'>
        <div className='fixed right-4 top-4 z-30 flex flex-col items-center text-black'>
          <div className='glass-light mt-4 cursor-pointer w-20 h-11 flex items-center rounded-full p-1 justify-start shadow-lg'
          onClick={() => setSelected(!isSelected)}>
            <motion.div layout className="bg-white w-9 h-9 rounded-full drop-shadow-2xl">
              <img src = {logo} className="rounded-full" alt="toggle view"/>
            </motion.div>
          </div>
          <p className="quick text-sm mt-2 tracking-wide">
            Switch to detailed
          </p>
        </div>
        <div className="mt-[10vh]"><SimpleScreen /></div>

      </div>
    
    )
  }
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary overflow-hidden'>
        <div className='hero-glow hero-glow-left' />
        <div className='hero-glow hero-glow-right' />
        <div className='bg-hero-pattern bg-no-repeat bg-center bg-cover'>
          <div className="flex flex-row">
            <Navbar />
            <div className='fixed right-4 top-4 z-30 flex flex-col items-center text-white'>
              <div className='glass-dark mt-4 cursor-pointer w-20 h-11 flex items-center rounded-full p-1 justify-end shadow-lg'
              onClick={() => setSelected(!isSelected)}>
                <motion.div layout className="bg-white w-9 h-9 rounded-full shadow-md">
                  <img src = {logo_black} className="rounded-full" alt="toggle view"/>
                </motion.div>
              </div>
              <p className="text-xs mt-2 tracking-[0.24em] uppercase text-secondary">
                Resume view
              </p>
            </div>
          </div>
          
          <Hero/>
        </div>
      </div>
      <About />
      <Experience /> 
      <Tech />
      <Works />
      <div className='relative z-0'>
        <Contact />
        <StarsCanvas />
      </div>
      <Bottom />
    </BrowserRouter>
  )
}

export default App
