import { yupResolver } from "@hookform/resolvers/yup";
import { LoadingButton } from "@mui/lab";
import { Box, Button, DialogActions, Stack } from "@mui/material";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { FormProvider, RHFPhoneInput, RHFTextField } from "~/components/hookform";
import { BillAddress } from "~/models";
import { createBilling } from "~/redux/features/checkoutSlice";
import { useAppDispatch } from "~/redux/hooks";

interface IAddAddressForm {
  onClose: () => void;
}

const BillAddressSchema = Yup.object({
  fullName: Yup.string().required(""),
  phoneNumber: Yup.string().required(""),
  address: Yup.string().required(""),
});

const defaultValues = {
  fullName: "",
  phoneNumber: "",
  address: "",
};
function AddAddressForm({ onClose }: IAddAddressForm) {
  const dispatch = useAppDispatch();
  const methods = useForm<BillAddress>({
    resolver: yupResolver(BillAddressSchema),
    defaultValues,
  });
  const {
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const handleAddAddress = (data: BillAddress) => {
    dispatch(createBilling({ ...data, isDefault: false }));
    onClose();
  };

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(handleAddAddress)}>
      <Box sx={{ py: 2 }}>
        <Stack spacing={3}>
          <RHFTextField name="fullName" label="Họ và tên" />
          <RHFPhoneInput name="phoneNumber" label="Số điện thoại" />
          <RHFTextField name="address" label="Địa chỉ" />
        </Stack>
      </Box>
      <DialogActions>
        <LoadingButton size="medium" type="submit" variant="contained" loading={isSubmitting}>
          Giao Hàng Đến Địa Chỉ Này
        </LoadingButton>
        <Button size="medium" variant="outlined" color="inherit" onClick={onClose}>
          Hủy Bỏ
        </Button>
      </DialogActions>
    </FormProvider>
  );
}

export default AddAddressForm;
