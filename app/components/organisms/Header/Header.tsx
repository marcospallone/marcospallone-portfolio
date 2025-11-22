import { Box } from "@mui/material";
import React from "react";
import Logo from "../../atoms/Logo/Logo";
import HeaderMenu from "../../molecules/HeaderMenu/HeaderMenu";

const Header: React.FC = () => {
  return (
    <Box className="p-4 flex justify-between items-center">
      <Logo />
      <HeaderMenu />
    </Box>
  );
};

export default Header;
