import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import ConfirmationModal from "../../Shared/ConfrimatinMOdal/ConfirmationModal";

const Myproduct = ({ myproduct, index, refetch }) => {
  const { _id, displayName, productTitle, sellingPrice, img } = myproduct;
  const [product, setProduct] = useState(null);
  console.log(product);
  const closeModal = () => {
    setProduct(null);
  };
  const heldelDeletProduct = (data) => {
    fetch(`http://localhost:5000/products/${data}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          toast.success("Delete Successfully");
          refetch();
        }
      });
  };
  return (
    <div className="overflow-x-auto ">
      <table className="table w-full">
        <tbody>
          <tr>
            <th className="text-center">
              <Link className="text-center">{index + 1}</Link>
            </th>
            <td className="lg:w-96">
              <div className="flex items-center space-x-3">
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img src={img} alt={productTitle} />
                  </div>
                </div>
                <div>
                  <div className="font-bold">{productTitle}</div>
                </div>
              </div>
            </td>
            <td>
              <p className="text-left">{sellingPrice}</p>
            </td>
            <td>Purple</td>
            <th>
              <button className="btn btn-primary btn-xs mr-3">advertise</button>
              <label
                onClick={() => setProduct(_id)}
                htmlFor="confirmation-modal"
                className="btn btn-warning btn-xs"
              >
                Delete
              </label>
            </th>
          </tr>
        </tbody>
      </table>
      {product && (
        <ConfirmationModal
          deleteConfirm={heldelDeletProduct}
          closeModal={closeModal}
          modalData={product}
        ></ConfirmationModal>
      )}
    </div>
  );
};

export default Myproduct;
