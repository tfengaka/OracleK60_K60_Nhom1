import { Badge, Box, Button, Divider, IconButton, List, ListSubheader, Stack, Typography } from "@mui/material";
import React, { Fragment, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Iconify, MenuPopover, Scrollbar } from "~/components";
import { CartItem } from "~/models";
import { useAppSelector } from "~/redux/hooks";
import { publicRoutes } from "~/routes";
import { currencyFormat } from "~/utils/formats";
import { CartWidgetItem } from "./components";

function CartWidget() {
  const navigate = useNavigate();
  const cartItems = useAppSelector((state) => state.cart.data);
  const anchorRef = useRef(null);
  const [openPopper, setOpenPopper] = useState<EventTarget | null>(null);

  const updateTotal = useMemo(() => {
    return cartItems.reduce((acc: number, item: CartItem) => acc + item.subTotal, 0);
  }, [cartItems]);

  const updateQty = useMemo(() => {
    return cartItems.reduce((acc: number, item: CartItem) => acc + item.quantity, 0);
  }, [cartItems]);

  return (
    <Fragment>
      <IconButton
        ref={anchorRef}
        color={openPopper ? "primary" : "default"}
        onClick={(e: React.MouseEvent<HTMLButtonElement>) => setOpenPopper(e.currentTarget)}
        sx={{ width: 40, height: 40 }}
      >
        <Badge showZero badgeContent={updateQty} color="error" max={99}>
          <Iconify icon="eva:shopping-cart-fill" width={24} height={24} />
        </Badge>
      </IconButton>
      <MenuPopover
        open={Boolean(openPopper)}
        anchorEl={openPopper}
        onClose={() => setOpenPopper(null)}
        sx={{ width: 600, p: 0, mt: 1.5, ml: 0.75 }}
      >
        <Box sx={{ display: "flex", alignItems: "center", py: 2, px: 2.5 }}>
          <Box sx={{ flexGrow: 1 }}>
            <Typography variant="subtitle1">Giỏ Hàng</Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              {cartItems.length > 0
                ? `Bạn có ${cartItems.length} sản phẩm đang chờ thanh toán!`
                : " của bạn đang trống!"}
            </Typography>
          </Box>
        </Box>
        <Divider sx={{ borderStyle: "dashed" }} />
        <List
          disablePadding
          subheader={
            <ListSubheader disableSticky sx={{ py: 1, px: 2.5, typography: "overline" }}>
              Sản phẩm
            </ListSubheader>
          }
        >
          <Scrollbar sx={{ maxHeight: 325 }}>
            {cartItems.map((item: CartItem) => (
              <CartWidgetItem key={item.product.id} data={item} />
            ))}
          </Scrollbar>
        </List>

        <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ px: 2.5, py: 1 }}>
          <Typography variant="subtitle1">Thành Tiền:</Typography>
          <Typography variant="subtitle1">{`${currencyFormat(updateTotal)}đ`}</Typography>
        </Stack>
        <Divider sx={{ borderStyle: "dashed" }} />
        <Box sx={{ p: 1 }}>
          <Button
            fullWidth
            disableRipple
            onClick={() => {
              setOpenPopper(null);
              navigate(publicRoutes.CHECKOUT.path);
            }}
          >
            Xem chi tiết giỏ hàng
          </Button>
        </Box>
      </MenuPopover>
    </Fragment>
  );
}

export default CartWidget;
