import React, { createContext, useState, useEffect } from 'react';

// Create the context
const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('dark'); // Default theme

    // On component mount, check for saved theme in local storage
    useEffect(() => {
        const savedTheme = localStorage.getItem('app-theme');
        if (savedTheme) {
            setTheme(savedTheme);
        }
    }, []);

    // When the theme changes, save it to local storage
    useEffect(() => {
        localStorage.setItem('app-theme', theme);
        document.body.className = theme; // Apply theme class to body
    }, [theme]);

    // Toggle theme between light and dark
    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export { ThemeProvider, ThemeContext };
