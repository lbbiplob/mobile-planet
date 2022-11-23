import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Register = () => {
  const { createUser, updateUserDetails, user } = useContext(AuthContext);
  console.log(user);
  const handelRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const userType = e.target.usertype.value;
    console.log(userType, email, password, name);
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        const updateName = {
          displayName: name,
        };
        updateUserDetails(updateName)
          .then((result) => {})
          .catch((error) => console.error(error));
      })
      .catch((error) => console.error(error));
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="   ">
        <div className="  shadow-2xl bg-base-100 p-12 rounded-3xl ">
          <div className="text-center mb-4 ">
            <h1 className="text-5xl font-bold">Register Now</h1>
          </div>
          <form onSubmit={handelRegister} className="w-96">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Full Name</span>
              </label>
              <input
                name="name"
                type="text"
                placeholder="full name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                name="email"
                type="text"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                name="password"
                type="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold">
                  Select your account type
                </span>
              </label>
              <select
                name="usertype"
                className="select select-info w-full "
                required
              >
                <option value="Buyer">Buyer</option>
                <option value="Seller">Seller</option>
              </select>
            </div>

            <div>
              <label className="label">
                <span>
                  Already have account{" "}
                  <Link to={"/login"} className="link link-info">
                    Login
                  </Link>{" "}
                </span>
              </label>
            </div>
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary">
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
