import { Link } from "react-router-dom";
import { HeaderOne } from "../../components/HeaderWebsite/HeaderOne";
import HeaderTwo from "../../components/HeaderWebsite/HeaderTwo";
import { DataBuy } from "../../Data/BuyCard/BuyData";
import { BuyCard } from "../../Data/BuyCard/BuyCard";
import Logo from '../../../public/Assets/img/buy_small.webp'
export const ByPoints = () => {
  return (
    <div>
      <HeaderOne>
        <div className="flex items-center gap-2">
          <p>📢</p>
          <h1>
            Join the affiliate program and earn a lifetime 5% of the points
            collected in the `FREE Points` section.
          </h1>
        </div>
      </HeaderOne>
      <HeaderTwo>
        <h1 className="text-[26px]">Buy Points</h1>
        <p>[... boost Your promotion and save Your time ...]</p>
        <p className="text-[14px] font-normal w-[62%]">
          You can choose one of the available payment methods and buy points for
          Social Media Marketing and Cryptocurrency promotion. For every bundle
          purchased from Binance, Payrexx and PaymentWall, you will receive{" "}
          <span className="text-[20px] text-black font-medium">
            10% More Points.
          </span>
          For payments in AMF Tokens, you will receive
          <span className="text-[30px] text-black font-medium">
            50% More Points.
          </span>
        </p>
      </HeaderTwo>
      <div className="lg:w-[50%] w-full container">
        <div className="bg-white border-[2px] border-black/50  mb-[40px]">
          <Link to="#" className="block px-[20px] py-[18px]">
            <span className="font-medium">
              Pay by AddMeFast Crypto - AMF Tokens
            </span>
            <br />
            <span className="text-green-600 font-medium">
              AMF crypto Tokens only.
            </span>
            You need Metamask wallet connected to BSC network and BNB or any
            other crypto there.
            <br />
            All countries are supported, starting from ≈$1, lowest transaction
            fee and fast processing time. For more info click here.
          </Link>
          <button className="w-full h-[70px] bg-black text-white text-[34px]">
            Get 50% More Points
          </button>
        </div>
        {DataBuy.map((item) => {
          return (
            <div key={item.id}>
              <BuyCard {...item} />
            </div>
          );
        })}
        <div className="w-full bg-black relative h-[70px] pt-[8px] pb-[20px] flex justify-center hover:bg-black/95 transition-all duration-[0.3s] text-white">
          <Link className="text-center">
            <span>∞ Unlimited Points (Weekly Subscription/Membership)</span>
            <br />
            <span className="italic text-green-600">
              Click here to read more
            </span>
              <img
                src={Logo}
                alt=""
                className="absolute right-[3%] w-[38px] top-[50%] translate-y-[-50%]"
              />
          </Link>
        </div>
      </div>
    </div>
  );
};
