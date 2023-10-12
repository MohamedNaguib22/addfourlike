/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";

import HeaderTwo from "../../components/HeaderWebsite/HeaderTwo";
import { TradeTable } from "../../components/TradeTable/TradeTable";
export const Trade = () => {
  return (
    <div>
      <HeaderTwo>
        <h1 className="text-[20px]">P2P Trade</h1>
        <p>[... Add4Like P2P: Buy/Sell Point ...]</p>
      </HeaderTwo>
      <div className="bg-[#ED7070] text-center py-[12px] font-medium">
        <h1 className="text-[20px] text-white">
          !! Only qualified (Gold , Diamond) users can SELL Points and
        </h1>
        <h2 className="text-[20px] text-white">
          Any Add4Like user can buy Points in the P2P Trade section
        </h2>
        <p className="font-normal">How to become a qualified (Gold, Diamond ) user on Add4Like?</p>
        <Link to="/#">Click here to check Your status.</Link>
      </div>
      <div className="text-center lg:w-[60%] mx-auto mb-[20px]">
        <h1 className="text-[18px] mt-[12px] mb-[10px] font-bold">
          Current Public offers
        </h1>
        <p className="text-[14px]">
          At the moment there are
          <span className="font-bold text-[18px]">501 active</span> offers
        </p>
        <p className="text-[14px]">
          Total <span className="font-bold text-[18px]">22848 sold</span> offers
          (669,073,174 points by AMF Tokens 39,965,876 AMF)
        </p>
        <p className="text-[14px]">
          [in average 1 Point was sold by AMF Tokens{" "}
          <span className="text-[16px] font-bold">0.06 AMF</span> ≈ $0.0003 USD]
        </p>
      </div>
      <div className="container lg:px-[20px]">
        <TradeTable />
      </div>
    </div>
  );
};
