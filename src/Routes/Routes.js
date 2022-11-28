import { createBrowserRouter } from "react-router-dom";
import Login from "../Authentication/Login/Login";
import Register from "../Authentication/Register/Register";
import Main from "../Layouts/Main/Main";
import Addproduct from "../Pages/AddProduct/Addproduct";
// import AllProducts from "../Pages/AllProducts/AllProducts/AllProducts";
import CategoryData from "../Pages/CategoryData/CategoryData";
import Home from "../Pages/Home/Home/Home";
import MyOrders from "../Pages/MyOrders/MyOrders/MyOrders";
import MyProducts from "../Pages/MyProducts/MyProducts/MyProducts";
import Payment from "../Pages/Payment/Payment";
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
      // {
      //   path: "/allproducts",
      //   element: <AllProducts></AllProducts>,
      // },

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
      {
        path: "/category/:id",
        element: (
          <PrivetRoute>
            <CategoryData></CategoryData>
          </PrivetRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/category/${params.id}`),
      },
      {
        path: "/payment/:id",
        element: (
          <PrivetRoute>
            <Payment></Payment>
          </PrivetRoute>
        ),
        // loader: ({ params }) =>
        //   fetch(`http://localhost:5000/category/${params.id}`),
      },
    ],
  },
]);
export default router;
