import { FaQuestion } from "react-icons/fa";
import HeaderTwo from "../../components/HeaderWebsite/HeaderTwo";

export const Welcome = () => {
  return (
    <div className=" mt-[10px] pb-[50px]">
      <HeaderTwo>
        <h1 className="text-[14px] lg:text-[26px]">Welcome</h1>
      </HeaderTwo>
      <div className="container flex-col flex w-full lg:w-[85%]">
        <h1 className="text-[20px] text-center mb-[18px] lg:text-[24px] font-bold justify-center flex">
          Thank You for choosing Add4Like.com
        </h1>
        <div className="w-[55%] mx-auto mb-[26px] bg-[#9ECFFA] text-black font-medium flex justify-between text-center items-center px-[34px] py-[20px]  rounded-md border-dashed  border-[3px] border-black">
          <h1 className="text-[16px] lg:text-[18px]">
            How to get more likes/followers and etc. on Add4Like
          </h1>
          <FaQuestion size={36} />
        </div>
        <div className="flex flex-col gap-4">
          <div className="bg-[#7BB2BB66]  text-black shadow-xl rounded-sm">
            <h1 className="px-[10px] py-[2px]">
              <span className=" text-[28px] font-extrabold">1. </span>
              Get <strong>Free Points</strong> by liking/following others`
              pages/profiles and etc. You can get unlimited points and promote
              unlimited accounts and not spending even a single cent. Basically
              it means you are doing <strong> FREE Exchange</strong>
            </h1>
          </div>
          <div className="bg-[#7BB2BB66]  w-[90%] mx-auto text-black shadow-xl rounded-sm">
            <h1 className="px-[10px] py-[2px]">
              <span className=" text-[28px] font-extrabold">2. </span>
              There is a benefit to <strong>be active on Add4Like</strong> . We
              give Daily Active users Daily Bonus Points (
              <span>
                <strong>200 and more daily bonus points</strong>
              </span>{" "}
              for at least daily 100 clicks). So you can get Free Points and
              also Daily Bonus points..
            </h1>
          </div>
          <div className="bg-[#7BB2BB66]   mx-auto text-black shadow-xl rounded-sm">
            <h1 className="px-[10px] py-[2px]">
              <span className=" text-[28px] font-extrabold">3. </span>
              Join the <strong>Affiliate Program</strong> and&nbsp; .
              <span>
                <strong>earn a lifetime 5% of the points</strong>
              </span>
              <span>collected in the `FREE Points` section.</span>
              &nbsp;Share your short referral link anywhere (on your website,
              blog or on any social media platform) in order to be able to
              register new users on
              <strong>Add4Like</strong>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};
