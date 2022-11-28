import { useQuery } from "@tanstack/react-query";
import React from "react";
import Product from "../../AllProducts/Product/Product/Product";

const AdvertiseProduct = () => {
  const { data: products = [] } = useQuery({
    queryKey: ["products"],
    queryFn: () =>
      fetch("http://localhost:5000/products").then((res) => res.json()),
  });
  const advertiseProducts = products.filter(
    (product) => product.status === "advertised"
  );
  console.log(advertiseProducts);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-11/12 mx-auto my-12 gap-5 ">
      {advertiseProducts.map((product) => (
        <>
          {product.status === "advertised" && (
            <Product key={product._id} product={product}></Product>
          )}
        </>
      ))}
    </div>
  );
};

export default AdvertiseProduct;
