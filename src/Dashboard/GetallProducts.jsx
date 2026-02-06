import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { RiDeleteBin6Line } from "react-icons/ri";
import { BiEdit } from "react-icons/bi";
import { fetchProducts } from "../Redux/Action/prodActions";

import { useDispatch, useSelector } from "react-redux";
import { errorToastify, successToastify } from "../Messages/Toastify";
import axios from "axios";
import Apis from "../Config/Apis";
import Loader from "../layouts/Loader";

const GetallProducts = () => {
  const dispatch = useDispatch();

  const { products, loading } = useSelector((state) => state.prodSlice);

  const [loader, setloader] = useState(false);
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const [delproducts, setdelProducts] = useState([]);

  const deleteProduct = async (id) => {
    try {
      const { data } = await axios.delete(`${Apis.PROD}/delete/${id}`);

      if (data.ok) {
        successToastify(data.message || "Product deleted");
        location.reload();
        setdelProducts((prev) => prev.filter((p) => p._id !== id));
      } else {
        errorToastify(data.error || "Delete failed");
      }
    } catch (error) {
      console.error(error);
      errorToastify("Product not deleted (catch)");
    }
  };

  if (loading) {
    return (
      <div className="h-screen w-full flex justify-center items-center">
        <Loader />
      </div>
    );
  }
  return (
    <>
      <div className="w-full min-h-[1200px] bg-gray-100 p-6">
        <h1 className="text-2xl font-bold mb-6 flex gap-3">
          <Link to="/dashboard/products">
            <button className="px-2 py-1 text-sm font-thin text-white bg-cyan-500 hover:bg-cyan-400 rounded-lg shadow-md transition-all duration-200 flex items-center">
              <div className="mb-[2px]">{"< "}</div>&nbsp; Back
            </button>
          </Link>
          All Products{" "}
        </h1>

        {/* Header Row */}
        <div className="flex bg-blue-400 text-white p-3 rounded-t-md font-semibold">
          <div className="w-1/6 ml-10">Image</div>
          <div className="w-1/5">Title</div>
          <div className="w-1/6">Brand</div>
          <div className="w-1/6">Category</div>
          <div className="w-1/6">Price</div>
          <div className="w-1/6">Stock</div>
          <div className="w-1/6">Action</div>
        </div>

        <div className="flex flex-col mt-2 gap-4">
          {products.map((product) => {
            return (
              <div
                key={product.id}
                className="flex bg-white p-4 rounded-md shadow hover:bg-gray-50 items-center"
              >
                <div className="w-1/6 ml-10">
                  <img
                    src={product.images}
                    alt="Product image"
                    className="w-24 h-24 object-cover rounded-md"
                  />
                </div>
                <div className="w-1/5 flex items-center">{product.title}</div>
                <div className="w-1/6 flex items-center">{product.brand}</div>
                <div className="w-1/6 flex items-center">
                  {product.category}
                </div>
                <div className="w-1/6 flex items-center">{product.price}</div>
                <div className="w-1/6 flex items-center">{product.stock}</div>
                <div className="w-1/6 flex items-center gap-2">
                  <Link to={`/updateproduct/${product._id}`}>
                    <button className="bg-fuchsia-500 text-white px-3 py-1 rounded-md hover:bg-fuchsia-600">
                      <BiEdit className="inline mb-[5px] gap-1" /> Edit
                    </button>
                  </Link>
                  <button
                    onClick={() => deleteProduct(product._id)}
                    className="bg-rose-500 text-white px-3 py-1 rounded-md hover:bg-rose-600"
                  >
                    <RiDeleteBin6Line className="inline mb-[5px] gap-1" />{" "}
                    Delete
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default GetallProducts;
