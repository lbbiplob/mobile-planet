import { useQuery } from "@tanstack/react-query";
import React from "react";
import Product from "../../AllProducts/Product/Product/Product";

const AdvertiseProduct = () => {
  const { data: products = [] } = useQuery({
    queryKey: ["products"],
    queryFn: () =>
      fetch("https://mobile-planet-bd-server.vercel.app/products").then((res) =>
        res.json()
      ),
  });
  const advertiseProducts = products.filter(
    (product) => product.status === "advertised"
  );
  console.log(advertiseProducts.length);
  return (
    <div>
      {advertiseProducts.length !== 0 && (
        <h2 className="text-3xl font-bold text-center">Advertise Phones</h2>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-11/12 mx-auto my-12 gap-5 ">
        {advertiseProducts.map((product, index) => (
          <React.Fragment key={product._id}>
            {product.status === "advertised" && !product.paid && (
              <Product product={product}></Product>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default AdvertiseProduct;
