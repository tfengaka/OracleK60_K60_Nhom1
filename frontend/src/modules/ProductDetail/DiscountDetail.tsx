import { Grid, Stack, Typography } from "@mui/material";
import { Iconify } from "~/components";

function DiscountDetail() {
  return (
    <>
      <Grid item xs={4}>
        <Typography gutterBottom variant="body1" fontSize={17} color="text.secondary">
          Mã giảm giá của Shop
        </Typography>
      </Grid>
      <Grid item xs={8}>
        <Stack direction="row" spacing={0.5} alignItems="center" sx={{ backgroundColor: "#fbebed", p: 1 }}>
          <Iconify icon="ic:baseline-discount" width={18} height={18} color="#d51d35" />
          <Typography gutterBottom variant="body1" fontSize={15} color="#d51d35">
            Giảm 100k
          </Typography>
        </Stack>
      </Grid>
    </>
  );
}

export default DiscountDetail;
