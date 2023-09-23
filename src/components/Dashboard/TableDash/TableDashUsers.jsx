import { BsArrowDownUp } from "react-icons/bs";
import { FaAngleDown, FaSearch } from "react-icons/fa";

export const TableDashUsers = () => {
  return (
    <div className="relative mt-[8px] overflow-x-auto sm:rounded-lg">
      <div className="text-[18px] font-medium w-full flex items-center text-black uppercase bg-white  border-b-[2px] border-b-solid border-b-black">
        <div className="flex-1 flex gap-[46px]">
          <div className="px-6  py-3 text-blue-500 ml-[35px]">
            <div className="flex justify-center items-center mx-auto">
              <span>All</span>
              <span className="text-[12px] font-medium bg-gray-100  w-auto px-[10px] h-[25px] flex justify-center items-center rounded-md ml-[6px]">
                3
              </span>
            </div>
          </div>
          <div className="px-6 text-center py-3">
            <div className="flex justify-center items-center mx-auto">
              <span>Ban</span>
              <span className="text-[12px] font-medium bg-gray-100  w-auto h-[25px] flex justify-center items-center rounded-md ml-[10px]">
                1
              </span>
            </div>
          </div>
          <div className="px-6 text-center py-3">
            <button className="flex justify-center items-center mx-auto">
              <span>Active</span>
              <span className="text-[12px] font-medium bg-gray-100  w-auto px-[10px] h-[25px] flex justify-center items-center rounded-md ml-[10px]">
                2
              </span>
            </button>
          </div>
        </div>
        <form>
          <div className="border-gray-400 border-[2px] rounded-md py-[4px] bg-gray-200 flex gap-[12px] items-center pl-[10px]">
            <FaSearch />
            <input
              type="text"
              className=" outline-none bg-gray-200 text-black text-[18px] "
              placeholder="Search"
            />
          </div>
        </form>
      </div>
      <table className="w-full text-sm text-left text-black ">
        <thead className="Text-Paragraph text-gray-700 uppercase bg-gray-50 ">
          <tr>
            <th scope="col" className="px-6 text-center py-3 ">
              id{" "}
              <BsArrowDownUp
                size={18}
                className="inline ml-[12px] text-gray-500"
              />
            </th>
            <th scope="col" className="px-6 text-center py-3">
              User Name
              <BsArrowDownUp
                size={18}
                className="inline ml-[12px] text-gray-500"
              />
            </th>
            <th scope="col" className="px-6 text-center py-3">
              Email
              <BsArrowDownUp
                size={18}
                className="inline ml-[12px] text-gray-500"
              />
            </th>
            <th scope="col" className="px-6 text-center py-3">
              Status
              <BsArrowDownUp
                size={18}
                className="inline ml-[12px] text-gray-500"
              />
            </th>
            <th scope="col" className="px-6 text-center py-3">
              Data
              <BsArrowDownUp
                size={18}
                className="inline ml-[12px] text-gray-500"
              />
            </th>
            <th scope="col" className="px-6 text-center py-3">
              Action
              <BsArrowDownUp
                size={18}
                className="inline ml-[12px] text-gray-500"
              />
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
            <td className="px-6 text-center py-4">Mohamed</td>
            <td className="px-6 text-center py-4">Mohamed@gmail.com</td>
            <td className="px-6 text-center py-4 text-[#FFB801]">Gold</td>
            <td className="px-6 text-center py-4">3 Oct , 2023</td>
            <td className="py-6 text-center px-6">
              <button
                className="bg-[#007BFF99] text-black w-[100px] py-[8px] rounded-lg"
                to="/#"
              >
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
            <td className="px-6 text-center py-4">Kiro</td>
            <td className="px-6 text-center py-4">Kiro@gmail.com</td>
            <td className="px-6 text-center py-4">Normal</td>
            <td className="px-6 text-center py-4">3 Oct , 2023</td>
            <td className="py-6 text-center px-6">
              <button
                className="bg-[#FF202099] text-black w-[100px] py-[8px] rounded-lg"
                to="/#"
              >
                Ban
                <FaAngleDown size={18} className="inline ml-[12px]" />
              </button>
            </td>
          </tr>
          <tr className="bg-white border-b ">
            <th
              scope="row"
              className="px-6 py-4 text-center font-medium text-gray-400  whitespace-nowrap "
            >
              3
            </th>
            <td className="px-6 text-center py-4">Kareem</td>
            <td className="px-6 text-center py-4">Kareem@gmail.com</td>
            <td className="px-6 text-center py-4 text-[#007BFF99]">50$</td>
            <td className="px-6 text-center py-4">6 Oct , 2023</td>
            <td className="py-6 text-center px-6">
              <button
                className="bg-[#007BFF99] text-black w-[100px] py-[8px] rounded-lg"
                to="/#"
              >
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
