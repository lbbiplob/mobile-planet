import React from "react";
import service from "../../../images/service.jpg";

const Choose = () => {
  return (
    <div className="bg-primary  my-10 rounded-3xl">
      <div className="p-6 grid grid-cols-1 lg:grid-cols-2 items-center">
        <div className="items-center">
          <ul className=" text-white text-lg lg:ml-32 text-left">
            <li>24/7 Live Support</li>
            <li>7 Days Replace Guarantee</li>
            <li>With in 3 hours Delivery in city</li>
            <li>Online Payment </li>
            <li>Trusted Seller</li>
          </ul>
        </div>
        <div>
          <img className=" rounded-3xl" src={service} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Choose;
