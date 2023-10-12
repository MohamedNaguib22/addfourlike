/* eslint-disable react/no-unescaped-entities */
import {
  FaceBookParent,
  LinkFacebook,
} from "../../components/FaceBookParent/FaceBookParent";
import { Facebook } from "../../components/Facebook/Facebook";

import HeaderTwo from "../../components/HeaderWebsite/HeaderTwo";

export const FBShare = () => {
  return (
    <div>
      <HeaderTwo>
        <h1 className="text-[20px] font-medium">FB Share</h1>
        <p className="text-[16px] font-medium">
          [... Get FREE Points by Share Posts ...]
        </p>
      </HeaderTwo>
      <div className="text-[18px] text-center mb-[16px] font-bold">
        <p>You will get 4 points for sharing.</p>
      </div>
      <Facebook Btn="Share" />
      <FaceBookParent>
        <p className="lg:w-[60%] text-[16px] mx-auto mb-[16px] font-medium">
          To Get Free Points by Liking other users' Facebook pages, <br />
          click the "Like" button, then the page will open with a pop-up window,
          and after Like the Post, <br />
          CLOSE the pop-up window yourself and click "Confirm" button.
        </p>
        <LinkFacebook>Get Facebook Shares for website/links</LinkFacebook>
      </FaceBookParent>
    </div>
  );
};
