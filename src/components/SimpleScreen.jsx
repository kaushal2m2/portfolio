import {me, resume} from '../assets'
import { projects } from '../constants';



const SimpleScreen = () => {
    return (
        <div className='quick relative flex flex-col items-center h-full mb-[100px] gap-12 text-black'>
            <div className='flex flex-row mx-8 h-[20%] w-[75%]'>
                <div className='w-[50%] flex flex-col justify-center'>
                    <div className='text-center flex flex-col items-center'>
                        <div className='font-black text-5xl'>Kaushal Marimuthu</div>
                        <div className='text-xl'>Software Engineer at Google | UC Davis CSE + Statistics</div>
                        <div className='mt-2 flex flex-row gap-4'>
                            <a href={resume} target='_blank' rel='noreferrer' className='cursor-pointer opacity-100 hover:opacity-50'>
                                <svg className='opacity-100' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V8l-6-6z"/><path d="M14 3v5h5M16 13H8M16 17H8M10 9H8"/></svg>
                            </a>
                            <a href='mailto:kaushal2m2apply@gmail.com' target="_top" className='cursor-pointer opacity-100 hover:opacity-50'>
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
                            {'>>'}&nbsp;I build systems at the intersection of <span className='font-bold text-[#079a1a]'>privacy, AI, and performance engineering</span>. At Google, I focus on infrastructure and developer productivity, and across internships, research, and leadership roles I’ve consistently gravitated toward work that scales to real users and helps teams move faster.
                        </h2>
                    </section>
                    <section>
                        <p className='text-3xl font-semibold'>% Experience</p>
                        <br />
                        <div className='flex flex-col text-[#636E72] text-xl text-justify'>
                            <h2 className='indent-4 font-bold text-[#161615]'>{'>> Google, Software Engineer, Jan 2026 - Present'}</h2>
                            <h2 className='mx-8 font-light'>{'$ Launched a privacy library across 5+ distributed storage systems at 1M+ QPS, cut p99.9 latency by 5%, and built an AI agent migration toolset that compressed rollout timelines from 3 months to 2 weeks.'}</h2>
                            <h2 className='indent-4 font-bold mt-2 text-[#161615]'>{'>> Google, Software Engineer Intern, Jun 2025 - Sept 2025'}</h2>
                            <h2 className='mx-8 font-light'>{'$ Built a privacy standards chatbot used across 80+ systems by 1,000+ employees and automated reliability work to keep the system continuously accurate with no manual upkeep.'}</h2>
                            <h2 className='indent-4 font-bold text-[#161615]'>{'>> Deloitte, Software Engineer Intern, Jun 2024 - Aug 2024'}</h2>
                            <h2 className='mx-8 font-light'>{'$ Built an AI tool to automate client data parsing for spreadsheet and email workflows, and presented an AWS migration plan for a 16M-user product that projected a 40% latency reduction and 12% lower TCO.'}</h2>
                            <h2 className='indent-4 font-bold text-[#161615]'>{'>> Brain Racers, Software Engineer Intern, Jul 2023 - Sept 2023'}</h2>
                            <h2 className='mx-8 font-light'>{'$ Aggregated five legacy SQL databases into a unified system, reducing database queries by 80% and improving API response times by 25%.'}</h2>
                            <h2 className='indent-4 font-bold mt-2 text-[#161615]'>{'>> DigitalMain, Data Analyst Intern, Jun 2022 - Aug 2022'}</h2>
                            <h2 className='mx-8 font-light'>{'$ Built an ETL pipeline across cybersecurity forum data, automating extraction and ML analysis of 15,000+ data points and increasing throughput by 4x.'}</h2>
                            <h2 className='indent-4 font-bold mt-2 text-[#161615]'>{'>> USACO Gold, Competitive Programmer'}</h2>
                            <h2 className='mx-8 font-light'>{'$ Reached USACO Gold through algorithmic problem solving across graphs, dynamic programming, and performance-focused coding challenges.'}</h2>
                        </div>
                    </section>

                    <section>
                        <p className='text-3xl font-semibold'>% Leadership + Research</p>
                        <br />
                        <div className='flex flex-col text-[#636e72] text-xl text-justify'>
                            <h2 className='indent-4 font-bold text-[#161615]'>{'>> CodeLab, Projects Lead & Software Developer, Oct 2023 - Dec 2025'}</h2>
                            <h2 className='mx-8'>{"$ Secured partnerships with Reddit, Goodnotes, and Render worth $30k, built an MLB scoreboard app with 1M+ weekly impressions for Reddit, and created AI product proofs of concept that helped Goodnotes evaluate 10+ LLM feature directions."}</h2>
                        </div>
                        <br />
                        <div className='flex flex-col text-[#636e72] text-xl text-justify'>
                            <h2 className='indent-4 font-bold text-[#161615]'>{'>> UC Davis Center for Mind and Brain, Undergraduate ML Researcher, Jan 2024 - Aug 2024'}</h2>
                            <h2 className='mx-8'>{"$ Conducted research on 150+ fMRI scans, designed CNN architectures for music-stimulated brain modeling, and built transformer-based generative music and genre classification models trained on 2,000+ songs."}</h2>
                        </div>
                        <br />
                        <div className='flex flex-col text-[#636e72] text-xl text-justify'>
                            <h2 className='indent-4 font-bold text-[#161615]'>{'>> Davis Quant Collective, Software Engineering Director, Jul 2023 - Dec 2023'}</h2>
                            <h2 className='mx-8'>{"$ Incorporated research from 5 articles into a stock portfolio analyzer to improve risk prediction by 15%, and built a Python trading bot that delivered a 5% average annual ROI on historical and live markets."}</h2>
                        </div>
                    </section>

                    <section>
                        <p className='text-3xl font-semibold'>% Skills</p>
                        <br />
                        <div className='flex flex-col text-[#636e72] text-xl text-justify'>
                            <h2 className='indent-4 font-bold text-[#161615]'>{'>> Languages'}</h2>
                            <h2 className='mx-8'>{"$ Java, C/C++, Python, SQL, JavaScript, TypeScript, Golang"}</h2>
                            <h2 className='indent-4 font-bold mt-2 text-[#161615]'>{'>> Frameworks + Tools'}</h2>
                            <h2 className='mx-8'>{"$ React, Node.js, Next.js, Flask, Spring, Redux, MongoDB, PostgreSQL, Docker, Git, AWS, TensorFlow, PyTorch, Keras, HuggingFace, Claude Code, Codex, Antigravity"}</h2>
                            <h2 className='indent-4 font-bold mt-2 text-[#161615]'>{'>> AI + Systems Focus'}</h2>
                            <h2 className='mx-8'>{"$ LLM agents, autoresearch, llm-wiki, privacy infrastructure, low-latency optimization, distributed systems migrations"}</h2>
                            <h2 className='indent-4 font-bold mt-2 text-[#161615]'>{'>> Education'}</h2>
                            <h2 className='mx-8'>{"$ UC Davis, B.S. Computer Science and Engineering and B.S. Statistics, GPA 3.95"}</h2>
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
