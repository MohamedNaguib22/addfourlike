import { AiOutlineWarning } from "react-icons/ai";
import { HeaderOne } from "../../components/HeaderWebsite/HeaderOne";
import { Tasks } from "../../components/P2PTasks/Tasks";
import { OrderTable } from "../../components/OrderTable/OrderTable";
import HeaderTwo from "../../components/HeaderWebsite/HeaderTwo";

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
      <HeaderTwo>
        <h1 className=" text-[26px]">My Order - FREE AMF Tokens</h1>
        <p className="text-[15px] w-[80%] mx-auto font-normal">
          Peer-to-peer tasks (My Order) is a marketplace where Add4Like users
          can complete tasks in AMF Tokens directly with each other on their own
          terms.
        </p>
      </HeaderTwo>
      <div className="container my-[26px] lg:px-[40px]">
        <OrderTable />
      </div>
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
