    import React from 'react';

    function Hero() {
        return (
            <section className="hero mb-14">
                <h1 className="hero-title">Hello</h1>
                <div className="hero-content">
                    <div className="hero-text">
                        <h2>I'm Aamir El Amiri</h2>
                        <h3>A Full-Stack Developer</h3>
                        <p>
                            I love building efficient, scalable systems and crafting seamless
                            user experiences across both frontend and backend technologies.
                        </p>
                        <a href="/works" className="cta-button">
                            <span className="arrow">→</span>
                            See My Works
                        </a>
                    </div>
                    <div className="hero-image">
                        <img src="/my.png" alt="Aamir El Amiri " />
                    </div>
                </div>
            </section>
        );
    }

    export default Hero;

