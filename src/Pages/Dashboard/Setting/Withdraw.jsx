import { DateMonth } from "../../../components/Dashboard/Date/DateMonth";
import { Vodafone } from "../../../components/Dashboard/Vodafone/Vodafone";

export const Withdraw = () => {
  return (
    <div className="px-[38px] pt-[16px] relative">
      <h1 className="Text-Header">Setting</h1>
      <div className="mb-[4px] Text-Paragraph">
        <p>
          <span className=" text-blue-400">Dashboard</span> &gt; Setting &gt;
          Withdraw
        </p>
      </div>
      <DateMonth className="top-[17%] left-[8%]" />
      <Vodafone Header="Withdraw" />
    </div>
  );
};
