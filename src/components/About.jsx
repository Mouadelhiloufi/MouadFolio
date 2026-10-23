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
                        À propos de moi
                    </h2>
                    <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed 
                                 px-2 sm:px-0">
                        Je m&apos;appelle Mouad El Hiloufi, développeur Full Stack en formation à YouCode Safi (UM6P).
                        Après deux années d&apos;économie à l&apos;Université Cadi Ayyad, j&apos;ai choisi le développement web et
                        réalisé plus de 20 projets : API REST en Java / Spring, applications Laravel, PHP MVC et interfaces
                        JavaScript. En stage chez IADIBSP à Marrakech, j&apos;ai développé une plateforme de mémorisation du Coran
                        avec Spring Boot, React et Keycloak. Je travaille en méthode Scrum, je conçois avec UML et Merise,
                        et j&apos;aime écrire un code propre et bien structuré.
                    </p>
                </div>
            </section>
        </motion.div>
    );
}

export default About;