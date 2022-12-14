import React from "react";
import { useLoaderData } from "react-router-dom";
import Product from "../AllProducts/Product/Product/Product";

const CategoryData = () => {
  const products = useLoaderData();

  const filterProducts = products.filter((product) => product.paid !== true);

  return (
    <div>
      <div></div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-11/12 mx-auto my-12 gap-5 ">
        {filterProducts?.map(
          (product) =>
            !product.paid && (
              <>
                <Product key={product._id} product={product}></Product>
              </>
            )
        )}
      </div>
    </div>
  );
};

export default CategoryData;
