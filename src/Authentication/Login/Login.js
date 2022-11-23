import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="   ">
        <div className="  shadow-2xl bg-base-100 p-12 rounded-3xl ">
          <div className="text-center mb-4 ">
            <h1 className="text-5xl font-bold">Login now!</h1>
          </div>
          <form className="w-96">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="text"
                placeholder="password"
                className="input input-bordered"
              />
              <label className="label">
                <span>
                  Don't have account{" "}
                  <Link to={"/register"} className="link link-info">
                    Please Register
                  </Link>{" "}
                </span>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
          <div className="divider">OR</div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Google Login</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
