import { Box, Button, Stack, Typography } from "@mui/material";
import { Iconify, PaperWrapper, Tag } from "~/components";
import { BillAddress } from "~/models";
import { createBilling } from "~/redux/features/checkoutSlice";
import { useAppDispatch } from "~/redux/hooks";

interface IAddressItem {
  item: BillAddress;
}

function AddressItem({ item }: IAddressItem) {
  const dispatch = useAppDispatch();
  return (
    <PaperWrapper>
      <Box
        sx={{
          padding: "20px 30px 20px",
        }}
      >
        <Box>
          <Stack direction="row" alignItems="center" justifyContent="space-between">
            <Stack direction="row" alignItems="center" spacing={2}>
              <Typography variant="subtitle1" textTransform="capitalize" fontWeight="bold">
                {`${item?.fullName} (${item?.phoneNumber})`}
              </Typography>
              {item?.isDefault && <Tag title="Mặc định" />}
            </Stack>
            <Button
              variant="outlined"
              size="small"
              color="primary"
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "4px",
                padding: "4px 8px",
              }}
              onClick={() => dispatch(createBilling(item))}
            >
              <Iconify
                icon="ic:round-location-on"
                sx={{
                  fontSize: "1rem",
                }}
              />
              <Typography fontSize={14} textTransform="capitalize" fontWeight="bold">
                Giao đến địa chỉ này
              </Typography>
            </Button>
          </Stack>
          <Typography variant="subtitle2" textTransform="capitalize" fontWeight={500}>
            {item?.address}
          </Typography>
        </Box>
      </Box>
    </PaperWrapper>
  );
}

export default AddressItem;
1;
