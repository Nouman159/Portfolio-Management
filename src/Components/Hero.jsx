import React from 'react'
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {

    const handleResumeDownload = () => {
        const pdfURL = "/assets/RESUME_NOUMAN_ARSHAD.pdf";
        const link = document.createElement("a");
        link.href = pdfURL;
        link.download = "RESUME_NOUMAN.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <section>
            <div className='grid grid-cols-1 sm:grid-cols-12 z-50 py-12'>
                <div className='col-span-7 place-self-center text-center sm:text-left'>
                    <h1 className='text-black mb-4 text-4xl md:w-[550px] sm:text-5xl lg:text-6xl font-extrabold'>
                        <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-400'>Hello, I&apos;m{""} </span>
                        <br></br>
                        <TypeAnimation
                            sequence={[
                                'Nouman Arshad',
                                1000,
                                'MERN Stack',
                                1000,
                                'Web Developer',
                                1000,
                                'UI/UX Designer',
                                1000
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                        />
                    </h1>
                    <p className='text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl'>
                        MERN stack developer from last 2 years
                    </p>
                    <div>
                        <button className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white'>Hire Me </button>
                        <button className='px-1 py-1 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-800 text-white mt-3'>
                            <span className='block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2' onClick={() => { handleResumeDownload() }}>Download CV </span>
                        </button>
                    </div>
                </div>
                <div className='col-span-5 place-self-center mt-4 lg:mt-0'>
                    <div className='rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] overflow-hidden relative'>
                        <img
                            src='/assets/portfolio.jfif'
                            alt='Profile Image'
                            className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
                            width={350}
                            height={350}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero