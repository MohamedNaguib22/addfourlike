/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

/* eslint-disable react/no-unescaped-entities */
export const FaceBookParent = ({ children }) => {
  return (
    <div className="bg-[#E1F4FA] text-black text-center py-[28px]">
      {children}
    </div>
  );
};

export const LinkFacebook = ({ children }) => {
  return (
    <Link
      to="/website/add-site"
      className="bg-[#0E87F2CC] text-black font-bold w-[250px] lg:w-[340px] h-[48px] mx-auto flex lg:gap-[8px] text-[14px] lg:text-[16px] rounded-lg justify-center items-center"
    >
      <span>+</span>
      {children}
    </Link>
  );
};
