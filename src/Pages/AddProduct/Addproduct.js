import React from "react";

const Addproduct = () => {
  const handelAddProduct = (e) => {};
  return (
    <div className="bg-base-200">
      <div className=" bg-base-100  ">
        <div className="  my-12  ">
          <div className="  shadow-2xl lg:w-2/4 w-96 mx-auto p-12 rounded-3xl  ">
            <div className="text-center mb-4 ">
              <h1 className="text-2xl font-bold">Add Your Product Details</h1>
            </div>
            <form onSubmit={handelAddProduct} className="w-full">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Product Title</span>
                </label>
                <input
                  name="title"
                  type="text"
                  placeholder="Product title"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="lg:flex gap-3">
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text font-bold">
                      Select Location
                    </span>
                  </label>
                  <select
                    name="area"
                    className="select select-bordered w-full "
                    required
                  >
                    <option value="Dhaka">Dhaka</option>
                    <option value="Khulna">Khulna</option>
                    <option value="Kushtia">Kushtia</option>
                    <option value="Jessore">Jessore</option>
                  </select>
                </div>
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text font-bold">
                      Phone Condition
                    </span>
                  </label>
                  <select
                    name="usertype"
                    className="select select-bordered w-full "
                    required
                  >
                    <option value="excellent">excellent</option>
                    <option value="Good">Good</option>
                    <option value="Fair">Fair</option>
                  </select>
                </div>
              </div>
              <div className="lg:flex gap-3">
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text ">Give buying date</span>
                  </label>
                  <input
                    type="date"
                    className="input input-bordered"
                    required
                  ></input>
                </div>
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text ">Phone Band</span>
                  </label>
                  <select
                    name="usertype"
                    className="select select-bordered w-full "
                    required
                  >
                    <option value="Vivo">Vivo</option>
                    <option value="Oppo">Oppo</option>
                    <option value="Xiaomi">Xiaomi</option>
                  </select>
                </div>
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">
                    Write Details About your phone
                  </span>
                </label>
                <textarea
                  className="textarea textarea-bordered"
                  placeholder="Write Details "
                ></textarea>
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold">
                    Upload your phone photo
                  </span>
                </label>
                <input
                  type="file"
                  className="file-input file-input-bordered w-full "
                />
              </div>
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary">
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Addproduct;
