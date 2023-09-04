/* eslint-disable react/no-unescaped-entities */
import {
  FaceBookParent,
  LinkFacebook,
} from "../../components/FaceBookParent/FaceBookParent";
import { Facebook } from "../../components/Facebook/Facebook";
import { HeaderOne } from "../../components/HeaderWebsite/HeaderOne";
import HeaderTwo from "../../components/HeaderWebsite/HeaderTwo";

export const FBShare = () => {
  return (
    <div>
      <HeaderOne>
        <div className="flex items-center gap-2">
          <h1>
            📢 Join the affiliate program and earn a lifetime 5% of the points
            collected in the "FREE Points" section.
          </h1>
        </div>
      </HeaderOne>
      <HeaderTwo>
        <h1>Facebook Share</h1>
        <p>
          [... get FREE points by liking, following and etc. other
          profiles/posts ...]
        </p>
      </HeaderTwo>
      <div className="text-[20px] text-center mb-[16px] font-bold">
        <p>You will get 4 points for sharing.</p>
      </div>
      <Facebook Btn="Share" />
      <FaceBookParent>
        <p className="w-[60%] mx-auto mb-[16px]">
          To get free points by sharing other's WebSites click on the "Share"
          button, then the page will be opened with popUp and after sharing the
          website the popUp will be closed automatically.
        </p>
        <LinkFacebook>Get Facebook Shares for website/links</LinkFacebook>
      </FaceBookParent>
    </div>
  );
};
