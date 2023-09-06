/* eslint-disable react/no-unescaped-entities */
import { Flex } from "@tremor/react";
import Logo from "../../../public/Assets/img/logo.png";
import { PlusIcon } from "@heroicons/react/solid";
import { AiOutlineArrowsAlt } from "react-icons/ai";
import Avatar from "../../../public/Assets/img/profile-picture-5.jpg";
import AvatarTwo from "../../../public/Assets/img/profile-picture-4.jpg";
import AvatarThree from "../../../public/Assets/img/profile-picture-3.jpg";
import LogoTwo from "../../../public/Assets/img/side_object.webp";
import { ExclamationCircleIcon, LinkIcon } from "@heroicons/react/outline";
import { Link } from "react-router-dom";
import { Ranking } from "../Ranking/Ranking";
import { useContext } from "react";
import { SideNav } from "../../Context/ContextSide";

export const RightSide = () => {
  const SideState = useContext(SideNav);
  const State = SideState.Side;
  return (
    <>
      <div
        className={`fixed top-[90px] z-[2] bg-gray-200 lg:right-0 transition-all duration-[0.3s] w-[320px] lg:top-[90px] lg:pt-[20px] pb-[80px] overflow-y-auto h-screen lg:h-full lg:w-[16.7%] lg:shadow-md ${
          State ? "right-0 " : "right-[-200%] "
        }`}
      >
        <Flex
          alignItems="center"
          justifyContent="between"
          className="px-[10px] bg-white py-[10px]"
        >
          <div className="w-[150px]">
            <img src={Logo} />
          </div>
          <div>
            <button className="bg-black text-white w-[70px]  flex justify-center items-center rounded-lg h-[30px] ">
              + Follow
            </button>
          </div>
        </Flex>
        <div className="flex items-center pl-[10px] relative py-[8px] bg-gray-600 gap-[8px] mt-[8px]">
          <div>
            <h1 className=" lg:text-[16px] 2xl:text-[22px] font-extrabold text-white">Your Ad Here</h1>
          </div>
          <div>
            <PlusIcon className="w-[24px] text-white cursor-pointer" />
          </div>
          <div>
            <AiOutlineArrowsAlt
              size={20}
              className="text-white cursor-pointer"
            />
          </div>
          <div className="group h-full">
            <ExclamationCircleIcon className="h-[14px] text-white mt-[-14px] bl-[-18px] cursor-help " />
            <h1 className="absolute z-[44] bg-white w-[80%] left-[70%] p-[10px] top-[38px] translate-x-[-50%] text-[12px] opacity-0 invisible transition-all duration-75 group-hover:opacity-[1] group-hover:visible">
              Here, you see donations from users renting this space. All funds
              will go directly to the AMF General Wallet, which is distributed
              among all users of AddMeFast. By Clicking, Following, Liking you
              are supporting a community of those who donates. If you are one of
              us you know what to do.
            </h1>
          </div>
        </div>
        <div className="px-[10px] bg-white py-[10px] mb-[10px]">
          <Link to="/#+" className="mb-[10px] text-[18px] font-semibold">
            🔥 Weekly Ranking
          </Link>
          <Ranking Img={Avatar} Name="Mohamed" Index="1" Number="83.3K" />
          <Ranking Img={AvatarThree} Name="Mohamed" Index="2" Number="22.3K" />
          <Ranking Img={AvatarTwo} Name="Mohamed" Index="3" Number="66.3K" />
        </div>
        <div className="px-[10px] bg-white py-[10px] mb-[10px]">
          <Link to="/#+" className="mb-[10px] text-[18px] font-semibold">
            🔥 Weekly Ranking
          </Link>
          <Ranking Img={Avatar} Name="Mohamed" Index="1" Number="83.3K" />
          <Ranking Img={AvatarThree} Name="Mohamed" Index="2" Number="22.3K" />
          <Ranking Img={AvatarTwo} Name="Mohamed" Index="3" Number="66.3K" />
        </div>
        <div className="px-[10px] bg-white py-[10px] mb-[10px]">
          <Link to="/#+" className="mb-[10px] text-[18px] font-semibold">
            🔥 Weekly Ranking
          </Link>
          <Ranking Img={Avatar} Name="Mohamed" Index="1" Number="83.3K" />
          <Ranking Img={AvatarThree} Name="Mohamed" Index="2" Number="22.3K" />
          <Ranking Img={AvatarTwo} Name="Mohamed" Index="3" Number="66.3K" />
        </div>
        <div className="px-[10px] bg-white py-[10px] mb-[10px]">
          <Link to="/#+" className="mb-[10px] text-[20px] font-semibold">
            Referral Program
          </Link>
          <p className="text-[12px]">
            Invite new people to sign up for AddMeFast using your referral URL
            and earn a{" "}
            <span className="text-[18px] font-bold bg-green-400 inline-block px-[2px]">
              lifetime 5%
            </span>{" "}
            of the points collected in the "FREE Points" section Check your
            referral status here.
          </p>
          <p className="text-[10px] mt-[5px] font-bold text-gray-500">
            Your Referral Link:
          </p>
          <div className="flex items-center gap-1 bg-green-300 px-[10px]">
            <LinkIcon className="w-[18px]" />
            <span>http://Add4Like/?PP85922</span>
          </div>
          <div className="flex items-center gap-[10px] mt-[10px]">
            <div className="flex flex-col gap-[6px]">
              <a
                href="#"
                className="w-[160px] h-[26px] bg-black text-white flex justify-center items-center"
              >
                Share on X
              </a>
              <a
                href="#"
                className="w-[160px] h-[26px] bg-blue-600 text-white flex justify-center items-center"
              >
                Share on FaceBook
              </a>
              <a
                href="#"
                className="w-[160px] h-[26px] bg-gray-600 text-white flex justify-center items-center"
              >
                Share on Website
              </a>
            </div>
            <div>
              <img src={LogoTwo} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div
        className={`bg-[#0303038f] w-full lg- h-screen top-0 fixed z-[1] transition-all duration-[0.2s] lg:hidden block  lg:invisible lg:opacity-0 opacity-[1] visible ${
          State ? "right-0 " : "right-[-200%] "
        }`}
      ></div>
    </>
  );
};
