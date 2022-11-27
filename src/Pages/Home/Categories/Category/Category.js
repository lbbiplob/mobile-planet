import React from "react";
import { Link } from "react-router-dom";

const Category = ({ category }) => {
  const { categoryId, cetegoryName } = category;
  console.log(category);
  return (
    <div className="card bg-neutral shadow-xl">
      <div className="card-body">
        <h2 className="card-title text-white text-center">
          <Link to={`category/${categoryId}`}>{cetegoryName}</Link>
        </h2>
      </div>
    </div>
  );
};

export default Category;
