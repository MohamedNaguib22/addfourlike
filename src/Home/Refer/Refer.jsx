import "./Refer.css";
import BgRefer from "../../../public/Assets/img/Group53.png";
export const Refer = () => {
  return (
    <div className="relative pb-[100px]">
      <div className="grid lg:grid-cols-2 grid-cols-1 items-center place-items-start">
        <div className=" mr-[20px] ImgRefer sm:mr-[80px] md:mr-[0]  xl:w-[90%]">
          <img src={BgRefer} alt="BgRefer" className="max-w-full h-auto" />
        </div>
        <div className="lg:text-start text-center lg:mr-[60px] w-full lg:w-[80%] mt-[30px] lg:mt-[150px]">
          <h1 className="text-black text-[16px] lg:text-[18px] font-medium mb-[16px]">
            Refer & Earn Earn bonuses by referring others!
          </h1>
          <p className="text-[14px] lg:text-[16px] ml-0 font-normal w-full text-gray-500 lg:text-gray-500 leading-[24px]">
            In our Referral section, you can monitor your referral`s progress
            and potentially collect more than 250 credits in bonuses / per
            referral. For each person who registers and collects 500 points
          </p>
        </div>
      </div>
    </div>
  );
};
