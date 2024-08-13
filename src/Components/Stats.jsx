import React from 'react'

const items = [
    { title: 'Projects', count: '25+', bgColor: 'bg-[#98FF98]]' },
    { title: 'Clients', count: '10+', bgColor: 'bg-gra' },
    { title: 'Certifications', count: '2+', bgColor: 'bg-gra300' },
]

const Stats = () => {
    return (
        <div id="experience" className='bg-black py-8 text-white'>
            <div className='grid gap-8 lg:grid-cols-3 md:grid-cols-2 max-sm:grid-cols-1 py-8 px-8'>
                {items.map((item, index) => (
                    <div
                        key={index}
                        className={`flex flex-col hover:bg-white hover:text-black space-y-2 items-center ${item.bgColor} border-2 px-4 py-8 rounded-lg`}
                    >
                        <div className='text-3xl font-roboto'>{item.title}</div>
                        <div className='text-xl'>{item.count}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Stats
