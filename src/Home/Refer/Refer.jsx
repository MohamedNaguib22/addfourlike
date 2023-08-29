import "./Refer.css";
import BgRefer from '../../../public/Assets/img/bgWoman2.png'
export const Refer = () => {
  return (
    <div className="h-auto relative">
      <div className="BgRefer top-[-10%] h-full bg-no-repeat bg-cover bg-center object-cover w-full md:w-[1100.49px] absolute left-0"></div>
      <div className="grid lg:grid-cols-3 grid-cols-1 relative items-center container justify-center h-screen">
        <div className="col-span-2">
          <img src={BgRefer} alt="BgRefer" className="max-w-full" />
        </div>
        <div className="lg:text-start text-center">
          <h1 className="text-black font-[400] leading-[80px] text-[55px]">
            Refer & Earn
          </h1>
          <h3 className="text-black w-full font-[400] leading-[80px] text-[30px]">
            Earn bonuses by referring others!
          </h3>
          <p className="text-gray-500 text-[18px] leading-[25px] font-[400]">
            In our Referral section, you can monitor your referral`s progress
            and potentially collect more than 250 credits in bonuses / per
            referral. For each person who registers and collects 500 points
          </p>
        </div>
      </div>
    </div>
  );
};
