import { Theme } from "@mui/material";

export default function IconButton(theme: Theme) {
  return {
    MuiIconButton: {
      variants: [
        {
          props: { color: "default" },
          style: {
            "&:hover": { backgroundColor: theme.palette.action.hover },
          },
        },
        {
          props: { color: "inherit" },
          style: {
            "&:hover": { backgroundColor: theme.palette.action.hover },
          },
        },
      ],
    },
  };
}
