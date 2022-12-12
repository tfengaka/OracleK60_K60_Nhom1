import { Box, Stack, styled, Typography } from "@mui/material";

const GuidesBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: theme.spacing(25),
  marginTop: theme.spacing(5),
  marginBottom: theme.spacing(5),
}));

const GuideBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  marginTop: theme.spacing(3),
}));

const HomeGuide = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div style={{ width: "6%", height: "5px", backgroundColor: "#2065D1", margin: "20px auto" }}></div>
      <Typography variant="h3" sx={{ color: "#000339" }}>
        Mua sắm thả ga
      </Typography>
      <Box
        sx={{
          width: "30%",
        }}
      >
        <Typography variant="subtitle1" textAlign="center" color="#5a6473">
          Những mặt hàng mới liên tục cập nhật
        </Typography>
      </Box>
      <GuidesBox>
        <GuideBox>
          <img src="/static/icon/buy_icon.png" />
          <Typography variant="h5" fontWeight="bold" color="#3b3c45" textAlign="center" sx={{ mt: 1 }}>
            Mua sắm tại shop
          </Typography>
          <Stack direction="row" alignItems="center" justifyContent="center" sx={{ cursor: "pointer" }}>
            <Typography variant="subtitle2" color="primary" fontWeight="bold">
              Mua sắm trực tuyến
            </Typography>
          </Stack>
        </GuideBox>

        <GuideBox>
          <img src="/static/icon/rent_icon.png" />
          <Typography variant="h5" fontWeight="bold" color="#3b3c45" textAlign="center" sx={{ mt: 1 }}>
            Thương hiệu chính hãng
          </Typography>
          <Box sx={{ cursor: "pointer", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <Typography variant="subtitle2" color="primary" fontWeight="bold">
              Mua sắm an toàn
            </Typography>
          </Box>
        </GuideBox>

        <GuideBox>
          <img src="/static/icon/sell_icon.png" />
          <Typography variant="h5" fontWeight="bold" color="#3b3c45" textAlign="center" sx={{ mt: 1 }}>
            Tràn ngập khuyến mãi
          </Typography>
          <Box sx={{ cursor: "pointer", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <Typography variant="subtitle2" color="primary" fontWeight="bold">
              Mua sắm tiết kiệm
            </Typography>
          </Box>
        </GuideBox>
      </GuidesBox>
    </Box>
  );
};

export default HomeGuide;
