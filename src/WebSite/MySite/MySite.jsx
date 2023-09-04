/* eslint-disable react/no-unescaped-entities */
import { HeaderOne } from "../../components/HeaderWebsite/HeaderOne";
import HeaderTwo from "../../components/HeaderWebsite/HeaderTwo";

export const MySite = () => {
  return (
    <div>
      <HeaderOne>
        <div className="flex items-center gap-2">
          <p>$</p>
          <h1>By buying points with AMF Tokens, you get 50% More</h1>
        </div>
      </HeaderOne>
      <HeaderTwo>
        <h1 className="text-[26px]">My Site</h1>
      </HeaderTwo>
      <div>
        <h1 className="text-center text-[22px] font-bold mt-[-30px]">
          There is no sites to show on "My Sites" section.
        </h1>
      </div>
      <div className="flex flex-col items-center justify-center gap-[34px] mt-[20px]">
        <div className="text-white bg-black w-[80px] font-medium rounded-md h-[40px] flex justify-center items-center">
          <span className="mr-[10px]">+</span> Add
        </div>
        <div className="text-center text-[18px] font-medium w-[50%]">
          <h1>
            Please use the button on the top-right from anywhere at
            Add4Like.com, or just click on button at bottom of this page to
            <span className="font-bold">ADD Your site</span> , page, social
            media account or any other link, and start a Social Media Marketing
            right now!
          </h1>
        </div>
        <div className="text-center text-[18px] font-medium w-[90%]">
          <h1>
            You can add unlimited links, pages, or social media accounts.
            Increase your social media activity. Get more and more likes, fans,
            folowers and etc.. Please carefully read our{" "}
            <span className="italic">Terms</span> once again, to not be banned
            from AddMeFast because of added content.
          </h1>
        </div>
        <div className="text-white bg-black w-[80px] font-medium rounded-md h-[40px] flex justify-center items-center">
          <span className="mr-[10px]">+</span> Add
        </div>
      </div>
    </div>
  );
};
