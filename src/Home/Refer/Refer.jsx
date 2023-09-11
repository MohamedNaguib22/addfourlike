import "./Refer.css";
import BgRefer from "../../../public/Assets/img/Group53.png";
export const Refer = () => {
  return (
    <div className="h-auto relative pb-[100px] lg:mt-[-250px]">
      <div className="grid lg:grid-cols-2 grid-cols-1  h-screen items-center place-items-start">
        <div className=" mr-[20px] sm:mr-[80px] md:mr-[0]">
          <img src={BgRefer} alt="BgRefer" className="max-w-full h-auto" />
        </div>
        <div className="lg:text-start text-center w-[70%] lg:pr-[60px] mx-auto lg:mt-[150px]">
          <h1 className="text-black font-[400] leading-[80px]  text-[28px] lg:text-[38px]">
            Refer & Earn
          </h1>
          <h3 className="text-black w-full font-[400] leading-[80px] lg:text-[20px]">
            Earn bonuses by referring others!
          </h3>
          <p className="text-gray-500 leading-[25px] font-[400]">
            In our Referral section, you can monitor your referral`s progress
            and potentially collect more than 250 credits in bonuses / per
            referral. For each person who registers and collects 500 points
          </p>
        </div>
      </div>
    </div>
  );
};
