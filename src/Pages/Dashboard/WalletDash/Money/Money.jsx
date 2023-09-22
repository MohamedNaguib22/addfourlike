import { FaAngleDown } from "react-icons/fa";
import { HiUsers } from "react-icons/hi";
import { TableDashWallet } from "../../../../components/Dashboard/TableDash/TableDashWallet";

export const Money = () => {
  return (
    <div className="px-[38px] pt-[16px]">
      <h1 className="Text-Header">Dashboard</h1>
      <div className="mb-[4px] Text-Paragraph">
        <p>
          <span className=" text-blue-400">Dashboard</span> &gt; Wallet &gt;
          Money
        </p>
      </div>
      <div className="mb-[8px] flex items-center gap-1 bg-gray-200 w-[130px] h-[30px] justify-center rounded-xl font-medium text-[17px]">
        <p>01/10/2023</p>
        <FaAngleDown />
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-[40px] mb-[26px]">
        <div className="bg-white py-[6px] pl-[25px] pr-[10px] flex items-center rounded-2xl">
          <div className="flex flex-col gap-1 flex-1">
            <p className="Text-Paragraph text-gray-500">Profit</p>
            <p className="text-[18px] lg:text-[24px] font-bold">52.5</p>
          </div>
          <div className="bg-blue-300 w-[60px] h-[60px] flex justify-center items-center rounded-full">
            <HiUsers size={35} />
          </div>
        </div>
        <div className="bg-white py-[6px] pl-[25px] pr-[10px] flex items-center rounded-2xl">
          <div className="flex flex-col gap-1 flex-1">
            <p className="Text-Paragraph text-gray-500">Deposit</p>
            <p className="text-[18px] lg:text-[24px] font-bold">300</p>
          </div>
          <div className="bg-green-400 w-[60px] h-[60px] flex justify-center items-center rounded-full">
            <HiUsers size={35} />
          </div>
        </div>
        <div className="bg-white py-[6px] pl-[25px] pr-[10px] flex items-center rounded-2xl">
          <div className="flex flex-col gap-1 flex-1">
            <p className="Text-Paragraph text-gray-500">Withdraw</p>
            <p className="text-[18px] lg:text-[24px] font-bold">50</p>
          </div>
          <div className="bg-[#FF202099] w-[60px] h-[60px] flex justify-center items-center rounded-full">
            <HiUsers size={35} />
          </div>
        </div>
        <div className="bg-white py-[6px] pl-[25px] pr-[10px] flex items-center rounded-2xl">
          <div className="flex flex-col gap-1 flex-1">
            <p className="Text-Paragraph text-gray-500">P2P</p>
            <p className="text-[18px] lg:text-[24px] font-bold">200</p>
          </div>
          <div className="bg-[#BED62F] w-[60px] h-[60px] flex justify-center items-center rounded-full">
            <HiUsers size={35} />
          </div>
        </div>
      </div>
      <div className="w-full bg-white h-auto pb-[50px] rounded-2xl pt-[6px] px-[10px]">
        <TableDashWallet />
      </div>
    </div>
  );
};
