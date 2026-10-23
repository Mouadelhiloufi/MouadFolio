import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faXmark, faArrowUpRightFromSquare, faStar, faTrophy } from '@fortawesome/free-solid-svg-icons';
import { motion, AnimatePresence } from 'framer-motion';

const GITHUB = 'https://github.com/Mouadelhiloufi/';

const projects = [
  {
    title: 'e-Diagnostic-Pro',
    category: 'Java / Spring',
    featured: true,
    description: 'Plateforme de télé-expertise médicale qui optimise le parcours patient entre infirmiers, médecins généralistes et spécialistes. Authentification sécurisée (BCrypt) et persistance JPA/Hibernate.',
    tags: ['Java', 'Jakarta EE', 'JSP / JSTL', 'Servlets', 'JPA / Hibernate', 'PostgreSQL'],
    repo: 'e-Diagnostic-Pro',
    image: '/projects/e-diagnostic-pro.webp',
  },
  {
    title: 'PlayStayHome',
    category: 'Laravel',
    featured: true,
    description: 'Application web de location de consoles, jeux et manettes : réservations, suivi du matériel en temps réel et notifications, dans le respect des règles de disponibilité.',
    tags: ['Laravel', 'PHP', 'PostgreSQL', 'JavaScript', 'Tailwind CSS', 'Blade'],
    repo: 'PLAYSTAYHOME',
    image: '/projects/playstayhome.webp',
  },
  {
    title: 'WeGrow',
    category: 'Java / Spring',
    featured: true,
    description: 'API REST pour les Ressources Humaines : gestion des départements et des employés, règles métier (suppression d’un département vide uniquement, unicité des noms et matricules).',
    tags: ['Java 17', 'Spring MVC', 'Spring Data JPA', 'Hibernate', 'PostgreSQL', 'Tomcat'],
    repo: 'WeGrow',
    image: '/projects/wegrow.webp',
  },
  {
    title: 'JobConnect',
    category: 'Laravel',
    description: 'Plateforme qui met en relation recruteurs et chercheurs d’emploi : authentification sécurisée, deux rôles, gestion des profils et recherche simple.',
    tags: ['Laravel', 'Livewire', 'Spatie Permission', 'Eloquent', 'MySQL'],
    repo: 'JobConnect',
    image: '/projects/jobconnect.webp',
  },
  {
    title: 'Al Baraka Bank',
    category: 'Java / Spring',
    description: 'Application Java 17 d’analyse des transactions bancaires : comptes, virements, détection des opérations suspectes, comptes inactifs, top clients et rapports mensuels.',
    tags: ['Java 17', 'Stream API', 'Records', 'Sealed classes', 'JDBC', 'PostgreSQL'],
    repo: 'Albarakabanque',
    image: '/projects/albaraka-bank.webp',
  },
  {
    title: 'EasyColoc',
    category: 'Laravel',
    description: 'Gestion des dépenses partagées entre colocataires : invitations, ajout de dépenses, calcul automatique des soldes et remboursements, système de réputation et dashboard admin.',
    tags: ['Laravel', 'PHP', 'Blade', 'Tailwind CSS'],
    repo: 'EasyColoc',
    image: '/projects/easycoloc.webp',
  },
  {
    title: 'StaffSpace',
    category: 'Front-end',
    description: 'Gestion interactive du personnel sur un plan d’étage : ajout d’employés, affectation aux 6 zones du bâtiment selon les rôles autorisés, version desktop et mobile.',
    tags: ['JavaScript', 'HTML', 'Tailwind CSS'],
    repo: 'StaffSpace',
    demo: 'https://staff-space.vercel.app',
    image: '/projects/staffspace.webp',
  },
  {
    title: 'CoachSport',
    category: 'PHP',
    description: 'Plateforme de coaching sportif en PHP MVC : les coachs créent des séances, les sportifs les réservent via une authentification sécurisée. Requêtes SQL avec jointures complexes.',
    tags: ['PHP', 'MVC', 'PostgreSQL', 'Tailwind CSS'],
    repo: 'Coach-PRO-V3-MVC',
    image: '/projects/coachsport.webp',
  },
  {
    title: 'Buy Tickets',
    category: 'PHP',
    description: 'Billetterie sportive en ligne : consultation des matchs, achat de billets, création d’événements par les organisateurs et supervision par l’administrateur.',
    tags: ['PHP', 'POO', 'MySQL'],
    repo: 'Buy-Tickets-',
    image: '/projects/buy-tickets.webp',
  },
  {
    title: 'SubTrack',
    category: 'Java / Spring',
    description: 'Gestion d’abonnements et suivi des échéances financières, avec une architecture en couches, la Stream API et une persistance en mémoire (DAO / Collections).',
    tags: ['Java 8', 'Stream API', 'DAO', 'Architecture en couches'],
    repo: 'subtrack',
    image: '/projects/subtrack.webp',
  },
  {
    title: 'NexaBank',
    category: 'Java / Spring',
    description: 'Prototype bancaire en console (POO) : espaces Client et Gestionnaire, transactions, exceptions métier et génération de relevés en fichiers .txt.',
    tags: ['Java', 'POO', 'Exceptions'],
    repo: 'NexaBank',
    image: '/projects/nexabank.webp',
  },
  {
    title: 'FitManager',
    category: 'PHP',
    description: 'Gestion des cours et équipements d’une salle de sport : ajout, modification, suppression et tableau de bord avec statistiques sur la répartition des ressources.',
    tags: ['PHP', 'MySQL', 'JavaScript'],
    repo: 'Fit-manager',
    image: '/projects/fitmanager.webp',
  },
  {
    title: 'Plateforme de réservation',
    category: 'Front-end',
    description: 'Application de réservation avec calendrier mensuel : ajout de réservations par jour avec nom, horaire et type de réservation.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    repo: 'Plateform-de-reservation',
    demo: 'https://plateform-de-reservation.vercel.app',
    image: '/projects/reservation.webp',
  },
];

const categories = ['Tous', 'Java / Spring', 'Laravel', 'PHP', 'Front-end'];

const isVideo = (src) => src.endsWith('.mp4');

function Media({ src, alt, className }) {
  return isVideo(src) ? (
    <video src={src} className={className} muted loop playsInline preload="metadata"
           onMouseEnter={(e) => e.currentTarget.play()} onMouseLeave={(e) => e.currentTarget.pause()} />
  ) : (
    <img src={src} alt={alt} className={className} loading="lazy" />
  );
}

function Projects() {
  const [category, setCategory] = useState('Tous');
  const [preview, setPreview] = useState(null);

  const visible = category === 'Tous' ? projects : projects.filter((p) => p.category === category);

  return (
    <section className="py-6 sm:py-10 px-0 sm:px-4 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#884830] mb-3 sm:mb-4"
            style={{fontFamily: 'Acme'}}>
          Mes projets
        </h1>
        <p className="text-sm sm:text-base md:text-lg text-gray-700 mb-6 sm:mb-8 max-w-3xl">
          Une sélection de mes projets GitHub : API REST en Java / Spring, applications Laravel, PHP MVC
          et interfaces JavaScript — plus de 20 projets réalisés à YouCode et en stage.
        </p>

        {/* Category filter */}
        <div className="flex gap-2 overflow-x-auto hide-scrollbar pb-2 mb-6 sm:mb-8 -mx-1 px-1">
          {categories.map((c) => (
            <button key={c} onClick={() => setCategory(c)}
                    className={`shrink-0 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300
                      ${category === c ? 'bg-[#884830] text-white shadow-md' : 'bg-[#FFE5DD] text-[#884830] hover:bg-[#F1AA76] hover:text-white'}`}>
              {c}
            </button>
          ))}
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          <AnimatePresence mode="popLayout">
            {visible.map((p) => (
              <motion.article key={p.title} layout
                              initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }}
                              transition={{ duration: 0.25 }}
                              className={`group flex flex-col bg-white rounded-2xl overflow-hidden border border-[#FFE5DD]
                                          shadow-md hover:shadow-2xl hover:-translate-y-1 transition-[box-shadow,transform] duration-300`}>
                <button className="relative aspect-[16/10] overflow-hidden bg-[#3C3535] text-left"
                        onClick={() => setPreview(p)} aria-label={`Aperçu ${p.title}`}>
                  <Media src={p.image} alt={p.title}
                         className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute top-3 right-3 flex flex-col items-end gap-1.5">
                    <span className="px-3 py-1 rounded-full bg-white/95 text-[#884830] text-xs font-bold shadow">
                      {p.category}
                    </span>
                    {p.featured && (
                      <span className="px-2.5 py-1 rounded-full bg-[#884830] text-white text-xs font-bold shadow">
                        <FontAwesomeIcon icon={faStar} className="mr-1" />À la une
                      </span>
                    )}
                  </div>
                </button>

                <div className="flex flex-col flex-1 p-5">
                  <h2 className="text-xl font-bold text-[#473D3D] mb-1" style={{fontFamily: 'Acme'}}>{p.title}</h2>
                  {p.badge && (
                    <p className="text-xs font-semibold text-[#CE7857] mb-2">
                      <FontAwesomeIcon icon={faTrophy} className="mr-1" />{p.badge}
                    </p>
                  )}
                  <p className="text-sm text-gray-700 leading-relaxed mb-4 flex-1">{p.description}</p>
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {p.tags.map((t) => (
                      <span key={t} className="px-2.5 py-1 rounded-full bg-[#FFE5DD] text-[#884830] text-xs font-semibold">{t}</span>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <a href={GITHUB + p.repo} target="_blank" rel="noopener noreferrer"
                       className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#343434] text-white
                                  text-sm font-semibold hover:bg-[#884830] transition-colors">
                      <FontAwesomeIcon icon={faGithub} /> Code
                    </a>
                    {p.demo && (
                      <a href={p.demo} target="_blank" rel="noopener noreferrer"
                         className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border-2 border-[#884830]
                                    text-[#884830] text-sm font-semibold hover:bg-[#884830] hover:text-white transition-colors">
                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} /> Démo live
                      </a>
                    )}
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        <div className="text-center mt-8 sm:mt-10">
          <a href="https://github.com/Mouadelhiloufi?tab=repositories" target="_blank" rel="noopener noreferrer"
             className="inline-flex items-center gap-2 text-[#884830] font-semibold hover:underline">
            <FontAwesomeIcon icon={faGithub} /> Voir tous mes dépôts sur GitHub →
          </a>
        </div>
      </div>

      <AnimatePresence>
        {preview && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                      className="fixed inset-0 z-[60] flex items-center justify-center bg-black/85 p-3 sm:p-6"
                      onClick={() => setPreview(null)}>
            <motion.div initial={{ scale: 0.9 }} animate={{ scale: 1 }} exit={{ scale: 0.9 }}
                        className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-xl"
                        onClick={(e) => e.stopPropagation()}>
              {(preview.gallery || [preview.image]).map((src) =>
                isVideo(src) ? (
                  <video key={src} src={src} className="w-full rounded-xl" autoPlay loop muted playsInline controls />
                ) : (
                  <img key={src} src={src} alt={preview.title} className="w-full rounded-xl mb-3" />
                )
              )}
              <button onClick={() => setPreview(null)} aria-label="Fermer l’aperçu"
                      className="absolute top-3 right-3 w-10 h-10 rounded-full bg-[#884830] text-white hover:bg-[#CE7857] transition-colors">
                <FontAwesomeIcon icon={faXmark} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default Projects;
