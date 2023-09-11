import { HeaderOne } from "../../components/HeaderWebsite/HeaderOne";
import { Tasks } from "../../components/P2PTasks/Tasks";
import { ServiceTable } from "../../components/ServiceTable/ServiceTable";

export const Service = () => {
  return (
    <div>
      <HeaderOne>
        <div className="flex items-center gap-2 text-[14px] lg:text-[16px]">
          <p>$</p>
          <h1>By buying points with AMF Tokens, you get 50% More</h1>
        </div>
      </HeaderOne>
      <div className="container my-[26px] lg:px-[40px]">
        <h1 className="text-[20px] font-medium lg:text-[28px] lg:font-bold">
          FaceBook 100% Organic (Quality Services)
        </h1>
        <ServiceTable />
      </div>
      <Tasks />
      <p className="text-[14px] font-medium text-center">
        There is no performance to show.
      </p>
      <a href="#" className="text-[14px] font-medium text-center block">
        Click here to get tasks.
      </a>
    </div>
  );
};
