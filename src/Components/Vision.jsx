import React from 'react'

const Vision = () => {
    return (
        <div id="vision" className='flex max-sm:flex-col'>
            <div className='w-1/2 bg-white h-96 text-black max-sm:w-full'>
                <div className="m-[20%] my-[13%] max-md:mx-[15%]">
                    <h2 className='text-3xl font-semibold font-roboto'>My Vision</h2>
                    <p className='font-playfair'>My vision is to connect the education system in Pakistan with the needs of the industry, helping university and college students learn the latest technology trends. By working with industry experts and focusing on practical learning, I aim to change the mindset of the youth. This will help Pakistan grow into a leading tech country and strengthen our economy.</p>
                </div>
            </div>
            <div className='w-1/2 bg-green-300 h-96 max-sm:w-full'>
                <img
                    src='https://usmanasif.com/wp-content/uploads/2023/10/TECH.png'
                    className='w-full h-full'
                />
            </div>
        </div>
    )
}

export default Vision