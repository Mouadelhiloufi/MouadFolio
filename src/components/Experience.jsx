import { motion } from 'framer-motion';

function Experience() {
    return (
        <section className="py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#CE7857]
                          mb-8 sm:mb-12 md:mb-16
                          ml-0 sm:ml-4 md:ml-8 lg:ml-12 xl:ml-20"
                style={{fontFamily: 'Acme'}}>
                Expérience professionnelle
            </h2>

            <div className="max-w-6xl mx-auto space-y-6 sm:space-y-8 md:space-y-12">
                {/* IADIBSP - Internship */}
                <motion.div
                    className="bg-white shadow-lg rounded-lg p-4 sm:p-6 md:p-8
                             transform transition duration-300 md:hover:scale-105"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                >
                    <h3 className="flex flex-wrap items-center gap-2 sm:gap-3
                                 text-lg sm:text-xl md:text-2xl font-semibold text-[#343434]">
                       Stagiaire développeur Full Stack | IADIBSP
                    </h3>
                    <p className="text-sm sm:text-base text-[#884830] font-medium mb-3 sm:mb-4">
                        15 mai 2026 - 15 juillet 2026 | Marrakech, Maroc
                    </p>
                    <ul className="list-disc ml-4 sm:ml-5 space-y-2 sm:space-y-3
                                  text-sm sm:text-base text-[#343434] mt-3 sm:mt-4">
                        <li>
                            Développement d&apos;une <span className="font-semibold">plateforme web de mémorisation du Coran</span>.
                        </li>
                        <li>
                            Création de <span className="font-semibold">plans d&apos;apprentissage personnalisés</span> et
                            génération automatique des <span className="font-semibold">séances d&apos;apprentissage</span>.
                        </li>
                        <li>
                            <span className="font-semibold">Suivi de la progression</span> des étudiants.
                        </li>
                        <li>
                            Technologies : <span className="font-semibold">Java, Spring Boot, PostgreSQL, React, Keycloak, Docker, Git, GitHub</span>.
                        </li>
                    </ul>
                </motion.div>

                {/* See My Works Button */}
                <div className="flex justify-end mt-6 sm:mt-8">
                    <a href="/works"
                       className="flex items-center gap-2 text-[#343434] hover:opacity-80
                                text-base sm:text-lg font-semibold">
                        Voir mes projets <span>→</span>
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Experience;
