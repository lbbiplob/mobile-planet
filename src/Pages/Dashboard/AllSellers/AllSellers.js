import { useQuery } from "@tanstack/react-query";
import React from "react";
import Loading from "../../Loading/Loading";
import UserData from "../UserData/UserData";

const AllSellers = () => {
  const {
    data: users,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["sellers"],
    queryFn: () =>
      fetch("http://localhost:5000/users/sellers").then((res) => res.json()),
  });
  if (isLoading) {
    return <Loading></Loading>;
  }
  console.log(users);
  return (
    <div className=" md:col-span-2 lg:col-span-3">
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>User Type</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <UserData
                key={user._id}
                user={user}
                index={index}
                refetch={refetch}
              ></UserData>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllSellers;
