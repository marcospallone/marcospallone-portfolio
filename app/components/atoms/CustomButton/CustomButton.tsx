import { Button } from "@mui/material";
import { ReactNode } from "react";

interface ButtonProps {
  type?: "button" | "submit" | "reset";
  background?: string;
  radius?: number;
  children?: any;
  size?: "small" | "medium" | "large";
  customClass?: string;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  onClick?: any
  disabled?: boolean;
  onMouseEnter?: any;
  onMouseLeave?: any;
}

const CustomButton: React.FC<ButtonProps> = ({
  type,
  background,
  radius,
  children,
  size,
  customClass,
  startIcon,
  endIcon,
  onClick,
  disabled,
  onMouseEnter,
  onMouseLeave
}) => {
  return (
    <Button
      sx={{ borderRadius: radius ? `${radius}px` : "" }}
      className={`${background} !px-4 !py-2 ${customClass}`}
      size={size ?? "medium"}
      startIcon={startIcon}
      endIcon={endIcon}
      onClick={onClick}
      type={type}
      disabled={disabled}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </Button>
  );
};

export default CustomButton;
