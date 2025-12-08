import { Github, Instagram, Linkedin, Mail, MapPin } from 'lucide-react';
import { IconType } from 'react-icons';
import { FaWhatsapp } from 'react-icons/fa';

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
    href: 'tel:+393896944027',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Scanno, Italy',
    href: '#',
  },
];

export const socialLinks: SocialLinkProps[] = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Instagram, href: '#', label: 'Instagram' },
  ];
