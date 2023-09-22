/* eslint-disable react/prop-types */
import { useState } from "react";

export const VodafoneDeposit = (props) => {
  const [number, setNumber] = useState("");
  const [min, setMin] = useState("");
  function Submit(e) {
    e.preventDefault();
  }
  return (
    props.FormDeposit && (
      <form onClick={Submit} className="flex flex-col gap-[26px] py-[26px]">
        <div className="flex items-center gap-[36px]">
          <label htmlFor="number" className="text-[18px] font-medium">
            Number:
          </label>
          <input
            className="w-full py-[8px] pl-[8px] outline-none text-black font-medium rounded-lg bg-[#D9D9D9] border-[#007BFF99] border-[1px]"
            type="number"
            id="number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />
        </div>
        <div className="flex items-center gap-[36px]">
          <label className="text-[18px] font-medium" htmlFor="min">
            Min:
          </label>
          <input
            className="w-[90%] ml-[35px] pl-[8px] outline-none text-black font-medium py-[8px] rounded-lg bg-[#D9D9D9] border-[#007BFF99] border-[1px]"
            value={min}
            onChange={(e) => setMin(e.target.value)}
            type="text"
            id="min"
          />
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
};
