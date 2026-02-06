import React, { useEffect, useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import axios from 'axios';
import Apis from '../Config/Apis';
import Loader from '../layouts/Loader';
import { useCart } from '../context/Cart';
import { successToastify, errorToastify, warningToastify } from '../Messages/Toastify';
import { FaHeart } from 'react-icons/fa';
import { CiHeart } from 'react-icons/ci';
import { MdAddShoppingCart } from 'react-icons/md';
import { PiEyeLight } from 'react-icons/pi';
import Rating from './Rating';

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q');
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [liked, setLiked] = useState({});
  const { addToCart } = useCart();

  const cngheart = (id) => {
    setLiked(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const handleAddToCart = (product) => {
    if (product.stock <= 0) {
      errorToastify('This product is out of stock!');
      return;
    }

    const result = addToCart(product);
    
    if (result.success) {
      successToastify(result.message);
    } else {
      warningToastify('Stock limit reached!');
    }
  };

  useEffect(() => {
    const searchProducts = async () => {
      if (!query) return;

      try {
        setLoading(true);
        const { data } = await axios.get(`${Apis.PROD}/`);

        if (data.ok) {
            const filtered = data.allproducts.filter((product) =>
            product.title.toLowerCase().includes(query.toLowerCase()) ||
            product.brand.toLowerCase().includes(query.toLowerCase()) ||
            product.category.toLowerCase().includes(query.toLowerCase()) ||
            product.discription.toLowerCase().includes(query.toLowerCase())
          );

          setProducts(filtered);
        }
      } catch (error) {
        console.error('Search error:', error);
        errorToastify('Failed to search products');
      } finally {
        setLoading(false);
      }
    };

    searchProducts();
  }, [query]);

  if (loading) {
    return (
      <div className="h-screen w-full">
        <Loader />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Search Results</h1>
        <p className="text-gray-600 mb-6">
          {products.length} results found for "{query}"
        </p>

        {products.length === 0 ? (
          <div className="text-center py-20">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">
              No products found
            </h2>
            <p className="text-gray-500">Try searching with different keywords</p>
          </div>
        ) : ( 
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {products.map((product) => (
              <div
                key={product._id}
                className="bg-white shadow-lg rounded-md w-[288px] hover:scale-105 transition duration-200 border-slate-700"
              >
                <div className="flex justify-between mt-1 mx-5">
                  <div className="text-semibold text-slate-500 text-[20px] pl-[2px] pt-1">
                    {product.brand}
                  </div>

                  <div
                    className="mt-[8px]"
                    title="Add to Wishlist"
                    onClick={() => cngheart(product._id)}
                    style={{ cursor: 'pointer', fontSize: '24px' }}
                  >
                    {liked[product._id] ? (
                      <FaHeart className="text-red-500" />
                    ) : (
                      <CiHeart />
                    )}
                  </div>
                </div>

                <img
                  src={product.images[0]}
                  alt="Product Picture"
                  className="h-48 p-2 mx-auto object-center"
                />

                <div className="text-bold text-center text-[18px] pl-3 pt-2">
                  {product.title}
                </div>

                <div className="flex justify-between mt-1 mx-5">
                  <div className="text-cyan-600">{product.category}</div>
                  <div>
                    {product.stock === 0 ? (
                      <div className="text-red-600 underline">Out of stock</div>
                    ) : (
                      <div className="text-cyan-600">{product.stock} items left</div>
                    )}
                  </div>
                </div>

                <div className="flex justify-between mt-1 mx-5">
                  <div>
                    <Rating rating={product.rating} />
                  </div>
                  <div className="text-cyan-600">${product.price}</div>
                </div>

                <div className="pb-0 flex justify-center">
                  <Link to={`/product/${product._id}`}>
                    <button className="flex items-center justify-center flex-1 w-[144px] h-[39px] bg-blue-500 text-white py-2 rounded-bl-md rounded-t-none hover:bg-blue-600 transition-colors duration-200 border">
                      <PiEyeLight className="text-[20px] m-1" /> View More
                    </button>
                  </Link>

                  <button
                    onClick={() => handleAddToCart(product)}
                    disabled={product.stock === 0}
                    title={product.stock === 0 ? 'Out of Stock' : 'Add to Cart'}
                    className={`flex items-center justify-center flex-1 w-[144px] h-[39px] text-white py-2 rounded-br-md rounded-t-none transition-colors duration-200 border ${
                      product.stock === 0
                        ? 'bg-gray-400 cursor-not-allowed'
                        : 'bg-green-400 cursor-pointer hover:bg-green-500'
                    }`}
                  >
                    <MdAddShoppingCart className="text-[20px]" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchResults;