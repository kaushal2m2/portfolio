import { motion } from 'framer-motion'

import {styles} from '../styles'
// import {ComputersCanvas} from './canvas'

const Hero = () => {
  return (
    <section className='relative w-full min-h-screen mx-auto overflow-hidden'>
      <div className='absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(21,94,117,0.28),transparent_40%),radial-gradient(circle_at_80%_20%,rgba(249,115,22,0.16),transparent_28%)]' />
      <div className={`${styles.paddingX} absolute inset-0 top-[22vh] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#f59e0b]'/>
          <div className='w-1 sm:h-96 h-52 amber-teal-gradient'/>
        </div>
        <div>
          <p className='text-[#facc15] uppercase tracking-[0.32em] text-xs sm:text-sm font-semibold'>
            Software Engineer • AI Systems • Performance
          </p>
          <h1 className={`${styles.heroHeadText} text-white max-w-4xl`}>
            Hi, I&apos;m <span className='text-[#911eff]'>Kaushal</span>
          </h1>
          <p className={`${styles.heroSubText} mt-4 text-white-100 max-w-3xl`}>
            I&apos;m a <span className='text-[#911eff]'>Software Engineer at Google</span> who builds <br className='sm:block hidden'/> low-latency systems, AI tools, and developer workflows.
          </p>
          <div className='mt-8 flex flex-wrap gap-3'>
            <a href='#work' className='rounded-full bg-[#f59e0b] px-6 py-3 text-sm font-semibold text-[#140f2d] transition hover:translate-y-[-2px]'>
              See experience
            </a>
            <a href='#contact' className='rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10'>
              Contact info
            </a>
          </div>
          <div className='mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3 max-w-3xl'>
            <div className='glass-dark rounded-2xl px-4 py-4'>
              <p className='text-xs uppercase tracking-[0.24em] text-secondary'>Current focus</p>
              <p className='mt-2 text-sm text-white'>Privacy infra, AI agent tooling, and org-scale developer productivity.</p>
            </div>
            <div className='glass-dark rounded-2xl px-4 py-4'>
              <p className='text-xs uppercase tracking-[0.24em] text-secondary'>Education</p>
              <p className='mt-2 text-sm text-white'>UC Davis, B.S. in Computer Science and Engineering + Statistics.</p>
            </div>
            <div className='glass-dark rounded-2xl px-4 py-4'>
              <p className='text-xs uppercase tracking-[0.24em] text-secondary'>Built for</p>
              <p className='mt-2 text-sm text-white'>Real users, hard migrations, and systems that need to scale cleanly.</p>
            </div>
          </div>
        </div>
      </div>

      {/* <ComputersCanvas /> */}

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div 
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop',
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'/>

          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero
