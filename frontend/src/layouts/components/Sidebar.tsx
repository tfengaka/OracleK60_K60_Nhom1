import { Avatar, Box, Button, List, ListItem, ListSubheader, styled, Typography } from "@mui/material";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import { Iconify } from "~/components";
import { sidebarItems } from "~/constants/account";
import { useAppSelector } from "~/redux/hooks";

const UserWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(1, 1.5),
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.grey[300],
}));

function Sidebar() {
  const { pathname } = useLocation();
  const user = useAppSelector((state) => state.auth.data);
  const isActive = (path: string) => path.includes(pathname);

  return (
    <Box>
      <Box sx={{ padding: "0 16px" }}>
        <UserWrapper>
          <Avatar
            src={user?.avatar || "/static/avatars/avatar_default.jpg"}
            sx={{
              width: 40,
              height: 40,
              objectFit: "cover",
            }}
          />
          <Box sx={{ ml: 2 }}>
            <Typography variant="subtitle2" fontWeight={600}>
              {user?.fullName}
            </Typography>
            <Typography fontSize={12} fontWeight={500} color="text.secondary">
              {user?.email}
            </Typography>
          </Box>
        </UserWrapper>
      </Box>
      <Box
        sx={{
          mt: 3,
          borderTop: (theme) => `solid 1px ${theme.palette.divider}`,
        }}
      >
        <List
          disablePadding
          subheader={
            <ListSubheader disableSticky sx={{ py: 1, px: 2.5, typography: "overline" }}>
              Tài khoản của tôi
            </ListSubheader>
          }
        >
          {sidebarItems.map((item, index) => (
            <ListItem key={index}>
              <Button
                component={Link}
                to={item.path}
                variant="text"
                sx={{
                  width: "100%",
                  justifyContent: "flex-start",
                  padding: "10px 16px",
                  color: (theme) => `${isActive(item.path) ? theme.palette.primary.main : theme.palette.grey[600]}`,
                  backgroundColor: (theme) => `${isActive(item.path) ? theme.palette.secondary.lighter : "inherit"}`,
                  borderRadius: 1,
                  "&:hover": {
                    backgroundColor: (theme) =>
                      `${isActive(item.path) ? theme.palette.secondary.lighter : theme.palette.grey[300]}`,
                  },
                }}
              >
                <Iconify icon={item.icon} sx={{ fontSize: "1.25rem", mr: 1 }} color="inherit" />
                <Typography variant="body2" fontWeight={600} noWrap>
                  {item.title}
                </Typography>
              </Button>
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );
}

export default Sidebar;
