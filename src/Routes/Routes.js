import { createBrowserRouter } from "react-router-dom";
import Login from "../Authentication/Login/Login";
import Register from "../Authentication/Register/Register";
import Main from "../Layouts/Main/Main";
import Addproduct from "../Pages/AddProduct/Addproduct";
import Home from "../Pages/Home/Home/Home";

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
        element: <Addproduct></Addproduct>,
      },
    ],
  },
]);
export default router;
