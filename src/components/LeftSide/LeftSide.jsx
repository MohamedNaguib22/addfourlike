import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import { LinksOne } from "../../Data/DataLinks/LinksOne";
import {
  DataLinkOne,
  DataLinkTwo,
  SocialData,
} from "../../Data/DataLinks/DataLinks";
import { Icons } from "../../Data/DataLinks/Icons";
import { SideNav } from "../../Context/ContextSide";
import { useContext } from "react";

export const LeftSide = () => {
  const SideState = useContext(SideNav);
  const State = SideState.Side;
  return (
    <>
      <div
        className={`fixed top-[90px] z-[2] bg-gray-200 lg:left-0 transition-all duration-[0.3s] w-[320px] lg:top-[90px] lg:pt-[20px] pb-[80px] overflow-y-auto h-full lg:w-[16.7%] lg:shadow-md ${
          State ? "left-0 " : "left-[-200%] "
        }`}
      >
        <ul className="flex flex-col gap-4 text-[24px] pb-[18px] font-bold pt-[20px] relative px-[10px] before:content-['']  before:absolute before:w-[80%] before:h-[2px] before:bg-gray-400 before:bottom-0 before:left-2/4 before:translate-x-[-50%] ">
          <li className="flex gap-2 items-center lg:justify-start px-[0] lg:px-[20px] justify-center LinksFonts bg-white w-full h-[43px] rounded-[23px]">
            <FaPlus size={14} />
            <Link to="add-order">Add Order</Link>
          </li>
          {DataLinkOne.map((item) => {
            return (
              <li
                className="flex gap-2 LinksFonts text-gray-700 justify-start  px-[20px] hover:text-black cursor-pointer transition-all duration-[0.3s]"
                key={item.id}
              >
                <LinksOne {...item} />
              </li>
            );
          })}
        </ul>
        <ul className="flex flex-col gap-4  py-[20px] text-[24px] font-bold px-[10px] relative before:content-['']  before:absolute before:w-[80%] before:h-[2px] before:bg-gray-400 before:bottom-0 before:left-2/4 before:translate-x-[-50%] ">
          <li className="flex gap-2 lg:justify-start px-[0] lg:px-[20px] LinksFonts items-center justify-center bg-white h-[43px] rounded-[23px]">
            <FaPlus size={14} />
            <Link to="add-site">Add Site/Link</Link>
          </li>
          {DataLinkTwo.map((item) => {
            return (
              <li
                className="flex gap-2 text-gray-700 lg:justify-start hover:text-black cursor-pointer transition-all duration-[0.3s]"
                key={item.id}
              >
                <LinksOne {...item} />
              </li>
            );
          })}
        </ul>
        <ul className="flex justify-center gap-3 mt-[30px] pb-[50px]">
          {SocialData.map((item) => {
            return (
              <li className="text-[36px]" key={item.id}>
                <Icons {...item} />
              </li>
            );
          })}
        </ul>
      </div>
      <div
        className={`bg-[#0303038f] w-full lg- h-screen top-0 fixed z-[1] transition-all duration-[0.2s] lg:hidden block  lg:invisible lg:opacity-0 opacity-[1] visible ${
          State ? "left-0 " : "left-[-200%] "
        }`}
      ></div>
    </>
  );
};
