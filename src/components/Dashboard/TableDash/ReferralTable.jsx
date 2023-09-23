import { FaAngleDown } from "react-icons/fa";

export const ReferralTable = () => {
  return (
    <div className="relative mt-[8px] overflow-x-auto sm:rounded-lg">
      <div className="text-[18px] font-medium w-full text-black uppercase bg-white  border-b-[2px] border-b-solid border-b-black">
        <div className="flex gap-[16px]">
          <div className="px-6  py-3 text-blue-500 ">
            <button className="flex justify-center items-center mx-auto">
              <span>All</span>
              <span className="text-[12px] font-medium bg-gray-100  w-auto px-[10px] h-[25px] flex justify-center items-center rounded-md ml-[6px]">
                3
              </span>
            </button>
          </div>
          <div className="px-6 text-center py-3">
            <button className="flex justify-center items-center ">
              <span>Top</span>
              <span className="text-[12px] font-medium bg-gray-100 px-[10px] w-auto h-[25px] flex justify-center items-center rounded-md ml-[10px]">
                25
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
              Name
            </th>
            <th scope="col" className="px-6 text-center py-3">
              Amount
            </th>
            <th scope="col" className="px-6 text-center py-3">
              Rewards
            </th>
            <th scope="col" className="px-6 text-center py-3">
              Last Data
            </th>
            <th scope="col" className="px-6 text-center py-3">
              Details
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
            <td className="px-6 text-center py-4">10</td>
            <td className="px-6 text-center py-4 ">2500</td>
            <td className="px-6 text-center py-4">3 Oct , 2023</td>
            <td className="py-6 text-center px-6">
              <button
                className="bg-[#007BFF99] text-black w-[100px] py-[8px] rounded-lg relative"
                to="/#"
              >
                Details
                <FaAngleDown size={18} className="inline ml-[12px]" />
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
            <td className="px-6 text-center py-4">5</td>
            <td className="px-6 text-center py-4 ">1250</td>
            <td className="px-6 text-center py-4">3 Oct , 2023</td>
            <td className="py-6 text-center px-6">
              <button
                className="bg-[#007BFF99] text-black w-[100px] py-[8px] rounded-lg relative"
                to="/#"
              >
                Details
                <FaAngleDown size={18} className="inline ml-[12px]" />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
