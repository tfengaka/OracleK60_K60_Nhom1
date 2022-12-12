import { useLazyQuery } from "@apollo/client";
import { styled } from "@mui/material";
import { Fragment, useLayoutEffect } from "react";
import { Outlet, useNavigate } from "react-router";
import { GET_CURRENT_USER } from "~/graphql/queries";
import { User } from "~/models";
import { setUser } from "~/redux/features/authSlice";
import { useAppDispatch } from "~/redux/hooks";
import { PreLoading } from "./components";

const ContentStyle = styled("div")(({ theme }) => ({
  margin: "0 auto",
  minHeight: "100vh",
  padding: theme.spacing(8, 0),
}));

function AuthLayout() {
  const dispath = useAppDispatch();
  const navigate = useNavigate();
  const [reloadUser, { loading }] = useLazyQuery<{ getCurrentUser: User }>(GET_CURRENT_USER);

  useLayoutEffect(() => {
    if (localStorage.getItem("access_token")) {
      reloadUser({
        onCompleted: ({ getCurrentUser }) => {
          dispath(setUser(getCurrentUser));
          navigate("/");
        },
        onError: (err) => {
          console.error(err.message);
        },
      });
    }
  }, [dispath, navigate, reloadUser]);

  return (
    <Fragment>
      {loading ? (
        <PreLoading />
      ) : (
        <ContentStyle>
          <Outlet />
        </ContentStyle>
      )}
    </Fragment>
  );
}

export default AuthLayout;
