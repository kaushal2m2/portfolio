import { BrowserRouter } from "react-router-dom"
import React, {useState} from "react"
import {logo, logo_black} from "./assets"
import {motion} from "framer-motion"

import {About, SimpleScreen, Contact, Experience, Hero, Navbar, Tech, Works, StarsCanvas, Bottom } from "./components"


const App = () => {
  const [isSelected, setSelected] = useState(true)
  if(isSelected){
    return (
  
      <div className='h-full w-[100vw] relative z-0 bg-[#ffffff] flex flex-col'>
        <div className='flex flex-col items-center bg-transparent text-black w-[10vw] h-[10vh] z-20 fixed absolute right-0'>
          <div className='mt-4 cursor-pointer	w-16 h-10 flex items-center bg-slate-300 rounded-full p-1 justify-start'
          onClick={() => setSelected(!isSelected)}>
            <motion.div layout className="bg-white w-8 h-8 rounded-full drop-shadow-2xl">
              <img src = {logo} className="rounded-full"/>
            </motion.div>
          </div>
          <p className="quick text-md mt-[5px]">
            Click me!
          </p>
        </div>
        <div className="mt-[10vh]"><SimpleScreen /></div>

      </div>
    
    )
  }
  return (
    <BrowserRouter>
      <div className='b relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-no-repeat bg-center'>
          <div className="flex flex-row">
            <Navbar />
            <div className='flex flex-col items-center bg-transparent text-white w-[10vw] h-[10vh] z-20 fixed absolute right-0'>
              <div className='mt-4 cursor-pointer	w-16 h-10 flex items-center bg-[#911eff] rounded-full p-1 justify-end'
              onClick={() => setSelected(!isSelected)}>
                <motion.div layout className="bg-white w-8 h-8 rounded-full shadow-md">
                  <img src = {logo_black} className="rounded-full"/>
                </motion.div>
              </div>
              {/* <p className="mt-[5px]">
                Quick View
              </p> */}
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
