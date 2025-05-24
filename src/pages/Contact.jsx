import React, { useState, useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLocationDot, faPaperPlane, faStar, faCheck, faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Contact() {
    const form = useRef();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [status, setStatus] = useState({ type: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
    }, []);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setStatus({ type: '', message: '' });

        try {
            const result = await emailjs.sendForm(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                form.current,
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            );

            if (result.text === 'OK') {
                setStatus({
                    type: 'success',
                    message: 'Message sent successfully! I will get back to you soon.'
                });
                setFormData({
                    name: '',
                    email: '',
                    subject: '',
                    message: ''
                });
            }
        } catch (error) {
            setStatus({
                type: 'error',
                message: 'Oops! Something went wrong. Please try again later.'
            });
            console.error('EmailJS Error:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <>
            <div className="App relative">
                <Header  />
            </div>
            <section className="min-h-screen py-16 px-4 bg-gradient-to-b from-white to-[#FFE5DD]/30">
                <div className="max-w-6xl mx-auto">
                    <motion.div 
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <h2 className="text-4xl font-bold text-[#884830] mb-4" style={{fontFamily: 'Acme'}}>
                            Let's Create Something Amazing Together
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Whether you have a project in mind or just want to chat, I'm always excited 
                            to connect with fellow creators and innovators.
                        </p>
                    </motion.div>

                    {/* Main Content Container */}
                    <div className="relative">
                        {/* Decorative Elements */}
                        <motion.div 
                            className="absolute -top-10 -left-10 text-[#FFE5DD] text-8xl opacity-20"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        >
                            <FontAwesomeIcon icon={faStar} />
                        </motion.div>

                        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden relative z-10">
                            <div className="grid lg:grid-cols-2">
                                {/* Left Side - Contact Info */}
                                <div className="bg-gradient-to-br from-[#884830] to-[#CE7857] p-12 text-white">
                                    <h3 className="text-2xl font-bold mb-8">Let's Connect</h3>
                                    <div className="space-y-6 mb-12">
                                        <div className="flex items-center gap-4">
                                            <div className="bg-white/10 p-3 rounded-lg">
                                                <FontAwesomeIcon icon={faEnvelope} className="w-6 h-6" />
                                            </div>
                                            <div>
                                                <p className="opacity-75 text-sm">Email</p>
                                                <a href="mailto:baazizwissal13@gmail.com" className="hover:underline">
                                                    baazizwissal13@gmail.com
                                                </a>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-4">
                                            <div className="bg-white/10 p-3 rounded-lg">
                                                <FontAwesomeIcon icon={faLocationDot} className="w-6 h-6" />
                                            </div>
                                            <div>
                                                <p className="opacity-75 text-sm">Location</p>
                                                <p>Youssoufia, Morocco</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <p className="text-sm opacity-75 mb-4">Find me on</p>
                                        <div className="flex gap-4">
                                            {[
                                                { icon: faLinkedin, url: 'https://www.linkedin.com/in/baaziz-wissal-311a9526a/' },
                                                { icon: faGithub, url: 'https://github.com/bwissal13' },
                                                { icon: faInstagram, url: 'https://www.instagram.com/baazizwissal/' }
                                            ].map((social, index) => (
                                                <motion.a
                                                    key={index}
                                                    href={social.url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="bg-white/10 p-3 rounded-lg hover:bg-white/20 transition-colors"
                                                    whileHover={{ y: -5 }}
                                                >
                                                    <FontAwesomeIcon icon={social.icon} className="w-6 h-6" />
                                                </motion.a>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Right Side - Contact Form */}
                                <div className="p-12">
                                    <form ref={form} onSubmit={handleSubmit} className="space-y-6">
                                        {/* Status Message */}
                                        {status.message && (
                                            <motion.div
                                                initial={{ opacity: 0, y: -10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                className={`p-4 rounded-lg ${
                                                    status.type === 'success' 
                                                        ? 'bg-green-50 text-green-800' 
                                                        : 'bg-red-50 text-red-800'
                                                }`}
                                            >
                                                <div className="flex items-center gap-2">
                                                    <FontAwesomeIcon 
                                                        icon={status.type === 'success' ? faCheck : faExclamationCircle}
                                                        className={status.type === 'success' ? 'text-green-400' : 'text-red-400'}
                                                    />
                                                    {status.message}
                                                </div>
                                            </motion.div>
                                        )}

                                        <div className="grid grid-cols-3 gap-6">
                                            <div className="relative col-span-1">
                                                <input
                                                    type="text"
                                                    name="name"
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    placeholder="Your Name"
                                                    className="w-full px-4 py-3 rounded-xl bg-[#FFE5DD]/10 border-2 border-[#884830]/20
                                                             focus:border-[#884830] transition-all duration-300 peer placeholder-transparent
                                                             hover:border-[#884830]/40"
                                                    required
                                                />
                                                <label className="absolute left-4 -top-2.5 bg-white px-2 text-sm text-[#884830]">
                                                    Name
                                                </label>
                                            </div>
                                            <div className="relative col-span-2">
                                                <input
                                                    type="email"
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    placeholder="Your Email"
                                                    className="w-full px-4 py-3 rounded-xl bg-[#FFE5DD]/10 border-2 border-[#884830]/20
                                                             focus:border-[#884830] transition-all duration-300 peer placeholder-transparent
                                                             hover:border-[#884830]/40"
                                                    required
                                                />
                                                <label className="absolute left-4 -top-2.5 bg-white px-2 text-sm text-[#884830]">
                                                    Email
                                                </label>
                                            </div>
                                        </div>

                                        <div className="relative">
                                            <input
                                                type="text"
                                                name="subject"
                                                value={formData.subject}
                                                onChange={handleChange}
                                                placeholder="Subject"
                                                className="w-full px-4 py-3 rounded-xl bg-[#FFE5DD]/10 border-2 border-[#884830]/20
                                                         focus:border-[#884830] transition-all duration-300 peer placeholder-transparent
                                                         hover:border-[#884830]/40"
                                                required
                                            />
                                            <label className="absolute left-4 -top-2.5 bg-white px-2 text-sm text-[#884830]">
                                                Subject
                                            </label>
                                        </div>

                                        <div className="relative">
                                            <textarea
                                                name="message"
                                                value={formData.message}
                                                onChange={handleChange}
                                                placeholder="Your Message"
                                                rows="4"
                                                className="w-full px-4 py-3 rounded-xl bg-[#FFE5DD]/10 border-2 border-[#884830]/20
                                                         focus:border-[#884830] transition-all duration-300 resize-none peer placeholder-transparent
                                                         hover:border-[#884830]/40"
                                                required
                                            ></textarea>
                                            <label className="absolute left-4 -top-2.5 bg-white px-2 text-sm text-[#884830]
                                                            transition-all duration-300">
                                                Message
                                            </label>
                                        </div>

                                        <motion.button
                                            type="submit"
                                            className="w-full bg-[#884830] text-white py-4 rounded-xl flex items-center justify-center gap-2
                                                     hover:bg-[#CE7857] transition-all duration-300 group disabled:opacity-50 
                                                     disabled:cursor-not-allowed"
                                            whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                                            whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                                            disabled={isSubmitting}
                                        >
                                            <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                                            <FontAwesomeIcon 
                                                icon={faPaperPlane} 
                                                className={`transform transition-transform ${
                                                    isSubmitting ? 'animate-pulse' : 'group-hover:translate-x-1 group-hover:-translate-y-1'
                                                }`}
                                            />
                                        </motion.button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
} 