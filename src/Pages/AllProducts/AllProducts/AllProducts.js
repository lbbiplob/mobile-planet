import { useQuery } from "@tanstack/react-query";
import React from "react";

const AllProducts = () => {
  const { data: products = [] } = useQuery({
    queryKey: ["categories"],
    queryFn: () =>
      fetch("http://localhost:5000/products").then((res) => res.json()),
  });
  return <div>this is all products</div>;
};

export default AllProducts;
