"use client";

import { COLOR_MAP } from "@/app/utils/colors-map";
import { Box, Typography } from "@mui/material";

interface ChipProps {
  radius?: number;
  label?: string;
  color?: string;
  backgroundColor?: string;
}

const Chip: React.FC<ChipProps> = ({
  radius,
  label,
  color,
  backgroundColor,
}) => {
  const colorClass = color ? COLOR_MAP[color] : "";

  return (
    <Box
      sx={{ borderRadius: radius ? `${radius}px` : "" }}
      className={`border ${colorClass} ${backgroundColor} px-3 py-2 flex w-fit backdrop-blur-sm`}
    >
      <span className={`font-code`}>{label}</span>
    </Box>
  );
};

export default Chip;
