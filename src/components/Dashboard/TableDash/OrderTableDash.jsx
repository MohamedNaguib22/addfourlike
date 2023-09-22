import { useState } from "react";
import { FaAngleDown } from "react-icons/fa";

export const OrderTableDash = () => {
  const [click,setClick]=useState(false)
  const [clickTwo,setClickTwo]=useState(false)
  function Click() {
    setClick(!click)
  }
  function ClickTwo() {
    setClickTwo(!clickTwo);
  }
  return (
    <div className="relative mt-[8px] overflow-x-auto sm:rounded-lg">
      <div className="text-[18px] font-medium w-full text-black uppercase bg-white  border-b-[2px] border-b-solid border-b-black">
        <div className="flex gap-[46px]">
          <div className="px-6  py-3 text-blue-500 ml-[35px]">
            <div className="flex justify-center items-center mx-auto">
              <span>All</span>
              <span className="text-[12px] font-medium bg-gray-100 w-[25px] h-[25px] flex justify-center items-center rounded-md ml-[6px]">
                3
              </span>
            </div>
          </div>
          <div className="px-6 text-center py-3">
            <div className="flex justify-center items-center mx-auto">
              <span>Complete</span>
              <span className="text-[12px] font-medium bg-gray-100  w-[25px] h-[25px] flex justify-center items-center rounded-md ml-[10px]">
                1
              </span>
            </div>
          </div>
          <div className="px-6 text-center py-3">
            <button className="flex justify-center items-center mx-auto">
              <span>Pending</span>
              <span className="text-[12px] font-medium bg-gray-100 w-[25px] h-[25px] flex justify-center items-center rounded-md ml-[10px]">
                2
              </span>
            </button>
          </div>
        </div>
      </div>
      <table className="w-full text-sm text-left text-black ">
        <thead className="Text-Paragraph text-gray-700 uppercase bg-gray-50 ">
          <tr>
            <th scope="col" className="px-6 text-center py-3 ">
              id
              
            </th>
            <th scope="col" className="px-6 text-center py-3">
              User Name
              
            </th>
            <th scope="col" className="px-6 text-center py-3">
              Type
              
            </th>
            <th scope="col" className="px-6 text-center py-3">
              Link
              
            </th>
            <th scope="col" className="px-6 text-center py-3">
              Amount
              
            </th>
            <th scope="col" className="px-6 text-center py-3">
              Status
              
            </th>
            <th scope="col" className="px-6 text-center py-3">
              Data
              
            </th>
            <th scope="col" className="px-6 text-center py-3">
              Action
              
            </th>
          </tr>
        </thead>
        <tbody className="Text-Paragraph">
          <tr className="bg-white border-b ">
            <th
              scope="row"
              className="px-6 py-4 text-center font-medium text-gray-400  whitespace-nowrap "
            >
              1
            </th>
            <td className="px-6 text-center py-4">Kareem</td>
            <td className="px-6 text-center py-4">Facebook Comment</td>
            <td className="px-6 text-center py-4 ">
              https://www.facebook.com/Mohamed/
            </td>
            <td className="px-6 text-center py-4">1000</td>
            <td className="px-6 text-center py-4 text-red-400">Pending</td>
            <td className="px-6 text-center py-4">3 Oct , 2023</td>
            <td className="py-6 text-center px-6">
              <button
                onClick={Click}
                className="bg-[#007BFF99] text-black w-[100px] py-[8px] rounded-lg relative"
                to="/#"
              >
                Action
                <FaAngleDown size={18} className="inline ml-[12px]" />
                <ul
                  className={`absolute bg-gray-300 w-full flex flex-col justify-start items-start px-[4px] py-[12px] gap-[12px] rounded-md top-[35px] ${
                    click ? "opacity-[1] visible" : "invisible opacity-0"
                  }`}
                >
                  <li>Waite</li>
                  <li>Complete</li>
                  <li>Cancel</li>
                </ul>
              </button>
            </td>
          </tr>
          <tr className="bg-white border-b ">
            <th
              scope="row"
              className="px-6 py-4 text-center font-medium text-gray-400  whitespace-nowrap "
            >
              1
            </th>
            <td className="px-6 text-center py-4">Mohamed</td>
            <td className="px-6 text-center py-4">Facebook Like</td>
            <td className="px-6 text-center py-4 ">
              https://www.facebook.com/Kreem.Khaled112/
            </td>
            <td className="px-6 text-center py-4">1000</td>
            <td className="px-6 text-center py-4 text-green-400">Complete</td>
            <td className="px-6 text-center py-4">3 Oct , 2023</td>
            <td className="py-6 text-center px-6">
              <button
                className="bg-[#007BFF99] text-black w-[100px] py-[8px] rounded-lg relative"
                to="/#"
                onClick={ClickTwo}
              >
                Action
                <FaAngleDown size={18} className="inline ml-[12px]" />
                <ul
                  className={`absolute bg-gray-300 w-full flex flex-col justify-start items-start px-[4px] py-[12px] gap-[12px] rounded-md top-[35px] ${
                    clickTwo ? "opacity-[1] visible" : "invisible opacity-0"
                  }`}
                >
                  <li>Waite</li>
                  <li>Complete</li>
                  <li>Cancel</li>
                </ul>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
