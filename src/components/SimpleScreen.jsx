import React from 'react';
import {me, resume} from '../assets'
import { projects } from '../constants';



const SimpleScreen = () => {
    return (
        <div className='quick relative flex flex-col items-center h-full mb-[100px] gap-12 text-black'>
            <div className='flex flex-row mx-8 h-[20%] w-[75%]'>
                <div className='w-[50%] flex flex-col justify-center'>
                    <div className='text-center flex flex-col items-center'>
                        <div className='font-black text-5xl'>Kaushal Marimuthu</div>
                        <div className='text-xl'>Computer Science and Engineering @ UC Davis</div>
                        <div className='mt-2 flex flex-row gap-4'>
                            <a href={resume} target='_blank' className='cursor-pointer opacity-100 hover:opacity-50'>
                                <svg className='opacity-100' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V8l-6-6z"/><path d="M14 3v5h5M16 13H8M16 17H8M10 9H8"/></svg>
                            </a>
                            <a href='mailto:kaushal2m2@gmail.com' target="_top" className='cursor-pointer opacity-100 hover:opacity-50'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25"><path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z"></path></svg>
                            </a>
                            <a href="https://www.linkedin.com/in/kaushal-marimuthu/" className="cursor-pointer opacity-100 hover:opacity-50">
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path></svg>
                            </a>
                            <a href="https://github.com/kaushal2m2/" className="cursor-pointer opacity-100 hover:opacity-50">
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path></svg>
                            </a>
                        </div>
                    </div>
                </div>
                <div className='w-[50%] flex flex-col justify-center'>
                    <div className='h-[70%] flex flex-row justify-center'>
                        <img src={me}/>
                    </div>
                </div>
            </div>
            <div className='h-full w-[75vw]'>
                <section className='flex flex-col gap-20'>
                    <section>
                        <p className='text-3xl font-semibold'>% About</p>
                        <br />
                        <h2 className='indent-4 font-bold text-[#161615] text-xl text-justify'>
                            {'>>'}&nbsp;I am a student at the University of California, Davis, pursuing a degree in Computer Science and Engineering. 
                        I am passionate about <span className='font-bold text-[#079a1a]'>learning new technologies</span> and <span className='font-bold text-[#079a1a]'>understanding complex algorithms,</span>
                        &nbsp;and am currently spending my time immersed in <span className='font-bold text-[#079a1a]'>machine learning</span> and <span className='font-bold text-[#079a1a]'>cloud engineering.</span>
                        </h2>
                    </section>
                    <section>
                        <p className='text-3xl font-semibold'>% Internships</p>
                        <br />
                        <div className='flex flex-col text-[#636E72] text-xl text-justify'>
                            <h2 className='indent-4 font-bold text-[#161615]'>{'>> Deloitte, Incoming Solutions Engineer Intern, June 2024 - August 2024'}</h2>
                            <h2 className='mx-8 font-light'></h2>
                            <h2 className='indent-4 font-bold text-[#161615]'>{'>> Brain Racers, Software Engineer Intern, July 2023 - September 2023'}</h2>
                            <h2 className='mx-8 font-light'>{'$ I improved the design of an existing MySQL database and built and deployed 10+ API endpoints querying it with PHP, then integrated the endpoints with 9+ existing and new TypeScript React to create dynamic components.'}</h2>
                            <h2 className='indent-4 font-bold mt-2 text-[#161615]'>{'>> DigitalMain, Data Analyst Intern, June 2022 - August 2022'}</h2>
                            <h2 className='mx-8'>{'$ I worked alongside the Product Manager with guidance from the CEO to create scripts to scrape cybersecurity forums. I then used an ML model to organize the data and perform analysis on it, in order to help streamline DigitalMain\'s data handling process.'}</h2>
                        </div>
                    </section>

                    <section>
                        <p className='text-3xl font-semibold'>% Other Work</p>
                        <br />
                        <div className='flex flex-col text-[#636e72] text-xl text-justify'>
                            <h2 className='indent-4 font-bold text-[#161615]'>{'>> UC Davis Center for Mind and Brain, Undergraduate Machine Learning Researcher, May 2024 - Present'}</h2>
                            <h2 className='mx-8'>{"$ I'm working directly under Dr. Petr Janata, researching generative music models, and I'm currently working on implementing attention in music generation and (separately) utilizing fMRI brain data from the UC Davis Center for Mind and Brain to explore optimizing the design of neural networks to more closely resemble 'the brain'"}</h2>
                        </div>
                        <br />
                        <div className='flex flex-col text-[#636e72] text-xl text-justify'>
                            <h2 className='indent-4 font-bold text-[#161615]'>{'>> UC Davis CodeLab, Software Developer, October 2023 - Present'}</h2>
                            <h2 className='mx-8'>{"$ I worked with our consulting club for the startup BillionMinds, building them 2 dashboards in Next.ts and TailwindCSS with an intricate backend system with MongoDB Atlas and AWS Lambda, aggregating data from 4 different APIs into one central MongoDB Collection."}</h2>
                            <h2 className='mx-8'>{"$ I was the Project Manager for a team building a video summarizing chatbot tool for an on-campus client, in Next, Express, and MongoDB using Google Gemini for summary generation and used AWS Elastic Beanstalk to host the EC2 instance with the Flask server for Gemini queries."}</h2>
                        </div>
                        <br />
                        <div className='flex flex-col text-[#636e72] text-xl text-justify'>
                            <h2 className='indent-4 font-bold text-[#161615]'>{'>> Davis Quant Collective, SWE Director, August 2023 - Dec 2023'}</h2>
                            <h2 className='mx-8'>{"$ I utilized research from 5+ research articles to create a stock portfolio manager and risk assessor, and led a team of 6 in developing a trading bot in python, cross testing it with the risk assessor to integrate both projects."}</h2>
                        </div>
                    </section>

                    <section>
                        <p className='text-3xl font-semibold'>% Projects</p>
                        <br />
                        <div className='flex flex-col text-[#636e72] text-xl text-justify'>
                            {projects.map((project) => {
                                return (
                                <>
                                    <h2 className='indent-4 font-bold text-[#161615]'>{`>> ${project.name}`}</h2>
                                    <div className='flex flex-row mb-2'>
                                        <h2 className='ml-8'>{`$ ${project.description}`}</h2>
                                        &nbsp;&nbsp;•&nbsp;&nbsp;
                                        <a className='text-[#0000EE]' href={`${project.source_code_link}`}>github</a>
                                    </div>
                                </>
                                )
                            })}
                        </div>
                    </section>
                    
                </section>
            </div>
        </div>
    )
}

export default SimpleScreen