import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import { LinksOne } from "../../Data/DataLinks/LinksOne";
import { DataLinkOne, DataLinkTwo, SocialData } from "../../Data/DataLinks/DataLinks";
import { Icons } from "../../Data/DataLinks/Icons";

export const LeftSide = () => {
  return (
    <div className="lg:shadow-md text-center lg:text-start h-full pb-[50px]">
      <ul className="flex flex-col gap-4 text-[24px] font-bold pt-[20px] relative px-[10px] before:content-['']  before:absolute before:w-[80%] before:h-[2px] before:bg-gray-400 before:bottom-0 before:left-2/4 before:translate-x-[-50%] ">
        <li className="flex gap-2 items-center justify-center LinksFonts bg-white w-full h-[43px] rounded-[23px]">
          <FaPlus size={14} />
          <Link to="add-order">Add Order</Link>
        </li>
        {DataLinkOne.map((item) => {
          return (
            <li
              className="flex gap-2 LinksFonts text-gray-700 lg:justify-start justify-center px-[20px] hover:text-black cursor-pointer transition-all duration-[0.3s]"
              key={item.id}
            >
              <LinksOne {...item} />
            </li>
          );
        })}
      </ul>
      <ul className="flex flex-col gap-4  py-[20px] text-[24px] font-bold px-[10px] relative before:content-['']  before:absolute before:w-[80%] before:h-[2px] before:bg-gray-400 before:bottom-0 before:left-2/4 before:translate-x-[-50%] ">
        <li className="flex gap-2 LinksFonts items-center justify-center bg-white h-[43px] rounded-[23px]">
          <FaPlus size={14} />
          <Link to="add-site">Add Site/Link</Link>
        </li>
        {DataLinkTwo.map((item) => {
          return (
            <li
              className="flex gap-2 text-gray-700 hover:text-black cursor-pointer transition-all duration-[0.3s]"
              key={item.id}
            >
              <LinksOne {...item} />
            </li>
          );
        })}
      </ul>
      <ul className="flex justify-center gap-3 mt-[30px] ">
        {SocialData.map((item) => {
          return (
            <li className="text-[34px]" key={item.id}>
              <Icons {...item} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};
