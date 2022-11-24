import { createBrowserRouter } from "react-router-dom";
import Login from "../Authentication/Login/Login";
import Register from "../Authentication/Register/Register";
import Main from "../Layouts/Main/Main";
import Addproduct from "../Pages/AddProduct/Addproduct";
import Home from "../Pages/Home/Home/Home";
import MyOrders from "../Pages/MyOrders/MyOrders/MyOrders";
import MyProducts from "../Pages/MyProducts/MyProducts/MyProducts";
import PrivetRoute from "./PrivetRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/addproduct",
        element: (
          <PrivetRoute>
            <Addproduct></Addproduct>
          </PrivetRoute>
        ),
      },
      {
        path: "/myproducts",
        element: (
          <PrivetRoute>
            <MyProducts></MyProducts>
          </PrivetRoute>
        ),
      },
      {
        path: "/myorders",
        element: (
          <PrivetRoute>
            <MyOrders></MyOrders>
          </PrivetRoute>
        ),
      },
    ],
  },
]);
export default router;
