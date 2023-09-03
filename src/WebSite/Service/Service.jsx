import { HeaderOne } from "../../components/HeaderWebsite/HeaderOne";
import { Tasks } from "../../components/P2PTasks/Tasks";

export const Service = () => {
  return (
    <div>
      <HeaderOne>
        <div className="flex items-center gap-2">
          <p>$</p>
          <h1>By buying points with AMF Tokens, you get 50% More</h1>
        </div>
      </HeaderOne>
      <Tasks />
      <p className="text-[14px] font-medium text-center">
        There is no performance to show.
      </p>
      <a href="#" className="text-[14px] font-medium text-center block">
        Click here to get tasks.
      </a>
    </div>
  );
}
