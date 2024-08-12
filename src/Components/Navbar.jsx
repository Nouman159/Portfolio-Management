import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const navItems = [
    { name: 'Home', url: '/' },
    { name: 'About', url: '/about' },
    { name: 'Services', url: '/services' },
    { name: 'Contact', url: '/contact' },
    { name: 'Any', url: '/any' },
];

const Navbar = () => {
    const [navOpen, setNavOpen] = useState(false);

    const toggleNav = () => {
        setNavOpen(!navOpen);
    };

    return (
        <nav className='h-16 bg-[#001f3f] text-white'>
            <div className='text-3xl flex px-8 pl-[10%] py-3'>
                <h2>
                    Bilal Mustafa                </h2>
                <div className='ml-auto mr-4 max-sm:mr-0'>
                    <ul className='flex text-xl py-2 space-x-8 max-md:hidden'>
                        {navItems.map((navItem, index) => (
                            <Link to={navItem.url} key={index}>
                                <li className='cursor-pointer hover:text-[#0074D9] transition-colors duration-300'>
                                    {navItem.name}
                                </li>
                            </Link>
                        ))}
                    </ul>
                    <Menu className='my-2 hidden max-md:block cursor-pointer' onClick={toggleNav} />
                </div>
            </div>

            {/* Mobile Dropdown */}
            <div
                className={`fixed top-0 left-0 w-full h-96 bg-[#001f3f] z-0 transition-transform duration-300 ease-in-out ${navOpen ? 'translate-y-0' : '-translate-y-full'} max-md:flex flex-col justify-center`}
            >
                <X className='ml-auto mr-8 cursor-pointer' onClick={toggleNav} />
                <ul className='flex flex-col space-y-4 text-xl py-2 text-center'>
                    {navItems.map((navItem, index) => (
                        <Link to={navItem.url} key={index} onClick={toggleNav} className='mx-auto z-50'>
                            <li className='cursor-pointer hover:text-blue-400 transition-colors duration-300'>
                                {navItem.name}
                            </li>
                        </Link>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
