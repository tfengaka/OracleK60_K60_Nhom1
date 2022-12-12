import { Box } from "@mui/material";
import { Fragment } from "react";
import { Link as RouterLink } from "react-router-dom";

interface LogoProps {
  disabledLink: boolean;
  sx: object;
}

function Logo({ disabledLink, sx }: LogoProps) {
  const logo = <Box component="img" src="/static/utc2icon.png" sx={{ width: 40, height: 40, ...sx }} />;
  if (disabledLink) {
    return <Fragment>{logo}</Fragment>;
  }
  return <RouterLink to="/">{logo}</RouterLink>;
}

export default Logo;
