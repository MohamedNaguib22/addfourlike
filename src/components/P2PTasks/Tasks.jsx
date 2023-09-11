import { FaLink } from "react-icons/fa";

export const Tasks = () => {
  return (
    <div className="mb-[20px]">
      
      <div className="text-white bg-black mx-auto w-[98%] lg:w-[70%] text-center py-[20px] px-[40px] rounded-[34px] shadow-2xl">
        <h1 className="text-[18px] lg:text-[20px] mb-[10px]">
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
