import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useLoaderData } from "react-router-dom";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);

const Payment = () => {
  const data = useLoaderData();
  const { productTitle, sellingPrice, name } = data;
  console.log(data);
  console.log(stripePromise);
  return (
    <div className="w-10/12 mx-auto my-6">
      <h2 className="text-3xl text-center font-bold my-4">Payment</h2>
      <h3 className="font-bold text-lg">Hi {name} this payment for</h3>
      <p>Phone : {productTitle}</p>
      <p>Price: {sellingPrice}</p>
      <p>
        Please pay <strong>{sellingPrice}</strong> for this phone
      </p>
      <div className="w-80 my-12">
        <Elements stripe={stripePromise}>
          <CheckoutForm data={data} />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
