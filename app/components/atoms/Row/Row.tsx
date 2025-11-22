import Grid2, { GridProps } from "@mui/material/Grid";
import React from "react";

const Row: React.FC<GridProps> = ({ children, spacing, ...props }) => {
  return (
    <Grid2 container {...props} size={12} spacing={spacing ? spacing : { xs: 32, lg: 64 }}>
      {children}
    </Grid2>
  );
};

export default Row;
