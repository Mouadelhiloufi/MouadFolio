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
                             transform transition duration-300 md:hover:scale-105"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                >
                    <h3 className="flex flex-wrap items-center gap-2 sm:gap-3 
                                 text-lg sm:text-xl md:text-2xl font-semibold text-[#343434]">
                       Data &amp; AI Engineer | Dashy
                    </h3>
                    <p className="text-sm sm:text-base text-[#884830] font-medium mb-3 sm:mb-4">
                        March 2026 - Present | Casablanca, Morocco
                    </p>
                    <ul className="list-disc ml-4 sm:ml-5 space-y-2 sm:space-y-3 
                                  text-sm sm:text-base text-[#343434] mt-3 sm:mt-4">
                        <li>
                            Designed and deployed <span className="font-semibold">conversational AI agents</span> connected to the WhatsApp Business and Instagram APIs, automating customer interactions with business tools and external services.
                        </li>
                        <li>
                            Built <span className="font-semibold">ETL pipelines</span> and a centralized <span className="font-semibold">Data Warehouse</span> to collect, transform and integrate multi-source data for decision-making analytics.
                        </li>
                        <li>
                            Orchestrated data workflows with <span className="font-semibold">Apache Airflow</span> and set up monitoring with <span className="font-semibold">Prometheus, Grafana &amp; Loki</span> to keep pipelines reliable.
                        </li>
                        <li>
                            Developed <span className="font-semibold">Power BI dashboards</span> and <span className="font-semibold">React applications</span> for real-time visualization and KPI tracking.
                        </li>
                    </ul>
                </motion.div>

                {/* Dashy - Internship */}
                <motion.div 
                    className="bg-white shadow-lg rounded-lg p-4 sm:p-6 md:p-8 
                             transform transition duration-300 md:hover:scale-105"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                >
                    <h3 className="flex flex-wrap items-center gap-2 sm:gap-3 
                                 text-lg sm:text-xl md:text-2xl font-semibold text-[#343434]">
                       Java &amp; AI Developer (Internship) | Dashy
                    </h3>
                    <p className="text-sm sm:text-base text-[#884830] font-medium mb-3 sm:mb-4">
                        May 2025 - February 2026 | Casablanca, Morocco
                    </p>
                    <ul className="list-disc ml-4 sm:ml-5 space-y-2 sm:space-y-3 
                                  text-sm sm:text-base text-[#343434] mt-3 sm:mt-4">
                        <li>
                            Built a <span className="font-semibold">RAG-based AI assistant</span> with LangChain and ChromaDB that automatically answers customer requests from indexed business data.
                        </li>
                        <li>
                            Integrated <span className="font-semibold">5 CRM/e-commerce platforms</span> (PrestaShop, Shopify, WooCommerce) through REST APIs, syncing customers, products and orders in real time.
                        </li>
                        <li>
                            Developed <span className="font-semibold">backend connectors in Java/Spring Boot</span> orchestrating flows between CRMs, the Meta APIs and AI services with <span className="font-semibold">OAuth 2.0 &amp; webhooks</span>.
                        </li>
                    </ul>
                </motion.div>

                {/* MORITSOFT */}
                <motion.div 
                    className="bg-white shadow-lg rounded-lg p-4 sm:p-6 md:p-8 
                             transform transition duration-300 md:hover:scale-105"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                >
                    <h3 className="flex flex-wrap items-center gap-2 sm:gap-3 
                                 text-lg sm:text-xl md:text-2xl font-semibold text-[#343434]">
                       Full-Stack Developer (Internship) | MORITSOFT
                    </h3>
                    <p className="text-sm sm:text-base text-[#884830] font-medium mb-3 sm:mb-4">
                        May 2024 - June 2024 | Marrakech, Morocco
                    </p>
                    <ul className="list-disc ml-4 sm:ml-5 space-y-2 sm:space-y-3 
                                  text-sm sm:text-base text-[#343434] mt-3 sm:mt-4">
                        <li>
                            Developed and deployed <span className="font-semibold">3 dynamic web applications</span> (Laravel, React, Tailwind CSS): showcase websites and a <span className="font-semibold">department management tool</span>.
                        </li>
                    </ul>
                </motion.div>

                {/* Smart Influencer */}
                <motion.div 
                    className="bg-white shadow-lg rounded-lg p-4 sm:p-6 md:p-8 
                             transform transition duration-300 md:hover:scale-105"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                >
                    <h3 className="flex flex-wrap items-center gap-2 sm:gap-3 
                                 text-lg sm:text-xl md:text-2xl font-semibold text-[#343434]">
                       Frontend Developer (Internship) | Smart Influencer
                    </h3>
                    <p className="text-sm sm:text-base text-[#884830] font-medium mb-3 sm:mb-4">
                        March 2023 - April 2023 | Marrakech, Morocco
                    </p>
                    <ul className="list-disc ml-4 sm:ml-5 space-y-2 sm:space-y-3 
                                  text-sm sm:text-base text-[#343434] mt-3 sm:mt-4">
                        <li>
                            Developed a <span className="font-semibold">multi-station internal web platform</span> and a <span className="font-semibold">hotel management application</span> with online booking.
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