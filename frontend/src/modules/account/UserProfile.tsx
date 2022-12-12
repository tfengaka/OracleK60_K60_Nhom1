import { yupResolver } from "@hookform/resolvers/yup";
import { LoadingButton } from "@mui/lab";
import { Grid, Stack } from "@mui/material";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { Page, PaperWrapper } from "~/components";
import { FormProvider, RHFAvatar, RHFPhoneInput, RHFTextField } from "~/components/hookform";
import { RegisterForm } from "~/models";
import { useAppSelector } from "~/redux/hooks";

const RegisterSchema = Yup.object({
  fullName: Yup.string().required(""),
  email: Yup.string().email("").required(""),
  bod: Yup.date().required(""),
  phoneNumber: Yup.string().required(""),
  address: Yup.string().required(""),
});

function UserProfile() {
  const user = useAppSelector((state) => state.auth.data);
  const defaultValues = {
    fullName: user?.fullName,
    email: user?.email,
    bod: user?.bod,
    phoneNumber: user?.phoneNumber,
    address: user?.address,
    avatar: user?.avatar,
  };
  const methods = useForm<RegisterForm>({
    resolver: yupResolver(RegisterSchema),
    defaultValues,
  });
  const {
    formState: { isSubmitting },
  } = methods;

  return (
    <Page title="Hồ sơ cá nhân">
      <FormProvider methods={methods}>
        <Grid container spacing={3}>
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
                      <Grid item xs={12} md={8}>
                        <RHFTextField name="fullName" label="Họ và Tên" />
                      </Grid>
                      <Grid item xs={12} md={4}>
                        <RHFPhoneInput name="phoneNumber" label="Số điện thoại" />
                      </Grid>
                    </Grid>
                    <RHFTextField name="email" label="Email" type="text" />
                    <RHFTextField name="address" label="Địa chỉ" />
                  </Stack>
                </Grid>
              </Grid>
              <Stack direction="row" justifyContent="flex-end">
                <LoadingButton size="medium" type="submit" variant="contained" loading={isSubmitting}>
                  Lưu thay đổi
                </LoadingButton>
              </Stack>
            </PaperWrapper>
          </Grid>
          <Grid item xs={12} md={4}>
            <PaperWrapper
              sx={{
                padding: (theme) => theme.spacing(9),
              }}
            >
              <RHFAvatar name="avatar" />
            </PaperWrapper>
          </Grid>
        </Grid>
      </FormProvider>
    </Page>
  );
}

export default UserProfile;
