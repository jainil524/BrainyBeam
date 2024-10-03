import React from 'react';
import { ThemeContext } from '../Themes/ThemeProvider';

import '/public/css/ThemeToggleButton.css';

const ThemeToggleButton = () => {
    const { theme, toggleTheme } = React.useContext(ThemeContext);

    const handleToggleTheme = () => {
        toggleTheme();
    }

    return (
        <div className={`theme-toggle ${theme}`} onClick={handleToggleTheme}>
            <div className={`moon ${theme=="light"? "" : "active"}`}>
                <div className="moon-crescent"></div>
            </div>
            <div className={`sun ${theme=="dark"? "": "active"}`}>
                <div className="sun-body"></div>
                <div className="sun-ray"></div>
                <div className="sun-ray"></div>
                <div className="sun-ray"></div>
                <div className="sun-ray"></div>
                <div className="sun-ray"></div>
                <div className="sun-ray"></div>
                <div className="sun-ray"></div>
                <div className="sun-ray"></div>
            </div>
        </div>
    );
};

export default ThemeToggleButton;
