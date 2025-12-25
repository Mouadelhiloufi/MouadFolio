import React, { useState, useMemo } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Websites = () => {
    const projects = [
      {
        id: '00',
        title: 'MécaConnect',
        description: 'Plateforme web pour connecter des mécaniciens freelances 🚗🔧 et des entreprises de transport ou propriétaires d\'autocars 🚌. Elle permet aux mécaniciens de gérer leurs profils, disponibilités, tarifs, et de recevoir des demandes d\'intervention, et aux clients de réserver des services, recevoir des devis, et effectuer des paiements sécurisés 💳',
        tags: ['Laravel', 'Blade', 'Pgsql', 'Tailwind'],
        github: 'https://github.com/ISTIFANO/Mec-Services',
        image: '/0615.mp4'
      },
      {
        id: '01',
        title: 'ClickVente',
        description: 'Ce projet consiste à développer une application web e-commerce en Laravel avec PostgreSQL 🛒. La première phase se concentre sur l\'authentification 🔐, la gestion des rôles 👥, la gestion des produits 🛍️ et l\'ajout au panier 🛒, sans finaliser le processus de commande.',
        tags: ['Laravel', 'Blade', 'Mysql', 'Tailwind'],
        github: 'https://github.com/ISTIFANO/ClickVente',
        image: '/playstation.png'
      },
      {
        id: '02',
        title: 'PHP MVC Framework',
        description: 'PHP MVC Framework apprend à construire un framework MVC personnalisé en PHP, en abordant des sujets tels que le routage, les contrôleurs, les modèles, la validation des formulaires, l authentification des utilisateurs et l intégration de Docker avec MySQL.',
        tags: ['PHP', 'MVC', 'Mysql', 'Tailwind','Docker'],
        github: 'https://github.com/ISTIFANO/Build-PHP-MVC-Framework',
        image: '/mvc.png'
      },
       {
        id: '03',
        title: 'Learnify',
        description: 'Learnify est une plateforme de cours en ligne innovante 🎓, offrant un système interactif et personnalisé 📚, conçu pour répondre aux besoins des étudiants et enseignants 👩‍🏫👨‍🏫. Une expérience flexible et engageante pour réussir ensemble 🚀.',
        tags: ['PHP', 'MVC', 'Mysql', 'Tailwind'],
        github: 'https://github.com/ISTIFANO/learnify-elearning-platform',
        image: '/udemy.png'
      }
    ];

  const [activeProject, setActiveProject] = useState(0);
  const [selectedTags, setSelectedTags] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  // Get all unique tags from projects
  const allTags = useMemo(() => {
    const tags = new Set();
    projects.forEach(project => {
      project.tags.forEach(tag => tags.add(tag));
    });
    return Array.from(tags);
  }, [projects]);

  // Filter projects based on selected tags
  const filteredProjects = useMemo(() => {
    if (selectedTags.length === 0) return projects;
    return projects.filter(project =>
      selectedTags.every(tag => project.tags.includes(tag))
    );
  }, [projects, selectedTags]);

  const toggleTag = (tag) => {
    setSelectedTags(prev =>
      prev.includes(tag)
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
    setActiveProject(0); // Reset active project when filters change
  };

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const ImageModal = ({ image, onClose }) => {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.5 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0.5 }}
          className="relative max-w-7xl max-h-[90vh] mx-4"
          onClick={e => e.stopPropagation()}
        >
          {image.endsWith('.mp4') ? (
            <video
              src={image}
              className="max-h-[90vh] rounded-lg"
              autoPlay
              loop
              muted
              playsInline
              controls
            />
          ) : (
            <img
              src={image}
              alt="Project Preview"
              className="max-h-[90vh] rounded-lg"
            />
          )}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white bg-[#884830] rounded-full p-2
                     hover:bg-[#CE7857] transition-colors"
          >
            <FontAwesomeIcon icon={faXmark} className="w-6 h-6" />
          </button>
        </motion.div>
      </motion.div>
    );
  };

  return (
    <section className="py-8 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
       
                    <motion.h3 
                        className="text-xl sm:text-2xl font-bold text-[#884830] mb-6 sm:mb-8 
                                  ml-0 sm:ml-4 md:ml-6 lg:ml-12 xl:ml-24" 
                        style={{fontFamily: 'Acme'}}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                    >
                        Websites I've Realized
                    </motion.h3>
        <p className="text-sm sm:text-base md:text-lg text-gray-700 mb-6 sm:mb-8 px-2 sm:px-0">
          Here are websites I've developed, highlighting my expertise in web development. Each project demonstrates 
          my ability to build responsive, functional, and user-friendly websites while implementing effective coding 
          practices and modern technologies.
        </p>

        {/* Tags Filter */}
        <div className="mb-6 sm:mb-8">
          <h3 className="text-base sm:text-lg font-semibold text-[#884830] mb-2 sm:mb-3">
            Filter by technology:
          </h3>
          <div className="flex flex-wrap gap-2">
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => toggleTag(tag)}
                className={`px-3 py-1 rounded-full text-sm transition-all duration-300 flex items-center gap-2
                  ${selectedTags.includes(tag)
                    ? 'bg-[#884830] text-white'
                    : 'bg-[#FFE5DD] text-[#884830] hover:bg-[#884830] hover:text-white'
                  }`}
              >
                {tag}
                {selectedTags.includes(tag) && (
                  <FontAwesomeIcon icon={faXmark} className="h-3 w-3" />
                )}
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 sm:gap-8">
          {/* Project List */}
          <div className="lg:w-1/3">
            {filteredProjects.length === 0 ? (
              <div className="text-gray-500 italic p-4">
                No projects match all selected filters
              </div>
            ) : (
              filteredProjects.map((project, index) => (
                <motion.div
                  ref={ref}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  key={project.id}
                  className={`cursor-pointer p-3 sm:p-4 border-l-4 mb-3 sm:mb-4 transition-all duration-300 ${
                    activeProject === index 
                      ? 'border-[#884830] bg-[#FFE5DD]' 
                      : 'border-transparent hover:border-[#CE7857] hover:bg-[#FFE5DD]/50'
                  }`}
                  onClick={() => setActiveProject(index)}
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-lg sm:text-xl md:text-2xl font-bold text-[#884830]">
                      {project.id}
                    </span>
                    <h3 className="text-base sm:text-lg md:text-xl font-semibold text-[#884830]" 
                        style={{fontFamily: 'Acme'}}>
                      {project.title}
                    </h3>
                  </div>
                </motion.div>
              ))
            )}
          </div>

          {/* Project Details */}
          {filteredProjects.length > 0 && (
            <div className="lg:w-2/3">
              <div 
                className="relative aspect-video rounded-lg overflow-hidden mb-4 sm:mb-6 
                             border border-[#FFE5DD]
                             hover:border-[#884830]/30
                             transition-all duration-300
                             cursor-pointer"
                onClick={() => setSelectedImage(filteredProjects[activeProject].image)}
              >
                {filteredProjects[activeProject].image.endsWith('.mp4') ? (
                  <video 
                    src={filteredProjects[activeProject].image}
                    alt={filteredProjects[activeProject].title}
                    className="w-full h-full object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                  />
                ) : (
                  <img 
                    src={filteredProjects[activeProject].image}
                    alt={filteredProjects[activeProject].title}
                    className="w-full h-full object-cover
                             transform transition-transform duration-500 ease-in-out
                             hover:scale-95"
                  />
                )}
              </div>

              <div className="space-y-3 sm:space-y-4">
                <h3 className="text-xl sm:text-2xl font-bold text-[#884830]" 
                    style={{fontFamily: 'Acme'}}>
                  {filteredProjects[activeProject].title}
                </h3>
                
                <p className="text-sm sm:text-base text-gray-700">
                  {filteredProjects[activeProject].description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {filteredProjects[activeProject].tags.map((tag, index) => (
                    <span 
                      key={index}
                      className="px-2 sm:px-3 py-1 bg-[#884830] text-white rounded-full text-xs sm:text-sm"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                <div className="pt-3 sm:pt-4">
                  <a 
                    href={filteredProjects[activeProject].github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 
                             bg-[#884830] text-white rounded-lg text-sm sm:text-base
                             hover:bg-[#CE7857] transition-colors shadow-md hover:shadow-lg"
                  >
                    <FontAwesomeIcon icon={faGithub} />
                    View Code
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      {selectedImage && (
        <ImageModal 
          image={selectedImage} 
          onClose={() => setSelectedImage(null)} 
        />
      )}
    </section>
  );
};

export default Websites;
