import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./layouts/Header";
import Navigation from "./layouts/Navigation";
import Footer from "./layouts/Footer";
import "./css/custom.css";
import { ToastContainer } from "react-toastify";
import AuthProvider from './context/Auth';
import { CartProvider } from "./context/Cart";  

import Home from "./screens/Home"; 
import Catagory from "./screens/Catagory";
import CategoryDetails from "./layouts/CategoryDetails";
import Services from "./screens/Services";
import Registery from "./screens/Registery";
import Discover from "./screens/Discover";
import Deals from "./screens/Deals";
import About from "./screens/About";
import ContactUs from "./screens/ContactUs";
import Signup from "./screens/Signup";
import Signin from "./screens/Signin";
import ProductDetails from "./layouts/ProductDetails";
import CartPage from "./screens/CartPage";
import Forget from "./screens/Forget";
import ResetPassword from './screens/ResetPassword';
import ActivateAccount from "./screens/ActivateAccount";
import Password from "./screens/Password";
import Dashboard from "./Dashboard/Dashboard";
import UpdateProfile from "./Dashboard/UpdateProfile";
import Products from "./Dashboard/Products";
import Profile from "./screens/Profile";
import Users from "./Dashboard/Users";
import Orders from "./Dashboard/Orders";
import Messages from "./Dashboard/Messages";
import AdminPage from "./Dashboard/AdminPage";
import AddProducts from "./Dashboard/AddProducts";
import GetallProducts from "./Dashboard/GetallProducts";
import UpdateProduct from "./Dashboard/UpdateProduct";
import ViewUser from "./Dashboard/ViewUser";
import CheckoutPage from "./screens/CheckoutPage";
import SearchResults from './screens/SearchResults';
import { WishlistProvider } from "./context/Wishlist";
import Wishlist from "./screens/Wishlist";
 
const App = () => {
  return (
    <>
      <AuthProvider>
        <CartProvider> 
          <WishlistProvider> 
          <Router>
            <ToastContainer />
            <Header />
            <Navigation />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/category" element={<Catagory />} />
              <Route path="/category/:category" element={<CategoryDetails />} />
              <Route path="/services" element={<Services />} />
              <Route path="/registery" element={<Registery />} />
              <Route path="/discover" element={<Discover />} />
              <Route path="/deals" element={<Deals />} />
              <Route path="/about" element={<About />} />
              <Route path="/contactus" element={<ContactUs />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/signin" element={<Signin />} />
              <Route path="/forget-password" element={<Forget />} />
              <Route path="/restore-password" element={<Password />} />
              <Route path="/product/:id" element={<ProductDetails />} />
              <Route path="/cartpage" element={<CartPage />} /> 
              <Route path="/profile" element={<Profile />} />
              <Route path="/auth/active/:token" element={<ActivateAccount />} />
              <Route path="/access/:token" element={<ResetPassword />} />
              <Route path="/getallproducts" element={<GetallProducts />} />
              <Route path="/updateprofile" element={<UpdateProfile />} />
              <Route path="/updateproduct/:id" element={<UpdateProduct />} />
              <Route path="/view-user/:id" element={<ViewUser />} />
              <Route path="/checkout" element={<CheckoutPage />} />
              <Route path="/search" element={<SearchResults />} />
              <Route path="/wishlist" element={<Wishlist />} />



              {/* Dashboard Routes */}
              <Route path="/dashboard" element={<Dashboard />}>
                <Route index element={<AdminPage />} />
                <Route path="adminpage" element={<AdminPage />} />
                <Route path="messages" element={<Messages />} />
                <Route path="profile" element={<Profile />} />
                
                <Route path="products" element={<Products />}>
                  <Route path="addproducts" element={<AddProducts />} />
                </Route>

                <Route path="users" element={<Users />} />
                <Route path="orders" element={<Orders />} />
              </Route>
            </Routes>
            <Footer />
          </Router>
          </WishlistProvider>
        </CartProvider> 
      </AuthProvider>
    </>
  );
};

export default App;