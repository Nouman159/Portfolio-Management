import React, { useState } from 'react'
import { Menu } from 'lucide-react';
import { Link } from 'react-router-dom';
import { House } from 'lucide-react';
import { X } from 'lucide-react';


const navItems = [
    { name: 'Home', url: '/' },
    { name: 'About', url: '/about' },
    { name: 'Services', url: '/services' },
    { name: 'Contact', url: '/contact' },
    { name: 'Any', url: '/any' },
]

const Navbar = () => {
    const [navOpen, setNavOpen] = useState(false)


    return (
        <nav className='h-16 bg-gray-300'>
            <div className='text-3xl flex px-8 pl-[10%] py-3'>
                <h2>
                    Navbar
                </h2>
                <div className=' ml-auto mr-4 max-sm:mr-0'>
                    <ul className='flex text-xl py-2 space-x-8 max-md:hidden'>
                        {
                            navItems.map((navItem, index) => (
                                <Link to={navItem.url} key={index}>
                                    <li className='cursor-pointer hover:text-blue-400 transition-colors duration-300'>
                                        {navItem.name}
                                    </li>
                                </Link>
                            ))
                        }
                    </ul>
                    <Menu className='my-2 hidden max-md:block cursor-pointer' />
                </div>
            </div>

            {/* <div className='flex justify-center flex-col h-auto py-8 bg-gray-200'>
                <X className='ml-auto mr-8' />
                <ul className='text-xl hidden py-2 bg-red-20 space-x-8 max-md:block'>
                    {
                        navItems.map((navItem, index) => (
                            <Link to={navItem.url} key={index}>
                                <li className='cursor-pointer text-center hover:text-blue-400 transition-colors duration-300'>
                                    {navItem.name}
                                </li>
                            </Link>
                        ))
                    }
                </ul>
            </div> */}
        </nav>
    )
}

export default Navbar