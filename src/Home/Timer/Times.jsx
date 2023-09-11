import { FaHourglassEnd, FaListUl, FaMoneyBillWave, FaUsers } from "react-icons/fa";

// import { LuListChecks } from "react-icons/lu";
import Timer from "./Timer";
export const Times = () => {
  return (
    <div className="flex flex-col py-[100px] relative h-auto">
      <h1 className="text-black text-[28px] lg:text-[38px] mb-[50px] font-medium text-center">
        Timer Section
      </h1>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 container gap-[30px]">
        <div className="flex items-center flex-col gap-[20px]">
          <h1 className="text-black text-[20px] text-center font-bold">
            Other User
          </h1>
          <Timer />
          <div className="text-black font-bold ml-[18px]">
            <FaUsers size={30} />
          </div>
        </div>
        <div className="flex items-center flex-col gap-[20px]">
          <h1 className="text-black text-[20px] text-center font-bold">
            Start Form
          </h1>
          <Timer />
          <div className="text-black font-bold ml-[18px]">
            <FaHourglassEnd size={30} />
          </div>
        </div>
        <div className="flex items-center flex-col gap-[20px]">
          <h1 className="text-black text-[20px] text-center font-bold">
            Tasks Available
          </h1>
          <Timer />
          <div className="text-black font-bold ml-[18px]">
            <FaListUl size={30} />
          </div>
        </div>
        <div className="flex items-center flex-col gap-[20px]">
          <h1 className="text-black text-[20px] text-center font-bold">
            Amount Spent
          </h1>
          <Timer />
          <div className="text-black font-bold ml-[18px]">
            <FaMoneyBillWave size={30} />
          </div>
        </div>
      </div>
    </div>
  );
};
