import { AboutData } from "../../Data/DataAbour/AboutData";
import { DataAbout } from "../../Data/DataAbour/DataAbout";
import LogoAbout from "../../../public/Assets/img/Illustration-2.png"
import "./About.css"
export const About = () => {
  return (
    <div className="h-auto py-[100px]">
      <div className="BgAbout  h-[880px] bg-no-repeat bg-cover bg-center object-cover w-full md:w-[1100.49px] absolute right-0"></div>
      <div className="Responsive  container justify-center h-screen">
        <div className="lg:text-start text-center">
          <h1 className="text-black text-[35px] leading-[80px] mb-[5px] ">
            Get FREE Facebook Likes, Followers, Share
          </h1>
          <p className="lg:ml-[20px] ml-0 font-medium text-[18px] w-full lg:w-[80%] text-black lg:text-gray-500 leading-[24px]">
            Facebook is the fastest growing and most renowned social network of
            the world, therefore, it`s of vital importance to represent your
            business here. With the help of Addmefast, you can gain thousands of
            likes, followers and shares ABSOLUTELY FOR FREE. Here is the full
            list of Facebook features.
          </p>
          <div className="grid grid-cols-2">
            {DataAbout.map((item) => {
              return <AboutData key={item.id} {...item} />;
            })}
          </div>
        </div>
        <div>
          <img src={LogoAbout} alt="" />
        </div>
      </div>
    </div>
  );
};
