import { Box, CardContent, CardHeader, Divider, Stack, Typography } from "@mui/material";
import { useMemo } from "react";
import { PaperWrapper } from "~/components";
import { useAppSelector } from "~/redux/hooks";
import { currencyFormat } from "~/utils/formats";

interface ISummaryItem {
  title: string;
  value: string | number;
}

function OrderSummary() {
  const { subTotal, discount, shipping } = useAppSelector((state) => state.checkout);

  const total = useMemo(() => subTotal - discount + shipping, [subTotal, discount, shipping]);

  const SummaryItem = ({ title, value }: ISummaryItem) => (
    <Stack direction="row" justifyContent="space-between" alignItems="center" mb={2}>
      <Typography variant="subtitle2" textTransform="capitalize" fontWeight={500} color="grey.500">
        {title}
      </Typography>
      <Typography variant="subtitle2" textTransform="capitalize" fontWeight={500}>
        {value}
      </Typography>
    </Stack>
  );

  return (
    <PaperWrapper>
      <CardHeader
        title={
          <Typography variant="h6" textTransform="capitalize" fontWeight="bold">
            Thông tin đơn hàng
          </Typography>
        }
      />
      <CardContent>
        <Box>
          <SummaryItem title="Tạm tính" value={`${currencyFormat(subTotal)}đ`} />
          <SummaryItem title="Giảm giá" value={`${currencyFormat(discount)}đ`} />
          <SummaryItem title="Phí vận chuyển" value={shipping != 0 ? `${currencyFormat(shipping)}đ` : "free"} />
          <Divider sx={{ my: 2 }} />
          <Stack direction="row" justifyContent="space-between">
            <Typography variant="subtitle1" textTransform="capitalize" fontWeight={600} color="grey.700">
              Thành Tiền
            </Typography>
            <Box>
              <Typography
                variant="subtitle1"
                textTransform="capitalize"
                textAlign="right"
                fontWeight={600}
                color="error.main"
              >
                {`${currencyFormat(total)}đ`}
              </Typography>
              <Typography fontSize={12} color="grey.500">
                (Giá đã bao gồm VAT nếu có)
              </Typography>
            </Box>
          </Stack>
        </Box>
      </CardContent>
    </PaperWrapper>
  );
}

export default OrderSummary;
