'use client';

import { Box } from '@mui/material';
import React, { useState } from 'react';
import PrivacyModal from '../PrivacyModal/PrivacyModal';

const Footer: React.FC = () => {
    const [open, setOpen] = useState(false);

  return (
    <>
    <Box className="p-8 flex flex-col justify-center items-center w-full relative bg-black/80 backdrop-blur-sm shadow-lg text-zinc-200 text-center">
        © 2025 Marco Spallone - P.I. 02211760661. All rights reserved.
        <a
          onClick={() => setOpen(true)}
          className="hover:text-white underline ml-2"
        >
          Privacy Policy
        </a>
    </Box>
    <PrivacyModal isOpen={open} onClose={() => setOpen(false)} />
    </>
  );
};

export default Footer;
