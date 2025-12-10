'use client';

import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Logo from '../atoms/Logo/Logo';
import HeaderMenu from './HeaderMenu/HeaderMenu';
import HeaderCommandPalette from '../organisms/HeaderCommandPalette/HeaderCommandPalette';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [showCommandPalette, setShowCommandPalette] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      setShowCommandPalette(window.scrollY > 300);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Box
      className={`p-4 flex justify-between items-center w-full transition-all duration-300
        ${scrolled ? 'bg-black/80 backdrop-blur-sm shadow-lg' : ''}
      `}
    >
      <Logo />
      <div
        className={`transition-opacity duration-300 ${
          scrolled ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <HeaderCommandPalette showCommandPalette={showCommandPalette} />
      </div>

      <div
        className={`transition-opacity duration-300 ${
          scrolled ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}
      >
        <HeaderMenu />
      </div>
    </Box>
  );
};

export default Header;
