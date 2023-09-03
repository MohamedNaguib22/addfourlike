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
        <p className="font-medium">
          [... Here you can add or edit your content ...]
        </p>
      </HeaderTwo>
      <div className="flex flex-col justify-center items-center">
        <form className=" w-full lg:w-[600px] mx-auto items-center gap-[30px] text-[18px] font-medium">
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
          <div className="flex gap-1 items-center mb-[16px]">
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
          <div className="flex items-center gap-[10px] mb-[16px]">
            <div className="flex gap-1">
              <label className="w-[120px] text-right" htmlFor="FB post url">
                Total Clicks:
              </label>
              <input
                type="number"
                className="py-[8px] text-center w-[90px] rounded-lg border-[2px] border-gray-300"
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
              <div>
              </div>
              <p className="ml-[50px]">
                dasdasd
              </p>
            </div>
          </div>
          <div className="flex items-center gap-[10px]">
            <div className="flex gap-1">
              <label className="w-[120px] text-right" htmlFor="FB post url">
                Daily Clicks:
              </label>
              <input
                type="number"
                className="py-[8px] text-center w-[90px] rounded-lg border-[2px] border-gray-300"
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
          </div>
        </form>
      </div>
    </div>
  );
};
