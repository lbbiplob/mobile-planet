import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import Myorder from "../Myorder/Myorder";

const MyOrders = () => {
  const { user } = useContext(AuthContext);
  const [bookedPhones, setBookedPhones] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/booking?email=${user?.email}`)
      .then((data) => {
        setBookedPhones(data.data);
      });
  }, [user?.email]);
  console.log(bookedPhones);
  return (
    <div>
      <h2 className="text-xl font-bold text-center my-4">
        Hi {user?.displayName} Your booked Phone
      </h2>
      <div>
        {bookedPhones.map((bookedphone) => (
          <Myorder key={bookedphone._id} bookedphone={bookedphone}></Myorder>
        ))}
      </div>
    </div>
  );
};

export default MyOrders;
