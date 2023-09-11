/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
import { HeaderOne } from "../../components/HeaderWebsite/HeaderOne";
import HeaderTwo from "../../components/HeaderWebsite/HeaderTwo";
import { Flex } from "@tremor/react";
import { FaWallet } from "react-icons/fa";
import { TradeTable } from "../../components/TradeTable/TradeTable";
export const Trade = () => {
  return (
    <div>
      <HeaderOne>
        <h1 className="text-[14px] text-center py-[10px]">
          ⚠ Please be careful and read our Terms again. Anyone who violates any
          of our terms and conditions will be permanently banned without the
          possibility of being unblocked.
        </h1>
      </HeaderOne>
      <HeaderTwo>
        <h1 className="text-[20px] lg:text-[26px]">P2P Trade</h1>
        <p className="text-[12px] lg:w-[60%] my-[4px]">
          Peer-to-peer trade (or P2P Trade) is a marketplace where AddMeFast
          users can trade services in AMF Tokens directly with each other on
          their own terms.
        </p>
        <h3 className="bg-black h-auto text-[14px] lg:text-[16px] my-[10px] flex justify-center items-center py-[px] px-[10px]">
          Peer-to-peer trade (or P2P Trade) is a marketplace where AddMeFast
          users can trade services in AMF Tokens directly with each other on
          their own terms.
        </h3>
        <p className="lg:w-[40%] text-center lg:text-start text-[12px] my-[4px]">
          Only qualified (Gold, Diamond and Dark Matter) users can SELL Points
          Any AddMeFast user can buy points in the P2P Trade section
        </p>
        <p className="lg:w-[40%] text-center  text-[12px] my-[4px] italic">
          How to become a qualified (Gold, Diamond and Dark Matter) user on
          AddMeFast?
        </p>
        <Link className="lg:w-[40%] text-center  text-[12px] pb-[8px]" to="/#">
          Click here to check Your status.
        </Link>
      </HeaderTwo>
      <div className="text-center lg:w-[60%] mx-auto mb-[20px]">
        <h1 className="text-[18px] font-bold">
          Secure crypto payments in AMF Tokens by AddMeFast
        </h1>
        <button className="uppercase text-[10px]  bg-gray-600 text-white w-[100px] mx-auto h-[28px] my-[8px] flex gap-2 justify-center items-center rounded-full">
          <FaWallet size={20} /> connect
        </button>
        <h1 className="text-[22px] mb-[10px] font-bold">
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
      <div className="lg:w-[90%] mx-auto">
        <p className="text-[12px] bg-black text-white text-center py-[8px]">
          You will receive your purchased points within 10 minutes. | Top 10
          offers from users you follow will be shown first. | Any action will be
          visible within a minute.
        </p>
      </div>
      <div className="text-center lg:w-[60%] mx-auto my-[16px]">
        <p className="font-bold text-[14px]">
          <span className="italic font-normal">Where to get AMF Tokens?</span> -
          currently You can swap Your crypto to
        </p>
        <p className="font-bold text-[13px] lg:w-[50%] mx-auto">
          AMF Tokens only at pancakeswap.finance (DEX Trade). For more
          information read also this article.
        </p>
        <button className="bg-black/90 text-white w-[220px] h-[50px] my-[20px] rounded-lg text-[16px]">
          Get AMF Token Now
        </button>
        <p className="font-extrabold mb-[4px]">It's IMPORTANT to</p>
        <Flex flexDirection="col" className="gap-[4px] pb-[50px]">
          <p className="lg:w-[50%] text-[14px] mx-auto font-bold">
            1. Connect your wallet to Binance Smart Chain Mainnet (BEP20). See
            our ▶ Video guide for clear instructions on how to do this.
          </p>
          <p className="lg:w-[50%] text-[14px] mx-auto font-bold">
            2. You need manually ▶ add AMF Token to Your BSC wallet. AMF Token
            contract address is
          </p>
          <p className="lg:w-[50%] text-[14px] mx-auto font-bold">
            0xeecd101725b89b66f3e04f953ae0bb647c23fb8d
          </p>
        </Flex>
      </div>
      <div className="container lg:px-[20px]">
        <TradeTable />
      </div>
    </div>
  );
};
