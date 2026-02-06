import React from 'react';
import { toast, Zoom, Flip, Bounce, Slide } from 'react-toastify';

const warningToastify = (message) => {
  toast.warning("❕"+message, {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    transition: Zoom,
  });
};

const successToastify = (message) => {
  toast.success("👍"+message, {
    position: "top-center",
    autoClose: 2500,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    transition: Bounce,
  });
};

const errorToastify = (message) => 
  toast.error("⛔"+message, {
    position: "top-left",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    transition: Flip,
  });

  const infoToastify = (message) => 
  toast.info("ℹ️️"+message, {
    position: "top-center",
    autoClose: 4000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    transition: Slide,
  });

  const Toastify = (message) => {
  toast("️❤️"+message, {
    position: "top-center",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    transition: Slide,
  });
  
};

export { infoToastify, errorToastify, successToastify, warningToastify, Toastify };
