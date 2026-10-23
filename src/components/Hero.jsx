function Hero() {
    return (
        <section className="hero relative mt-12 sm:mt-16 lg:mt-20 mb-10 md:mb-14">
            <h1 className="absolute -top-8 sm:-top-11 lg:-top-14 left-4 sm:left-8 lg:left-14 z-10 m-0
                           text-5xl sm:text-6xl lg:text-7xl xl:text-8xl text-[#884830]"
                style={{fontFamily: 'Acme'}}>
                Bonjour
            </h1>
            <div className="bg-[#FFE4E1] rounded-3xl overflow-hidden
                            flex flex-col md:flex-row items-center justify-between
                            px-5 pt-14 pb-8 sm:px-8 sm:pt-16 md:p-12 lg:p-14 gap-6 md:gap-10">
                <div className="flex-shrink-0 order-1 md:order-2 w-full md:w-auto flex justify-center md:justify-end">
                    <div className="relative w-56 sm:w-64 md:w-72 lg:w-80 aspect-square">
                        {/* Dashed ring + gradient frame around the round photo */}
                        <div className="absolute -inset-3 rounded-full border-2 border-dashed border-[#884830]/40
                                        animate-[spin_40s_linear_infinite]"></div>
                        <div className="absolute inset-0 rounded-full p-2 bg-gradient-to-br from-[#F1AA76] via-[#CE7857] to-[#884830] shadow-2xl">
                            <img
                                src="/mouad.jpg"
                                className="w-full h-full rounded-full object-cover object-top
                                           transition-transform duration-500 hover:scale-[1.03]"
                                alt="Mouad El Hiloufi"
                            />
                        </div>
                        <span className="absolute bottom-3 -right-1 sm:right-0 px-3 py-1.5 rounded-full bg-white text-[#884830]
                                         text-xs sm:text-sm font-bold shadow-lg">
                            YouCode · UM6P
                        </span>
                    </div>
                </div>
                <div className="order-2 md:order-1 w-full md:max-w-[55%] text-center md:text-left">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-[#473D3D] mb-3"
                        style={{fontFamily: 'Acme'}}>
                        Je suis Mouad El Hiloufi
                    </h2>
                    <p className="inline-block mb-4 sm:mb-5 px-4 py-1.5 rounded-full bg-[#884830] text-white
                                  text-xs sm:text-sm lg:text-base font-semibold tracking-wide">
                        Développeur Full Stack · Java &amp; Laravel
                    </p>
                    <p className="text-sm sm:text-base lg:text-lg text-[#473D3D] leading-relaxed mb-6 sm:mb-8">
                        Je conçois des applications web complètes, du back-end en Java / Spring Boot et Laravel
                        jusqu&apos;aux interfaces en React et Tailwind CSS — plus de 20 projets réalisés.
                    </p>
                    <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 justify-center md:justify-start">
                        <a
                            href="/Mouad_El_Hiloufi_CV.pdf"
                            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl whitespace-nowrap
                                       bg-[#343434] text-white font-semibold text-sm sm:text-base
                                       hover:bg-[#884830] transition-all duration-300 shadow-lg active:scale-95"
                            download
                        >
                            <span>↓</span>
                            Télécharger mon CV
                        </a>
                        <a
                            href="/contact"
                            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl whitespace-nowrap
                                       border-2 border-[#343434] text-[#343434] font-semibold text-sm sm:text-base
                                       hover:bg-[#343434] hover:text-white transition-all duration-300 active:scale-95"
                        >
                            Me contacter
                            <span>→</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;
