import { AiOutlineWarning } from "react-icons/ai";
import { HeaderOne } from "../../components/HeaderWebsite/HeaderOne";
import { Tasks } from "../../components/P2PTasks/Tasks";

export const MyOrder = () => {
  return (
    <div>
      <HeaderOne>
        <div className="flex items-center gap-2">
          <AiOutlineWarning />
          <h1 className="text-[14px] font-medium">
            Please be careful and read our Terms again. Anyone who violates any
            of our terms and conditions will be permanently banned without the
            possibility of being unblocked.
          </h1>
        </div>
      </HeaderOne>
      <Tasks />
      <p className="text-[16px] font-medium text-center mb-[30px]">
        There is no proof pending verification.
      </p>
      <p className="text-[14px] text-center">
        There is no task to show, or you do not have permission to view them.
      </p>
    </div>
  );
};
