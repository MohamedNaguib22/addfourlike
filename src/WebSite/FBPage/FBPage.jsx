/* eslint-disable react/no-unescaped-entities */
import {
  FaceBookParent,
  LinkFacebook,
} from "../../components/FaceBookParent/FaceBookParent";
import { Facebook } from "../../components/Facebook/Facebook";
import { HeaderOne } from "../../components/HeaderWebsite/HeaderOne";
import HeaderTwo from "../../components/HeaderWebsite/HeaderTwo";

export const FBPage = () => {
  return (
    <div>
      <HeaderOne>
        <div className="flex items-center gap-2">
          <p>$</p>
          <h1>By buying points with AMF Tokens, you get 50% More</h1>
        </div>
      </HeaderOne>
      <HeaderTwo>
        <h1>FB Page Likes/Followers</h1>
      </HeaderTwo>
      <div className="w-[60%] container text-center">
        <div className="bg-black text-white h-[60px] flex justify-center items-center rounded-md font-medium mb-[16px]">
          <h1>
            For this section only - click the FOLLOW button if there is no LIKE
            button in the pop-up window
          </h1>
        </div>
        <div className="bg-gray-600 w-[80%] mx-auto text-white h-[60px] flex justify-center items-center rounded-md font-medium mb-[16px]">
          <p>
            Wait 2-3 seconds after Follow/Like/Subscribe and then close pop-up
            window.
          </p>
        </div>
        <div className="text-[20px] mb-[16px] font-bold">
          <p>You will get 12 points for Like/Follow.</p>
        </div>
        <Facebook Btn="Like/Follow" />
      </div>
      <FaceBookParent>
        <p className="w-[60%] mx-auto mb-[16px]">
          To get free points by liking/following other users' Facebook pages,
          click the "Like/Follow" button, then the page will open with a pop-up
          window, and after liking/following the page, CLOSE the pop-up window
          yourself and click "Confirm" button.
        </p>
        <LinkFacebook>Get Facebook Page Likes/Followers</LinkFacebook>
      </FaceBookParent>
    </div>
  );
};
