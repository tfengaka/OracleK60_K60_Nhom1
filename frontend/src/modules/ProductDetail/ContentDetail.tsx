import { Grid, Stack, Typography } from "@mui/material";
import { Iconify } from "~/components";
import { Product } from "~/models";
import { currencyFormat } from "~/utils/formats";
import { Counter } from "../cart";
import DiscountDetail from "./DiscountDetail";
import ProductPolicy from "./ProductPolicy";
interface ProductProps {
  data: Product;
  quantityData: number;
  setQuantityData: (value: number) => void;
}

function ContentDetail({ data, quantityData, setQuantityData }: ProductProps) {
  return (
    <Grid container spacing={2} alignItems="center">
      <Grid item>
        <Typography gutterBottom variant="body1" fontSize={25}>
          {data.name}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h4" color="#ff1744" gutterBottom sx={{ backgroundColor: "#fafafa", p: 2 }}>
          {currencyFormat(data.price)} ₫
        </Typography>
      </Grid>
      <DiscountDetail />
      <Grid item xs={4}>
        <Typography gutterBottom variant="body1" fontSize={17} color="text.secondary">
          Vận chuyển
        </Typography>
      </Grid>
      <Grid item xs={8}>
        <Stack direction="row" spacing={1} alignItems="center">
          <Iconify icon="ph:truck" width={18} height={18} color="text.secondary" />
          <Typography gutterBottom variant="body1" fontSize={15} color="text.secondary">
            Miễn phí vận chuyển
          </Typography>
        </Stack>
      </Grid>
      <Grid item xs={4}>
        <Typography gutterBottom variant="body1" fontSize={17} color="text.secondary">
          Số lượng
        </Typography>
      </Grid>
      <Grid item xs={8}>
        <Stack direction="row" spacing={2} alignItems="center">
          <Counter value={quantityData} onUpdateValue={setQuantityData} />
          <Typography gutterBottom variant="body1" fontSize={15} color="text.secondary">
            {data.quantityStore} sản phẩm có sẵn
          </Typography>
        </Stack>
      </Grid>
      <Grid item xs={4} />
      <ProductPolicy />
    </Grid>
  );
}

export default ContentDetail;
