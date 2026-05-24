import {useState} from 'react'
import { Link } from 'react-router-dom'

import {styles} from '../styles'
import {navLinks} from '../constants'
import {logo, menu, close} from '../assets'

const Navbar = () => {
  const [active, setActive] = useState('')
  const [toggle, setToggle] = useState(false)
  return (
    <nav 
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-transparent absolute`}>
      <div className='flex items-center justify-between w-full max-w-7xl mx-auto'>
        <Link 
          to='/'
          className='flex items-center gap-2'
          onClick={ () => { setActive(''); 
          window.scrollTo(0, 0); }}
        >
          <img src = {logo} alt = "logo" className="w-9 h-9 object-contain" />
          <div className='flex flex-col'>
            <p className='text-white text-[18px] font-bold cursor-pointer flex'>Kaushal&nbsp;Marimuthu</p>
            <p className='hidden sm:block text-[11px] uppercase tracking-[0.25em] text-secondary'>Software Engineer</p>
          </div>
        </Link>
        <ul className='glass-dark list-none hidden sm:flex flex-row gap-8 rounded-full border border-white/10 px-6 py-3'>
          {navLinks.map((link) => (
            <li key={link.id}
                className={`${active === link.title ? "text.white" : "text-secondary"} 
                hover:text-white text-[18px] font-medium cursor-pointer`}
                onClick={() => setActive(link.title)}>
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>

        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img src={toggle ? close : menu} alt='menu' className='w-[28px] h-[28px] object-contain cursor-pointer' 
            onClick={() => setToggle(!toggle)}/>
          <div className={`${!toggle ? 'hidden' : 'flex'} mx-4 my-2 min-w-[140px] z-10 rounded-xl top-20 absolute right-0 p-6 black-gradient`}>
            <ul className='list-none flex justify-end items-start flex-col gap-4'>
              {navLinks.map((link) => (
                <li key={link.id}
                    className={`${active === link.title ? "text.white" : "text-secondary"} 
                    font-poppins font-medium cursor-pointer text-[16px]`}
                    onClick={() => {
                      setToggle(!toggle);
                      setActive(link.title);
                    }}>
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* <div className='bg-sky-500'> 
          <img src = {logo} alt = "logo" className="w-9 h-9 object-contain"
            onClick={setSelected(true)}
            /> 
        </div> */}
      </div>
    </nav>
  )
}

export default Navbar
