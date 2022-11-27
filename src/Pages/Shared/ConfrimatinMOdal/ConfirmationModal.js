import React from "react";

const ConfirmationModal = ({ closeModal, deleteConfirm, modalData }) => {
  return (
    <div>
      <input type="checkbox" id="confirmation-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">
            Congratulations random Internet user!
          </h3>
          <p className="py-4">
            You've been selected for a chance to get one year of subscription to
            use Wikipedia for free!
          </p>
          <div className="modal-action">
            <label
              onClick={() => deleteConfirm(modalData)}
              htmlFor="confirmation-modal"
              className="btn"
            >
              Yes
            </label>
            <label
              onClick={closeModal}
              htmlFor="confirmation-modal"
              className="btn"
            >
              Cancel
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
