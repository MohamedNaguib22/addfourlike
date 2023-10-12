/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import HeaderTwo from "../../components/HeaderWebsite/HeaderTwo";
import { useEffect } from "react";
export const DailyBonus = () => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(time + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [time]);

  const hours = Math.floor(time / 3600);
  const minutes = Math.floor((time % 3600) / 60);
  const seconds = time % 60;

  return (
    <div>
      <HeaderTwo>
        <h1 className="text-[18px] font-medium">Daily Bonus</h1>
        <p className=" pb-[10px] font-medium lg:w-[32%]">
          [... Be Active To Get More Bonus Points ...]
        </p>
      </HeaderTwo>
      <div>
        <div className="text-4xl text-center text-white  mb-4">
          <div className="flex justify-center gap-[10px] w-[200px] mx-auto pb-[10px] rounded-lg bg-black">
            <div>
              <p className="text-[16px] font-medium mb-[-10px]">Hrs</p>
              {String(hours).padStart(2, "0")}
            </div>
            <div>
              <p className="text-[16px] font-medium mb-[-10px]">Min</p>
              {String(minutes).padStart(2, "0")}
            </div>
            <div>
              <p className="text-[16px] font-medium mb-[-10px]">Sec</p>
              {String(seconds).padStart(2, "0")}
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center gap-[26px]">
        <h1 className="text-red-400 text-center text-[18px] font-bold">
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
      </div>
    </div>
  );
};
