import { Box, Tab, Tabs } from "@mui/material";
import { SyntheticEvent, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { publicRoutes } from "~/routes";

interface ITabLink {
  label?: string;
  to?: string;
}

const MAIN_LINK = [
  {
    display: "Trang chủ",
    path: publicRoutes.HOME.path,
  },
  {
    display: "Sản phẩm",
    path: publicRoutes.PRODUCT.path,
  },
  {
    display: "Liên hệ",
    path: publicRoutes.CONTACT.path,
  },
  {
    display: "Giới thiệu",
    path: publicRoutes.ABOUT.path,
  },
];

const TabLink = (props: ITabLink) => <Tab LinkComponent={Link} {...props} />;

function NavigationLink() {
  const { pathname } = useLocation();
  const [value, setValue] = useState(0);

  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  useEffect(() => {
    const index = MAIN_LINK.findIndex((link) => pathname.includes(link.path));
    setValue(index);
  }, [pathname]);

  return (
    <Box sx={{ height: "100%" }}>
      <Tabs value={value} onChange={handleChange}>
        {MAIN_LINK.map((link, index) => (
          <TabLink key={index} label={link.display} to={link.path} />
        ))}
      </Tabs>
    </Box>
  );
}
export default NavigationLink;
