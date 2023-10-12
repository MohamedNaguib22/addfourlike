/* eslint-disable react/no-unescaped-entities */
import {
  FaceBookParent,
  LinkFacebook,
} from "../../components/FaceBookParent/FaceBookParent";
import { Facebook } from "../../components/Facebook/Facebook";

import HeaderTwo from "../../components/HeaderWebsite/HeaderTwo";

export const FBComment = () => {
  return (
    <div>
      <HeaderTwo>
        <h1 className="text-[20px] font-medium">FB Comments</h1>
        <p className="text-[16px] font-medium">
          [... Get FREE Points by Comment Posts ...]
        </p>
      </HeaderTwo>
      <div className="text-[14px] lg:text-[16px] w-full lg:w-[60%] container text-center">
        <div className="text-[16px] mb-[16px] font-bold">
          <p>You will get 11 points for Liking.</p>
        </div>
        <Facebook Btn="Comment" />
      </div>
      <FaceBookParent>
        <p className="lg:w-[60%] text-[16px] mx-auto mb-[16px] font-medium">
          To Get Free Points by Liking other users' Facebook pages, <br />
          click the "Like" button, then the page will open with a pop-up window,
          and after Like the Post, <br />
          CLOSE the pop-up window yourself and click "Confirm" button.
        </p>
        <LinkFacebook>Get Facebook Comment</LinkFacebook>
      </FaceBookParent>
    </div>
  );
};
