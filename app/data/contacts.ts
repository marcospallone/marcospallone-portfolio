import { Github, Instagram, Linkedin, Mail, MapPin } from 'lucide-react';
import { IconType } from 'react-icons';
import { FaWhatsapp } from 'react-icons/fa';
import { SubtitleKeyword } from '../models/subtitle-interface';

export interface ContactInfoProps {
  icon: IconType;
  label: string;
  value: string;
  href: string;
}

export interface SocialLinkProps {
  icon: IconType;
  href: string;
  label: string;
}

export const contactInfo: ContactInfoProps[] = [
  {
    icon: Mail,
    label: 'Email',
    value: 'marcospallone@outlook.it',
    href: 'mailto:marcospallone@outlook.it',
  },
  {
    icon: FaWhatsapp,
    label: 'WhatsApp',
    value: '+39 3896944027',
    href: 'https://wa.me/+393896944027',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Scanno, Italy',
    href: 'https://www.google.com/maps/search/?api=1&query=Marco%20Spallone%20Software%20Engineering%2C%20Scanno%2C%20Italy',
  },
];

export const socialLinks: SocialLinkProps[] = [
  { icon: Github, href: 'https://github.com/marcospallone', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/marco-spallone-8639a4176/', label: 'LinkedIn' },
  { icon: Instagram, href: 'https://www.instagram.com/marco_spallone/', label: 'Instagram' },
];

export const subtitleKeywords: SubtitleKeyword[] = [
  {
    prefix: 'Open to',
    colored: 'new',
    suffix: 'opportunities, collaborations and ideas.',
    color: 'text-cyan-400',
  },
  {
    prefix: '',
    colored: 'Get in touch',
    suffix: 'for collaborations or just a friendly chat',
    color: 'text-purple-400',
  },
  {
    prefix: 'From quick questions to',
    colored: 'long-term collaborations.',
    suffix: '',
    color: 'text-emerald-400',
  },
];
