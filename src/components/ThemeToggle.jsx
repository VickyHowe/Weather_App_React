import React from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';

const ThemeToggle = ({ DarkMode, toggleTheme }) => {
  return (
    <button onClick={toggleTheme}>
      <div className="flex items-center">
        {DarkMode ? <FaSun size={24} /> : <FaMoon size={24} />}
        <span className="ml-2">{DarkMode ? 'Light Mode' : 'Dark Mode'}</span>
      </div>
    </button>
  );
};

export default ThemeToggle;