import { yupResolver } from "@hookform/resolvers/yup";
import { LoadingButton } from "@mui/lab";
import { FormControlLabel, Grid, IconButton, InputAdornment, Link, Radio, Stack, Typography } from "@mui/material";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link as RouterLink } from "react-router-dom";
import * as Yup from "yup";
import { PaperWrapper } from "~/components";
import {
  FormProvider,
  RHFAvatar,
  RHFDatePicker,
  RHFPhoneInput,
  RHFRadioButton,
  RHFTextField,
} from "~/components/hookform";
import Iconify from "~/components/Iconify";
import useAuthentication from "~/hooks/useAuthentication";
import { RegisterForm } from "~/models";

const RegisterSchema = Yup.object({
  fullName: Yup.string().required(""),
  email: Yup.string().email("").required(""),
  bod: Yup.date().required(""),
  phoneNumber: Yup.string().required(""),
  gender: Yup.string().required(" "),
  address: Yup.string().required(""),
  password: Yup.string().required(""),
});

const defaultValues = {
  fullName: "",
  email: "",
  bod: new Date(),
  phoneNumber: "",
  gender: "Nam",
  address: "",
  password: "",
  avatar: undefined,
};

export default function SignUpForm() {
  const { loading, handleRegister } = useAuthentication();
  const methods = useForm<RegisterForm>({
    resolver: yupResolver(RegisterSchema),
    defaultValues,
  });
  const {
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const [showPassword, setShowPassword] = useState(false);

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(handleRegister)}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <PaperWrapper
            sx={{
              padding: 10,
            }}
          >
            <RHFAvatar name="avatar" />
          </PaperWrapper>
        </Grid>
        <Grid item xs={12} md={8}>
          <PaperWrapper
            sx={{
              padding: 4,
              mb: 0,
            }}
          >
            <Grid container spacing={2} marginBottom={3}>
              <Grid item xs={12}>
                <Stack spacing={3}>
                  <Grid container spacing={2} alignItems="center">
                    <Grid item xs={12} md={9}>
                      <RHFTextField name="fullName" label="Họ và Tên" />
                    </Grid>
                    <Grid item xs={12} md={3}>
                      <RHFRadioButton name="gender" label="Giới Tính">
                        <FormControlLabel control={<Radio size="small" />} label="Nam" value="Nam" />
                        <FormControlLabel control={<Radio size="small" />} label="Nữ" value="Nữ" />
                      </RHFRadioButton>
                    </Grid>
                  </Grid>
                  <RHFTextField name="address" label="Địa chỉ" />
                  <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                    <RHFPhoneInput name="phoneNumber" label="Số điện thoại" />
                    <RHFDatePicker name="bod" label="Ngày Sinh" />
                  </Stack>
                  <RHFTextField name="email" label="Email" type="text" />
                  <RHFTextField
                    name="password"
                    label="Mật Khẩu"
                    type={showPassword ? "text" : "password"}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton edge="end" onClick={() => setShowPassword(!showPassword)}>
                            <Iconify icon={showPassword ? "eva:eye-fill" : "eva:eye-off-fill"} />
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                </Stack>
              </Grid>
            </Grid>
            <LoadingButton fullWidth size="large" type="submit" variant="contained" loading={isSubmitting || loading}>
              ĐĂNG KÝ
            </LoadingButton>
          </PaperWrapper>
          <Typography variant="body2" sx={{ mt: 3, textAlign: "center" }}>
            Bạn đã có tài khoản?&nbsp;
            <Link variant="subtitle2" to="/login" component={RouterLink}>
              Đăng nhập ngay
            </Link>
          </Typography>
        </Grid>
      </Grid>
    </FormProvider>
  );
}
