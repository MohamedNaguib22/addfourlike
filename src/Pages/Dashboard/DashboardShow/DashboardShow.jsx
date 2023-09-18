import { FaAngleDown } from "react-icons/fa";
import { HiUsers } from "react-icons/hi";
import { Date } from "../../../components/Date/Date";
import { Chart } from "../../../components/Chart/Chart";
import { useState } from "react";

export const DashboardShow = () => {
  const [click, setClick] = useState("Month");
  function Click(click) {
    setClick(click);
  }
  return (
    <div className="px-[38px] pt-[16px] ">
      <h1 className="Text-Header mb-[8px]">Dashboard</h1>
      <Date className="top-[17%] left-[22%]" />
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
        <div className="bg-white py-[6px] pl-[25px] pr-[10px] flex items-center rounded-2xl">
          <div className="flex flex-col gap-1 flex-1">
            <p className="Text-Paragraph text-gray-500">Total Exchange</p>
            <p className="text-[18px] lg:text-[24px] font-bold">2K</p>
          </div>
          <div className="bg-blue-300 w-[60px] h-[60px] flex justify-center items-center rounded-full">
            <HiUsers size={35} />
          </div>
        </div>
        <div className="bg-white py-[6px] pl-[25px] pr-[10px] flex items-center rounded-2xl">
          <div className="flex flex-col gap-1 flex-1">
            <p className="Text-Paragraph text-gray-500">Active Exchange</p>
            <p className="text-[18px] lg:text-[24px] font-bold">1K</p>
          </div>
          <div className="bg-blue-300 w-[60px] h-[60px] flex justify-center items-center rounded-full">
            <HiUsers size={35} />
          </div>
        </div>
      </div>
      <div className="w-full bg-white h-auto rounded-2xl pb-[18px] pt-[6px] px-[10px]">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-1 bg-gray-200 w-[110px] h-[40px] justify-center rounded-xl">
            <h1 className="Text-Header">Users</h1>
            <FaAngleDown className="mt-[6px]" />
          </div>
          <div className="flex ">
            <button
              onClick={() => Click("Month")}
              className={`Text-Header  px-[10px] py-[4px] rounded-s-xl ${
                click === "Month" ? "bg-blue-400" : "bg-gray-200"
              }`}
            >
              Month
            </button>
            <button
              onClick={() => Click("Year")}
              className={`Text-Header  px-[16px] py-[4px] rounded-e-xl ${
                click === "Year" ? "bg-blue-400" : "bg-gray-200"
              }`}
            >
              Year
            </button>
          </div>
        </div>
        {click === "Month" ? (
          <div className="py-[20px]">
            <Chart color="red" />
          </div>
        ) : (
          click === "Year" && (
            <div className="py-[20px]">
              <Chart color="green" />
            </div>
          )
        )}
      </div>
    </div>
  );
};
