import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import useTitle from "../../../Hooks/useTitle";
import Myproduct from "../Myproduct/Myproduct";

const MyProducts = () => {
  useTitle("My Product");
  const { user } = useContext(AuthContext);

  const { data: MyProducts = [], refetch } = useQuery({
    queryKey: ["products", user?.email],
    queryFn: () =>
      fetch(
        `https://mobile-planet-bd-server.vercel.app/products?email=${user.email}`
      ).then((res) => res.json()),
  });
  console.log(MyProducts);
  console.log(MyProducts);
  return (
    <div>
      <h2 className="text-xl font-bold text-center my-5 mx-auto">
        Hi {user?.displayName} !!! Your All Products
      </h2>
      {MyProducts.map((myproduct, index) => (
        <Myproduct
          key={myproduct._id}
          myproduct={myproduct}
          index={index}
          refetch={refetch}
        ></Myproduct>
      ))}
    </div>
  );
};

export default MyProducts;
