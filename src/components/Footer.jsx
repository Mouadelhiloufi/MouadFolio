import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedin, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

function Footer() {
    return (
        <section className="bg-[#3C3535] text-white py-16 px-8 rounded-lg">
            <div className="min-w-screen mx-auto">
                {/* Main Content */}
                <div className="mb-20">
                    <h2 className="text-4xl font-bold mb-3">Let's work together.</h2>
                    <p className="text-lg">Let's work together to build something great.</p>
                </div>

                {/* Contact Links */}
                <div className="flex justify-between items-start mb-20">
                    {/* Left Side */}
                    <div className="flex items-center space-x-2">
                        <span>→</span>
                        <a href="/contact" className="hover:underline">Say Hello</a>
                    </div>

                    {/* Right Side */}
                    <div className="text-right">
                        <div className="mb-2">
                            <a href="https://www.linkedin.com/in/baaziz-wissal-311a9526a/" className="hover:underline">LinkedIn</a>
                            {" / "}
                            <a href="https://www.instagram.com/baazizwissal/" className="hover:underline">Instagram</a>
                            {" / "}
                            <a href="https://x.com/baaziz_wissal?t=vHGTdTGowoQEANVtWeI1Jg&s=09" className="hover:underline">Twitter</a>
                        </div>
                        <a href="mailto:baazizwissal13@gmail.com" className="hover:underline">
                            baazizwissal13@gmail.com
                        </a>
                    </div>
                </div>

                {/* Bottom Text */}
                <div className="text-center text-sm">
                    <div className="flex justify-center space-x-4">
                        <a 
                            href="https://www.linkedin.com/in/baaziz-wissal-311a9526a/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-white hover:text-gray-300 transition-colors"
                        >
                            <FontAwesomeIcon icon={faLinkedin} size="lg" />
                        </a>
                        <a 
                            href="https://github.com/bwissal13" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-white hover:text-gray-300 transition-colors"
                        >
                            <FontAwesomeIcon icon={faGithub} size="lg" />
                        </a>
                        <a 
                            href="https://www.instagram.com/baazizwissal/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-white hover:text-gray-300 transition-colors"
                        >
                            <FontAwesomeIcon icon={faInstagram} size="lg" />
                        </a>
                        <a 
                            href="mailto:baazizwissal13@gmail.com" 
                            className="text-white hover:text-gray-300 transition-colors"
                        >
                            <FontAwesomeIcon icon={faEnvelope} size="lg" />
                        </a>
                    </div>
                    <p className="mt-4">baazizwissal</p>
                </div>
            </div>
        </section>
    );
}

export default Footer;
