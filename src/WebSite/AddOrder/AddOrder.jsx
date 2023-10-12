import HeaderTwo from "../../components/HeaderWebsite/HeaderTwo";
import { ServiceForm } from "../../components/Forms/ServiceForm/ServiceForm";
export const AddOrder = () => {
  return (
    <div>
      <HeaderTwo>
        <h1 className="text-[20px] lg:text-[26px]">
          Add Order - FREE AMF Tokens
        </h1>
        <p className="text-[15px] w-[80%] mx-auto font-normal">
          Peer-to-peer tasks (Add Order) is a marketplace where Add4Like users
          can complete tasks in AMF Tokens directly with each other on their own
          terms.
        </p>
      </HeaderTwo>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div>
          <ServiceForm />
        </div>
        <div className="border-black/10 h-fit border-[2px] px-[8px] py-[8px] rounded-md">
          <div className="px-[8px] w-full border-black/10 border-[2px] py-[10px] rounded-md">
            <button className="font-medium text-[18px] bg-white p-[12px] rounded-md">
              Details
            </button>
          </div>
          <div className="border-black/10 h-fit border-[2px] my-[8px] px-[8px] py-[8px] rounded-md">
            <h1 className="font-medium text-[18px]">Example Link ( URL ) :</h1>
            <p>Except profile picture update URLs all accepted.</p>
          </div>
          <div className="border-black/10 h-fit border-[2px] px-[8px] py-[8px] rounded-md">
            <h1 className="font-medium text-[18px]">Description :</h1>
            <p>From real active accounts.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
