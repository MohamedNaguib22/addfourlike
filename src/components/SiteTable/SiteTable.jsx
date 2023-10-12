import { AiFillPlayCircle } from "react-icons/ai";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { FaEdit, FaFacebookSquare, FaInfinity } from "react-icons/fa";
import { Link } from "react-router-dom";

const SiteTable = () => {
  return (
    <div className="relative mt-[8px] container overflow-x-auto mb-[28px] sm:rounded-lg">
      <table className="w-full text-sm text-left text-black ">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3">
              #
            </th>
            <th scope="col" className="px-6 py-3">
              Status
            </th>
            <th scope="col" className="px-6 py-3">
              title
            </th>
            <th scope="col" className="px-6 py-3">
              type
            </th>
            <th scope="col" className="px-6 py-3">
              DCL
            </th>
            <th scope="col" className="px-6 py-3">
              TCL
            </th>
            <th scope="col" className="px-6 py-3">
              Clicks
            </th>
            <th scope="col" className="px-6 py-3">
              CPC
            </th>
            <th scope="col" className="px-6 py-3">
              Actions
            </th>
            <th scope="col" className="px-6 py-3 text-[26px]">
              +
            </th>
            <th scope="col" className="px-6 py-3">
              Details
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white border-b ">
            <th
              scope="row"
              className="px-6 py-4 font-medium  whitespace-nowrap "
            >
              1.
            </th>
            <td className="px-6 py-4">||</td>
            <td className="px-6 py-4">1</td>
            <td className="px-6 py-4">
              <FaFacebookSquare size={40} className="text-[#007BFF99]" />
            </td>
            <td className="px-6 py-4">
              <FaInfinity />
            </td>
            <td className="px-6 py-4">100</td>
            <td className="px-6 py-4">1</td>
            <td className="px-6 py-4">0</td>
            <td className="px-6 py-4 flex items-center cursor-pointer gap-3">
              <AiFillPlayCircle size={30} className="mt-[4px] text-[#007BFF99]" />
              <FaEdit size={27} />
            </td>
            <td className="px-6 py-4">
              <RiDeleteBin5Fill size={30} className="text-red-500" />
            </td>
            <td className="py-4 px-6">
              <Link
                className="bg-[#007BFF99] text-white w-[200px] py-[8px] rounded-lg px-[20px] "
                to="/#"
              >
                Details
              </Link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default SiteTable;
