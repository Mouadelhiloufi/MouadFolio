import { useState, useEffect } from 'react';

const links = [
    { href: '/#about', label: 'À propos' },
    { href: '/works', label: 'Projets' },
    { href: '/contact', label: 'Contact' },
];

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
        <header className="header sticky top-0 z-50 bg-white/90 backdrop-blur-md">
            <div className="flex items-center justify-between gap-3 px-1 sm:px-4 lg:px-8 py-3 lg:py-0">
                <a href="/" className="flex flex-col leading-tight min-w-0 group">
                    <span className="text-base sm:text-lg font-bold text-[#473D3D] group-hover:text-[#884830] transition-colors duration-300"
                          style={{fontFamily: 'Acme'}}>
                        Mouad El Hiloufi
                    </span>
                    <span className="text-[11px] sm:text-xs md:text-sm text-[#884830] truncate">
                        Développeur Full Stack
                    </span>
                </a>

                <button
                    className="lg:hidden flex items-center justify-center w-10 h-10 rounded-full bg-[#473D3D] text-white text-lg
                               focus:outline-none focus:ring-2 focus:ring-[#884830] focus:ring-offset-2 transition-transform duration-300 active:scale-90"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Ouvrir le menu"
                    aria-expanded={isOpen}
                >
                    {isOpen ? '✕' : '☰'}
                </button>

                <nav className="hidden lg:block">
                    <ul className="flex space-x-2 xl:space-x-4 px-4 py-3 bg-[#473D3D] rounded-b-3xl">
                        {links.map((link) => (
                            <li key={link.href}>
                                <a href={link.href}
                                   className="block py-2 px-3 text-white hover:text-[#FFE4E1] transition-colors duration-300 text-sm xl:text-base">
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>

            {/* Mobile menu */}
            <nav className={`lg:hidden overflow-hidden transition-all duration-300 ease-out
                             ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                <ul className="mx-1 sm:mx-4 mb-3 p-2 bg-[#473D3D] rounded-2xl shadow-xl">
                    {links.map((link) => (
                        <li key={link.href}>
                            <a href={link.href}
                               className="block py-3 px-4 rounded-xl text-white hover:bg-white/10 hover:text-[#FFE4E1] transition-colors duration-300 text-base"
                               onClick={() => setIsOpen(false)}>
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}
