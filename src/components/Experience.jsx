import React from 'react';
import { motion } from 'framer-motion';

function Experience() {
    return (
        <section className="py-16 px-8">
            <h2 className="text-4xl font-bold text-[#CE7857] mb-16 ml-20" style={{fontFamily: 'Acme'}}>
                Professional Experience
            </h2>

            <div className="max-w-6xl mx-auto space-y-12">
                {/* Dashy - Current Position */}
                <motion.div 
                    className="bg-white shadow-lg rounded-lg p-8 transform transition duration-300 hover:scale-105"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                >
                    <h3 className="flex items-center gap-3 text-2xl font-semibold text-[#343434]">
                        <span>💼</span> Java Developer | Dashy
                    </h3>
                    <p className="text-[#884830] font-medium mb-4">May 2025 - Present | Casablanca-Settat, Morocco</p>
                    <ul className="list-disc ml-5 space-y-3 text-[#343434] mt-4">
                        <li>
                            Developing robust backend solutions using <span className="font-semibold">Java and Spring Boot</span> framework.
                        </li>
                        <li>
                            Implementing <span className="font-semibold">Agile methodologies and Scrum practices</span> for efficient project delivery.
                        </li>
                        <li>
                            Contributing to enterprise-level applications with focus on scalability and performance optimization.
                        </li>
                        <li>
                            Collaborating with cross-functional teams to deliver high-quality software solutions.
                        </li>
                    </ul>
                </motion.div>

                {/* MORITSOFT */}
                <motion.div 
                    className="bg-white shadow-lg rounded-lg p-8 transform transition duration-300 hover:scale-105"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                >
                    <h3 className="flex items-center gap-3 text-2xl font-semibold text-[#343434]">
                        <span>🚀</span> Full-stack Developer | MORITSOFT
                    </h3>
                    <p className="text-[#884830] font-medium mb-4">May 2024 - June 2024 | Marrakech, Morocco</p>
                    <ul className="list-disc ml-5 space-y-3 text-[#343434] mt-4">
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
                    className="bg-white shadow-lg rounded-lg p-8 transform transition duration-300 hover:scale-105"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                >
                    <h3 className="flex items-center gap-3 text-2xl font-semibold text-[#343434]">
                        <span>🎨</span> Frontend Developer | Smart Influencer
                    </h3>
                    <p className="text-[#884830] font-medium mb-4">March 2023 - April 2023 | Marrakech-Safi, Morocco</p>
                    <ul className="list-disc ml-5 space-y-3 text-[#343434] mt-4">
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
                <div className="flex justify-end mt-8">
                    <a href="/works" className="flex items-center gap-2 text-[#343434] hover:opacity-80 text-lg font-semibold">
                        See My Works <span>→</span>
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Experience;