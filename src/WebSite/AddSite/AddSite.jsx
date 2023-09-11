import { useState } from "react";
import { HeaderOne } from "../../components/HeaderWebsite/HeaderOne";
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
      <HeaderOne>
        <div className="flex items-center gap-2">
          <p>$</p>
          <h1>By buying points with AMF Tokens, you get 50% More</h1>
        </div>
      </HeaderOne>
      <HeaderTwo>
        <h1 className="text-[28px] font-medium">Add / Edit Content</h1>
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
          <div className="flex items-center gap-[10px] mb-[16px]">
            <div className="flex gap-1">
              <label className="w-[120px] text-right" htmlFor="FB post url">
                Total Clicks:
              </label>
              <input
                type="number"
                className="py-[8px] text-center w-[120px] rounded-lg border-[2px] border-gray-300"
                required
                minLength={2}
                disabled={!switchBtn ? true : false}
              />
            </div>
            <div
              onClick={handelSwitch}
              className="bg-white cursor-pointer w-[100px] h-[42px] rounded-md relative z-[2] flex items-center justify-between"
            >
              <p className="pl-[10px]">on</p>
              <p className="pr-[10px]">off</p>
              <div
                className={`absolute top-0 bg-black text-white w-[50%] z-[1] h-full rounded-md flex justify-center items-center ${
                  switchBtn ? "left-0" : "right-0"
                }`}
              >
                {switchBtn ? "on" : "off"}
              </div>
            </div>
            <p className="text-[14px] font-normal">Total clicks limit</p>
          </div>
          {/* Daily */}
          <div className="flex items-center gap-[10px] mb-[16px]">
            <div className="flex gap-1">
              <label className="w-[120px] text-right" htmlFor="FB post url">
                Daily Clicks:
              </label>
              <input
                type="number"
                className="py-[8px] text-center w-[120px] rounded-lg border-[2px] border-gray-300"
                required
                minLength={2}
                disabled={!switchBtnTwo ? true : false}
              />
            </div>
            <div
              onClick={handelSwitchTwo}
              className="bg-white cursor-pointer w-[100px] h-[42px] rounded-md relative z-[2] flex items-center justify-between"
            >
              <p className="pl-[10px]">on</p>
              <p className="pr-[10px]">off</p>
              <div
                className={`absolute top-0 bg-black text-white w-[50%] z-[1] h-full rounded-md flex justify-center items-center ${
                  switchBtnTwo ? "left-0" : "right-0"
                }`}
              >
                {switchBtnTwo ? "on" : "off"}
              </div>
            </div>
            <p className="text-[14px] font-normal">Daily clicks limit</p>
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
            <p className="text-[12px] font-normal w-[20%]">
              Cost/Points Per Click (from 5 to 50)
            </p>
          </div>
          <div className="grid lg:grid-cols-2 grid-cols-1 w-[50%] mx-auto lg:w-[200px]">
            <button className="text-white bg-black ml-0 lg:ml-[-30px] h-[45px] rounded-lg">
              Save Change
            </button>
            <button className="text-black underline">Cancel</button>
          </div>
        </form>
      </div>
      <HeaderOne>
        <h1 className="w-[98%] lg:w-[60%] text-center font-normal py-[20px]">
          The higher the CPC of your site/page, the more likely you are to get
          it seen, which means that the rate of getting likes/followers will be
          high. You can add an unlimited number of sites/pages. Please read our
          Terms carefully again so you don`t post content that is prohibited
          here.
        </h1>
      </HeaderOne>
    </div>
  );
};
