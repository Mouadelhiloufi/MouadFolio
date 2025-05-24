import React from 'react';
import { motion } from 'framer-motion';

function Experience() {
    return (
        <section className="py-16 px-8">
            <h2 className="text-4xl font-bold text-[#CE7857] mb-16 ml-20" style={{fontFamily: 'Acme'}}>
                Professional Experience
            </h2>

            <div className="max-w-6xl mx-auto space-y-12">
                {/* Internship Section */}
                <motion.div 
                    className="bg-white shadow-lg rounded-lg p-8 transform transition duration-300 hover:scale-105"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                >
                    <h3 className="flex items-center gap-3 text-2xl font-semibold text-[#343434]">
                        <span>💼</span> Internship | Media Digital Invest
                    </h3>
                    <ul className="list-disc ml-5 space-y-3 text-[#343434] mt-4">
                        <li>
                            Gained practical experience in <span className="font-semibold">software development workflows</span> under the mentorship of industry professionals.
                        </li>
                        <li>
                            Contributed to building and optimizing <span className="font-semibold">backend systems</span> to ensure efficient data processing and application performance.
                        </li>
                        <li>
                            Developed and enhanced <span className="font-semibold">frontend interfaces</span>, improving user experience and ensuring responsive design across devices.
                        </li>
                        <li>
                            Improved collaboration and problem-solving skills while working on real-world challenges.
                        </li>
                    </ul>
                </motion.div>

                {/* Training Section */}
                <motion.div 
                    className="bg-white shadow-lg rounded-lg p-8 transform transition duration-300 hover:scale-105"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                >
                    <h3 className="flex items-center gap-3 text-2xl font-semibold text-[#343434]">
                        <span>🎓</span> Training | YouCode
                    </h3>
                    <ul className="list-disc ml-5 space-y-3 text-[#343434] mt-4">
                        <li>
                            Completed an intensive program focused on <span className="font-semibold">Full Stack Development</span>, mastering technologies like <span className="font-semibold">Java, Spring Boot, Angular, React, and PostgreSQL</span>.
                        </li>
                        <li>
                            Built projects demonstrating expertise in <span className="font-semibold">data management, backend logic, and frontend interfaces</span>.
                        </li>
                        <li>
                            Acquired essential soft skills, including <span className="font-semibold">team collaboration, project management, and technical communication</span>.
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
