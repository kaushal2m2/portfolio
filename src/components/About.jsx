import Tilt from 'react-parallax-tilt'
import {motion} from 'framer-motion'

import {styles} from '../styles'
import {services} from '../constants'
import {fadeIn, textVariant} from '../utils/motion'
import { SectionWrapper } from '../hoc'

const ServiceCard = ({index, title, icon}) => {
  return (
    <Tilt className='xs:w-[250px] w-full'>
      <motion.div
        variants={fadeIn("right","spring",0.5 * index, 1)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'>
          <div
            className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'>
              <img src={icon} alt={title} className='w-16 h-16 object-contain'/>
              <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3> 
          </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("","",0.1,1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'>
          I’m a Bay Area software engineer currently at <span className='font-bold text-[#911eff]'>Google</span>, where I work on <span className='font-bold text-[#911eff]'>privacy infrastructure, low-latency systems, and AI-powered developer tooling.</span> I recently completed dual degrees in <span className='font-bold text-[#911eff]'>Computer Science and Engineering</span> and <span className='font-bold text-[#911eff]'>Statistics</span> at UC Davis, and I’m at my best when I’m turning ambiguous problems into systems that scale, unblock teams, and ship measurable impact.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service}/>
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, 'about')
