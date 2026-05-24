const Bottom = () => {
    return (
        <div className="pb-8 px-8 w-screen absolute items-center">
            <hr style={{
                "width":"96%",
                "marginLeft":"2%",
                "marginTop": "2%"
            }}/>
            <div className='flex flex-col gap-8 py-6 sm:flex-row sm:justify-evenly w-[100%]'>
                <div className='text-left sm:w-[30%] font-poppins text-secondary flex flex-col space-y-1'>
                    Built with React, Three.js, and Tailwind CSS.
                    <br/>Deployed on AWS and updated to match my current work and resume.
                    <a className="underline underline-offset-2" href="https://github.com/kaushal2m2/portfolio" target="_blank" rel="noreferrer">GitHub Codebase for Portfolio</a>
                </div>
                <div className='text-left sm:text-center sm:w-[30%] font-poppins text-secondary underline underline-offset-2 flex flex-col space-y-1'>
                    <a href="https://www.linkedin.com/in/kaushal-marimuthu/" target="_blank" rel="noreferrer">LinkedIn</a>
                    <a href="https://github.com/kaushal2m2" target="_blank" rel="noreferrer">GitHub</a>
                </div>
                <div className='text-left sm:text-right sm:w-[30%] font-poppins text-secondary underline underline-offset-2 flex flex-col space-y-1'>
                    <a href = "mailto:kaushal2m2apply@gmail.com">kaushal2m2apply@gmail.com</a>
                </div>
                
            </div>
        </div>
    )
}

export default Bottom;
