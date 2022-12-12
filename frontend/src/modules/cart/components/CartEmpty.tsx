import { Box, styled, Typography } from "@mui/material";

const CartEmptyStyled = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "100%",
  padding: theme.spacing(8, 2),
  textAlign: "center",
}));

function CartEmpty() {
  return (
    <CartEmptyStyled>
      <Box
        sx={{
          height: "240px",
          marginBottom: "24px",
        }}
      >
        <Box
          component={"img"}
          src="/static/illustrations/illustration_empty_cart.svg"
          alt="empty_cart"
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </Box>
      <Typography variant="h5" fontWeight="bold" gutterBottom>
        Giỏ hàng trống
      </Typography>
      <Typography variant="body2" color="grey">
        Có vẻ như bạn không có mặt hàng nào trong giỏ hàng của mình.
      </Typography>
    </CartEmptyStyled>
  );
}

export default CartEmpty;
