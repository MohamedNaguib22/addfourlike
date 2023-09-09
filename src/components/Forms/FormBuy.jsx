import { useState } from "react";
import { FaCheck, FaCoins } from "react-icons/fa";

export const FormBuy = () => {
    const [price, setPrice] = useState("");
    const [quantity, setQuantity] = useState("");
    function Submit(e) {
      e.preventDefault();
    }
  return (
    <div className="container my-[40px]">
      <div className="flex items-center py-[8px] gap-2 px-[8px] bg-gray-300 rounded-md border-black/10 border-[2px]">
        <h1 className="text-[26px] font-bold">You Have</h1>
        <p className="bg-gray-200 font-medium flex items-center gap-2 text-[20px] p-[4px] rounded-lg border-black/50 border-[2px]">
          <FaCoins size={20} className="text-orange-400" />
          <span>0.0800000</span>
        </p>
      </div>
      <form
        onSubmit={Submit}
        className="bg-gray-300 flex flex-col gap-[26px] mt-[8px] w-full px-[8px] lg:w-[95%] rounded-md mx-auto border-black/10 border-[2px]"
      >
        <div>
          <label className="text-[20px] font-medium">Service</label>
          <h1 className="flex items-center text-[20px] gap-2 mb-[16px] py-[14px] rounded-md bg-black text-white px-[26px]">
            <span className="bg-white text-black font-medium px-[8px] rounded-sm">
              9
            </span>
            Facebook Live Stream viewers for 30 min -
            <FaCoins size={20} className="text-orange-400" />2 per 1000
          </h1>
        </div>
        <div className="flex flex-col">
          <label className="text-[20px] font-medium" htmlFor="">
            Price
          </label>
          <input
            className=" py-[14px] px-[8px] text-[18px] outline-none border-black/40 border-[2px] rounded-md"
            type="text"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <p className="text-gray-500 font-normal mt-[4px]">
            incorrect links can be marked completed without send!
          </p>
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
            incorrect links can be marked completed without send!
          </p>
        </div>
        <div>
          <button
            type="submit"
            className="lg:w-[130px] rounded-md mb-[20px] text-[20px] h-[50px] w-[50%] lg:mx-0 mx-auto bg-black flex items-center justify-center text-white gap-1"
          >
            <FaCheck size={20} />
            <span>Submit</span>
          </button>
        </div>
      </form>
    </div>
  );
}
