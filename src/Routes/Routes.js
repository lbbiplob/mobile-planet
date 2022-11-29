import { createBrowserRouter } from "react-router-dom";
import Login from "../Authentication/Login/Login";
import Register from "../Authentication/Register/Register";
import DashbordLayout from "../Layouts/DashbordLayout/DashbordLayout";
import Main from "../Layouts/Main/Main";
import Addproduct from "../Pages/AddProduct/Addproduct";
import Blogs from "../Pages/Blogs/Blogs";
// import AllProducts from "../Pages/AllProducts/AllProducts/AllProducts";
import CategoryData from "../Pages/CategoryData/CategoryData";
import AllBuyers from "../Pages/Dashboard/AllBuyers/AllBuyers";
import AllSellers from "../Pages/Dashboard/AllSellers/AllSellers";
import Dashboard from "../Pages/Dashboard/Dashboard/Dashboard";
import ReportedProducts from "../Pages/Dashboard/ReportedProduct/ReportedProducts";

import Home from "../Pages/Home/Home/Home";
import MyOrders from "../Pages/MyOrders/MyOrders/MyOrders";
import MyProducts from "../Pages/MyProducts/MyProducts/MyProducts";
import Payment from "../Pages/Payment/Payment";
import DisplayError from "../Pages/Shared/DisplayError/DisplayError";
import PrivetRoute from "./PrivetRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <DisplayError></DisplayError>,
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
        path: "/blogs",
        element: <Blogs></Blogs>,
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
        loader: ({ params }) =>
          fetch(`http://localhost:5000/booking/${params.id}`),
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivetRoute>
        <DashbordLayout></DashbordLayout>
      </PrivetRoute>
    ),
    children: [
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
      },
      {
        path: "/dashboard/allbuyers",

        element: <AllBuyers></AllBuyers>,
      },
      {
        path: "/dashboard/allsellers",
        element: <AllSellers></AllSellers>,
      },
      {
        path: "/dashboard/reported",
        element: <ReportedProducts></ReportedProducts>,
      },
    ],
  },
]);
export default router;
