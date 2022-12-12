import { Icon, IconifyIcon } from "@iconify/react";
import { Box, SxProps, Theme } from "@mui/material";

interface IconifyProps {
  icon: string | IconifyIcon;
  sx?: SxProps<Theme>;
  width?: number;
  height?: number;
  color?: string;
  className?: string;
}

export default function Iconify({ icon, sx, ...other }: IconifyProps) {
  return <Box component={Icon} icon={icon} sx={{ ...sx }} {...other} />;
}
