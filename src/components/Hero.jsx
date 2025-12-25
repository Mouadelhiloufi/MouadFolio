    import React from 'react';

    function Hero() {
        return (
            <section className="hero mb-8 sm:mb-10 md:mb-14 px-4 sm:px-6 lg:px-8">
                <h1 className="hero-title text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 
                              absolute top-0 sm:top-[-40px] md:top-[-50px] lg:top-[-60px] 
                              left-4 sm:left-8 md:left-12 lg:left-16 z-10">
                    Hello
                </h1>
                <div className="hero-content bg-[#FFE4E1] rounded-xl sm:rounded-2xl 
                               flex flex-col md:flex-row justify-between items-center 
                               p-6 sm:p-8 md:p-10 lg:p-12 gap-6 md:gap-8">
                    {/* Image - shown on mobile first, then on desktop */}
                    <div className="hero-image flex-shrink-0 
                                  w-full md:w-1/3 lg:w-1/4
                                  flex justify-center md:justify-end
                                  order-1 md:order-2">
                        <img 
                            src="/my.png" 
                            className='w-auto h-auto max-w-[180px] max-h-[180px] 
                                     sm:max-w-[200px] sm:max-h-[200px]
                                     md:max-w-[250px] md:max-h-[250px] 
                                     lg:max-w-[300px] lg:max-h-[300px]
                                     object-contain' 
                            alt="Aamir El Amiri" 
                        />
                    </div>
                    <div className="hero-text max-w-full md:max-w-[50%] 
                                   mx-auto md:mx-0 text-center md:text-left
                                   order-2 md:order-1">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl 
                                     font-bold mb-2 sm:mb-3 md:mb-4" 
                            style={{fontFamily: 'Acme'}}>
                            I'm Aamir El Amiri
                        </h2>
                        <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl 
                                     font-bold mb-3 sm:mb-4 md:mb-5" 
                            style={{fontFamily: 'Acme'}}>
                            A Full-Stack Developer
                        </h3>
                        <p className="text-sm sm:text-base md:text-lg 
                                    text-[#473D3D] font-bold mb-4 sm:mb-6 md:mb-8
                                    leading-relaxed">
                            I love building efficient, scalable systems and crafting seamless
                            user experiences across both frontend and backend technologies.
                        </p>
                        <a 
                            href="/Aamir_El_Amiri_CV_2025.pdf" 
                            className="cta-button inline-flex items-center justify-center
                                     text-sm sm:text-base md:text-lg
                                     px-4 sm:px-6 md:px-8 py-2 sm:py-3
                                     border-2 border-[#343434] rounded-lg
                                     hover:bg-[#343434] hover:text-white
                                     transition-all duration-300" 
                            download
                        >
                            <span className="arrow mr-2">↓</span>
                            Download My CV
                        </a>
                    </div>
                </div>
            </section>
        );
    }

    export default Hero;

