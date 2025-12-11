'use client';

import { Box } from '@mui/material';
import React from 'react';

const Footer: React.FC = () => {
  return (
    <Box className="p-4 flex justify-center items-center w-full relative bg-black/80 backdrop-blur-sm shadow-lg text-zinc-200">
        © 2025 Marco Spallone. All rights reserved.
    </Box>
  );
};

export default Footer;
