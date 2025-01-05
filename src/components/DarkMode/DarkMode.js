import React from 'react';
import { useTheme } from '~/context/ThemeContext';

const DarkMode = () => {
    const { theme, toggleTheme } = useTheme();

    return <span onClick={toggleTheme}>{theme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}</span>;
};

export default DarkMode;
