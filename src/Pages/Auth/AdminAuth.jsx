/* eslint-disable react/prop-types */
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
import { Spinner } from "../../components/Spinner/Spinner";
export const AdminAuth = () => {
  const [admin, setAdmin] = useState("");
  const [user, setUSer] = useState("");
  const navigate = useNavigate();
  const cookie = new Cookies();
  const token = cookie.get("addLike");
  useEffect(() => {
    axios
      .get("https://add-likes.onrender.com/add4like/api/v1/auth/user", {
        headers: {
          Authorization: "add__" + token,
        },
      })
      .then((res) => {
        setAdmin(res.data.user.role);
        setUSer(res.data.user);
      })
      .catch(() => navigate("/", { replace: true }));
  }, [navigate, token]);
  return token ? (
    user === "" ? (
      <Spinner />
    ) : admin === "Moderator" || admin === "Admin" ? (
      <Outlet />
    ) : (
      <Navigate to={"/"} replace={true} />
    )
  ) : (
    <Navigate to={"/"} replace={true} />
  );
};
