import { useQuery } from "@tanstack/react-query";
import React from "react";
import Loading from "../../Loading/Loading";
import ReportedData from "./ReportedData";

const ReportedProducts = () => {
  const {
    data: reported,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["reported"],
    queryFn: () =>
      fetch("http://localhost:5000/reported").then((res) => res.json()),
  });
  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div className=" md:col-span-2 lg:col-span-3">
      {reported.length === 0 && <p>Don't Have any Reported Product</p>}
      {reported.length > 0 && (
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th></th>
                <th>Phone Name</th>
                <th>Seller Name</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {reported.map((product, index) => (
                <ReportedData
                  key={product._id}
                  product={product}
                  index={index}
                  refetch={refetch}
                ></ReportedData>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ReportedProducts;
