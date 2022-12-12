import { Box, Button, Card, CardActions, CardContent, Container } from "@mui/material";
import { useState } from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import { Iconify, Page } from "~/components";
import ContentDetail from "~/modules/ProductDetail/ContentDetail";
import ImageDetail from "~/modules/ProductDetail/ImageDetail";
import BreadcrumbProduct from "~/modules/Products/BreadcrumbProduct";
import { addToCart } from "~/redux/features/cartSlice";
import { useAppDispatch } from "~/redux/hooks";
import { publicRoutes } from "~/routes";

function ProductDetail() {
  const location = useLocation();
  const data = location.state;
  const [quantityData, setQuantityData] = useState(1);
  const dispatch = useAppDispatch();
  const handleAddToCart = () => {
    const quantity = quantityData;
    const subTotal = data.price * quantityData;
    dispatch(addToCart({ ...data, quantity, subTotal }));
  };

  return (
    <Page title="Thông tin sản phẩm">
      <Container fixed sx={{ marginBlock: 3 }}>
        <BreadcrumbProduct name={data.category.name} data={data.category} />
        <Card sx={{ display: "flex" }}>
          <ImageDetail data={data} />
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <CardContent>
              <ContentDetail data={data} quantityData={quantityData} setQuantityData={setQuantityData} />
            </CardContent>
            <CardActions sx={{ ml: 2 }}>
              <Button variant="outlined" size="large" onClick={handleAddToCart} sx={{ mr: 2 }}>
                <Iconify icon="bi:cart-plus-fill" width={18} height={18} />
                Thêm vào giỏ hàng
              </Button>
              <Button
                to={publicRoutes.CHECKOUT.path}
                component={Link}
                variant="contained"
                size="large"
                onClick={handleAddToCart}
              >
                Mua ngay
              </Button>
            </CardActions>
          </Box>
        </Card>
      </Container>
    </Page>
  );
}

export default ProductDetail;
