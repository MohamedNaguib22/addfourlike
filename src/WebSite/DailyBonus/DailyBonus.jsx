/* eslint-disable react/no-unescaped-entities */
import { AiOutlineWarning } from "react-icons/ai";
import { HeaderOne } from "../../components/HeaderWebsite/HeaderOne";
import HeaderTwo from "../../components/HeaderWebsite/HeaderTwo";
import Logo from '../../../public/Assets/img/daily_bonus.webp'
export const DailyBonus = () => {
  return (
    <div>
      <HeaderOne>
        <div className="flex items-center gap-2">
          <AiOutlineWarning />
          <h1 className="text-[14px] font-medium">
            Please be careful and read our Terms again. Anyone who violates any
            of our terms and conditions will be permanently banned without the
            possibility of being unblocked.
          </h1>
        </div>
      </HeaderOne>
      <HeaderTwo>
        <h1 className="text-[28px] font-[400]">Daily Bonus</h1>
        <p className="text-[13px] pb-[10px] font-normal lg:w-[32%]">
          Get daily
          <span className="text-black text-[22px] font-bold">
            200 and more bonus points
          </span>{" "}
          (Only daily active users can get bonuses)
        </p>
      </HeaderTwo>
      <div className="flex flex-col justify-center items-center gap-[26px]">
        <h1 className="text-gray-600 text-center text-[18px] font-bold">
          There are no clicks yet for today. Get FREE points in order to be able
          to get unlimited Daily Bonus Points.
        </h1>
        <p className="text-black text-center  text-[16px] font-medium">
          Make at least 100 clicks to be able to get 200 and more daily bonus
          points.
        </p>
        <p className="text-[14px] font-medium lg:w-[80%] text-center text-gray-500  mb-[38px]">
          Daily Bonus counting by daily ranking, so You can get unlimited daily
          bonus points. Daily Bonus counting as of daily ranking and daily click
          amount. You can get Daily Bonus once a day at anytime you want after
          minimum click amount will be done. If you don't get Daily Bonus before
          00:00 CET, then Your daily ranking and daily clicks sum will be
          reseted, and You need to start over.
        </p>
        <div>
          <img src={Logo} alt="image" />
        </div>
      </div>
    </div>
  );
};
