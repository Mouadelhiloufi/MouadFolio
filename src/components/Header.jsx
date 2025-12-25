import React, { useState, useEffect } from 'react';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    // Close menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (isOpen && !event.target.closest('.header')) {
                setIsOpen(false);
            }
        };

        if (isOpen) {
            document.addEventListener('click', handleClickOutside);
        }

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [isOpen]);

    return (
        <header className="header flex flex-wrap justify-between items-center px-4 sm:px-6 lg:px-8 py-4">
            <a 
                href="/" 
                className="logo text-sm sm:text-base md:text-lg font-bold text-[#473D3D] hover:text-[#884830] transition-colors duration-300 whitespace-nowrap"
            >
                Aamir El Amiri | Full-Stack Developer
            </a>
            <button 
                className="lg:hidden text-[#884830] text-2xl sm:text-3xl p-2 focus:outline-none focus:ring-2 focus:ring-[#884830] rounded"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle menu"
            >
                {isOpen ? '✕' : '☰'}
            </button>
            <nav className={`nav w-full lg:w-auto transition-all duration-300 ${isOpen ? 'block' : 'hidden'} lg:block`}>
                <ul className="flex flex-col lg:flex-row lg:space-x-4 xl:space-x-6 mt-4 lg:mt-0">
                    <li>
                        <a 
                            href="/#about" 
                            className="block py-2 px-2 sm:px-4 text-white hover:text-[#FFE4E1] transition-colors duration-300 text-sm sm:text-base"
                            onClick={() => setIsOpen(false)}
                        >
                            About
                        </a>
                    </li>
                    <li>
                        <a 
                            href="/works" 
                            className="block py-2 px-2 sm:px-4 text-white hover:text-[#FFE4E1] transition-colors duration-300 text-sm sm:text-base"
                            onClick={() => setIsOpen(false)}
                        >
                            Works
                        </a>
                    </li>
                    <li>
                        <a 
                            href="/presentations" 
                            className="block py-2 px-2 sm:px-4 text-white hover:text-[#FFE4E1] transition-colors duration-300 text-sm sm:text-base"
                            onClick={() => setIsOpen(false)}
                        >
                            Presentations
                        </a>
                    </li>
                    <li>
                        <a 
                            href="/contact" 
                            className="block py-2 px-2 sm:px-4 text-white hover:text-[#FFE4E1] transition-colors duration-300 text-sm sm:text-base"
                            onClick={() => setIsOpen(false)}
                        >
                            Contact
                        </a>
                    </li>
                    <li>
                        <a 
                            href="/Favorites" 
                            className="block py-2 px-2 sm:px-4 text-white hover:text-[#FFE4E1] transition-colors duration-300 text-sm sm:text-base"
                            onClick={() => setIsOpen(false)}
                        >
                            Favorite
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}



