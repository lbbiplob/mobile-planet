import React from "react";
import AdvertiseProduct from "../AdvertiseProduct/AdvertiseProduct";
import Banner from "../Banner/Banner";
import Categories from "../Categories/Categories/Categories";
import Choose from "../Choose/Choose";

const Home = () => {
  return (
    <div className="lg:w-10/12 w-11/12 mx-auto ">
      <Banner></Banner>
      <Categories></Categories>
      <AdvertiseProduct></AdvertiseProduct>
      <Choose></Choose>
    </div>
  );
};

export default Home;
