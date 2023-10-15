import { FaAngleDown, FaUser } from "react-icons/fa";
import Logo from "../../../public/Assets/img/logo.png";
import { useState } from "react";
import axios from "axios";
import Cookies from "universal-cookie";
export const TopNavbar = () => {
  const [dropDown, setDropDown] = useState(false);
    const Cookie = new Cookies();
    const token = Cookie.get("addLike");
  function handelDropDown() {
    setDropDown(!dropDown);
  }
  async function LogOut(e) {
    e.preventDefault();
    try {
      const res = await axios.post(
        "https://add-likes.onrender.com/add4like/api/v1/auth/logout",
        null,
        { headers: { Authorization: "add__" + token } }
      );
      console.log(res);
      window.location.pathname = "/";
      Cookie.remove("addLike");
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <div className="bg-white shadow-md fixed w-full h-[80px] z-[223]">
      <div className="flex justify-between h-full items-center px-[58px]">
        <div className="w-[220px]">
          <img src={Logo} alt="Logo TopNav" className="max-w-full h-auto" />
        </div>
        <div className="flex items-center gap-2 cursor-pointer">
          <div className="bg-gray-200 w-[27px] h-[27px] flex justify-center items-center rounded-full">
            <FaUser size={20} />
          </div>
          <div
            className="text-[16px] lg:text-[18px] font-medium flex items-center relative"
            onClick={handelDropDown}
          >
            <span>Admin</span> <FaAngleDown className="mt-[4px]" />
          </div>
          <ul
            className={`absolute shadow-md bg-white w-[150px] top-[80px] right-[50px] py-[10px] px-[20px] flex flex-col gap-[8px] ${
              dropDown ? "block" : "hidden"
            }`}
          >
            <li>
              <button className="font-medium" onClick={LogOut}>
                Log Out
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
