import { WalletTable } from "../../components/WalletTable/WalletTable";
export const Wallet = () => {
  return (
    <div>
      <div className="mb-[20px] ">
        <h1 className="mt-[8px] text-center bg-[#9ECFFA] py-[12px] font-medium text-[24px]">
          Balance at Add4Like
        </h1>
      </div>
      <div className="text-center bg-[#E1F4FA] text-black py-[12px] ">
        <p className="text-[24px] font-bold">$ 0</p>
      </div>
      <div className="py-[20px] flex gap-[20px] justify-center flex-col lg:flex-row">
        <div className="w-[80%] lg:w-[120px]">
          <button className="text-[18px] w-full lg:w-[120px] h-[40px] bg-[#0E87F2CC] font-medium rounded-full">
            send
          </button>
        </div>
        <div className="w-[80%] lg:w-[120px]">
          <button className="text-[18px] w-full lg:w-[120px] h-[40px] bg-[#FF202099] font-medium rounded-full">
            Withdraw
          </button>
        </div>
        <div className="w-[80%] lg:w-[120px]">
          <button className="text-[18px] w-full lg:w-[120px] h-[40px] bg-[#2FD654] font-medium rounded-full">
            Deposit
          </button>
        </div>
      </div>
      <div>
        <h1 className="mt-[8px] text-center font-medium text-[18px]">
          History of Deposit, Withdraw, Send and Buy Point
        </h1>
      </div>
      <div className="container my-[26px] lg:px-[40px]">
        <WalletTable />
      </div>
      <div className="flex justify-center">
        <input type="date" />
      </div>
    </div>
  );
};
