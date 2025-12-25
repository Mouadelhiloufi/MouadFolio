import React from 'react'; 

function Skills() { 
 return ( 
 <section className="py-6 sm:py-8 md:py-10 px-4 sm:px-6 lg:px-8"> 
 <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#CE7857] mb-6 sm:mb-8 
                ml-0 sm:ml-4 md:ml-8 lg:ml-12 xl:ml-20" 
     style={{fontFamily: 'Acme'}}> 
 Skills 
 </h2> 

 <div className="max-w-6xl mx-auto"> 
 <p className="text-sm sm:text-base md:text-lg text-[#343434] mb-8 sm:mb-10 md:mb-12 
              px-2 sm:px-0"> 
 I use a number of tools that make design and development much easier. I usually use Figma or Adobe XD 
 interchangeably for doing all the precess that includes wireframing, prototyping and visual design. 
 </p> 

 {/* Software/Tools Section */} 
 <div className="mb-8 sm:mb-10 md:mb-12"> 
 <h3 className="text-xl sm:text-2xl font-semibold text-[#343434] mb-4 sm:mb-6 
                ml-0 sm:ml-4 md:ml-8 lg:ml-12 xl:ml-32" 
     style={{fontFamily: 'Acme'}}>
     Software/Tools
 </h3> 
 <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4"> 
 <div className="bg-[#F1AA76] text-white font-bold py-4 sm:py-6 md:py-8 px-3 sm:px-4 md:px-6 
                rounded-lg text-center text-xs sm:text-sm md:text-base
                transform transition duration-300 hover:shadow-2xl hover:-translate-y-1">
     Figma
 </div> 
 <div className="bg-[#F1AA76] text-white font-bold py-4 sm:py-6 md:py-8 px-3 sm:px-4 md:px-6 
                rounded-lg text-center text-xs sm:text-sm md:text-base
                transform transition duration-300 hover:shadow-2xl hover:-translate-y-1">
     AdobeXD
 </div> 
 <div className="bg-[#F1AA76] text-white font-bold py-4 sm:py-6 md:py-8 px-3 sm:px-4 md:px-6 
                rounded-lg text-center text-xs sm:text-sm md:text-base
                transform transition duration-300 hover:shadow-2xl hover:-translate-y-1">
     Illustrator
 </div> 
 <div className="bg-[#F1AA76] text-white font-bold py-4 sm:py-6 md:py-8 px-3 sm:px-4 md:px-6 
                rounded-lg text-center text-xs sm:text-sm md:text-base
                transform transition duration-300 hover:shadow-2xl hover:-translate-y-1">
     Photoshop
 </div> 
 </div> 
 </div> 

 {/* Web Development Section */} 
 <div className="mb-8 sm:mb-10 md:mb-12"> 
 <h3 className="text-xl sm:text-2xl font-semibold text-[#343434] mb-4 sm:mb-6 
                ml-0 sm:ml-4 md:ml-8 lg:ml-12 xl:ml-32" 
     style={{fontFamily: 'Acme'}}>
     Web Development
 </h3> 
 <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4"> 
 <div className="bg-[#884830] text-white font-bold py-5 sm:py-7 md:py-10 px-3 sm:px-4 md:px-6 
                rounded-lg text-center text-xs sm:text-sm md:text-base
                transform transition duration-300 hover:shadow-2xl hover:-translate-y-1">
     ReactJs
 </div> 
 <div className="bg-[#473D3D] text-white font-bold py-5 sm:py-7 md:py-10 px-3 sm:px-4 md:px-6 
                rounded-lg text-center text-xs sm:text-sm md:text-base
                transform transition duration-300 hover:shadow-2xl hover:-translate-y-1">
     Java
 </div> 
 <div className="bg-[#473D3D] text-white font-bold py-5 sm:py-7 md:py-10 px-3 sm:px-4 md:px-6 
                rounded-lg text-center text-xs sm:text-sm md:text-base
                transform transition duration-300 hover:shadow-2xl hover:-translate-y-1">
     Spring Boot
 </div> 
 <div className="bg-[#C89F66] text-white font-bold py-5 sm:py-7 md:py-10 px-3 sm:px-4 md:px-6 
                rounded-lg text-center text-xs sm:text-sm md:text-base
                transform transition duration-300 hover:shadow-2xl hover:-translate-y-1">
     Git/GitHub
 </div> 

 <div className="bg-[#C89F66] text-white font-bold py-5 sm:py-7 md:py-10 px-3 sm:px-4 md:px-6 
                rounded-lg text-center text-xs sm:text-sm md:text-base
                transform transition duration-300 hover:shadow-2xl hover:-translate-y-1">
     Docker
 </div> 
 <div className="bg-[#884830] text-white font-bold py-5 sm:py-7 md:py-10 px-3 sm:px-4 md:px-6 
                rounded-lg text-center text-xs sm:text-sm md:text-base
                transform transition duration-300 hover:shadow-2xl hover:-translate-y-1">
     Angular
 </div> 
 <div className="bg-[#C89F66] text-white font-bold py-5 sm:py-7 md:py-10 px-3 sm:px-4 md:px-6 
                rounded-lg text-center text-xs sm:text-sm md:text-base
                transform transition duration-300 hover:shadow-2xl hover:-translate-y-1">
     JUnit
 </div> 
 <div className="bg-[#884830] text-white font-bold py-5 sm:py-7 md:py-10 px-3 sm:px-4 md:px-6 
                rounded-lg text-center text-xs sm:text-sm md:text-base
                transform transition duration-300 hover:shadow-2xl hover:-translate-y-1">
     JavaScript
 </div> 

 <div className="bg-[#473D3D] text-white font-bold py-5 sm:py-7 md:py-10 px-3 sm:px-4 md:px-6 
                rounded-lg text-center text-xs sm:text-sm md:text-base
                transform transition duration-300 hover:shadow-2xl hover:-translate-y-1">
     PHP
 </div> 
 <div className="bg-[#C89F66] text-white font-bold py-5 sm:py-7 md:py-10 px-3 sm:px-4 md:px-6 
                rounded-lg text-center text-xs sm:text-sm md:text-base
                transform transition duration-300 hover:shadow-2xl hover:-translate-y-1">
     PostgreSQL MySQL
 </div> 
 <div className="bg-[#884830] text-white font-bold py-5 sm:py-7 md:py-10 px-3 sm:px-4 md:px-6 
                rounded-lg text-center text-xs sm:text-sm md:text-base
                transform transition duration-300 hover:shadow-2xl hover:-translate-y-1">
     UI/UX Design
 </div> 
 <div className="bg-[#473D3D] text-white font-bold py-5 sm:py-7 md:py-10 px-3 sm:px-4 md:px-6 
                rounded-lg text-center text-xs sm:text-sm md:text-base
                transform transition duration-300 hover:shadow-2xl hover:-translate-y-1">
     Laravel
 </div> 
 </div> 
 </div> 

 {/* AI Development Section */} 
 <div> 
 <h3 className="text-xl sm:text-2xl font-semibold text-[#343434] mb-4 sm:mb-6 
                ml-0 sm:ml-4 md:ml-8 lg:ml-12 xl:ml-32" 
     style={{fontFamily: 'Acme'}}>
     AI Development
 </h3> 
 <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4"> 
 <div className="bg-[#884830] text-white font-bold py-5 sm:py-7 md:py-10 px-3 sm:px-4 md:px-6 
                rounded-lg text-center text-xs sm:text-sm md:text-base
                transform transition duration-300 hover:shadow-2xl hover:-translate-y-1">
     TensorFlow
 </div> 
 <div className="bg-[#473D3D] text-white font-bold py-5 sm:py-7 md:py-10 px-3 sm:px-4 md:px-6 
                rounded-lg text-center text-xs sm:text-sm md:text-base
                transform transition duration-300 hover:shadow-2xl hover:-translate-y-1">
     PyTorch
 </div> 
 <div className="bg-[#C89F66] text-white font-bold py-5 sm:py-7 md:py-10 px-3 sm:px-4 md:px-6 
                rounded-lg text-center text-xs sm:text-sm md:text-base
                transform transition duration-300 hover:shadow-2xl hover:-translate-y-1">
     Scikit-learn
 </div> 
 <div className="bg-[#884830] text-white font-bold py-5 sm:py-7 md:py-10 px-3 sm:px-4 md:px-6 
                rounded-lg text-center text-xs sm:text-sm md:text-base
                transform transition duration-300 hover:shadow-2xl hover:-translate-y-1">
     Pandas
 </div> 

 <div className="bg-[#473D3D] text-white font-bold py-5 sm:py-7 md:py-10 px-3 sm:px-4 md:px-6 
                rounded-lg text-center text-xs sm:text-sm md:text-base
                transform transition duration-300 hover:shadow-2xl hover:-translate-y-1">
     NumPy
 </div> 
 <div className="bg-[#C89F66] text-white font-bold py-5 sm:py-7 md:py-10 px-3 sm:px-4 md:px-6 
                rounded-lg text-center text-xs sm:text-sm md:text-base
                transform transition duration-300 hover:shadow-2xl hover:-translate-y-1">
     Matplotlib
 </div> 
 <div className="bg-[#884830] text-white font-bold py-5 sm:py-7 md:py-10 px-3 sm:px-4 md:px-6 
                rounded-lg text-center text-xs sm:text-sm md:text-base
                transform transition duration-300 hover:shadow-2xl hover:-translate-y-1">
     OpenCV
 </div> 
 </div> 
 </div> 
 </div> 
 </section> 
 ); 
} 

export default Skills;