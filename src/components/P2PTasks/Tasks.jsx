import { FaLink } from "react-icons/fa";
import HeaderTwo from "../HeaderWebsite/HeaderTwo";

export const Tasks = () => {
  return (
    <div className="mb-[20px]">
      <HeaderTwo>
        <h1 className=" text-[26px]">P2P Tasks - FREE AMF Tokens</h1>
        <p className="text-[17px] font-medium">
          [... complete tasks to get FREE AMF Tokens ...]
        </p>
        <p className="text-[15px] w-[80%] mx-auto font-normal">
          Peer-to-peer tasks (or P2P Tasks) is a marketplace where Add4Like
          users can complete tasks in AMF Tokens directly with each other on
          their own terms.
        </p>
      </HeaderTwo>
      <div className="text-white bg-black mx-auto w-[70%] text-center py-[20px] px-[40px] rounded-[34px] shadow-2xl">
        <h1 className="text-[24px] mb-[10px]">
          ‼ Only qualified (Gold, Diamond and Dark Matter) users can ADD, VIEW
          or COMPLETE P2P TASKS
        </h1>
        <p className="text-[14px] italic mb-[10px] ">
          How to become a qualified (Gold, Diamond and Dark Matter) user on
          Add4Like?
        </p>
        <a
          href="#"
          className="flex gap-1 text-[12px] items-center justify-center"
        >
          <FaLink size={12} />
          <span>Click here to check Your status.</span>
        </a>
      </div>
    </div>
  );
}
