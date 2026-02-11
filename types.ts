import { LucideIcon } from 'lucide-react';

export type Language = 'en' | 'ku' | 'ar';

export interface SocialLink {
  id: string;
  title: string;
  url: string;
  icon: LucideIcon;
  description?: string;
  featured?: boolean;
}

export interface UserProfile {
  name: string;
  handle: string;
  bio: string;
  location: string;
  avatarUrl: string;
}

export interface AppData {
  profile: UserProfile;
  links: SocialLink[];
}

export type ThemeName = 'ocean' | 'sunset' | 'forest' | 'lavender' | 'monochrome';

export interface ThemeConfig {
  name: ThemeName;
  label: string;
  gradient: string;
  primaryColor: string; // Tailwind text color class, e.g., 'text-blue-500'
  accentBg: string; // Tailwind bg color class, e.g., 'bg-blue-500'
  ringColor: string;
  buttonHoverBorder: string;
}