import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import moment from "moment";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Addproduct = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const imageHostKey = process.env.REACT_APP_imabb_key;

  // const useTime = moment(postTime, "YYYYMMDD").fromNow();

  const { data: categories = [] } = useQuery({
    queryKey: ["categories"],
    queryFn: () =>
      fetch("http://localhost:5000/categories").then((res) => res.json()),
  });

  const handelAddProduct = (e) => {
    e.preventDefault();

    const form = e.target;
    const productTitle = form.title.value;
    const area = form.area.value;
    const phoneCondition = form.phonecondition.value;
    const buyDate = form.date.value;
    const band = form.band.value;
    const sellingPrice = form.sellprice.value;
    const buyingPrice = form.buyprice.value;
    const model = form.model.value;
    const storage = form.storage.value;
    const details = form.details.value;
    const postTime = moment().format("MMMM-Do-YYYY, h:mm ");
    const useTime = moment(buyDate, "YYYYMMDD").fromNow();

    // let categoryId;
    const photo = form.image.files[0];
    const formData = new FormData();
    formData.append("image", photo);
    const category = categories.find((cat) => cat.cetegoryName === band);
    const categoryId = category.categoryId;

    const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
    fetch(url, {
      method: "POST",

      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        const img = imgData.data.url;
        const product = {
          displayName: user.displayName,
          email: user.email,
          postTime,
          useTime,
          productTitle,
          area,
          img,
          buyDate,
          phoneCondition,
          band,
          details,
          categoryId,
          sellingPrice,
          buyingPrice,
          storage,
          model,
        };
        fetch("http://localhost:5000/products", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(product),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.acknowledged) {
              toast.success("Phone added");
              navigate("/myproducts");
            }
          });
      });
  };
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
                    <span className="label-text font-bold">Buying price</span>
                  </label>
                  <input
                    name="buyprice"
                    type="text"
                    placeholder="buying price"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text font-bold">Selling price</span>
                  </label>
                  <input
                    name="sellprice"
                    type="text"
                    placeholder="selling price"
                    className="input input-bordered"
                    required
                  />
                </div>
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
                    name="phonecondition"
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
                    name="date"
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
                    name="band"
                    className="select select-bordered w-full "
                    required
                  >
                    <option value="Vivo">Vivo</option>
                    <option value="Oppo">Oppo</option>
                    <option value="Xiaomi">Xiaomi</option>
                  </select>
                </div>
              </div>
              <div className="lg:flex gap-3">
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text font-bold">Storage</span>
                  </label>
                  <input
                    name="storage"
                    type="text"
                    placeholder="storage"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text font-bold">model</span>
                  </label>
                  <input
                    name="model"
                    type="text"
                    placeholder="model"
                    className="input input-bordered"
                    required
                  />
                </div>
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">
                    Write Details About your phone
                  </span>
                </label>
                <textarea
                  name="details"
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
                  name="image"
                  type="file"
                  className="file-input file-input-bordered w-full "
                />
              </div>
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary">
                  Add Product
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
