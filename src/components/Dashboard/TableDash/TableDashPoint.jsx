import { FaAngleDown } from "react-icons/fa";

export const TableDashPoint = () => {
  return (
    <div className="relative mt-[8px] overflow-x-auto sm:rounded-lg">
      <div className="text-[18px] font-medium w-full flex items-center text-black uppercase bg-white  border-b-[2px] border-b-solid border-b-black">
        <div className="flex-1 flex gap-[46px]">
          <div className="px-6  py-3 text-blue-500 ml-[35px]">
            <button className="flex justify-center items-center mx-auto ">
              <span>All</span>
              <span className="text-[12px] font-medium bg-gray-100  w-auto px-[10px] h-[25px] flex justify-center items-center rounded-md ml-[6px]">
                45
              </span>
            </button>
          </div>
          <div className="px-6 text-center py-3">
            <button className="flex justify-center items-center mx-auto">
              <span>Bay Point</span>
              <span className="text-[12px] font-medium bg-gray-100  w-auto px-[10px] h-[25px] flex justify-center items-center rounded-md ml-[10px]">
                1
              </span>
            </button>
          </div>
          <div className="px-6 text-center py-3">
            <button className="flex justify-center items-center mx-auto">
              <span>Exchange</span>
              <span className="text-[12px] font-medium bg-gray-100  w-auto px-[10px]  h-[25px] flex justify-center items-center rounded-md ml-[10px]">
                500
              </span>
            </button>
          </div>
          <div className="px-6 text-center py-3">
            <button className="flex justify-center items-center mx-auto">
              <span>P2P</span>
              <span className="text-[12px] font-medium bg-gray-100  w-auto px-[10px] h-[25px] flex justify-center items-center rounded-md ml-[10px]">
                2
              </span>
            </button>
          </div>
          <div className="px-6 text-center py-3">
            <button className="flex justify-center items-center mx-auto">
              <span>Send</span>
              <span className="text-[12px] font-medium bg-gray-100  w-auto px-[10px] h-[25px] flex justify-center items-center rounded-md ml-[10px]">
                1
              </span>
            </button>
          </div>
        </div>
      </div>
      <table className="w-full text-sm text-left text-black">
        <thead className="Text-Paragraph text-gray-700 uppercase bg-gray-50 ">
          <tr>
            <th scope="col" className="px-6 text-center py-3 ">
              id
            </th>
            <th scope="col" className="px-6 text-center py-3">
              Name
            </th>
            <th scope="col" className="px-6 text-center py-3">
              Type
            </th>
            <th scope="col" className="px-6 text-center py-3">
              Form
            </th>
            <th scope="col" className="px-6 text-center py-3">
              Amount
            </th>
            <th scope="col" className="px-6 text-center py-3">
              Date
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
            <td className="px-6 text-center py-4">Buy Point</td>
            <td className="px-6 text-center py-4">Admin</td>
            <td className="px-6 text-center py-4">5K</td>
            <td className="px-6 text-center py-4">3 Oct , 2023</td>
            <td className="py-6 text-center px-6">
              <button className="bg-[#007BFF99] text-black w-[100px] py-[8px] rounded-lg">
                Action
                <FaAngleDown size={18} className="inline ml-[12px]" />
              </button>
            </td>
          </tr>
          <tr className="bg-white border-b ">
            <th
              scope="row"
              className="px-6 py-4 text-center font-medium text-gray-400  whitespace-nowrap "
            >
              2
            </th>
            <td className="px-6 text-center py-4">Mohamed</td>
            <td className="px-6 text-center py-4">P2P</td>
            <td className="px-6 text-center py-4">Admin</td>
            <td className="px-6 text-center py-4">Ahmed</td>
            <td className="px-6 text-center py-4">3 Oct , 2023</td>
            <td className="py-6 text-center px-6">
              <button className="bg-[#007BFF99] text-black w-[100px] py-[8px] rounded-lg">
                Action
                <FaAngleDown size={18} className="inline ml-[12px]" />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
