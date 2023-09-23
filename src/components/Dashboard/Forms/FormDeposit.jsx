import { FaTimes } from "react-icons/fa";
import { PopUp } from "../../../Context/Context";
import { useContext, useState } from "react";

export const FormDeposit = () => {
  const FormWalletDeposit = useContext(PopUp);
  const StateFormDeposit = FormWalletDeposit.formDeposit;
  const FunFormDeposit = FormWalletDeposit.FormDeposit;
  // Form Date Api
  const [form, setForm] = useState("");
  const [amount, setAmount] = useState("");
  const [photo, setPhoto] = useState("");
  // const formData = new FormData();
  // formData.append(form);
  // formData.append(amount);
  // formData.append(photo);
  return (
    <div
      className={`absolute w-[50%] h-auto py-[36px] bg-[#E9EBEE] top-[55%] left-[50%] translate-x-[-50%] translate-y-[-50%] px-[16px] border-[2px] border-gray-400 rounded-3xl $${
        StateFormDeposit ? "opacity-[1] visible" : "opacity-0 invisible"
      } `}
    >
      <div className="flex items-center pl-[10px] pt-[10px] border-b-[2px] border-gray-400 pb-[16px]">
        <h1 className="Text-Header flex-1">Details Payment Vodafone Cash</h1>
        <FaTimes
          onClick={FunFormDeposit}
          className="mt-[6px] mr-[40px] cursor-pointer"
          size={20}
        />
      </div>
      {/* Form Deposit */}
      <form className="flex flex-col gap-8 mt-[26px]">
        <div className="flex items-center gap-[16px]">
          <label htmlFor="Form" className="font-medium">
            Form :
          </label>
          <input
            type="text"
            id="Form"
            value={form}
            onChange={(e) => setForm(e.target.value)}
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
            Photo :
          </label>
          <input
            type="file"
            id="Photo"
            onChange={(e) => setPhoto(e.target.files.item(0))}
            className="text-black font-medium outline-none w-[85%] ml-5 py-[8px] rounded-lg border-blue-300 border-[1px] bg-gray-300 px-[10px]"
          />
        </div>
        <div className="flex items-center gap-[16px]">
          <button className="w-[100px] bg-[#007BFF99] font-medium rounded-3xl h-[40px] flex justify-center items-center ">
            Accept
          </button>
          <button className="w-[100px] bg-[#D9A51F] font-medium rounded-3xl h-[40px] flex justify-center items-center">
            Refuse
          </button>
          <button className="w-[100px] bg-[#FF202099] font-medium rounded-3xl h-[40px] flex justify-center items-center">
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};
