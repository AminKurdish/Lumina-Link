import React, { useState, useEffect } from 'react';
import ProfileHeader from './components/ProfileHeader';
import LinkCard from './components/LinkCard';
import SettingsPanel from './components/SettingsPanel';
import { DATA, THEMES, UI_TEXTS } from './constants';
import { ThemeConfig, Language } from './types';
import { Share2 } from 'lucide-react';

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(true);
  const [currentTheme, setCurrentTheme] = useState<ThemeConfig>(THEMES.ocean);
  const [language, setLanguage] = useState<Language>('en');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Handle RTL/LTR direction based on language
  useEffect(() => {
    const dir = language === 'ar' || language === 'ku' ? 'rtl' : 'ltr';
    document.documentElement.dir = dir;
    document.documentElement.lang = language;
  }, [language]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  if (!mounted) return null;

  const currentData = DATA[language];
  const uiTexts = UI_TEXTS[language];

  return (
    <div className={`min-h-screen transition-colors duration-500 ease-in-out ${isDarkMode ? 'dark bg-gray-950' : 'bg-gray-50'}`}>
      
      {/* Background Gradients/Effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className={`
          absolute -top-[20%] -left-[10%] w-[70%] h-[70%] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse-slow
          bg-gradient-to-r ${currentTheme.gradient}
        `}></div>
        <div className={`
          absolute top-[40%] -right-[10%] w-[60%] h-[60%] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse-slow
          bg-gradient-to-l ${currentTheme.gradient}
          animation-delay-2000
        `}></div>
         <div className={`
          absolute -bottom-[20%] left-[20%] w-[50%] h-[50%] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse-slow
          bg-gradient-to-t ${currentTheme.gradient}
          animation-delay-4000
        `}></div>
      </div>

      <SettingsPanel 
        currentTheme={currentTheme}
        setTheme={setCurrentTheme}
        isDarkMode={isDarkMode}
        toggleDarkMode={toggleDarkMode}
        currentLang={language}
        setLang={setLanguage}
      />

      <main className="relative z-10 min-h-screen px-4 py-12 sm:px-6 lg:px-8 flex flex-col items-center">
        
        {/* Main Content Container */}
        <div className="w-full max-w-lg mx-auto">
            
            {/* Share Button (Top Left/Right based on RTL) */}
             <div className="absolute top-4 left-4 rtl:left-auto rtl:right-4 sm:top-8 sm:left-auto sm:right-auto sm:-ml-16 sm:rtl:-mr-16 sm:rtl:ml-0">
                 <button 
                    className={`p-2 rounded-full transition-colors ${isDarkMode ? 'text-gray-400 hover:text-white hover:bg-gray-800' : 'text-gray-500 hover:text-gray-900 hover:bg-gray-200'}`}
                    aria-label="Share"
                    onClick={() => {
                        if (navigator.share) {
                            const shareData: ShareData = {
                                title: currentData.profile.name,
                                text: currentData.profile.bio,
                            };
                            if (window.location.protocol.startsWith('http')) {
                                shareData.url = window.location.href;
                            }
                            navigator.share(shareData).catch(console.error);
                        }
                    }}
                 >
                     <Share2 size={20} />
                 </button>
             </div>

            <ProfileHeader 
                profile={currentData.profile} 
                theme={currentTheme}
                isDarkMode={isDarkMode}
            />

            <div className="space-y-1 mt-8 pb-12">
                {currentData.links.map((link, index) => (
                    <LinkCard 
                        key={link.id} 
                        link={link} 
                        theme={currentTheme}
                        isDarkMode={isDarkMode}
                        index={index}
                    />
                ))}
            </div>

            {/* Footer */}
            <footer className="text-center pb-8 animate-fade-in-up" style={{ animationDelay: '800ms' }}>
                 <div className="flex items-center justify-center space-x-2 mb-2">
                    <span className={`h-px w-8 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-300'}`}></span>
                    <div className={`w-1.5 h-1.5 rounded-full ${currentTheme.accentBg}`}></div>
                    <span className={`h-px w-8 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-300'}`}></span>
                 </div>
                 <p className={`text-xs ${isDarkMode ? 'text-gray-500' : 'text-gray-400'}`}>
                     © {new Date().getFullYear()} {currentData.profile.name}. All rights reserved.
                 </p>
                 <a 
                    href="https://wa.me/9647826052788?text=Hello%20from%20my%20lumina" 
                    className={`text-xs mt-1 block hover:underline ${isDarkMode ? 'text-gray-600 hover:text-gray-400' : 'text-gray-400 hover:text-gray-600'}`}
                 >
                    {uiTexts.create}
                 </a>
            </footer>

        </div>
      </main>
    </div>
  );
};

export default App;