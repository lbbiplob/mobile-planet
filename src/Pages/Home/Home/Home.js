import React from "react";
import Banner from "../Banner/Banner";
import Categories from "../Categories/Categories/Categories";

const Home = () => {
  return (
    <div className="lg:w-10/12 w-11/12 mx-auto ">
      <Banner></Banner>
      <Categories></Categories>
    </div>
  );
};

export default Home;
