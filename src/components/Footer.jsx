import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const GITHUB = 'https://github.com/Mouadelhiloufi';
const EMAIL = 'mouad.elhiloufi4@gmail.com';

function Footer() {
    return (
        <section className="bg-[#3C3535] text-white py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8 rounded-lg">
            <div className="max-w-6xl mx-auto">
                {/* Main Content */}
                <div className="mb-12 sm:mb-16 md:mb-20">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-3">
                        Travaillons ensemble.
                    </h2>
                    <p className="text-sm sm:text-base md:text-lg">
                        Un stage, un projet web ou une collaboration ? Je suis disponible pour en discuter.
                    </p>
                </div>

                {/* Contact Links */}
                <div className="flex flex-col sm:flex-row justify-between items-start
                               sm:items-center gap-4 sm:gap-0 mb-12 sm:mb-16 md:mb-20">
                    {/* Left Side */}
                    <div className="flex items-center space-x-2">
                        <span>→</span>
                        <a href="/contact" className="hover:underline text-sm sm:text-base">
                            Me contacter
                        </a>
                    </div>

                    {/* Right Side */}
                    <div className="text-left sm:text-right">
                        <div className="mb-2 text-sm sm:text-base">
                            <a href={GITHUB} target="_blank" rel="noopener noreferrer" className="hover:underline">GitHub</a>
                        </div>
                        <a href={`mailto:${EMAIL}`}
                           className="hover:underline text-xs sm:text-sm md:text-base break-all">
                            {EMAIL}
                        </a>
                    </div>
                </div>

                {/* Bottom Text */}
                <div className="text-center text-xs sm:text-sm">
                    <div className="flex justify-center space-x-3 sm:space-x-4 mb-3 sm:mb-4">
                        <a
                            href={GITHUB}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub"
                            className="text-white hover:text-gray-300 transition-colors"
                        >
                            <FontAwesomeIcon icon={faGithub} size="lg" />
                        </a>
                        <a
                            href={`mailto:${EMAIL}`}
                            aria-label="Email"
                            className="text-white hover:text-gray-300 transition-colors"
                        >
                            <FontAwesomeIcon icon={faEnvelope} size="lg" />
                        </a>
                    </div>
                    <p className="mt-2 sm:mt-4">© {new Date().getFullYear()} Mouad El Hiloufi · Développeur Full Stack</p>
                </div>
            </div>
        </section>
    );
}

export default Footer;
