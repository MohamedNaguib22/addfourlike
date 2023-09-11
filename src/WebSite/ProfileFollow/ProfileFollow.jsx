import { FaceBookParent } from "../../components/FaceBookParent/FaceBookParent";
import { Facebook } from "../../components/Facebook/Facebook";
import { HeaderOne } from "../../components/HeaderWebsite/HeaderOne";
import HeaderTwo from "../../components/HeaderWebsite/HeaderTwo";

/* eslint-disable react/no-unescaped-entities */
export const ProfileFollow = () => {
  return (
    <div>
      <HeaderOne>
        <div className="flex items-center gap-2 text-[14px] lg:text-[16px]">
          <p>$</p>
          <h1>By buying points with AMF Tokens, you get 50% More</h1>
        </div>
      </HeaderOne>
      <HeaderTwo>
        <h1>Facebook Followers</h1>
      </HeaderTwo>
      <div className="w-[98%] lg:w-[60%] container text-center">
        <div className="bg-gray-600 text-[14px] lg:text-[16px] w-[95%] mx-auto text-white h-[60px] flex justify-center items-center rounded-md font-medium mb-[16px]">
          <p>
            Wait 2-3 seconds after Follow/Like/Subscribe and then close pop-up
            window.
          </p>
        </div>
        <div className="text-[20px] mb-[16px] font-bold">
          <p>You will get 9 points for following.</p>
        </div>
        <Facebook Btn="Follow" />
      </div>
      <FaceBookParent>
        <p className="w-[98%] lg:w-[60%]  text-[14px] lg:text-[16px]  mx-auto mb-[16px]">
          To get free points by following other's Facebook Profiles click on the
          "Follow" button, then the profile will be opened with popUp and after
          following to profile CLOSE the popUp yourself. The users who don't
          close manually the popUp, will not receive points.
        </p>
      </FaceBookParent>
    </div>
  );
}
