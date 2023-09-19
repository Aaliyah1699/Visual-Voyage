/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useState, useEffect } from 'react';

const AppContext = createContext();

// Determine initial dark mode preference
const getInitialDarkMode = () => {
    const prefersDarkMode = window.matchMedia(
        '(prefers-color-scheme:dark)'
    ).matches;
    const storedDarkMode = localStorage.getItem('darkTheme') === 'true';

    return storedDarkMode || prefersDarkMode;
};

// Provider component for the AppContext
export const AppProvider = ({ children }) => {
    // State for dark mode and search term
    const [isDarkTheme, setIsDarkTheme] = useState(getInitialDarkMode());
    const [searchTerm, setSearchTerm] = useState('halloween');

    // Function to toggle dark mode
    const toggleDarkTheme = () => {
        const newDarkTheme = !isDarkTheme;
        setIsDarkTheme(newDarkTheme);
        localStorage.setItem('darkTheme', newDarkTheme);
    };

    // Apply dark mode to the body using useEffect
    useEffect(() => {
        document.body.classList.toggle('dark-theme', isDarkTheme);
    }, [isDarkTheme]);

    // Render the AppContext.Provider to provide context values
    return (
        <AppContext.Provider
            value={{ isDarkTheme, toggleDarkTheme, searchTerm, setSearchTerm }}
        >
            {children}
        </AppContext.Provider>
    );
};

// custom hook to access the AppContext
export const useGlobalContext = () => useContext(AppContext);
