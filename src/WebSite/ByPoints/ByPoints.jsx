import HeaderTwo from "../../components/HeaderWebsite/HeaderTwo";
import { FormBuy } from "../../components/Forms/FormBuy";
export const ByPoints = () => {
  return (
    <div>
      <HeaderTwo>
        <h1 className="text-[20px] lg:text-[26px]">Buy Points</h1>
        <p className="font-medium lg:w-[62%]">
          [... Here you can Buy Point and save Your time ...]
        </p>
      </HeaderTwo>
      <FormBuy />
    </div>
  );
};
