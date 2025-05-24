function Agile() {
    return (
        <section className="py-10 px-4">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-[#CE7857] mb-8 ml-20" style={{fontFamily: 'Acme'}}>
                    Agile Project Management
                </h2>

                <p className="text-[#343434] mb-12">
                    I embrace agile methodologies to deliver high-quality solutions efficiently. 
                    My experience includes working with various agile frameworks and tools to ensure 
                    smooth project delivery and team collaboration.
                </p>

                <div className="grid grid-cols-3 gap-4">
                    {/* Scrum Card - Left to Right Shadow */}
                    <div className="bg-[#FFE5DD] text-[#884830] rounded-lg p-6 flex flex-col items-center justify-center space-y-3 
                                shadow-md transition-all duration-300 hover:shadow-[15px_0px_30px_-15px_rgba(136,72,48,0.3)]">
                        <h3 className="font-bold text-xl text-center">Scrum Methodology</h3>
                        <p className="text-center text-sm">
                            Driving projects forward with agile principles
                        </p>
                    </div>

                    {/* Tools Card - Bottom Shadow */}
                    <div className="bg-[#FFE5DD] text-[#884830] rounded-lg p-6 flex flex-col items-center justify-center space-y-3 
                                shadow-md transition-all duration-300 hover:shadow-[0px_15px_30px_-15px_rgba(136,72,48,0.3)]">
                        <h3 className="font-bold text-xl text-center">Collaboration Tools</h3>
                        <p className="text-center text-sm">
                            Mastering Jira & GitHub workflows
                        </p>
                    </div>

                    {/* Automation Card - Right to Left Shadow */}
                    <div className="bg-[#FFE5DD] text-[#884830] rounded-lg p-6 flex flex-col items-center justify-center space-y-3 
                                shadow-md transition-all duration-300 hover:shadow-[-15px_0px_30px_-15px_rgba(136,72,48,0.3)]">
                        <h3 className="font-bold text-xl text-center">Workflow Automation</h3>
                        <p className="text-center text-sm">
                            Optimizing processes for faster delivery
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Agile;
