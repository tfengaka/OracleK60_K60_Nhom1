import { createBrowserRouter, Navigate, RouteObject, RouterProvider } from "react-router-dom";
import { AuthLayout, CartLayout, MainLayout } from "~/layouts";
import AccountLayout from "~/layouts/AccountLayout";
import { UserProfile, UserPurchase } from "~/modules/account";
import { AboutPage, ContactPage, HomePage, LoginPage, Page404, ProductPage, RegisterPage } from "~/page";
import Checkout from "~/page/Checkout";
import ProductDetail from "~/page/ProductDetail";
import { authRoutes, publicRoutes } from "~/routes";

const routesConfig: RouteObject[] = [
  // Public routes
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Navigate to={publicRoutes.HOME.path} />,
      },
      {
        path: publicRoutes.HOME.path,
        element: <HomePage />,
      },
      {
        path: publicRoutes.CONTACT.path,
        element: <ContactPage />,
      },
      {
        path: publicRoutes.ABOUT.path,
        element: <AboutPage />,
      },
      {
        path: publicRoutes.PRODUCT.path,
        children: [
          {
            index: true,
            element: <ProductPage />,
          },
          {
            path: publicRoutes.PRODUCT.children.DETAIL.path,
            element: <ProductDetail />,
          },
        ],
      },
    ],
  },
  {
    path: "/account",
    element: <AccountLayout />,
    children: [
      {
        path: publicRoutes.PROFILE.path,
        element: <UserProfile />,
      },
      {
        path: publicRoutes.PURCHASE.path,
        element: <UserPurchase />,
      },
    ],
  },
  {
    element: <CartLayout />,
    children: [
      {
        path: publicRoutes.CHECKOUT.path,
        element: <Checkout />,
      },
    ],
  },
  // Auth routes
  {
    path: "/",
    element: <AuthLayout />,
    children: [
      {
        path: authRoutes.LOGIN.path,
        element: <LoginPage />,
      },
      {
        path: authRoutes.REGISTER.path,
        element: <RegisterPage />,
      },
    ],
  },
  // Not found
  {
    path: "*",
    element: <Page404 />,
  },
];
const Routes = () => <RouterProvider router={createBrowserRouter(routesConfig)} />;
export default Routes;
