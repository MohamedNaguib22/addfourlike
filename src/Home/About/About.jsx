import { AboutData } from "../../Data/DataAbour/AboutData";
import { DataAbout } from "../../Data/DataAbour/DataAbout";
import LogoAbout from "../../../public/Assets/img/Group1.png";
import "./About.css";
export const About = () => {
  return (
    <div>
      <div className="grid lg:grid-cols-2 grid-cols-1 items-center place-items-end py-[100px]">
        <div className="lg:text-start text-center w-full xl:w-[80%] lg:mt-[150px]">
          <h1 className="text-black text-[18px] lg:text-[20px] font-medium mb-[16px] ">
            Get FREE Facebook Likes, Followers, Share
          </h1>
          <p className="lg:ml-[18px] text-[14px] lg:text-[16px] ml-0 font-normal w-full lg:w-[60%] text-black lg:text-gray-500 leading-[24px]">
            Facebook is the fastest growing and most renowned social network of
            the world, therefore, it`s of vital importance to represent your
            business here. With the help of Add4Like, you can gain thousands of
            likes, followers and shares ABSOLUTELY FOR FREE. Here is the full
            list of Facebook features.
          </p>
          <div className="grid grid-cols-2 lg:place-items-start place-items-center">
            {DataAbout.map((item) => {
              return <AboutData key={item.id} {...item} />;
            })}
          </div>
        </div>
        <div className="ImgAbout xl:w-[90%] mt-[50px]">
          <img src={LogoAbout} className="max-w-full" alt="" />
        </div>
      </div>
    </div>
  );
};
