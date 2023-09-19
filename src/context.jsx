/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { createContext, useContext, useState, useEffect } from 'react';

const AppContext = createContext();

const getInitialDarkMode = () => {
    const prefersDarkMode = window.matchMedia(
        '(prefers-color-scheme:dark)'
    ).matches;
    const storedDarkMode = localStorage.getItem('darkTheme') === 'true';

    return storedDarkMode || prefersDarkMode;
};

export const AppProvider = ({ children }) => {
    
};

// custom hook
export const useGlobalContext = () => useContext(AppContext);
