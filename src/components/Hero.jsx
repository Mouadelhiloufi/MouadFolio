function Hero() {
    return (
        <section className="hero relative mt-12 sm:mt-16 lg:mt-20 mb-10 md:mb-14">
            <h1 className="absolute -top-8 sm:-top-11 lg:-top-14 left-4 sm:left-8 lg:left-14 z-10 m-0
                           text-5xl sm:text-6xl lg:text-7xl xl:text-8xl text-[#884830]"
                style={{fontFamily: 'Acme'}}>
                Hello
            </h1>
            <div className="bg-[#FFE4E1] rounded-3xl overflow-hidden
                            flex flex-col md:flex-row items-center justify-between
                            px-5 pt-12 pb-8 sm:px-8 sm:pt-16 md:p-12 lg:p-14 gap-6 md:gap-10">
                <div className="flex-shrink-0 order-1 md:order-2 w-full md:w-auto flex justify-center md:justify-end">
                    <div className="relative w-64 sm:w-72 md:w-80 lg:w-96 aspect-square">
                        {/* Gradient circle behind the photo, head pops out above it */}
                        <div className="absolute inset-x-[6%] bottom-0 aspect-square rounded-full
                                        bg-gradient-to-br from-[#F1AA76] via-[#CE7857] to-[#884830] shadow-2xl"></div>
                        <div className="absolute inset-x-[calc(6%-12px)] -bottom-3 aspect-square rounded-full
                                        border-2 border-dashed border-[#884830]/40 animate-[spin_40s_linear_infinite]"></div>
                        <div className="relative h-full w-[88%] mx-auto overflow-hidden rounded-b-full">
                            <img
                                src="/my.png"
                                className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[104%] w-auto max-w-none
                                           drop-shadow-2xl transition-[height] duration-500 hover:h-[108%]"
                                alt="Aamir El Amiri"
                            />
                        </div>
                    </div>
                </div>
                <div className="order-2 md:order-1 w-full md:max-w-[55%] text-center md:text-left">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-[#473D3D] mb-3"
                        style={{fontFamily: 'Acme'}}>
                        I'm Aamir El Amiri
                    </h2>
                    <p className="inline-block mb-4 sm:mb-5 px-4 py-1.5 rounded-full bg-[#884830] text-white
                                  text-xs sm:text-sm lg:text-base font-semibold tracking-wide">
                        Software Engineer · AI &amp; Automation
                    </p>
                    <p className="text-sm sm:text-base lg:text-lg text-[#473D3D] leading-relaxed mb-6 sm:mb-8">
                        I build AI agents, REST APIs and data pipelines in Java, Python and
                        JavaScript — from conversational agents on WhatsApp &amp; Instagram to RAG assistants in production.
                    </p>
                    <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 justify-center md:justify-start">
                        <a
                            href="/Aamir_El_Amiri_CV_2026.pdf"
                            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl whitespace-nowrap
                                       bg-[#343434] text-white font-semibold text-sm sm:text-base
                                       hover:bg-[#884830] transition-all duration-300 shadow-lg active:scale-95"
                            download
                        >
                            <span>↓</span>
                            Download My CV
                        </a>
                        <a
                            href="/contact"
                            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl whitespace-nowrap
                                       border-2 border-[#343434] text-[#343434] font-semibold text-sm sm:text-base
                                       hover:bg-[#343434] hover:text-white transition-all duration-300 active:scale-95"
                        >
                            Contact Me
                            <span>→</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;
