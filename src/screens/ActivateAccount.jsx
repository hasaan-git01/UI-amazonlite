import React, { useEffect, useState } from "react";
import Loader from "../layouts/Loader";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Apis from "../Config/Apis";
import { errorToastify, successToastify } from "../Messages/Toastify";

const ActivateAccount = () => {
  const [loading, setLoading] = useState(false);
  const { token } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (token) createAccount();
  }, [token]);

  const createAccount = async () => {
    setLoading(true);
    try {
      const { data } = await axios.post(`${Apis.auth}/signup`, { token });

      if (data.error) {
        errorToastify(data.error);
      } else if (data.ok) {
        localStorage.setItem(
          "auth",
          JSON.stringify({
            ok: true,
            user: {
              name: data.user.name,
              email: data.user.email,
              role: data.user.role,
              _id: data.user._id,
            },
            token: data.token,
            refreshToken: data.refreshToken,
          })
        );
        successToastify(data.message || "Congrats! Your account is activated.");

        setTimeout(() => {
          navigate("/");
        }, 2000);
      }
    } catch (err) {
      console.error(err);
      ok: false,
        {
          /* errorToastify("Something went wrong!");*/
        };
    } finally {
      setLoading(false);
    }
  };

  return <div>{loading ? <Loader /> : "Verifying your account..."}</div>;
};

export default ActivateAccount;
