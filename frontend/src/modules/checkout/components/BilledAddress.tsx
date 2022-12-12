import { Button, CardContent, CardHeader, Stack, Typography } from "@mui/material";
import { Iconify } from "~/components";
import { backStep } from "~/redux/features/checkoutSlice";
import { useAppDispatch, useAppSelector } from "~/redux/hooks";
import PaperWrapper from "../../../components/PaperWrapper";

function BilledAddress() {
  const dispatch = useAppDispatch();
  const billAddress = useAppSelector((state) => state.checkout.bill);
  return (
    <PaperWrapper>
      <CardHeader
        title={
          <Stack direction="row" alignItems="center" justifyContent="space-between">
            <Typography variant="subtitle2" textTransform="capitalize" fontWeight="bold">
              Địa chỉ nhận hàng
            </Typography>
            <Button
              variant="text"
              size="small"
              color="primary"
              onClick={() => dispatch(backStep())}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "4px",
              }}
            >
              <Iconify
                icon="ph:pencil-simple-fill"
                sx={{
                  fontSize: "12px",
                }}
              />
              <Typography fontSize={12} textTransform="capitalize" fontWeight="bold">
                Thay đổi
              </Typography>
            </Button>
          </Stack>
        }
      />
      <CardContent>
        <Typography variant="subtitle2" textTransform="capitalize" fontWeight="bold">
          {`${billAddress?.fullName} (${billAddress?.phoneNumber})`}
        </Typography>
        <Typography variant="subtitle2" textTransform="capitalize" fontWeight={500}>
          {billAddress?.address}
        </Typography>
      </CardContent>
    </PaperWrapper>
  );
}

export default BilledAddress;
