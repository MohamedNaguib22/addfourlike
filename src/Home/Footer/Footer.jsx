import "./Footer.css";
import FooterImg from "../../../public/Assets/img/Illustration4.png";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTelegramPlane, FaWhatsapp } from "react-icons/fa";
export const Footer = () => {
  return (
    <div className="relative BgFooter bg-cover bg-no-repeat w-full">
      <div className="container grid lg:grid-cols-4 grid-cols-1  items-center relative pb-[50px]">
        <div>
          <img src={FooterImg} alt="" />
        </div>
        <ul className="flex flex-col gap-[30px] text-black text-center pt-0 lg:pt-[200px]">
          <li className="text-[20px] font-bold">Useful links</li>
          <li className="text-[18px] font-medium">
            <Link to="/">Home</Link>
          </li>
          <li className="text-[18px] font-medium">
            <a href="#">About Us</a>
          </li>
          <li className="text-[18px] font-medium">
            <a href="#">Services</a>
          </li>
        </ul>
        <ul className="flex flex-col gap-[30px] text-black text-center pt-0 lg:pt-[200px]">
          <li className="font-bold text-[20px] ">Need Help?</li>
          <li className="text-[18px] font-medium">
            <a href="#">Privacy</a>
          </li>
          <li className="text-[18px] font-medium">
            <a href="#">Help</a>
          </li>
          <li className="text-[18px] font-medium">
            <a href="#">Terms</a>
          </li>
        </ul>
        <ul className="flex flex-col gap-[30px] text-black text-center items-center pt-0 lg:pt-[200px]">
          <li>
            <a href="#">
              <FaFacebookF className="text-black" size={30} />
            </a>
          </li>
          <li>
            <a href="#">
              <FaTelegramPlane className="text-black" size={30} />
            </a>
          </li>
          <li>
            <a href="#">
              <FaWhatsapp className="text-black" size={30} />
            </a>
          </li>
          <li className="w-[233px] ">
            <Link to="/contact">
              <button className="BtnHero text-white  Font uppercase w-[233px] h-[56px] rounded-[29px] flex items-center justify-center ">
                Contact
              </button>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
