/* eslint-disable react/no-unescaped-entities */
import {
  FaceBookParent,
  LinkFacebook,
} from "../../components/FaceBookParent/FaceBookParent";
import { Facebook } from "../../components/Facebook/Facebook";

import HeaderTwo from "../../components/HeaderWebsite/HeaderTwo";

export const FBPage = () => {
  return (
    <div>
      <HeaderTwo>
        <h1 className="text-[18px] font-medium">FB Page Likes/Followers</h1>
        <p>[... Get FREE Points by Liking, Following ...]</p>
      </HeaderTwo>
      <div className="w-[98%] lg:w-[60%] container text-center">
        <div className="text-[20px] mb-[16px] font-bold">
          <p>You will get 12 points for Like/Follow.</p>
        </div>
        <Facebook Btn="Like/Follow" />
      </div>
      <FaceBookParent>
        <p className="lg:w-[60%] text-[16px] lg:text-[18px] mx-auto mb-[16px] font-medium">
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
