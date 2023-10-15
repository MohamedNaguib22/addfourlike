import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
import { Spinner } from "../../components/Spinner/Spinner";
export const UserAuth = () => {
    const [user, setUSer] = useState("");
  const navigate = useNavigate();
    const cookie = new Cookies();
    const token = cookie.get("addLike");
  useEffect( () => {
    const res = axios
      .get("https://add-likes.onrender.com/add4like/api/v1/auth/user", {
        headers: {
          Authorization: "add__" + token,
        },
      })
      .then((res) => {
        setUSer(res.user);
        console.log(res.data);
      })
      .catch(() => navigate("/", { replace: true }));
      console.log(res);
  }, [navigate, token]);
  return token ? (
    user === "" ? (
      <Spinner />
    ) : (
      <Outlet />
    )
  ) : (
    <Navigate to={"/"} replace={true} />
  );
}
