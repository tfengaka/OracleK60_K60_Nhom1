import { useLazyQuery } from "@apollo/client";
import { Box, Container, Grid, Stack, styled } from "@mui/material";
import { useLayoutEffect } from "react";
import { Outlet, useNavigate } from "react-router";
import { GET_CURRENT_USER } from "~/graphql/queries";
import { User } from "~/models";
import { CartWidget } from "~/modules/cart";
import { setUser } from "~/redux/features/authSlice";
import { useAppDispatch, useAppSelector } from "~/redux/hooks";
import { publicRoutes } from "~/routes";
import { Footer, LogoLayout, NavBar, NotificationsPopover, PreLoading, Sidebar } from "./components";
import { APP_BAR_HEIGHT } from "./MainLayout";

const RootStyle = styled("div")({
  minHeight: "100%",
  overflow: "hidden",
});

const ContentStyle = styled(Container)(() => ({
  paddingTop: APP_BAR_HEIGHT + 50,
  paddingBottom: 50,
}));

function AccountLayout() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.auth.data);
  const [reloadUser, { loading }] = useLazyQuery<{ getCurrentUser: User }>(GET_CURRENT_USER);

  useLayoutEffect(() => {
    if (!user) {
      reloadUser({
        onCompleted: ({ getCurrentUser }) => {
          dispatch(setUser(getCurrentUser));
        },
        onError: (err) => {
          console.warn(err.message);
          navigate(publicRoutes.HOME.path);
        },
      });
    }
  }, [dispatch, reloadUser, user]);

  if (loading) return <PreLoading />;
  return (
    <RootStyle>
      <NavBar
        sx={{
          boxShadow: "none",
          borderBottom: (theme) => `solid 1px ${theme.palette.divider}`,
        }}
      >
        <Container
          maxWidth="xl"
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <LogoLayout sx={{ mr: 5 }} />
          <Box sx={{ flexGrow: 1 }} />
          <Stack direction="row" alignItems="center" spacing={{ xs: 1, sm: 2 }}>
            <NotificationsPopover />
            <CartWidget />
          </Stack>
        </Container>
      </NavBar>
      <ContentStyle maxWidth="xl">
        <Grid container spacing={2}>
          <Grid item xs={12} md={3}>
            <Sidebar />
          </Grid>
          <Grid item xs={12} md={9}>
            <Outlet />
          </Grid>
        </Grid>
      </ContentStyle>
      <Footer />
    </RootStyle>
  );
}

export default AccountLayout;
