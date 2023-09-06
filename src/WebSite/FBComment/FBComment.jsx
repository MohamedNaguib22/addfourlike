/* eslint-disable react/no-unescaped-entities */
import { FaceBookParent, LinkFacebook } from "../../components/FaceBookParent/FaceBookParent";
import { Facebook } from "../../components/Facebook/Facebook";
import { HeaderOne } from "../../components/HeaderWebsite/HeaderOne";
import HeaderTwo from "../../components/HeaderWebsite/HeaderTwo";

export const FBComment = () => {
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
        <h1>Facebook Comment</h1>
        <p>
          [... get FREE points by liking, following and etc. other
          profiles/posts ...]
        </p>
      </HeaderTwo>
      <div className="w-[60%] container text-center">
        <div className="bg-black text-white h-[60px] flex justify-center items-center rounded-md font-medium mb-[16px]">
          <h1>
            For this section only - click the FOLLOW button if there is no LIKE
            button in the pop-up window
          </h1>
        </div>
        <div className="bg-gray-600 w-[90%] mx-auto text-white h-[60px] flex justify-center items-center rounded-md font-medium mb-[16px]">
          <p>
            Wait 2-3 seconds after Follow/Like/Subscribe and then close pop-up
            window.
          </p>
        </div>
        <div className="text-[20px] mb-[16px] font-bold">
          <p>You will get 11 points for Liking.</p>
        </div>
        <Facebook Btn="Comment" />
      </div>
      <FaceBookParent>
        <p className="w-[60%] mx-auto mb-[16px]">
          To get free points by liking other's posts click on the "Comment"
          button, then the post will be opened with popUp and after Commenting the
          post CLOSE the popUp yourself. The users who don't close manually the
          popUp, will not receive points.
        </p>
        <LinkFacebook>Get Facebook Comment</LinkFacebook>
      </FaceBookParent>
    </div>
  );
}
