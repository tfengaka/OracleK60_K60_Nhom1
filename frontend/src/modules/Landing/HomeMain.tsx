import { Box, Collapse, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { Stack } from "@mui/system";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { publicRoutes } from "~/routes";

const HomeMain = () => {
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    setChecked(true);
  }, []);

  return (
    <Collapse in={checked} {...(checked ? { timeout: 1100 } : {})}>
      <Box>
        <Stack direction="row" alignItems="center" justifyContent="center" gap={10} sx={{ ml: 8 }}>
          <Box sx={{ flex: "1.25" }}>
            <Typography variant="h3" sx={{ color: "#687690" }}>
              Welcome to The Shopping Mall
            </Typography>
            <Typography variant="h2">Giao hàng tận tay</Typography>
            <Typography variant="h3" color="primary">
              Đặt hàng ngay hôm nay
            </Typography>
            <Typography variant="body1" sx={{ fontWeight: "500", color: "#5A6473", my: 4 }}>
              Đến với shop của chúng tôi các bạn có thể trải nghiệm nhiều loại sản phẩm kèm theo những khuyến mãi cực
              khủng!
            </Typography>
            <Button to={publicRoutes.PRODUCT.path} variant="contained" size="large" component={Link}>
              Trải nghiệm ngay
            </Button>
          </Box>

          <Box sx={{ flex: "1.6", mt: 7 }}>
            <img src="/static/banner/banner-1.png" alt="" style={{ maxWidth: "100%", marginBottom: "2rem" }} />
          </Box>
        </Stack>
      </Box>
    </Collapse>
  );
};

export default HomeMain;
