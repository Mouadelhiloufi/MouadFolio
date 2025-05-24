import React, { useState, useEffect } from 'react';
import './App.css';
import './index.css';
import Router from './router/Router';
import MobileMessage from './components/MobileMessage';

function App() {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    if (isMobile) {
        return <MobileMessage />;
    }

    return (
        <div>
            <Router/>
        </div>
    );
}

export default App;

