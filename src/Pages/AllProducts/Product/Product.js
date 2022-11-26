import React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

const Product = ({ product }) => {
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
    model,
    phoneCondition,
    productTitle,
    sellingPrice,
    storage,
  } = product;
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
            <button className="btn btn-primary">Book Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
