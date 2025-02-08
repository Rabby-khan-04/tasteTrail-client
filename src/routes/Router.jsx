import ErrorPage from "@/components/ErrorPage/ErrorPage";
import Main from "@/layouts/Main";
import Login from "@/pages/Auth/Login";
import Register from "@/pages/Auth/Register";
import Checkout from "@/pages/Checkout/Checkout";
import Contact from "@/pages/Contact/Contact";
import Home from "@/pages/Home/Home";
import Journal from "@/pages/Journal/Journal";
import MyAccount from "@/pages/MyAccount/MyAccount";
import Orders from "@/pages/Orders/Orders";
import Product from "@/pages/Product/Product";
import Shop from "@/pages/Shop/Shop";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "journal",
        element: <Journal />,
      },
      {
        path: "shop",
        element: <Shop />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "my-account",
        element: <MyAccount />,
      },
      {
        path: "product/:id",
        element: <Product />,
      },
      {
        path: "checkout",
        element: <Checkout />,
      },
      {
        path: "orders",
        element: <Orders />,
      },
    ],
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "register",
    element: <Register />,
  },
]);
export default router;
