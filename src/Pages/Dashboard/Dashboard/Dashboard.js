import React, { useContext } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className=" md:col-span-2 lg:col-span-3">
      <h2 className=" text-3xl font-bold ">
        Hi {user.displayName} welcome to Admin dashboard
      </h2>
    </div>
  );
};

export default Dashboard;
