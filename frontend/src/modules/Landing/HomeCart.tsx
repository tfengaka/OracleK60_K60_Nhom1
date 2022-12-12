import { Box, Card, CardContent, CardMedia, Collapse, Container, Stack, styled } from "@mui/material";
import Typography from "@mui/material/Typography";
import { Fragment, useEffect, useState } from "react";

const Carts = [
  {
    id: "1",
    img: "https://www.datocms-assets.com/6783/1643324716-bhi-fashion-designer-female.png",
    title: "Thời trang",
    desc: "Hãy đến shop của chúng tôi, các bạn sẽ được trải nghiệm về chất lượng phục vụ của nhân viên một cách tốt nhất.",
  },
  {
    id: "2",
    img: "https://www.rilastil.com.vn/data/upload/duoc%20pham%20va%20my%20pham.png",
    title: "Mỹ phẫm",
    desc: "Mỹ phẩm đa dạng và được nhập từ Mỹ với chất lượng được đảm bảo một cách an toàn và hiệu quả nhất dành cho khách hàng.",
  },
  {
    id: "3",
    img: "https://bucket.nhanh.vn/store1/40602/ps/20200623/combo_du_doan_tuong_lai_1.png",
    title: "Sách báo",
    desc: "Mang đến nhiều hiểu biết, truyền cảm hứng và tri thức cho mọi người với những cuốn sách hay ",
  },
];

const CardItem = styled(Card)(({ theme }) => ({
  maxWidth: "500px",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.background.paper,
  boxShadow: theme.shadows[10],
}));

const HomeCart = () => {
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    setChecked(true);
  }, []);

  return (
    <Collapse in={checked} {...(checked ? { timeout: 1500 } : {})} collapsedSize={15}>
      <Box>
        <div style={{ width: "6%", height: "5px", backgroundColor: "#2065D1", margin: "20px auto" }}></div>
        <Typography variant="h3" textAlign="center">
          Thương hiệu độc quyền
        </Typography>
        <Stack direction="row" alignItems="center" justifyContent="center" gap={5} sx={{ ml: 8, mt: 5 }}>
          {Carts.map((item) => (
            <Fragment key={item.id}>
              <Box>
                <Container>
                  <CardItem>
                    <CardMedia component="img" height="350" image={item.img} alt={item.title} />
                    <CardContent sx={{ mt: 5 }}>
                      <Typography gutterBottom variant="h4" component="div">
                        {item.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ fontSize: "16px" }}>
                        {item.desc}
                      </Typography>
                    </CardContent>
                  </CardItem>
                </Container>
              </Box>
            </Fragment>
          ))}
        </Stack>
      </Box>
    </Collapse>
  );
};

export default HomeCart;
