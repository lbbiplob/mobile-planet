import React, { useState } from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import BookingConfirmModal from "../BookingConfirmModal/BookingConfirmModal";

const Product = ({ product }) => {
  const [bookingConfirm, setBookingConfirm] = useState(null);
  const nevigate = useNavigate();
  const {
    area,
    band,
    buyDate,
    buyingPrice,
    details,
    displayName,
    img,
    postTime,
    useTime,
    phoneCondition,
    productTitle,
    sellingPrice,
    storage,
  } = product;

  const handelBooking = (bookingProduct) => {
    fetch("http://localhost:5000/booking", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bookingProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          toast.success("Booking Successfully");
          nevigate("/myorders");
        }
      });
  };
  const handelClose = () => {
    setBookingConfirm(null);
  };
  return (
    <div>
      <div className="card lg:w-11/12 bg-base-100 shadow-xl">
        <PhotoProvider>
          <PhotoView src={img}>
            <figure className="p-5">
              <img src={img} alt={productTitle} className="rounded-xl h-72" />
            </figure>
          </PhotoView>
        </PhotoProvider>

        <div className="card-body  ">
          <h2 className="card-title">{productTitle} (Used phone)</h2>
          <p>{details.slice(0, 50)} ....</p>
          <div className="flex justify-between">
            <div>
              <p className="font-bold">Seller Address:</p>
              <span className="font-semibold">{area}</span>
              <p className="font-bold">Buying Date:</p>
              <span className="font-semibold">{buyDate}</span>

              <p className="font-bold">Phone Condition:</p>
              <span className="font-semibold"> {phoneCondition}</span>
              <p className="font-bold">New Price:</p>
              <span className="font-semibold"> {buyingPrice}</span>
            </div>
            <div>
              <p className="font-bold">Band:</p>
              <span className="font-semibold">{band}</span>
              <p className="font-bold">Year of use :</p>
              <span className="font-semibold"> {useTime.slice(0, 7)}</span>
              <p className="font-bold">Storage</p>
              <span className="font-semibold"> {storage}</span>
              <p className="font-bold">Selling Price</p>
              <span className="font-semibold"> {sellingPrice}</span>
            </div>
          </div>
          <div>
            <p className="font-bold">Seller Name: {displayName} </p>
            <p>Post-date: {postTime}</p>
          </div>
          <div className="flex justify-between">
            <button className="btn btn-warning">Report</button>
            <label
              onClick={() => setBookingConfirm(product)}
              htmlFor="booking-modal"
              className="btn btn-primary"
            >
              Book Now
            </label>
          </div>
        </div>
      </div>
      {bookingConfirm && (
        <BookingConfirmModal
          close={handelClose}
          confirmBooking={handelBooking}
          ModalData={product}
        ></BookingConfirmModal>
      )}
    </div>
  );
};

export default Product;
