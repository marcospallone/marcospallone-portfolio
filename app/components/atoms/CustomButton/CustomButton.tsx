import { Button } from "@mui/material";
import { ReactNode } from "react";

interface ButtonProps {
  background?: string;
  color?: string;
  radius?: number;
  label?: string;
  size?: "small" | "medium" | "large";
  customClass?: string;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  onClick?: any
}

const CustomButton: React.FC<ButtonProps> = ({
  background,
  color,
  radius,
  label,
  size,
  customClass,
  startIcon,
  endIcon,
  onClick
}) => {
  return (
    <Button
      sx={{ borderRadius: radius ? `${radius}px` : "" }}
      className={`${background} !px-4 !py-2 ${customClass}`}
      size={size ?? "medium"}
      startIcon={startIcon}
      endIcon={endIcon}
      onClick={onClick}
    >
      {label}
    </Button>
  );
};

export default CustomButton;
