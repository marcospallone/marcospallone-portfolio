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
    href: 'google.it/maps/place/67038+Scanno+AQ/@41.911253,13.8796023,15z/data=!4m6!3m5!1s0x1330131cd3165e5b:0x6e06919f6eeb65!8m2!3d41.9028393!4d13.8796078!16zL20vMGRxNmww?hl=it&entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoKLDEwMDc5MjA2N0gBUAM%3D',
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
