import React from 'react'
import Hero from '../Components/Hero'
import Testimonials from '../Components/Testimonials'
import Projects from '../Components/Projects'
import ProjectDetails from '../Components/ProjectDetails'
import Stats from '../Components/Stats'
import Vision from '../Components/Vision'
import Footer from '../Components/Footer'
import Skills from '../Components/Skills'

const Home = () => {
    return (
        <div>
            <Hero />
            <ProjectDetails />
            <Testimonials />
            <Projects />
            {/* <ProjectDetails title="Project details" details={["In today's rapidly evolving digital landscape, staying ahead of the curve requires a blend of creativity and technological expertise. This project is a testament to our commitment to pushing the boundaries of web development. By integrating cutting-edge technologies with user-centric design, we've crafted a solution that not only meets current demands but also anticipates future trends.", "As the digital world continues to expand, the importance of seamless and intuitive user experiences cannot be overstated. This project was conceived with the goal of delivering a platform that is both visually appealing and functionally robust. Through a meticulous design process and the application of best practices in development, we've created a product that is set to redefine industry standards.", "As the digital world continues to expand, the importance of seamless and intuitive user experiences cannot be overstated. This project was conceived with the goal of delivering a platform that is both visually appealing and functionally robust. Through a meticulous design process and the application of best practices in development, we've created a product that is set to redefine industry standards.", "As the digital world continues to expand, the importance of seamless and intuitive user experiences cannot be overstated. This project was conceived with the goal of delivering a platform that is both visually appealing and functionally robust. Through a meticulous design process and the application of best practices in development, we've created a product that is set to redefine industry standards.", "As the digital world continues to expand, the importance of seamless and intuitive user experiences cannot be overstated. This project was conceived with the goal of delivering a platform that is both visually appealing and functionally robust. Through a meticulous design process and the application of best practices in development, we've created a product that is set to redefine industry standards."]} images={["/assets/download.jfif", "/assets/download.jfif", "/assets/download.jfif", "/assets/download.jfif", "/assets/download.jfif"]} /> */}
            <Stats />
            <Vision />
            {/* <Skills /> */}
            <Footer />
        </div>
    )
}

export default Home