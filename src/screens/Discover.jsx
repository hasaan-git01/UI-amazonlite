import React, { useState, useEffect } from "react";
import axios from "axios";
import Loader from "../layouts/Loader";
import ProductCard from "../layouts/ProductCard";
import Apis from "../Config/Apis.js";

import { fetchProducts } from "../Redux/Action/prodActions";
import { useDispatch, useSelector } from "react-redux";

const Discover = () => {
  const dispatch = useDispatch();

  const { products, loading } = useSelector((state) => state.prodSlice);

  const [loader, setloader] = useState(false);
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  //   const fetchproduts = async () => {
  //      try {
  //       setloader(true);
  //       const { data } = await axios.get(Apis.PROD);
  //       const {products, total, ok} = data

  //       console.log(data);
  //  setproducts(data.allproducts);
  //       setloader(false);

  //     } catch (err) {
  //       console.log(`API is not Found ----> ${err.message}`);
  //     }
  //   };

  return (
    <>
      <>
        <div className="p-4 bg-white w-full ">
          <div className="text-slate-950 text-4xl font-semibold text-center">
            Discover Latest Product
          </div>
          <div className={`${loader ? "h-[700px]" : "h-auto"} w-full`}>
            <h1 className="text-3xl text-center font-bold"> </h1>

            <div className="w-full flex justify-center mt-[50px] ">
              {loading ? (
                <Loader />
              ) : (
                <div className="grid gap-[100px] lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1">
                  {products &&
                    products.map((product) => (
                      <ProductCard key={product._id} product={product} />
                    ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </>
    </>
  );
};

export default Discover;
