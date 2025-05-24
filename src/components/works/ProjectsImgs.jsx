import React, { useState } from 'react';

function ProjectsImgs() {
    const [images, setImages] = useState([
        {
            id: 1,
            image: './charteGraphique.png',
            title: 'Style Guide & Design System',
            description: 'Visual design standards and component library for the enterprise platform'
        },
        {
            id: 2,
            image: './SignInPage.png',
            title: 'Authentication Portal',
            description: 'Secure login interface with user authentication system'
        },
        {
            id: 3,
            image: './AnnouncementsPage.png',
            title: 'Announcements Dashboard',
            description: 'Central hub for company-wide communications and updates'
        },
        {
            id: 4,
            image: './MeetingsPage.png',
            title: 'Meeting Management',
            description: 'Schedule and track organizational meetings efficiently'
        },
        {
            id: 5,
            image: './RequestsPage.png',
            title: 'Request Processing Center',
            description: 'Streamlined system for managing and tracking user requests'
        },
        {
            id: 6,
            image: './RolePage.png',
            title: 'Role Management',
            description: 'Access control and permission management interface'
        },
        {
            id: 7,
            image: './UsersPagepng.png',
            title: 'User Administration',
            description: 'Comprehensive user management and overview system'
        }
    ]);

    const [isAnimating, setIsAnimating] = useState(false);
    const [slideDirection, setSlideDirection] = useState('');

    const rotateImages = (direction) => {
        if (isAnimating) return;
        
        setIsAnimating(true);
        setSlideDirection(direction);

        setTimeout(() => {
            setImages(prevImages => {
                const newImages = [...prevImages];
                if (direction === 'next') {
                    const firstImage = newImages.shift();
                    newImages.push(firstImage);
                } else {
                    const lastImage = newImages.pop();
                    newImages.unshift(lastImage);
                }
                return newImages;
            });
            
            setSlideDirection('');
            setIsAnimating(false);
        }, 500);
    };

    return (
        <div className="h-[600px] relative w-full max-w-6xl mx-auto overflow-hidden">
            <div className="relative h-full">
                {images.slice(0, 3).map((image, index) => (
                    <div
                        key={image.id}
                        className={`absolute top-1/2 -translate-y-1/2 transition-all duration-500 ease-in-out
                            ${!slideDirection && index === 0 ? 'left-[10%] scale-75 opacity-50' : ''}
                            ${!slideDirection && index === 1 ? 'left-1/2 -translate-x-1/2 scale-125 z-10' : ''}
                            ${!slideDirection && index === 2 ? 'right-[10%] scale-75 opacity-50' : ''}
                            ${slideDirection === 'next' && index === 0 ? 'right-[10%] scale-75 opacity-50' : ''}
                            ${slideDirection === 'next' && index === 1 ? 'left-[10%] scale-75 opacity-50' : ''}
                            ${slideDirection === 'next' && index === 2 ? 'left-1/2 -translate-x-1/2 scale-125 z-10' : ''}
                            ${slideDirection === 'prev' && index === 0 ? 'left-1/2 -translate-x-1/2 scale-125 z-10' : ''}
                            ${slideDirection === 'prev' && index === 1 ? 'right-[10%] scale-75 opacity-50' : ''}
                            ${slideDirection === 'prev' && index === 2 ? 'left-[10%] scale-75 opacity-50' : ''}`
                        }
                    >
                        <div className="relative">
                            <img 
                                src={image.image}
                                alt={image.title}
                                className={`w-[300px] h-[250px] object-cover rounded-lg shadow-xl
                                    ${index === 1 && !slideDirection ? 'w-[400px] h-[300px]' : ''}
                                    ${slideDirection === 'next' && index === 2 ? 'w-[400px] h-[300px]' : ''}
                                    ${slideDirection === 'prev' && index === 0 ? 'w-[400px] h-[300px]' : ''}`
                                }
                            />
                            {((index === 1 && !slideDirection) ||
                              (slideDirection === 'next' && index === 2) ||
                              (slideDirection === 'prev' && index === 0)) && (
                                <div className="mt-2 text-center absolute w-full">
                                    <h3 className="text-sm font-semibold text-[#2C3E50] mb-1">{image.title}</h3>
                                    <p className="text-xs text-[#5D6D7E]">{image.description}</p>
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>

            <button 
                onClick={() => rotateImages('prev')}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 
                    bg-white/80 p-2 rounded-full shadow-md hover:bg-white z-20
                    transition-all duration-300 hover:scale-110"
                disabled={isAnimating}
            >
                ←
            </button>
            <button 
                onClick={() => rotateImages('next')}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 
                    bg-white/80 p-2 rounded-full shadow-md hover:bg-white z-20
                    transition-all duration-300 hover:scale-110"
                disabled={isAnimating}
            >
                →
            </button>
        </div>
    );
}

export default ProjectsImgs;
