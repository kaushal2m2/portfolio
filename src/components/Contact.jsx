import {motion} from 'framer-motion'

import {styles} from '../styles'
import { SectionWrapper } from '../hoc'
import {slideIn} from '../utils/motion'

const contactLinks = [
  {
    title: 'Email',
    value: 'kaushal2m2apply@gmail.com',
    href: 'mailto:kaushal2m2apply@gmail.com',
    description: 'Best place for recruiting, project, and collaboration outreach.',
  },
  {
    title: 'Website',
    value: 'kaushalmarimuthu.com',
    href: 'https://kaushalmarimuthu.com',
    description: 'Current portfolio, resume-style view, and project overview.',
  },
  {
    title: 'LinkedIn',
    value: 'linkedin.com/in/kaushal-marimuthu',
    href: 'https://www.linkedin.com/in/kaushal-marimuthu/',
    description: 'Experience, education, and professional profile.',
  },
  {
    title: 'GitHub',
    value: 'github.com/kaushal2m2',
    href: 'https://github.com/kaushal2m2',
    description: 'Code, experiments, and side projects.',
  },
  {
    title: 'Phone',
    value: '650-250-9912',
    href: 'tel:6502509912',
    description: 'Direct contact for time-sensitive outreach.',
  },
]

const Contact = () => {
  return (
    <div className='xl:mt-12 flex flex-col gap-10 overflow-hidden justify-center'>
      <motion.div variants={slideIn("left","tween",0.2,1)} className='glass-dark p-8 sm:p-10 rounded-[32px] border border-white/10'>
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact</h3>
        <p className='mt-4 max-w-3xl text-[16px] leading-[30px] text-secondary'>
          Reach out however you prefer. Each card jumps directly to the right place, so there&apos;s no extra form friction.
        </p>
        <div className='mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-3'>
          {contactLinks.map((item) => (
            <a
              key={item.title}
              href={item.href}
              target={item.href.startsWith('http') ? '_blank' : undefined}
              rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
              className='group rounded-[24px] border border-white/10 bg-[#120d27]/80 p-6 transition duration-300 hover:border-[#f59e0b]/40 hover:bg-[#171131] hover:shadow-[0_24px_80px_rgba(15,23,42,0.35)]'
            >
              <p className='text-xs uppercase tracking-[0.26em] text-[#f59e0b]'>{item.title}</p>
              <h4 className='mt-3 text-[20px] font-bold text-white break-words group-hover:text-[#fde68a]'>
                {item.value}
              </h4>
              <p className='mt-3 text-sm leading-6 text-secondary'>{item.description}</p>
            </a>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact,"contact")
