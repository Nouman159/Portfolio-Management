import React from 'react'

const Vision = () => {
    return (
        <div className='flex max-sm:flex-col'>
            <div className='w-1/2 bg-gray-200 h-96 text-black max-sm:w-full'>
                <div className="m-[20%] max-md:mx-[15%]">
                    <h2 className='text-3xl font-semibold font-roboto'>My Vision</h2>
                    <p className='font-playfair'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias quam dolores ratione, recusandae eos fuga quisquam temporibus, sapiente esse voluptatibus neque deserunt sunt deleniti necessitatibus accusamus earum ipsa dolor ipsum.</p>
                </div>
            </div>
            <div className='w-1/2 bg-green-300 h-96 max-sm:w-full'>
                <img
                    src='/assets/download.jfif'
                    className='w-full h-full'
                />
            </div>
        </div>
    )
}

export default Vision