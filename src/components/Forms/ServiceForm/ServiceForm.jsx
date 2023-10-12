import { useState } from "react";
import { FaCheck, FaCoins, FaFacebookF } from "react-icons/fa";
import { MdOutlineReportGmailerrorred } from "react-icons/md";

export const ServiceForm = () => {
  const [link, setLink] = useState("");
  const [quantity, setQuantity] = useState("");
  const [charge, setCharge] = useState("");

  function Submit(e) {
    e.preventDefault();
  }
  return (
    <div className="container">
      <form
        onSubmit={Submit}
        className="flex flex-col gap-[26px] w-full px-[8px] lg:w-[95%] rounded-md mx-auto border-black/10 border-[2px]"
      >
        <div>
          <label className="text-[20px] font-medium">Section</label>
          <select className="flex w-full items-center text-[20px] gap-2 mb-[16px] py-[14px] rounded-md bg-[#007BFF99] text-white px-[26px]">
            <option value="">
              <span className=" text-white font-medium">
                <FaFacebookF />
                Facebook Real
              </span>
            </option>
          </select>
          <label className="text-[20px] font-medium">Services</label>
          <select className="w-full  text-[20px] text-white mb-[8px] py-[14px] rounded-md bg-[#007BFF99] px-[26px]">
            <option value="">
              <span className="text-black bg-gray-500 w-[40px] bg-b inline-block font-medium">
                1
              </span>
              <span className=" text-white font-medium ">
                Facebook Real Like
              </span>
            </option>
          </select>
        </div>
        <div className="flex flex-col">
          <label className="text-[20px] font-medium" htmlFor="">
            Link
          </label>
          <input
            className=" py-[14px] px-[8px] text-[18px] outline-none border-black/40 border-[2px] rounded-md"
            type="text"
            value={link}
            onChange={(e) => setLink(e.target.value)}
          />
        </div>
        <div className="flex flex-col">
          <label className="text-[20px] font-medium" htmlFor="">
            Quantity
          </label>
          <input
            className=" py-[14px] px-[8px] text-[18px] outline-none border-black/40 border-[2px] rounded-md"
            type="text"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
          <p className="text-gray-500 font-normal mt-[4px]">
            Min: 10 - Max: 1000  
          </p>
        </div>
        <div className="flex flex-col relative">
          <label
            className="text-[20px] font-medium flex items-center gap-1"
            htmlFor=""
          >
            <FaCoins size={20} className="text-orange-400" />
            <span>Charge</span>
          </label>
          <input
            className=" py-[14px] px-[8px] text-[18px] inline-block outline-none border-black/40 border-[2px] rounded-md"
            type="text"
            value={charge}
            onChange={(e) => setCharge(e.target.value)}
            disabled
          />
          <MdOutlineReportGmailerrorred
            size={24}
            className="absolute top-[42%] right-6 text-red-500"
          />
          <p className="font-normal mt-[4px] text-red-500">
            Not Enough credits
          </p>
        </div>
        <div>
          <button
            type="submit"
            className="lg:w-[130px] rounded-md mb-[20px] text-[20px] h-[50px] w-[50%] lg:mx-0 mx-auto bg-[#007BFF99] flex items-center justify-center text-white gap-1"
          >
            <FaCheck size={20} />
            <span>Submit</span>
          </button>
        </div>
      </form>
    </div>
  );
};
