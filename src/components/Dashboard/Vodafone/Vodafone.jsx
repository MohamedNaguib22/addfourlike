/* eslint-disable react/prop-types */
import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { VodafoneDeposit } from "./VodafoneDeposit";
import { VodafoneWithdraw } from "./VodafoneWithdraw";

export const Vodafone = (props) => {
    const [modelUp, setModelUp] = useState(false);
    function ModelUp() {
      setModelUp(!modelUp);
    }
  return (
    <div>
      <div className="w-full bg-white h-[500px] pb-[50px] mt-[20px] rounded-2xl pt-[6px] px-[10px]">
        <h1 className="Text-Header mb-[8px]">{props.Header}</h1>
        <h2 className="text-[19px] mb-[8px] text-gray-500 font-[400]">
          Payment Methods
        </h2>
        <form className="flex gap-[16px] mb-[16px] items-center">
          <input
            className="border-[2px] w-[45%] py-[8px] rounded-md text-black px-[8px]"
            type="text"
            placeholder="Add..."
          />
          <button
            type="submit"
            className="bg-[#007BFF99] font-medium text-black w-[100px] py-[8px] rounded-lg"
          >
            Add +
          </button>
        </form>
        <div className="flex gap-[16px] items-center">
          <button
            onClick={ModelUp}
            className="bg-blue-200 text-[17px] w-[170px] font-medium py-[8px] border-[1px] border-black rounded-full"
          >
            Vodafone Cash
          </button>
          <button className="bg-blue-200 text-[17px] w-[100px] font-medium py-[8px] border-[1px] border-black rounded-full">
            USDT
          </button>
        </div>
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
      <div
        className={`absolute w-[50%] h-auto py-[36px] bg-[#E9EBEE] top-[55%] left-[50%] translate-x-[-50%] translate-y-[-50%] px-[16px] border-[2px] border-gray-400 rounded-3xl $${
          modelUp ? "opacity-[1] visible" : "opacity-0 invisible"
        } `}
      >
        <div className="flex items-center pl-[10px] pt-[10px] border-b-[2px] border-gray-400 pb-[16px]">
          <h1 className="Text-Header flex-1">Edit Vodafone Cash</h1>
          <FaTimes
            onClick={ModelUp}
            className="mt-[6px] mr-[40px] cursor-pointer"
            size={20}
          />
        </div>
        <VodafoneDeposit FormDeposit={props.Header === "Deposit" && true} />
        <VodafoneWithdraw FormWithdraw={props.Header === "Withdraw" && true} />
      </div>
    </div>
  );
}
