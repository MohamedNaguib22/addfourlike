import { FaCheck, FaHourglassEnd } from "react-icons/fa";
import "./Target.css";
export const  Target = () => {
  return (
    <div className="relative h-[980px] container py-[100px]">
      <div className="h-[74%] w-[3px] bg-gray-200 absolute left-[10%] lg:left-[50%]">
        <div>
          <div className="absolute top-[2%] left-[50%] translate-x-[-50%] bg-green-500 text-white w-[40px] h-[40px] rounded-full border-gray-200 border-[3px]  flex justify-center items-center ">
            <FaCheck size={20} />
          </div>
        </div>
        <div>
          <div className="absolute top-[32%] left-[50%] translate-x-[-50%] bg-white text-black w-[40px] h-[40px] rounded-full border-gray-200 border-[3px]  flex justify-center items-center ">
            <FaHourglassEnd size={20} />
          </div>
        </div>
        <div>
          <div className="absolute top-[65%] left-[50%] translate-x-[-50%] bg-white text-black w-[40px] h-[40px] rounded-full border-gray-200 border-[3px]  flex justify-center items-center ">
            <FaHourglassEnd size={20} />
          </div>
        </div>
        <div>
          <div className="absolute top-[100%] left-[50%] translate-x-[-50%] bg-white text-black w-[40px] h-[40px] rounded-full border-gray-200 border-[3px]  flex justify-center items-center ">
            <FaHourglassEnd size={20} />
          </div>
        </div>
      </div>
      <div
        data-aos="fade-right"
        className="flex LgLgBorder MobileBorder top-[-2%] xl:top-[-3%] left-[8%] lg:left-[-25%] relative  flex-col lg:justify-start justify-end border-b-[3px] w-[75%] mx-auto lg:w-[40%] bg-gray-100 pl-[20px] py-[10px] lg:py-[18px] rounded-md"
      >
        <h1 className="text-black text-[16px] md:text-[18px] mb-3 font-bold">
          First Target
        </h1>
        <p className="text-black font-medium mb-3 text-[14px] md:text-[16px]">
          1000 Users and 10.000 EX-Change
        </p>
        <p className="text-black font-medium lg:hidden block text-[12px] md:text-[14px]">
          2023 - SEP
        </p>
      </div>
      <div
        data-aos="fade-left"
        className="flex MediaCard xl:top-[10%] sm:top-[9%] top-[12%] MobileBorder2  left-[8%] lg:left-[25%] relative  flex-col lg:justify-start justify-end border-b-[3px] w-[75%] mx-auto lg:w-[40%] bg-gray-100 pl-[20px] py-[10px] md:py-[18px] rounded-md"
      >
        <h1 className="text-black text-[16px] md:text-[18px] mb-3 font-bold">
          Second Target
        </h1>
        <p className="text-black font-medium mb-3 text-[14px] md:text-[16px]">
          10.000 Users and 100.000 EX-Change
        </p>
        <p className="text-black font-medium lg:hidden block  text-[12px] md:text-[14px]">
          2023 - SEP
        </p>
      </div>
      <div
        data-aos="fade-right"
        className="flex LgLgBorder MobileBorder sm:top-[22%] top-[27%] xl:top-[26%] MediaCard2 left-[8%] lg:left-[-25%] relative  flex-col lg:justify-start justify-end border-b-[3px] w-[75%] mx-auto lg:w-[40%] bg-gray-100 pl-[20px] py-[18px] rounded-md"
      >
        <h1 className="text-black text-[16px] md:text-[18px] mb-3 font-bold">
          Third Target
        </h1>
        <p className="text-black font-medium mb-3 text-[14px] md:text-[16px]">
          50.000 Users and 50.000 EX-Change
        </p>
        <p className="text-black font-medium lg:hidden block text-[12px] md:text-[14px]">
          2023 - SEP
        </p>
      </div>
      <div
        data-aos="fade-left"
        className="flex   MobileBorder2 top-[43%] sm:top-[37%] xl:top-[44%] left-[8%] MediaCard3  lg:left-[25%] relative  flex-col lg:justify-start justify-end border-b-[3px] w-[75%] mx-auto lg:w-[40%] bg-gray-100 pl-[20px] py-[18px] rounded-md"
      >
        <h1 className="text-black text-[16px] md:text-[18px] mb-3 font-bold">
          Fourth Target
        </h1>
        <p className="text-black font-medium mb-3 text-[14px] md:text-[16px]">
          100.000 Users and 1M EX-Change
        </p>
        <p className="text-black font-medium lg:hidden block text-[12px] md:text-[14px]">
          2023 - SEP
        </p>
      </div>
    </div>
  );
};
