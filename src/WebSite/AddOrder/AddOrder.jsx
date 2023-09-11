import { HeaderOne } from "../../components/HeaderWebsite/HeaderOne";
import HeaderTwo from "../../components/HeaderWebsite/HeaderTwo";
import { Tasks } from "../../components/P2PTasks/Tasks";
import { ServiceForm } from "../../components/Forms/ServiceForm/ServiceForm";
export const AddOrder = () => {
  return (
    <div>
      <HeaderOne>
        <div className="flex items-center gap-2 text-[14px] lg:text-[16px]">
          <p>$</p>
          <h1>By buying points with AMF Tokens, you get 50% More</h1>
        </div>
      </HeaderOne>
      <HeaderTwo>
        <h1 className="text-[20px] lg:text-[26px]">Add Order - FREE AMF Tokens</h1>
        <p className="text-[15px] w-[80%] mx-auto font-normal">
          Peer-to-peer tasks (Add Order) is a marketplace where Add4Like users
          can complete tasks in AMF Tokens directly with each other on their own
          terms.
        </p>
      </HeaderTwo>
      <ServiceForm />
      <Tasks />
      <p className="text-[14px] font-medium text-center">
        You have no Tasks to show.
      </p>
    </div>
  );
};
