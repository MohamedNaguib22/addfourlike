/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

/* eslint-disable react/no-unescaped-entities */
export const FaceBookParent = ({ children }) => {
  return (
    <div className="bg-gray-600 text-white text-center py-[28px]">
      {children}
    </div>
  );
};

export const LinkFacebook = ({ children }) => {
  return (
    <Link to="/website/add-site" className="bg-black w-[340px] h-[48px] mx-auto flex gap-[8px] font-medium rounded-lg justify-center items-center">
      <span>+</span>
      {children}
    </Link>
  );
};
