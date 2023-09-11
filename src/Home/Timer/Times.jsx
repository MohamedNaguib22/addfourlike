import {
  FaHourglassEnd,
  FaListUl,
  FaMoneyBillWave,
  FaUsers,
} from "react-icons/fa";

// import { LuListChecks } from "react-icons/lu";
import Timer from "./Timer";
export const Times = () => {
  return (
    <div className="flex container flex-col items-center relative py-[100px]">
      <h1 className="text-black text-[28px] lg:text-[38px] mb-[50px] font-medium text-center">
        Timer Section
      </h1>
      <div className="grid lg:grid-cols-4 w-[95%] lg:w-full md:grid-cols-2 grid-cols-1 gap-[30px]">
        <div className="w-full">
          <h1 className="text-black text-[20px] text-center font-bold">
            Other User
          </h1>
          <Timer />
          <div className="text-black font-bold flex justify-center items-center">
            <FaUsers size={30} />
          </div>
        </div>
        <div className="w-full">
          <h1 className="text-black text-[20px] text-center font-bold">
            Start Form
          </h1>
          <Timer />
          <div className="text-black font-bold flex justify-center items-center">
            <FaHourglassEnd size={30} />
          </div>
        </div>
        <div className="w-full">
          <h1 className="text-black text-[20px] text-center font-bold">
            Tasks Available
          </h1>
          <Timer />
          <div className="text-black font-bold flex justify-center items-center">
            <FaListUl size={30} />
          </div>
        </div>
        <div className="w-full">
          <h1 className="text-black text-[20px] text-center font-bold">
            Amount Spent
          </h1>
            <Timer />
          <div className="text-black font-bold flex justify-center items-center">
            <FaMoneyBillWave size={30} />
          </div>
        </div>
      </div>
    </div>
  );
};
