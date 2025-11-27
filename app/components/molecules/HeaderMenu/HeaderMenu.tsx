import { menuData } from "@/app/data/menu";
import { Box } from "@mui/material";
import React from "react";
import styles from "./HeaderMenu.module.scss";

const HeaderMenu: React.FC = () => {
  return (
    <Box className="flex">
      {menuData.items.map((item, index) => (
        <Box
          key={index}
          className={`${styles.headerMenuItem} px-3 cursor-pointer text-white hover:text-cyan-400 transition font-mono`}
        >
          &lt;{item.label} /&gt;
        </Box>
      ))}
    </Box>
  );
};

export default HeaderMenu;
