import Hero from "../../../public/Assets/img/image 1.png";
import "./HeroSection.css";
import { ImPower } from "react-icons/im";
import { AiFillSafetyCertificate } from "react-icons/ai";
import { CiBasketball } from "react-icons/ci";
import { useContext } from "react";
import { PopUp } from "../../Context/Context";
import "../../Pages/Navbar/Navbar.css"
export const HeroSection = () => {
  const contextPop = useContext(PopUp);
  const functionModel = contextPop.ModelUp;
  return (
    <div className="pb-[150px]">
        <div className="BgHeroSection h-[880px] bg-no-repeat bg-cover bg-center object-cover w-full md:w-[1270px] top-[-5%] absolute right-0"></div>
        <div className="Responsive container lg:mt-[120px] ">
          <div>
            <h1 className="uppercase text-center lg:text-start mt-[60px] lg:mt-0 ml-0 lg:ml-9 font-[500]  text-[40px] lg:text-[50px] leading-[76px] HeroFont italic  text-black ">
              add4like
            </h1>
            <div className="flex flex-col items-center lg:items-start">
              <div className="flex lg:gap-5 leading-[25px] mt-[24px] text-center lg:text-start">
                <div className="text-black mt-[8px] ">
                  <ImPower
                    size={20}
                    className="lg:inline hidden lg:visible invisible"
                  />
                </div>
                <div>
                  <h3 className="text-black font-bold italic lg:text-[18px] ">
                    <ImPower
                      size={20}
                      className="inline lg:hidden visible lg:invisible"
                    />
                    Free & paid services
                  </h3>
                  <p className="text-gray-500 font-medium lg:text-[16px] text-[14px]">
                    Get hundreds of High Quality Social Media Services from
                    freer. Safe & Secure Freer .
                  </p>
                </div>
              </div>
              <div className="flex lg:gap-5  leading-[25px] mt-[24px] text-center lg:text-start">
                <div className="text-black mt-[5px]">
                  <AiFillSafetyCertificate
                    size={24}
                    className="lg:inline hidden lg:visible invisible"
                  />
                </div>
                <div>
                  <h3 className="text-black font-bold italic lg:text-[18px]">
                    <AiFillSafetyCertificate
                      size={24}
                      className="inline lg:hidden visible lg:invisible"
                    />
                    Safe & Secure
                  </h3>
                  <p className="text-gray-500 font-medium lg:text-[16px] text-[14px]">
                    Freer dashboard super friendly and you will get all the info
                    you need from your dashboard.
                  </p>
                </div>
              </div>
              <div className="flex lg:gap-5  leading-[25px] mt-[24px] text-center lg:text-start">
                <div className="text-black mt-[0px]">
                  <CiBasketball
                    size={33}
                    className="lg:inline hidden lg:visible invisible"
                  />
                </div>
                <div>
                  <h3 className="text-black font-bold italic lg:text-[18px]">
                    <CiBasketball
                      size={33}
                      className="inline lg:hidden visible lg:invisible"
                    />
                    Free For All
                  </h3>
                  <p className="text-gray-500 font-medium lg:text-[16px] text-[14px]">
                    Our social networking tools free for all. No matter from
                    which city/country you are. You can use our social
                    networking tools in free for lifetime.
                  </p>
                </div>
              </div>
              <div className="w-[233px] lg:mx-0 mx-auto">
                <button
                  onClick={functionModel}
                  className="BtnHero lg:ml-[50px] text-white mt-8 Font uppercase w-[180px] mx-auto lg:w-[233px] h-[56px] rounded-[29px] flex items-center justify-center "
                >
                  try for free
                </button>
              </div>
            </div>
          </div>
          <div className="w-full  Hero">
            <img src={Hero} alt="" className="max-w-full h-auto" />
          </div>
        </div>
    </div>
  );
};
