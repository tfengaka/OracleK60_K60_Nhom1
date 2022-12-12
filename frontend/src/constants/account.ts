import { publicRoutes } from "~/routes";
export const sidebarItems = [
  {
    title: "Hồ sơ",
    path: publicRoutes.PROFILE.path,
    icon: "mdi:user-box",
  },
  {
    title: "Lịch sử mua hàng",
    path: publicRoutes.PURCHASE.path,
    icon: "bxs:cart",
  },
];
