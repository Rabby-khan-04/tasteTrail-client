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
import PrivateRoute from "./PrivateRoute";
import Dashboard from "@/layouts/Dashboard";
import AddProduct from "@/pages/AddProduct/AddProduct";
import MyProduct from "@/pages/MyProduct/MyProduct";
import UpdateProduct from "@/pages/UpdateProduct/UpdateProduct";
import AdminRoutes from "./AdminRoutes";
import AllOrders from "@/pages/AllOrders/AllOrders";

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
        path: "product/:id",
        element: <Product />,
      },
      {
        path: "checkout",
        element: (
          <PrivateRoute>
            <Checkout />
          </PrivateRoute>
        ),
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
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
    children: [
      {
        path: "my-account",
        element: (
          <PrivateRoute>
            <MyAccount />
          </PrivateRoute>
        ),
      },
      {
        path: "orders",
        element: (
          <PrivateRoute>
            <Orders />
          </PrivateRoute>
        ),
      },
      {
        path: "add-product",
        element: (
          <PrivateRoute>
            <AddProduct />
          </PrivateRoute>
        ),
      },
      {
        path: "my-product",
        element: (
          <PrivateRoute>
            <MyProduct />
          </PrivateRoute>
        ),
      },
      {
        path: "update-product/:id",
        element: (
          <PrivateRoute>
            <UpdateProduct />
          </PrivateRoute>
        ),
      },
      {
        path: "all-orders",
        element: (
          <AdminRoutes>
            <AllOrders />
          </AdminRoutes>
        ),
      },
    ],
  },
]);
export default router;
