import { Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import slugify from "slugify";
import { Product } from "~/models";
import { publicRoutes } from "~/routes";
import { currencyFormat } from "~/utils/formats";
interface ProductProps {
  data: Product;
}

function ProductItem({ data }: ProductProps) {
  return (
    <Grid item xs={2}>
      <Card sx={{ maxWidth: "100%", minWidth: 250 }}>
        <CardActionArea
          component={Link}
          to={publicRoutes.PRODUCT.path + `/${slugify(data.name, { lower: true })}`}
          state={data}
        >
          <CardMedia
            component="img"
            image={
              data && data.images.length > 0 ? data.images[0].url : "/static/illustrations/illustration_product.svg"
            }
            sx={{ height: 200 }}
          />

          <CardContent>
            <Typography
              gutterBottom
              variant="body1"
              maxWidth="100%"
              height={100}
              sx={{
                overflow: "hidden",
                textOverflow: "ellipsis",
                display: "-webkit-box",
                WebkitLineClamp: "4",
                WebkitBoxOrient: "vertical",
              }}
            >
              {data.name}
            </Typography>
            <Typography variant="h6" color="#ff1744">
              {currencyFormat(data.price)} ₫
            </Typography>
            <Typography gutterBottom variant="body1" fontSize={13}>
              Đã bán 10k
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
}

export default ProductItem;
