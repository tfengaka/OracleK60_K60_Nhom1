import { Box, styled, SxProps, Theme } from "@mui/material";

interface TagProps {
  title: string;
  color?: "primary" | "secondary" | "success" | "warning" | "error" | "info";
  sx?: SxProps<Theme>;
}

const TagWrapper = styled(Box)(({ theme }) => ({
  display: "inline-flex",
  alignItems: "center",
  whiteSpace: "nowrap",
  minWidth: "22px",
  height: "24px",
  padding: "0 8px",
  borderRadius: theme.shape.borderRadius,
  fontSize: "12px",
  fontWeight: 700,
  lineHeight: 0,
  textTransform: "capitalize",
}));

const colors = {
  primary: {
    backgroundColor: "#D1E9FC",
    color: "#2065D1",
  },
  secondary: {
    backgroundColor: "#D6E4FF",
    color: "#3366FF",
  },
  success: {
    backgroundColor: "#E3F7E5",
    color: "#00B74A",
  },
  warning: {
    backgroundColor: "#FFF7D9",
    color: "#FFA940",
  },
  error: {
    backgroundColor: "#FFE7E7",
    color: "#FF4D4F",
  },
  info: {
    backgroundColor: "#E6F7FF",
    color: "#1890FF",
  },
};

const Tag = ({ title, color, sx }: TagProps) => (
  <TagWrapper
    sx={{
      ...colors[color || "primary"],
      ...sx,
    }}
  >
    {title}
  </TagWrapper>
);

export default Tag;
