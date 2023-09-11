/* eslint-disable react/prop-types */
import { FaCheckCircle } from "react-icons/fa";
export const AboutData = (props) => {
  return (
    <div className="flex items-center gap-4 mt-[40px] text-black">
      <div>
        <FaCheckCircle size={20} />
      </div>
      <div>
        <h1 className="text-[18px] font-medium">{props.facebook}</h1>
      </div>
    </div>
  );
};
