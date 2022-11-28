import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import ConfirmationModal from "../../Shared/ConfrimatinMOdal/ConfirmationModal";

const Myproduct = ({ myproduct, index, refetch }) => {
  const { _id, displayName, productTitle, sellingPrice, img, status } =
    myproduct;
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
  const handelAdvertise = (id) => {
    console.log(id);
    const confirm = window.confirm("You want to advertise this phone");
    const status = "advertised";
    if (confirm) {
      fetch(`http://localhost:5000/products/${id}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ status }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          refetch();
        });
    }
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
              <label>
                {status ? (
                  <button className="btn btn-secondary btn-xs">{status}</button>
                ) : (
                  <button
                    onClick={() => handelAdvertise(_id)}
                    className="btn btn-primary btn-xs "
                  >
                    advertise
                  </button>
                )}
              </label>
              <label
                onClick={() => setProduct(_id)}
                htmlFor="confirmation-modal"
                className="btn btn-warning btn-xs ml-3"
              >
                Delete
              </label>
            </th>
          </tr>
        </tbody>
      </table>
      {product && (
        <ConfirmationModal
          title={`Are Your Sure Delete this Item`}
          massage={`If you delete this product . this product will be permanently delete`}
          deleteConfirm={heldelDeletProduct}
          closeModal={closeModal}
          modalData={product}
        ></ConfirmationModal>
      )}
    </div>
  );
};

export default Myproduct;
