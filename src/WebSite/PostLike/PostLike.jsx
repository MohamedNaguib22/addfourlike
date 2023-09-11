/* eslint-disable react/no-unescaped-entities */
import { FaceBookParent, LinkFacebook } from "../../components/FaceBookParent/FaceBookParent";
import { Facebook } from "../../components/Facebook/Facebook";
import { HeaderOne } from "../../components/HeaderWebsite/HeaderOne";
import HeaderTwo from "../../components/HeaderWebsite/HeaderTwo";

export const PostLike = () => {
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
      </HeaderTwo>
      <div className="text-[20px] text-center mb-[16px] font-bold">
        <p>You will get 4 points for sharing.</p>
      </div>
      <Facebook Btn="Like" />
      <FaceBookParent>
        <p className="w-[98%] lg:w-[60%] mx-auto text-[14px] lg:text-[16px] mb-[16px]">
          To get free points by liking other's posts click on the "like" button,
          then the post will be opened with popUp and after liking the post
          CLOSE the popUp yourself. The users who don't close manually the
          popUp, will not receive points. To get free points by liking other's
          posts click on the "like" button, then the post will be opened with
          popUp and after liking the post CLOSE the popUp yourself. The users
          who don't close manually the popUp, will not receive points.
        </p>
        <LinkFacebook>Get Facebook Post Likes</LinkFacebook>
      </FaceBookParent>
    </div>
  );
}
