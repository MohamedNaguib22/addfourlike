/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import logo from "../../../public/Assets/img/logo.png";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";
import { useContext, useState } from "react";
import { PopUp } from "../../Context/Context";
import { HashLink } from "react-router-hash-link";
const Navbar = (props) => {
  const [nav, setNav] = useState(false);
  const contextPop = useContext(PopUp);
  const functionModel = contextPop.ModelUp;
  function clickNAv() {
    setNav(!nav);
  }
  return (
    <div className={`relative z-[5] ${props.class}`}>
      <div className="flex justify-between items-center container leading-[21.78px] p-[27px] h-[80px] Font font-[400] text-white text-[18px] relative">
        <div className="w-[200px] lg:w-[250px]">
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
        </div>
        <ul className={`hidden items-center gap-[85px] lg:flex ${props.color}`}>
          <li>
            <Link to="/dashboard" className="uppercase">
              services
            </Link>
          </li>
          <li>
            <HashLink smooth to="/#about" className="uppercase">
              about us
            </HashLink>
          </li>
          <li>
            <HashLink smooth to="/#contact" className="uppercase">
              contact
            </HashLink>
          </li>
        </ul>
        <div>
          <button
            onClick={functionModel}
            className={`uppercase hidden lg:flex justify-center items-center w-[173px] h-[47px] rounded-[24px] ${props.border}`}
          >
            login
          </button>
        </div>
        <div className="block lg:hidden">
          <button
            className="border-2 border-white p-[10px] rounded-lg "
            onClick={clickNAv}
          >
            <FaBars size={20} />
          </button>
        </div>
      </div>
      {/* Mobile Nav */}
      <div
        className={`lg:hidden block right-0 overflow-hidden lg:opacity-0 opacity-[1] lg:invisible visible w-[320px] bg-white text-black fixed z-[2] top-0 transition-all duration-[0.5s] h-screen leading-[21.78px] Font font-[400] text-[18px] px-[40px] pt-[70px] ${
          nav ? "right-0 " : "right-[-200%] "
        }`}
      >
        <ul className="flex flex-col gap-[80px]">
          <li onClick={clickNAv} className="cursor-pointer">
            <FaTimes size={25} />
          </li>
          <li>
            <a href="#" className="uppercase">
              services
            </a>
          </li>
          <li>
            <a href="#" className="uppercase">
              about us
            </a>
          </li>
          <li>
            <Link to="/contact" className="uppercase">
              contact
            </Link>
          </li>
          <li className="flex items-center justify-center">
            <button
              onClick={functionModel}
              className="uppercase h-[47px] border-2 border-black w-[173px] flex items-center justify-center  rounded-[24px] "
            >
              login
            </button>
          </li>
        </ul>
      </div>
      <div
        className={`bg-[#0303038f] w-full lg- h-screen top-0 fixed z-[1] transition-all duration-[0.2s] lg:hidden block  lg:invisible lg:opacity-0 opacity-[1] visible ${
          nav ? "right-0 " : "right-[-200%] "
        }`}
      ></div>
    </div>
  );
};

export default Navbar;
