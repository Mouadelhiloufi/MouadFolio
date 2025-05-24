import React, { useState } from 'react';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="header flex  justify-between">
            <a href="/" className="logo text-lg font-bold text-white hover:text-[#FFE4E1] transition-colors duration-300">
            BAAZIZ Wissal | Full-Stack Developer
            </a>
            <button 
                className="text-[#8B4513] md:hidden text-3xl" 
                onClick={() => setIsOpen(!isOpen)}
            >
                ☰
            </button>
            <nav className={`nav w-full md:w-auto ${isOpen ? 'block' : 'hidden'} md:block`}>
                <ul className="flex flex-col md:flex-row md:space-x-6">
                    <li><a href="/#about" className="block py-2 px-2 text-white hover:text-[#FFE4E1] transition-colors duration-300">About</a></li>
                    <li><a href="/works" className="block py-2 px-2 text-white hover:text-[#FFE4E1] transition-colors duration-300">Works</a></li>
                    <li><a href="/presentations" className="block py-2 px-2 text-white hover:text-[#FFE4E1] transition-colors duration-300">Presentations</a></li>
                    <li><a href="/contact" className="block py-2 px-2 text-white hover:text-[#FFE4E1] transition-colors duration-300">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
}



