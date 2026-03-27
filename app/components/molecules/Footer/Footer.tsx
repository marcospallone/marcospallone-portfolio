'use client';

import { socialLinks } from '@/app/data/contacts';
import { menuData } from '@/app/data/menu';
import { Box } from '@mui/material';
import { Github, Instagram, Linkedin } from 'lucide-react';
import React, { useState } from 'react';
import Logo from '../../atoms/Logo/Logo';
import PrivacyModal from '../PrivacyModal/PrivacyModal';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  GitHub: Github,
  LinkedIn: Linkedin,
  Instagram: Instagram,
};

const Footer: React.FC = () => {
  const [open, setOpen] = useState(false);

  const handleScroll = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      <Box className="relative">
        {/* Top gradient divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent" />

        <Box className="bg-black/80 backdrop-blur-sm px-8 md:px-12 pt-12 pb-6">
          <div className="max-w-7xl mx-auto">

            {/* Main grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">

              {/* Brand */}
              <div>
                <Logo />
                <p className="mt-4 text-zinc-500 text-sm font-mono leading-relaxed">
                  Building scalable web applications<br />
                  with passion and precision.
                </p>
                <p className="mt-3 text-zinc-600 text-xs font-mono">
                  Based in Scanno, Italy
                </p>
              </div>

              {/* Navigation */}
              <div>
                <h4 className="text-cyan-400 font-mono text-xs uppercase tracking-widest mb-5">
                  Navigate
                </h4>
                <div className="grid grid-cols-2 gap-y-2 gap-x-4">
                  {menuData.items.map((item) => (
                    <button
                      key={item.label}
                      onClick={() => handleScroll(item.href)}
                      className="text-left text-zinc-500 hover:text-cyan-400 text-sm font-mono transition-colors duration-200 w-fit"
                    >
                      {'<'}{item.label}
                      {' />'}
                    </button>
                  ))}
                </div>
              </div>

              {/* Connect */}
              <div>
                <h4 className="text-purple-400 font-mono text-xs uppercase tracking-widest mb-5">
                  Connect
                </h4>
                <div className="flex flex-col gap-3">
                  {socialLinks.map((social) => {
                    const Icon = iconMap[social.label];
                    if (!Icon) return null;
                    return (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 text-zinc-500 hover:text-cyan-400 transition-colors duration-200 w-fit group"
                      >
                        <Icon className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" />
                        <span className="text-sm font-mono">{social.label}</span>
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Bottom divider */}
            <div className="h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent mb-6" />

            {/* Copyright row */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-3 text-zinc-600 text-xs font-mono">
              <span>
                © 2025 Marco Spallone &nbsp;·&nbsp; P.I. 02211760661
              </span>
              <button
                onClick={() => setOpen(true)}
                className="hover:text-zinc-400 underline transition-colors duration-200"
              >
                Privacy Policy
              </button>
            </div>
          </div>
        </Box>
      </Box>

      <PrivacyModal isOpen={open} onClose={() => setOpen(false)} />
    </>
  );
};

export default Footer;
