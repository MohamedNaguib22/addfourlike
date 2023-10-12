import { FaceBookParent, LinkFacebook } from "../../components/FaceBookParent/FaceBookParent";
import { Facebook } from "../../components/Facebook/Facebook";

import HeaderTwo from "../../components/HeaderWebsite/HeaderTwo";

/* eslint-disable react/no-unescaped-entities */
export const ProfileFollow = () => {
  return (
    <div>
      <HeaderTwo>
        <h1 className="text-[18px] font-medium">FB Profile Follow</h1>
        <p>[... Get FREE Points by Following ...]</p>
      </HeaderTwo>
      <div className="w-[98%] lg:w-[60%] container text-center">
        <div className="text-[20px] mb-[16px] font-bold">
          <p>You will get 9 points for following.</p>
        </div>
        <Facebook Btn="Follow" />
      </div>
      <FaceBookParent>
        <p className="lg:w-[60%] text-[16px] lg:text-[18px] mx-auto mb-[16px] font-medium">
          To Get Free Points by Liking other users' Facebook pages, <br />
          click the "Like" button, then the page will open with a pop-up window,
          and after Like the Post, <br />
          CLOSE the pop-up window yourself and click "Confirm" button.
        </p>
      </FaceBookParent>
      <LinkFacebook> Get Facebook Page Likes/Followers</LinkFacebook>
    </div>
  );
};
