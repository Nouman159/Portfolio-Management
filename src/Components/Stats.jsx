import React from 'react'

const items = [
    { title: 'Projects', count: '12+', bgColor: 'bg-[#98FF98]]' },
    { title: 'Clients', count: '50+', bgColor: 'bg-gra' },
    { title: 'Awards', count: '5+', bgColor: 'bg-gra300' },
    { title: 'Awards', count: '5+', bgColor: 'bg-ble-200' },
    // Add more items as needed
]

const Stats = () => {
    return (
        <div className='bg-black text-white'>
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
