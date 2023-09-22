import { DateMonth } from "../../../components/Dashboard/Date/DateMonth";
import { FourCard } from "../../../components/Dashboard/FourCard/FourCard";
import { OrderTableDash } from "../../../components/Dashboard/TableDash/OrderTableDash";

export const Order = () => {
  return (
    <div className="px-[38px] pt-[16px] ">
      <h1 className="Text-Header mb-[8px]">
        <span className="text-blue-400">Dashboard</span> &gt; Order
      </h1>
      <DateMonth className="top-[17%] left-[22%]" />
      <FourCard />
      <div className="w-full bg-white h-auto rounded-2xl pb-[18px] pt-[6px] px-[10px]">
        <OrderTableDash />
      </div>
    </div>
  );
};
