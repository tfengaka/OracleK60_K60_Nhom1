import { alpha, AppBar, styled, SxProps, Theme, Toolbar } from "@mui/material";

interface NavBarProps {
  children: React.ReactNode;
  sx?: SxProps<Theme>;
}

const APPBAR_HEIGHT = 64;
const RootStyle = styled(AppBar)(({ theme }) => ({
  boxShadow: theme.customShadows.z12,
  backdropFilter: "blur(6px)",
  WebkitBackdropFilter: "blur(6px)", // Fix on Mobile
  backgroundColor: alpha(theme.palette.background.default, 0.6),
}));

const ToolbarStyle = styled(Toolbar)(() => ({
  minHeight: APPBAR_HEIGHT,
}));

export default function Navbar({ children, sx }: NavBarProps) {
  return (
    <RootStyle sx={sx}>
      <ToolbarStyle>{children}</ToolbarStyle>
    </RootStyle>
  );
}
