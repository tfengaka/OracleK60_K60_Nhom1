import { Box, Button, Stack, styled, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import slugify from "slugify";
import { Product } from "~/models";
import { addToCart } from "~/redux/features/cartSlice";
import { useAppDispatch } from "~/redux/hooks";
import { publicRoutes } from "~/routes";
import { currencyFormat } from "~/utils/formats";

interface IProductCardProps {
  product: Product;
}
const MAX_LENGTH = 120;
const ProductWrapper = styled(Box)(({ theme }) => ({
  position: "relative",
  width: "320px",
  height: "500px",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.background.paper,
  boxShadow: theme.shadows[10],
}));

const ProductImage = styled("img")(({ theme }) => ({
  width: "100%",
  height: "100%",
  maxHeight: "320px",
  objectFit: "cover",
  borderRadius: theme.shape.borderRadius,
}));

const ProductAction = styled(Stack)(({ theme }) => ({
  position: "absolute",
  bottom: 0,
  left: 0,
  width: "100%",
  marginBottom: theme.spacing(1.5),
}));

function HomeProductCard({ product }: IProductCardProps) {
  const dispatch = useAppDispatch();
  const handleAddToCart = () => {
    const quantity = 1;
    const subTotal = product.price * 1;
    dispatch(addToCart({ ...product, quantity, subTotal }));
  };
  return (
    <ProductWrapper>
      <Box sx={{ width: "100%", p: 1 }}>
        <ProductImage
          src={product.images.length > 0 ? product.images[0].url : "/static/illustrations/illustration_product.svg"}
          alt=""
        />
      </Box>
      <Box sx={{ p: 2 }}>
        <Stack marginBottom={1}>
          <Typography
            variant="subtitle1"
            textOverflow="ellipsis"
            noWrap
            component={Link}
            to={`${publicRoutes.PRODUCT.path}/${slugify(product.name, { lower: true })}`}
            sx={{
              textDecoration: "none",
              color: "text.primary",
              "&:hover": { color: "primary.main", textDecoration: "underline" },
            }}
            state={product}
          >
            {product.name}
          </Typography>
          <Typography variant="body2" fontWeight="bold" color="error.main">
            {currencyFormat(product.price)}đ
          </Typography>
        </Stack>
        <Box>
          <Typography variant="subtitle2" fontWeight={500}>
            {product.description.length > MAX_LENGTH
              ? product.description.slice(0, MAX_LENGTH) + "..."
              : product.description}
          </Typography>
        </Box>
        <ProductAction direction="row" alignItems="center" justifyContent="center" gap={3}>
          <Button
            to={publicRoutes.CHECKOUT.path}
            component={Link}
            variant="contained"
            size="medium"
            onClick={handleAddToCart}
          >
            Mua ngay
          </Button>
          <Button variant="outlined" size="medium" onClick={handleAddToCart}>
            Thêm vào giỏ hàng
          </Button>
        </ProductAction>
      </Box>
    </ProductWrapper>
  );
}

export default HomeProductCard;
