import { useState } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faDownload, faBook } from '@fortawesome/free-solid-svg-icons';
import Header from "../components/Header";
import Footer from "../components/Footer";
import StarAnimation from "../components/StarAnimation";

export default function Presentations() {
    const [currentPage, setCurrentPage] = useState(1);
    const [iframeKey, setIframeKey] = useState(0);
    const [currentPresentation, setCurrentPresentation] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalPresentation, setModalPresentation] = useState(null);

    const presentations = [
        {
            id: 1,
            title: "SOLID Principles",
            description: "The 'SOLID Principles' presentation offers a clear and structured overview of the five key object-oriented design principles. It explains concepts such as the Single Responsibility Principle and Open/Closed Principle, providing best practices for writing clean, maintainable, and scalable code.",
            pdfUrl: "/Solide5.pdf",
            totalPages: 24
        },
        {
            id: 2,
            title: "Axios",
            description: "The 'Axios' presentation provides a practical overview of handling HTTP requests in JavaScript applications. It covers key concepts such as sending GET and POST requests, handling responses and errors, and includes best practices for integrating APIs efficiently and securely.",
            pdfUrl: "/Axios.pdf",
            totalPages: 17
        },
        {
            id: 3,
            title: "JavaScript Promises",
            description: "The 'JavaScript Promises' presentation offers a clear introduction to asynchronous programming in JavaScript. It covers essential concepts like promise creation, chaining with .then(), error handling with .catch(), and best practices for writing clean and predictable asynchronous code.",
            pdfUrl: "/Promeses5.pdf",
            totalPages: 21
        }
    ];

    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
        setIframeKey(prev => prev + 1);
    };

    const handlePresentationChange = (index) => {
        setCurrentPresentation(index);
        setCurrentPage(1);
        setIframeKey(prev => prev + 1);
    };

    const openModal = (presentation) => {
        setModalPresentation(presentation);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setModalPresentation(null);
    };

    return (
        <>
            <div className="App relative" style={{ overflow: 'hidden' }}>
                <Header />
                <StarAnimation />
            </div>
            <motion.div 
                className="py-8 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <div className="max-w-6xl mx-auto">
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-8 sm:mb-12"
                    >
                        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#884830] mb-3 sm:mb-4" 
                            style={{fontFamily: 'Acme'}}>
                            Presentations
                        </h1>
                        <h2 className="text-xl sm:text-2xl font-semibold text-[#884830] mb-2 sm:mb-3">
                            Discover a Collection of Knowledge and Insights
                        </h2>
                        <p className="text-sm sm:text-base md:text-lg text-gray-700">
                            Explore a curated selection of my presentations, where ideas meet innovation. Dive into topics that showcase technical expertise, problem-solving strategies, and practical solutions—all crafted to inform, inspire, and empower.
                        </p>
                    </motion.div>

                    <div className="max-w-6xl mx-auto mb-8 sm:mb-12 md:mb-16">
                        <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl overflow-hidden">
                            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 md:gap-8 p-4 sm:p-6 md:p-8">
                                {/* Left Page */}
                                <motion.div 
                                    className="col-span-1 lg:col-span-5 order-1"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.2 }}
                                >
                                    <motion.div 
                                        className="aspect-[3/4] bg-gray-100 rounded-lg shadow-lg overflow-hidden"
                                        whileHover={{ scale: 1.02 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <iframe
                                            src={`${presentations[currentPresentation].pdfUrl}#page=1&view=FitH&toolbar=0&navpanes=0`}
                                            className="w-full h-full border-none"
                                            title={`${presentations[currentPresentation].title} - Page 1`}
                                            style={{
                                                transform: 'scale(1.05)',
                                                transformOrigin: 'center center',
                                                pointerEvents: 'none'
                                            }}
                                        />
                                    </motion.div>
                                </motion.div>

                                {/* Right Page */}
                                <motion.div 
                                    className="col-span-1 lg:col-span-5 order-2"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.2 }}
                                >
                                    <motion.div 
                                        className="aspect-[3/4] bg-gray-100 rounded-lg shadow-lg overflow-hidden"
                                        whileHover={{ scale: 1.02 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <iframe
                                            src={`${presentations[currentPresentation].pdfUrl}#page=2&view=FitH&toolbar=0&navpanes=0`}
                                            className="w-full h-full border-none"
                                            title={`${presentations[currentPresentation].title} - Page 2`}
                                            style={{
                                                transform: 'scale(1.05)',
                                                transformOrigin: 'center center',
                                                pointerEvents: 'none'
                                            }}
                                        />
                                    </motion.div>
                                </motion.div>

                                {/* Description and Download */}
                                <motion.div 
                                    className="col-span-1 lg:col-span-2 order-3 lg:order-3"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3 }}
                                >
                                    <div className="h-full flex flex-col justify-between gap-4">
                                        <div>
                                            <h3 className="text-lg sm:text-xl font-bold text-[#884830] mb-2 sm:mb-3">
                                                {presentations[currentPresentation].title}
                                            </h3>
                                            <p className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4">
                                                {presentations[currentPresentation].description}
                                            </p>
                                            <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-500 mb-4">
                                                <FontAwesomeIcon icon={faBook} />
                                                <span>{presentations[currentPresentation].totalPages} pages</span>
                                            </div>
                                        </div>
                                        
                                        <motion.a
                                            href={presentations[currentPresentation].pdfUrl}
                                            download
                                            className="inline-flex items-center justify-center bg-gradient-to-r from-[#884830] to-[#CE7857] 
                                                     text-white px-3 sm:px-4 py-2 sm:py-3 rounded-xl shadow-md hover:shadow-lg 
                                                     transition-all duration-300 text-sm sm:text-base
                                                     w-full"
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            <FontAwesomeIcon icon={faDownload} className="mr-2" />
                                            Download PDF
                                        </motion.a>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </div>

                    <div className="relative max-w-6xl mx-auto mb-8">
                        {/* Left Shadow Overlay */}
                        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10"></div>
                        
                        {/* Right Shadow Overlay */}
                        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10"></div>
                        
                        {/* Scrollable Container */}
                        <div className="overflow-x-auto hide-scrollbar">
                            <div className="flex space-x-4 px-20 py-4 min-w-max">
                                {presentations.map((presentation, index) => (
                                    <motion.button
                                        key={presentation.id}
                                        onClick={() => handlePresentationChange(index)}
                                        className={`group relative flex flex-col items-center min-w-[180px] p-4 rounded-xl 
                                            ${currentPresentation === index 
                                                ? 'bg-gradient-to-br from-[#884830] to-[#CE7857] text-white shadow-lg' 
                                                : 'bg-white border-2 border-[#FFE5DD] text-gray-700 hover:border-[#884830]/30'
                                            } transition-all duration-300`}
                                        whileHover={{ y: -5, scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.3, delay: index * 0.1 }}
                                    >
                                        {/* Title */}
                                        <span className="text-sm font-medium text-center mb-2">
                                            {presentation.title}
                                        </span>
                                        
                                        {/* Page Count with Circle Progress */}
                                        <div className="relative w-8 h-8">
                                            <svg className="w-full h-full transform -rotate-90">
                                                <circle
                                                    className={`${currentPresentation === index ? 'text-white/30' : 'text-[#FFE5DD]'}`}
                                                    strokeWidth="2"
                                                    stroke="currentColor"
                                                    fill="transparent"
                                                    r="15"
                                                    cx="16"
                                                    cy="16"
                                                />
                                                <circle
                                                    className={`${currentPresentation === index ? 'text-white' : 'text-[#884830]'}`}
                                                    strokeWidth="2"
                                                    stroke="currentColor"
                                                    fill="transparent"
                                                    r="15"
                                                    cx="16"
                                                    cy="16"
                                                    strokeDasharray={2 * Math.PI * 15}
                                                    strokeDashoffset={2 * Math.PI * 15 * (1 - currentPage / presentation.totalPages)}
                                                />
                                            </svg>
                                            <span className={`absolute inset-0 flex items-center justify-center text-xs font-medium
                                                ${currentPresentation === index ? 'text-white' : 'text-[#884830]'}`}>
                                                {currentPage}/{presentation.totalPages}
                                            </span>
                                        </div>
                                    </motion.button>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-7 gap-4 sm:gap-6">
                        <motion.div
                            className="bg-white rounded-xl shadow-lg overflow-hidden col-span-1 lg:col-span-5 relative cursor-pointer"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            whileHover={{ y: -5 }}
                            onClick={() => openModal(presentations[currentPresentation])}
                        >
                            <div className="relative bg-white p-4 sm:p-6" style={{ overflow: 'hidden' }}>
                                <div className="w-full h-[250px] sm:h-[300px] md:h-[400px] overflow-hidden bg-white rounded-lg border border-gray-200">
                                    <iframe
                                        key={iframeKey}
                                        src={`${presentations[currentPresentation].pdfUrl}#page=${currentPage}&view=FitH&toolbar=0&navpanes=0`}
                                        className="w-full h-full border-none"
                                        title={presentations[currentPresentation].title}
                                        style={{
                                            backgroundColor: 'transparent',
                                            transform: 'scale(1.05)',
                                            transformOrigin: 'center center',
                                            pointerEvents: 'none'
                                        }}
                                    />
                                </div>
                                <div className="absolute top-2 sm:top-4 left-1/2 transform -translate-x-1/2 text-center">
                                    <div className="text-gray-600 text-xs sm:text-sm md:text-lg mb-2 animate-bounce 
                                                  font-semibold drop-shadow-md bg-white/80 px-2 sm:px-3 py-1 rounded-full">
                                        Click to see
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        <div className="p-4 sm:p-6 bg-white rounded-xl shadow-lg col-span-1 lg:col-span-2">
                            <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">
                                {presentations[currentPresentation].title}
                            </h3>
                            <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">
                                {presentations[currentPresentation].description}
                            </p>
                            <a
                                href={presentations[currentPresentation].pdfUrl}
                                download
                                className="inline-flex items-center bg-[#884830] text-white px-3 sm:px-4 py-2 
                                         rounded-full shadow-md hover:bg-[#CE7857] transition-colors text-sm sm:text-base"
                            >
                                <FontAwesomeIcon icon={faDownload} className="mr-2" />
                                Download PDF
                            </a>
                        </div>
                    </div>

                    <div className="flex justify-center items-center mt-4 sm:mt-6 gap-2 sm:gap-4">
                        <motion.button
                            onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
                            className="text-gray-600 hover:text-gray-800 disabled:text-gray-300 
                                     p-2 sm:p-3 text-base sm:text-lg rounded-full disabled:cursor-not-allowed"
                            disabled={currentPage === 1}
                            whileHover={{ scale: currentPage === 1 ? 1 : 1.1 }}
                            whileTap={{ scale: currentPage === 1 ? 1 : 0.9 }}
                        >
                            <FontAwesomeIcon icon={faChevronLeft} />
                        </motion.button>
                        <span className="text-sm sm:text-lg text-gray-600 min-w-[70px] sm:min-w-[90px] 
                                        text-center font-bold mx-2 sm:mx-4 my-2">
                            {currentPage} / {presentations[currentPresentation].totalPages}
                        </span>
                        <motion.button
                            onClick={() => handlePageChange(Math.min(presentations[currentPresentation].totalPages, currentPage + 1))}
                            className="text-gray-600 hover:text-gray-800 disabled:text-gray-300 
                                     p-2 sm:p-3 text-base sm:text-lg rounded-full disabled:cursor-not-allowed"
                            disabled={currentPage === presentations[currentPresentation].totalPages}
                            whileHover={{ scale: currentPage === presentations[currentPresentation].totalPages ? 1 : 1.1 }}
                            whileTap={{ scale: currentPage === presentations[currentPresentation].totalPages ? 1 : 0.9 }}
                        >
                            <FontAwesomeIcon icon={faChevronRight} />
                        </motion.button>
                    </div>

                    {/* Modal for PDF */}
                    {isModalOpen && modalPresentation && (
                        <motion.div 
                            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={closeModal}
                        >
                            <motion.div 
                                className="bg-white rounded-lg shadow-lg overflow-hidden w-11/12 max-w-4xl max-h-[90vh]"
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.8, opacity: 0 }}
                                onClick={(e) => e.stopPropagation()}
                            >
                                <div className="flex justify-between items-center p-3 sm:p-4 border-b">
                                    <h3 className="text-base sm:text-lg font-semibold text-gray-800">
                                        {modalPresentation.title}
                                    </h3>
                                    <button 
                                        onClick={closeModal} 
                                        className="text-gray-600 hover:text-gray-800 text-lg sm:text-xl 
                                                 font-bold px-2 sm:px-3 py-1 rounded-full hover:bg-gray-100"
                                    >
                                        ×
                                    </button>
                                </div>
                                <div className="p-2 sm:p-4">
                                    <iframe
                                        src={`${modalPresentation.pdfUrl}#view=FitH&toolbar=1&navpanes=1`}
                                        className="w-full h-[60vh] sm:h-[70vh] border-none"
                                        title={`${modalPresentation.title} - Full View`}
                                    />
                                </div>
                            </motion.div>
                        </motion.div>
                    )}
                </div>
            </motion.div>
            <Footer />
        </>
    );
}