import { menuData } from '@/app/data/menu';
import { useCursor } from '@/app/providers';
import { Box } from '@mui/material';
import React from 'react';
import styles from './HeaderMenu.module.scss';

const HeaderMenu: React.FC = () => {
  const { setCursorType } = useCursor();

  const handleScroll = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <Box className="flex">
      {menuData.items.map((item, index) => (
        <span
          key={index}
          className={`${styles.headerMenuItem} px-3 text-white hover:text-cyan-400 transition font-mono`}
          onClick={() => handleScroll(item.href)}
          onMouseEnter={() => setCursorType('link')}
          onMouseLeave={() => setCursorType('default')}
        >
          &lt;{item.label} /&gt;
        </span>
      ))}
    </Box>
  );
};

export default HeaderMenu;
