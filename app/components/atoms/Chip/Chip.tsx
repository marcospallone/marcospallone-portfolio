import { Box, Typography } from "@mui/material";

interface ChipProps {
  radius?: number;
  label?: string;
  borderColor?: string;
  backgroundColor?: string;
}

const Chip: React.FC<ChipProps> = ({
  radius,
  label,
  borderColor,
  backgroundColor,
}) => {
  return (
    <Box
      borderRadius={radius}
      className={`${
        borderColor ? `border border-${borderColor}` : ""
      } ${backgroundColor} px-3 py-2 flex w-fit backdrop-blur-sm`}
    >
      <Typography component={"span"} className={`font-code text-${borderColor}`}>{label}</Typography>
    </Box>
  );
};

export default Chip;
