import { Link } from "react-router-dom";
import logo from "../../../public/Assets/img/logo.png";
import { FaBars, FaUser } from "react-icons/fa";
import {UserIcon} from "@heroicons/react/solid"
import { useState } from "react";
export const TopNav = () => {
  const [mobileNav, setMobileNav] = useState(false);
  function handleMobile() {
    setMobileNav(!mobileNav);
  }
  return (
    <div className="fixed z-[999] top-0 w-full shadow-md bg-gray-700 px-[28px] h-[90px] flex justify-between items-center">
      <div className="block lg:hidden" onClick={handleMobile}>
        <button className="border-2 border-white rounded-full p-[5px] text-white">
          <UserIcon className="h-[40px] w-[40px]" />
        </button>
      </div>
      {/* Mobile */}
      <div
        className={`absolute bg-gray-700 transition-all duration-[0.3s]  w-full left-0 top-[100%] flex justify-between px-[30px] h-[160px] ${
          mobileNav
            ? "opacity-[1] visible h-[160px] top-[100%]"
            : "invisible top-0 opacity-0 h-0"
        }`}
      >
        <div className="text-white font-bold text-[25px] flex gap-[20px] items-center ">
          <h1 className="relative before:absolute before:content-[''] before:w-[1px] before:h-[90%] before:bg-white before:right-[-30%] before:top-[50%] before:rotate-6 before:translate-y-[-50%]">
            $0.0
          </h1>
          <h1>0 Points</h1>
        </div>
        <div className="flex items-center">
          <h1 className="text-white font-bold text-[25px]">@Kareem</h1>
          <FaUser size={50} />
        </div>
      </div>

      <div className="w-[200px] lg:w-[300px] mx-auto  lg:mx-0">
        <Link to="/website">
          <img src={logo} alt="" />
        </Link>
      </div>
      <div className="text-white font-bold text-[40px] hidden lg:flex gap-[50px] items-center ">
        <h1 className="relative before:absolute before:content-[''] before:w-[1px] before:h-[90%] before:bg-white before:right-[-30%] before:top-[50%] before:rotate-6 before:translate-y-[-50%]">
          $0.0
        </h1>
        <h1>0 Points</h1>
      </div>
      <div className="hidden lg:flex items-center gap-4">
        <h1 className="text-white font-bold text-[40px]">@Kareem</h1>
        <FaUser size={70} />
      </div>
      <div className="block lg:hidden">
        <button className="border-2 border-white p-[10px] rounded-lg text-white">
          <FaBars size={30} />
        </button>
      </div>
    </div>
  );
};
