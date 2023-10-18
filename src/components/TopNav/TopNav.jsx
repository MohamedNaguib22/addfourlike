import { Link } from "react-router-dom";
import logo from "../../../public/Assets/img/logo.png";
import man from "../../../public/Assets/img/man.png";
import { FaBars, FaUser } from "react-icons/fa";
import { UserIcon } from "@heroicons/react/solid";
import { useContext, useEffect, useState } from "react";
import { SideNav } from "../../Context/ContextSide";
import axios from "axios";
import Cookies from "universal-cookie";
export const TopNav = () => {
  const Side = useContext(SideNav);
  // Cookie
  const Cookie = new Cookies();
  const token = Cookie.get("addLike");
  const FunctionSide = Side.SideShow;
  const [mobileNav, setMobileNav] = useState(false);
  const [dropDown, setDropDown] = useState(false);
  const [user, setUSer] = useState("");
  const [id, setId] = useState("");
  const [total, setTotal] = useState("");
  function handleMobile() {
    setMobileNav(!mobileNav);
  }
  function handelDropDown() {
    if(dropDown===false) {
      setDropDown(true);
    }
    else {
      setDropDown(false);
    }
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
  useEffect(() => {
    axios
      .get("https://add-likes.onrender.com/add4like/api/v1/auth/user", {
        headers: {
          Authorization: "add__" + token,
        },
      })
      .then((res) => {
        setUSer(res.data.user.user_name);
        setId(res.data.user._id);
      });
  }, [token]);

  useEffect(() => {
    try{
      axios
      .get(`https://add-likes.onrender.com/add4like/api/v1/points/user/${id}`, {
        headers: {
          Authorization: "add__" + token,
        },
      })
      .then((res) => {
        setTotal(res.data.balance.total_points);

      });
    } catch (err) {
      console.log("Add4Like");
    }
  }, [id, token]);
  return (
    <div className="fixed z-[999] top-0 w-full shadow-md bg-[#343A40] px-[28px] h-[70px] flex justify-between items-center">
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
          mobileNav ? "top-[100%]" : "top-[-300%]"
        }`}
      >
        <div className="text-white font-bold text-[18px] flex gap-[20px] items-center ">
          <h1 className="relative before:absolute before:content-[''] before:w-[1px] before:h-[90%] before:bg-white before:right-[-30%] before:top-[50%] before:rotate-6 before:translate-y-[-50%]">
            $0.0
          </h1>
          <h1>{total} Points</h1>
        </div>
        <div className="flex items-center gap-3">
          <h1 className="text-white font-bold text-[25px]">{user}</h1>
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
      <div className="text-white font-bold text-[22px] hidden lg:flex gap-[50px] items-center ">
        <h1 className="relative before:absolute before:content-[''] before:w-[1px] before:h-[90%] before:bg-white before:right-[-30%] before:top-[50%] before:rotate-6 before:translate-y-[-50%]">
          $0.0
        </h1>
        <h1>{total} Points</h1>
      </div>
      <div
        onClick={handelDropDown}
        className="hidden lg:flex items-center gap-4 relative cursor-pointer"
      >
        <h1 className="text-white font-bold text-[28px]">{user}</h1>
        <FaUser size={40} />
        <ul
          className={`absolute shadow-md bg-[#E9EBEE] w-[250px] top-[56px] left-[-60px] py-[10px] px-[20px] flex flex-col gap-[8px] ${
            dropDown ? "block" : "hidden"
          }`}
        >
          <li className="flex items-center gap-[10px]">
            <div>
              <img
                className="w-[60px] h-[60px] rounded-full"
                src={man}
                alt="Logo"
              />
            </div>
            <div>
              <p className="text-[18px] font-medium">{user}</p>
            </div>
          </li>
          <li className="flex items-center gap-3 border-b-[1px] border-b-black">
            <span className="font-medium">Status:</span> <FaUser />
            <span className="font-medium">Normal</span>
          </li>
          <li>
            <p className="font-medium">My Profile</p>
          </li>
          <li>
            <p className="font-medium">My Referrals</p>
          </li>
          <li>
            <button className="font-medium" onClick={LogOut}>
              Log Out
            </button>
          </li>
        </ul>
      </div>
      <div className="block lg:hidden" onClick={handleMobile}>
        <button className="border-2 border-white rounded-full p-[5px] text-white">
          <UserIcon className="h-[30px] w-[30px]" />
        </button>
      </div>
    </div>
  );
};
