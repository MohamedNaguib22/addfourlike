import { useState } from "react";
import { FaCheck } from "react-icons/fa";

export const FormBuy = () => {
    const [price, setPrice] = useState("");
    const [quantity, setQuantity] = useState("");
    function Submit(e) {
      e.preventDefault();
    }
  return (
    <div className="container my-[40px]">
      <form
        onSubmit={Submit}
        className="flex flex-col gap-[26px] mt-[8px] w-full px-[8px] lg:w-[50%] rounded-md mx-auto border-black/10 border-[2px]"
      >
        <div>
          <label className="text-[20px] font-medium">Select a package</label>
          <select className="block w-full text-[18px] font-medium py-[14px] bg-[#007BFF99]">
            <option className="text-[18px] font-medium">
              10,000 Points + 500
            </option>
          </select>
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
        <div>
          <button
            type="submit"
            className="lg:w-[130px] mx-auto rounded-md mb-[20px] text-[20px] h-[50px] w-[50%]  bg-[#007BFF99] flex items-center justify-center text-black gap-1"
          >
            <FaCheck size={20} />
            <span>Submit</span>
          </button>
        </div>
      </form>
    </div>
  );
}
