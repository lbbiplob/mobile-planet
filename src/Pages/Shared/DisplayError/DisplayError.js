import React, { useContext } from "react";
import { Link, useNavigate, useRouteError } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../../AuthProvider/AuthProvider";

const DisplayError = () => {
  const { logOut } = useContext(AuthContext);
  const error = useRouteError();
  const navigate = useNavigate();
  const handelLogout = () => {
    logOut()
      .then((result) => {
        toast.success("Logout Successfully");
        navigate("/login");
      })
      .catch((error) => console.error(error));
  };
  return (
    <div className="text-center mx-auto">
      <p className="text-red-500">Some is wrong</p>

      <p className="text-red-600">{error.statusText || error.massage}</p>
      <h3 className="text-3xl">
        {" "}
        Please <Link onClick={handelLogout}>Logout</Link>
      </h3>
    </div>
  );
};

export default DisplayError;
