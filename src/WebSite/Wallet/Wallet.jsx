import { HeaderOne } from "../../components/HeaderWebsite/HeaderOne";
import Logo from "../../../public/Assets/img/logo.png";
import { FaAngleDown, FaWallet } from "react-icons/fa";
import { useState } from "react";
import { WalletTable } from "../../components/WalletTable/WalletTable";
export const Wallet = () => {
  const [click, setClick] = useState(false);
  function Click() {
    setClick(!click);
  }
  return (
    <div>
      <HeaderOne>
        <div className="flex lg:items-center text-[14px] lg:text-[16px]">
          <p>📢</p>
          <h1>
            Join the affiliate program and earn a lifetime 5% of the points
            collected in the `FREE Points` section.
          </h1>
        </div>
      </HeaderOne>
      <div className="w-[250px] mx-auto mt-[26px]">
        <img src={Logo} alt="" />
      </div>
      <div className="mb-[20px] ">
        <h1 className="mt-[8px] text-center font-medium text-[24px]">
          AMF Token Balance at Add4Like
        </h1>
      </div>
      <div className="text-center bg-gray-500 text-white py-[32px] ">
        <p>your AMF token balance at Add4Like</p>
        <p className="text-[32px] font-bold lg:text-[48px]">
          <span className="text-[26px] font-normal">$</span> 0{" "}
          <span className="font-normal text-[14px]">AMF</span>
        </p>
      </div>
      <div className="relative px-[10px] gap-2 flex items-center text-[22px] py-[8px] font-medium bg-white w-[210px] rounded-full mx-auto mt-[10px] mb-[26ox]">
        <FaWallet size={30} />
        0xc84...9465
        <div onClick={Click}>
          <FaAngleDown />
        </div>
        <div
          className={`absolute py-[8px] px-[8px] top-[50px] rounded-lg left-0 bg-white w-full  ${
            click ? "opacity-[1] visible" : "opacity-0 invisible"
          }`}
        ></div>
      </div>
      <div>
        <h1 className="mt-[8px] text-center font-semibold text-[24px]">
          History of earning, withdrawals, swaps and conversion
        </h1>
      </div>
      <div className="container my-[26px] lg:px-[40px]">
        <WalletTable />
      </div>
    </div>
  );
};
