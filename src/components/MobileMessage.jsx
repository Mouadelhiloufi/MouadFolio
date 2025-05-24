import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import StarAnimation from './StarAnimation';

function MobileMessage() {
  return (
    <motion.div  
      className="fixed inset-0 flex flex-col items-center justify-center p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <StarAnimation />

      <h1 className="text-3xl text-center font-bold text-[#884830] mb-6" style={{fontFamily: 'Acme'}}>
        Welcome to My Portfolio
      </h1>
      
      <h2 className="text-xl text-center font-bold text-[#884830] mb-4" style={{fontFamily: 'Acme'}}>
        BAAZIZ Wissal | Full-Stack Developer
      </h2>

      <div className="text-center p-8">
        <motion.div
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2 }}
        >
          <p className="text-gray-700 m-8 leading-relaxed text-center">
            For the best viewing experience of my portfolio, please visit on a desktop or laptop device. 
            The full version showcases interactive elements and detailed projects that are optimized for larger screens.
          </p>
          <div className="flex justify-center">
            <a 
              href="mailto:baazizwissal13@gmail.com"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#884830] text-white rounded-lg hover:bg-[#CE7857] transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Contact Me
            </a>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default MobileMessage; 