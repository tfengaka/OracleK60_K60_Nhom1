import { Container, Typography } from "@mui/material";
import { Page } from "~/components";
import { SignUpForm } from "~/modules/auth";
export default function Register() {
  return (
    <Page title="Register">
      <Container maxWidth="lg">
        <Typography variant="h4" textTransform="uppercase" gutterBottom>
          Đăng ký
        </Typography>
        <Typography sx={{ color: "text.secondary", mb: 2 }}>Đăng ký miễn phí. Không cần thẻ tín dụng.</Typography>
        <SignUpForm />
      </Container>
    </Page>
  );
}
