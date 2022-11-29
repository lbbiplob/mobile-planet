import React from "react";
import { toast } from "react-toastify";

const UserData = ({ user, index, refetch }) => {
  const { email, name, userType, _id, verify } = user;

  const handelDeleteUser = (id) => {
    const confirm = window.confirm(`Are you sure to delete ${name}`);
    if (confirm) {
      fetch(`http://localhost:5000/users/${id}`, {
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
  const handelVerifyUser = (id) => {
    const confirm = window.confirm("You want to advertise this phone");
    if (confirm) {
      fetch(`http://localhost:5000/users/${id}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          refetch();
        });
    }
  };
  return (
    <tr>
      <th>{index + 1}</th>
      <td>{name}</td>
      <td>{email}</td>
      <td>{userType}</td>
      <td>
        {verify ? (
          <button className="btn btn-primary btn-xs mt-2 mr-2">Verified</button>
        ) : (
          <button
            onClick={() => handelVerifyUser(_id)}
            className="btn btn-secondary btn-xs mt-2 mr-2"
          >
            Verify
          </button>
        )}

        <button
          onClick={() => handelDeleteUser(_id)}
          className="btn btn-warning btn-xs mt-2"
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default UserData;
