import React from 'react';
import { MapPin, BadgeCheck } from 'lucide-react';
import { UserProfile, ThemeConfig } from '../types';

interface ProfileHeaderProps {
  profile: UserProfile;
  theme: ThemeConfig;
  isDarkMode: boolean;
}

const ProfileHeader: React.FC<ProfileHeaderProps> = ({ profile, theme, isDarkMode }) => {
  return (
    <div className="flex flex-col items-center text-center space-y-4 mb-8 relative z-10 animate-fade-in-up">
      {/* Avatar Container with Animated Glow */}
      <div className="relative group cursor-pointer">
        <div 
          className={`absolute -inset-1 rounded-full opacity-75 blur-md transition-all duration-500 group-hover:opacity-100 ${theme.gradient}`}
        ></div>
        <div className={`relative w-28 h-28 sm:w-32 sm:h-32 rounded-full p-1 ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
          <img
            src={profile.avatarUrl}
            alt={profile.name}
            className="w-full h-full rounded-full object-cover border-2 border-transparent"
          />
        </div>
        
        <div className="absolute bottom-1 right-1 bg-blue-500 text-white p-1 rounded-full shadow-lg border-2 border-white dark:border-gray-900">
           <BadgeCheck size={16} fill="currentColor" className="text-white" />
        </div>
      </div>

      {/* Text Info */}
      <div className="space-y-1">
        <h1 className={`text-2xl sm:text-3xl font-bold tracking-tight ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
          {profile.name}
        </h1>
        <p className={`text-sm sm:text-base font-medium opacity-90 ${theme.primaryColor} dark:text-gray-300`}>
          {profile.handle}
        </p>
      </div>

      <p className={`max-w-md text-sm sm:text-base leading-relaxed px-4 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
        {profile.bio}
      </p>
      
      {profile.location && (
        <div className={`flex items-center space-x-1.5 text-xs sm:text-sm font-medium ${isDarkMode ? 'text-gray-500' : 'text-gray-400'}`}>
          <MapPin size={14} />
          <span>{profile.location}</span>
        </div>
      )}
    </div>
  );
};

export default ProfileHeader;