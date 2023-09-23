import { useContext, useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import { PopUp } from "../../../Context/Context";

export const TableDashWallet = () => {
  const [withdraw, setWithdraw] = useState("All");
  const FormWalletDeposit = useContext(PopUp);
  const FormWalletWithdraw = useContext(PopUp);
  const FunFormDeposit = FormWalletDeposit.FormDeposit;
  const FunFormWithdraw = FormWalletWithdraw.FormWithdraw;
  function Withdraw(click) {
    setWithdraw(click);
  }
  return (
    <div className="relative mt-[8px] overflow-x-auto sm:rounded-lg">
      <div className="text-[18px] font-medium w-full flex items-center text-black uppercase bg-white  border-b-[2px] border-b-solid border-b-black">
        <div className="flex-1 flex gap-[46px]">
          <div className="px-6  py-3 text-blue-500 ml-[35px]">
            <button
              onClick={() => Withdraw("All")}
              className={`flex justify-center items-center mx-auto ${
                withdraw === "All" ? "text-blue-500" : "text-black"
              }`}
            >
              <span>All</span>
              <span className="text-[12px] font-medium bg-gray-100  w-auto px-[10px] h-[25px] flex justify-center items-center rounded-md ml-[6px]">
                45
              </span>
            </button>
          </div>
          <div className="px-6 text-center py-3">
            <button className="flex justify-center items-center mx-auto">
              <span>Deposit</span>
              <span className="text-[12px] font-medium bg-gray-100 px-[10px] w-auto h-[25px] flex justify-center items-center rounded-md ml-[10px]">
                30
              </span>
            </button>
          </div>
          <div className="px-6 text-center py-3">
            <button
              onClick={() => Withdraw("Withdraw")}
              className={`flex justify-center items-center mx-auto ${
                withdraw === "Withdraw" ? "text-blue-500" : "text-black"
              } `}
            >
              <span>Withdraw</span>
              <span className="text-[12px] font-medium bg-gray-100  w-auto px-[10px] h-[25px] flex justify-center items-center rounded-md ml-[10px]">
                5
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
              <span>Buy Point</span>
              <span className="text-[12px] font-medium bg-gray-100  w-auto px-[10px] h-[25px] flex justify-center items-center rounded-md ml-[10px]">
                2
              </span>
            </button>
          </div>
        </div>
      </div>
      {withdraw === "All" && (
        <>
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
                  Amount
                </th>
                <th scope="col" className="px-6 text-center py-3">
                  Status
                </th>
                <th scope="col" className="px-6 text-center py-3">
                  Data
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
                <td className="px-6 text-center py-4">Deposit</td>
                <td className="px-6 text-center py-4">300$</td>
                <td className="px-6 text-center py-4 text-red-500">Pending</td>
                <td className="px-6 text-center py-4">3 Oct , 2023</td>
                <td className="py-6 text-center px-6">
                  <button
                    onClick={FunFormDeposit}
                    className="bg-[#007BFF99] text-black w-[100px] py-[8px] rounded-lg"
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
                  2
                </th>
                <td className="px-6 text-center py-4">Mohamed</td>
                <td className="px-6 text-center py-4">Deposit</td>
                <td className="px-6 text-center py-4">300$</td>
                <td className="px-6 text-center py-4 text-green-500">
                  Complete
                </td>
                <td className="px-6 text-center py-4">3 Oct , 2023</td>
                <td className="py-6 text-center px-6">
                  <button
                    className="bg-[#007BFF99] text-black w-[100px] py-[8px] rounded-lg"
                    onClick={FunFormDeposit}
                  >
                    Details
                    <FaAngleDown size={18} className="inline ml-[12px]" />
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </>
      )}
      {withdraw === "Withdraw" && (
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
                Type
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
                2
              </th>
              <td className="px-6 text-center py-4">Mohamed</td>
              <td className="px-6 text-center py-4">Vodafone Cash</td>
              <td className="px-6 text-center py-4">300$</td>
              <td className="px-6 text-center py-4 text-green-500">Complete</td>
              <td className="px-6 text-center py-4">3 Oct , 2023</td>
              <td className="py-6 text-center px-6">
                <button
                  className="bg-[#007BFF99] text-black w-[100px] py-[8px] rounded-lg"
                  onClick={FunFormWithdraw}
                >
                  Details
                  <FaAngleDown size={18} className="inline ml-[12px]" />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
};
