import { Github, Twitter, Instagram, Linkedin, Youtube, Mail, Globe, Coffee, Music, MessageCircle, Facebook, Send, Ghost, Video } from 'lucide-react';
import { SocialLink, ThemeConfig, UserProfile, Language, AppData } from './types';

const AVATAR_URL = "image/Amin it.png"; // Replace with your actual avatar image URL

// Define all available links here with their icons
const RAW_LINKS = [
  { id: '1', icon: Globe, featured: true },
  { id: '2', icon: Twitter },
  { id: '3', icon: Instagram },
  { id: '9', icon: MessageCircle, url: 'https://wa.me/' }, // WhatsApp
  { id: '4', icon: Youtube },
  { id: '5', icon: Github },
  { id: '6', icon: Linkedin },
  { id: '7', icon: Mail },
  { id: '8', icon: Music },
  { id: '10', icon: Facebook },
  { id: '11', icon: Send }, // Telegram
  { id: '12', icon: Ghost }, // Snapchat
  { id: '13', icon: Video }, // TikTok (Generic Video icon)
];

export const DATA: Record<Language, AppData> = {
  en: {
    profile: {
      name: "Amin IT",
      handle: "Full Stack Web Developer",
      bio: "Digital Creator and Developing Web at Kurdistan - IT & Programming Student",
      location: "Iraq, Erbil",
      avatarUrl: AVATAR_URL,
    },
    links: [
      { ...RAW_LINKS[0], title: 'Portfolio Website', url: 'https://agent-698cb1015946f5c7b68ac530--amintechno.netlify.app/', description: 'Check out my latest case studies' },
      // { ...RAW_LINKS[2], title: 'Instagram', url: '#' },
      // { ...RAW_LINKS[11], title: 'Snapchat', url: '#' },
      { ...RAW_LINKS[9], title: 'Facebook', url: 'https://www.facebook.com/share/16us14JKgR/' },
      { ...RAW_LINKS[5], title: 'GitHub', url: 'https://github.com/AminKurdish', description: 'Explore my open-source projects' },
      { ...RAW_LINKS[10], title: 'Telegram', url: 'https://t.me/D4RK_IT?text=Hello%20from%20my%20LumaniLink' },
      { ...RAW_LINKS[3], title: 'WhatsApp', url: 'https://wa.me/9647826052788?text=Hello%20from%20my%20LumaniLink', description: 'Chat with me directly' },
      { ...RAW_LINKS[7], title: 'Email', url: 'https://mailto:aaminshaqlawa@gmail.com' },
      { ...RAW_LINKS[12], title: 'TikTok', url: 'https://www.tiktok.com/@amin.technology', icon: Video }, // Using generic video icon for TikTok
    ] as SocialLink[],
  },
  ku: {
    profile: {
      name: "ئەمین IT",
      handle: "Full Stack Web Developer",
      bio: "درووستکردن و گەشەپێدانی وێبسایتی دیجیتاڵی لە کوردستان - خوێندکاری IT & Programming",
      location: "هەولێر، عێراق",
      avatarUrl: AVATAR_URL,
    },
    links: [
      { ...RAW_LINKS[0], title: 'وێبسایتی پۆرتقۆلیۆ', url: '#', description: 'دوایین کارەکانم ببینە' },
      // { ...RAW_LINKS[2], title: 'ئینستاگرام', url: '#' },
      // { ...RAW_LINKS[12], title: 'تیک تۆک', url: '#', icon: Video },
      // { ...RAW_LINKS[11], title: 'سناپچات', url: '#' },
      { ...RAW_LINKS[9], title: 'فەیسبووک', url: 'https://www.facebook.com/share/16us14JKgR/' },
      { ...RAW_LINKS[5], title: 'گیتهاب', url: 'https://github.com/AminKurdish' },
      { ...RAW_LINKS[10], title: ' تێلیگرام', url: 'https://t.me/D4RK_IT?text=Hello%20from%20my%20Library ' },
      { ...RAW_LINKS[3], title: 'واتسئەپ', url: 'https://wa.me/9647826052788?text=Hello%20from%20my%20Library', description: 'راستەوخۆ قسەم لەگەڵ بکە' },
      { ...RAW_LINKS[12], title: 'TikTok', url: 'https://www.tiktok.com/@amin.technology', icon: Video }, // Using generic video icon for TikTok
    ] as SocialLink[],
  },
  ar: {
    profile: {
      name: "أمين IT",
      handle: "Full Stack Web Developer",
      bio: "مبدع رقمي ومطور ويب في كردستان - طالب IT & Programming",
      location: "العراق، أربيل",
      avatarUrl: AVATAR_URL,
    },
    links: [
      { ...RAW_LINKS[0], title: 'موقع المعرض', url: '#', description: 'تصفح أحدث أعمالي' },
      // { ...RAW_LINKS[2], title: 'إنستغرام', url: '#' },
      // { ...RAW_LINKS[12], title: 'تيك توك', url: '#', icon: Video },
      // { ...RAW_LINKS[11], title: 'سناب شات', url: '#' },
      { ...RAW_LINKS[9], title: 'فيسبوك', url: 'https://www.facebook.com/share/16us14JKgR/' },
      { ...RAW_LINKS[5], title: 'جيت هاب', url: 'https://github.com/AminKurdish' },
      { ...RAW_LINKS[10], title: ' تيليجرام', url: 'https://t.me/D4RK_IT?text=Hello%20from%20my%20Library' },
      { ...RAW_LINKS[3], title: 'واتساب', url: 'https://wa.me/9647826052788?text=Hello%20from%20my%20Library', description: 'تحدث معي مباشرة' },
      { ...RAW_LINKS[12], title: 'TikTok', url: 'https://www.tiktok.com/@amin.technology', icon: Video }, // Using generic video icon for TikTok
    ] as SocialLink[],
  },
};

export const UI_TEXTS = {
  en: { appearance: 'Appearance', displayMode: 'Display Mode', colorTheme: 'Color Theme', language: 'Language', dark: 'Dark', light: 'Light', footer: 'Designed with React & Tailwind', create: 'Create your own Lumina Bio' },
  ku: { appearance: 'ڕوکار', displayMode: 'دۆخی پیشاندان', colorTheme: 'ڕەنگی ڕووکار', language: 'زمان', dark: 'تاریک', light: 'ڕوون', footer: 'دیزاین کراوە بە ڕیاکت و تەیلویند', create: 'Lumina Bio ی تایبەت بە خۆت دروست بکە' },
  ar: { appearance: 'المظهر', displayMode: 'وضع العرض', colorTheme: 'سمة اللون', language: 'اللغة', dark: 'داكن', light: 'فاتح', footer: 'تم التصميم بواسطة React و Tailwind', create: 'أنشئ Lumina Bio الخاص بك' },
};

export const THEMES: Record<string, ThemeConfig> = {
  ocean: {
    name: 'ocean',
    label: 'Deep Ocean',
    gradient: 'from-blue-600 via-cyan-500 to-teal-400',
    primaryColor: 'text-cyan-600',
    accentBg: 'bg-cyan-500',
    ringColor: 'ring-cyan-400',
    buttonHoverBorder: 'border-cyan-400',
  },
  sunset: {
    name: 'sunset',
    label: 'Sunset Glow',
    gradient: 'from-orange-500 via-pink-500 to-purple-600',
    primaryColor: 'text-pink-600',
    accentBg: 'bg-pink-500',
    ringColor: 'ring-pink-400',
    buttonHoverBorder: 'border-pink-400',
  },
  forest: {
    name: 'forest',
    label: 'Misty Forest',
    gradient: 'from-emerald-600 via-green-500 to-teal-600',
    primaryColor: 'text-emerald-600',
    accentBg: 'bg-emerald-500',
    ringColor: 'ring-emerald-400',
    buttonHoverBorder: 'border-emerald-400',
  },
  lavender: {
    name: 'lavender',
    label: 'Soft Lavender',
    gradient: 'from-indigo-400 via-purple-400 to-pink-300',
    primaryColor: 'text-indigo-600',
    accentBg: 'bg-indigo-500',
    ringColor: 'ring-indigo-400',
    buttonHoverBorder: 'border-indigo-400',
  },
  monochrome: {
    name: 'monochrome',
    label: 'Modern Mono',
    gradient: 'from-gray-800 via-gray-600 to-gray-900',
    primaryColor: 'text-gray-800',
    accentBg: 'bg-gray-800',
    ringColor: 'ring-gray-500',
    buttonHoverBorder: 'border-gray-500',
  },
};