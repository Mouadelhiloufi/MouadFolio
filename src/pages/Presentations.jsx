import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faDownload, faBook } from '@fortawesome/free-solid-svg-icons';
import Header from "../components/Header";
import Footer from "../components/Footer";
import StarAnimation from "../components/StarAnimation";

export default function Presentations() {
    const [currentPage, setCurrentPage] = useState(1);
    const [iframeKey, setIframeKey] = useState(0);
    const [currentPresentation, setCurrentPresentation] = useState(8);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalPresentation, setModalPresentation] = useState(null);

    const presentations = [
        {
            id: 1,
            title: "Spring Security",
            description: "The 'Spring Security' presentation provides a comprehensive overview of implementing security in Spring applications. It covers key concepts such as authentication and authorization, and offers best practices for securing applications effectively.",
            pdfUrl: "/springSecurity.pdf",
            totalPages: 34
        },
        {
            id: 2,
            title: "Spring Security Advanced",
            description: "Deep dive into advanced Spring Security concepts, including custom authentication providers, method security, OAuth2 integration, and handling complex security scenarios in enterprise applications.",
            pdfUrl: "/spring security.pdf",
            totalPages: 14
        },
        {
            id: 3,
            title: "DTO",
            description: "Comprehensive guide to Data Transfer Objects (DTOs) in software development. Covers DTO patterns, best practices, mapping strategies, and their role in creating maintainable and efficient applications.",
            pdfUrl: "/DTO.pdf",
            totalPages: 12
        },
        {
            id: 4,
            title: "Classes / Objects in Java",
            description: "Fundamental exploration of Object-Oriented Programming in Java, covering class structure, object lifecycle, inheritance, encapsulation, and practical implementation of OOP principles.",
            pdfUrl: "/Classes.pdf",
            totalPages: 17
        },
        {
            id: 5,
            title: "Enums in Java",
            description: "In-depth look at Java Enumerations, including their implementation, best practices, common patterns, and advanced usage scenarios in Java applications.",
            pdfUrl: "/Enums in java.pdf",
            totalPages: 5
        },
        {
            id: 6,
            title: "Optional in Java",
            description: "Comprehensive guide to Java's Optional class, covering null handling, functional programming approaches, and best practices for writing more robust and null-safe code.",
            pdfUrl: "/Optional in java.pdf",
            totalPages: 9
        },
        {
            id: 7,
            title: "Stream in Java",
            description: "Detailed exploration of Java Streams API, including functional programming concepts, stream operations, parallel processing, and practical examples of stream manipulation.",
            pdfUrl: "/Java Streams.pdf",
            totalPages: 10
        },
        {
            id: 8,
            title: "PHP-FIG",
            description: "Overview of PHP Framework Interop Group (PHP-FIG) standards, covering PSR specifications, coding standards, and best practices for creating interoperable PHP applications.",
            pdfUrl: "/PHP-FIG.pdf",
            totalPages: 14
        },
        {
            id: 9,
            title: "Php-01",
            description: "This presentation covers various aspects of PHP development, providing insights and best practices for effective coding.",
            pdfUrl: "/Copie de php-01.pdf",
            totalPages: 19
        },
        {
            id: 10,
            title: "Algorithme de tri et algorithme de recherche",
            description: "This presentation covers various sorting and searching algorithms, providing insights and best practices for effective implementation.",
            pdfUrl: "/Algorithme de tri ​et algorithme de recherche​.pdf",
            totalPages: 34
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
                className="py-16 px-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <div className="max-w-6xl mx-auto">
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-12"
                    >
                        <h1 className="text-4xl font-bold text-[#884830] mb-4" style={{fontFamily: 'Acme'}}>
                            Presentations
                        </h1>
                        <h2 className="text-2xl font-semibold text-[#884830] mb-3">
                            Discover a Collection of Knowledge and Insights
                        </h2>
                        <p className="text-gray-700">
                            Explore a curated selection of my presentations, where ideas meet innovation. Dive into topics that showcase technical expertise, problem-solving strategies, and practical solutions—all crafted to inform, inspire, and empower.
                        </p>
                    </motion.div>

                    <div className="max-w-6xl mx-auto mb-16">
                        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                            <div className="grid grid-cols-12 gap-8 p-8">
                                {/* Left Page */}
                                <motion.div 
                                    className="col-span-5"
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
                                            src={`${presentations[8].pdfUrl}#page=1&view=FitH&toolbar=0&navpanes=0`}
                                            className="w-full h-full border-none"
                                            title={`${presentations[8].title} - Page 1`}
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
                                    className="col-span-5"
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
                                            src={`${presentations[8].pdfUrl}#page=2&view=FitH&toolbar=0&navpanes=0`}
                                            className="w-full h-full border-none"
                                            title={`${presentations[8].title} - Page 2`}
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
                                    className="col-span-2"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3 }}
                                >
                                    <div className="h-full flex flex-col justify-between">
                                        <div>
                                            <h3 className="text-xl font-bold text-[#884830] mb-3">
                                                {presentations[8].title}
                                            </h3>
                                            <p className="text-gray-600 text-sm mb-4">
                                                {presentations[8].description}
                                            </p>
                                            <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                                                <FontAwesomeIcon icon={faBook} />
                                                <span>{presentations[8].totalPages} pages</span>
                                            </div>
                                        </div>
                                        
                                        <motion.a
                                            href={presentations[8].pdfUrl}
                                            download
                                            className="inline-flex items-center justify-center bg-gradient-to-r from-[#884830] to-[#CE7857] 
                                                     text-white px-4 py-3 rounded-xl shadow-md hover:shadow-lg transition-all duration-300
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

                    <div className="grid grid-cols-7 gap-6">
                        <motion.div
                            className="bg-white rounded-xl shadow-lg overflow-hidden col-span-5 relative"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            whileHover={{ y: -5 }}
                            onClick={() => openModal(presentations[currentPresentation])}
                        >
                            <div className="relative bg-white p-6" style={{ overflow: 'hidden' }}>
                                <div className="w-full h-[400px] overflow-hidden bg-white rounded-lg border border-gray-200">
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
                                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 text-center">
                                    <div className="text-gray-600 text-lg mb-2 animate-bounce font-semibold drop-shadow-md">
                                        Click to see
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        <div className="p-6 bg-white rounded-xl shadow-lg col-span-2">
                            <h3 className="text-xl font-bold text-gray-800 mb-2">
                                {presentations[currentPresentation].title}
                            </h3>
                            <p className="text-gray-600 mb-4">
                                {presentations[currentPresentation].description}
                            </p>
                            <a
                                href={presentations[currentPresentation].pdfUrl}
                                download
                                className="inline-flex items-center bg-[#884830] text-white px-4 py-2 rounded-full shadow-md hover:bg-[#CE7857] transition-colors"
                            >
                                <FontAwesomeIcon icon={faDownload} className="mr-2" />
                                Download PDF
                            </a>
                        </div>
                    </div>

                    <div className="flex justify-center mt-6">
                        <motion.button
                            onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
                            className="text-gray-600 hover:text-gray-800 disabled:text-gray-300 p-3 text-lg rounded-full"
                            disabled={currentPage === 1}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <FontAwesomeIcon icon={faChevronLeft} />
                        </motion.button>
                        <span className="text-lg text-gray-600 min-w-[90px] text-center font-bold mx-4 my-2">
                            {currentPage} / {presentations[currentPresentation].totalPages}
                        </span>
                        <motion.button
                            onClick={() => handlePageChange(Math.min(presentations[currentPresentation].totalPages, currentPage + 1))}
                            className="text-gray-600 hover:text-gray-800 disabled:text-gray-300 p-3 text-lg rounded-full"
                            disabled={currentPage === presentations[currentPresentation].totalPages}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <FontAwesomeIcon icon={faChevronRight} />
                        </motion.button>
                    </div>

                    {/* Modal for PDF */}
                    {isModalOpen && modalPresentation && (
                        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                            <div className="bg-white rounded-lg shadow-lg overflow-hidden w-11/12 max-w-3xl">
                                <div className="flex justify-end p-4">
                                    <button onClick={closeModal} className="text-gray-600 hover:text-gray-800">
                                        Close
                                    </button>
                                </div>
                                <div className="p-4">
                                    <iframe
                                        src={`${modalPresentation.pdfUrl}#view=FitH&toolbar=0&navpanes=0`}
                                        className="w-full h-[80vh] border-none"
                                        title={`${modalPresentation.title} - Full View`}
                                    />
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </motion.div>
            <Footer />
            <style jsx>{`
                .hide-scrollbar {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
                .hide-scrollbar::-webkit-scrollbar {
                    display: none;
                }
            `}</style>
        </>
    );
} 