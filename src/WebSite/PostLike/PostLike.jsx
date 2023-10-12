/* eslint-disable react/no-unescaped-entities */
import {
  FaceBookParent,
  LinkFacebook,
} from "../../components/FaceBookParent/FaceBookParent";
import { Facebook } from "../../components/Facebook/Facebook";

import HeaderTwo from "../../components/HeaderWebsite/HeaderTwo";

export const PostLike = () => {
  return (
    <div>
      <HeaderTwo>
        <h1 className="text-[20px] font-medium">FB Post Like</h1>
        <p className="text-[16px]">[... Get FREE Points by Liking Posts ...]</p>
      </HeaderTwo>
      <div className="text-[20px] text-center mb-[16px] font-bold">
        <p>You will get 4 points for sharing.</p>
      </div>
      <Facebook Btn="Like" />
      <FaceBookParent>
        <p className="lg:w-[60%] text-[16px] mx-auto mb-[16px] font-medium">
          To Get Free Points by Liking other users' Facebook pages, <br />
          click the "Like" button, then the page will open with a pop-up window,
          and after Like the Post, <br />
          CLOSE the pop-up window yourself and click "Confirm" button.
        </p>
        <LinkFacebook>Get Facebook Post Likes</LinkFacebook>
      </FaceBookParent>
    </div>
  );
};
