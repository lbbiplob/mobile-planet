import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import useTitle from "../../../Hooks/useTitle";

import Myorder from "../Myorder/Myorder";

const MyOrders = () => {
  useTitle("My order");
  const { user } = useContext(AuthContext);
  const [bookedPhones, setBookedPhones] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://mobile-planet-bd-server.vercel.app/booking?email=${user?.email}`
      )
      .then((data) => {
        setBookedPhones(data.data);
      });
  }, [user?.email]);

  return (
    <div>
      <h2 className="text-xl font-bold text-center my-4">
        Hi {user?.displayName} Your booked Phone
      </h2>
      {bookedPhones?.length === 0 && (
        <p className="text-lg font-bold text-center my-4">No Booking</p>
      )}
      <div>
        {bookedPhones.map((bookedphone) => (
          <Myorder key={bookedphone._id} bookedphone={bookedphone}></Myorder>
        ))}
      </div>
    </div>
  );
};

export default MyOrders;
