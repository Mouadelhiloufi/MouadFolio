import Header from "../components/Header";
import Footer from "../components/Footer";
import Works from "../components/works/works";
import Websites from "../components/works/Websites";
import "../index.css";
import { motion } from 'framer-motion';
import StarAnimation from "../components/StarAnimation";

export default function WorksPage() {
    return (
        <>
            <div className="App relative">
                <Header/>
                <div className="relative">
                    <StarAnimation />
                    <Works/>
                    <Websites/>
                </div>
                
                <motion.button
                    className="fixed bottom-8 right-8 bg-[#884830] text-white p-4 rounded-full shadow-lg hover:shadow-xl"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                >
                    ↑
                </motion.button>
            </div>
            <Footer/>
        </>
    );
}