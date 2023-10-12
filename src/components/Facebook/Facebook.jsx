/* eslint-disable react/prop-types */
import { FaFacebookSquare } from "react-icons/fa";
import { Link } from "react-router-dom";

export const Facebook = (props) => {
  return (
    <div>
      <div className="flex flex-col items-center gap-2 mb-[16px]">
        <p>DLVG</p>
        <FaFacebookSquare size={80} className="text-blue-500" />
        <Link
          to="/#"
          className="text-black shadow-md mb-[30px] flex justify-center items-center bg-[#007BFF99] w-[200px] h-[40px] rounded-lg text-[18px] font-medium"
        >
          {props.Btn}
        </Link>
        <div className="flex items-center gap-10">
          <button className="mb-[26px] text-black/60">Skip</button>
          <button className="mb-[26px] text-black/60">Report</button>
        </div>
      </div>
    </div>
  );
}
