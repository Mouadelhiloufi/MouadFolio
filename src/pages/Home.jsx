import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Education from "../components/Education";
import Experience from "../components/Experience";
import Skills from "../components/Skills";
import Agile from "../components/Agile";
import Footer from "../components/Footer";  
import "../index.css";

export default function Home() {
    return (
        <>
        <div className="App">
            <Header/>
            <Hero/>
            <About/>
            <Education/>
            <Experience/>
            <Skills/>
            <Agile/>
        </div>
            <Footer/>
        </>
    );
}