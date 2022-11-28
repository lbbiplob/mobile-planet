import React from "react";
import { Link } from "react-router-dom";

const Myorder = ({ bookedphone }) => {
  const { _id, email, img, productTitle, sellingPrice } = bookedphone;
  return (
    <div className="overflow-x-auto w-full">
      <table className="table w-10/12 mx-auto">
        <tbody>
          <tr>
            <td>
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
              <p>{email}</p>
            </td>
            <td>
              <p>{sellingPrice}</p>
            </td>
            <th>
              <Link to={`/payment/${_id}`}>
                <button className="btn btn-primary btn-xs">pay</button>
              </Link>
            </th>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Myorder;
