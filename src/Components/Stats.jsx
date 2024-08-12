import React from 'react'

const items = [
    { title: 'Projects', count: '12+', bgColor: 'bg-gray-300' },
    { title: 'Clients', count: '50+', bgColor: 'bg-green-200' },
    { title: 'Awards', count: '5+', bgColor: 'bg-blue-200' },
    { title: 'Awards', count: '5+', bgColor: 'bg-blue-200' },
    // Add more items as needed
]

const Stats = () => {
    return (
        <div className='bg-black text-white'>
            <div className='grid gap-8 lg:grid-cols-3 md:grid-cols-2 max-sm:grid-cols-1 py-24 px-8'>
                {items.map((item, index) => (
                    <div
                        key={index}
                        className={`flex flex-col space-y-2 items-center ${item.bgColor} px-4 py-8 rounded-lg`}
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
