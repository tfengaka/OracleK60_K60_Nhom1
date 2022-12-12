export const authRoutes = {
  LOGIN: {
    path: "/login",
  },
  REGISTER: {
    path: "/register",
  },
};

export const publicRoutes = {
  HOME: {
    path: "/home",
  },
  ABOUT: {
    path: "/about",
  },
  PRODUCT: {
    path: "/product",
    children: {
      DETAIL: {
        path: ":id",
      },
    },
  },
  CONTACT: {
    path: "/contact",
  },
  CHECKOUT: {
    path: "/checkout",
  },
  PROFILE: {
    path: "/account/profile",
  },
  PURCHASE: {
    path: "/account/purchase",
  },
};

export const privateRoutes = {};

export const ROLES = {
  ADMIN: "admin",
  USER: "user",
};
