import React from 'react'
import '../index.css'

const testimonialsData = [
    {
        text: "Usman was an amazing technical partner as we grew Concert. His rapid prototyping and testing helped us deliver first-in-category features in a competitive landscape. As we began to see success, and grew rapidly",
        name: "Ali Ahmed",
        title: "Senior Developer"
    },
    {
        text: "Usman was an amazing technical partner as we grew Concert. His rapid prototyping and testing helped us deliver first-in-category features in a competitive landscape. As we began to see success, and grew rapidly, Usman helped us recruit excellent talent very quickly, and helped us prioritize an increasingly complex roadmap. Usman’s startup leadership helped us scale and sell the business in just a few years- he’d be an incredible asset to anyone’s team!",
        name: "Ali Ahmed",
        title: "Senior Developer"
    },
    {
        text: "Usman was an amazing technical partner as we grew Concert. His rapid prototyping and testing helped us deliver first-in-category features in a competitive landscape. As we began to see success, and grew rapidly, Usman helped us recruit excellent talent very quickly, and helped us prioritize an increasingly complex roadmap. Usman’s startup leadership helped us scale and sell the business in just a few years- he’d be an incredible asset to anyone’s team!",
        name: "Ali Ahmed",
        title: "Senior Developer"
    },
    {
        text: "Usman was an amazing technical partner as we grew Concert. His rapid prototyping and testing helped us deliver first-in-category features in a competitive landscape. As we began to see success, and grew rapidly, Usman helped us recruit excellent talent very quickly, and helped us prioritize an increasingly complex roadmap. Usman’s startup leadership helped us scale and sell the business in just a few years- he’d be an incredible asset to anyone’s team!",
        name: "Ali Ahmed",
        title: "Senior Developer"
    }
];

const Testimonials = () => {
    return (
        <div className="bg-gray-200 py-8 bg-[url('https://usmanasif.com/wp-content/uploads/2023/10/bg-1-1.jpg')] bg-cover bg-center">
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
