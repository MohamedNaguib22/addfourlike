/* eslint-disable react/prop-types */
import { useState } from "react";
import { FaAngleDown } from "react-icons/fa";

export const Date = (props) => {
  const [date, setDate] = useState(false);
  function Date() {
    setDate(!date);
  }
  return (
    <div
      onClick={Date}
      className="cursor-pointer mb-[8px] flex items-center gap-1 bg-gray-200 w-[130px] h-[30px] justify-center rounded-xl font-medium text-[17px]"
    >
      <p>01/10/2023</p>
      <FaAngleDown />
      <div
        className={`absolute pt-[18px] pb-[24px] px-[16px] w-fit h-auto bg-black/90 shadow-lg rounded-2xl transition-all duration-[0.2s] ${
          props.className
        } ${date ? "opacity-[1] visible" : "opacity-0 invisible"}`}
      >
        <div className="flex items-center gap-1 text-white cursor-pointer">
          <p className="mb-[8px] Text-Paragraph">
            01 <span className="text-[24px]">OCT</span> 23
          </p>
          <FaAngleDown />
        </div>
        <div className=" grid grid-cols-5 gap-[16px] items-center w-full">
          <p className="w-[40px] h-[40px] bg-gray-100 rounded-lg flex justify-center items-center hover:bg-gray-400 hover:text-white duration-300 cursor-pointer">
            1
          </p>
          <p className="w-[40px] h-[40px] bg-gray-100 rounded-lg flex justify-center items-center hover:bg-gray-400 hover:text-white duration-300 cursor-pointer">
            2
          </p>
          <p className="w-[40px] h-[40px] bg-gray-100 rounded-lg flex justify-center items-center hover:bg-gray-400 hover:text-white duration-300 cursor-pointer">
            3
          </p>
          <p className="w-[40px] h-[40px] bg-gray-100 rounded-lg flex justify-center items-center hover:bg-gray-400 hover:text-white duration-300 cursor-pointer">
            4
          </p>
          <p className="w-[40px] h-[40px] bg-gray-100 rounded-lg flex justify-center items-center hover:bg-gray-400 hover:text-white duration-300 cursor-pointer">
            5
          </p>
          <p className="w-[40px] h-[40px] bg-gray-100 rounded-lg flex justify-center items-center hover:bg-gray-400 hover:text-white duration-300 cursor-pointer">
            6
          </p>
          <p className="w-[40px] h-[40px] bg-gray-100 rounded-lg flex justify-center items-center hover:bg-gray-400 hover:text-white duration-300 cursor-pointer">
            7
          </p>
          <p className="w-[40px] h-[40px] bg-gray-100 rounded-lg flex justify-center items-center hover:bg-gray-400 hover:text-white duration-300 cursor-pointer">
            8
          </p>
          <p className="w-[40px] h-[40px] bg-gray-100 rounded-lg flex justify-center items-center hover:bg-gray-400 hover:text-white duration-300 cursor-pointer">
            9
          </p>
          <p className="w-[40px] h-[40px] bg-gray-100 rounded-lg flex justify-center items-center hover:bg-gray-400 hover:text-white duration-300 cursor-pointer">
            10
          </p>
          <p className="w-[40px] h-[40px] bg-gray-100 rounded-lg flex justify-center items-center hover:bg-gray-400 hover:text-white duration-300 cursor-pointer">
            11
          </p>
          <p className="w-[40px] h-[40px] bg-gray-100 rounded-lg flex justify-center items-center hover:bg-gray-400 hover:text-white duration-300 cursor-pointer">
            12
          </p>
          <p className="w-[40px] h-[40px] bg-gray-100 rounded-lg flex justify-center items-center hover:bg-gray-400 hover:text-white duration-300 cursor-pointer">
            13
          </p>
          <p className="w-[40px] h-[40px] bg-gray-100 rounded-lg flex justify-center items-center hover:bg-gray-400 hover:text-white duration-300 cursor-pointer">
            14
          </p>
          <p className="w-[40px] h-[40px] bg-gray-100 rounded-lg flex justify-center items-center hover:bg-gray-400 hover:text-white duration-300 cursor-pointer">
            15
          </p>
          <p className="w-[40px] h-[40px] bg-gray-100 rounded-lg flex justify-center items-center hover:bg-gray-400 hover:text-white duration-300 cursor-pointer">
            16
          </p>
          <p className="w-[40px] h-[40px] bg-gray-100 rounded-lg flex justify-center items-center hover:bg-gray-400 hover:text-white duration-300 cursor-pointer">
            17
          </p>
          <p className="w-[40px] h-[40px] bg-gray-100 rounded-lg flex justify-center items-center hover:bg-gray-400 hover:text-white duration-300 cursor-pointer">
            18
          </p>
          <p className="w-[40px] h-[40px] bg-gray-100 rounded-lg flex justify-center items-center hover:bg-gray-400 hover:text-white duration-300 cursor-pointer">
            19
          </p>
          <p className="w-[40px] h-[40px] bg-gray-100 rounded-lg flex justify-center items-center hover:bg-gray-400 hover:text-white duration-300 cursor-pointer">
            20
          </p>
          <p className="w-[40px] h-[40px] bg-gray-100 rounded-lg flex justify-center items-center hover:bg-gray-400 hover:text-white duration-300 cursor-pointer">
            21
          </p>
          <p className="w-[40px] h-[40px] bg-gray-100 rounded-lg flex justify-center items-center hover:bg-gray-400 hover:text-white duration-300 cursor-pointer">
            22
          </p>
          <p className="w-[40px] h-[40px] bg-gray-100 rounded-lg flex justify-center items-center hover:bg-gray-400 hover:text-white duration-300 cursor-pointer">
            23
          </p>
          <p className="w-[40px] h-[40px] bg-gray-100 rounded-lg flex justify-center items-center hover:bg-gray-400 hover:text-white duration-300 cursor-pointer">
            24
          </p>
          <p className="w-[40px] h-[40px] bg-gray-100 rounded-lg flex justify-center items-center hover:bg-gray-400 hover:text-white duration-300 cursor-pointer">
            25
          </p>
          <p className="w-[40px] h-[40px] bg-gray-100 rounded-lg flex justify-center items-center hover:bg-gray-400 hover:text-white duration-300 cursor-pointer">
            26
          </p>
          <p className="w-[40px] h-[40px] bg-gray-100 rounded-lg flex justify-center items-center hover:bg-gray-400 hover:text-white duration-300 cursor-pointer">
            27
          </p>
          <p className="w-[40px] h-[40px] bg-gray-100 rounded-lg flex justify-center items-center hover:bg-gray-400 hover:text-white duration-300 cursor-pointer">
            28
          </p>
          <p className="w-[40px] h-[40px] bg-gray-100 rounded-lg flex justify-center items-center hover:bg-gray-400 hover:text-white duration-300 cursor-pointer">
            29
          </p>
          <p className="w-[40px] h-[40px] bg-gray-100 rounded-lg flex justify-center items-center hover:bg-gray-400 hover:text-white duration-300 cursor-pointer">
            30
          </p>
          <p className="w-[40px] h-[40px] bg-gray-100 rounded-lg flex justify-center items-center hover:bg-gray-400 hover:text-white duration-300 cursor-pointer">
            31
          </p>
        </div>
      </div>
    </div>
  );
};
