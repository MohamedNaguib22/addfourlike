/* eslint-disable react/prop-types */
import { useState } from "react";
import { FaAngleDown } from "react-icons/fa";

export const VodafoneWithdraw = (props) => {
    const [commission, setCommission] = useState("");
    const [min, setMin] = useState("");
    function Submit(e) {
      e.preventDefault();
    }
  return (
    props.FormWithdraw && (
      <form onClick={Submit} className="flex flex-col gap-[26px] py-[26px]">
        <div className="flex items-center gap-[36px]">
          <label className="text-[18px] font-medium" htmlFor="min">
            Min:
          </label>
          <input
            className="w-[82%] ml-[67px] pl-[8px] outline-none text-black font-medium py-[8px] rounded-lg bg-[#D9D9D9] border-[#007BFF99] border-[1px]"
            value={min}
            onChange={(e) => setMin(e.target.value)}
            type="text"
            id="min"
          />
        </div>
        <div className="flex items-center gap-[26px]">
          <div className="flex items-center flex-1 gap-[36px]">
            <label htmlFor="Commission" className="text-[18px] font-medium">
              Commission:
            </label>
            <input
              className="w-full py-[8px] pl-[8px] outline-none text-black font-medium rounded-lg bg-[#D9D9D9] border-[#007BFF99] border-[1px]"
              type="text"
              id="Commission"
              value={commission}
              onChange={(e) => setCommission(e.target.value)}
            />
          </div>
          <div>
            <button className="flex items-center justify-center text-[18px] bg bg-[#007BFF99] w-[100px] font-medium py-[5px] rounded-full">
              Type <FaAngleDown className="mt-[4px]" />
            </button>
          </div>
        </div>
        <div className="flex gap-[16px] items-center">
          <button className="bg-[#007BFF99] text-[17px] w-[100px] font-medium py-[5px] rounded-full">
            Save
          </button>
          <button className="bg-[#FF202099] text-[17px] w-[110px] font-medium py-[5px] rounded-full">
            Cancel
          </button>
        </div>
      </form>
    )
  );
}
