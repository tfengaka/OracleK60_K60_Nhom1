import { Grid } from "@mui/material";
import { useEffect } from "react";
import { Page } from "~/components";
import { CartPreview, CreateBill, Payment, PaymentSuccess } from "~/modules/checkout";
import { CheckoutStepper } from "~/modules/checkout/components";
import { getCart } from "~/redux/features/checkoutSlice";
import { useAppDispatch, useAppSelector } from "~/redux/hooks";

const container = [
  {
    step: 0,
    element: <CartPreview />,
  },
  {
    step: 1,
    element: <CreateBill />,
  },
  {
    step: 2,
    element: <Payment />,
  },
  {
    step: 3,
    element: <PaymentSuccess />,
  },
];

function Checkout() {
  const activeStep = useAppSelector((state) => state.checkout.activeStep);
  const cart = useAppSelector((state) => state.cart.data);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getCart(cart));
  }, [cart]);
  return (
    <Page title="Thanh Toán">
      {/* Header */}
      <Grid container sx={{ mb: 5 }}>
        <Grid item xs={12} md={8}>
          <CheckoutStepper activeStep={activeStep} />
        </Grid>
      </Grid>
      {/* Container */}
      {container[activeStep].element}
    </Page>
  );
}

export default Checkout;
