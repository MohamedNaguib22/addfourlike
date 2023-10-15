import { FaBars, FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import { SideNav } from "../../Context/ContextSide";
import { useContext, useEffect, useState } from "react";
import Logo from "../../../public/Assets/img/My Order.png";
import Logo1 from "../../../public/Assets/img/Wallet.png";
import Logo2 from "../../../public/Assets/img/P2P Trade.png";
import Logo3 from "../../../public/Assets/img/Buy Point.png";
import Logo4 from "../../../public/Assets/img/Daily Bouns.png";
import youtube from "../../../public/Assets/img/youtube.png";
import whatsapp from "../../../public/Assets/img/whatsapp.png";
import facebook from "../../../public/Assets/img/facebook.png";
import telegram from "../../../public/Assets/img/telegram.png";
import Cookies from "universal-cookie";
import axios from "axios";
export const LeftSide = () => {
  const SideState = useContext(SideNav);
  const State = SideState.Side;
  const [admin, setAdmin] = useState("");
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
      });
  }, [token]);
  return (
    <>
      <div
        className={`fixed top-[70px] z-[999] bg-[#F0F2F4] lg:left-0 transition-all duration-[0.3s] w-[320px] lg:top-[70px] pb-[80px] overflow-y-auto h-full lg:w-[16.7%] lg:shadow-md ${
          State ? "left-0 " : "left-[-200%] "
        }`}
      >
        <ul className="flex flex-col gap-4 text-[24px] pb-[18px] font-bold pt-[20px] relative px-[10px] before:content-['']  before:absolute before:w-[80%] before:h-[2px] before:bg-gray-400 before:bottom-0 before:left-2/4 before:translate-x-[-50%] ">
          {admin === "Moderator" || admin === "Admin" ? (
            <li className="lg:w-[90%] flex gap-2 items-center lg:justify-start px-[0] lg:px-[20px] justify-center LinksFonts text-white bg-[#0E87F2CC] w-full h-[43px] rounded-[23px]">
              <FaPlus size={14} /> <Link to="/dashboard">Dashboard</Link>
            </li>
          ) : null}
          <li className="lg:w-[90%] flex gap-2 items-center lg:justify-start px-[0] lg:px-[20px] justify-center LinksFonts text-white bg-[#0E87F2CC] w-full h-[43px] rounded-[23px]">
            <FaPlus size={14} /> <Link to="add-order">Add Order</Link>
          </li>
          <li className=" flex gap-2 items-center text-black hover:text-gray-900 cursor-pointer transition-all duration-[0.3s]">
            <div>
              <img src={Logo} alt="Logo" />
            </div>
            <Link to="my-order">My Order</Link>
          </li>
          <li className="flex gap-2 items-center text-black hover:text-gray-900 cursor-pointer transition-all duration-[0.3s]">
            <FaBars />
            <Link to="service">Service</Link>
          </li>
          <li className="flex gap-2 items-center text-black hover:text-gray-900 cursor-pointer transition-all duration-[0.3s]">
            <div>
              <img src={Logo1} alt="Logo" />
            </div>
            <Link to="wallet">Wallet</Link>
          </li>
        </ul>
        <ul className="flex flex-col gap-4 py-[20px] text-[24px] font-bold px-[10px] relative before:content-['']  before:absolute before:w-[80%] before:h-[2px] before:bg-gray-400 before:bottom-0 before:left-2/4 before:translate-x-[-50%] ">
          <li className="lg:w-[90%] flex gap-2 lg:justify-start px-[0] lg:px-[20px] LinksFonts items-center justify-center text-white bg-[#0E87F2CC] h-[43px] rounded-[23px]">
            <FaPlus size={14} />
            <Link to="add-site">Add Site/Link</Link>
          </li>
          <li className="flex gap-2 text-gray-700 lg:justify-start hover:text-black cursor-pointer transition-all duration-[0.3s]"></li>
          <li className=" flex gap-2 items-center text-black hover:text-gray-900 cursor-pointer transition-all duration-[0.3s]">
            <div>
              <img src={Logo} alt="Logo" />
            </div>
            <Link to="my-site">My Site</Link>
          </li>
          <li className="flex gap-2 items-center text-black hover:text-gray-900 cursor-pointer transition-all duration-[0.3s]">
            <div>
              <img src={Logo2} alt="Logo" />
            </div>
            <Link to="p2p-trade">P2P Trade</Link>
          </li>
          <li className="flex gap-2 items-center text-black hover:text-gray-900 cursor-pointer transition-all duration-[0.3s]">
            <div>
              <img src={Logo3} alt="Logo" />
            </div>
            <Link to="daily-bonus">Daily Bonus</Link>
          </li>
          <li className="flex gap-2 items-center text-black hover:text-gray-900 cursor-pointer transition-all duration-[0.3s]">
            <div>
              <img src={Logo4} alt="Logo" />
            </div>
            <Link to="buy-point">Buy Point</Link>
          </li>
          <li className="flex font-normal gap-2 items-center text-black hover:text-gray-900 cursor-pointer transition-all duration-[0.3s]">
            Free Point
          </li>
          <li className="flex gap-2 items-center text-black hover:text-gray-900 cursor-pointer transition-all duration-[0.3s]">
            <Link to="page-like">FB Page Like/Follower</Link>
          </li>
          <li className="flex gap-2 items-center text-black hover:text-gray-900 cursor-pointer transition-all duration-[0.3s]">
            <Link to="fb-profile">FB Profile Follow</Link>
          </li>
          <li className="flex gap-2 items-center text-black hover:text-gray-900 cursor-pointer transition-all duration-[0.3s]">
            <Link to="fb-post">FB Post Like</Link>
          </li>
          <li className="flex gap-2 items-center text-black hover:text-gray-900 cursor-pointer transition-all duration-[0.3s]">
            <Link to="fb-comment">FB Comment</Link>
          </li>
          <li className="flex gap-2 items-center text-black hover:text-gray-900 cursor-pointer transition-all duration-[0.3s]">
            <Link to="fb-share">FB Share</Link>
          </li>
        </ul>
        <ul className="flex justify-center gap-3 mt-[30px] pb-[50px]">
          <div>
            <a href="#">
              <img src={telegram} alt="telegram" />
            </a>
          </div>
          <div>
            <a href="#">
              <img src={facebook} alt="facebook" />
            </a>
          </div>
          <div>
            <a href="#">
              <img src={whatsapp} alt="whatsapp" />
            </a>
          </div>
          <div>
            <a href="#">
              <img src={youtube} alt="youtube" />
            </a>
          </div>
        </ul>
      </div>
      <div
        className={`bg-[#0303038f] w-full lg- h-screen top-0 fixed z-[998] transition-all duration-[0.2s] lg:hidden block  lg:invisible lg:opacity-0 opacity-[1] visible ${
          State ? "left-0 " : "left-[-200%] "
        }`}
      ></div>
    </>
  );
};
