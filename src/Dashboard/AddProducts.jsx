import React, { useEffect, useState } from "react";
import { IoMdAddCircleOutline } from "react-icons/io";
import Apis from "../Config/Apis";
import { errorToastify, successToastify } from "../Messages/Toastify";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";

const AddProducts = () => {
  const [selected, setSelected] = useState();
  const navigate = useNavigate();
  const categories = [
    "beauty",
    "fragrances",
    "groceries",
    "home-decoration",
    "womens-jewellery",
    "kitchen-accessories",
    "mens-shirts",
    "mens-shoes",
    "mens-watches",
    "sunglasses",
    "womens fashion",
    "skin-care",
    "womens-bags",
    "womens-dresses",
    "womens-shoes",
    "womens-watches",
    "pc-laptops",
    "tablets",
    "sports-accessories",
    "health",
    "tops",
    "smartphones",
    "mobile-accessories",
    "furniture",
    "vehicle",
    "motorcycle",
    "electronics",
    "entertainment",
  ];

  const formik = useFormik({
    initialValues: {
      title: "",
      brand: "",
      subTitle: "",
      discription: "",
      category: "",
      price: "",
      stock: "",
      sku: "",
      rating: "",
      images: "",
    },
    validationSchema: Yup.object({
      title: Yup.string().required("Title is required"),
      subTitle: Yup.string().required("Subtitle is required"),
      brand: Yup.string().required("Brand is required"),
      discription: Yup.string().required("Discription is required"),
      price: Yup.number().required("Price is required").positive(),
      category: Yup.string().required("Category is required"),
      rating: Yup.number().required("Rating is required").min(0).max(5),
      stock: Yup.number().required("Stock is required").integer().min(0),
      images: Yup.mixed().required("Image is required"),
    }),
    onSubmit: async (values) => {
      try {
        const payload = {
          title: values.title,
          brand: values.brand,
          subTitle: values.subTitle,
          discription: values.discription,
          category: values.category,
          price: Number(values.price),
          stock: Number(values.stock),
          sku: values.sku,
          rating: Number(values.rating),
          images: [values.images],
        };
        const response = await axios.post(`${Apis.PROD}/add`, payload, {
          headers: {
            "Content-Type": "application/json",
          },
        });

        console.log("Product added:", response.data);
        successToastify("Product added successfully");
        formik.resetForm();
        setTimeout(() => {
          navigate("/getallproducts");
        }, 2000);
      } catch (error) {
        console.error("Error adding product:", error.response.data);
        errorToastify("Failed to add product. Please try again.");
      }
    },
  });

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <div className="w-full h-[630px] flex justify-center ">
          <div className="w-[1385px] bg-gray-200 rounded-xl p-8 mt-2 flex">
            {/* <div className="flex text-2xl text-white justify-center">New Product</div>  */}

            <div className="w-1/2 pr-4 mt-[30px]">
              <input
                type="text"
                name="title"
                id="title"
                placeholder="Product Title"
                value={formik.values.title}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className=" w-[610px] bg-white rounded-md my-3 mx-4 p-4 text-[18px] text-black focus:outline-none"
                required
              />

              <input
                type="text"
                name="brand"
                id="brand"
                placeholder="Product Brand"
                value={formik.values.brand}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className=" w-[610px] bg-white rounded-md my-3 mx-4 p-4 text-[18px] text-black focus:outline-none"
                required
              />
              <input
                type="text"
                name="subTitle"
                id="subTitle"
                placeholder="Product Subtitle"
                value={formik.values.subTitle}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className=" w-[610px] bg-white rounded-md my-3 mx-4 p-4 text-[18px] text-black focus:outline-none"
                required
              />
              <input
                type="number"
                name="price"
                id="price"
                placeholder="Product Price"
                value={formik.values.price}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className=" w-[610px] bg-white rounded-md my-3 mx-4 p-4 text-[18px] text-black focus:outline-none"
                required
              />

              <textarea
                rows={4}
                cols={40}
                type="text"
                name="discription"
                id="discription"
                placeholder="Product Discription"
                value={formik.values.discription}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="mr-11 w-[610px] bg-white rounded-md my-3 mx-4 p-4 text-[17px] text-black focus:outline-none"
                required
              />
            </div>

            <div className="w-1/2 pl-4 mt-[30px]">
              <input
                type="number"
                name="stock"
                id="stock"
                placeholder="Product Stock"
                value={formik.values.stock}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className=" w-[610px] bg-white rounded-md my-3 mx-4 p-4 text-[18px] text-black focus:outline-none"
                required
              />
              <input
                type="number"
                name="sku"
                id="sku"
                placeholder="Product SKU"
                value={formik.values.sku}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className=" w-[610px] bg-white rounded-md my-3 mx-4 p-4 text-[18px] text-black focus:outline-none"
                required
              />

              <input
                type="number"
                name="rating"
                id="rating"
                placeholder="Product Rating"
                value={formik.values.rating}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className=" w-[610px] bg-white rounded-md my-3 mx-4 p-4 text-[18px] text-black focus:outline-none"
                required
              />
              <input
                type="text"
                name="images"
                id="images"
                placeholder="Product Image URL"
                value={formik.values.images}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className=" w-[610px] bg-white rounded-md my-3 mx-4 p-4 text-[18px] text-black focus:outline-none"
                required
              />
              <select
                name="category"
                id="category"
                value={formik.values.category}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={`w-[610px] bg-white rounded-md my-3 mx-4 p-4 text-[18px] focus:outline-none 
            ${formik.values.category === "" ? "text-gray-400" : "text-black"}`}
              >
                <option value="" disabled>
                  Product Category
                </option>

                {categories.map((cat) => (
                  <option className="bg-gray-200" key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
              <button
                type="submit"
                className="bg-cyan-500 hover:bg-cyan-400 text-[22px] text-white mt-[10px] w-[610px] h-[60px] rounded-md border"
              >
                <IoMdAddCircleOutline className="inline mb-[6px]" />
                Add Product
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default AddProducts;

// const formData = new FormData(); // Create FormData to handle file upload
// // Append (loop) all values to FormData
// for (const key in values) {
//   formData.append(key, values[key]);
// }
// const response = await axios.post(`${Apis.PROD}/add`, formData, {
//           headers: { 'Content-Type': 'multipart/form-data' } // Set content type for multipart form
//         });
