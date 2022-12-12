import { yupResolver } from "@hookform/resolvers/yup";
import { LoadingButton } from "@mui/lab";
import { IconButton, InputAdornment, Link, Stack } from "@mui/material";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as Yup from "yup";

import { Iconify } from "~/components";
import { FormProvider, RHFTextField } from "~/components/hookform";
import useAuthentication from "~/hooks/useAuthentication";
import { LoginForm } from "~/models";

const defaultValues = {
  email: "",
  password: "",
};
const LoginSchema = Yup.object({
  email: Yup.string().email("Địa chỉ email không hợp lệ!").required(""),
  password: Yup.string().required(""),
});

export default function SignInForm() {
  const { loading, handleLogin } = useAuthentication();
  const [showPassword, setShowPassword] = useState(false);
  const methods = useForm<LoginForm>({
    resolver: yupResolver(LoginSchema),
    defaultValues,
  });

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(handleLogin)}>
      <Stack spacing={3}>
        <RHFTextField name="email" label="Địa chỉ Email" />

        <RHFTextField
          name="password"
          label="Mật khẩu"
          type={showPassword ? "text" : "password"}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                  <Iconify icon={showPassword ? "eva:eye-fill" : "eva:eye-off-fill"} />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Stack>

      <Stack direction="row" alignItems="center" justifyContent="end" sx={{ my: 2 }}>
        <Link variant="subtitle2" underline="hover" sx={{ cursor: "pointer" }}>
          Quên mật khẩu?
        </Link>
      </Stack>

      <LoadingButton fullWidth size="large" type="submit" variant="contained" loading={isSubmitting || loading}>
        ĐĂNG NHẬP
      </LoadingButton>
    </FormProvider>
  );
}
