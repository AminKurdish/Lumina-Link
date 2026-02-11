import React, { useState } from 'react';
import { ExternalLink, ChevronRight, Star } from 'lucide-react';
import { SocialLink, ThemeConfig } from '../types';

interface LinkCardProps {
  link: SocialLink;
  theme: ThemeConfig;
  isDarkMode: boolean;
  index: number;
}

const LinkCard: React.FC<LinkCardProps> = ({ link, theme, isDarkMode, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const Icon = link.icon;

  // Staggered animation delay based on index
  const animationDelay = `${index * 100}ms`;

  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      className="block w-full max-w-xl mx-auto mb-4 group focus:outline-none"
      style={{ animationDelay }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`
          relative overflow-hidden rounded-xl p-4 sm:p-5 flex items-center justify-between
          transition-all duration-300 ease-out transform hover:scale-[1.02]
          border
          animate-fade-in-up opacity-0 fill-mode-forwards
          ${isDarkMode 
            ? 'bg-gray-800/40 border-gray-700/50 hover:bg-gray-800/60' 
            : 'bg-white/70 border-white/60 hover:bg-white/90 shadow-sm hover:shadow-md'
          }
          backdrop-blur-md
          ${isHovered ? theme.buttonHoverBorder : 'border-transparent'}
          ${link.featured ? `ring-2 ${theme.ringColor} ring-offset-2 ${isDarkMode ? 'ring-offset-gray-900' : 'ring-offset-gray-50'}` : ''}
        `}
      >
        {/* Hover Gradient Background Effect */}
        <div 
            className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 bg-gradient-to-r ${theme.gradient}`}
        />

        <div className="flex items-center space-x-4 rtl:space-x-reverse relative z-10 w-full">
            {/* Icon Box */}
            <div className={`
                p-2.5 rounded-lg transition-colors duration-300 flex-shrink-0
                ${isDarkMode ? 'bg-gray-700/50 text-white' : 'bg-gray-100 text-gray-700'}
                group-hover:text-white group-hover:${theme.accentBg}
            `}>
                <Icon size={24} strokeWidth={1.5} />
            </div>

            <div className="flex flex-col text-left rtl:text-right flex-grow">
                <span className={`
                    font-semibold text-base sm:text-lg transition-colors flex items-center
                    ${isDarkMode ? 'text-gray-100' : 'text-gray-800'}
                    ${link.featured && isDarkMode ? 'text-white' : ''}
                `}>
                    {link.title}
                    {link.featured && (
                        <span className="ml-2 rtl:ml-0 rtl:mr-2 inline-flex items-center text-xs font-bold px-2 py-0.5 rounded-full bg-yellow-400/20 text-yellow-500">
                             <Star size={10} className="mr-1 rtl:mr-0 rtl:ml-1 fill-yellow-500" /> Featured
                        </span>
                    )}
                </span>
                {link.description && (
                    <span className={`text-xs sm:text-sm mt-0.5 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                        {link.description}
                    </span>
                )}
            </div>

             {/* Action Icon */}
            <div className={`
                relative z-10 opacity-0 -translate-x-2 rtl:translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 rtl:group-hover:translate-x-0 transition-all duration-300
                ${isDarkMode ? 'text-gray-300' : 'text-gray-400'}
            `}>
                <ChevronRight size={20} className="rtl:rotate-180" />
            </div>
        </div>
      </div>
    </a>
  );
};

export default LinkCard;