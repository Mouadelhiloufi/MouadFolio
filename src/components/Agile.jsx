function Agile() {
    return (
        <section className="py-6 sm:py-8 md:py-10 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#CE7857] 
                              mb-6 sm:mb-8 
                              ml-0 sm:ml-4 md:ml-8 lg:ml-12 xl:ml-20" 
                    style={{fontFamily: 'Acme'}}>
                    How I Work
                </h2>

                <p className="text-sm sm:text-base md:text-lg text-[#343434] mb-8 sm:mb-10 md:mb-12 
                            px-2 sm:px-0">
                    I ship in short Agile iterations, automate everything that can be automated and keep
                    production systems observable — so AI features reach users quickly and stay reliable.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
                    {/* Scrum Card - Left to Right Shadow */}
                    <div className="bg-[#FFE5DD] text-[#884830] rounded-lg p-4 sm:p-5 md:p-6 
                                flex flex-col items-center justify-center space-y-2 sm:space-y-3 
                                shadow-md transition-all duration-300 
                                hover:shadow-[15px_0px_30px_-15px_rgba(136,72,48,0.3)]">
                        <h3 className="font-bold text-lg sm:text-xl text-center">
                            Agile &amp; Scrum
                        </h3>
                        <p className="text-center text-xs sm:text-sm">
                            Sprints, Jira &amp; GitHub workflows, close collaboration with business teams
                        </p>
                    </div>

                    {/* Tools Card - Bottom Shadow */}
                    <div className="bg-[#FFE5DD] text-[#884830] rounded-lg p-4 sm:p-5 md:p-6 
                                flex flex-col items-center justify-center space-y-2 sm:space-y-3 
                                shadow-md transition-all duration-300 
                                hover:shadow-[0px_15px_30px_-15px_rgba(136,72,48,0.3)]">
                        <h3 className="font-bold text-lg sm:text-xl text-center">
                            CI/CD &amp; Monitoring
                        </h3>
                        <p className="text-center text-xs sm:text-sm">
                            Docker, Jenkins, Airflow — observed with Prometheus, Grafana &amp; Loki
                        </p>
                    </div>

                    {/* Automation Card - Right to Left Shadow */}
                    <div className="bg-[#FFE5DD] text-[#884830] rounded-lg p-4 sm:p-5 md:p-6 
                                flex flex-col items-center justify-center space-y-2 sm:space-y-3 
                                shadow-md transition-all duration-300 
                                hover:shadow-[-15px_0px_30px_-15px_rgba(136,72,48,0.3)]">
                        <h3 className="font-bold text-lg sm:text-xl text-center">
                            AI-Assisted Development
                        </h3>
                        <p className="text-center text-xs sm:text-sm">
                            Claude Code, LLM tooling and agentic frameworks to ship faster
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Agile;
