import React from 'react';
import { motion } from 'framer-motion';

function About() {
    return (
        <motion.div 
            className="background-image"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <section className="about mt-8 sm:mt-12 md:mt-16" id="about">
                <div className="max-w-6xl mx-auto p-4 sm:p-6 md:p-8 lg:p-10">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#884830] mb-4 sm:mb-6 
                                  ml-0 sm:ml-4 md:ml-6 lg:ml-10" 
                        style={{fontFamily: 'Acme'}}>
                        About me
                    </h2>
                    <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed 
                                 px-2 sm:px-0">
                        I am Aamir El Amiri, a passionate Full-Stack Developer specializing in Java and Angular technologies. 
                        Currently advancing my expertise at YouCode - UM6P, I bring a strong foundation in web development 
                        with proficiency in creating dynamic websites using WordPress, HTML, CSS, JavaScript, and their 
                        associated frameworks. My technical arsenal includes PHP, SQL, and MERISE modeling methodology, 
                        complemented by experience in Spring Boot and Agile/Scrum methodologies. My goal is to design 
                        efficient and aesthetically pleasing web solutions that meet specific client needs. I am always 
                        seeking stimulating challenges and new opportunities to showcase my skills in both frontend and 
                        backend development, delivering exceptional user experiences through innovation and technical excellence.
                    </p>
                </div>
            </section>
        </motion.div>
    );
}

export default About;