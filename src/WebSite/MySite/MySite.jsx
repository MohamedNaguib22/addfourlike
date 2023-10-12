/* eslint-disable react/no-unescaped-entities */

import HeaderTwo from "../../components/HeaderWebsite/HeaderTwo";
import SiteTable from "../../components/SiteTable/SiteTable";

export const MySite = () => {
  return (
    <div>
      <HeaderTwo>
        <h1 className="text-[20px] lg:text-[26px]">My Site</h1>
      </HeaderTwo>
      <div>
        <h1 className="text-center text-[18px] lg: text-[20px ] font-bold mt-[-30px]">
          There is no sites to show on "My Sites" section.
        </h1>
      </div>
      <div className="flex flex-col items-center justify-center gap-[34px] mt-[20px]">
        <div className="text-white bg-[#007BFF99] w-[80px] font-medium rounded-md h-[40px] flex justify-center items-center">
          <span className="mr-[10px]">+</span> Add
        </div>
        <div className="text-center text-[16px] font-medium lg:w-[50%]">
          <h1>
            Please use the button on the top-right from anywhere at
            Add4Like.com, or just click on button at bottom of this page to
            <span className="font-bold">ADD Your site</span> , page, social
            media account or any other link, and start a Social Media Marketing
            right now!
          </h1>
        </div>
      </div>
      <div className="container my-[26px] lg:px-[40px]">
        <SiteTable />
      </div>
      <div className="flex flex-col items-center justify-center gap-[34px] mt-[20px]">
        <div className="text-center text-[16px] font-medium lg:w-[90%]">
          <h1>
            You can add unlimited links, pages, or social media accounts.
            Increase your social media activity. Get more and more likes, fans,
            folowers and etc.. Please carefully read our{" "}
            <span className="italic">Terms</span> once again, to not be banned
            from AddMeFast because of added content.
          </h1>
        </div>
        <div className="text-white bg-[#007BFF99] w-[80px] font-medium rounded-md h-[40px] flex justify-center items-center">
          <span className="mr-[10px]">+</span> Add
        </div>
      </div>
    </div>
  );
};
