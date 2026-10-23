function Education() {
    return (
        <section className="py-6 sm:py-8 md:py-10 px-4 sm:px-6 lg:px-8 bg-white">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-[#CE7857] 
                          mb-6 sm:mb-8" 
                style={{fontFamily: 'Acme'}}>
                Formation
            </h2>
            
            <div className="max-w-6xl mx-auto">
                <div className="relative hidden md:block">
                    {/* Horizontal line */}
                    <div className="absolute z-0 top-1/2 left-0 right-0 h-[0.5px] bg-[#884830] min-w-full"></div>
                    
                    {/* Timeline points */}
                    <div className="flex items-center">
                        {/* 2022-2023 */}
                        <div className="w-1/3" style={{marginTop: '153px'}}>
                            <div className="text-center">
                                <p className="text-[#884830] font-semibold text-xl mb-4">2022-2023</p>
                                <div className="w-5 h-5 z-10 mt-2 bg-white rounded-full border-[1.5px] border-[#884830] mx-auto flex justify-center items-center">
                                    <div className="w-3 h-3 bg-[#884830] rounded-full mx-auto"></div>
                                </div>
                                <div className="w-[0.5px] h-20 bg-[#884830] mx-auto mt-2"></div>
                                <div className="max-w-xs mx-auto mt-2">
                                    <h3 className="text-[#343434] text-lg font-semibold">Baccalauréat Sciences Physiques et Chimiques</h3>
                                    <p className="text-[#343434] text-sm mt-1">Lycée Salah Eddin ElAyoubi, Safi — option Français</p>
                                </div>
                            </div>
                        </div>

                        {/* 2023-2025 */}
                        <div className="w-1/3" style={{marginBottom: '125px'}}>
                            <div className="text-center">
                                <div className="max-w-xs mx-auto">
                                    <h3 className="text-[#343434] text-lg font-semibold">Université Cadi Ayyad</h3>
                                    <p className="text-[#343434] text-sm mt-1">Filière Économie — Safi</p>
                                </div>
                                <div className="w-[0.5px] h-20 bg-[#884830] mx-auto mt-2"></div>
                                <div className="w-5 h-5 z-10 mt-2 bg-white rounded-full border-[1.5px] border-[#884830] mx-auto flex justify-center items-center">
                                    <div className="w-3 h-3 bg-[#884830] rounded-full mx-auto"></div>
                                </div>
                                <p className="text-[#884830] font-semibold text-xl mt-4">2023-2025</p>
                            </div>
                        </div>

                        {/* 2025 - En cours */}
                        <div className="w-1/3" style={{marginTop: '124px'}}>
                            <div className="text-center">
                                <p className="text-[#884830] font-semibold text-xl mb-4">2025 - En cours</p>
                                <div className="w-5 h-5 z-10 mt-2 bg-white rounded-full border-[1.5px] border-[#884830] mx-auto flex justify-center items-center">
                                    <div className="w-3 h-3 bg-[#884830] rounded-full mx-auto"></div>
                                </div>
                                <div className="w-[0.5px] h-20 bg-[#884830] mx-auto mt-2"></div>
                                <div className="max-w-xs mx-auto mt-2">
                                    <h3 className="text-[#343434] text-lg font-semibold">YouCode Safi (UM6P)</h3>
                                    <p className="text-[#343434] text-sm mt-1">Développement Web — Full Stack</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Vertical timeline for smaller screens */}
                <div className="block md:hidden">
                    <div className="relative">
                        <div className="absolute left-0 h-full w-[2px] bg-[#884830]"></div>
                        <div className="flex flex-col items-start space-y-6 sm:space-y-8 pl-6 sm:pl-8">
                            {/* 2022-2023 */}
                            <div className="flex flex-col items-start">
                                <div className="flex items-center">
                                    <div className="w-5 h-5 bg-white rounded-full border-[1.5px] border-[#884830] flex justify-center items-center mr-3 sm:mr-4">
                                        <div className="w-3 h-3 bg-[#884830] rounded-full"></div>
                                    </div>
                                    <p className="text-[#884830] font-semibold text-lg sm:text-xl">2022-2023</p>
                                </div>
                                <div className="max-w-xs text-left mt-2">
                                    <h3 className="text-[#343434] text-base sm:text-lg font-semibold">
                                        Baccalauréat Sciences Physiques et Chimiques
                                    </h3>
                                    <p className="text-[#343434] text-xs sm:text-sm mt-1">
                                        Lycée Salah Eddin ElAyoubi, Safi — option Français
                                    </p>
                                </div>
                            </div>

                            {/* 2023-2025 */}
                            <div className="flex flex-col items-start">
                                <div className="flex items-center">
                                    <div className="w-5 h-5 bg-white rounded-full border-[1.5px] border-[#884830] flex justify-center items-center mr-3 sm:mr-4">
                                        <div className="w-3 h-3 bg-[#884830] rounded-full"></div>
                                    </div>
                                    <p className="text-[#884830] font-semibold text-lg sm:text-xl">2023-2025</p>
                                </div>
                                <div className="max-w-xs text-left mt-2">
                                    <h3 className="text-[#343434] text-base sm:text-lg font-semibold">
                                        Université Cadi Ayyad
                                    </h3>
                                    <p className="text-[#343434] text-xs sm:text-sm mt-1">
                                        Filière Économie — Safi
                                    </p>
                                </div>
                            </div>

                            {/* 2025 - En cours */}
                            <div className="flex flex-col items-start">
                                <div className="flex items-center">
                                    <div className="w-5 h-5 bg-white rounded-full border-[1.5px] border-[#884830] flex justify-center items-center mr-3 sm:mr-4">
                                        <div className="w-3 h-3 bg-[#884830] rounded-full"></div>
                                    </div>
                                    <p className="text-[#884830] font-semibold text-lg sm:text-xl">2025 - En cours</p>
                                </div>
                                <div className="max-w-xs text-left mt-2">
                                    <h3 className="text-[#343434] text-base sm:text-lg font-semibold">
                                        YouCode Safi (UM6P)
                                    </h3>
                                    <p className="text-[#343434] text-xs sm:text-sm mt-1">
                                        Développement Web — Full Stack
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Education;