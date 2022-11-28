import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import UseSeller from "../../../Hooks/UseSeller";
import logo from "../../../images/Logo.png";
import Loading from "../../Loading/Loading";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isSeller] = UseSeller(user?.email);

  const handelLogout = () => {
    logOut()
      .then((result) => {
        toast.success("Logout Successfully");
      })
      .catch((error) => console.error(error));
  };
  return (
    <div className="navbar bg-neutral text-white lg:px-10 ">
      <div className="navbar-start">
        <div className="dropdown ">
          <label tabIndex={0} className="btn btn-ghost  lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow  rounded-box w-52 bg-neutral"
          >
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            {user && isSeller ? (
              <>
                <li>
                  <Link to={"addproduct"}>Add Product</Link>
                </li>
                <li>
                  <Link to={"myproducts"}>My Products</Link>
                </li>
              </>
            ) : (
              <Loading></Loading>
            )}
            {user?.email ? (
              <>
                <li>
                  <Link onClick={handelLogout}>Logout</Link>
                </li>
              </>
            ) : (
              <li>
                <Link to={"login"}>Login</Link>
              </li>
            )}
          </ul>
        </div>
        <img className="w-14" src={logo} alt="" />
        <Link className="btn btn-ghost normal-case text-xl">Mobile Planet</Link>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal p-0 ">
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          {user && isSeller && (
            <>
              <li>
                <Link to={"addproduct"}>Add Product</Link>
              </li>
              <li>
                <Link to={"myproducts"}>My Products</Link>
              </li>
            </>
          )}
          {user && !isSeller && (
            <>
              {" "}
              <li>
                <Link to={"myorders"}>My Orders</Link>
              </li>
            </>
          )}
          {user?.email ? (
            <>
              <li>
                <Link onClick={handelLogout}>Logout</Link>
              </li>
            </>
          ) : (
            <li>
              <Link to={"login"}>Login</Link>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
