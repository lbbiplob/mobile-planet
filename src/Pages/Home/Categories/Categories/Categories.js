import { useQuery } from "@tanstack/react-query";
import React from "react";
import Category from "../Category/Category";

const Categories = () => {
  const { data: categories = [] } = useQuery({
    queryKey: ["categories"],
    queryFn: () =>
      fetch("http://localhost:5000/categories").then((res) => res.json()),
  });

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
      {categories.map((category) => (
        <Category key={category._id} category={category}></Category>
      ))}
    </div>
  );
};

export default Categories;
