import { FourCard } from "../../../components/Dashboard/FourCard/FourCard";
import { DateMonth } from "../../../components/Dashboard/Date/DateMonth";
import { TableDashUsers } from "../../../components/Dashboard/TableDash/TableDashUsers";
export const Users = () => {
  return (
    <div className="px-[38px] pt-[16px] ">
      <h1 className="Text-Header mb-[8px]">
        <span className="text-blue-400">Dashboard</span> &gt; Users
      </h1>
      <DateMonth className="top-[17%] left-[22%]" />
      <FourCard />
      <div className="w-full bg-white h-auto rounded-2xl pb-[18px] pt-[6px] px-[10px]">
        <TableDashUsers />
        <div className="flex items-center justify-end pt-[50px]">
          <div className="rounded-s-md hover:bg-blue-500 cursor-pointer transition-all  duration-[0.3s] bg-gray-200 text-[18px] h-[40px] font-medium w-[80px] flex items-center justify-center ">
            <p>Back</p>
          </div>
          <div>
            <div className="bg-blue-500 text-[20px] w-[50px] flex justify-center items-center h-[40px]  font-medium ">
              <p>1</p>
            </div>
          </div>
          <div className="rounded-e-md hover:bg-blue-500 cursor-pointer transition-all duration-[0.3s] bg-gray-200 text-[18px] h-[40px] font-medium w-[80px] flex items-center justify-center ">
            <p>Next</p>
          </div>
        </div>
      </div>
    </div>
  );
};
