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
            <section className="about " id="about">
                <div className="max-w-6xl  mx-auto p-6">
                    <h2 className="text-3xl font-bold text-[#88483] mb-4 ml-10 " style={{fontFamily: 'Acme'}}>About me</h2>
                    <p className="text-gray-700 leading-relaxed" style={{fontFamily: 'Open Sans'}}>
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