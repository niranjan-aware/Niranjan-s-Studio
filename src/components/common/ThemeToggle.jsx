// src/components/common/ThemeToggle.jsx
import React from 'react';
import { useTheme } from '../../hooks/useTheme';

export default function ThemeToggle({ className = '' }) {
  const { theme, toggleTheme } = useTheme();

  const handleToggle = () => {
    console.log('Theme toggle clicked, current theme:', theme);
    toggleTheme();
  };

  return (
    <button
      onClick={handleToggle}
      className={`
        relative w-14 h-7 rounded-full border transition-all duration-300 ease-in-out
        focus:outline-none focus:ring-2 focus:ring-blue-500/50
        hover:scale-110 transform
        ${theme === 'dark' 
          ? 'bg-slate-700 border-slate-600' 
          : 'bg-gray-200 border-gray-300'
        }
        ${className}
      `}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      type="button"
    >
      {/* Toggle track background */}
      <div 
        className={`absolute inset-1 rounded-full transition-all duration-300 ${
          theme === 'dark' 
            ? 'bg-gradient-to-r from-blue-500 to-blue-600' 
            : 'bg-gradient-to-r from-blue-400 to-blue-500'
        }`}
      />
      
      {/* Toggle thumb */}
      <div
        className={`
          absolute top-1 w-5 h-5 rounded-full shadow-lg
          transition-all duration-300 ease-in-out transform
          flex items-center justify-center
          ${theme === 'dark' 
            ? 'translate-x-7 bg-gray-900' 
            : 'translate-x-1 bg-white'
          }
        `}
      >
        {theme === 'light' ? (
          // Sun icon
          <svg className="w-3 h-3 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
              clipRule="evenodd"
            />
          </svg>
        ) : (
          // Moon icon
          <svg className="w-3 h-3 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
          </svg>
        )}
      </div>
    </button>
  );
}