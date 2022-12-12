import { Container, Link, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { Page } from "~/components";
import { AuthSocial, SignInForm } from "~/modules/auth";

function Login() {
  return (
    <Page title="Đăng nhập">
      <Container maxWidth="sm">
        <Typography
          variant="h4"
          textTransform="uppercase"
          gutterBottom
          sx={{
            textAlign: "center",
          }}
        >
          Đăng nhập
        </Typography>
        <Typography sx={{ color: "text.secondary", mb: 5, textAlign: "center" }}>
          Nhập thông tin chi tiết của bạn dưới đây.
        </Typography>
        <AuthSocial />
        <SignInForm />
        <Typography variant="body2" align="center" sx={{ mt: 3 }}>
          Bạn chưa có tài khoản?{" "}
          <Link variant="subtitle2" component={RouterLink} to="/register">
            Đăng ký ngay
          </Link>
        </Typography>
      </Container>
    </Page>
  );
}

export default Login;
