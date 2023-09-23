import { useContext, useState } from "react";
import { PopUp } from "../../../Context/Context";
import { FaTimes } from "react-icons/fa";

export const FormWithdraw = () => {
    const FormWalletWithdraw = useContext(PopUp);
    const StateFormWithdraw = FormWalletWithdraw.formWithdraw;
    const FunFormWithdraw = FormWalletWithdraw.FormWithdraw;
    // Form Date Api
    const [to, setTo] = useState("");
    const [amount, setAmount] = useState("");
    const [type, setType] = useState("");
  return (
    <div
      className={`absolute w-[50%] h-auto py-[36px] bg-[#E9EBEE] top-[65%] left-[50%] translate-x-[-50%] translate-y-[-50%] px-[16px] border-[2px] border-gray-400 rounded-3xl $${
        StateFormWithdraw ? "opacity-[1] visible" : "opacity-0 invisible"
      } `}
    >
      <div className="flex items-center pl-[10px] pt-[10px] border-b-[2px] border-gray-400 pb-[16px]">
        <h1 className="Text-Header flex-1">Details Payment Vodafone Cash</h1>
        <FaTimes
          onClick={FunFormWithdraw}
          className="mt-[6px] mr-[40px] cursor-pointer"
          size={20}
        />
      </div>
      {/* Form Deposit */}
      <form className="flex flex-col gap-8 mt-[26px]">
        <div className="flex items-center gap-[16px]">
          <label htmlFor="Form" className="font-medium">
            To :
          </label>
          <input
            type="text"
            id="To"
            value={to}
            onChange={(e) => setTo(e.target.value)}
            className="text-black font-medium outline-none w-[85%] ml-5 py-[8px] rounded-lg border-blue-300 border-[1px] bg-gray-300 px-[10px]"
          />
        </div>
        <div className="flex items-center gap-[16px]">
          <label htmlFor="Form" className="font-medium">
            Amount :
          </label>
          <input
            type="number"
            id="Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="text-black font-medium outline-none w-[85%] py-[8px] rounded-lg border-blue-300 border-[1px] bg-gray-300 px-[10px]"
          />
        </div>
        <div className="flex items-center gap-[16px]">
          <label htmlFor="Form" className="font-medium">
            Type :
          </label>
          <input
            type="text"
            id="Type"
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="text-black font-medium outline-none w-[85%] ml-5 py-[8px] rounded-lg border-blue-300 border-[1px] bg-gray-300 px-[10px]"
          />
        </div>
        <div className="flex items-center gap-[16px]">
          <button className="w-[100px] bg-[#007BFF99] font-medium rounded-3xl h-[40px] flex justify-center items-center ">
            Accept
          </button>
          <button className="w-[100px] bg-[#FF202099] font-medium rounded-3xl h-[40px] flex justify-center items-center">
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
