

import { useState } from "react";
import HeaderTwo from "../../components/HeaderWebsite/HeaderTwo";

export const AddSite = () => {
  const [select, setSelect] = useState(false);
  const [switchBtn, setSwitch] = useState(false);
  const [switchBtnTwo, setSwitchTWo] = useState(false);
  function handelSelect() {
    setSelect(!select);
  }
  function handelSwitch() {
    setSwitch(!switchBtn);
  }
  function handelSwitchTwo() {
    setSwitchTWo(!switchBtnTwo);
  }
  return (
    <div>
      <HeaderTwo>
        <h1 className="text-[20px] lg:text-[26px] font-medium">
          Add / Edit Content
        </h1>
        <p>[... Here you can add or edit your content ...]</p>
      </HeaderTwo>
      <div className="flex flex-col justify-center items-center mb-[40px]">
        <form className=" w-[80%] lg:w-[600px] mx-auto items-center gap-[30px] text-[18px] font-medium">
          {/* Type */}
          <div className="flex gap-1 items-center mb-[16px]">
            <label className="w-[120px] text-right" htmlFor="Type">
              Type:
            </label>
            <select
              name="Type"
              className="lg:w-[350px] py-[8px] rounded-lg w-full"
            >
              <option value="">FB Page Likes/Followers</option>
              <option value="">Facebook Share</option>
              <option value="">Facebook Post Like</option>
            </select>
          </div>
          {/* Title */}
          <div className="flex gap-1 items-center mb-[16px]">
            <label className="w-[120px] text-right" htmlFor="Title">
              Title:
            </label>
            <input
              type="text"
              className="lg:w-[350px] py-[8px] rounded-lg w-full"
              required
              minLength={2}
            />
          </div>
          {/* FB Post */}
          <div className="flex flex-col">
            <div className="flex gap-1 items-center mb-[16px]">
              <label className="w-[120px] text-right" htmlFor="FB post url">
                FB post url:
              </label>
              <input
                type="text"
                className="lg:w-[350px] py-[8px] rounded-lg w-full"
                required
                minLength={2}
              />
            </div>
            <p className="text-[12px] mx-auto mt-[-10px] mb-[8px]">Example : https://www.facebook.com/@username/</p>
          </div>
          {/* Countries */}
          <div className="flex gap-1 items-center mb-[16px] ml-[-15px] lg:ml-0 ">
            <label className="w-[120px] text-right" htmlFor="Countries">
              Countries:
            </label>
            <div className="flex flex-col gap-1 items-start">
              <div className="flex items-center gap-1">
                <input
                  type="checkbox"
                  name="select"
                  id=""
                  onClick={handelSelect}
                />
                <p className="text-[12px]">
                  WORLDWIDE (Select countries or promote worldwide)
                </p>
              </div>
              <select
                name="Type"
                className="lg:w-[350px] py-[8px] rounded-lg w-full"
                disabled={select ? true : false}
              >
                <option value="">Egypt</option>
                <option value="">England</option>
                <option value="">Germany</option>
              </select>
            </div>
          </div>
          {/* Total */}
          <div className="flex items-center ml-[-36px] sm:ml-0 gap-[10px] mb-[16px]">
            <div className="flex gap-1">
              <label
                className=" sm:text-[16px] text-[14px] w-[120px] text-right"
                htmlFor="FB post url"
              >
                Total Clicks:
              </label>
              <input
                type="number"
                className="py-[6px] sm:py-[8px] text-center w-[80px] sm:w-[120px] rounded-lg border-[2px] border-gray-300"
                required
                minLength={2}
                disabled={!switchBtn ? true : false}
              />
            </div>
            <div
              onClick={handelSwitch}
              className="bg-white cursor-pointer w-[80px] sm:w-[100px] h-[42px] rounded-md relative z-[2] flex items-center justify-between"
            >
              <p className="pl-[10px] text-[14px] sm:text-[16px] ">on</p>
              <p className="pr-[10px] text-[14px] sm:text-[16px] ">off</p>
              <div
                className={`absolute text-[14px] sm:text-[16px] top-0 bg-[#55585a] text-white w-[50%] z-[1] h-full rounded-md flex justify-center items-center ${
                  switchBtn ? "left-0" : "right-0"
                }`}
              >
                {switchBtn ? "on" : "off"}
              </div>
            </div>
            <p className="text-[12px] sm:text-[14px] font-normal">
              Total clicks limit
            </p>
          </div>
          {/* Daily */}
          <div className="flex items-center  ml-[-36px] sm:ml-0 gap-[10px] mb-[16px]">
            <div className="flex gap-1">
              <label
                className="text-[14px] sm:text-[16px] w-[120px] text-right"
                htmlFor="FB post url"
              >
                Daily Clicks:
              </label>
              <input
                type="number"
                className="py-[6px] sm:py-[8px] text-center w-[80px] sm:w-[120px] rounded-lg border-[2px] border-gray-300"
                required
                minLength={2}
                disabled={!switchBtnTwo ? true : false}
              />
            </div>
            <div
              onClick={handelSwitchTwo}
              className="bg-white cursor-pointer w-[80px] sm:w-[100px] h-[42px] rounded-md relative z-[2] flex items-center justify-between"
            >
              <p className="pl-[10px] text-[14px] sm:text-[16px] ">on</p>
              <p className="pr-[10px] text-[14px] sm:text-[16px] ">off</p>
              <div
                className={`absolute top-0 text-[14px] sm:text-[16px]  bg-[#55585a] text-white w-[50%] z-[1] h-full rounded-md flex justify-center items-center ${
                  switchBtnTwo ? "left-0" : "right-0"
                }`}
              >
                {switchBtnTwo ? "on" : "off"}
              </div>
            </div>
            <p className="text-[12px] sm:text-[14px] font-normal">
              Daily clicks limit
            </p>
          </div>
          <div className="flex items-center gap-[10px] mb-[16px]">
            <div className="flex gap-1 items-center">
              <label className="w-[120px] text-right" htmlFor="FB post url">
                CPC:
              </label>
              <input
                type="number"
                className="py-[8px] text-center w-[70px] rounded-lg border-[2px] border-gray-300"
                required
                minLength={2}
              />
            </div>
            <p className="text-[12px] font-normal w-[20%]">Points Per Click</p>
          </div>
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-[8px] w-[50%] mx-auto lg:w-[200px]">
            <button className="text-white bg-[#007BFF99] ml-0 lg:ml-[-30px] h-[45px] rounded-lg">
              Save
            </button>
            <button className="text-black underline bg-[#FF202099] rounded-lg">
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

