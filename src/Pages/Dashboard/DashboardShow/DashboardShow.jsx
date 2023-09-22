import { FaAngleDown } from "react-icons/fa";
import { DateMonth } from "../../../components/Dashboard/Date/DateMonth";
import { Chart } from "../../../components/Chart/Chart";
import { useState } from "react";
import { FourCard } from "../../../components/Dashboard/FourCard/FourCard";

export const DashboardShow = () => {
  const [click, setClick] = useState("Month");
  function Click(click) {
    setClick(click);
  }
  return (
    <div className="px-[38px] pt-[16px] ">
      <h1 className="Text-Header mb-[8px]">Dashboard</h1>
      <DateMonth className="top-[17%] left-[22%]" />
      <FourCard Three={true} Four={true} />
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
