import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPalette, faCode, faMagicWandSparkles, faArrowRight, faEye } from '@fortawesome/free-solid-svg-icons';
import ProjectsImgs from './ProjectsImgs';

function Works() {
    const [isDetailsVisible, setIsDetailsVisible] = useState(false);

    return (
        <section className="py-10 px-4 relative overflow-hidden">
            
            <div className="max-w-6xl mx-auto relative">
                {/* Main Title Section */}
                  <h2 className="text-4xl font-bold text-[#884830] mb-6 ml-10" 
                        style={{fontFamily: 'Acme'}}>
                        My Works
                    </h2>
            

                {/* Introduction Text */}
                <motion.div 
                    className="relative z-10 mb-16"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                >
                    <p className="text-gray-700 text-lg ">
                        Explore my creative journey through design and development. Each project 
                        represents a unique challenge and innovative solution.
                    </p>
                </motion.div>

                {/* Featured Design Section */}
                <div className="mb-20">
                    <motion.h3 
                        className="text-2xl font-bold text-[#884830] mb-8" 
                        style={{fontFamily: 'Acme', marginLeft: '90px'}}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                    >
                        Featured UI/UX Design
                    </motion.h3>

                    {/* Project Card */}
                    <motion.div 
                        className="relative group"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                    >
                        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                            {/* Project Header */}
                            <div className="bg-gradient-to-r from-[#FFE5DD] to-white p-8">
                                <div className="flex justify-between items-start mb-6">
                                    <div>
                                        <h4 className="text-2xl font-bold text-[#473D3D] mb-2" 
                                            style={{fontFamily: 'Acme'}}>
                                            Enterprise Management Dashboard
                                        </h4>
                                        <p className="text-[#884830]">UI/UX Design • Design System • Prototyping</p>
                                    </div>
                                    <motion.button
                                        className="bg-[#884830] text-white px-4 py-2 rounded-full flex items-center gap-2
                                                 hover:bg-[#CE7857] transition-colors"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        onClick={() => setIsDetailsVisible(!isDetailsVisible)}
                                    >
                                        <FontAwesomeIcon icon={faEye} />
                                        {isDetailsVisible ? 'Hide Design' : 'View Design'}
                                    </motion.button>
                                </div>

                                {/* Project Preview */}
                                <motion.div 
                                    className="relative rounded-lg overflow-hidden"
                                    initial={{ height: 0 }}
                                    animate={{ height: isDetailsVisible ? 'auto' : 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <ProjectsImgs />
                                </motion.div>
                            </div>

                            {/* Project Details */}
                            <div className="p-8">
                                <div className="grid grid-cols-3 gap-6 mb-6">
                                    {[
                                        {
                                            title: 'Design System',
                                            description: 'Comprehensive UI component library with consistent styling and reusable patterns'
                                        },
                                        {
                                            title: 'Responsive Layout',
                                            description: 'Fully adaptive interface that works seamlessly across all device sizes'
                                        },
                                        {
                                            title: 'Interactive Prototypes',
                                            description: 'High-fidelity prototypes with realistic interactions and animations'
                                        }
                                    ].map((feature, index) => (
                                        <motion.div 
                                            key={feature.title}
                                            className="bg-[#FFE5DD]/30 p-4 rounded-lg"
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.6 + (index * 0.1) }}
                                        >
                                            <h5 className="font-semibold text-[#884830] mb-2">{feature.title}</h5>
                                            <p className="text-sm text-gray-600">
                                                {feature.description}
                                            </p>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

export default Works;
