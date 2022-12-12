import { Grid, Typography } from "@mui/material";

function ProductPolicy() {
  return (
    <Grid item xs={8}>
      <Typography gutterBottom variant="body1" fontSize={15} color="#ff424f">
        Giá ưu đãi chỉ áp dụng với số lượng sản phẩm nhất định. Giá sản phẩm sẽ thay đổi nếu bạn mua nhiều hơn số lượng
        quy định
      </Typography>
    </Grid>
  );
}

export default ProductPolicy;
