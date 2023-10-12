/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
import Logo from "../../../public/Assets/img/man.png"
export const TradeTable = () => {
  return (
    <div className="relative mt-[8px] container overflow-x-auto mb-[28px] sm:rounded-lg">
      <table className="w-full text-sm text-left text-black ">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3 text-[10px]">
              position
            </th>
            <th
              scope="col"
              className="px-6 py-4 min-w-[200px] max-w-[250px] text-[10px]"
            >
              Trader's Public Profile
            </th>
            <th scope="col" className="px-6 py-3 text-[10px]">
              Time
            </th>
            <th scope="col" className="px-6 py-3 text-[10px]">
              Points
            </th>
            <th
              scope="col"
              className="px-6 min-w-[150px] max-w-[200px] py-3 text-[10px]"
            >
              Price (≈USD)
            </th>
            <th
              scope="col"
              className="px-6 py-3 min-w-[150px] max-w-[200px] text-[10px]"
            >
              Price (AMF)
            </th>
            <th
              scope="col"
              className="px-6 min-w-[150px] max-w-[200px] py-3 text-[10px]"
            >
              Price of 1 Point
            </th>
            <th scope="col" className="px-6 py-3 text-[10px]">
              Sold
            </th>
            <th scope="col" className="px-6 py-3 text-[10px]">
              Views
            </th>
            <th scope="col" className="px-6 py-3 text-[10px]">
              ToTop
            </th>
            <th scope="col" className="px-6 py-3 text-[10px]"></th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white border-b ">
            <th
              scope="row"
              className="px-6 py-4 font-medium  whitespace-nowrap "
            >
              1
            </th>
            <td className="px-6 py-2 flex gap-2 items-center">
              <div>
                <img className="w-[40px]" src={Logo} alt="" />
              </div>
              <div>
                Mohamed <br /> <span className="text-[12px]">@mohamed</span>
              </div>
            </td>
            <td className="px-6 py-2">17 min</td>
            <td className="px-6 py-2">40,000</td>
            <td className="px-6 py-2">
              $2,656.00 <span className="text-[12px]">AMF</span>
            </td>
            <td className="px-6 py-2">$12.89 USD</td>
            <td className="px-6 py-2">0.0664 AMF</td>
            <td className="px-6 py-2">0</td>
            <td className="px-6 py-2">45790</td>
            <td className="px-6 py-2">125</td>
            <td className="py-2 px-6">
              <Link
                className="bg-[#007BFF99] text-white w-[200px] py-[8px] rounded-lg px-[20px] "
                to="/#"
              >
                Get
              </Link>
            </td>
          </tr>
          <tr className="bg-white border-b ">
            <th
              scope="row"
              className="px-6 py-4 font-medium  whitespace-nowrap "
            >
              1
            </th>
            <td className="px-6 py-2 flex gap-2 items-center">
              <div>
                <img className="w-[40px]" src={Logo} alt="" />
              </div>
              <div>
                Kareem <br /> <span className="text-[12px]">@Kareem</span>
              </div>
            </td>
            <td className="px-6 py-2">22 min</td>
            <td className="px-6 py-2">50,000</td>
            <td className="px-6 py-2">
              $5,456.00 <span className="text-[12px]">AMF</span>
            </td>
            <td className="px-6 py-2">$2.89 USD</td>
            <td className="px-6 py-2">4.0664 AMF</td>
            <td className="px-6 py-2">5</td>
            <td className="px-6 py-2">55790</td>
            <td className="px-6 py-2">25</td>
            <td className="py-2 px-6">
              <Link
                className="bg-[#007BFF99] text-white w-[200px] py-[8px] rounded-lg px-[20px] "
                to="/#"
              >
                Get
              </Link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
