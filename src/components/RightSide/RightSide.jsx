/* eslint-disable react/no-unescaped-entities */
import Avatar from "../../../public/Assets/img/profile-picture-5.jpg";
import AvatarTwo from "../../../public/Assets/img/profile-picture-4.jpg";
import AvatarThree from "../../../public/Assets/img/profile-picture-3.jpg";
import { LinkIcon } from "@heroicons/react/outline";
import { Link } from "react-router-dom";
import { Ranking } from "../Ranking/Ranking";


export const RightSide = () => {

  return (
    <>
      <div
        className="overflow-y-auto lg:shadow-md lg:fixed top-[70px] w-full lg:w-[16.7%] right-0 bottom-0 lg:text-start h-full"
      >
        <div className="px-[10px] bg-white py-[10px] mb-[10px]">
          <Link to="/#+" className="mb-[10px] text-[18px] font-semibold">
            🔥 Daily Ranking
          </Link>
          <Ranking Img={Avatar} Name="Mohamed" Index="1" Number="83.3K" />
          <Ranking Img={AvatarThree} Name="Mohamed" Index="2" Number="22.3K" />
          <Ranking Img={AvatarTwo} Name="Mohamed" Index="3" Number="66.3K" />
        </div>
        <div className="px-[10px] bg-white py-[10px] mb-[10px]">
          <Link to="/#+" className="mb-[10px] text-[18px] font-semibold">
            🔥 Month Ranking
          </Link>
          <Ranking Img={Avatar} Name="Mohamed" Index="1" Number="83.3K" />
          <Ranking Img={AvatarThree} Name="Mohamed" Index="2" Number="22.3K" />
          <Ranking Img={AvatarTwo} Name="Mohamed" Index="3" Number="66.3K" />
        </div>
        <div className="px-[10px] bg-white py-[10px] mb-[10px]">
          <Link to="/#+" className="mb-[10px] text-[18px] font-semibold">
            🔥 Point Ranking
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
            <span className="text-[18px] font-bold bg-blue-400 inline-block px-[2px]">
              lifetime 5%
            </span>{" "}
            of the points collected in the "FREE Points" section Check your
            referral status here.
          </p>
          <p className="text-[10px] mt-[5px] font-bold text-gray-500">
            Your Referral Link:
          </p>
          <div className="flex items-center gap-1 bg-blue-300 px-[10px]">
            <LinkIcon className="w-[18px]" />
            <span>http://Add4Like/?PP85922</span>
          </div>
          <div className="flex items-center gap-[10px] mt-[10px]">
            <div>
              <a
                href="#"
                className="w-[160px] h-[26px] bg-blue-600 text-white flex justify-center items-center"
              >
                Share on FaceBook
              </a>
            </div>
          </div>
        </div>
      </div>
    
    </>
  );
};
