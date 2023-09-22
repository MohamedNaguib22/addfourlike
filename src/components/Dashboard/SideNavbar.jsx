import {
  FaAngleDown,
  FaAngleRight,
  FaBars,
  FaFacebookF,
  FaHome,
  FaStar,
  FaSyncAlt,
  FaUser,
  FaWallet,
} from "react-icons/fa";
import "./Navs.css";
import { NavLink } from "react-router-dom";
import { CiDollar, CiSettings } from "react-icons/ci";
import { TbPlayerTrackNext } from "react-icons/tb";
import { useState } from "react";
export const SideNavbar = () => {
  const [arrow, setArrow] = useState("");
  function Arrow(click) {
    setArrow(click);
  }
  return (
    <div className="w-[320px] py-[36px] pl-[20px] bg-gray-100">
      <ul className="flex flex-col gap-[12px]">
        <li onClick={() => Arrow("Dashboard")}>
          <NavLink
            to="/dashboard"
            className="flex items-center gap-2 LinkFirst"
          >
            <div className="bg-white py-[4px] px-[10px] rounded-lg">
              <FaHome size={21} />
            </div>
            <p className=" font-medium">Dashboard</p>
          </NavLink>
        </li>
        <li onClick={() => Arrow("Users")}>
          <NavLink to="users" className="flex items-center gap-2 LinkFirst">
            <div className="bg-white py-[4px] px-[10px] rounded-lg">
              <FaUser size={21} />
            </div>
            <p className=" font-medium">Users</p>
          </NavLink>
        </li>
        <li onClick={() => Arrow("Order")}>
          <NavLink to="order" className="flex items-center gap-2 LinkFirst">
            <div className="bg-white py-[4px] px-[10px]  rounded-lg">
              <TbPlayerTrackNext size={21} />
            </div>
            <p className=" font-medium">Order</p>
          </NavLink>
        </li>
        <li onClick={() => Arrow("Service")}>
          <NavLink to="service" className="flex items-center gap-2 LinkFirst">
            <div className="bg-white py-[4px] px-[10px]  rounded-lg">
              <FaBars size={21} />
            </div>
            <p className=" font-medium">Service</p>
          </NavLink>
        </li>
        <li onClick={() => Arrow("Exchange")}>
          <NavLink className="flex items-center gap-2 LinkFirst" to="exchange">
            <div className="bg-white py-[4px] px-[10px] rounded-lg">
              <FaSyncAlt size={21} />
            </div>
            <div className=" font-medium flex items-center w-full">
              <p className="flex-1">Exchange</p>
              {arrow === "Exchange" ? (
                <FaAngleDown className="mr-[10px] white" />
              ) : (
                <FaAngleRight className="mr-[10px] white" />
              )}
            </div>
          </NavLink>
          {arrow === "Exchange" && (
            <ul className="ml-[16px] mt-[10px]">
              <li>
                <NavLink
                  to="fb-page"
                  className="flex items-center gap-2 LinkFirst"
                >
                  <div className="bg-white py-[4px] px-[10px] rounded-lg">
                    <FaFacebookF size={18} />
                  </div>
                  <p className=" font-medium">FB Page</p>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="fb-profile"
                  className="flex items-center gap-2 LinkFirst"
                >
                  <div className="bg-white py-[4px] px-[10px] rounded-lg">
                    <FaFacebookF size={18} />
                  </div>
                  <p className=" font-medium">FB Profile</p>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="fb-post"
                  className="flex items-center gap-2 LinkFirst"
                >
                  <div className="bg-white py-[4px] px-[10px] rounded-lg">
                    <FaFacebookF size={18} />
                  </div>
                  <p className=" font-medium">FB Post</p>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="fb-share"
                  className="flex items-center gap-2 LinkFirst"
                >
                  <div className="bg-white py-[4px] px-[10px] rounded-lg">
                    <FaFacebookF size={18} />
                  </div>
                  <p className=" font-medium">FB Share</p>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="fb-comment"
                  className="flex items-center gap-2 LinkFirst"
                >
                  <div className="bg-white py-[4px] px-[10px] rounded-lg">
                    <FaFacebookF size={18} />
                  </div>
                  <p className=" font-medium">FB Comment</p>
                </NavLink>
              </li>
            </ul>
          )}
        </li>
        <li onClick={() => Arrow("Wallet")}>
          <NavLink to="wallet" className="flex items-center gap-2 LinkFirst">
            <div className="bg-white py-[4px] px-[10px] rounded-lg">
              <FaWallet size={21} />
            </div>
            <p className="flex-1 font-medium">Wallet</p>
            {arrow === "Wallet" ? (
              <FaAngleDown className="mr-[10px] white" />
            ) : (
              <FaAngleRight className="mr-[10px] white" />
            )}
          </NavLink>
          {arrow === "Wallet" && (
            <ul className="ml-[16px]">
              <li>
                <NavLink
                  to="money"
                  className="flex items-center gap-2 LinkFirst"
                >
                  <div className="bg-white py-[4px] px-[10px] rounded-lg">
                    <CiDollar size={22} />
                  </div>
                  <p className=" font-medium">Money</p>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="point"
                  className="flex items-center gap-2 LinkFirst"
                >
                  <div className="bg-white py-[4px] px-[10px] rounded-lg">
                    <FaStar size={18} />
                  </div>
                  <p className=" font-medium">Point</p>
                </NavLink>
              </li>
            </ul>
          )}
        </li>
        <li onClick={() => Arrow("Setting")}>
          <NavLink
            to="setting"
            className="flex items-center gap-2 LinkFirst mt-[-5px]"
          >
            <div className="bg-white py-[4px] px-[10px] rounded-lg">
              <CiSettings size={28} />
            </div>
            <p className="flex-1 font-medium">Setting</p>
            {arrow === "Setting" ? (
              <FaAngleDown className="mr-[10px] white" />
            ) : (
              <FaAngleRight className="mr-[10px] white" />
            )}
          </NavLink>
          {arrow === "Setting" && (
            <ul className="ml-[16px]">
              <li>
                <NavLink
                  to="deposit"
                  className="flex items-center gap-2 LinkFirst"
                >
                  <div className="bg-white py-[4px] px-[10px] rounded-lg">
                    <CiDollar size={22} />
                  </div>
                  <p className=" font-medium">Deposit</p>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="withdraw"
                  className="flex items-center gap-2 LinkFirst"
                >
                  <div className="bg-white py-[4px] px-[10px] rounded-lg">
                    <FaStar size={18} />
                  </div>
                  <p className=" font-medium">Withdraw</p>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="referral"
                  className="flex items-center gap-2 LinkFirst"
                >
                  <div className="bg-white py-[4px] px-[10px] rounded-lg">
                    <FaStar size={18} />
                  </div>
                  <p className=" font-medium">Referral</p>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="daily-bonus"
                  className="flex items-center gap-2 LinkFirst"
                >
                  <div className="bg-white py-[4px] px-[10px] rounded-lg">
                    <FaStar size={18} />
                  </div>
                  <p className=" font-medium">Daily Bonus</p>
                </NavLink>
              </li>
              <li>
                <NavLink to="p2p" className="flex items-center gap-2 LinkFirst">
                  <div className="bg-white py-[4px] px-[10px] rounded-lg">
                    <FaStar size={18} />
                  </div>
                  <p className=" font-medium">P2P</p>
                </NavLink>
              </li>
            </ul>
          )}
        </li>
      </ul>
    </div>
  );
};
