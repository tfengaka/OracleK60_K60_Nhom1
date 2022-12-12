import { Button, CardHeader, Grid, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { Iconify, PaperWrapper } from "~/components";
import { CartTable } from "~/modules/cart";
import { CartEmpty } from "~/modules/cart/components";
import { nextStep } from "~/redux/features/checkoutSlice";
import { useAppDispatch, useAppSelector } from "~/redux/hooks";
import { OrderSummary } from "./components";

function CartPreview() {
  const dispatch = useAppDispatch();
  const checkoutData = useAppSelector((state) => state.checkout);
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={8}>
        <PaperWrapper>
          <CardHeader
            title={
              <Typography variant="h6">
                Giỏ hàng&nbsp;
                <Typography
                  variant="body2"
                  fontWeight={500}
                  component="span"
                  color="grey.600"
                >{`( ${checkoutData.totalItems} Sản phẩm )`}</Typography>
              </Typography>
            }
            sx={{
              marginBottom: "20px",
            }}
          />

          {checkoutData.totalItems > 0 ? <CartTable cart={checkoutData.cart} /> : <CartEmpty />}
        </PaperWrapper>
        <Button component={Link} variant="text" color="inherit" to="/product">
          <Iconify icon="ic:outline-keyboard-arrow-left" sx={{ fontSize: 20 }} />
          Tiếp tục mua hàng
        </Button>
      </Grid>
      {/* Order Summary */}
      <Grid item xs={12} md={4}>
        <Stack spacing={1}>
          <OrderSummary />
          <Button
            size="large"
            variant="contained"
            fullWidth
            onClick={() => dispatch(nextStep())}
            disabled={checkoutData.cart.length === 0}
          >
            Mua Hàng
          </Button>
        </Stack>
      </Grid>
    </Grid>
  );
}

export default CartPreview;
