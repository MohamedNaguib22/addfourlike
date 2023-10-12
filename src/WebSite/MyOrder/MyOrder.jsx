

import { OrderTable } from "../../components/OrderTable/OrderTable";
import HeaderTwo from "../../components/HeaderWebsite/HeaderTwo";
import { IoMdTimer } from "react-icons/io";
import logo1 from "../../../public/Assets/img/Group 2.png";
import logo2 from "../../../public/Assets/img/group 1.png";
import { TableOrderWeb } from "../../components/TableOrderWeb/TableOrderWeb";

export const MyOrder = () => {
  return (
    <div>
      <HeaderTwo>
        <div className="flex items-center gap-2 py-[12px]">
          <IoMdTimer size={24} /> <p className="text-[18px]">Order History</p>
        </div>
      </HeaderTwo>
      <div className="grid container gap-[8px] px-[40px] grid-cols-1 lg:grid-cols-4">
        <div className="bg-white py-[6px] pl-[25px] pr-[10px] flex items-center rounded-2xl">
          <div className="flex flex-col gap-1 flex-1">
            <p className="Text-Paragraph text-gray-500">Total Users</p>
            <p className="text-[18px] lg:text-[24px] font-bold">999</p>
          </div>
          <div className="w-[60px] h-[60px] flex justify-center items-center rounded-full">
            <img src={logo1} alt="" />
          </div>
        </div>
        <div className="bg-white py-[6px] pl-[25px] pr-[10px] flex items-center rounded-2xl">
          <div className="flex flex-col gap-1 flex-1">
            <p className="Text-Paragraph text-gray-500">Active Users</p>
            <p className="text-[18px] lg:text-[24px] font-bold">500</p>
          </div>
          <div className="w-[60px] h-[60px] bg-gray-200 flex justify-center items-center rounded-full">
            <img src={logo2} className="w-[40px] h-[40px]" alt="" />
          </div>
        </div>
      </div>
      <div className="container my-[26px] lg:px-[40px]">
        <OrderTable />
      </div>
      <div><TableOrderWeb/> </div>
    </div>
  );
};
