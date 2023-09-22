import { DateMonth } from "../../../components/Dashboard/Date/DateMonth";
import { FourCard } from "../../../components/Dashboard/FourCard/FourCard";

export const Bonus = () => {
  return (
    <div className="px-[38px] pt-[16px] ">
      <h1 className="Text-Header mb-[8px]">
        <span className="text-blue-400">Dashboard</span> &gt; Order
      </h1>
      <DateMonth className="top-[17%] left-[22%]" />
      <FourCard />
      <div className="w-full bg-white h-[500px] pb-[50px] mt-[20px] rounded-2xl pt-[6px] px-[10px]">
        <h1 className="Text-Header mb-[8px]">Daily Bonus</h1>
        <h2 className="text-[19px] mb-[8px] text-gray-500 font-[400]">
          Payment Methods
        </h2>
        <form className="flex gap-[16px] flex-col mb-[16px]">
        <div className="flex items-center gap-[16px]">
          <label htmlFor="Daily" className="font-medium">
            Daily Point :
          </label>
            <input
              className="border-[2px] border-blue-200 w-[45%] py-[8px] rounded-md bg-gray-200 text-black px-[8px]"
              type="text"
            />
        </div>
        <div className="flex items-center gap-[16px]">
          <label htmlFor="Daily" className="font-medium">
            Clicks :
          </label>
            <input
              className="border-[2px] ml-[37px] border-blue-200 w-[45%] py-[8px] rounded-md bg-gray-200 text-black px-[8px]"
              type="text"
            />
        </div>
        </form>
        <div className="w-[98%] mx-auto h-[2px] bg-gray-300 my-[28px]"></div>
        <div className="flex gap-[16px] items-center">
          <button className="bg-[#2FD654B2] text-[17px] w-[100px] font-medium py-[5px] rounded-full">
            Save
          </button>
          <button className="bg-[#FF202099] text-[17px] w-[110px] font-medium py-[5px] rounded-full">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
