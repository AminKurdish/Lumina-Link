import React, { useState } from 'react';
import { Settings, X, Moon, Sun, Palette, Globe } from 'lucide-react';
import { THEMES, UI_TEXTS } from '../constants';
import { ThemeConfig, ThemeName, Language } from '../types';

interface SettingsPanelProps {
  currentTheme: ThemeConfig;
  setTheme: (theme: ThemeConfig) => void;
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  currentLang: Language;
  setLang: (lang: Language) => void;
}

const SettingsPanel: React.FC<SettingsPanelProps> = ({
  currentTheme,
  setTheme,
  isDarkMode,
  toggleDarkMode,
  currentLang,
  setLang,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const texts = UI_TEXTS[currentLang];

  return (
    <>
      {/* Floating Toggle Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`
            fixed top-4 right-4 rtl:right-auto rtl:left-4 z-50 p-2.5 rounded-full shadow-lg transition-transform hover:scale-110 active:scale-95
            ${isDarkMode ? 'bg-gray-800 text-white border border-gray-700' : 'bg-white text-gray-800 border border-gray-200'}
        `}
        aria-label="Open Settings"
      >
        <Settings size={20} />
      </button>

      {/* Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40" 
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Panel */}
      <div className={`
        fixed inset-y-0 right-0 rtl:right-auto rtl:left-0 z-50 w-full max-w-xs bg-white dark:bg-gray-900 shadow-2xl transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : 'translate-x-full rtl:-translate-x-full'}
      `}>
        <div className="h-full flex flex-col">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-800">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                    <Palette size={20} /> {texts.appearance}
                </h2>
                <button 
                    onClick={() => setIsOpen(false)}
                    className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-500 transition-colors"
                >
                    <X size={20} />
                </button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-6 space-y-8">
                
                {/* Mode Toggle */}
                <div className="space-y-3">
                    <label className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider block text-left rtl:text-right">
                        {texts.displayMode}
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                        <button
                            onClick={() => !isDarkMode && toggleDarkMode()}
                            className={`flex items-center justify-center gap-2 p-3 rounded-lg border-2 transition-all ${
                                isDarkMode 
                                ? `border-${currentTheme.name === 'monochrome' ? 'gray' : 'blue'}-500 bg-gray-800 text-white` 
                                : 'border-gray-200 text-gray-600 hover:border-gray-300'
                            }`}
                        >
                            <Moon size={18} />
                            <span>{texts.dark}</span>
                        </button>
                        <button
                            onClick={() => isDarkMode && toggleDarkMode()}
                            className={`flex items-center justify-center gap-2 p-3 rounded-lg border-2 transition-all ${
                                !isDarkMode 
                                ? 'border-gray-900 bg-gray-50 text-gray-900' 
                                : 'border-gray-700 text-gray-400 hover:border-gray-600'
                            }`}
                        >
                            <Sun size={18} />
                            <span>{texts.light}</span>
                        </button>
                    </div>
                </div>

                {/* Theme Selection */}
                <div className="space-y-3">
                    <label className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider block text-left rtl:text-right">
                        {texts.colorTheme}
                    </label>
                    <div className="grid grid-cols-1 gap-3">
                        {Object.values(THEMES).map((theme) => (
                            <button
                                key={theme.name}
                                onClick={() => setTheme(theme)}
                                className={`
                                    w-full text-left rtl:text-right p-3 rounded-xl border-2 transition-all flex items-center justify-between group
                                    ${currentTheme.name === theme.name 
                                        ? 'border-gray-900 dark:border-white bg-gray-50 dark:bg-gray-800' 
                                        : 'border-transparent hover:bg-gray-50 dark:hover:bg-gray-800'
                                    }
                                `}
                            >
                                <div className="flex items-center gap-3">
                                    <div className={`w-8 h-8 rounded-full bg-gradient-to-tr ${theme.gradient} shadow-sm`}></div>
                                    <span className={`font-medium ${currentTheme.name === theme.name ? 'text-gray-900 dark:text-white' : 'text-gray-600 dark:text-gray-400'}`}>
                                        {theme.label}
                                    </span>
                                </div>
                                {currentTheme.name === theme.name && (
                                    <div className={`w-2 h-2 rounded-full ${theme.accentBg}`}></div>
                                )}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Language Selection */}
                 <div className="space-y-3">
                    <label className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider block text-left rtl:text-right">
                        {texts.language}
                    </label>
                    <div className="flex flex-col gap-2">
                        <button
                            onClick={() => setLang('ku')}
                            className={`p-3 rounded-lg border-2 transition-all flex items-center gap-3 ${
                                currentLang === 'ku'
                                ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300' 
                                : 'border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:border-gray-300 dark:hover:border-gray-600'
                            }`}
                        >
                            <span className="text-lg ">KU</span> کوردی
                        </button>
                         <button
                            onClick={() => setLang('ar')}
                            className={`p-3 rounded-lg border-2 transition-all flex items-center gap-3 ${
                                currentLang === 'ar'
                                ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300' 
                                : 'border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:border-gray-300 dark:hover:border-gray-600'
                            }`}
                        >
                             <span className="text-lg">🇦🇪</span> العربية
                        </button>
                        <button
                            onClick={() => setLang('en')}
                            className={`p-3 rounded-lg border-2 transition-all flex items-center gap-3 ${
                                currentLang === 'en'
                                ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300' 
                                : 'border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:border-gray-300 dark:hover:border-gray-600'
                            }`}
                        >
                             <span className="text-lg">🇺🇸</span> English
                        </button>
                    </div>
                </div>

            </div>

            {/* Footer */}
            <div className="p-6 border-t border-gray-200 dark:border-gray-800 text-center text-xs text-gray-400">
                <p>{texts.footer}</p>
            </div>
        </div>
      </div>
    </>
  );
};

export default SettingsPanel;