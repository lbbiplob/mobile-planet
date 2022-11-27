import React from "react";
import { Link } from "react-router-dom";
import banner from "../../../images/banner.jpg";

const Banner = () => {
  return (
    <div
      className="hero my-10 rounded-3xl"
      style={{ backgroundImage: `url(${banner})`, borderRadius: "30px" }}
    >
      <div className="hero-overlay bg-opacity-60 rounded-3xl"></div>
      <div className="hero-content text-center text-white lg:py-20">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">
            Biggest Second Hand Phone Selling online Market place
          </h1>
          <p className="mb-5">
            Welcome to our online second hand phone selling site.Here you can
            buy good quality phone. this site all phone condition is good . All
            product are original . Hope you can find your best phone . buy phone
            please singin.
          </p>
          <button className="btn btn-primary">
            <Link to={"/register"}>Sing up</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
