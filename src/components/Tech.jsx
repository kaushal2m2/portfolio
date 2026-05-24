import { motion } from 'framer-motion'
import { SectionWrapper } from '../hoc'
import { skillGroups } from '../constants'
import { styles } from '../styles'
import { fadeIn, textVariant } from '../utils/motion'

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What I work with</p>
        <h2 className={styles.sectionHeadText}>Skills</h2>
      </motion.div>

      <div className='mt-6 max-w-3xl'>
        <motion.p variants={fadeIn("","",0.1,1)} className='text-secondary text-[17px] leading-[30px]'>
          A broader snapshot of the tools and systems I actually use, not just the ones that fit on a resume bullet.
        </motion.p>
      </div>

      <div className='mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3'>
        {skillGroups.map((group, index) => (
          <motion.div
            key={group.title}
            variants={fadeIn("up","spring",index * 0.15,0.75)}
            className='glass-dark rounded-[28px] border border-white/10 p-6'
          >
            <p className='text-xs uppercase tracking-[0.26em] text-[#f59e0b]'>{group.title}</p>
            <div className='mt-4 flex flex-wrap gap-2'>
              {group.items.map((item) => (
                <span
                  key={item}
                  className='rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-white'
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Tech, "")
