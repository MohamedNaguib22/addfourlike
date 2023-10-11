import { Link } from "react-router-dom";
import logo from "../../../public/Assets/img/logo.png";
import { FaBars, FaUser } from "react-icons/fa";
import { UserIcon } from "@heroicons/react/solid";
import { useContext, useState } from "react";
import { SideNav } from "../../Context/ContextSide";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "universal-cookie";
export const TopNav = () => {
  const Side = useContext(SideNav);
  // Cookie
  const Cookie = new Cookies();
  const navigate = useNavigate();
  const token = Cookie.get("addLike")
  const FunctionSide = Side.SideShow;
  const [mobileNav, setMobileNav] = useState(false);
  function handleMobile() {
    setMobileNav(!mobileNav);
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
      navigate("/")
      Cookie.remove("addLike")
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <div className="fixed z-[999] top-0 w-full shadow-md bg-gray-700 px-[28px] h-[90px] flex justify-between items-center">
      <div className="block lg:hidden">
        <button
          onClick={FunctionSide}
          className="border-2 border-white p-[10px] rounded-lg text-white"
        >
          <FaBars size={20} />
        </button>
      </div>
      {/* Mobile */}
      <div
        className={`absolute lg:opacity-0 lg:invisible visible opacity-[1] bg-gray-700 transition-all duration-[0.3s]  w-full left-0 flex justify-between px-[30px] h-[160px] ${
          mobileNav ? "top-[100%]" : "top-[-200%]"
        }`}
      >
        <div className="text-white font-bold text-[24px] flex gap-[20px] items-center ">
          <h1 className="relative before:absolute before:content-[''] before:w-[1px] before:h-[90%] before:bg-white before:right-[-30%] before:top-[50%] before:rotate-6 before:translate-y-[-50%]">
            $0.0
          </h1>
          <h1>0 Points</h1>
        </div>
        <div className="flex items-center gap-3">
          <h1 className="text-white font-bold text-[25px]">@Kareem</h1>
          <FaUser size={40} />
          <button className="text-white" onClick={LogOut}>
            Log Out
          </button>
        </div>
      </div>
      {/* TopNav */}
      <div className="w-[200px] lg:w-[250px] mx-auto  lg:mx-0">
        <Link to="/website">
          <img src={logo} alt="" />
        </Link>
      </div>
      <div className="text-white font-bold text-[28px] hidden lg:flex gap-[50px] items-center ">
        <h1 className="relative before:absolute before:content-[''] before:w-[1px] before:h-[90%] before:bg-white before:right-[-30%] before:top-[50%] before:rotate-6 before:translate-y-[-50%]">
          $0.0
        </h1>
        <h1>0 Points</h1>
      </div>
      <div className="hidden lg:flex items-center gap-4">
        <h1 className="text-white font-bold text-[28px]">@Kareem</h1>
        <FaUser size={40} />
        <button className="text-white" onClick={LogOut}>
          Log Out
        </button>
      </div>
      <div className="block lg:hidden" onClick={handleMobile}>
        <button className="border-2 border-white rounded-full p-[5px] text-white">
          <UserIcon className="h-[30px] w-[30px]" />
        </button>
      </div>
    </div>
  );
};
