import React, { useState } from 'react';
import DarkModeToggle from "react-dark-mode-toggle";
import './hero.css';

const Hero = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const handleDarkModeToggle = () => {
        setIsDarkMode(prevMode => !prevMode);
        // Toggle dark mode on the body element
        document.body.classList.toggle('dark-mode');
    };

    return (
        <div id='Home'>
            <div className={`hero ${isDarkMode ? 'dark-mode' : ''}`}>
                <h1><span><i className="fa-brands fa-unity" id='hero-logo'></i></span></h1>
                <h1 className='shine-h1'>CHAITANYA KUMAR</h1>
                <h2 className='shine-h2'>FRONT-END DEVELOPER</h2>
                <a href="./Annem Chaitanya Kumar Resume.pdf" download className="btn btn2">Resume</a>
                <DarkModeToggle
                    onChange={handleDarkModeToggle}
                    checked={isDarkMode}
                    size={80}
                />
            </div>
        </div>
    );
}

export default Hero;
