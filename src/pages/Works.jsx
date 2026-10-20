import Header from "../components/Header";
import Footer from "../components/Footer";
import Works from "../components/works/works";
import Projects from "../components/works/Projects";
import "../index.css";
import { motion } from 'framer-motion';
import StarAnimation from "../components/StarAnimation";

export default function WorksPage() {
    return (
        <>
            <div className="App relative">
                <Header/>
                <div className="relative overflow-x-clip">
                    <StarAnimation />
                    <Projects/>
                    <Works/>
                </div>
                
                <motion.button
                    className="fixed bottom-4 right-4 sm:bottom-8 sm:right-8 
                             bg-[#884830] text-white p-3 sm:p-4 rounded-full 
                             shadow-lg hover:shadow-xl text-lg sm:text-xl z-50"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    aria-label="Scroll to top"
                >
                    ↑
                </motion.button>
            </div>
            <Footer/>
        </>
    );
}