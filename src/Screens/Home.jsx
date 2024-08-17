import React from 'react'
import Hero from '../Components/Hero'
import Testimonials from '../Components/Testimonials'
import Stats from '../Components/Stats'
import Vision from '../Components/Vision'
import Footer from '../Components/Footer'
import Skills from '../Components/Skills'
import MyProjects from '../Components/MyProjects'
import Navbar from '../Components/Navbar'

const Home = () => {
    return (
        <div className='App'>
            <Navbar />
            <Hero />
            <Testimonials />
            <MyProjects />
            <Stats />
            <Vision />
            {/* <Skills /> */}
            <Footer />
        </div>
    )
}

export default Home