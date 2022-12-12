import { useLazyQuery } from "@apollo/client";
import { Box, Stack } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useLayoutEffect } from "react";
import { Outlet } from "react-router";
import { GET_CURRENT_USER } from "~/graphql/queries";
import { User } from "~/models";
import { CartWidget } from "~/modules/cart";
import { setUser } from "~/redux/features/authSlice";
import { useAppDispatch, useAppSelector } from "~/redux/hooks";
import {
  AccountPopover,
  LogoLayout,
  NavBar,
  NavigationLink,
  NotificationsPopover,
  PreLoading,
  SearchBar,
} from "./components";
import Footer from "./components/Footer";

export const APP_BAR_HEIGHT = 64;

const RootStyle = styled("div")({
  minHeight: "100%",
  overflow: "hidden",
});

const MainStyle = styled("div")(() => ({
  overflow: "auto",
  minHeight: "100%",
  paddingTop: APP_BAR_HEIGHT,
}));

function MainLayout() {
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
          console.error(err.message);
        },
      });
    }
  }, [dispath, reloadUser, user]);

  if (loading) return <PreLoading />;
  return (
    <RootStyle>
      <NavBar>
        <LogoLayout sx={{ mr: 5 }} disableLink />
        <NavigationLink />
        <Box sx={{ flexGrow: 1 }} />
        <Stack direction="row" alignItems="center" spacing={{ xs: 1, sm: 2 }}>
          <SearchBar />
          <NotificationsPopover />
          <CartWidget />
          <AccountPopover />
        </Stack>
      </NavBar>
      <MainStyle>
        <Outlet />
      </MainStyle>
      <Footer />
    </RootStyle>
  );
}

export default MainLayout;
