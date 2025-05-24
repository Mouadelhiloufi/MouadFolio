import React from 'react';

function Skills() {
    return (
        <section className="py-10 px-4">
            <h2 className="text-3xl font-bold text-[#CE7857] mb-8 ml-20" style={{fontFamily: 'Acme'}}>
                Skills
            </h2>

            <div className="max-w-6xl mx-auto">
                <p className="text-[#343434] mb-12">
                    I use a number of tools that make design and development much easier. I usually use Figma or Adobe XD 
                    interchangeably for doing all the precess that includes wireframing, prototyping and visual design.
                </p>

                {/* Software/Tools Section */}
                <div className="mb-12">
                    <h3 className="text-2xl font-semibold text-[#343434] mb-6" style={{fontFamily: 'Acme' , marginLeft: '130px'}}>Software/Tools</h3>
                    <div className="grid grid-cols-4 gap-4">
                        <div className="bg-[#F1AA76] text-white font-bold py-8 px-6 rounded-lg text-center transform transition duration-300 hover:shadow-2xl hover:-translate-y-1">Figma</div>
                        <div className="bg-[#F1AA76] text-white font-bold py-8 px-6 rounded-lg text-center transform transition duration-300 hover:shadow-2xl hover:-translate-y-1">AdobeXD</div>
                        <div className="bg-[#F1AA76] text-white font-bold py-8 px-6 rounded-lg text-center transform transition duration-300 hover:shadow-2xl hover:-translate-y-1">Illustrator</div>
                        <div className="bg-[#F1AA76] text-white font-bold py-8 px-6 rounded-lg text-center transform transition duration-300 hover:shadow-2xl hover:-translate-y-1">Photoshop</div>
                    </div>
                </div>

                {/* Web Development Section */}
                <div>
                    <h3 className="text-2xl font-semibold text-[#343434] mb-6" style={{fontFamily: 'Acme' , marginLeft: '130px'}}>Web Development</h3>
                    <div className="grid grid-cols-4 gap-4">
                        <div className="bg-[#884830] text-white font-bold py-10 px-6 rounded-lg text-center transform transition duration-300 hover:shadow-2xl hover:-translate-y-1">ReactJs</div>
                        <div className="bg-[#473D3D] text-white font-bold py-10 px-6 rounded-lg text-center transform transition duration-300 hover:shadow-2xl hover:-translate-y-1">Java</div>
                        <div className="bg-[#473D3D] text-white font-bold py-10 px-6 rounded-lg text-center transform transition duration-300 hover:shadow-2xl hover:-translate-y-1">Spring Boot</div>
                        <div className="bg-[#C89F66] text-white font-bold py-10 px-6 rounded-lg text-center transform transition duration-300 hover:shadow-2xl hover:-translate-y-1">Git/GitHub</div>
                        
                        <div className="bg-[#C89F66] text-white font-bold py-10 px-6 rounded-lg text-center transform transition duration-300 hover:shadow-2xl hover:-translate-y-1">Docker</div>
                        <div className="bg-[#884830] text-white font-bold py-10 px-6 rounded-lg text-center transform transition duration-300 hover:shadow-2xl hover:-translate-y-1">Angular</div>
                        <div className="bg-[#C89F66] text-white font-bold py-10 px-6 rounded-lg text-center transform transition duration-300 hover:shadow-2xl hover:-translate-y-1">JUnit</div>
                        <div className="bg-[#884830] text-white font-bold py-10 px-6 rounded-lg text-center transform transition duration-300 hover:shadow-2xl hover:-translate-y-1">JavaScript</div>
                        
                        <div className="bg-[#473D3D] text-white font-bold py-10 px-6 rounded-lg text-center transform transition duration-300 hover:shadow-2xl hover:-translate-y-1">PHP</div>
                        <div className="bg-[#C89F66] text-white font-bold py-10 px-6 rounded-lg text-center transform transition duration-300 hover:shadow-2xl hover:-translate-y-1">PostgreSQL MySQL</div>
                        <div className="bg-[#884830] text-white font-bold py-10 px-6 rounded-lg text-center transform transition duration-300 hover:shadow-2xl hover:-translate-y-1">UI/UX Design</div>
                        <div className="bg-[#473D3D] text-white font-bold py-10 px-6 rounded-lg text-center transform transition duration-300 hover:shadow-2xl hover:-translate-y-1">Laravel</div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skills;
