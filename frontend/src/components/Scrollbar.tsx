import { Box } from "@mui/material";
import { styled, SxProps, Theme } from "@mui/material/styles";

interface ScrollbarProps {
  children: React.ReactNode;
  sx?: SxProps<Theme> | undefined;
}

const RootStyle = styled("div")(({ theme }) => ({
  flexGrow: 1,
  height: "100%",
  userSelect: "none",
  overflow: "hidden overlay",
  "&::-webkit-scrollbar": {
    width: 3,
  },
  "&::-webkit-scrollbar-thumb": {
    backgroundColor: theme.palette.grey[500_48],
    borderRadius: theme.shape.borderRadius,
    boxShadow: theme.shadows[10],
  },
  "&::-webkit-scrollbar-track": {
    backgroundColor: "transparent",
  },
}));

function Scrollbar({ children, sx, ...other }: ScrollbarProps) {
  return (
    <RootStyle>
      <Box sx={sx} {...other}>
        {children}
      </Box>
    </RootStyle>
  );
}
export default Scrollbar;
