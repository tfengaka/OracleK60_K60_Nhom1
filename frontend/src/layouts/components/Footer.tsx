import { Box, Grid, Stack, styled, Typography } from "@mui/material";
import { aboutLinks, mobileStore, paymentIcon, socialIcon, supportLinks } from "~/constants/footer";

const Wrapper = styled(Box)(({ theme }) => ({
  borderTop: `5px solid ${theme.palette.primary.light}`,
  width: "100%",
  padding: theme.spacing(2, 10),
}));

const FlexList = styled("ul")(() => ({
  display: "flex",
  flexWrap: "wrap",
  listStyleType: "none",
  padding: 0,
}));

const FlexListItem = styled("li")(({ theme }) => ({
  width: "5rem",
  height: "3rem",
  padding: "0.25rem",
  marginBottom: "0.5rem",
  marginRight: "0.5rem",
  backgroundColor: theme.palette.background.default,
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[10],
  cursor: "pointer",
}));

const Image = styled("img")(({ theme }) => ({
  width: "100%",
  height: "100%",
  borderRadius: theme.shape.borderRadius,
  objectFit: "contain",
}));

const Footer = () => (
  <Wrapper>
    <Grid container spacing={2}>
      <Grid item xs={3}>
        <Typography variant="h5" fontWeight="bold" sx={{ mb: 2 }}>
          Hỗ trợ khách hàng
        </Typography>
        <Stack spacing={1}>
          {supportLinks.map((link, index) => (
            <Typography key={index} color="text.secondary" variant="subtitle1" fontWeight={500}>
              {link}
            </Typography>
          ))}
        </Stack>
      </Grid>
      <Grid item xs={3}>
        <Typography variant="h5" fontWeight="bold" color="text.primary" sx={{ mb: 2 }}>
          Về chúng tôi
        </Typography>
        <Stack spacing={1}>
          {aboutLinks.map((link, index) => (
            <Typography key={index} color="text.secondary" variant="subtitle1" fontWeight={500}>
              {link}
            </Typography>
          ))}
        </Stack>
      </Grid>
      <Grid item xs={3}>
        <Typography variant="h5" fontWeight="bold" color="text.primary" sx={{ mb: 2 }}>
          Phương thức thanh toán
        </Typography>
        <FlexList>
          {paymentIcon.map((icon, index) => (
            <FlexListItem key={index}>
              <Image src={icon.icon} alt={icon.name} />
            </FlexListItem>
          ))}
        </FlexList>
      </Grid>
      <Grid display="center" item xs={3}>
        <Box>
          <Typography variant="h5" fontWeight="bold" color="text.primary" sx={{ mb: 1 }}>
            Kết nối với chúng tôi
          </Typography>
          <Stack direction="row" spacing={1} marginBottom={1}>
            {socialIcon.map((icon, index) => (
              <Box key={index} sx={{ width: 45, height: 45 }}>
                <Image src={icon.icon} alt={icon.name} />
              </Box>
            ))}
          </Stack>
          <Typography variant="h5" fontWeight="bold" color="text.primary" sx={{ mb: 1 }}>
            Tải ứng dụng trên điện thoại
          </Typography>
          <Stack direction="row" alignItems="center" spacing={1}>
            {mobileStore.map((store, index) => (
              <Box key={index} sx={{ height: 56 }}>
                <Image src={store.icon} alt={store.name} />
              </Box>
            ))}
          </Stack>
        </Box>
      </Grid>
    </Grid>
  </Wrapper>
);

export default Footer;
