import React, { useContext } from "react";
import { AuthContext } from "../../../../AuthProvider/AuthProvider";

const BookingConfirmModal = ({ close, confirmBooking, ModalData }) => {
  const { user } = useContext(AuthContext);
  const { area, img, phoneCondition, productTitle, sellingPrice, _id } =
    ModalData;
  const bookedProduct = {
    bookingId: _id,
    productTitle,
    sellingPrice,
    img,
    name: user.displayName,
    email: user.email,
  };

  return (
    <div>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">{ModalData.productTitle}</h3>
          <p>Your name</p>
          <input
            name="name"
            type="text"
            defaultValue={user?.displayName}
            className="input input-bordered w-full mb-2 "
            readOnly
          />
          <p>Seller Location</p>
          <input
            name="area"
            type="text"
            defaultValue={area}
            className="input input-bordered w-full mb-2 "
            readOnly
          />
          <p>Phone Price</p>
          <input
            name="area"
            type="number"
            defaultValue={sellingPrice}
            className="input input-bordered w-full mb-2 "
            readOnly
          />
          <p>Phone Condition</p>
          <input
            name="area"
            type="email"
            defaultValue={phoneCondition}
            className="input input-bordered w-full mb-2 "
            readOnly
          />

          <div className="modal-action">
            <label
              onClick={() => confirmBooking(bookedProduct)}
              htmlFor="booking-modal"
              className="btn btn-primary"
            >
              Booking
            </label>
            <button onClick={close} className="btn btn-warning">
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingConfirmModal;
