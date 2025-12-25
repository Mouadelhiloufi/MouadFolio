import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedin, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

function Footer() {
    return (
        <section className="bg-[#3C3535] text-white py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8 rounded-lg">
            <div className="max-w-6xl mx-auto">
                {/* Main Content */}
                <div className="mb-12 sm:mb-16 md:mb-20">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-3">
                        Let's work together.
                    </h2>
                    <p className="text-sm sm:text-base md:text-lg">
                        Let's work together to build something great.
                    </p>
                </div>

                {/* Contact Links */}
                <div className="flex flex-col sm:flex-row justify-between items-start 
                               sm:items-center gap-4 sm:gap-0 mb-12 sm:mb-16 md:mb-20">
                    {/* Left Side */}
                    <div className="flex items-center space-x-2">
                        <span>→</span>
                        <a href="/contact" className="hover:underline text-sm sm:text-base">
                            Say Hello
                        </a>
                    </div>

                    {/* Right Side */}
                    <div className="text-left sm:text-right">
                        <div className="mb-2 flex flex-wrap gap-1 sm:gap-0 text-sm sm:text-base">
                            <a href="https://www.linkedin.com/in/aamirelamiri/" 
                               className="hover:underline">LinkedIn</a>
                            <span className="hidden sm:inline"> / </span>
                            <a href="https://www.instagram.com/aamir_el_amiri" 
                               className="hover:underline">Instagram</a>
                            <span className="hidden sm:inline"> / </span>
                            <a href="https://x.com/" className="hover:underline">Twitter</a>
                        </div>
                        <a href="mailto:aamirelamiri3@gmail.com" 
                           className="hover:underline text-xs sm:text-sm md:text-base break-all">
                            aamirelamiri3@gmail.com
                        </a>
                    </div>
                </div>

                {/* Bottom Text */}
                <div className="text-center text-xs sm:text-sm">
                    <div className="flex justify-center space-x-3 sm:space-x-4 mb-3 sm:mb-4">
                        <a 
                            href="https://www.linkedin.com/in/aamirelamiri/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-white hover:text-gray-300 transition-colors"
                        >
                            <FontAwesomeIcon icon={faLinkedin} size="lg" />
                        </a>
                        <a 
                            href="https://github.com/ISTIFANO" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-white hover:text-gray-300 transition-colors"
                        >
                            <FontAwesomeIcon icon={faGithub} size="lg" />
                        </a>
                        <a 
                            href="https://www.instagram.com/aamir_el_amiri" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-white hover:text-gray-300 transition-colors"
                        >
                            <FontAwesomeIcon icon={faInstagram} size="lg" />
                        </a>
                        <a 
                            href="mailto:aamirelamiri3@gmail.com" 
                            className="text-white hover:text-gray-300 transition-colors"
                        >
                            <FontAwesomeIcon icon={faEnvelope} size="lg" />
                        </a>
                    </div>
                    <p className="mt-2 sm:mt-4">Aamir El Amiri</p>
                </div>
            </div>
        </section>
    );
}

export default Footer;
