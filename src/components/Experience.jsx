import React from 'react';
import { motion } from 'framer-motion';

function Experience() {
    return (
        <section className="py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#CE7857] 
                          mb-8 sm:mb-12 md:mb-16 
                          ml-0 sm:ml-4 md:ml-8 lg:ml-12 xl:ml-20" 
                style={{fontFamily: 'Acme'}}>
                Professional Experience
            </h2>

            <div className="max-w-6xl mx-auto space-y-6 sm:space-y-8 md:space-y-12">
                {/* Dashy - Current Position */}
                <motion.div 
                    className="bg-white shadow-lg rounded-lg p-4 sm:p-6 md:p-8 
                             transform transition duration-300 hover:scale-105"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                >
               <h3 className="flex flex-wrap items-center gap-2 sm:gap-3 
                             text-lg sm:text-xl md:text-2xl font-semibold text-[#343434]">
  Java Backend Developer | Dashy
</h3>
<p className="text-sm sm:text-base text-[#884830] font-medium mb-3 sm:mb-4">
    Mai 2025 - Présent | Casablanca-Settat, Maroc
</p>
<ul className="list-disc ml-4 sm:ml-5 space-y-2 sm:space-y-3 
              text-sm sm:text-base text-[#343434] mt-3 sm:mt-4">
  <li>
    Analyse des <span className="font-semibold">API REST des plateformes sociales</span> (Instagram, etc.) pour intégration.
  </li>
  <li>
    Développement de <span className="font-semibold">connecteurs backend</span> en <span className="font-semibold">Java avec Spring Boot</span> pour gérer les flux de messagerie.
  </li>
  <li>
    Implémentation de la <span className="font-semibold">gestion des authentifications OAuth 2.0</span> et des <span className="font-semibold">webhooks</span>.
  </li>
  <li>
    Conception de services RESTful robustes et évolutifs pour la communication entre les plateformes.
  </li>
  <li>
    Écriture de <span className="font-semibold">tests unitaires et d’intégration</span> avec JUnit et documentation des API via Swagger.
  </li>
</ul>

                </motion.div>

                {/* MORITSOFT */}
                <motion.div 
                    className="bg-white shadow-lg rounded-lg p-4 sm:p-6 md:p-8 
                             transform transition duration-300 hover:scale-105"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                >
                    <h3 className="flex flex-wrap items-center gap-2 sm:gap-3 
                                 text-lg sm:text-xl md:text-2xl font-semibold text-[#343434]">
                       Full-stack Developer | MORITSOFT
                    </h3>
                    <p className="text-sm sm:text-base text-[#884830] font-medium mb-3 sm:mb-4">
                        May 2024 - June 2024 | Marrakech, Morocco
                    </p>
                    <ul className="list-disc ml-4 sm:ml-5 space-y-2 sm:space-y-3 
                                  text-sm sm:text-base text-[#343434] mt-3 sm:mt-4">
                        <li>
                            Successfully created and deployed <span className="font-semibold">three dynamic websites</span> using PHP, React, and Tailwind CSS.
                        </li>
                        <li>
                            Developed <span className="font-semibold">two innovative software solution websites</span> showcasing cutting-edge technologies.
                        </li>
                        <li>
                            Built a comprehensive <span className="font-semibold">department management system</span> for enterprise use.
                        </li>
                        <li>
                            Delivered seamless user experiences with <span className="font-semibold">efficient backend functionalities</span>, ensuring robust and scalable web applications.
                        </li>
                    </ul>
                </motion.div>

                {/* Smart Influencer */}
                <motion.div 
                    className="bg-white shadow-lg rounded-lg p-4 sm:p-6 md:p-8 
                             transform transition duration-300 hover:scale-105"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                >
                    <h3 className="flex flex-wrap items-center gap-2 sm:gap-3 
                                 text-lg sm:text-xl md:text-2xl font-semibold text-[#343434]">
                       Frontend Developer | Smart Influencer
                    </h3>
                    <p className="text-sm sm:text-base text-[#884830] font-medium mb-3 sm:mb-4">
                        March 2023 - April 2023 | Marrakech-Safi, Morocco
                    </p>
                    <ul className="list-disc ml-4 sm:ml-5 space-y-2 sm:space-y-3 
                                  text-sm sm:text-base text-[#343434] mt-3 sm:mt-4">
                        <li>
                            Studied and developed <span className="font-semibold">multi-station internal website</span> using HTML, CSS, JavaScript, Bootstrap, and jQuery.
                        </li>
                        <li>
                            Created and maintained a comprehensive <span className="font-semibold">hotel management web application</span>.
                        </li>
                        <li>
                            Implemented responsive design principles ensuring <span className="font-semibold">cross-device compatibility</span>.
                        </li>
                        <li>
                            Gained valuable experience in <span className="font-semibold">frontend development workflows</span> and modern web technologies.
                        </li>
                    </ul>
                </motion.div>

                {/* See My Works Button */}
                <div className="flex justify-end mt-6 sm:mt-8">
                    <a href="/works" 
                       className="flex items-center gap-2 text-[#343434] hover:opacity-80 
                                text-base sm:text-lg font-semibold">
                        See My Works <span>→</span>
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Experience;