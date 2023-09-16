import { FaAngleDown, FaUser } from "react-icons/fa";
import Logo from "../../../public/Assets/img/logo.png";
export const TopNavbar = () => {
  return (
    <div className="bg-white shadow-md w-full h-[80px] sticky z-10">
      <div className="flex justify-between h-full items-center px-[58px]">
        <div className="w-[220px]">
          <img src={Logo} alt="Logo TopNav" className="max-w-full h-auto" />
        </div>
        <div className="flex items-center gap-2 cursor-pointer">
          <div className="bg-gray-200 w-[27px] h-[27px] flex justify-center items-center rounded-full">
            <FaUser size={20} />
          </div>
          <p className="text-[16px] lg:text-[18px] font-medium flex items-center">
            <span>Admin</span> <FaAngleDown className="mt-[4px]" />
          </p>
        </div>
      </div>
    </div>
  );
};
