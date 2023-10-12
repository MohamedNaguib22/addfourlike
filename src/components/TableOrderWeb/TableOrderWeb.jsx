import { useState } from "react";
import { FaAngleDown } from "react-icons/fa";

export const TableOrderWeb = () => {
  const [click, setClick] = useState(false);
  function Click() {
    setClick(!click);
  }

  return (
    <div>
      <table className="w-full md:w-[20%] mx-auto text-sm text-left text-black ">
        <thead className="Text-Paragraph text-gray-700 uppercase bg-gray-50 ">
          <tr>
            <th scope="col" className="px-6 text-center py-3 ">
              id
            </th>
            <th scope="col" className="px-6 text-center py-3">
              Service
            </th>
            <th scope="col" className="px-6 text-center py-3">
              Link
            </th>
            <th scope="col" className="px-6 text-center py-3">
              Status
            </th>
            <th scope="col" className="px-6 text-center py-3">
              Remains
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
            <td className="px-6 text-center py-4">3 Oct , 2023</td>
            <td className="px-6 text-center py-4">Kareem</td>
            <td className="px-6 text-center py-4 text-red-400">Pending</td>
            <td className="px-6 text-center py-4">250</td>
            <td className="py-6 text-center px-6">
              <button
                onClick={Click}
                className="bg-[#007BFF99] text-black w-[100px] py-[8px] rounded-lg relative"
                to="/#"
              >
                Action
                <FaAngleDown size={18} className="inline ml-[12px]" />
                <ul
                  className={`absolute bg-gray-300 w-full flex flex-col justify-start z-[222] items-start px-[4px] py-[12px] gap-[12px] rounded-md top-[35px] ${
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
        </tbody>
      </table>
    </div>
  );
};
