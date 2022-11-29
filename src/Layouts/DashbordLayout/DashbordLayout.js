import React from "react";
import { Outlet } from "react-router-dom";

import DashBoardManu from "../../Pages/Dashboard/DashbordManu/DashBoardManu";
import Navbar from "../../Pages/Shared/Navbar/Navbar";

const DashbordLayout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="flex flex-col lg:grid lg:grid-cols-4 w-11/12 mx-auto my-10">
        <DashBoardManu></DashBoardManu>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default DashbordLayout;
