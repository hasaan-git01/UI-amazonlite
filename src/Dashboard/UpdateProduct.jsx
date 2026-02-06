import React, { useEffect, useState } from "react";
import { IoMdAddCircleOutline } from "react-icons/io";
import Apis from "../Config/Apis";
import { errorToastify, successToastify } from "../Messages/Toastify";
import { useNavigate, useParams } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import Loader from "../layouts/Loader";

const UpdateProduct = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { id } = useParams();

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

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`${Apis.PROD}/${id}`);
        console.log("Fetched product:", response.data);

        const productData = response.data.singleproduct;
        setProduct(productData);
      } catch (err) {
        console.error("Error fetching product:", err);
        errorToastify("Failed to fetch product details");
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchProduct();
    }
  }, [id]);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      title: product?.title || "",
      brand: product?.brand || "",
      subTitle: product?.subTitle || "",
      discription: product?.discription || "",
      category: product?.category || "",
      price: product?.price || "",
      stock: product?.stock || "",
      sku: product?.sku || "",
      rating: product?.rating || "",
      images: product?.images?.[0] || "",
    },
    validationSchema: Yup.object({
      title: Yup.string().required("Title is required"),
      subTitle: Yup.string().required("Subtitle is required"),
      brand: Yup.string().required("Brand is required"),
      discription: Yup.string().required("Description is required"),
      price: Yup.number().required("Price is required").positive(),
      category: Yup.string().required("Category is required"),
      rating: Yup.number().required("Rating is required").min(0).max(5),
      stock: Yup.number().required("Stock is required").integer().min(0),
      images: Yup.string().required("Image URL is required"),
    }),
    onSubmit: async (values) => {
      try {
        const payload = {
          ...values,
          images: [values.images],
        };

        console.log("Updating with payload:", payload);

        const response = await axios.put(`${Apis.PROD}/update/${id}`, payload, {
          headers: { "Content-Type": "application/json" },
        });

        console.log("Update response:", response.data);
        successToastify("Product updated successfully");

        setTimeout(() => {
          navigate("/getallproducts");
        }, 1500);
      } catch (err) {
        console.error("Update error:", err.response?.data || err.message);
        errorToastify(
          err.response?.data?.message || "Failed to update product"
        );
      }
    },
  });

  if (loading) {
    return (
      <div className="h-screen w-full flex justify-center items-center">
        <Loader />
      </div>
    );
  }

  if (!product) {
    return (
      <div className="h-screen w-full flex justify-center items-center">
        <div className="text-2xl text-red-500">Product not found</div>
      </div>
    );
  }

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <div className="w-full h-[730px] flex justify-center">
          <div className="w-[1385px] bg-gray-200 rounded-xl p-8 m-12 flex">
            <div className="w-1/2 pr-4 mt-[30px]">
              <input
                type="text"
                name="title"
                id="title"
                placeholder="Product Title"
                value={formik.values.title}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="w-[610px] bg-white rounded-md my-3 mx-4 p-4 text-[18px] text-black focus:outline-none"
              />
              {formik.touched.title && formik.errors.title && (
                <div className="text-red-500 text-sm mx-4 -mt-2">
                  {formik.errors.title}
                </div>
              )}

              <input
                type="text"
                name="brand"
                id="brand"
                placeholder="Product Brand"
                value={formik.values.brand}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="w-[610px] bg-white rounded-md my-3 mx-4 p-4 text-[18px] text-black focus:outline-none"
              />
              {formik.touched.brand && formik.errors.brand && (
                <div className="text-red-500 text-sm mx-4 -mt-2">
                  {formik.errors.brand}
                </div>
              )}

              <input
                type="text"
                name="subTitle"
                id="subTitle"
                placeholder="Product Subtitle"
                value={formik.values.subTitle}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="w-[610px] bg-white rounded-md my-3 mx-4 p-4 text-[18px] text-black focus:outline-none"
              />
              {formik.touched.subTitle && formik.errors.subTitle && (
                <div className="text-red-500 text-sm mx-4 -mt-2">
                  {formik.errors.subTitle}
                </div>
              )}

              <input
                type="number"
                name="price"
                id="price"
                placeholder="Product Price"
                value={formik.values.price}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="w-[610px] bg-white rounded-md my-3 mx-4 p-4 text-[18px] text-black focus:outline-none"
              />
              {formik.touched.price && formik.errors.price && (
                <div className="text-red-500 text-sm mx-4 -mt-2">
                  {formik.errors.price}
                </div>
              )}

              <textarea
                rows={4}
                cols={40}
                name="discription"
                id="discription"
                placeholder="Product Description"
                value={formik.values.discription}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="mr-11 w-[610px] bg-white rounded-md my-3 mx-4 p-4 text-[17px] text-black focus:outline-none"
              />
              {formik.touched.discription && formik.errors.discription && (
                <div className="text-red-500 text-sm mx-4 -mt-2">
                  {formik.errors.discription}
                </div>
              )}
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
                className="w-[610px] bg-white rounded-md my-3 mx-4 p-4 text-[18px] text-black focus:outline-none"
              />
              {formik.touched.stock && formik.errors.stock && (
                <div className="text-red-500 text-sm mx-4 -mt-2">
                  {formik.errors.stock}
                </div>
              )}

              <input
                type="text"
                name="sku"
                id="sku"
                placeholder="Product SKU"
                value={formik.values.sku}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="w-[610px] bg-white rounded-md my-3 mx-4 p-4 text-[18px] text-black focus:outline-none"
              />

              <input
                type="number"
                step="0.1"
                name="rating"
                id="rating"
                placeholder="Product Rating (0-5)"
                value={formik.values.rating}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="w-[610px] bg-white rounded-md my-3 mx-4 p-4 text-[18px] text-black focus:outline-none"
              />
              {formik.touched.rating && formik.errors.rating && (
                <div className="text-red-500 text-sm mx-4 -mt-2">
                  {formik.errors.rating}
                </div>
              )}

              <input
                type="text"
                name="images"
                id="images"
                placeholder="Product Image URL"
                value={formik.values.images}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="w-[610px] bg-white rounded-md my-3 mx-4 p-4 text-[18px] text-black focus:outline-none"
              />
              {formik.touched.images && formik.errors.images && (
                <div className="text-red-500 text-sm mx-4 -mt-2">
                  {formik.errors.images}
                </div>
              )}

              <select
                name="category"
                id="category"
                value={formik.values.category}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={`w-[610px] bg-white rounded-md my-3 mx-4 p-4 text-[18px] focus:outline-none 
                ${
                  formik.values.category === "" ? "text-gray-400" : "text-black"
                }`}
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
              {formik.touched.category && formik.errors.category && (
                <div className="text-red-500 text-sm mx-4 -mt-2">
                  {formik.errors.category}
                </div>
              )}

              <button
                type="submit"
                disabled={formik.isSubmitting}
                className="bg-cyan-500 hover:bg-cyan-400 text-[22px] text-white mt-[10px] w-[610px] h-[60px] rounded-md border disabled:bg-gray-400 disabled:cursor-not-allowed"
              >
                {formik.isSubmitting ? "Saving..." : "Save Changes"}
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default UpdateProduct;
