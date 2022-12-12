import { Avatar, Box, Button, Divider, IconButton, MenuItem, Stack, Typography } from "@mui/material";
import { alpha } from "@mui/material/styles";
import { Fragment, useRef, useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import MenuPopover from "~/components/MenuPopover";
import { signOut } from "~/redux/features/authSlice";
import { useAppDispatch, useAppSelector } from "~/redux/hooks";
import { publicRoutes } from "~/routes";

const MENU_OPTIONS = [
  {
    label: "Cá nhân",
    icon: "eva:person-fill",
    linkTo: publicRoutes.PROFILE.path,
  },
  {
    label: "Đơn mua",
    icon: "eva:home-fill",
    linkTo: "#",
  },
];

export default function AccountPopover() {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.auth.data);
  const anchorRef = useRef(null);
  const [open, setOpen] = useState(null);

  const handleOpen = (event: any) => {
    setOpen(event.currentTarget);
  };

  const handleClose = () => {
    dispatch(signOut());
    setOpen(null);
    localStorage.removeItem("access_token");
    window.location.reload();
  };

  return (
    <Fragment>
      {!user ? (
        <Button to="/login" size="large" variant="contained" component={RouterLink}>
          Đăng nhập ngay
        </Button>
      ) : (
        <Fragment>
          <IconButton
            ref={anchorRef}
            onClick={handleOpen}
            sx={{
              p: 0,
              ...(Boolean(open) && {
                "&:before": {
                  zIndex: 1,
                  content: "''",
                  width: "100%",
                  height: "100%",
                  borderRadius: "50%",
                  position: "absolute",
                  bgcolor: (theme) => alpha(theme.palette.grey[900], 0.8),
                },
              }),
            }}
          >
            <Avatar src={user.avatar || "/static/avatars/avatar_default.jpg"} alt="avatar" />
          </IconButton>

          <MenuPopover
            open={Boolean(open)}
            anchorEl={open}
            onClose={() => setOpen(null)}
            sx={{
              p: 0,
              mt: 1.5,
              ml: 0.75,
              "& .MuiMenuItem-root": {
                typography: "body2",
                borderRadius: 0.75,
              },
            }}
          >
            <Box sx={{ my: 1.5, px: 2.5 }}>
              <Typography variant="subtitle2" noWrap>
                {user.fullName}
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }} noWrap>
                {user.email}
              </Typography>
            </Box>

            <Divider sx={{ borderStyle: "dashed" }} />

            <Stack sx={{ p: 1 }}>
              {MENU_OPTIONS.map((option) => (
                <MenuItem key={option.label} to={option.linkTo} component={RouterLink}>
                  {option.label}
                </MenuItem>
              ))}
            </Stack>

            <Divider sx={{ borderStyle: "dashed" }} />

            <MenuItem onClick={handleClose} sx={{ m: 1 }} component={Button}>
              Logout
            </MenuItem>
          </MenuPopover>
        </Fragment>
      )}
    </Fragment>
  );
}
