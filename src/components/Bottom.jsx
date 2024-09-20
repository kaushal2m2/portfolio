import React from "react";

const Bottom = () => {
    return (
        <div className="pb-8 px-8 w-screen absolute items-center">
            <hr style={{
                "width":"96%",
                "marginLeft":"2%",
                "marginTop": "2%"
            }}/>
            <div className='flex flex-row justify-evenly w-[100%] '>
                <div className='text-left w-[30%] pt-4 font-poppins text-secondary flex flex-col space-y-1'>
                    Powered by ReactJS, ThreeJS, and TailwindCSS. 
                    <br/>Credit: JavaScript Mastery on YouTube
                    <a className="underline underline-offset-2" href="https://github.com/kaushal2m2/portfolio" target="_blank">GitHub Codebase for Portfolio</a>
                </div>
                <div className='text-center w-[30%] pt-4 font-poppins text-secondary underline underline-offset-2 flex flex-col space-y-1'>
                    <a href="https://www.linkedin.com/in/kaushal-marimuthu-590167249/" target="_blank">LinkedIn</a>
                    <a href="https://github.com/kaushal2m2" target="_blank">GitHub</a>
                </div>
                <div className='text-right w-[30%] pt-6 font-poppins text-secondary underline underline-offset-2 flex flex-col space-y-1'>
                    <a href = "mailto:kaushal2m2@gmail.com">kaushal2m2@gmail.com</a>
                </div>
                
            </div>
        </div>
    )
}

export default Bottom;