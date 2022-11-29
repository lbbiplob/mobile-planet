import React from "react";
import { Link } from "react-router-dom";

const DashBoardManu = () => {
  return (
    <div className="col-span-1">
      <ul className="menu bg-base-100 w-80 p-2 rounded-box">
        <li>
          <Link to={"/dashboard/allbuyers"}>All Buyer</Link>
        </li>
        <li>
          <Link to={"/dashboard/allsellers"}>All Seller</Link>
        </li>
        <li>
          <Link to={"/dashboard/reported"}>Reported Products</Link>
        </li>
      </ul>
    </div>
  );
};

export default DashBoardManu;
