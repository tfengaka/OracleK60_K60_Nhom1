import { Box, IconButton, ListItem, Stack, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Iconify } from "~/components";
import { CartItem } from "~/models";
import { removeFromCart, updateQuantity } from "~/redux/features/cartSlice";
import { useAppDispatch } from "~/redux/hooks";
import { currencyFormat } from "~/utils/formats";
import Counter from "./Counter";

interface ICartWidgetItem {
  data: CartItem;
}

const StyledListItem = styled(ListItem)(({ theme }) => ({
  width: "100%",
  transition: theme.transitions.create("background-color"),
  "&:hover": {
    backgroundColor: theme.palette.grey[200],
  },
}));

const ImageThumb = styled("img")(() => ({
  flexShrink: 0,
  width: 80,
  height: 50,
  objectFit: "cover",
}));

function CartWidgetItem({ data }: ICartWidgetItem) {
  const { product, quantity, subTotal } = data;
  const dispatch = useAppDispatch();
  const handleUpdateQuantity = (quantity: number) => {
    dispatch(updateQuantity({ product: data.product, value: quantity }));
  };
  return (
    <StyledListItem>
      <Stack direction="row" alignItems="center" justifyContent="space-between" spacing={2} sx={{ width: "100%" }}>
        <Stack direction="row" alignItems="center" spacing={2}>
          <ImageThumb
            src={product.images.length > 0 ? product.images[0].url : "/static/illustrations/illustration_product.svg"}
          />
          <Box sx={{ flexGrow: 0, overflow: "hidden", width: 250 }}>
            <Typography variant="subtitle2" noWrap>
              {product.name}
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }} noWrap>
              {product.description}
            </Typography>
          </Box>
        </Stack>
        <Counter value={quantity} onUpdateValue={handleUpdateQuantity} />
        <Stack direction="row" alignItems="center" justifyContent="flex-end" spacing={1}>
          <Typography variant="subtitle2" width={85} textAlign="right">{`${currencyFormat(subTotal)}đ`}</Typography>
          <IconButton color="error" onClick={() => dispatch(removeFromCart(product))}>
            <Iconify icon="eva:close-fill" color="#DF3E30" />
          </IconButton>
        </Stack>
      </Stack>
    </StyledListItem>
  );
}

export default CartWidgetItem;
