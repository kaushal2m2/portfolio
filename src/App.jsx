import { BrowserRouter } from "react-router-dom"

import {About, Contact, Experience, Hero, Navbar, Tech, Works, StarsCanvas, Bottom } from "./components"

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-no-repeat bg-cover bg-center'>
          <Navbar />
          <Hero />
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
