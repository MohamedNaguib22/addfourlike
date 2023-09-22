/* eslint-disable react/prop-types */
import { HiUsers } from "react-icons/hi";

export const FourCard = (props) => {
  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-[40px] mb-[26px]">
      <div className="bg-white py-[6px] pl-[25px] pr-[10px] flex items-center rounded-2xl">
        <div className="flex flex-col gap-1 flex-1">
          <p className="Text-Paragraph text-gray-500">Total Users</p>
          <p className="text-[18px] lg:text-[24px] font-bold">999</p>
        </div>
        <div className="bg-blue-300 w-[60px] h-[60px] flex justify-center items-center rounded-full">
          <HiUsers size={35} />
        </div>
      </div>
      <div className="bg-white py-[6px] pl-[25px] pr-[10px] flex items-center rounded-2xl">
        <div className="flex flex-col gap-1 flex-1">
          <p className="Text-Paragraph text-gray-500">Active Users</p>
          <p className="text-[18px] lg:text-[24px] font-bold">500</p>
        </div>
        <div className="bg-green-400 w-[60px] h-[60px] flex justify-center items-center rounded-full">
          <HiUsers size={35} />
        </div>
      </div>
      {props.Three && (
        <div className="bg-white py-[6px] pl-[25px] pr-[10px] flex items-center rounded-2xl">
          <div className="flex flex-col gap-1 flex-1">
            <p className="Text-Paragraph text-gray-500">Total Exchange</p>
            <p className="text-[18px] lg:text-[24px] font-bold">2K</p>
          </div>
          <div className="bg-blue-300 w-[60px] h-[60px] flex justify-center items-center rounded-full">
            <HiUsers size={35} />
          </div>
        </div>
      )}
    {  props.Four &&
      <div className="bg-white py-[6px] pl-[25px] pr-[10px] flex items-center rounded-2xl">
        <div className="flex flex-col gap-1 flex-1">
          <p className="Text-Paragraph text-gray-500">Active Exchange</p>
          <p className="text-[18px] lg:text-[24px] font-bold">1K</p>
        </div>
        <div className="bg-blue-300 w-[60px] h-[60px] flex justify-center items-center rounded-full">
          <HiUsers size={35} />
        </div>
      </div>}
    </div>
  );
};
