import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import './navbar.css';
import '../hero';
import '../About';
import '../projects';

export default () => {
    const [greeting, setGreeting] = useState('');

    useEffect(() => {
        const time = new Date().getHours();
        let greetingMessage;

        if (time >= 5 && time < 12) {
            greetingMessage = "Good Morning ☀️";
        } else if (time >= 12 && time < 16) {
            greetingMessage = "Good Afternoon 🌞";
        } else if (time >= 16 && time < 19) {
            greetingMessage = "Good Evening 🌞";
        } else {
            greetingMessage = "Good Night 🌙";
        }

        setGreeting(greetingMessage);
    }, []);

    return (
        <div className="navbar" id='Navbar'>
            <h1 id="greeting">{greeting}</h1>
            <ul>
                <li>
                    <Tooltip title="Home" arrow={false}>
                       <a href='#Home'><i className="fa-solid fa-house"></i></a>
                    </Tooltip>
                    <br />
                </li>
                <li>
                    <Tooltip title="About" arrow={false}>
                    <a href='#About'><i className="fa-regular fa-id-card"></i></a>
                    </Tooltip>
                    <br />
                </li>
                <li>
                    <Tooltip title="Work" arrow={false}>
                    <a href='#Work'><i className="fa-solid fa-briefcase"></i></a>
                    </Tooltip>
                    <br />
                </li>
                <li>
                    <Tooltip title="Contact" arrow={false}>
                    <a href='#Contact'><i class="fa-solid fa-square-phone-flip"></i></a>
                    </Tooltip>
                    <br />
                </li>
            </ul>
        </div>
    )
}
