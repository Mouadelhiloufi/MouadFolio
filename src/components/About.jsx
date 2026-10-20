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
                        I am Aamir El Amiri, a Software Engineer with hands-on experience building AI solutions, REST APIs
                        and data pipelines in Java, Python and JavaScript. I design and deploy conversational AI agents
                        (WhatsApp, Instagram) and a RAG-based assistant running in production. I learn fast — I went from
                        frontend intern to Data &amp; AI Engineer in less than 3 years. My goal is to put my solid software
                        engineering foundations and my AI experience to work in a Forward Deployed Engineering role.
                        I actively explore emerging AI/LLM tools, agentic frameworks and modern AI-assisted development practices.
                    </p>
                </div>
            </section>
        </motion.div>
    );
}

export default About;