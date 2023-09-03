import { HeaderOne } from "../../components/HeaderWebsite/HeaderOne";
import { Tasks } from "../../components/P2PTasks/Tasks";
export const AddOrder = () => {
  return (
    <div >
      <HeaderOne>
        <div className="flex items-center gap-2">
          <p>$</p>
          <h1>By buying points with AMF Tokens, you get 50% More</h1>
        </div>
      </HeaderOne>
      <Tasks />
      <p className="text-[14px] font-medium text-center">You have no Tasks to show.</p>
    </div>
  );
};
