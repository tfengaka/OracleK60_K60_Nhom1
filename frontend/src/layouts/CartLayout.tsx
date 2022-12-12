import { useLazyQuery } from "@apollo/client";
import { Box, Container, Stack, styled } from "@mui/material";
import { useLayoutEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router";
import { GET_CURRENT_USER } from "~/graphql/queries";
import { User } from "~/models";
import { setUser } from "~/redux/features/authSlice";
import { useAppDispatch, useAppSelector } from "~/redux/hooks";
import { authRoutes } from "~/routes";
import { AccountPopover, LogoLayout, NavBar, NotificationsPopover, PreLoading } from "./components";
import Footer from "./components/Footer";
import { APP_BAR_HEIGHT } from "./MainLayout";

const RootStyle = styled("div")({
  minHeight: "100%",
  overflow: "hidden",
});

const ContentStyle = styled(Container)(() => ({
  paddingTop: APP_BAR_HEIGHT + 50,
  paddingBottom: 50,
}));

function CartLayout() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const dispath = useAppDispatch();
  const user = useAppSelector((state) => state.auth.data);
  const [reloadUser, { loading }] = useLazyQuery<{ getCurrentUser: User }>(GET_CURRENT_USER);

  useLayoutEffect(() => {
    if (!user) {
      reloadUser({
        onCompleted: ({ getCurrentUser }) => {
          dispath(setUser(getCurrentUser));
        },
        onError: (err) => {
          console.warn(err.message);
          navigate(authRoutes.LOGIN.path, {
            state: {
              prevUrl: pathname,
            },
          });
        },
      });
    }
  }, [dispath, reloadUser, user]);

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
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <LogoLayout sx={{ mr: 5 }} large label="Thanh Toán" />
          <Box sx={{ flexGrow: 1 }} />
          <Stack direction="row" alignItems="center" spacing={{ xs: 1, sm: 2 }}>
            <NotificationsPopover />
            <AccountPopover />
          </Stack>
        </Container>
      </NavBar>
      <ContentStyle>
        <Outlet />
      </ContentStyle>
      <Footer />
    </RootStyle>
  );
}

export default CartLayout;
