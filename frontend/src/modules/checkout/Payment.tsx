import { useMutation } from "@apollo/client";
import { Backdrop, Box, Button, CircularProgress, Grid, Stack } from "@mui/material";
import { Fragment } from "react";
import { Iconify } from "~/components";
import { invoiceMutation } from "~/graphql/mutations";
import { CartItem } from "~/models";
import { backStep, nextStep } from "~/redux/features/checkoutSlice";
import { useAppDispatch, useAppSelector } from "~/redux/hooks";
import { BilledAddress, DeliveryMethods, OrderSummary, PaymentMethods } from "./components";
function Payment() {
  const dispatch = useAppDispatch();
  const checkoutData = useAppSelector((state) => state.checkout);

  const [pay, { loading }] = useMutation<{ createOrder: string }>(invoiceMutation.CREATE_BILLING);

  const handlePay = () => {
    const productIDs = checkoutData.cart.map((item: CartItem) => {
      return {
        productId: item.product.id,
        quantity: item.quantity,
      };
    });
    const form = {
      products: productIDs,
      deliveryAddress: checkoutData.bill?.address,
      paymentType: checkoutData.paymentMethod,
      shipCost: checkoutData.shipping,
    };
    pay({
      variables: {
        form,
      },
      onCompleted: () => {
        dispatch(nextStep());
      },
      onError: (error) => {
        console.error(error);
      },
    });
  };

  return (
    <Fragment>
      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <Box>
            <DeliveryMethods />
            <PaymentMethods />
          </Box>
          <Button variant="text" color="inherit" onClick={() => dispatch(backStep())}>
            <Iconify icon="ic:outline-keyboard-arrow-left" sx={{ fontSize: 20 }} />
            Trở về
          </Button>
        </Grid>
        {/* Order Summary */}
        <Grid item xs={12} md={4}>
          <Stack spacing={1}>
            <BilledAddress />
            <OrderSummary />
            <Button size="large" variant="contained" fullWidth onClick={handlePay}>
              Mua Hàng
            </Button>
          </Stack>
        </Grid>
      </Grid>
      <Backdrop sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }} open={loading}>
        <CircularProgress color="primary" />
      </Backdrop>
    </Fragment>
  );
}

export default Payment;
