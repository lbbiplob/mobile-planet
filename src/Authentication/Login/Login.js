import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Login = () => {
  const { emailPasswordLogin, googleLogin } = useContext(AuthContext);
  const handelLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    emailPasswordLogin(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => console.error(error));
  };

  const handelGoogleLogin = () => {
    const provider = new GoogleAuthProvider();
    googleLogin(provider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => console.error(error));
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="   ">
        <div className="  shadow-2xl bg-base-100 p-12 rounded-3xl ">
          <div className="text-center mb-4 ">
            <h1 className="text-5xl font-bold">Login now!</h1>
          </div>
          <form onSubmit={handelLogin} className="w-96">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                name="email"
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
                name="password"
                type="password"
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
              <button type="submit" className="btn btn-primary">
                Login
              </button>
            </div>
          </form>
          <div className="divider">OR</div>
          <div className="form-control mt-6">
            <button onClick={handelGoogleLogin} className="btn btn-primary">
              Google Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
