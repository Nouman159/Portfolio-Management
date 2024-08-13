import React from 'react'
import '../index.css'

const testimonialsData = [
    {
        text: "Exellent work one more time. Congrats and delighting to work with you",
        name: "Yoannaka",
        title: "At replit"
    },
    {
        text: "Extremely responsive, catered to everything, and was willing to improve his designs based on my input. You don't find a lot of front-end devs these days that are willing to do what he can.",
        name: "A2Pro",
        title: "Senior Developer"
    },
    {
        text: "Had an urgent deadline, Nouman got the job done.",
        name: "BountyHunter14",
        title: "At replit"
    },
    {
        text: "Excellent Work and very fast delivery! Highly recommended. Nouman kept me updated regarding the project with his excellent communication skills. Would work with him again. ",
        name: "AbuBakr-Chan",
        title: "Senior AI Developer"
    }
];

const Testimonials = () => {
    return (
        <div id="testimonials" className="bg-gray-200 py-8 bg-[url('https://usmanasif.com/wp-content/uploads/2023/10/bg-1-1.jpg')] bg-cover bg-center">
            <h1 className='text-white flex text-4xl font-semibold justify-center font-roboto'>
                Testimonials
            </h1>
            <div className="grid grid-cols-1 py-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-16 max-sm:mx-8">
                {testimonialsData.map((testimonial, index) => (
                    <div key={index} className='flex flex-col bg-slate-200 hover:scale-105 hover:shadow-xl text-center px-8 py-4 rounded-md font-dmSans'>
                        <p>{testimonial.text}</p>
                        <div className='ml-auto mr-4 text-center mt-4'>
                            <div className='font-bold'>{testimonial.name}</div>
                            <div>{testimonial.title}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Testimonials;
