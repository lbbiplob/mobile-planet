import React from "react";
import { toast } from "react-toastify";

const ReportedData = ({ product, index, refetch }) => {
  const { sellingPrice, displayName, productTitle, _id } = product;
  const handelDelete = (id) => {
    console.log(id);
    const confirm = window.confirm("Are you sure to delete ");
    if (confirm) {
      fetch(`https://mobile-planet-bd-server.vercel.app/reported/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            toast.success("Delete Successfully");
            refetch();
          }
        });
    }
  };
  return (
    <tr>
      <th>{index + 1}</th>
      <td>{productTitle}</td>
      <td>{displayName}</td>
      <td>{sellingPrice}</td>
      <td>
        <button
          onClick={() => handelDelete(_id)}
          className="btn btn-warning btn-xs mt-2"
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ReportedData;
